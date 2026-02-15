import React from 'react';

export type BadgeVariant = 'default' | 'gradient' | 'outline' | 'pill';

interface BadgeProps {
  variant?: BadgeVariant;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
  pulse?: boolean;
  icon?: React.ReactNode;
}

const Badge: React.FC<BadgeProps> = ({
  variant = 'default',
  className = '',
  style = {},
  children,
  pulse = false,
  icon
}) => {
  const baseClasses = 'inline-flex items-center gap-2 font-semibold';
  
  const variantClasses: Record<BadgeVariant, string> = {
    default: 'px-3 py-1.5 rounded-md text-xs',
    gradient: 'px-5 py-2.5 rounded-full text-sm border',
    outline: 'px-4 py-2 rounded-full text-sm border-2',
    pill: 'px-4 py-2 rounded-full text-sm backdrop-blur-xl'
  };

  const variantStyles: Record<BadgeVariant, React.CSSProperties> = {
    default: {
      backgroundColor: 'var(--bg-tertiary)',
      color: 'var(--text-primary)',
    },
    gradient: {
      background: 'rgba(139, 92, 246, 0.1)',
      borderColor: 'rgba(139, 92, 246, 0.3)',
    },
    outline: {
      background: 'transparent',
      borderColor: 'var(--accent-purple)',
      color: 'var(--accent-purple)',
    },
    pill: {
      background: 'rgba(255, 255, 255, 0.05)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
    }
  };

  const combinedClassName = `${baseClasses} ${variantClasses[variant]} ${className}`;
  const combinedStyle = { ...variantStyles[variant], ...style };

  return (
    <span className={combinedClassName} style={combinedStyle}>
      {icon}
      {pulse && (
        <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
      )}
      {children}
    </span>
  );
};

export default Badge;
