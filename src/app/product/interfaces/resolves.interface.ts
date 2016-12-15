import { FirebaseListObservable } from 'angularfire2';
import {ProductItem} from "./product-item.interface";


export interface Resolves {
    products: FirebaseListObservable<ProductItem[]>,
}
