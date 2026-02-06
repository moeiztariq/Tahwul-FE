import { Skeleton } from '../../../../components/ui/Skeleton';
import styles from './PlanningSkeletons.module.scss';

export function HeaderSkeleton() {
  return (
    <div className={styles.header}>
      <Skeleton width="250px" height="20px" />
    </div>
  );
}

export function TitleSectionSkeleton() {
  return (
    <div className={styles.titleSection}>
      <div className={styles.titleContent}>
        <Skeleton width="150px" height="20px" borderRadius="10px" />
        <Skeleton width="400px" height="28px" />
        <Skeleton width="500px" height="16px" />
      </div>
      <Skeleton width="80px" height="80px" borderRadius="50%" />
    </div>
  );
}

export function EvidenceSummarySkeletons() {
  return (
    <div className={styles.evidenceSummary}>
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className={styles.evidenceCard}>
          <Skeleton width="24px" height="24px" borderRadius="4px" />
          <div className={styles.cardContent}>
            <Skeleton width="40px" height="24px" />
            <Skeleton width="120px" height="14px" />
          </div>
        </div>
      ))}
    </div>
  );
}

export function TabsSkeleton() {
  return (
    <div className={styles.tabs}>
      <Skeleton width="225px" height="40px" borderRadius="8px" />
    </div>
  );
}

export function ContentSectionsSkeleton() {
  return (
    <div className={styles.content}>
      {[1, 2, 3, 4, 5].map((i) => (
        <div key={i} className={styles.section}>
          <div className={styles.sectionTitle}>
            <Skeleton width="148px" height="40px" borderRadius="10px" />
          </div>
          <div className={styles.sectionContent}>
            <Skeleton width="100%" height="60px" borderRadius="10px" />
          </div>
        </div>
      ))}
    </div>
  );
}

export function LeadersSectionSkeleton() {
  return (
    <div className={styles.leadersSection}>
      <Skeleton width="100px" height="20px" />
      <div className={styles.leadersGrid}>
        {[1, 2].map((i) => (
          <div key={i} className={styles.leaderCard}>
            <Skeleton width="47px" height="47px" borderRadius="50%" />
            <div className={styles.leaderInfo}>
              <Skeleton width="100px" height="16px" />
              <Skeleton width="120px" height="16px" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function EvidenceTableSkeleton() {
  return (
    <div className={styles.evidenceTable}>
      <Skeleton width="180px" height="20px" />
      <div className={styles.tableHeader}>
        {[1, 2, 3, 4, 5, 6, 7].map((i) => (
          <Skeleton key={i} width="100px" height="16px" />
        ))}
      </div>
      {[1, 2, 3].map((i) => (
        <div key={i} className={styles.tableRow}>
          {[1, 2, 3, 4, 5, 6, 7].map((j) => (
            <Skeleton key={j} width="80px" height="14px" />
          ))}
        </div>
      ))}
    </div>
  );
}

export function CommentsSectionSkeleton() {
  return (
    <div className={styles.commentsSection}>
      <Skeleton width="120px" height="20px" />
      <div className={styles.commentsList}>
        {[1, 2].map((i) => (
          <div key={i} className={styles.commentItem}>
            <Skeleton width="32px" height="32px" borderRadius="50%" />
            <div className={styles.commentContent}>
              <div className={styles.commentHeader}>
                <Skeleton width="100px" height="14px" />
                <Skeleton width="80px" height="12px" />
              </div>
              <Skeleton width="100%" height="14px" />
            </div>
          </div>
        ))}
      </div>
      <div className={styles.commentInput}>
        <Skeleton width="100%" height="80px" borderRadius="8px" />
        <Skeleton width="120px" height="36px" borderRadius="8px" />
      </div>
    </div>
  );
}

export function ActivitiesSkeletonSmall() {
  return (
    <div className={styles.activitiesSection}>
      <Skeleton width="150px" height="20px" />
      <div className={styles.activitiesList}>
        {[1, 2, 3].map((i) => (
          <div key={i} className={styles.activityItem}>
            <Skeleton width="8px" height="8px" borderRadius="50%" />
            <div className={styles.activityContent}>
              <Skeleton width="200px" height="14px" />
            </div>
            <Skeleton width="60px" height="12px" />
          </div>
        ))}
      </div>
    </div>
  );
}
