import { INCREMENT } from '../constants/index.ts';

export default function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + INCREMENT)) + min;
}
