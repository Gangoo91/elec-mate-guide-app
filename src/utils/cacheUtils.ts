
/**
 * Utility functions to help with cache management and prevention
 */

export const generateCacheKey = () => {
  return `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
};

export const clearLocalCache = () => {
  // Clear any cached data that might be affecting the dashboard
  try {
    // Safe clear of sessionStorage items related to dashboard
    const keysToRemove: string[] = [];
    for (let i = 0; i < sessionStorage.length; i++) {
      const key = sessionStorage.key(i);
      if (key && (key.includes('dashboard') || key.includes('apprentice') || key.includes('electrician'))) {
        keysToRemove.push(key);
      }
    }
    keysToRemove.forEach(key => sessionStorage.removeItem(key));
    
    console.log('Cache cleared successfully');
    return true;
  } catch (error) {
    console.error('Failed to clear cache:', error);
    return false;
  }
};
