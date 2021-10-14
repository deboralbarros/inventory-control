import { Product } from "./Product";

export type MovementType = 'in' | 'out';

export interface Movement {
    id: number;
    product: Product;
    type: MovementType;
    sale_value: number;
    sale_date: string;
    quantity: number;
}
