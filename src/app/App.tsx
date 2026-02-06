import { AppProviders } from './providers/AppProviders';
import { AppRoutes } from './routes';
import { AppLayout } from '../components/layout/AppLayout';
import '../styles/global.scss';

export function App() {
  return (
    <AppProviders>
      <AppLayout>
        <AppRoutes />
      </AppLayout>
    </AppProviders>
  );
}
