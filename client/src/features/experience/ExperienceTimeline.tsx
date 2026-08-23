import { motion } from 'framer-motion';
import { Briefcase, MapPin } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import type { Experience } from '@/types';

interface ExperienceTimelineProps {
  experiences: Experience[];
}

export function ExperienceTimeline({ experiences }: ExperienceTimelineProps) {
  return (
    <div className="relative">
      <div className="absolute left-4 top-0 hidden h-full w-0.5 bg-border md:left-1/2 md:block md:-translate-x-1/2" />

      {experiences.map((exp, index) => (
        <motion.div
          key={exp.id}
          initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ delay: index * 0.15 }}
          className={`relative mb-12 md:mb-16 ${
            index % 2 === 0 ? 'md:pr-[calc(50%+2rem)]' : 'md:pl-[calc(50%+2rem)]'
          }`}
        >
          <div className="absolute left-4 top-6 hidden h-4 w-4 -translate-x-1/2 rounded-full border-4 border-primary bg-background md:left-1/2 md:block" />

          <div className="ml-12 rounded-xl border bg-card p-6 shadow-sm md:ml-0">
            <div className="mb-4 flex flex-wrap items-start justify-between gap-2">
              <div>
                <h3 className="font-display text-xl font-bold">{exp.designation}</h3>
                <p className="flex items-center gap-1.5 text-primary">
                  <Briefcase className="h-4 w-4" />
                  {exp.company}
                </p>
              </div>
              <Badge variant="secondary">{exp.duration}</Badge>
            </div>

            <p className="mb-4 flex items-center gap-1.5 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              {exp.location}
            </p>

            <ul className="mb-4 space-y-2">
              {exp.achievements.map((achievement) => (
                <li key={achievement} className="flex gap-2 text-sm text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {achievement}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-1.5">
              {exp.skills.map((skill) => (
                <Badge key={skill} variant="outline" className="text-xs">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
