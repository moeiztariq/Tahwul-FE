import { AppProviders } from './providers/AppProviders';
import { AppRoutes } from './routes';
import { AppLayout } from '../components/layout/AppLayout';
import { ErrorBoundary } from '../components/ErrorBoundary';
import '../styles/global.scss';

export function App() {
  return (
    <ErrorBoundary>
      <AppProviders>
        <AppLayout>
          <AppRoutes />
        </AppLayout>
      </AppProviders>
    </ErrorBoundary>
  );
}
