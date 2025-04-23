
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
  const [isLoaded, setIsLoaded] = useState(false);

  // Load preferences from localStorage on mount
  useEffect(() => {
    const loadPreferences = () => {
      try {
        const storedPreferredRole = localStorage.getItem('preferredRole');
        console.log("Loading preferences from localStorage:", storedPreferredRole);
        
        setPreferences({
          preferredRole: storedPreferredRole,
        });
        
        setIsLoaded(true);
      } catch (error) {
        console.error("Error accessing localStorage:", error);
        setIsLoaded(true);
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
    
    // Listen for custom events for same-window updates
    const handlePreferredRoleChange = () => {
      try {
        const newRole = localStorage.getItem('preferredRole');
        console.log("Custom event detected for preferredRole:", newRole);
        setPreferences(prev => ({
          ...prev,
          preferredRole: newRole,
        }));
      } catch (error) {
        console.error("Error handling preferredRole change:", error);
      }
    };
    
    // Add event listeners
    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('preferredRoleChange', handlePreferredRoleChange);
    
    // Also listen for page load events to refresh preferences
    const handlePageLoad = () => {
      loadPreferences();
    };
    
    window.addEventListener('load', handlePageLoad);
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') {
        loadPreferences();
      }
    });
    
    // Return cleanup function
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('preferredRoleChange', handlePreferredRoleChange);
      window.removeEventListener('load', handlePageLoad);
    };
  }, []);

  // Update preferredRole and persist to localStorage
  const setPreferredRole = useCallback((role: string | null) => {
    try {
      console.log("Setting preferredRole:", role);
      
      if (role) {
        localStorage.setItem('preferredRole', role);
        
        // Set a backup cookie as well
        document.cookie = `preferredRole=${role || ''}; path=/; max-age=3600; SameSite=Strict`;
      } else {
        localStorage.removeItem('preferredRole');
        document.cookie = `preferredRole=; path=/; max-age=0; SameSite=Strict`;
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

  // Additional method to force refresh preferences from localStorage
  const refreshPreferences = useCallback(() => {
    try {
      const storedPreferredRole = localStorage.getItem('preferredRole');
      console.log("Refreshing preferences from localStorage:", storedPreferredRole);
      
      setPreferences({
        preferredRole: storedPreferredRole,
      });
    } catch (error) {
      console.error("Error refreshing preferences:", error);
      
      // Try to recover from cookie backup
      try {
        const cookies = document.cookie.split(';');
        const roleCookie = cookies.find(c => c.trim().startsWith('preferredRole='));
        if (roleCookie) {
          const roleValue = roleCookie.split('=')[1].trim();
          if (roleValue) {
            console.log("Recovering preferredRole from cookie:", roleValue);
            localStorage.setItem('preferredRole', roleValue);
            setPreferences({
              preferredRole: roleValue,
            });
          }
        }
      } catch (e) {
        console.error("Error recovering from cookie:", e);
      }
    }
  }, []);

  return {
    preferences,
    setPreferredRole,
    isLoaded,
    refreshPreferences
  };
};
