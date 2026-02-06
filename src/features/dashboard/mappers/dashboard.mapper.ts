import type {
  DashboardSummaryDTO,
  DashboardSummary,
  PerspectiveProgressDTO,
  PerspectiveProgress,
  TimelineItemDTO,
  TimelineItem,
  RecentActivityDTO,
  RecentActivity,
} from '../dashboard.types';
import { formatDate, formatRelativeTime } from '../../../utils/formatters';

/**
 * Dashboard data mappers
 * Transform DTOs to ViewModels for UI consumption
 */

const perspectiveIcons: Record<string, string> = {
  financial: '💰',
  customer: '👥',
  'internal-process': '⚙️',
  'learning-growth': '📚',
};

const perspectiveNames: Record<string, string> = {
  financial: 'Financial',
  customer: 'Customer',
  'internal-process': 'Internal Process',
  'learning-growth': 'Learning & Growth',
};

export function mapDashboardSummary(dto: DashboardSummaryDTO): DashboardSummary {
  const completionRate =
    dto.totalInitiatives > 0 ? (dto.completedInitiatives / dto.totalInitiatives) * 100 : 0;

  return {
    totalInitiatives: dto.totalInitiatives,
    completedInitiatives: dto.completedInitiatives,
    inProgressInitiatives: dto.inProgressInitiatives,
    blockedInitiatives: dto.blockedInitiatives,
    overallProgress: dto.overallProgress,
    completionRate: Math.round(completionRate),
  };
}

export function mapPerspectiveProgress(dto: PerspectiveProgressDTO): PerspectiveProgress {
  return {
    id: dto.perspectiveId,
    name: dto.perspectiveName,
    progress: dto.progress,
    objectivesCount: dto.objectivesCount,
    icon: perspectiveIcons[dto.perspectiveId] || '📊',
  };
}

export function mapPerspectiveProgressList(dtos: PerspectiveProgressDTO[]): PerspectiveProgress[] {
  return dtos.map(mapPerspectiveProgress);
}

export function mapTimelineItem(dto: TimelineItemDTO): TimelineItem {
  const date = new Date(dto.date);

  return {
    id: dto.id,
    title: dto.title,
    date,
    formattedDate: formatDate(date),
    status: dto.status,
    perspectiveId: dto.perspectiveId,
    perspectiveName: perspectiveNames[dto.perspectiveId] || dto.perspectiveId,
  };
}

export function mapTimelineList(dtos: TimelineItemDTO[]): TimelineItem[] {
  return dtos.map(mapTimelineItem);
}

export function mapRecentActivity(dto: RecentActivityDTO): RecentActivity {
  const timestamp = new Date(dto.timestamp);

  return {
    id: dto.id,
    type: dto.type,
    title: dto.title,
    description: dto.description,
    timestamp,
    formattedTime: formatRelativeTime(timestamp),
    user: {
      id: dto.userId,
      name: dto.userName,
    },
  };
}

export function mapRecentActivityList(dtos: RecentActivityDTO[]): RecentActivity[] {
  return dtos.map(mapRecentActivity);
}
