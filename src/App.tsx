
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import routes from './routes';
import { AuthProvider } from '@/hooks/useAuth';
import { Toaster } from '@/components/ui/toaster';
import ErrorBoundary from '@/components/ErrorBoundary';
import './App.css';

const App = () => {
  return (
    <ErrorBoundary>
      <AuthProvider>
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
      </AuthProvider>
    </ErrorBoundary>
  );
};

export default App;
