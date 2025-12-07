import { ReactNode, HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  hover?: boolean;
}

export function Card({ children, className, hover = false, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'bg-card rounded-xl p-6 shadow-md',
        hover && 'card-shadow-hover cursor-pointer',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
