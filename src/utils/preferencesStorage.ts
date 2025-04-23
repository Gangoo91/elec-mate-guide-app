
export const PreferencesStorage = {
  getRole: (): string | null => {
    try {
      return localStorage.getItem('preferredRole');
    } catch (error) {
      console.error("Error reading from localStorage:", error);
      return null;
    }
  },

  setRole: (role: string | null): void => {
    try {
      const finalRole = role || 'apprentice';
      localStorage.setItem('preferredRole', finalRole);
      
      // Set backup cookie
      document.cookie = `preferredRole=${finalRole}; path=/; max-age=3600; SameSite=Strict`;
      
      // Dispatch event for cross-tab sync
      const event = new Event('preferredRoleChange');
      window.dispatchEvent(event);
    } catch (error) {
      console.error("Error writing to localStorage:", error);
    }
  },

  recoverFromCookie: (): string | null => {
    try {
      const cookies = document.cookie.split(';');
      const roleCookie = cookies.find(c => c.trim().startsWith('preferredRole='));
      if (roleCookie) {
        return roleCookie.split('=')[1].trim();
      }
    } catch (error) {
      console.error("Error recovering from cookie:", error);
    }
    return null;
  }
};
