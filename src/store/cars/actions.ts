import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import type { Car } from '../../type/index.ts';

const baseURL = `${process.env.BASE_URL}/garage`;

export const getCars = createAsyncThunk(
  'car/getCars',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios(baseURL);
      return data;
    } catch (error) {
      return rejectWithValue('Error fetching cars');
    }
  },
);

export const createCar = createAsyncThunk(
  'car/createCar',
  async (newCar: Car, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(baseURL, newCar);
      return data;
    } catch (error) {
      return rejectWithValue('Error creating product');
    }
  },
);

export const getCarById = createAsyncThunk(
  'car/getCarById',
  async (id: string, { rejectWithValue }) => {
    try {
      const { data } = await axios(`${baseURL}/${id}`);
      return data;
    } catch (error) {
      return rejectWithValue('Error fetching car by ID');
    }
  },
);

export const updateCar = createAsyncThunk(
  'car/updateCar',
  async (car: Car, { rejectWithValue }) => {
    try {
      const { data } = await axios.patch(`${baseURL}/${car.id}`, car);
      return data;
    } catch (error) {
      return rejectWithValue('Error updating car');
    }
  },
);

export const deleteCarById = createAsyncThunk(
  'car/deleteCarById',
  async (id: string, { rejectWithValue }) => {
    try {
      await axios.delete(`${baseURL}/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue('Error deleting car by ID');
    }
  },
);
