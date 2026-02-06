import { Skeleton } from '../../../../components/ui/Skeleton';
import styles from './DashboardSkeletons.module.scss';

export function TimelineSkeleton() {
  return (
    <div className={styles.timelineContainer}>
      <div className={styles.timelineHeader}>
        <Skeleton width="150px" height="20px" />
        <Skeleton width="80px" height="32px" borderRadius="40px" />
      </div>
      <Skeleton width="100%" height="14px" borderRadius="10px" />
      <div className={styles.milestonesContainer}>
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className={styles.milestone}>
            <Skeleton width="10px" height="10px" borderRadius="50%" />
            <Skeleton width="60px" height="14px" />
            <Skeleton width="80px" height="14px" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function StatCardSkeleton() {
  return (
    <div className={styles.statCard}>
      <div className={styles.statContent}>
        <Skeleton width="60px" height="24px" />
        <Skeleton width="100px" height="14px" />
      </div>
      <Skeleton width="20px" height="20px" borderRadius="4px" />
    </div>
  );
}

export function ProgressGridSkeleton() {
  return (
    <div className={styles.progressGrid}>
      <div className={styles.progressHeader}>
        <Skeleton width="150px" height="20px" />
        <div className={styles.legend}>
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className={styles.legendItem}>
              <Skeleton width="12px" height="12px" borderRadius="50%" />
              <Skeleton width="80px" height="14px" />
            </div>
          ))}
        </div>
      </div>
      <div className={styles.summaryCards}>
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <Skeleton key={i} width="96px" height="90px" borderRadius="10px" />
        ))}
      </div>
      <div className={styles.detailCards}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
          <Skeleton key={i} width="96px" height="109px" borderRadius="10px" />
        ))}
      </div>
    </div>
  );
}

export function ComplianceSkeleton() {
  return (
    <div className={styles.complianceCard}>
      <Skeleton width="150px" height="20px" />
      <div className={styles.chartArea}>
        <Skeleton width="150px" height="150px" borderRadius="50%" />
      </div>
      <Skeleton width="120px" height="14px" />
    </div>
  );
}

export function LeadersSkeleton() {
  return (
    <div className={styles.leadersCard}>
      <Skeleton width="180px" height="20px" />
      <div className={styles.leadersList}>
        {[1, 2, 3].map((i) => (
          <div key={i} className={styles.leaderItem}>
            <Skeleton width="40px" height="40px" borderRadius="50%" />
            <div className={styles.leaderInfo}>
              <Skeleton width="100px" height="16px" />
              <Skeleton width="80px" height="14px" />
            </div>
            <Skeleton width="40px" height="24px" borderRadius="20px" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function ChartSkeleton() {
  return (
    <div className={styles.chartCard}>
      <Skeleton width="200px" height="20px" />
      <div className={styles.chartArea}>
        <Skeleton width="100%" height="250px" borderRadius="10px" />
      </div>
    </div>
  );
}

export function ActivitiesSkeleton() {
  return (
    <div className={styles.activitiesCard}>
      <Skeleton width="150px" height="20px" />
      <div className={styles.activitiesList}>
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className={styles.activityItem}>
            <Skeleton width="8px" height="8px" borderRadius="50%" />
            <div className={styles.activityContent}>
              <Skeleton width="150px" height="14px" />
              <Skeleton width="200px" height="12px" />
            </div>
            <Skeleton width="60px" height="12px" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function AuditSkeleton() {
  return (
    <div className={styles.auditCard}>
      <Skeleton width="150px" height="20px" />
      <div className={styles.auditChart}>
        <Skeleton width="120px" height="120px" borderRadius="50%" />
      </div>
      <div className={styles.auditStats}>
        <div className={styles.statRow}>
          <Skeleton width="100px" height="14px" />
          <Skeleton width="30px" height="14px" />
        </div>
        <div className={styles.statRow}>
          <Skeleton width="120px" height="14px" />
          <Skeleton width="30px" height="14px" />
        </div>
      </div>
    </div>
  );
}
