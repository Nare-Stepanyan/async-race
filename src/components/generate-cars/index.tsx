import React from 'react';
import Button from '../button/index.tsx';
import addGeneratedCarsInGarage from './generateCarsLogic.ts';
import generateRandomCars from '../../helpers/car-generator.ts';
import { HUNDRED } from '../../constants/index.ts';
import styles from './generate.module.scss';

function GenerateCars() {
  const handleGeneratingCars = () => {
    const generatedCars = generateRandomCars(HUNDRED);
    addGeneratedCarsInGarage(generatedCars);
  };
  return (
    <Button
      label="Generate cars"
      onClick={handleGeneratingCars}
      className={styles.btn}
    />
  );
}

export default GenerateCars;
