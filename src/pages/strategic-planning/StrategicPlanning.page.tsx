import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';
import { EvidenceSummaryCard } from '../../features/strategic-planning/components/EvidenceSummaryCard';
import { ContentSection } from '../../features/strategic-planning/components/ContentSection';
import { LeaderCard } from '../../features/strategic-planning/components/LeaderCard';
import { EvidenceTable } from '../../features/strategic-planning/components/EvidenceTable';
import { CommentsSection } from '../../features/strategic-planning/components/CommentsSection';
import { RecentActivities } from '../../features/dashboard/components/RecentActivities';
import {
  HeaderSkeleton,
  TitleSectionSkeleton,
  EvidenceSummarySkeletons,
  TabsSkeleton,
  ContentSectionsSkeleton,
  LeadersSectionSkeleton,
} from '../../features/strategic-planning/components/PlanningSkeletons';
import { mockStrategicPlanningData } from '../../mocks/strategicPlanning.mock';
import TotalEvIcon from '../../assets/svg/totalEv.svg?react';
import UREVIcon from '../../assets/svg/UREV.svg?react';
import InProgIcon from '../../assets/svg/InProg.svg?react';
import CEVIcon from '../../assets/svg/CEV.svg?react';
import styles from './StrategicPlanning.page.module.scss';

type TabType = 'overview' | 'evidence';

export function StrategicPlanningPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<TabType>('overview');
  const [isLoading, setIsLoading] = useState(true);
  const data = mockStrategicPlanningData;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const chartData = [{
    name: 'Completion',
    value: data.completionPercentage,
    fill: '#22C55E',
  }];

  if (isLoading) {
    return (
      <div className={styles.page}>
        <HeaderSkeleton />

        <TitleSectionSkeleton />

        <EvidenceSummarySkeletons />

        <TabsSkeleton />

        <ContentSectionsSkeleton />

        <LeadersSectionSkeleton />
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <button className={styles.backButton} onClick={() => navigate(-1)}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          {data.category}
        </button>
      </div>

      <div className={styles.titleSection}>
        <div className={styles.titleContent}>
          <div className={styles.breadcrumb}>{data.subCategory}</div>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.description}>{data.description}</p>
        </div>
        <div className={styles.completionBadge}>
          <ResponsiveContainer width={80} height={80}>
            <RadialBarChart
              cx="50%"
              cy="50%"
              innerRadius="70%"
              outerRadius="100%"
              barSize={8}
              data={chartData}
              startAngle={90}
              endAngle={-270}
            >
              <RadialBar
                background={{ fill: '#E0E8ED' }}
                dataKey="value"
              />
            </RadialBarChart>
          </ResponsiveContainer>
          <span className={styles.completionValue}>{data.completionPercentage}%</span>
        </div>
      </div>

      <div className={styles.evidenceSummary}>
        <EvidenceSummaryCard
          icon={TotalEvIcon}
          count={data.evidenceSummary.total}
          label="Total Evidence"
          status="total"
        />
        <EvidenceSummaryCard
          icon={UREVIcon}
          count={data.evidenceSummary.underReview}
          label="Under Review Evidence"
          status="under-review"
        />
        <EvidenceSummaryCard
          icon={InProgIcon}
          count={data.evidenceSummary.inProgress}
          label="In Progress Evidence"
          status="in-progress"
        />
        <EvidenceSummaryCard
          icon={CEVIcon}
          count={data.evidenceSummary.completed}
          label="Completed Evidence"
          status="completed"
        />
      </div>

      <div className={styles.tabs}>
        <button
          className={`${styles.tab} ${activeTab === 'overview' ? styles.active : ''}`}
          onClick={() => setActiveTab('overview')}
        >
          Overview
        </button>
        <button
          className={`${styles.tab} ${activeTab === 'evidence' ? styles.active : ''}`}
          onClick={() => setActiveTab('evidence')}
        >
          Evidence
        </button>
      </div>

      {/* Content */}
      {activeTab === 'overview' && (
        <>
        <div className={styles.content}>
          <ContentSection title="Objective" content={data.sections.objective} />
          <ContentSection
            title="Implementation Requirements"
            content={data.sections.implementationRequirements}
          />
          <ContentSection
            title="Evidence Documents"
            content={data.sections.evidenceDocuments}
          />
          <ContentSection
            title="Related Regulations"
            content={data.sections.relatedRegulations}
          />
          <ContentSection title="Scope" content={data.sections.scope} />
        </div>
           <div className={styles.leadersSection}>
        <h3 className={styles.leadersTitle}>Leaders</h3>
        <div className={styles.leadersGrid}>
          {data.leaders.map((leader) => (
            <LeaderCard
              key={leader.id}
              name={leader.name}
              role={leader.role}
              avatar={leader.avatar}
            />
          ))}
        </div>
      </div>
        </>
      )}

      {activeTab === 'evidence' && (
        <div className={styles.evidenceContent}>
          <EvidenceTable documents={data.evidenceDocuments} />
          
          <div className={styles.evidenceGrid}>
            <CommentsSection comments={data.comments} />
            <RecentActivities data={data.evidenceActivities} />
          </div>
        </div>
      )}
   
    </div>
  );
}
