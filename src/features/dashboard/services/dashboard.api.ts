/**
 * Dashboard API service
 * Simulates API calls with mock data
 * Note: This is kept for future real API integration
 */

const SIMULATED_DELAY = 300;

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function fetchDashboardData() {
  await delay(SIMULATED_DELAY);
  
  // For now, return empty data as the Dashboard page uses mock data directly
  // In production, this would make real API calls
  return {
    summary: {},
    perspectives: [],
    timeline: [],
    activities: [],
  };
}
