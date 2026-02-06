import type { Status } from '../../types/common';

/**
 * Dashboard Feature Types
 */

// DTO Types (from API)
export interface DashboardSummaryDTO {
  totalInitiatives: number;
  completedInitiatives: number;
  inProgressInitiatives: number;
  blockedInitiatives: number;
  overallProgress: number;
}

export interface PerspectiveProgressDTO {
  perspectiveId: string;
  perspectiveName: string;
  progress: number;
  objectivesCount: number;
}

export interface TimelineItemDTO {
  id: string;
  title: string;
  date: string;
  status: Status;
  perspectiveId: string;
}

export interface RecentActivityDTO {
  id: string;
  type: 'created' | 'updated' | 'completed' | 'comment';
  title: string;
  description: string;
  timestamp: string;
  userId: string;
  userName: string;
}

// ViewModel Types (for UI consumption)
export interface DashboardSummary {
  totalInitiatives: number;
  completedInitiatives: number;
  inProgressInitiatives: number;
  blockedInitiatives: number;
  overallProgress: number;
  completionRate: number;
}

export interface PerspectiveProgress {
  id: string;
  name: string;
  progress: number;
  objectivesCount: number;
  icon: string;
}

export interface TimelineItem {
  id: string;
  title: string;
  date: Date;
  formattedDate: string;
  status: Status;
  perspectiveId: string;
  perspectiveName: string;
}

export interface RecentActivity {
  id: string;
  type: 'created' | 'updated' | 'completed' | 'comment';
  title: string;
  description: string;
  timestamp: Date;
  formattedTime: string;
  user: {
    id: string;
    name: string;
  };
}

export interface DashboardData {
  summary: DashboardSummary;
  perspectiveProgress: PerspectiveProgress[];
  timeline: TimelineItem[];
  recentActivities: RecentActivity[];
}
