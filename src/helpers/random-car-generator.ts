import getRandomNumber from './random-number-generator.ts';
import { Car } from '../type/index.ts';
import colorGenerator from './random-color-generator.ts';
import { INCREMENT, CAR_NAMES, CAR_MODELS, ZERO } from '../constants/index.ts';

export default function createRandomCar(): Car {
  const randomCarNameIndex = getRandomNumber(
    ZERO,
    CAR_NAMES.length - INCREMENT,
  );
  const randomCarModelIndex = getRandomNumber(
    ZERO,
    CAR_MODELS[CAR_NAMES[randomCarNameIndex]].length - INCREMENT,
  );
  const name = CAR_NAMES[randomCarNameIndex];
  const model = CAR_MODELS[name][randomCarModelIndex];
  const color = colorGenerator();
  return { name: `${name} ${model}`, color };
}
