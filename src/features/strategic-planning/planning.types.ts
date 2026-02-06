import type { Status, Priority } from '../../types/common';

/**
 * Strategic Planning Feature Types
 * These types will be expanded based on the design specifications
 */

// Placeholder types - to be expanded
export interface Initiative {
  id: string;
  title: string;
  description: string;
  status: Status;
  priority: Priority;
  perspectiveId: string;
  startDate: Date;
  endDate: Date;
  progress: number;
  ownerId: string;
}

export interface Objective {
  id: string;
  title: string;
  description: string;
  initiativeId: string;
  perspectiveId: string;
  status: Status;
  progress: number;
}

export interface KeyResult {
  id: string;
  title: string;
  objectiveId: string;
  targetValue: number;
  currentValue: number;
  unit: string;
  status: Status;
}
