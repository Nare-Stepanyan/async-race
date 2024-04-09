import { store } from '../../store/index.ts';
import {
  createCar,
  deleteCarById,
  updateCar,
} from '../../store/cars/actions.ts';
import { Car } from '../../type/index.ts';

export function onEdit(car: Car) {
  store.dispatch(updateCar(car));
}

export function onCreate(car: Car) {
  store.dispatch(createCar(car));
}

export function onDelete(id: number) {
  store.dispatch(deleteCarById(id));
}

export function onStartEngine(id: number) {
  console.log(id);
}

export function onStopEngine(id: number) {
  console.log(id);
}
