import type { Status, Variant } from '../types/common';

export function statusToVariant(status: Status): Variant {
  const mapping: Record<Status, Variant> = {
    pending: 'warning',
    'in-progress': 'info',
    completed: 'success',
    blocked: 'error',
    cancelled: 'secondary',
  };

  return mapping[status] || 'secondary';
}

export function statusToLabel(status: Status): string {
  const mapping: Record<Status, string> = {
    pending: 'Pending',
    'in-progress': 'In Progress',
    completed: 'Completed',
    blocked: 'Blocked',
    cancelled: 'Cancelled',
  };

  return mapping[status] || status;
}

export function progressToVariant(progress: number): Variant {
  if (progress >= 100) return 'success';
  if (progress >= 75) return 'info';
  if (progress >= 50) return 'primary';
  if (progress >= 25) return 'warning';
  return 'error';
}
