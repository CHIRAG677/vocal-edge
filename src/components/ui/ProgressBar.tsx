import React from 'react';
import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

interface ProgressBarProps {
  value: number;
  max?: number;
  label?: string;
  className?: string;
  color?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  max = 100,
  label,
  className,
  color = 'indigo',
}) => {
  const percentage = (value / max) * 100;

  return (
    <div className={className}>
      {label && (
        <div className="flex justify-between mb-1">
          <span className="text-sm font-medium text-gray-700">{label}</span>
          <span className="text-sm font-medium text-gray-500">{percentage.toFixed(0)}%</span>
        </div>
      )}
      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className={twMerge(
            'h-full rounded-full',
            color === 'indigo' && 'bg-indigo-600',
            color === 'green' && 'bg-green-600',
            color === 'red' && 'bg-red-600'
          )}
        />
      </div>
    </div>
  );
};

export default ProgressBar;