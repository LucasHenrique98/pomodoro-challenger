import { useContext } from 'react';
import { challengesContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
  const { level } = useContext(challengesContext);

  return (
    <div className={styles.profileContainer}>
      <img
        src={`https://github.com/${localStorage.getItem('username')}.png`}
        alt="username image"
      />
      <div>
        <strong>{localStorage.getItem('username')}</strong>
        <p>
          {' '}
          <img src="icons/level.svg" alt="level" /> Level {level}
        </p>
      </div>
    </div>
  );
}
