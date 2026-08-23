import { motion } from 'framer-motion';

import { ExternalLink, Award } from 'lucide-react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import { Button } from '@/components/ui/button';

import { Badge } from '@/components/ui/badge';

import type { Certification } from '@/types';



interface CertificationCardProps {

  certification: Certification;

  index: number;

}



export function CertificationCard({ certification, index }: CertificationCardProps) {

  return (

    <motion.div

      initial={{ opacity: 0, scale: 0.95 }}

      whileInView={{ opacity: 1, scale: 1 }}

      viewport={{ once: true }}

      transition={{ delay: index * 0.1 }}

      whileHover={{ y: -4 }}

    >

      <Card className="group h-full overflow-hidden border-border/50 transition-shadow hover:shadow-lg">

        {certification.image ? (

          <div className="relative aspect-[4/3] overflow-hidden bg-muted">

            <img

              src={certification.image}

              alt={`${certification.name} certificate`}

              className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"

              loading="lazy"

            />

          </div>

        ) : (

          <CardHeader className="pb-3">

            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">

              <Award className="h-6 w-6" />

            </div>

          </CardHeader>

        )}

        <CardHeader className={certification.image ? 'pt-4 pb-3' : 'pb-3'}>

          <Badge variant="secondary" className="w-fit">

            {certification.provider}

          </Badge>

          <CardTitle className="text-lg leading-snug">{certification.name}</CardTitle>

        </CardHeader>

        <CardContent className="space-y-4">

          <div className="space-y-1 text-sm text-muted-foreground">

            <p>Issued: {certification.date}</p>

            {certification.duration && <p>Duration: {certification.duration}</p>}

            {certification.credentialId && (

              <p className="text-xs">Credential ID: {certification.credentialId}</p>

            )}

          </div>

          {certification.verificationUrl && (

            <Button variant="outline" size="sm" className="w-full" asChild>

              <a

                href={certification.verificationUrl}

                target="_blank"

                rel="noopener noreferrer"

              >

                <ExternalLink className="mr-2 h-4 w-4" />

                Verify Certificate

              </a>

            </Button>

          )}

        </CardContent>

      </Card>

    </motion.div>

  );

}

