import { useState } from 'react';
import styles from './AppLayout.module.scss';
import { Sidebar } from '../Sidebar';
import { Header } from '../Header';

interface AppLayoutProps {
  children: React.ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <div className={styles.layout}>
      <Sidebar isOpen={sidebarOpen} onToggle={toggleSidebar} />
      <div className={styles.main}>
        <Header onMenuClick={toggleSidebar} />
        <main className={styles.content}>{children}</main>
      </div>
    </div>
  );
}
