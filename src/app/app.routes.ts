import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';

// Route Configuration
export const routes: Routes = [
    { path: '', component: ProductComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);