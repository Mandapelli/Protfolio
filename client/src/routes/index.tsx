import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { MainLayout } from '@/layouts/MainLayout';
import { PageLoader } from '@/components/common/PageLoader';

const HomePage = lazy(() =>
  import('@/pages/HomePage').then((m) => ({ default: m.HomePage })),
);
const AboutPage = lazy(() =>
  import('@/pages/AboutPage').then((m) => ({ default: m.AboutPage })),
);
const ProjectsPage = lazy(() =>
  import('@/pages/ProjectsPage').then((m) => ({ default: m.ProjectsPage })),
);
const ExperiencePage = lazy(() =>
  import('@/pages/ExperiencePage').then((m) => ({ default: m.ExperiencePage })),
);
const CertificationsPage = lazy(() =>
  import('@/pages/CertificationsPage').then((m) => ({ default: m.CertificationsPage })),
);
const ContactPage = lazy(() =>
  import('@/pages/ContactPage').then((m) => ({ default: m.ContactPage })),
);

function withSuspense(Component: React.ComponentType) {
  return (
    <Suspense fallback={<PageLoader />}>
      <Component />
    </Suspense>
  );
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: withSuspense(HomePage) },
      { path: 'about', element: withSuspense(AboutPage) },
      { path: 'projects', element: withSuspense(ProjectsPage) },
      { path: 'experience', element: withSuspense(ExperiencePage) },
      { path: 'certifications', element: withSuspense(CertificationsPage) },
      { path: 'contact', element: withSuspense(ContactPage) },
    ],
  },
]);
