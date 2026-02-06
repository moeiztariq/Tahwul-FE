import { Card, CardHeader, CardTitle, CardContent } from '../../../../components/ui/Card';
import { Progress } from '../../../../components/ui/Progress';
import { progressToVariant } from '../../../../utils/statusMapper';
import type { PerspectiveProgress } from '../../dashboard.types';
import styles from './ProgressByPerspective.module.scss';

interface ProgressByPerspectiveProps {
  data: PerspectiveProgress[];
}

/**
 * Component to display progress by perspective
 */
export function ProgressByPerspective({ data }: ProgressByPerspectiveProps) {
  return (
    <Card variant="elevated">
      <CardHeader>
        <CardTitle>Progress by Perspective</CardTitle>
      </CardHeader>
      <CardContent>
        <div className={styles.list}>
          {data.map((perspective) => (
            <div key={perspective.id} className={styles.item}>
              <div className={styles.header}>
                <div className={styles.info}>
                  <span className={styles.icon}>{perspective.icon}</span>
                  <div>
                    <h4 className={styles.name}>{perspective.name}</h4>
                    <p className={styles.count}>{perspective.objectivesCount} objectives</p>
                  </div>
                </div>
                <span className={styles.percentage}>{perspective.progress}%</span>
              </div>
              <Progress
                value={perspective.progress}
                variant={progressToVariant(perspective.progress)}
                size="md"
              />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
