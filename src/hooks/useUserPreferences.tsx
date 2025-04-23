
import { useState, useEffect, useCallback, createContext, useContext } from 'react';
import { UserPreferences, UserPreferencesContextType } from '@/types/userPreferences';
import { PreferencesStorage } from '@/utils/preferencesStorage';

const UserPreferencesContext = createContext<UserPreferencesContextType>({
  preferences: { preferredRole: 'apprentice' },
  setPreferredRole: () => {},
  isLoaded: false,
  refreshPreferences: () => {}
});

export const useUserPreferences = () => useContext(UserPreferencesContext);

export const UserPreferencesProvider = ({ children }: { children: React.ReactNode }) => {
  const [preferences, setPreferences] = useState<UserPreferences>({
    preferredRole: 'apprentice',
  });
  const [isLoaded, setIsLoaded] = useState(false);

  // Load preferences
  useEffect(() => {
    const loadPreferences = () => {
      const storedRole = PreferencesStorage.getRole();
      const finalRole = storedRole || 'apprentice';
      
      setPreferences({
        preferredRole: finalRole,
      });
      
      if (!storedRole) {
        PreferencesStorage.setRole('apprentice');
      }
      
      setIsLoaded(true);
    };

    loadPreferences();

    // Event listeners for sync
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'preferredRole') {
        setPreferences(prev => ({
          ...prev,
          preferredRole: e.newValue || 'apprentice',
        }));
      }
    };

    const handlePreferredRoleChange = () => {
      const newRole = PreferencesStorage.getRole();
      setPreferences(prev => ({
        ...prev,
        preferredRole: newRole || 'apprentice',
      }));
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('preferredRoleChange', handlePreferredRoleChange);
    window.addEventListener('load', loadPreferences);
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') {
        loadPreferences();
      }
    });

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('preferredRoleChange', handlePreferredRoleChange);
      window.removeEventListener('load', loadPreferences);
    };
  }, []);

  const setPreferredRole = useCallback((role: string | null) => {
    PreferencesStorage.setRole(role);
    setPreferences(prev => ({
      ...prev,
      preferredRole: role || 'apprentice',
    }));
  }, []);

  const refreshPreferences = useCallback(() => {
    const storedRole = PreferencesStorage.getRole() || PreferencesStorage.recoverFromCookie();
    const finalRole = storedRole || 'apprentice';
    
    setPreferences({
      preferredRole: finalRole,
    });
    
    if (!storedRole) {
      PreferencesStorage.setRole('apprentice');
    }
  }, []);

  return (
    <UserPreferencesContext.Provider value={{
      preferences,
      setPreferredRole,
      isLoaded,
      refreshPreferences
    }}>
      {children}
    </UserPreferencesContext.Provider>
  );
};
