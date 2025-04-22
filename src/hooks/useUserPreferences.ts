
import { useState, useEffect } from 'react';

type UserPreferences = {
  preferredRole: string | null;
};

/**
 * Hook for managing persistent user preferences
 */
export const useUserPreferences = () => {
  const [preferences, setPreferences] = useState<UserPreferences>({
    preferredRole: null,
  });

  // Load preferences from localStorage on mount
  useEffect(() => {
    const storedPreferredRole = localStorage.getItem('preferredRole');
    setPreferences({
      preferredRole: storedPreferredRole,
    });
    
    // Listen for localStorage changes from other components
    const handleStorageChange = () => {
      const updatedRole = localStorage.getItem('preferredRole');
      setPreferences(prev => ({
        ...prev,
        preferredRole: updatedRole,
      }));
    };
    
    // Add event listener for localStorage changes
    window.addEventListener('storage', handleStorageChange);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  // Update preferredRole and persist to localStorage
  const setPreferredRole = (role: string | null) => {
    if (role) {
      localStorage.setItem('preferredRole', role);
    } else {
      localStorage.removeItem('preferredRole');
    }
    
    setPreferences(prev => ({
      ...prev,
      preferredRole: role,
    }));
    
    // Dispatch storage event to notify other components
    window.dispatchEvent(new Event('storage'));
  };

  return {
    preferences,
    setPreferredRole,
  };
};
