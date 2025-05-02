
import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import routes from './routes';
import { AuthProvider } from '@/hooks/useAuth';
import { Toaster } from '@/components/ui/toaster';
import ErrorBoundary from '@/components/ErrorBoundary';
import { NotificationProvider } from '@/contexts/NotificationContext';
import { ChatProvider } from '@/contexts/ChatContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';

// Create a new QueryClient instance with forced refetch settings
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true,
      staleTime: 0,
      cacheTime: 0 // Disable caching
    },
  },
});

// Router observer component to log route changes and clear cache
const RouteObserver = () => {
  const location = useLocation();
  
  useEffect(() => {
    console.log("Route changed:", location.pathname);
    // Force clear cache on route changes
    if (location.pathname === '/dashboard' || location.pathname === '/') {
      console.log("Clearing dashboard cache");
      sessionStorage.removeItem('dashboard_cache');
      localStorage.removeItem('dashboard_state');
    }
  }, [location]);
  
  return null;
};

const App = () => {
  console.log("App rendering with routes:", routes.length);
  
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <NotificationProvider>
            <ChatProvider>
              <BrowserRouter>
                <RouteObserver />
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
                  <Route path="*" element={<Navigate to="/dashboard" replace />} />
                </Routes>
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
