export type MovementType = 'in' | 'out';

export interface Movement {
    product: string;
    type: MovementType;
    sale_value: number;
    sale_date: string;
    quantity: number;
}
