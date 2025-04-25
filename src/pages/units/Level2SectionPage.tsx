
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import LessonContent from "@/components/units/LessonContent";
import { sections202 } from "@/data/units/sections/unit202Sections";
import { sections203 } from "@/data/units/sections/unit203Sections";
import { sections204 } from "@/data/units/sections/unit204Sections";
import { sections210 } from "@/data/units/sections/unit210Sections";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import LoadingSpinner from "@/components/LoadingSpinner";

interface SectionData {
  title: string;
  description: string;
  content: React.ReactNode;
  detailedContent?: React.ReactNode;
}

interface DbSectionData {
  id: string;
  unit_id: string;
  section_title: string;
  content: any;
}

const Level2SectionPage = () => {
  const { unitId, sectionId } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(true);
  const [dbSectionContent, setDbSectionContent] = useState<DbSectionData | null>(null);
  const [fallbackToLocalData, setFallbackToLocalData] = useState(false);
  
  console.log("Level2SectionPage - unitId:", unitId);
  console.log("Level2SectionPage - sectionId:", sectionId);
  
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
        
        const { data, error } = await supabase
          .from('course_content')
          .select('*')
          .eq('unit_id', unitId)
          .eq('order_index', sectionNumber - 1) // Adjust for zero-based indexing
          .single();
        
        if (error) {
          console.error('Error fetching section from DB:', error);
          setFallbackToLocalData(true);
          toast({
            title: "Using Local Data",
            description: "Could not load content from database. Using local files instead.",
          });
        } else if (data) {
          console.log('Section content loaded from DB:', data);
          setDbSectionContent(data);
        } else {
          setFallbackToLocalData(true);
        }
      } catch (error) {
        console.error('Exception loading section content:', error);
        setFallbackToLocalData(true);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchSectionFromDb();
  }, [unitId, sectionId, toast]);
  
  const getSectionContent = () => {
    if (!unitId || !sectionId) return null;
    
    console.log("Looking for section content in unit:", unitId);
    
    switch (unitId) {
      case "202":
        console.log("Available sections in 202:", Object.keys(sections202));
        return sections202[sectionId];
      case "203":
        return sections203[sectionId];
      case "204":
        return sections204[sectionId];
      case "210":
        return sections210[sectionId];
      default:
        console.log("Unit not found:", unitId);
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
      navigate(`/apprentices/study-materials/city-guilds/level-2/core-units/${unitId}`);
    } else {
      navigate('/apprentices/study-materials/city-guilds/level-2/core-units');
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
            <LessonContent title="Overview">
              {contentElement}
            </LessonContent>
            
            {detailedContentElement && (
              <LessonContent title="Detailed Learning Material">
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
          <LessonContent title="Overview">
            {sectionContent?.content}
          </LessonContent>
          
          {sectionContent?.detailedContent && (
            <LessonContent title="Detailed Learning Material">
              {sectionContent.detailedContent}
            </LessonContent>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default Level2SectionPage;
