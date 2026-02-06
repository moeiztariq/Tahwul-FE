import styles from './ComingSoon.page.module.scss';

interface ComingSoonPageProps {
  title?: string;
  description?: string;
}

export function ComingSoonPage({ 
  title = 'Coming Soon', 
  description = 'This feature is under development and will be available soon.' 
}: ComingSoonPageProps) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.iconWrapper}>
          <div className={styles.rocketIcon}>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L4 11h5v9l8-9h-5V2z" fill="currentColor" />
            </svg>
          </div>
        </div>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
        <div className={styles.badge}>
          <span className={styles.badgeText}>Coming Soon</span>
        </div>
      </div>
    </div>
  );
}
