
import { useState, useMemo } from 'react';

export type Role = {
  label: string;
  icon: React.ReactNode;
  path: string;
  description: string;
};

export const useRoleFilter = (roles: Role[]) => {
  const [query, setQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const filteredRoles = useMemo(() => 
    roles.filter((role) =>
      role.label.toLowerCase().includes(query.toLowerCase())
    ),
    [roles, query]
  );

  return {
    query,
    setQuery,
    isSearchFocused,
    setIsSearchFocused,
    filteredRoles
  };
};
