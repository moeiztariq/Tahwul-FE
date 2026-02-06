import { useNavigate } from 'react-router-dom';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import styles from './ComplianceScore.module.scss';

interface ComplianceScoreProps {
  score: number;
  baseline?: string;
}

export function ComplianceScore({ score, baseline }: ComplianceScoreProps) {
  const navigate = useNavigate();
  const data = [
    { name: 'Completed', value: score },
    { name: 'Remaining', value: 100 - score }
  ];

  const COLORS = ['#DC2626', '#E5E7EB'];

  const handleClick = () => {
    navigate('/perspectives');
  };

  return (
    <div className={styles.container} onClick={handleClick}>
      <h3 className={styles.title}>Overall Compliance Score</h3>
      
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
          <span className={styles.percentage}>{score}</span>
          <span className={styles.unit}>%</span>
        </div>
        {baseline && (
          <div className={styles.baseline}>Basic {baseline}</div>
        )}
      </div>
    </div>
  );
}
