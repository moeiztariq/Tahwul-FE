import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/Card';
import { EmptyState } from '../../components/ui/EmptyState';
import styles from './Tracking.page.module.scss';

export function TrackingPage() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.title}>Progress Tracking</h1>
        <p className={styles.subtitle}>
          Monitor and track the progress of your strategic initiatives and objectives.
        </p>
      </header>

      <Card variant="elevated">
        <CardHeader>
          <CardTitle>Coming Soon</CardTitle>
        </CardHeader>
        <CardContent>
          <EmptyState
            icon="📈"
            title="Progress Tracking Module"
            description="This module will provide detailed tracking and reporting capabilities for monitoring initiative progress, KPIs, and performance metrics."
            action={
              <p style={{ fontSize: '14px', color: '#6b7280', marginTop: '16px' }}>
                Awaiting design specifications...
              </p>
            }
          />
        </CardContent>
      </Card>
    </div>
  );
}
