import api from './index';
import { MovementIn, Movement } from '../Models/Movement';

export const getMovements = () => api.get<Movement[]>('/movements/').then(data => data.data);

export const createMovement = (movement: MovementIn) => api.post<MovementIn>('/movements/', movement).then(data => data.data);
