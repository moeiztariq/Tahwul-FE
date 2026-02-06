import styles from './EvidenceTable.module.scss';

interface EvidenceDocument {
  id: string;
  documentNumber: string;
  documentName: string;
  documentLead: string;
  documentPreparer: string;
  date: string;
  dueDate: string;
  status: 'approved' | 'pending-review' | 'in-progress';
}

interface EvidenceTableProps {
  documents: EvidenceDocument[];
}

export function EvidenceTable({ documents }: EvidenceTableProps) {
  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'approved':
        return 'Approved';
      case 'pending-review':
        return 'Pending Review';
      case 'in-progress':
        return 'In Progress';
      default:
        return status;
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Document Number</th>
              <th>Document Name</th>
              <th>Document Lead</th>
              <th>Document Preparer</th>
              <th>Date</th>
              <th>Due Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {documents.map((doc) => (
              <tr key={doc.id}>
                <td>{doc.documentNumber}</td>
                <td>{doc.documentName}</td>
                <td>{doc.documentLead}</td>
                <td>{doc.documentPreparer}</td>
                <td>{doc.date}</td>
                <td>{doc.dueDate}</td>
                <td>
                  <span className={`${styles.status} ${styles[doc.status]}`}>
                    {getStatusLabel(doc.status)}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
