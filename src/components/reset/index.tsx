import React from 'react';
import { FaRegArrowAltCircleLeft } from 'react-icons/fa';
import styles from './reset.module.scss';

function Reset() {
  const handleReset = () => {
    console.log('reset cars');
  };

  return (
    <div>
      <button type="button" onClick={handleReset} className={styles.reset}>
        Reset <FaRegArrowAltCircleLeft className={styles.icon} />
      </button>
    </div>
  );
}

export default Reset;
