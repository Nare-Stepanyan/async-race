import React from 'react';
import { FaPlay } from 'react-icons/fa';
import styles from './race.module.scss';

function Race() {
  const startRace = () => {
    console.log('start race');
  };

  return (
    <button type="button" onClick={startRace} className={styles.race}>
      Race <FaPlay className={styles.icon} />
    </button>
  );
}

export default Race;
