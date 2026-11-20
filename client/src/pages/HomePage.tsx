import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail } from 'lucide-react';
import { SEO } from '@/components/common/SEO';
import { MotionWrapper } from '@/components/common/MotionWrapper';
import { staggerContainer } from '@/lib/animations';
import { Button } from '@/components/ui/button';
import { ProjectCard } from '@/features/projects/ProjectCard';
import { StatCard } from '@/features/home/StatCard';
import { TestimonialCard } from '@/features/home/TestimonialCard';
import { SITE_CONFIG, STATS, TYPING_ROLES } from '@/constants/site';
import { projects, testimonials } from '@/constants/data';
import { useTypingEffect } from '@/hooks/useTypingEffect';

const featuredProjects = projects.filter((p) => p.featured).slice(0, 4);

export function HomePage() {
  const typingText = useTypingEffect(TYPING_ROLES);

  return (
    <>
      <SEO />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-blue-500/5" />
          <div className="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
        </div>

        <div className="container-custom section-padding">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <p className="mb-4 text-sm font-medium uppercase tracking-wider text-primary">
                Welcome to my portfolio
              </p>
              <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Hi, I&apos;m{' '}
                <span className="text-gradient">{SITE_CONFIG.name}</span>
              </h1>
              <div className="mt-4 h-8 text-xl text-muted-foreground sm:text-2xl">
                <span>{typingText}</span>
                <span className="animate-pulse">|</span>
              </div>
              <p className="mt-6 max-w-lg text-lg text-muted-foreground leading-relaxed">
                I build production-grade ERP systems, HRMS platforms, and full-stack web applications
                using React, TypeScript, Node.js, MySQL, and AWS serverless services.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <Link to="/contact">
                    <Mail className="mr-2 h-5 w-5" />
                    Contact Me
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href={SITE_CONFIG.resumeUrl} target="_blank" rel="noopener noreferrer">
                    <Download className="mr-2 h-5 w-5" />
                    View Resume
                  </a>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-1 flex justify-center lg:order-2"
            >
              <div className="relative">
                <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-primary/20 to-blue-500/20 blur-2xl" />
                <div className="relative h-64 w-64 overflow-hidden rounded-2xl border-4 border-background shadow-2xl sm:h-80 sm:w-80 lg:h-96 lg:w-96">
                  <img
                    src={SITE_CONFIG.profileImage}
                    alt={SITE_CONFIG.name}
                    className="h-full w-full object-cover object-top"
                    width={400}
                    height={400}
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 rounded-xl border bg-card px-4 py-2 shadow-lg">
                  <p className="text-sm font-semibold text-primary">2 Years</p>
                  <p className="text-xs text-muted-foreground">Experience</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y bg-muted/30">
        <div className="container-custom section-padding">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-8 md:grid-cols-4"
          >
            {STATS.map((stat, index) => (
              <StatCard key={stat.label} stat={stat} index={index} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-padding">
        <div className="container-custom">
          <MotionWrapper className="mb-12 text-center">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">Featured Projects</h2>
            <p className="mt-4 text-muted-foreground">
              A selection of enterprise applications I&apos;ve built and contributed to
            </p>
          </MotionWrapper>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <MotionWrapper className="mt-10 text-center">
            <Button variant="outline" size="lg" asChild>
              <Link to="/projects">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </MotionWrapper>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-muted/30 section-padding">
        <div className="container-custom">
          <MotionWrapper className="mb-12 text-center">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">What People Say</h2>
            <p className="mt-4 text-muted-foreground">
              Testimonials from colleagues and clients I&apos;ve worked with
            </p>
          </MotionWrapper>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding">
        <div className="container-custom">
          <MotionWrapper>
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-blue-600 px-8 py-16 text-center text-white sm:px-16">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30" />
              <h2 className="font-display text-3xl font-bold sm:text-4xl">
                Let&apos;s Build Something Great
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-white/90">
                Have a project in mind? I&apos;d love to hear about it. Let&apos;s discuss how we
                can work together to bring your ideas to life.
              </p>
              <Button
                size="lg"
                variant="secondary"
                className="mt-8"
                asChild
              >
                <Link to="/contact">
                  Get In Touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </MotionWrapper>
        </div>
      </section>
    </>
  );
}
