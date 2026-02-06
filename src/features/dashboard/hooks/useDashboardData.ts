/**
 * Hook to fetch and manage dashboard data
 * Currently using static mock data - ready for API integration
 */

export function useDashboardData() {
  // This hook is kept for future real API integration
  // Currently the Dashboard page uses mock data directly
  return {
    data: null,
    loading: false,
    error: null,
    refetch: () => {},
  };
}
