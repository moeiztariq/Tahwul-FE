import { useState, useEffect, useCallback } from 'react';
import { fetchDashboardData, isApiError, type DashboardApiResponse } from '../services/dashboard.api';

interface UseDashboardDataState {
  data: DashboardApiResponse | null;
  loading: boolean;
  error: string | null;
}

interface UseDashboardDataReturn extends UseDashboardDataState {
  refetch: () => Promise<void>;
}

export function useDashboardData(): UseDashboardDataReturn {
  const [state, setState] = useState<UseDashboardDataState>({
    data: null,
    loading: true,
    error: null,
  });

  const refetch = useCallback(async () => {
    setState((prev) => ({ ...prev, loading: true, error: null }));

    const response = await fetchDashboardData();

    if (isApiError(response)) {
      setState({
        data: null,
        loading: false,
        error: response.error,
      });
    } else {
      setState({
        data: response.data,
        loading: false,
        error: null,
      });
    }
  }, []);

  useEffect(() => {
    let isMounted = true;

    (async () => {
      setState((prev) => ({ ...prev, loading: true, error: null }));

      const response = await fetchDashboardData();

      if (isMounted) {
        if (isApiError(response)) {
          setState({
            data: null,
            loading: false,
            error: response.error,
          });
        } else {
          setState({
            data: response.data,
            loading: false,
            error: null,
          });
        }
      }
    })();

    return () => {
      isMounted = false;
    };
  }, []);

  return {
    ...state,
    refetch,
  };
}
