import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import styles from './PerformanceChart.module.scss';

interface MonthData {
  month: string;
  value: number;
}

interface PerformanceChartProps {
  data: MonthData[];
  title?: string;
}

export function PerformanceChart({ data, title = '12-Month Performance' }: PerformanceChartProps) {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      
      <div className={styles.chartWrapper}>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={data} barSize={24}>
            <defs>
              <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3B82F6" stopOpacity={1} />
                <stop offset="100%" stopColor="#93C5FD" stopOpacity={0.3} />
              </linearGradient>
            </defs>
            <XAxis 
              dataKey="month" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#6B7280', fontSize: 12 }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#6B7280', fontSize: 12 }}
              domain={[0, 100]}
            />
            <Bar 
              dataKey="value" 
              fill="url(#barGradient)"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
