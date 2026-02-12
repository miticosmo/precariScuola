import React from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  hoverEffect?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({ 
  children, 
  className = "", 
  delay = 0,
  hoverEffect = true 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className={`
        relative overflow-hidden
        bg-white
        border border-slate-200
        rounded-3xl
        p-8
        shadow-sm
        ${hoverEffect ? 'hover:shadow-xl hover:border-blue-200 hover:-translate-y-1 transition-all duration-300 group' : ''}
        ${className}
      `}
    >
      <div className="relative z-10 h-full">
        {children}
      </div>
    </motion.div>
  );
};