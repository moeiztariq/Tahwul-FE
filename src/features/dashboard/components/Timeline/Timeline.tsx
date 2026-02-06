import { Card, CardHeader, CardTitle, CardContent } from '../../../../components/ui/Card';
import { Badge } from '../../../../components/ui/Badge';
import { EmptyState } from '../../../../components/ui/EmptyState';
import { statusToVariant, statusToLabel } from '../../../../utils/statusMapper';
import type { TimelineItem } from '../../dashboard.types';
import styles from './Timeline.module.scss';

interface TimelineProps {
  data: TimelineItem[];
}

/**
 * Component to display timeline of upcoming events
 */
export function Timeline({ data }: TimelineProps) {
  if (data.length === 0) {
    return (
      <Card variant="elevated">
        <CardHeader>
          <CardTitle>Upcoming Events</CardTitle>
        </CardHeader>
        <CardContent>
          <EmptyState
            size="sm"
            icon="📅"
            title="No upcoming events"
            description="Events and milestones will appear here."
          />
        </CardContent>
      </Card>
    );
  }

  return (
    <Card variant="elevated">
      <CardHeader>
        <CardTitle>Upcoming Events</CardTitle>
      </CardHeader>
      <CardContent>
        <div className={styles.timeline}>
          {data.map((item, index) => (
            <div key={item.id} className={styles.item}>
              <div className={styles.marker}>
                <div className={styles.dot} />
                {index < data.length - 1 && <div className={styles.line} />}
              </div>
              <div className={styles.content}>
                <div className={styles.header}>
                  <h4 className={styles.title}>{item.title}</h4>
                  <Badge variant={statusToVariant(item.status)} size="sm">
                    {statusToLabel(item.status)}
                  </Badge>
                </div>
                <p className={styles.date}>{item.formattedDate}</p>
                <p className={styles.perspective}>{item.perspectiveName}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
