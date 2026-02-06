export const APP_NAME = 'Tahwul';
export const APP_VERSION = '1.0.0';

export const STATUS = {
  PENDING: 'pending',
  IN_PROGRESS: 'in-progress',
  COMPLETED: 'completed',
  BLOCKED: 'blocked',
  CANCELLED: 'cancelled',
} as const;

export const PRIORITY = {
  LOW: 'low',
  MEDIUM: 'medium',
  HIGH: 'high',
  CRITICAL: 'critical',
} as const;

export const DATE_FORMAT = {
  SHORT: 'MMM d, yyyy',
  LONG: 'MMMM d, yyyy',
  WITH_TIME: 'MMM d, yyyy HH:mm',
} as const;

export const API_ENDPOINTS = {
  DASHBOARD: '/api/dashboard',
  PLANNING: '/api/planning',
  TRACKING: '/api/tracking',
} as const;

// Pagination
export const DEFAULT_PAGE_SIZE = 10;
export const PAGE_SIZE_OPTIONS = [10, 20, 50, 100];

export const PERSPECTIVES = {
  FINANCIAL: 'financial',
  CUSTOMER: 'customer',
  INTERNAL_PROCESS: 'internal-process',
  LEARNING_GROWTH: 'learning-growth',
} as const;
