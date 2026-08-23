import { Skeleton } from '@/components/ui/skeleton';

export function PageLoader() {
  return (
    <div className="container-custom section-padding space-y-4">
      <Skeleton className="mx-auto h-12 w-64" />
      <Skeleton className="mx-auto h-6 w-96" />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <Skeleton key={i} className="h-64 rounded-xl" />
        ))}
      </div>
    </div>
  );
}
