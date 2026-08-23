import { useMemo, useState } from 'react';
import { Search, ChevronLeft, ChevronRight } from 'lucide-react';
import { SEO } from '@/components/common/SEO';
import { MotionWrapper } from '@/components/common/MotionWrapper';
import { ProjectCard } from '@/features/projects/ProjectCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { projects, PROJECT_CATEGORIES, PROJECTS_PER_PAGE } from '@/constants/data';
import type { ProjectCategory } from '@/types';
import { cn } from '@/lib/utils';

export function ProjectsPage() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState<ProjectCategory | 'All'>('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading] = useState(false);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch =
        search === '' ||
        project.title.toLowerCase().includes(search.toLowerCase()) ||
        project.description.toLowerCase().includes(search.toLowerCase()) ||
        project.technologies.some((t) => t.toLowerCase().includes(search.toLowerCase()));

      const matchesCategory = category === 'All' || project.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  const totalPages = Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE);
  const paginatedProjects = filteredProjects.slice(
    (currentPage - 1) * PROJECTS_PER_PAGE,
    currentPage * PROJECTS_PER_PAGE,
  );

  const handleCategoryChange = (newCategory: ProjectCategory | 'All') => {
    setCategory(newCategory);
    setCurrentPage(1);
  };

  const handleSearchChange = (value: string) => {
    setSearch(value);
    setCurrentPage(1);
  };

  return (
    <>
      <SEO
        title="Projects"
        description="Explore Mounika Mandapelli's portfolio of enterprise applications, HRMS, CRM, logistics, and mobile projects."
        path="/projects"
      />

      <section className="section-padding">
        <div className="container-custom">
          <MotionWrapper className="mb-12 text-center">
            <h1 className="font-display text-4xl font-bold sm:text-5xl">My Projects</h1>
            <p className="mt-4 text-muted-foreground">
              A collection of enterprise applications and personal projects I&apos;ve built
            </p>
          </MotionWrapper>

          <MotionWrapper className="mb-8 space-y-4">
            <div className="relative mx-auto max-w-md">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search projects..."
                value={search}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="pl-10"
                aria-label="Search projects"
              />
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              <Badge
                variant={category === 'All' ? 'default' : 'outline'}
                className="cursor-pointer px-4 py-1.5"
                onClick={() => handleCategoryChange('All')}
              >
                All
              </Badge>
              {PROJECT_CATEGORIES.map((cat) => (
                <Badge
                  key={cat}
                  variant={category === cat ? 'default' : 'outline'}
                  className="cursor-pointer px-4 py-1.5"
                  onClick={() => handleCategoryChange(cat)}
                >
                  {cat}
                </Badge>
              ))}
            </div>
          </MotionWrapper>

          {isLoading ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <Skeleton key={i} className="h-80 rounded-xl" />
              ))}
            </div>
          ) : paginatedProjects.length > 0 ? (
            <>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {paginatedProjects.map((project) => (
                  <div key={project.id} id={project.id}>
                    <ProjectCard project={project} />
                  </div>
                ))}
              </div>

              {totalPages > 1 && (
                <div className="mt-12 flex items-center justify-center gap-4">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    aria-label="Previous page"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>

                  <div className="flex gap-1">
                    {Array.from({ length: totalPages }).map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentPage(i + 1)}
                        className={cn(
                          'flex h-10 w-10 items-center justify-center rounded-lg text-sm font-medium transition-colors',
                          currentPage === i + 1
                            ? 'bg-primary text-primary-foreground'
                            : 'hover:bg-muted',
                        )}
                        aria-label={`Page ${i + 1}`}
                        aria-current={currentPage === i + 1 ? 'page' : undefined}
                      >
                        {i + 1}
                      </button>
                    ))}
                  </div>

                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                    aria-label="Next page"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              )}
            </>
          ) : (
            <div className="py-16 text-center">
              <p className="text-lg text-muted-foreground">No projects found matching your criteria.</p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => {
                  setSearch('');
                  setCategory('All');
                  setCurrentPage(1);
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
