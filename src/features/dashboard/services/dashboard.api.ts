import type { ApiResponse } from '../../../types/common';
import {
  mockTimelineMilestones,
  mockTimelineByYear,
  mockStatistics,
  mockProgressColumns,
  mockPerformanceLeaders,
  mockPerformanceData,
  mockRecentActivities,
} from '../../../mocks/dashboard.mock';

const SIMULATED_DELAY = 800;
const SIMULATED_ERROR_RATE = 0;

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function shouldSimulateError(): boolean {
  return Math.random() < SIMULATED_ERROR_RATE;
}

export interface DashboardApiResponse {
  timeline: typeof mockTimelineMilestones;
  timelineByYear: typeof mockTimelineByYear;
  statistics: typeof mockStatistics;
  progressColumns: typeof mockProgressColumns;
  performanceLeaders: typeof mockPerformanceLeaders;
  performanceData: typeof mockPerformanceData;
  recentActivities: typeof mockRecentActivities;
}

export async function fetchDashboardData(): Promise<ApiResponse<DashboardApiResponse>> {
  try {
    await delay(SIMULATED_DELAY);

    if (shouldSimulateError()) {
      throw new Error('Simulated network error');
    }

    const data: DashboardApiResponse = {
      timeline: mockTimelineMilestones,
      timelineByYear: mockTimelineByYear,
      statistics: mockStatistics,
      progressColumns: mockProgressColumns,
      performanceLeaders: mockPerformanceLeaders,
      performanceData: mockPerformanceData,
      recentActivities: mockRecentActivities,
    };

    return {
      data,
      message: 'Dashboard data loaded successfully',
    };
  } catch (error) {
    if (import.meta.env.DEV) {
      console.error('Failed to fetch dashboard data:', error);
    }

    return {
      data: {} as DashboardApiResponse,
      error: error instanceof Error ? error.message : 'Failed to load dashboard data',
    };
  }
}

export function isApiError<T>(response: ApiResponse<T>): response is ApiResponse<T> & { error: string } {
  return response.error !== undefined;
}
