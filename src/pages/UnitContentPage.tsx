
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { unitContent } from "@/data/unitContent";
import SectionCard from "@/components/units/SectionCard";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";
import LoadingSpinner from "@/components/LoadingSpinner";
import { useErrorHandler } from "@/hooks/useErrorHandler";

interface CourseSection {
  id: string;
  section_title: string;
  content: any;
  order_index: number;
}

const UnitContentPage = () => {
  const navigate = useNavigate();
  const { unitId } = useParams<{ unitId: string }>();
  const { toast } = useToast();
  const { handleError } = useErrorHandler();
  const [isLoading, setIsLoading] = useState(true);
  const [sections, setSections] = useState<CourseSection[]>([]);
  const [fallbackToLocalData, setFallbackToLocalData] = useState(false);
  
  const extractedUnitId = unitId ? unitId.replace('unit-', '') : '';
  
  // Get unit information from local data as fallback
  const currentUnit = extractedUnitId && unitContent[extractedUnitId] ? unitContent[extractedUnitId] : null;
  
  useEffect(() => {
    const fetchSections = async () => {
      setIsLoading(true);
      
      try {
        if (!extractedUnitId) {
          setFallbackToLocalData(true);
          setIsLoading(false);
          return;
        }
        
        const { data, error } = await supabase
          .from('course_content')
          .select('*')
          .eq('unit_id', extractedUnitId)
          .order('order_index', { ascending: true });
          
        if (error) {
          console.error('Error fetching course content:', error);
          toast({
            title: "Error Loading Content",
            description: "Could not load course content from database. Using local data instead.",
            variant: "destructive",
          });
          setFallbackToLocalData(true);
        } else if (data && data.length > 0) {
          console.log('Course content loaded from DB:', data);
          setSections(data);
        } else {
          console.log('No content found in DB, using local data');
          setFallbackToLocalData(true);
        }
      } catch (error) {
        handleError(error, 'Exception while loading course content');
        setFallbackToLocalData(true);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchSections();
  }, [extractedUnitId, toast, handleError]);
  
  const handleBackClick = () => {
    if (extractedUnitId && (extractedUnitId === "301" || extractedUnitId === "302" || extractedUnitId === "303" || extractedUnitId === "304" || extractedUnitId === "305" || extractedUnitId === "308")) {
      navigate('/apprentices/study-materials/city-guilds/level-3');
    } else {
      navigate('/apprentices/study-materials/city-guilds/level-2/core-units');
    }
  };

  if (!extractedUnitId || (!currentUnit && !sections.length)) {
    return (
      <MainLayout>
        <div className="container px-4 py-2 md:py-4 pt-16 md:pt-16">
          <PageHeader 
            title="Unit Not Found"
            description="Sorry, we couldn't find content for this unit"
            customBackAction={handleBackClick}
          />
        </div>
      </MainLayout>
    );
  }

  const isLevel3 = ["301", "302", "303", "304", "305", "308"].includes(extractedUnitId);

  if (isLoading) {
    return (
      <MainLayout>
        <div className="container px-4 py-2 md:py-4 pt-16 md:pt-16 flex justify-center items-center" style={{ minHeight: '60vh' }}>
          <LoadingSpinner />
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4 pt-16 md:pt-16">
        <PageHeader 
          title={`Unit ${extractedUnitId} - ${currentUnit?.title || ''}`}
          description={currentUnit?.description || ''}
          customBackAction={handleBackClick}
        />
        
        <div className="mt-8">
          {fallbackToLocalData && currentUnit ? (
            // Use local data as fallback
            currentUnit.sections.map((section, index) => {
              // Match the section IDs with what's in the sections202 file (1.1, 1.2, etc.)
              const sectionId = `${index + 1}.${index + 1}`;
              
              // Create a description from the content if it's a React element
              let description = '';
              if (typeof section.content === 'object') {
                // For React elements, we can't easily convert to string, so use a generic description
                description = `Section ${sectionId}: ${section.title}`;
              } else {
                // For string content, truncate it
                description = section.content.toString().substring(0, 100) + "...";
              }
              
              return (
                <SectionCard
                  key={index}
                  sectionId={sectionId}
                  unitId={extractedUnitId}
                  title={section.title}
                  description={description} 
                  isLevel3={isLevel3}
                />
              );
            })
          ) : (
            // Use data from Supabase
            sections.map((section, index) => {
              // Create section IDs matching the pattern from local data
              const sectionId = `${index + 1}.${index + 1}`;
              
              let description = '';
              try {
                if (typeof section.content === 'object') {
                  // Try to extract content and detailedContent from the JSON structure
                  if (section.content.content) {
                    if (typeof section.content.content === 'string') {
                      description = section.content.content.substring(0, 100) + "...";
                    } else {
                      description = JSON.stringify(section.content.content).substring(0, 100) + "...";
                    }
                  } else {
                    description = JSON.stringify(section.content).substring(0, 100) + "...";
                  }
                } else if (typeof section.content === 'string') {
                  description = section.content.substring(0, 100) + "...";
                }
              } catch (e) {
                console.error('Error creating description:', e);
                description = "Content preview not available";
              }
              
              return (
                <SectionCard
                  key={section.id}
                  sectionId={sectionId}
                  unitId={extractedUnitId}
                  title={section.section_title}
                  description={description} 
                  isLevel3={isLevel3}
                />
              );
            })
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default UnitContentPage;
