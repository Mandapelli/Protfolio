import { motion } from 'framer-motion';
import type { SkillCategory } from '@/types';

interface SkillProgressProps {
  skillCategories: SkillCategory[];
}

export function SkillProgress({ skillCategories }: SkillProgressProps) {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      {skillCategories.map((category, catIndex) => (
        <motion.div
          key={category.category}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: catIndex * 0.1 }}
          className="rounded-xl border bg-card p-6"
        >
          <h3 className="mb-6 font-display text-lg font-semibold">{category.category}</h3>
          <div className="space-y-4">
            {category.skills.map((skill, skillIndex) => (
              <div key={skill.name}>
                <div className="mb-1.5 flex justify-between text-sm">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-muted">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-primary to-blue-400"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1,
                      delay: catIndex * 0.1 + skillIndex * 0.05,
                      ease: 'easeOut',
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
