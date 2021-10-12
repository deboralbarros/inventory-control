import api from './index';
import { Movement } from '../Models/Movement';

export const getMovements = () => api.get<Movement[]>('/movements/').then(data => data.data);

export const createMovement = (movement: Movement) => api.post<Movement>('/movements/', movement).then(data => data.data);
