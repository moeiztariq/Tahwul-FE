import type { Status } from '../../types/common';

/**
 * Progress Tracking Feature Types
 * These types will be expanded based on the design specifications
 */

// Placeholder types - to be expanded
export interface ProgressReport {
  id: string;
  initiativeId: string;
  date: Date;
  progress: number;
  status: Status;
  notes: string;
  createdBy: string;
}

export interface KPI {
  id: string;
  name: string;
  description: string;
  currentValue: number;
  targetValue: number;
  unit: string;
  perspectiveId: string;
  trend: 'up' | 'down' | 'stable';
}

export interface Milestone {
  id: string;
  title: string;
  description: string;
  initiativeId: string;
  dueDate: Date;
  completedDate?: Date;
  status: Status;
}
