import React from 'react';

export type CardVariant = 'glass' | 'solid' | 'bordered';

interface CardProps {
  variant?: CardVariant;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
  hover?: boolean;
}

const Card: React.FC<CardProps> = ({
  variant = 'glass',
  className = '',
  style = {},
  children,
  hover = false
}) => {
  const baseClasses = 'rounded-xl p-8';
  
  const variantClasses: Record<CardVariant, string> = {
    glass: 'backdrop-blur-xl border',
    solid: 'border',
    bordered: 'border-2'
  };

  const hoverClasses = hover ? 'transition-transform hover:-translate-y-1' : '';

  const variantStyles: Record<CardVariant, React.CSSProperties> = {
    glass: {
      background: 'rgba(255, 255, 255, 0.03)',
      borderColor: 'rgba(255, 255, 255, 0.1)',
    },
    solid: {
      backgroundColor: 'var(--bg-secondary)',
      borderColor: 'var(--border-primary)',
    },
    bordered: {
      background: 'transparent',
      borderColor: 'var(--border-primary)',
    }
  };

  const combinedClassName = `${baseClasses} ${variantClasses[variant]} ${hoverClasses} ${className}`;
  const combinedStyle = { ...variantStyles[variant], ...style };

  return (
    <div className={combinedClassName} style={combinedStyle}>
      {children}
    </div>
  );
};

export default Card;
