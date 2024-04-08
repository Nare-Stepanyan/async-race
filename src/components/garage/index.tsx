import React from 'react';
import useFetchCars from '../../hooks/useFetchCars.ts';
import SingleCar from '../car/index.tsx';

function Garage() {
  const cars = useFetchCars();
  return (
    <div>
      {cars.map((car) => (
        <SingleCar carItem={car} key={car.id} />
      ))}
    </div>
  );
}
export default Garage;
