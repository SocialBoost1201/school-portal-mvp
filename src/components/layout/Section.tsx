import React, { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  bg?: 'white' | 'gray' | 'transparent';
  containerSize?: 'default' | 'narrow' | 'wide' | 'full';
}

export function Section({ 
  children, 
  className = '', 
  bg = 'transparent',
  containerSize = 'default' 
}: SectionProps) {
  const bgClasses = {
    white: 'bg-bg-surface',
    gray: 'bg-primary-50',
    transparent: 'bg-transparent',
  };

  const containerClasses = {
    default: 'max-w-7xl',
    narrow: 'max-w-4xl',
    wide: 'max-w-screen-2xl',
    full: 'w-full',
  };

  return (
    <section className={`py-section-sm md:py-section ${bgClasses[bg]} ${className}`}>
      <div className={`mx-auto px-6 w-full ${containerClasses[containerSize]}`}>
        {children}
      </div>
    </section>
  );
}
