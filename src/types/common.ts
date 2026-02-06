export type Status = 'pending' | 'in-progress' | 'completed' | 'blocked' | 'cancelled';

export type Priority = 'low' | 'medium' | 'high' | 'critical';

export type Variant = 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';

export interface DateRange {
  start: Date;
  end: Date;
}

export interface PaginationParams {
  page: number;
  pageSize: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

export interface ApiResponse<T> {
  data: T;
  message?: string;
  error?: string;
}

export interface BaseEntity {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: string;
}

export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}
