import React from 'react';
import { Link } from 'react-router-dom';

export type ButtonVariant = 'primary' | 'secondary' | 'outline';
export type ButtonSize = 'sm' | 'md' | 'lg';

interface BaseButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

interface ButtonAsButton extends BaseButtonProps {
  as?: 'button';
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

interface ButtonAsLink extends BaseButtonProps {
  as: 'link';
  to: string;
}

interface ButtonAsAnchor extends BaseButtonProps {
  as: 'anchor';
  href: string;
  target?: string;
  rel?: string;
}

type ButtonProps = ButtonAsButton | ButtonAsLink | ButtonAsAnchor;

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className = '',
  style: customStyle = {},
  children,
  ...props
}) => {
  const baseClasses = 'font-semibold transition-all rounded-lg inline-flex items-center justify-center';
  
  const variantClasses: Record<ButtonVariant, string> = {
    primary: 'text-white transition-transform hover:scale-105 hover:-translate-y-0.5 active:scale-98',
    secondary: 'backdrop-blur-xl border-2 transition-transform hover:scale-105 hover:-translate-y-0.5 active:scale-98',
    outline: 'backdrop-blur-xl border-2 transition-all hover:bg-white/10'
  };
  
  const sizeClasses: Record<ButtonSize, string> = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-10 py-6 text-lg'
  };

  const variantStyles: Record<ButtonVariant, React.CSSProperties> = {
    primary: {
      background: 'linear-gradient(135deg, #8b5cf6, #3b82f6)',
      boxShadow: '0 20px 40px rgba(139, 92, 246, 0.3)',
      textDecoration: 'none'
    },
    secondary: {
      background: 'rgba(255, 255, 255, 0.05)',
      borderColor: 'rgba(255, 255, 255, 0.1)',
      textDecoration: 'none',
      color: 'white'
    },
    outline: {
      background: 'rgba(255, 255, 255, 0.05)',
      borderColor: 'var(--accent-purple)',
      textDecoration: 'none',
      color: 'white'
    }
  };

  const combinedClassName = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  const style = { ...variantStyles[variant], ...customStyle };

  if (props.as === 'link') {
    return (
      <Link
        to={props.to}
        className={combinedClassName}
        style={style}
      >
        {children}
      </Link>
    );
  }

  if (props.as === 'anchor') {
    return (
      <a
        href={props.href}
        target={props.target}
        rel={props.rel}
        className={combinedClassName}
        style={style}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={props.type || 'button'}
      onClick={props.onClick}
      className={combinedClassName}
      style={style}
    >
      {children}
    </button>
  );
};

export default Button;
