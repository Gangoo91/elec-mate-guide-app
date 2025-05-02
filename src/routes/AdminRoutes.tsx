
import React from 'react';
import { RouteObject } from 'react-router-dom';
import AdminPage from '@/pages/AdminPage';
import AdminGuard from '@/components/guards/AdminGuard';

const AdminRoutes: RouteObject[] = [
  {
    path: '/admin',
    element: <AdminGuard><AdminPage /></AdminGuard>
  },
  {
    path: '/admin/tutors',
    element: <AdminGuard><AdminPage /></AdminGuard>
  },
  {
    path: '/admin/users',
    element: <AdminGuard><AdminPage /></AdminGuard>
  },
  {
    path: '/admin/content',
    element: <AdminGuard><AdminPage /></AdminGuard>
  },
  {
    path: '/admin/security',
    element: <AdminGuard><AdminPage /></AdminGuard>
  },
  {
    path: '/admin/settings',
    element: <AdminGuard><AdminPage /></AdminGuard>
  }
];

export default AdminRoutes;
