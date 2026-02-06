import { forwardRef } from 'react';
import clsx from 'clsx';
import styles from './EmptyState.module.scss';

export interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  action?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
}

export const EmptyState = forwardRef<HTMLDivElement, EmptyStateProps>(
  ({ icon, title, description, action, size = 'md', className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={clsx(styles.container, styles[`size-${size}`], className)}
        {...props}
      >
        {icon && <div className={styles.icon}>{icon}</div>}
        <div className={styles.content}>
          <h3 className={styles.title}>{title}</h3>
          {description && <p className={styles.description}>{description}</p>}
        </div>
        {action && <div className={styles.action}>{action}</div>}
      </div>
    );
  }
);

EmptyState.displayName = 'EmptyState';
