import styles from './EvidenceSummaryCard.module.scss';
import type { FC, SVGProps } from 'react';

type EvidenceStatus = 'total' | 'under-review' | 'in-progress' | 'completed';

interface EvidenceSummaryCardProps {
  count: number;
  label: string;
  status: EvidenceStatus;
  icon: FC<SVGProps<SVGSVGElement>>;
}

export function EvidenceSummaryCard({ count, label, status, icon: Icon }: EvidenceSummaryCardProps) {
  return (
    <div className={`${styles.card} ${styles[status]}`}>
      <div className={styles.iconWrapper}>
        <Icon className={styles.icon} />
      </div>
      <div className={styles.content}>
        <div className={styles.count}>{count}</div>
        <div className={styles.label}>{label}</div>
      </div>
    </div>
  );
}
