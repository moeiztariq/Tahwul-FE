import { useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from '../../../../components/ui/Dropdown';
import styles from './ProjectTimeline.module.scss';

interface TimelineMilestone {
  id: string;
  date: string;
  label: string;
  status: 'completed' | 'current' | 'upcoming';
}

interface ProjectTimelineProps {
  year: string;
  milestones: TimelineMilestone[];
}

const YEAR_OPTIONS = ['2024', '2025', '2026'];

export function ProjectTimeline({ year, milestones }: ProjectTimelineProps) {
  const [selectedYear, setSelectedYear] = useState(year);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Project Timeline</h2>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className={styles.yearButton}>
              {selectedYear}
              <svg className={styles.dropdownIcon} width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuRadioGroup value={selectedYear} onValueChange={setSelectedYear}>
              {YEAR_OPTIONS.map((yearOption) => (
                <DropdownMenuRadioItem key={yearOption} value={yearOption}>
                  {yearOption}
                </DropdownMenuRadioItem>
              ))}
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      
      <div className={styles.timeline}>
        <div className={styles.progressBar}>
          <div className={styles.progressFill} />
        </div>
        
        <div className={styles.milestones}>
          {milestones.map((milestone) => (
            <div key={milestone.id} className={styles.milestone}>
              <div className={`${styles.dot} ${styles[milestone.status]}`} />
              <div className={styles.info}>
                <span className={styles.date}>{milestone.date}</span>
                <span className={styles.label}>{milestone.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
