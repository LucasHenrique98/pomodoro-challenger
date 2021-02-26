import { useContext } from 'react';
import { challengesContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
  const { level } = useContext(challengesContext);

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/LucasHenrique98.png" alt="Lucas Henrique" />
      <div>
        <strong>Lucas Henrique</strong>
        <p>
          {' '}
          <img src="icons/level.svg" alt="level" /> Level {level}
        </p>
      </div>
    </div>
  );
}
