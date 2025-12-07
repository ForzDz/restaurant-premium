import { ButtonHTMLAttributes, forwardRef, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  asChild?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    
    const baseStyles = 'inline-flex items-center justify-center rounded-lg font-medium transition-all disabled:opacity-50 disabled:pointer-events-none';
    
    const variants = {
      primary: 'bg-primary text-primary-foreground hover:opacity-90 shadow-md hover:shadow-lg',
      secondary: 'bg-secondary text-secondary-foreground hover:opacity-90',
      outline: 'border border-border bg-transparent hover:bg-accent text-foreground',
      ghost: 'hover:bg-accent text-foreground',
    };
    
    const sizes = {
      sm: 'text-sm px-4 py-2',
      md: 'text-base px-6 py-3',
      lg: 'text-lg px-8 py-4',
    };

    return (
      <Comp
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);

Button.displayName = 'Button';
