
import React, { useState, useCallback, useMemo } from "react";
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import FAQSections from "@/components/faq/FAQSections";
import FAQSearchBar from "@/components/faq/FAQSearchBar";
import NoResultsFound from "@/components/faq/NoResultsFound";
import { faqItems, FAQSection } from "@/components/faq/faqData";
import FAQCategoryTabs from "@/components/faq/FAQCategoryTabs";
import { HelpCircle, Users, Wrench, Briefcase, CreditCard, HeadphonesIcon, Heart } from "lucide-react";

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  
  const handleSetSearchQuery = useCallback((query: string) => {
    setSearchQuery(query);
  }, []);

  const handleClearSearch = useCallback(() => {
    setSearchQuery("");
  }, []);
  
  const handleCategoryChange = useCallback((category: string) => {
    setActiveCategory(category);
    setSearchQuery(""); // Clear search when changing categories
  }, []);
  
  // Add icons to FAQ sections
  const faqSectionsWithIcons = useMemo(() => {
    return faqItems.map(section => {
      let icon;
      switch (section.category) {
        case 'general':
          icon = <HelpCircle className="h-5 w-5 text-[#FFC900]" />;
          break;
        case 'apprentices':
          icon = <Users className="h-5 w-5 text-[#FFC900]" />;
          break;
        case 'electricians':
          icon = <Wrench className="h-5 w-5 text-[#FFC900]" />;
          break;
        case 'employers':
          icon = <Briefcase className="h-5 w-5 text-[#FFC900]" />;
          break;
        case 'account':
          icon = <CreditCard className="h-5 w-5 text-[#FFC900]" />;
          break;
        case 'support':
          icon = <HeadphonesIcon className="h-5 w-5 text-[#FFC900]" />;
          break;
        case 'wellness':
          icon = <Heart className="h-5 w-5 text-[#FFC900]" />;
          break;
        default:
          icon = <HelpCircle className="h-5 w-5 text-[#FFC900]" />;
      }
      return { ...section, icon };
    });
  }, []);
  
  const filteredFAQItems = useMemo(() => {
    if (!searchQuery && activeCategory === "all") return faqSectionsWithIcons;
    
    let filtered = [...faqSectionsWithIcons];
    
    // Filter by category first if not "all"
    if (activeCategory !== "all") {
      filtered = filtered.filter(section => 
        section.category.toLowerCase() === activeCategory.toLowerCase()
      );
    }
    
    // Then apply search filter if needed
    if (searchQuery) {
      filtered = filtered.map(section => ({
        ...section,
        questions: section.questions.filter(item => 
          item.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
          item.answer.toLowerCase().includes(searchQuery.toLowerCase())
        )
      })).filter(section => section.questions.length > 0);
    }
    
    return filtered;
  }, [searchQuery, activeCategory, faqSectionsWithIcons]);
  
  // Extract all unique categories from FAQ data
  const categories = useMemo(() => {
    const uniqueCategories = new Set<string>();
    faqItems.forEach(item => {
      uniqueCategories.add(item.category);
    });
    return ["all", ...Array.from(uniqueCategories)];
  }, []);
    
  return (
    <MainLayout>
      <div className="container py-8 px-4 md:px-6">
        <PageHeader
          title="Frequently Asked Questions"
          description="Comprehensive support and guidance for UK electrical professionals"
        />
        
        <FAQSearchBar 
          searchQuery={searchQuery} 
          setSearchQuery={handleSetSearchQuery} 
        />
        
        <FAQCategoryTabs 
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={handleCategoryChange}
        />
        
        <div className="mt-8 space-y-8 max-w-4xl mx-auto">
          <FAQSections filteredFAQItems={filteredFAQItems} />
          
          {filteredFAQItems.length === 0 || filteredFAQItems.every(section => section.questions.length === 0) ? (
            <NoResultsFound onClearSearch={handleClearSearch} />
          ) : null}
        </div>
      </div>
    </MainLayout>
  );
};

export default FAQ;
