import { store } from '../../store/index.ts';
import { getCars } from '../../store/cars/actions.ts';

export default async function fetchCars() {
  store.dispatch(getCars());
}
