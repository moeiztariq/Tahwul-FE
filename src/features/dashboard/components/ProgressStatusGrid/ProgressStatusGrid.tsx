import styles from './ProgressStatusGrid.module.scss';

type StatusType = 'not-started' | 'in-progress' | 'completed' | 'partially-uploaded' | 'fully-uploaded' | 'delayed';

interface StatusItem {
  name: string;
  status: StatusType;
}

interface PerspectiveColumn {
  title: string;
  subtitle: string;
  progress: string;
  categories: {
    name: string;
    items: StatusItem[];
  }[];
}

interface ProgressStatusGridProps {
  columns: PerspectiveColumn[];
}

const statusColors: Record<StatusType, string> = {
  'not-started': '#6B7280',
  'in-progress': '#3B82F6',
  'completed': '#1EA54E',
  'partially-uploaded': '#F59F0A',
  'fully-uploaded': '#1EA54E',
  'delayed': '#EF4444',
};

const NumberedCircle = ({ number, status }: { number: number; status: StatusType }) => (
  <div 
    className={styles.numberedCircle}
    style={{ backgroundColor: statusColors[status] }}
  >
    {number}
  </div>
);

export function ProgressStatusGrid({ columns }: ProgressStatusGridProps) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Progress Status</h2>
        <div className={styles.legend}>
          <div className={styles.legendItem}>
            <div className={styles.legendDot} style={{ backgroundColor: '#6B7280' }} />
            <span>Not Started</span>
          </div>
          <div className={styles.legendItem}>
            <div className={styles.legendDot} style={{ backgroundColor: '#3B82F6' }} />
            <span>In Progress</span>
          </div>
          <div className={styles.legendItem}>
            <div className={styles.legendDot} style={{ backgroundColor: '#1EA54E' }} />
            <span>Completed</span>
          </div>
          <div className={styles.legendItem}>
            <div className={styles.legendDot} style={{ backgroundColor: '#F59F0A' }} />
            <span>Partially Uploaded</span>
          </div>
          <div className={styles.legendItem}>
            <div className={styles.legendDot} style={{ backgroundColor: '#EF4444' }} />
            <span>Delayed</span>
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className={styles.summaryGrid}>
        {columns.map((column, index) => (
          <div key={index} className={styles.columnCard}>
            <div className={styles.columnHeader}>
              <h3 className={styles.columnTitle}>{column.title}</h3>
            </div>
            <div className={styles.percentageContainer}>
              <div className={styles.percentage}>{column.progress}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Detailed Cards Grid - 10 Columns */}
      <div className={styles.detailGrid}>
        {columns.map((column, columnIndex) => {
          const cardCount = column.categories.length;
          let cardHeightClass = '';
          
          if (cardCount === 3) {
            cardHeightClass = styles.card3;
          } else if (cardCount === 2) {
            cardHeightClass = styles.card2;
          } else if (cardCount === 1) {
            cardHeightClass = styles.card1;
          }
          
          return (
            <div key={columnIndex} className={styles.detailColumn}>
              {column.categories.map((category, categoryIndex) => {
                const circleCount = category.items.length;
                const circlesLayoutClass = circleCount <= 2 ? styles.circlesRow : styles.circlesColumns;
                const circlesMarginClass = cardCount === 1 ? styles.circlesMarginTop : '';
                
                return (
                  <div key={`${columnIndex}-${categoryIndex}`} className={`${styles.detailCard} ${cardHeightClass}`}>
                    <div className={styles.cardTitle}>{category.name}</div>
                    <div className={`${styles.circlesContainer} ${circlesLayoutClass} ${circlesMarginClass}`}>
                      {category.items.map((item, itemIndex) => (
                        <NumberedCircle 
                          key={itemIndex} 
                          number={itemIndex + 1} 
                          status={item.status} 
                        />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
