
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
    const loadPreferences = () => {
      try {
        const storedPreferredRole = localStorage.getItem('preferredRole');
        console.log("Loading preferences from localStorage:", storedPreferredRole);
        setPreferences({
          preferredRole: storedPreferredRole,
        });
      } catch (error) {
        console.error("Error accessing localStorage:", error);
      }
    };
    
    loadPreferences();
    
    // Listen for localStorage changes from other components
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'preferredRole') {
        console.log("Storage event detected for preferredRole:", e.newValue);
        setPreferences(prev => ({
          ...prev,
          preferredRole: e.newValue,
        }));
      }
    };
    
    // Also create a custom event listener for same-window updates
    const handleCustomStorageChange = () => {
      const updatedRole = localStorage.getItem('preferredRole');
      console.log("Custom storage event detected for preferredRole:", updatedRole);
      setPreferences(prev => ({
        ...prev,
        preferredRole: updatedRole,
      }));
    };
    
    // Add event listeners
    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('preferredRoleChange', handleCustomStorageChange);
    
    // Return cleanup function
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('preferredRoleChange', handleCustomStorageChange);
    };
  }, []);

  // Update preferredRole and persist to localStorage
  const setPreferredRole = (role: string | null) => {
    try {
      console.log("Setting preferredRole:", role);
      
      if (role) {
        localStorage.setItem('preferredRole', role);
      } else {
        localStorage.removeItem('preferredRole');
      }
      
      setPreferences(prev => ({
        ...prev,
        preferredRole: role,
      }));
      
      // Dispatch custom event to notify other components in the same window
      window.dispatchEvent(new Event('preferredRoleChange'));
    } catch (error) {
      console.error("Error updating localStorage:", error);
    }
  };

  return {
    preferences,
    setPreferredRole,
  };
};
