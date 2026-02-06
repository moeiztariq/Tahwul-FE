import styles from './RecentActivities.module.scss';

interface Activity {
  id: string;
  type: 'document' | 'task' | 'criterion';
  title: string;
  description: string;
  timestamp: string;
}

interface RecentActivitiesProps {
  data: Activity[];
  height?: 'max-content' | '100%';
}

export function RecentActivities({ data, height = 'max-content' }: RecentActivitiesProps) {
  return (
    <div className={styles.container} style={{ height }}>
      <h3 className={styles.title}>Recent Activities</h3>
      
      <div className={styles.list}>
        {data.map((activity) => (
          <div key={activity.id} className={styles.item}>
            <div className={styles.bullet} />
            <div className={styles.content}>
              <div className={styles.header}>
                <h4 className={styles.activityTitle}>{activity.title}</h4>
                <span className={styles.time}>{activity.timestamp}</span>
              </div>
              <p className={styles.description}>{activity.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
