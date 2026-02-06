import { useNavigate } from 'react-router-dom';
import styles from './PerformanceLeaders.module.scss';
import PersonImage from '../../../../assets/Person.jpg';

interface Leader {
  id: string;
  name: string;
  perspective: string;
  score: number;
  avatar?: string;
}

interface PerformanceLeadersProps {
  leaders: Leader[];
}

export function PerformanceLeaders({ leaders }: PerformanceLeadersProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/perspectives');
  };

  return (
    <div className={styles.container} onClick={handleClick}>
      <h3 className={styles.title}>Top Performing Perspective Leaders</h3>
      
      <div className={styles.list}>
        {leaders.map((leader) => (
          <div key={leader.id} className={styles.item}>
            <div className={styles.info}>
              <div className={styles.avatar}>
                <img src={leader.avatar || PersonImage} alt={leader.name} />
              </div>
              <div className={styles.details}>
                <div className={styles.name}>{leader.name}</div>
                <div className={styles.perspective}>{leader.perspective}</div>
              </div>
            </div>
            <div className={styles.score}>{leader.score}%</div>
          </div>
        ))}
      </div>
    </div>
  );
}
