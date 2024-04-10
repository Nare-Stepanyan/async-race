import React, { useState } from 'react';
import useFetchCars from '../../hooks/useFetchCars.ts';
import SingleCar from '../car/index.tsx';
import GenerateCars from '../generate-cars/index.tsx';
import Race from '../race/index.tsx';
import Reset from '../reset/index.tsx';
import CreateNewCar from '../create-car/index.tsx';
import UpdateCar from '../update-car/index.tsx';
import styles from './garage.module.scss';
import { Car } from '../../type/index.ts';

function Garage() {
  const cars = useFetchCars();
  const [carToUpdate, setCarToUpdate] = useState<Car>({
    name: '',
    color: `#000000`,
  });
  return (
    <div>
      <div className={styles.top}>
        <Race />
        <Reset />
        <CreateNewCar />
        <UpdateCar car={carToUpdate} />
        <GenerateCars />
      </div>
      <div>
        {cars.map((car) => (
          <SingleCar
            carItem={car}
            key={car.id}
            setCarToUpdate={setCarToUpdate}
          />
        ))}
      </div>
    </div>
  );
}
export default Garage;
