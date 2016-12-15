import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ProductResolver } from "./product/resolves/product.resolver";

// Route Configuration
export const routes: Routes = [
    {
        path: '',
        component: ProductComponent,
        resolve: {
            products: ProductResolver
        }
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);