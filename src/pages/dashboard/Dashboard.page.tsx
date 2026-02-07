import { ProjectTimeline } from '../../features/dashboard/components/ProjectTimeline';
import { StatCard } from '../../features/dashboard/components/StatCard';
import { ProgressStatusGrid } from '../../features/dashboard/components/ProgressStatusGrid';
import { ComplianceScore } from '../../features/dashboard/components/ComplianceScore';
import { PerformanceLeaders } from '../../features/dashboard/components/PerformanceLeaders';
import { PerformanceChart } from '../../features/dashboard/components/PerformanceChart';
import { AuditReadiness } from '../../features/dashboard/components/AuditReadiness';
import { RecentActivities } from '../../features/dashboard/components/RecentActivities';
import {
  TimelineSkeleton,
  StatCardSkeleton,
  ProgressGridSkeleton,
  ComplianceSkeleton,
  LeadersSkeleton,
  ChartSkeleton,
  ActivitiesSkeleton,
  AuditSkeleton,
} from '../../features/dashboard/components/DashboardSkeletons';
import { ErrorState } from '../../components/ui/ErrorState';
import { useDashboardData } from '../../features/dashboard/hooks/useDashboardData';
import { statCardsConfig } from '../../mocks/dashboard.mock';
import styles from './Dashboard.page.module.scss';

export function DashboardPage() {
  const { data, loading, error, refetch } = useDashboardData();

  if (loading) {
    return (
      <div className={styles.page}>
        <TimelineSkeleton />

        <div className={styles.statsGrid}>
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <StatCardSkeleton key={i} />
          ))}
        </div>

        <ProgressGridSkeleton />

        <div className={styles.bottomGrid}>
          <div className={styles.complianceSection}>
            <ComplianceSkeleton />
          </div>

          <div className={styles.leadersSection}>
            <LeadersSkeleton />
          </div>

          <div className={styles.rightColumn}>
            <ActivitiesSkeleton />
            <AuditSkeleton />
          </div>

          <div className={styles.performanceChartSection}>
            <ChartSkeleton />
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.page}>
        <ErrorState 
          title="Failed to load dashboard"
          message={error}
          onRetry={refetch}
        />
      </div>
    );
  }

  if (!data) {
    return (
      <div className={styles.page}>
        <ErrorState 
          title="No data available"
          message="Dashboard data is not available at the moment."
          onRetry={refetch}
        />
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <ProjectTimeline year="2026" timelineByYear={data.timelineByYear} />

      <div className={styles.statsGrid}>
        {statCardsConfig.map((stat) => (
          <StatCard
            key={stat.id}
            icon={stat.icon}
            value={data.statistics[stat.valueKey]}
            label={stat.label}
          />
        ))}
      </div>

      <ProgressStatusGrid columns={data.progressColumns} />

      <div className={styles.bottomGrid}>
        <div className={styles.complianceSection}>
          <ComplianceScore score={65} baseline="Standards 2025" />
        </div>

        <div className={styles.leadersSection}>
          <PerformanceLeaders leaders={data.performanceLeaders} />
        </div>

        <div className={styles.rightColumn}>
          <RecentActivities data={data.recentActivities} height="100%" />
          <AuditReadiness readinessLevel={80} overdueStats={12} missingEvidence={5} />
        </div>

        <div className={styles.performanceChartSection}>
          <PerformanceChart data={data.performanceData} />
        </div>
      </div>
    </div>
  );
}
