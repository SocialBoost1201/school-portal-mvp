import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'white' | 'whiteOutline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false,
  className = '',
  ...props 
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-bold rounded-full transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 hover:-translate-y-0.5 active:translate-y-0 active:scale-95";
  
  const variants = {
    primary: "bg-primary-900 text-white shadow-card hover:bg-primary-700 hover:shadow-card-hover focus:ring-primary-900 border border-transparent",
    secondary: "bg-accent-500 text-white shadow-card hover:bg-accent-600 hover:shadow-card-hover focus:ring-accent-500 border border-transparent",
    outline: "border-2 border-primary-100 text-primary-900 hover:border-primary-500 hover:bg-primary-50 focus:ring-primary-500 bg-white shadow-sm",
    ghost: "bg-transparent text-primary-900 hover:text-primary-700 hover:bg-primary-50 focus:ring-primary-100 hover:shadow-sm",
    white: "bg-white text-black shadow-card hover:bg-gray-50 focus:ring-gray-200 border border-transparent",
    whiteOutline: "bg-transparent text-white border-2 border-white/50 hover:border-white hover:bg-white/10 focus:ring-white",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
