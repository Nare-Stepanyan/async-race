import { useSelector } from 'react-redux';
import type { RootState } from '../store/index.ts';

export default useSelector.withTypes<RootState>();
