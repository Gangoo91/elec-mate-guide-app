
import { useState, useEffect, useCallback } from 'react';

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
        
        if (storedPreferredRole) {
          setPreferences({
            preferredRole: storedPreferredRole,
          });
        }
      } catch (error) {
        console.error("Error accessing localStorage:", error);
      }
    };
    
    loadPreferences();
    
    // Listen for localStorage changes from other tabs
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'preferredRole') {
        console.log("Storage event detected for preferredRole:", e.newValue);
        setPreferences(prev => ({
          ...prev,
          preferredRole: e.newValue,
        }));
      }
    };
    
    // Add event listener for cross-tab changes
    window.addEventListener('storage', handleStorageChange);
    
    // Return cleanup function
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  // Update preferredRole and persist to localStorage
  const setPreferredRole = useCallback((role: string | null) => {
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
      
      // Broadcast a custom event for same-window updates
      const event = new Event('preferredRoleChange');
      window.dispatchEvent(event);
    } catch (error) {
      console.error("Error updating localStorage:", error);
    }
  }, []);

  return {
    preferences,
    setPreferredRole,
  };
};
