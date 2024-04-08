import React from 'react';
import useFetchCars from '../../hooks/useFetchCars.ts';
import SingleCar from '../car/index.tsx';
import GenerateCars from '../generate-cars/index.tsx';

function Garage() {
  const cars = useFetchCars();

  return (
    <div>
      <div>
        <div>Race</div>
        <div>Reset</div>
        <div>Create</div>
        <div>Update</div>
        <GenerateCars />
      </div>
      <div>
        {cars.map((car) => (
          <SingleCar carItem={car} key={car.id} />
        ))}
      </div>
    </div>
  );
}
export default Garage;
