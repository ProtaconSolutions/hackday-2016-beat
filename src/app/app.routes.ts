import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ProductResolver } from "./product/resolves/product.resolver";
import {ProductDetailsComponent} from "./product-details/product-details.component";
import {OrderComponent} from "./order/order.component";

// Route Configuration
export const routes: Routes = [
    {
        path: '',
        component: ProductComponent,
        resolve: {
            products: ProductResolver
        }
    },
    {
        path: 'product/:id',
        component: ProductDetailsComponent
    },
    {
        path: 'orders',
        component: OrderComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);