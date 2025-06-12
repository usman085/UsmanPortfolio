"use client";

import { useSpring, animated } from '@react-spring/web';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  type = 'button',
  disabled = false,
  className = '',
}: ButtonProps) {
  const baseClasses = 'btn';
  
  const variantClasses = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
  };

  const sizeClasses = {
    sm: 'text-sm px-3 py-1.5',
    md: 'text-base px-4 py-2',
    lg: 'text-lg px-6 py-3',
  };

  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : '';

  const [spring, api] = useSpring(() => ({
    scale: 1,
    config: { tension: 300, friction: 10 }
  }));

  const handleMouseEnter = () => {
    if (!disabled) {
      api.start({ scale: 1.05 });
    }
  };

  const handleMouseLeave = () => {
    if (!disabled) {
      api.start({ scale: 1 });
    }
  };

  const handleMouseDown = () => {
    if (!disabled) {
      api.start({ scale: 0.95 });
    }
  };

  const handleMouseUp = () => {
    if (!disabled) {
      api.start({ scale: 1.05 });
    }
  };

  return (
    <animated.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${className}`}
      style={spring}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      {children}
    </animated.button>
  );
} 