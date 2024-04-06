import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../store/index.ts';

export default useDispatch.withTypes<AppDispatch>();
