import { useEffect, useState } from 'react';
import { getCars } from '../store/cars/actions.ts';
import { setCars } from '../store/cars/car-slice.ts';
import useAppDispatch from './useAppDispatch.ts';
import { Car } from '../type/index.ts';

const useFetchCars = (): Car[] => {
  const dispatch = useAppDispatch();

  const [carList, setCarList] = useState<Car[]>([]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const cars = await dispatch(getCars());
        dispatch(setCars(cars.payload));
        setCarList(cars.payload);
      } catch (error) {
        // eslint-disable-next-line no-empty
      }
    };

    fetchCars();
  }, [dispatch]);

  return carList;
};

export default useFetchCars;
