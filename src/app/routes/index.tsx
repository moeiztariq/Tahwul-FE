import { Routes, Route, Navigate } from 'react-router-dom';
import { DashboardPage } from '../../pages/dashboard';
import { PlanningPage } from '../../pages/strategic-planning';
import { TrackingPage } from '../../pages/tracking';
import { ComingSoonPage } from '../../pages/coming-soon';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DashboardPage />} />
      
      <Route path="/planning" element={<PlanningPage />} />
      <Route path="/perspectives" element={<PlanningPage />} />
      
      <Route path="/tracking" element={<TrackingPage />} />
      
      <Route 
        path="/tasks" 
        element={<ComingSoonPage title="Tasks" description="Task management feature is under development and will be available soon." />} 
      />
      <Route 
        path="/documents" 
        element={<ComingSoonPage title="Documents" description="Document management feature is under development and will be available soon." />} 
      />
      <Route 
        path="/reports" 
        element={<ComingSoonPage title="Reports" description="Reports feature is under development and will be available soon." />} 
      />
      <Route 
        path="/users" 
        element={<ComingSoonPage title="Users & Roles" description="User and role management feature is under development and will be available soon." />} 
      />
      
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
