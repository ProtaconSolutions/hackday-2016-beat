import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import 'rxjs';

import { ProductItem } from '../interfaces/product-item.interface';

@Injectable()
export class ProductResolver implements Resolve<any> {
  /**
   * Constructor of the class.
   *
   * @param {AngularFire} angularFire
   */
  constructor(private angularFire: AngularFire) { }

  /**
   * Get latest products from FireBase.
   *
   * @param {ActivatedRouteSnapshot}  route
   * @param {RouterStateSnapshot}     state
   * @returns {Promise<FirebaseListObservable<ProductItem[]>>}
   */
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<FirebaseListObservable<ProductItem[]>> {
    let list = this.angularFire.database.list('products');

    return new Promise((resolve, reject) => {
      list.first().subscribe(() => resolve(list), reject);
    });
  }
}
