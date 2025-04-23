
import { useState, useEffect, useCallback, createContext, useContext } from 'react';

type UserPreferences = {
  preferredRole: string | null;
};

type UserPreferencesContextType = {
  preferences: UserPreferences;
  setPreferredRole: (role: string | null) => void;
  isLoaded: boolean;
  refreshPreferences: () => void;
};

const UserPreferencesContext = createContext<UserPreferencesContextType>({
  preferences: { preferredRole: 'apprentice' },
  setPreferredRole: () => {},
  isLoaded: false,
  refreshPreferences: () => {}
});

export const useUserPreferences = () => useContext(UserPreferencesContext);

export const UserPreferencesProvider = ({ children }: { children: React.ReactNode }) => {
  const [preferences, setPreferences] = useState<UserPreferences>({
    preferredRole: 'apprentice', // Default to apprentice role
  });
  const [isLoaded, setIsLoaded] = useState(false);

  // Load preferences from localStorage on mount
  useEffect(() => {
    const loadPreferences = () => {
      try {
        const storedPreferredRole = localStorage.getItem('preferredRole');
        console.log("Loading preferences from localStorage:", storedPreferredRole);
        
        // Always default to 'apprentice' if no role is set or if it's null
        const finalRole = storedPreferredRole || 'apprentice';
        
        setPreferences({
          preferredRole: finalRole,
        });
        
        // Ensure there's always the default role
        if (!storedPreferredRole) {
          localStorage.setItem('preferredRole', 'apprentice');
        }
        
        setIsLoaded(true);
      } catch (error) {
        console.error("Error accessing localStorage:", error);
        // Set default preferences if localStorage fails
        setPreferences({
          preferredRole: 'apprentice',
        });
        
        // Try to set the default in localStorage
        try {
          localStorage.setItem('preferredRole', 'apprentice');
        } catch (e) {
          console.error("Failed to write to localStorage:", e);
        }
        
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
          preferredRole: e.newValue || 'apprentice',
        }));
      }
    };
    
    // Listen for custom events for same-window updates
    const handlePreferredRoleChange = () => {
      try {
        const newRole = localStorage.getItem('preferredRole') || 'apprentice';
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
      
      // Always default to 'apprentice' if null is passed
      const finalRole = role || 'apprentice';
      
      localStorage.setItem('preferredRole', finalRole);
      
      // Set a backup cookie as well
      document.cookie = `preferredRole=${finalRole}; path=/; max-age=3600; SameSite=Strict`;
      
      setPreferences(prev => ({
        ...prev,
        preferredRole: finalRole,
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
      
      // Always default to 'apprentice' if no role is set or if it's null
      const finalRole = storedPreferredRole || 'apprentice';
      
      setPreferences({
        preferredRole: finalRole,
      });
      
      // Ensure the default is set in localStorage
      if (!storedPreferredRole) {
        localStorage.setItem('preferredRole', 'apprentice');
      }
    } catch (error) {
      console.error("Error refreshing preferences:", error);
      
      // Try to recover from cookie backup
      try {
        const cookies = document.cookie.split(';');
        const roleCookie = cookies.find(c => c.trim().startsWith('preferredRole='));
        if (roleCookie) {
          const roleValue = roleCookie.split('=')[1].trim() || 'apprentice';
          console.log("Recovering preferredRole from cookie:", roleValue);
          localStorage.setItem('preferredRole', roleValue);
          setPreferences({
            preferredRole: roleValue,
          });
        } else {
          // If no cookie, set to default
          localStorage.setItem('preferredRole', 'apprentice');
          setPreferences({
            preferredRole: 'apprentice',
          });
        }
      } catch (e) {
        console.error("Error recovering from cookie:", e);
        // Final fallback
        setPreferences({
          preferredRole: 'apprentice',
        });
      }
    }
  }, []);

  const contextValue = {
    preferences,
    setPreferredRole,
    isLoaded,
    refreshPreferences
  };

  return (
    <UserPreferencesContext.Provider value={contextValue}>
      {children}
    </UserPreferencesContext.Provider>
  );
};
