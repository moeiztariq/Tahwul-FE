import { Card, CardContent } from '../../../../components/ui/Card';
import styles from './SummaryCard.module.scss';

interface SummaryCardProps {
  title: string;
  value: number | string;
  icon?: string;
  trend?: {
    value: number;
    isPositive: boolean;
  };
}

/**
 * Summary card component for displaying key metrics
 */
export function SummaryCard({ title, value, icon, trend }: SummaryCardProps) {
  return (
    <Card variant="elevated" padding="md">
      <CardContent>
        <div className={styles.container}>
          {icon && <div className={styles.icon}>{icon}</div>}
          <div className={styles.content}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.value}>{value}</p>
            {trend && (
              <span className={`${styles.trend} ${trend.isPositive ? styles.positive : styles.negative}`}>
                {trend.isPositive ? '↑' : '↓'} {Math.abs(trend.value)}%
              </span>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
