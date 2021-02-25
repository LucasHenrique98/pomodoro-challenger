import styles from '../styles/components/Profile.module.css';

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/LucasHenrique98.png" alt="Lucas Henrique" />
      <div>
        <strong>Lucas Henrique</strong>
        <p>
          {' '}
          <img src="icons/level.svg" alt="level" /> Level 1
        </p>
      </div>
    </div>
  );
}
