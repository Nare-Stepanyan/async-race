import { Car } from '../../type/index.ts';
import { createCar } from '../../store/cars/actions.ts';
import { store } from '../../store/index.ts';

export default function addGeneratedCarsInGarage(cars: Car[]) {
  cars.forEach((car) => {
    store.dispatch(createCar(car));
  });
}
