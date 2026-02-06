import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import styles from './AuditReadiness.module.scss';

interface AuditReadinessProps {
  readinessLevel: number;
  overdueStats: number;
  missingEvidence: number;
}

export function AuditReadiness({ readinessLevel, overdueStats, missingEvidence }: AuditReadinessProps) {
  const data = [
    { name: 'Ready', value: readinessLevel },
    { name: 'NotReady', value: 100 - readinessLevel }
  ];

  const COLORS = ['#22C55E', '#E5E7EB'];

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Audit Readiness</h3>
      
      <div className={styles.gaugeWrapper}>
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="70%"
              startAngle={180}
              endAngle={0}
              innerRadius={80}
              outerRadius={110}
              paddingAngle={0}
              dataKey="value"
              cornerRadius={5}
            >
              {data.map((_entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className={styles.scoreValue}>
          <span className={styles.percentage}>{readinessLevel}</span>
          <span className={styles.unit}>%</span>
        </div>
        <div className={styles.baseline}>Readiness Level</div>
      </div>
      
      <div className={styles.stats}>
        <div className={styles.stat}>
          <div className={styles.statValue}>{overdueStats}</div>
          <div className={styles.statLabel}>Overdue Stats</div>
        </div>
        <div className={styles.stat}>
          <div className={styles.statValue}>{missingEvidence}</div>
          <div className={styles.statLabel}>Missing Evidence</div>
        </div>
      </div>
    </div>
  );
}
