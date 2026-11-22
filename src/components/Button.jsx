import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Loader2 } from 'lucide-react';

export default function Button({
  children,
  to,
  href,
  onClick,
  variant = 'primary', // primary, secondary, outline, gold, white, text
  size = 'md', // sm, md, lg
  icon = true,
  iconElement,
  loading = false,
  className = '',
  disabled = false,
  type = 'button',
}) {
  const baseClasses = "inline-flex items-center justify-center font-display font-medium rounded-sm transition-all duration-300 tracking-wide focus:outline-none focus:ring-2 focus:ring-offset-2";

  const sizeClasses = {
    sm: "text-xs px-4 py-2 gap-1.5",
    md: "text-sm px-6 py-3 gap-2",
    lg: "text-base px-8 py-3.5 gap-2.5",
  };

  const variantClasses = {
    primary: "bg-forest text-white hover:bg-forest-light active:bg-forest-dark focus:ring-forest shadow-soft hover:shadow-soft-lg hover:-translate-y-0.5 border border-forest",
    secondary: "bg-bg-soft text-forest hover:bg-forest hover:text-white border border-border focus:ring-forest hover:-translate-y-0.5",
    outline: "bg-transparent text-forest hover:bg-forest hover:text-white border border-forest/60 focus:ring-forest hover:-translate-y-0.5",
    gold: "bg-gold text-white hover:bg-gold-dark active:bg-gold-dark focus:ring-gold shadow-gold-glow hover:-translate-y-0.5",
    white: "bg-white text-forest hover:bg-bg-soft active:bg-gray-100 focus:ring-white shadow-soft hover:-translate-y-0.5 border border-white/20",
    text: "bg-transparent text-forest hover:text-gold p-0 border-b border-forest/30 hover:border-gold rounded-none gap-1.5 hover:gap-2.5 transition-all",
  };

  const finalClasses = `${baseClasses} ${sizeClasses[size] || sizeClasses.md} ${variantClasses[variant] || variantClasses.primary} ${disabled || loading ? 'opacity-60 cursor-not-allowed pointer-events-none' : ''} ${className}`;

  const content = (
    <>
      {loading ? (
        <Loader2 className="w-4 h-4 animate-spin" />
      ) : null}
      <span>{children}</span>
      {icon && !loading && (
        iconElement ? iconElement : (
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        )
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={`group ${finalClasses}`}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={`group ${finalClasses}`}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled || loading} className={`group ${finalClasses}`}>
      {content}
    </button>
  );
}
