import { SEO } from '@/components/common/SEO';
import { MotionWrapper } from '@/components/common/MotionWrapper';
import { ExperienceTimeline } from '@/features/experience/ExperienceTimeline';
import { SkillProgress } from '@/features/experience/SkillProgress';
import { experiences, skillCategories } from '@/constants/data';

export function ExperiencePage() {
  return (
    <>
      <SEO
        title="Experience"
        description="Mandapelli Mounika's professional experience building ERP, HRMS, and full-stack web applications at Voltuswave."
        path="/experience"
      />

      <section className="section-padding">
        <div className="container-custom">
          <MotionWrapper className="mb-16 text-center">
            <h1 className="font-display text-4xl font-bold sm:text-5xl">Work Experience</h1>
            <p className="mt-4 text-muted-foreground">
              My professional journey building enterprise-grade applications
            </p>
          </MotionWrapper>

          <ExperienceTimeline experiences={experiences} />
        </div>
      </section>

      <section className="bg-muted/30 section-padding">
        <div className="container-custom">
          <MotionWrapper className="mb-12 text-center">
            <h2 className="font-display text-3xl font-bold">Technical Skills</h2>
            <p className="mt-4 text-muted-foreground">
              Technologies and tools I work with, grouped by category
            </p>
          </MotionWrapper>

          <SkillProgress skillCategories={skillCategories} />
        </div>
      </section>
    </>
  );
}
