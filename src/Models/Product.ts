export type ProductType = 'mobile' | 'eletronic' | 'home_appliances' | string;

export interface Product {
    code?: string;
    description?: string;
    stock_quantity?: number;
    supplier_value?: number;
    type?: ProductType;
}