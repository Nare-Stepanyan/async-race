import React from 'react';
import {
  FaEdit,
  FaTrash,
  FaParking,
  FaFlagCheckered,
  FaCarSide,
} from 'react-icons/fa';
import { Car } from '../../type/index.ts';
import { onDelete, onStartEngine, onStopEngine } from './carLogic.ts';
import styles from './classes.module.scss';

interface CarProps {
  carItem: Car;
  // eslint-disable-next-line no-unused-vars
  setCarToUpdate: (item: Car) => void;
}

function SingleCar({ carItem, setCarToUpdate }: CarProps) {
  return (
    <div className={styles.container}>
      <div className={styles.buttons}>
        <div className={styles.buttonGroups}>
          <FaEdit
            onClick={() => setCarToUpdate(carItem)}
            color="#3498db"
            className={styles.btn}
          />
          <FaTrash
            onClick={() => onDelete(carItem.id!)}
            color="#e74c3c"
            className={styles.btn}
          />
        </div>
        <div className={styles.buttonGroups}>
          <FaFlagCheckered
            onClick={() => onStartEngine(carItem.id!)}
            color="#2ecc71"
            className={styles.btn}
          />
          <FaParking
            onClick={() => onStopEngine(carItem.id!)}
            color="#95a5a6"
            className={styles.btn}
          />
        </div>
      </div>
      <div className={styles.garage}>
        <div className={styles.car}>
          <FaCarSide color={carItem.color} />
        </div>
        <div className={styles.line}>Start</div>
        <div className={styles.model}> {carItem.name}</div>
      </div>
      <div className={styles.line}>Finish</div>
    </div>
  );
}

export default SingleCar;
