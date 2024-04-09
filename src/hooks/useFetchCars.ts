import { useEffect } from 'react';
import { Car } from '../type/index.ts';
import useAppSelector from './useAppSelector.ts';
import carsSelector from '../store/cars/car-selector.ts';
import useAppDispatch from './useAppDispatch.ts';
import fetchCars from '../components/garage/garageLogic.ts';

const useFetchCars = (): Car[] => {
  const dispatch = useAppDispatch();
  const carList = useAppSelector(carsSelector);

  useEffect(() => {
    fetchCars();
  }, [dispatch]);

  return carList;
};

export default useFetchCars;
