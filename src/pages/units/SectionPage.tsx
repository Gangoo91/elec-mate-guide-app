
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import LessonContent from "@/components/units/LessonContent";
import { sections301 } from "@/data/units/sections/unit301Sections";
import { sections302 } from "@/data/units/sections/unit302Sections";
import { sections303 } from "@/data/units/sections/unit303Sections";
import { sections304 } from "@/data/units/sections/unit304Sections";
import { sections305 } from "@/data/units/sections/unit305Sections";
import { sections308 } from "@/data/units/sections/unit308Sections";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import LoadingSpinner from "@/components/LoadingSpinner";
import { useErrorHandler } from "@/hooks/useErrorHandler";

interface DbSectionData {
  id: string;
  unit_id: string;
  section_title: string;
  content: any;
}

const SectionPage = () => {
  const { unitId, sectionId } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { handleError } = useErrorHandler();
  const [isLoading, setIsLoading] = useState(true);
  const [dbSectionContent, setDbSectionContent] = useState<DbSectionData | null>(null);
  const [fallbackToLocalData, setFallbackToLocalData] = useState(false);
  
  useEffect(() => {
    const fetchSectionFromDb = async () => {
      if (!unitId || !sectionId) {
        setFallbackToLocalData(true);
        setIsLoading(false);
        return;
      }
      
      try {
        // Extract section number from sectionId (e.g., "1.1" -> 1)
        const sectionNumber = parseInt(sectionId.split('.')[0], 10);
        
        // Get all sections for this unit and filter manually instead of using .single()
        const { data, error } = await supabase
          .from('course_content')
          .select('*')
          .eq('unit_id', unitId)
          .eq('order_index', sectionNumber - 1);
        
        if (error) {
          console.error('Error fetching section from DB:', error);
          setFallbackToLocalData(true);
        } else if (data && data.length > 0) {
          console.log('Section content loaded from DB:', data[0]);
          setDbSectionContent(data[0]);
        } else {
          console.log('No section found in DB, falling back to local data');
          setFallbackToLocalData(true);
        }
      } catch (error) {
        handleError(error, 'Exception loading section content');
        setFallbackToLocalData(true);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchSectionFromDb();
  }, [unitId, sectionId, handleError]);
  
  // Get the appropriate sections based on the unitId
  const getSectionContent = () => {
    if (!unitId || !sectionId) return null;
    
    switch (unitId) {
      case "301":
        return sections301[sectionId];
      case "302":
        return sections302[sectionId];
      case "303":
        return sections303[sectionId];
      case "304":
        return sections304[sectionId];
      case "305":
        return sections305[sectionId];
      case "308":
        return sections308[sectionId];
      default:
        return null;
    }
  };
  
  const sectionContent = fallbackToLocalData ? getSectionContent() : null;
  
  useEffect(() => {
    if (sectionContent) {
      toast({
        title: "Content Loaded",
        description: `Now viewing: ${sectionContent.title}`,
      });
    } else if (dbSectionContent) {
      toast({
        title: "Content Loaded",
        description: `Now viewing: ${dbSectionContent.section_title}`,
      });
    }
  }, [sectionContent, dbSectionContent, toast]);
  
  const handleBackClick = () => {
    if (unitId) {
      navigate(`/apprentices/study-materials/city-guilds/level-3/${unitId}`);
    } else {
      navigate('/apprentices/study-materials/city-guilds/level-3');
    }
  };

  if (isLoading) {
    return (
      <MainLayout>
        <div className="container px-4 py-8 flex justify-center items-center" style={{ minHeight: '60vh' }}>
          <LoadingSpinner />
        </div>
      </MainLayout>
    );
  }

  if (!sectionContent && !dbSectionContent) {
    return (
      <MainLayout>
        <div className="container px-4 py-8">
          <PageHeader 
            title="Section Not Found"
            description="Sorry, we couldn't find the content for this section"
            customBackAction={handleBackClick}
          />
        </div>
      </MainLayout>
    );
  }

  // If using DB content
  if (dbSectionContent) {
    // Parse content from JSON if needed
    let contentElement = null;
    let detailedContentElement = null;
    
    try {
      if (typeof dbSectionContent.content === 'object') {
        // Try to extract content and detailedContent from the JSON structure
        const { content, detailedContent } = dbSectionContent.content;
        contentElement = content ? <div dangerouslySetInnerHTML={{ __html: content }} /> : "No content available";
        detailedContentElement = detailedContent ? <div dangerouslySetInnerHTML={{ __html: detailedContent }} /> : null;
      } else if (typeof dbSectionContent.content === 'string') {
        contentElement = <div dangerouslySetInnerHTML={{ __html: dbSectionContent.content }} />;
      }
    } catch (e) {
      console.error('Error parsing content:', e);
      contentElement = <div>Error loading content</div>;
    }
    
    return (
      <MainLayout>
        <div className="container px-4 py-8">
          <PageHeader 
            title={dbSectionContent.section_title}
            description="View detailed section content below"
            customBackAction={handleBackClick}
          />
          <div className="mt-8">
            <LessonContent title="Learning Content">
              {contentElement}
            </LessonContent>
            
            {detailedContentElement && (
              <LessonContent title="Detailed Content">
                {detailedContentElement}
              </LessonContent>
            )}
          </div>
        </div>
      </MainLayout>
    );
  }

  // Fallback to local content
  return (
    <MainLayout>
      <div className="container px-4 py-8">
        <PageHeader 
          title={sectionContent?.title || ""}
          description={sectionContent?.description || ""}
          customBackAction={handleBackClick}
        />
        <div className="mt-8">
          <LessonContent title="Learning Content">
            {sectionContent?.content}
          </LessonContent>
        </div>
      </div>
    </MainLayout>
  );
};

export default SectionPage;
