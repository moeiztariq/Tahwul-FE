import { forwardRef } from 'react';
import * as ProgressPrimitive from '@radix-ui/react-progress';
import clsx from 'clsx';
import styles from './Progress.module.scss';
import type { Variant } from '../../../types/common';

export interface ProgressProps extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {
  value?: number;
  max?: number;
  variant?: Variant;
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
}

export const Progress = forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  ProgressProps
>(
  (
    { value = 0, max = 100, variant = 'primary', size = 'md', showLabel = false, className, ...props },
    ref
  ) => {
    const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

    return (
      <div className={styles.wrapper}>
        <ProgressPrimitive.Root
          ref={ref}
          className={clsx(
            styles.root,
            styles[`size-${size}`],
            styles[`variant-${variant}`],
            className
          )}
          value={value}
          max={max}
          {...props}
        >
          <ProgressPrimitive.Indicator
            className={styles.indicator}
            style={{ transform: `translateX(-${100 - percentage}%)` }}
          />
        </ProgressPrimitive.Root>
        {showLabel && (
          <span className={styles.label} aria-live="polite">
            {Math.round(percentage)}%
          </span>
        )}
      </div>
    );
  }
);

Progress.displayName = 'Progress';
