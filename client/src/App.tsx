import { RouterProvider } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'sonner';
import { ErrorBoundary } from '@/components/common/ErrorBoundary';
import { router } from '@/routes';

export function App() {
  return (
    <HelmetProvider>
      <ErrorBoundary>
        <RouterProvider router={router} />
        <Toaster position="top-right" richColors closeButton />
      </ErrorBoundary>
    </HelmetProvider>
  );
}
