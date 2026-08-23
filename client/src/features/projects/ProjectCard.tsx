import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import type { Project } from '@/types';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className={cn('h-full', className)}
    >
      <Card className="group h-full overflow-hidden border-border/50 hover:border-primary/30 hover:shadow-lg">
        <div className="relative aspect-video overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
          <Badge className="absolute left-3 top-3" variant="secondary">
            {project.category}
          </Badge>
        </div>

        <CardHeader className="pb-2">
          <CardTitle className="line-clamp-1 text-lg">{project.title}</CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          <p className="line-clamp-2 text-sm text-muted-foreground">{project.description}</p>
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 4).map((tech) => (
              <Badge key={tech} variant="outline" className="text-xs">
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 4 && (
              <Badge variant="outline" className="text-xs">
                +{project.technologies.length - 4}
              </Badge>
            )}
          </div>
        </CardContent>

        <CardFooter className="gap-2 pt-0">
          {project.liveUrl && (
            <Button variant="default" size="sm" asChild>
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-1 h-3.5 w-3.5" />
                Live Demo
              </a>
            </Button>
          )}
          {project.githubUrl && (
            <Button variant="ghost" size="sm" asChild>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-1 h-3.5 w-3.5" />
                Code
              </a>
            </Button>
          )}
          {!project.liveUrl && !project.githubUrl && (
            <Button variant="ghost" size="sm" className="ml-auto" asChild>
              <Link to={`/projects#${project.id}`}>Details</Link>
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
}
