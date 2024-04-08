import { Car } from '../type/index.ts';
import createRandomCar from './random-car-generator.ts';

export default function generateRandomCars(carNumbers: number): Car[] {
  return Array.from({ length: carNumbers }, createRandomCar);
}
