import { Product } from './product.interface'

export interface Profile {
    name: string;
    email: string;
    products: Product[]
}