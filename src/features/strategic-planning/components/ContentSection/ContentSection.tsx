import styles from './ContentSection.module.scss';

interface ContentSectionProps {
  title: string;
  content: string | string[];
}

export function ContentSection({ title, content }: ContentSectionProps) {
  const renderContent = () => {
    if (Array.isArray(content)) {
      return (
        <ul className={styles.list}>
          {content.map((item, index) => (
            <li key={index} className={styles.listItem}>{item}</li>
          ))}
        </ul>
      );
    }
    return <p className={styles.text}>{content}</p>;
  };

  return (
    <div className={styles.section}>
      <div className={styles.titleWrapper}>
        <h3 className={styles.title}>{title}</h3>
      </div>
      <div className={styles.contentWrapper}>
        {renderContent()}
      </div>
    </div>
  );
}
