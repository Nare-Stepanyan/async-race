import React from 'react';
import Button from '../button/index.tsx';
import { Car } from '../../type/index.ts';
import styles from './update.module.scss';
import { onEdit } from '../car/carLogic.ts';

type UpdateCarProps = {
  car: Car;
  // eslint-disable-next-line no-unused-vars
  setCarToUpdate: (car: Car) => void;
};

function UpdateCar({ car, setCarToUpdate }: UpdateCarProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCarToUpdate({ ...car, [name]: value });
  };
  const handleUpdate = () => {
    if (!car.name || !car.color) return;
    onEdit(car);
    setCarToUpdate({ ...car, name: '', color: '#000000' });
  };
  return (
    <div className="d-flex">
      <input
        type="text"
        placeholder="type car brand"
        value={car.name || ''}
        onChange={handleChange}
        name="name"
      />
      <input
        type="color"
        value={car.color || '#000000'}
        onChange={handleChange}
        name="color"
        className={styles.colorPicker}
      />
      <Button
        label="Update"
        onClick={handleUpdate}
        disabled={!car?.name || !car?.color}
        className={`${styles.btn} ${(!car?.name || !car?.color) && styles.disabled}`}
      />
    </div>
  );
}

export default UpdateCar;
