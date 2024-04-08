import { store } from '../../store/index.ts';
import { deleteCarById } from '../../store/cars/actions.ts';

export function onEdit(id: number) {
  console.log(id);
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
