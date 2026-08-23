import { SEO } from '@/components/common/SEO';
import { MotionWrapper } from '@/components/common/MotionWrapper';
import { CertificationCard } from '@/features/certifications/CertificationCard';
import { certifications } from '@/constants/data';

export function CertificationsPage() {
  return (
    <>
      <SEO
        title="Certifications"
        description="Professional certifications earned by Mandapelli Mounika in SQL, full-stack development, and more."
        path="/certifications"
      />

      <section className="section-padding">
        <div className="container-custom">
          <MotionWrapper className="mb-12 text-center">
            <h1 className="font-display text-4xl font-bold sm:text-5xl">Certifications</h1>
            <p className="mt-4 text-muted-foreground">
              Professional certifications that validate my expertise and commitment to growth
            </p>
          </MotionWrapper>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {certifications.map((cert, index) => (
              <CertificationCard key={cert.id} certification={cert} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
