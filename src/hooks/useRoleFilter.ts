
import { useState, useEffect, useMemo } from 'react';

export function useRoleFilter(allRoles: any[]) {
  const [query, setQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  
  // Filter roles based on search query
  const filteredRoles = useMemo(() => {
    if (!query.trim()) return allRoles;
    
    const normalizedQuery = query.toLowerCase().trim();
    
    return allRoles.filter(role => {
      const matchesLabel = role.label.toLowerCase().includes(normalizedQuery);
      const matchesDescription = role.description?.toLowerCase().includes(normalizedQuery);
      
      return matchesLabel || matchesDescription;
    });
  }, [query, allRoles]);
  
  // Make sure we're not returning an empty array if there are roles available
  useEffect(() => {
    if (filteredRoles.length === 0 && allRoles.length > 0 && query.trim() !== '') {
      console.log("No matching roles found, but roles exist");
    }
  }, [filteredRoles, allRoles, query]);
  
  return {
    query,
    setQuery,
    isSearchFocused,
    setIsSearchFocused,
    filteredRoles: filteredRoles.length > 0 ? filteredRoles : allRoles,
  };
}
