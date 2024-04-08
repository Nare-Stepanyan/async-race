import { useEffect } from 'react';
import { Car } from '../type/index.ts';

import { getCars } from '../store/cars/actions.ts';
import useAppSelector from './useAppSelector.ts';
import carsSelector from '../store/cars/car-selector.ts';
import useAppDispatch from './useAppDispatch.ts';

const useFetchCars = (): Car[] => {
  const dispatch = useAppDispatch();
  const carList = useAppSelector(carsSelector);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        await dispatch(getCars());
      } catch (error) {
        // eslint-disable-next-line no-empty
      }
    };

    fetchCars();
  }, [dispatch, carList]);

  return carList;
};

export default useFetchCars;
