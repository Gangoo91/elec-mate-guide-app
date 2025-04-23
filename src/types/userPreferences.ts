
export type UserPreferences = {
  preferredRole: string | null;
};

export type UserPreferencesContextType = {
  preferences: UserPreferences;
  setPreferredRole: (role: string | null) => void;
  isLoaded: boolean;
  refreshPreferences: () => void;
};
