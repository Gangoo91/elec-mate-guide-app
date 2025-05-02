
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
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

const App = () => {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <NotificationProvider>
            <ChatProvider>
              <BrowserRouter>
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
