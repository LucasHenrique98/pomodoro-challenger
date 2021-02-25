import React, { useContext } from 'react';
import { challengesContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/ExperienceBar.module.css';

export default function ExperienceBar() {
  const { currentExperience, experienceToNextLevel } = useContext(
    challengesContext
  );

  const percentToNextLevel = Math.round(
    (currentExperience * 100) / experienceToNextLevel
  );

  return (
    <header className={styles.experienceBar}>
      <span>0 xp</span>
      <div>
        <div style={{ width: `${percentToNextLevel}%` }} />
        <span
          style={{ left: `${percentToNextLevel}%` }}
          className={styles.currentExperience}
        >
          {currentExperience} xp
        </span>
      </div>
      <span>{experienceToNextLevel} px</span>
    </header>
  );
}
