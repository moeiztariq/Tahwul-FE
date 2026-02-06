import { forwardRef } from 'react';
import clsx from 'clsx';
import styles from './Badge.module.scss';
import type { Variant } from '../../../types/common';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: Variant;
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ variant = 'primary', size = 'md', className, children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={clsx(
          styles.badge,
          styles[`variant-${variant}`],
          styles[`size-${size}`],
          className
        )}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';
