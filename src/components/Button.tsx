"use client";

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

const Button = ({ 
  children, 
  type = 'button',
  onClick,
  disabled = false,
  className = '',
  variant = 'primary',
  size = 'md'
}: ButtonProps) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-colors duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantStyles = {
    primary: 'bg-[#0EB55F] text-white hover:bg-[#0EB55F]/90 focus:ring-[#0EB55F]',
    secondary: 'bg-white text-[#0EB55F] hover:bg-[#0EB55F]/10 border border-[#0EB55F]/20 focus:ring-[#0EB55F]',
    outline: 'border-2 border-[#0EB55F] text-[#0EB55F] hover:bg-[#0EB55F] hover:text-white focus:ring-[#0EB55F]'
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      {children}
    </motion.button>
  );
};

export default Button; 