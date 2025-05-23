
import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom';
import routes from './routes';
import { AuthProvider } from '@/hooks/useAuth';
import { Toaster } from '@/components/ui/toaster';
import ErrorBoundary from '@/components/ErrorBoundary';
import { NotificationProvider } from '@/contexts/NotificationContext';
import { ChatProvider } from '@/contexts/ChatContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';

// Create a QueryClient with reasonable defaults
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      staleTime: 1000 * 60 * 5, // 5 minutes
      refetchOnWindowFocus: false,
      // For React Query v5, configure error handling differently
      meta: {
        onError: (error: unknown) => {
          console.error('Query error:', error);
        }
      }
    },
  },
});

// Router component to handle navigation
const AppRoutes = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.log('Current route:', location.pathname);
    
    // Store current location on page changes to restore after refresh
    if (location.pathname !== '/') {
      sessionStorage.setItem('lastPath', location.pathname);
    }
  }, [location.pathname]);

  return (
    <Routes>
      {routes.map((route, index) => {
        // Handle nested routes
        if (route.children) {
          return (
            <Route key={index} path={route.path} element={route.element}>
              {route.children.map((childRoute, childIndex) => (
                <Route 
                  key={`${index}-${childIndex}`} 
                  path={childRoute.path} 
                  element={childRoute.element} 
                />
              ))}
            </Route>
          );
        }
        
        // Handle regular routes
        return <Route key={index} path={route.path} element={route.element} />;
      })}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

const App = () => {
  useEffect(() => {
    // Log when the app mounts to help with debugging
    console.log('App mounted, initializing application');
    
    // Clean up any stale cache that might be causing navigation issues
    const cleanStaleCache = () => {
      if ('caches' in window) {
        caches.keys().then(cacheNames => {
          cacheNames.forEach(cacheName => {
            if (cacheName.includes('runtime')) {
              console.log('Cleaning stale cache:', cacheName);
              caches.delete(cacheName);
            }
          });
        });
      }
    };
    
    cleanStaleCache();
    
    // Add a handler for when the page is reloaded/refreshed
    const handleBeforeUnload = () => {
      // Store current location to restore after refresh
      const currentPath = window.location.pathname;
      if (currentPath !== '/') {
        sessionStorage.setItem('lastPath', currentPath);
        console.log('Stored path before unload:', currentPath);
      }
    };
    
    window.addEventListener('beforeunload', handleBeforeUnload);
    
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <NotificationProvider>
            <ChatProvider>
              <BrowserRouter>
                <AppRoutes />
                <Toaster />
              </BrowserRouter>
            </ChatProvider>
          </NotificationProvider>
        </AuthProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
};

export default App;
