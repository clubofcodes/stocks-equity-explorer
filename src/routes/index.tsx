import { ReactNode } from 'react';
import Dashboard from '@/pages/dashboard/Dashboard.tsx';
import ErrorPage from '@/pages/error/ErrorPage.tsx';

export interface IPublicRoute {
  path: string;
  element: ReactNode;
}
export const publicRoutes: IPublicRoute[] = [
  {
    path: '/',
    element: <Dashboard />
  },
  {
    path: '*',
    element: <ErrorPage />
  }
];
