import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {ProductItem} from "../product/interfaces/product-item.interface";
import {AngularFire} from "angularfire2";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  public product: ProductItem;

  constructor(
      private activatedRoute: ActivatedRoute,
      private angularFire: AngularFire
  ) {
  }

  ngOnInit() {
    this.activatedRoute.params
        .switchMap((params: Params) => this.angularFire.database.object('products/' + params['id']))
        .subscribe((product: ProductItem) => this.product = product);
  }

}
