export type ProductType = 'mobile' | 'eletronic' | 'home_appliances';

export interface Product {
    code?: string;
    description?: string;
    stock_quantity?: number;
    supplier_value?: number;
    type?: ProductType;
}