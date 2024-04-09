import React, { useState } from 'react';
import Button from '../button/index.tsx';
import { Car } from '../../type/index.ts';
import styles from './update.module.scss';
import { onEdit } from '../car/carLogic.ts';

type UpdateCarProps = {
  car: Car;
};

function UpdateCar({ car }: UpdateCarProps) {
  const [updatedCar, setUpdatedCar] = useState<Car>({ ...car });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUpdatedCar({ ...updatedCar, [name]: value });
  };
  const handleUpdate = () => {
    if (!updatedCar.name || !updatedCar.color) return;
    onEdit(updatedCar);
    setUpdatedCar({ name: '', color: '#000000' });
  };
  return (
    <>
      <input
        type="text"
        placeholder="type car brand"
        value={updatedCar?.name}
        onChange={handleChange}
        name="name"
      />
      <input
        type="color"
        value={updatedCar?.color}
        onChange={handleChange}
        name="color"
      />
      <Button
        label="Update"
        onClick={handleUpdate}
        disabled={!updatedCar?.name || !updatedCar?.color}
        className={`${styles.btn} ${(!updatedCar?.name || !updatedCar?.color) && styles.disabled}`}
      />
    </>
  );
}

export default UpdateCar;
