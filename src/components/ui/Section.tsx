import React from 'react';

export type SectionVariant = 'primary' | 'secondary' | 'gradient';

interface SectionProps {
  variant?: SectionVariant;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
  fullHeight?: boolean;
}

const Section: React.FC<SectionProps> = ({
  variant = 'primary',
  className = '',
  style = {},
  children,
  fullHeight = false
}) => {
  const baseClasses = 'relative overflow-hidden';
  const paddingClasses = fullHeight ? 'min-h-screen flex items-center' : 'py-24';
  
  const variantStyles: Record<SectionVariant, React.CSSProperties> = {
    primary: {
      backgroundColor: 'var(--bg-primary)',
    },
    secondary: {
      backgroundColor: 'var(--bg-secondary)',
    },
    gradient: {
      background: 'linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-secondary) 100%)',
    }
  };

  const combinedClassName = `${baseClasses} ${paddingClasses} ${className}`;
  const combinedStyle = { ...variantStyles[variant], ...style };

  return (
    <section className={combinedClassName} style={combinedStyle}>
      {children}
    </section>
  );
};

export default Section;
