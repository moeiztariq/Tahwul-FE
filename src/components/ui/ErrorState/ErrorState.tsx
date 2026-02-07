import styles from './ErrorState.module.scss';

export interface ErrorStateProps {
  title?: string;
  message: string;
  onRetry?: () => void;
  showIcon?: boolean;
}

/**
 * ErrorState component for displaying error messages with retry functionality
 * 
 * @example
 * <ErrorState 
 *   message="Failed to load data" 
 *   onRetry={handleRetry}
 * />
 */
export function ErrorState({ 
  title = 'Something went wrong',
  message, 
  onRetry,
  showIcon = true,
}: ErrorStateProps) {
  return (
    <div className={styles.container}>
      {showIcon && (
        <svg 
          className={styles.icon} 
          width="64" 
          height="64" 
          viewBox="0 0 24 24" 
          fill="none"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 8V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="12" cy="16" r="1" fill="currentColor"/>
        </svg>
      )}
      
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.message}>{message}</p>
      
      {onRetry && (
        <button 
          className={styles.retryButton}
          onClick={onRetry}
        >
          Try Again
        </button>
      )}
    </div>
  );
}
