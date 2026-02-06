import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import type { FC, SVGProps } from 'react';
import styles from './Sidebar.module.scss';
import TahwulLogo from '../../../assets/svg/tahwul.svg?react';
import DashboardIcon from '../../../assets/svg/dashboard.svg?react';
import PerspectivesIcon from '../../../assets/svg/presp.svg?react';
import DocumentsIcon from '../../../assets/svg/docs.svg?react';
import ReportsIcon from '../../../assets/svg/reports.svg?react';
import UsersIcon from '../../../assets/svg/users.svg?react';
import Docx from '../../../assets/svg/dox.svg?react';
import CollapseIcon from '../../../assets/svg/collaps.svg?react';


interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

interface NavItem {
  name: string;
  path: string;
  icon: FC<SVGProps<SVGSVGElement>>;
}

const navigation: NavItem[] = [
  { name: 'dashboard', path: '/', icon: DashboardIcon },
  { name: 'perspectives', path: '/perspectives', icon: PerspectivesIcon },
  { name: 'tasks', path: '/tasks', icon: DocumentsIcon },
  { name: 'documents', path: '/documents', icon:  Docx },
  { name: 'reports', path: '/reports', icon: ReportsIcon },
  { name: 'users & roles', path: '/users', icon: UsersIcon },
];

export function Sidebar({ isOpen, onToggle }: SidebarProps) {
  return (
    <aside className={clsx(styles.sidebar, !isOpen && styles.closed)}>
      <div className={styles.header}>
        <div className={styles.brand}>
          <TahwulLogo className={styles.logoImage} />
        </div>
        <button 
          className={styles.toggleButton} 
          onClick={onToggle}
          aria-label={isOpen ? 'Collapse sidebar' : 'Expand sidebar'}
        >
          <CollapseIcon className={clsx(styles.toggleIcon, !isOpen && styles.rotated)} />
        </button>
      </div>

      <nav className={styles.nav}>
        <ul className={styles.navList}>
          {navigation.map((item) => {
            const IconComponent = item.icon;
            return (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    clsx(styles.navLink, isActive && styles.active)
                  }
                >
                  <IconComponent className={styles.icon} />
                  <span className={styles.label}>{item.name}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className={styles.footer}>
        <p className={styles.version}>v1.0.0</p>
      </div>
    </aside>
  );
}
