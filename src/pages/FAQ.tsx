
import React, { useState, useCallback, useMemo } from "react";
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import FAQSections from "@/components/faq/FAQSections";
import FAQSearchBar from "@/components/faq/FAQSearchBar";
import NoResultsFound from "@/components/faq/NoResultsFound";
import { faqItems } from "@/components/faq/faqData";

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const handleSetSearchQuery = useCallback((query: string) => {
    setSearchQuery(query);
  }, []);

  const handleClearSearch = useCallback(() => {
    setSearchQuery("");
  }, []);
  
  const filteredFAQItems = useMemo(() => {
    if (!searchQuery) return faqItems;
    
    return faqItems
      .map(section => ({
        ...section,
        questions: section.questions.filter(item => 
          item.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
          item.answer.toLowerCase().includes(searchQuery.toLowerCase())
        )
      }))
      .filter(section => section.questions.length > 0);
  }, [searchQuery]);
    
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
