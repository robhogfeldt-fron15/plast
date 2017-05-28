import { User } from '../models/user.interface';
import { Product } from '../models/product.interface';


const userList: User[] = [
    {
        name: 'Robert',
        email: 'rob@gmail.com',
        products:  [
            {
               type: 'big',
               quantity: 100
            },
            {
               type: 'small',
               quantity: 200
            },
        ]
    },
     {
        name: 'Charlott',
        email: 'charlott@gmail.com',
        products:  [
            {
               type: 'big',
               quantity: 100
            },
            {
               type: 'small',
               quantity: 200
            },
        ]
    },
]

export const USER_LIST = userList;
