import styles from './LeaderCard.module.scss';
import PersonImage from '../../../../assets/Person.jpg';

interface LeaderCardProps {
  name: string;
  role: string;
  avatar?: string;
}

export function LeaderCard({ name, role, avatar }: LeaderCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.avatar}>
        <img src={avatar || PersonImage} alt={name} className={styles.avatarImage} />
      </div>
      <div className={styles.info}>
        <div className={styles.name}>{name}</div>
        <div className={styles.role}>{role}</div>
      </div>
    </div>
  );
}
