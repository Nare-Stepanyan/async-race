import { createSlice } from '@reduxjs/toolkit';
import type { Car } from '../../type/index.ts';
import { getCars, createCar, updateCar, deleteCarById } from './actions.ts';
import { NOT_FOUND_INDEX } from '../../constants/index.ts';

type CarState = {
  cars: Car[];
  isLoading: boolean;
  error: string | null;
};

const initialState: CarState = {
  cars: [],
  isLoading: false,
  error: null,
};

const carSlice = createSlice({
  name: 'car',
  initialState,
  reducers: {
    setCars: (state, action) => {
      return { ...state, cars: action.payload };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCars.pending, (state) => {
      return { ...state, isLoading: true };
    });
    builder.addCase(getCars.fulfilled, (state, action) => {
      return { ...state, isLoading: false, cars: action.payload };
    });
    builder.addCase(getCars.rejected, (state, action) => {
      return { ...state, isLoading: false, error: action.payload as string };
    });
    builder.addCase(createCar.pending, (state) => {
      return { ...state, isLoading: true };
    });
    builder.addCase(createCar.fulfilled, (state, action) => {
      return { ...state, cars: [...state.cars, action.payload] };
    });
    builder.addCase(createCar.rejected, (state, action) => {
      return { ...state, isLoading: false, error: action.payload as string };
    });
    builder.addCase(updateCar.fulfilled, (state, action) => {
      const updatedCar = action.payload;
      const index = state.cars.findIndex((car) => car.id === updatedCar.id);
      if (index !== NOT_FOUND_INDEX) {
        return {
          ...state,
          cars: state.cars.map((car, idx) =>
            idx === index ? updatedCar : car,
          ),
        };
      }
      return state;
    });
    builder.addCase(deleteCarById.fulfilled, (state, action) => {
      const deletedCarId = action.payload;
      return {
        ...state,
        cars: state.cars.filter((car) => car.id.toString() !== deletedCarId),
      };
    });
  },
});

export const { setCars } = carSlice.actions;

export default carSlice.reducer;
