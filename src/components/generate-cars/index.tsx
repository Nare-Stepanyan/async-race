import React from 'react';
import Button from '../button/index.tsx';
import addGeneratedCarsInGarage from './generateCarsLogic.ts';
import generateRandomCars from '../../helpers/car-generator.ts';
import { HUNDRED } from '../../constants/index.ts';

function GenerateCars() {
  const handleGeneratingCars = () => {
    const generatedCars = generateRandomCars(HUNDRED);
    addGeneratedCarsInGarage(generatedCars);
  };
  return <Button label="Generate cars" onClick={handleGeneratingCars} />;
}

export default GenerateCars;
