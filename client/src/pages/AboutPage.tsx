import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { SEO } from '@/components/common/SEO';
import { MotionWrapper } from '@/components/common/MotionWrapper';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ProjectCard } from '@/features/projects/ProjectCard';
import { SkillProgress } from '@/features/experience/SkillProgress';
import { SITE_CONFIG } from '@/constants/site';
import { projects, skillCategories } from '@/constants/data';

const highlights = [
  'Full-stack developer with hands-on experience at Voltuswave',
  'Built Freight Forwarding ERP and HRMS production modules',
  'Proficient in HTML5, CSS3, JavaScript (ES6+), React, and Node.js',
  'Experience deploying AWS Lambda, S3, and SQS serverless workflows',
  'Strong foundation in Python, Flask, and computer vision (OpenCV)',
];

const careerJourney = [
  {
    year: '2020',
    title: 'Started B.Tech CSE',
    description: 'Began Computer Science degree at Kakatiya University',
  },
  {
    year: '2024',
    title: 'Product Intern',
    description: 'Joined Voltuswave — built e-commerce, attendance, and OTP auth projects',
  },
  {
    year: '2025',
    title: 'Software Engineer',
    description: 'Promoted to Full-Stack Developer, delivering ERP and HRMS modules',
  },
  {
    year: '2026',
    title: 'Enterprise Developer',
    description: 'Building scalable serverless solutions on AWS for production systems',
  },
];

export function AboutPage() {
  return (
    <>
      <SEO
        title="About"
        description="Learn about Mandapelli Mounika — Software Engineer & Full-Stack Developer with expertise in React, TypeScript, Node.js, and AWS."
        path="/about"
      />

      <section className="section-padding">
        <div className="container-custom">
          <MotionWrapper className="mx-auto max-w-3xl text-center">
            <h1 className="font-display text-4xl font-bold sm:text-5xl">About Me</h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              I&apos;m a Software Engineer and Full-Stack Developer at Voltuswave, building
              enterprise-grade ERP and HRMS applications that solve real business problems.
            </p>
          </MotionWrapper>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-custom">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <MotionWrapper>
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={SITE_CONFIG.profileImage}
                  alt={SITE_CONFIG.name}
                  className="h-full w-full object-cover object-top"
                  loading="lazy"
                />
              </div>
            </MotionWrapper>

            <MotionWrapper delay={0.2}>
              <h2 className="font-display text-2xl font-bold">Professional Summary</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                As a Software Engineer specializing in React, TypeScript, Node.js, and MySQL,
                I build production features across Freight Forwarding ERP and HRMS platforms.
                I work with agile teams to deliver modules spanning sales, CRM, booking,
                operations, accounting, and human resource management.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                My stack includes HTML5, CSS3, JavaScript (ES6+), React, TypeScript, Node.js,
                Flask, Python, and AWS serverless services (Lambda, S3, SQS). I graduated with
                a B.Tech in CSE from Kakatiya University with a CGPA of 8.3.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {['HTML5', 'CSS3', 'JavaScript', 'React', 'TypeScript', 'Node.js', 'MySQL', 'AWS'].map(
                  (tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ),
                )}
              </div>
            </MotionWrapper>
          </div>
        </div>
      </section>

      <section className="bg-muted/30 section-padding">
        <div className="container-custom">
          <MotionWrapper className="mb-12 text-center">
            <h2 className="font-display text-3xl font-bold">Career Journey</h2>
          </MotionWrapper>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {careerJourney.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-xl border bg-card p-6"
              >
                <span className="text-2xl font-bold text-primary">{item.year}</span>
                <h3 className="mt-2 font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <MotionWrapper className="mb-12 text-center">
            <h2 className="font-display text-3xl font-bold">Personal Highlights</h2>
          </MotionWrapper>

          <div className="mx-auto grid max-w-2xl gap-4">
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-3"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span className="text-muted-foreground">{highlight}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/30 section-padding">
        <div className="container-custom">
          <MotionWrapper className="mb-12 text-center">
            <h2 className="font-display text-3xl font-bold">Skills Overview</h2>
          </MotionWrapper>
          <SkillProgress skillCategories={skillCategories} />
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <MotionWrapper className="mb-12 flex items-center justify-between">
            <div>
              <h2 className="font-display text-3xl font-bold">Recent Projects</h2>
              <p className="mt-2 text-muted-foreground">Some of my latest work</p>
            </div>
            <Button variant="outline" asChild className="hidden sm:inline-flex">
              <Link to="/projects">
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </MotionWrapper>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 3).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
