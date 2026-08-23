import { motion, type Variants } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';

interface MotionWrapperProps {
  children: React.ReactNode;
  variants?: Variants;
  className?: string;
  delay?: number;
}

export function MotionWrapper({
  children,
  variants = fadeInUp,
  className,
  delay = 0,
}: MotionWrapperProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={variants}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
