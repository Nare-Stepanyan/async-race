import React, { useState } from 'react';
import Button from '../button/index.tsx';
import { Car } from '../../type/index.ts';
import styles from './createCar.module.scss';
import { onCreate } from '../car/carLogic.ts';

function CreateNewCar() {
  const [newCar, setNewCar] = useState<Car>({ name: '', color: '#000000' });

  const handleInputValues = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewCar({ ...newCar, [name]: value });
  };

  const handleCreate = () => {
    if (!newCar.name || !newCar.color) return;
    onCreate(newCar);
    setNewCar({ name: '', color: '#000000' });
  };

  return (
    <>
      <input
        type="text"
        placeholder="type car brand"
        value={newCar.name}
        onChange={handleInputValues}
        name="name"
      />
      <input
        type="color"
        value={newCar.color}
        onChange={handleInputValues}
        name="color"
      />
      <Button
        label="Create"
        onClick={handleCreate}
        disabled={!newCar.name || !newCar.color}
        className={`${styles.btn} ${(!newCar.name || !newCar.color) && styles.disabled}`}
      />
    </>
  );
}

export default CreateNewCar;
