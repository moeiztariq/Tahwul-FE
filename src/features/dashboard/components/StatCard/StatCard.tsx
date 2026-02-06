import { useNavigate } from 'react-router-dom';
import styles from './StatCard.module.scss';
import type { FC, SVGProps } from 'react';

interface StatCardProps {
  value: string | number;
  label: string;
  icon: FC<SVGProps<SVGSVGElement>>;
  trend?: 'up' | 'down';
  trendValue?: string;
}

export function StatCard({ value, label, icon: Icon }: StatCardProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/perspectives');
  };

  return (
    <div className={styles.card} onClick={handleClick}>
      <Icon className={styles.icon} />
      <div className={styles.content}>
        <div className={styles.value}>{value}</div>
        <div className={styles.label}>{label}</div>
      </div>
    </div>
  );
}
