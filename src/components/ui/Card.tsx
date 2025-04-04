import React from 'react';
import { twMerge } from 'tailwind-merge';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  animate?: boolean;
}

const Card: React.FC<CardProps> = ({ children, className, animate = true }) => {
  const baseComponent = (
    <div className={twMerge('bg-white rounded-xl p-6 shadow-sm', className)}>
      {children}
    </div>
  );

  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {baseComponent}
      </motion.div>
    );
  }

  return baseComponent;
};

export default Card;