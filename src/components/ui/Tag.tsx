import React from 'react';

interface TagProps {
  label: string;
  variant?: 'default' | 'highlight' | 'outline';
}

export function Tag({ label, variant = 'default' }: TagProps) {
  const baseStyles = "inline-flex items-center px-2.5 py-1 text-xs font-medium rounded-md whitespace-nowrap";
  
  const variants = {
    default: "bg-primary-50 text-text-muted",
    highlight: "bg-accent-100 text-accent-600",
    outline: "border border-primary-100 text-text-muted bg-transparent",
  };

  return (
    <span className={`${baseStyles} ${variants[variant]}`}>
      {label}
    </span>
  );
}
