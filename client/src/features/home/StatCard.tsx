import { motion } from 'framer-motion';
import { useAnimatedCounter } from '@/hooks/useAnimatedCounter';
import type { STATS } from '@/constants/site';

type StatItem = (typeof STATS)[number];

interface StatCardProps {
  stat: StatItem;
  index: number;
}

export function StatCard({ stat, index }: StatCardProps) {
  const { count, ref } = useAnimatedCounter(stat.value);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="text-center"
    >
      <div className="font-display text-4xl font-bold text-primary sm:text-5xl">
        {count}
        {stat.suffix}
      </div>
      <p className="mt-2 text-sm text-muted-foreground sm:text-base">{stat.label}</p>
    </motion.div>
  );
}
