import { Product } from './product.interface'

export interface User {
    name: string;
    email: string;
    products: Product[]
}