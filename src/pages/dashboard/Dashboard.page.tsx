import { useState, useEffect } from 'react';
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
import {
  mockTimelineMilestones,
  mockStatistics,
  mockProgressColumns,
  mockPerformanceLeaders,
  mockPerformanceData,
  mockRecentActivities,
} from '../../mocks/dashboard.mock';
import StatIcon1 from '../../assets/svg/statIcon1.svg?react';
import StatIcon2 from '../../assets/svg/stat2.svg?react';
import StatIcon3 from '../../assets/svg/state3.svg?react';
import StatIcon4 from '../../assets/svg/state4.svg?react';
import StatIcon5 from '../../assets/svg/stat5.svg?react';
import styles from './Dashboard.page.module.scss';

export function DashboardPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
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
  return (
    <div className={styles.page}>
      <ProjectTimeline year="2026" milestones={mockTimelineMilestones} />

      <div className={styles.statsGrid}>
        <StatCard
          icon={StatIcon1}
          value={mockStatistics.overallProgress}
          label="Overall Progress"
        />
        <StatCard
          icon={StatIcon2}
          value={mockStatistics.totalCriteria}
          label="Total Criteria"
        />
        <StatCard
          icon={StatIcon3}
          value={mockStatistics.completedCriteria}
          label="Completed Criteria"
        />
        <StatCard
          icon={StatIcon4}
          value={mockStatistics.evidenceDocuments}
          label="Evidence Documents"
        />
        <StatCard
          icon={StatIcon5}
          value={mockStatistics.evidenceCompleted}
          label="Evidence (Completed)"
        />
        <StatCard
          icon={StatIcon1}
          value={mockStatistics.uploadedToDGA}
          label="Uploaded To DGA"
        />
      </div>

      <ProgressStatusGrid columns={mockProgressColumns} />

      <div className={styles.bottomGrid}>
        <div className={styles.complianceSection}>
          <ComplianceScore score={65} baseline="Standards 2025" />
        </div>

        <div className={styles.leadersSection}>
          <PerformanceLeaders leaders={mockPerformanceLeaders} />
        </div>

        <div className={styles.rightColumn}>
          <RecentActivities data={mockRecentActivities} height="100%" />
          <AuditReadiness readinessLevel={80} overdueStats={12} missingEvidence={5} />
        </div>

        <div className={styles.performanceChartSection}>
          <PerformanceChart data={mockPerformanceData} />
        </div>
      </div>
    </div>
  );
}
