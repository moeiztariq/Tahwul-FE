import { useState } from 'react';
import styles from './CommentsSection.module.scss';

interface Comment {
  id: string;
  author: string;
  authorInitial: string;
  text: string;
  timestamp: string;
}

interface CommentsSectionProps {
  comments: Comment[];
  onPostComment?: (text: string) => void;
}

export function CommentsSection({ comments, onPostComment }: CommentsSectionProps) {
  const [commentText, setCommentText] = useState('');

  const handlePostComment = () => {
    if (commentText.trim() && onPostComment) {
      onPostComment(commentText);
      setCommentText('');
    }
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Comments</h3>

      <div className={styles.commentsList}>
        {comments.map((comment) => (
          <div key={comment.id} className={styles.comment}>
            <div className={styles.avatar}>{comment.authorInitial}</div>
            <div className={styles.commentContent}>
              <div className={styles.commentHeader}>
                <span className={styles.author}>{comment.author}</span>
                <span className={styles.timestamp}>{comment.timestamp}</span>
              </div>
              <p className={styles.text}>{comment.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.postComment}>
        <textarea
          className={styles.textarea}
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          placeholder="Write a comment..."
          rows={3}
        />
        <button className={styles.postButton} onClick={handlePostComment}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M14 2L7 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14 2L9.5 14L7 9L2 6.5L14 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Post Comment
        </button>
      </div>
    </div>
  );
}
