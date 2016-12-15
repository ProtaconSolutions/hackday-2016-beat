import { Component, OnInit } from '@angular/core';
import {FirebaseListObservable} from "angularfire2";
import {ProductItem} from "./interfaces/product-item.interface";
import {ActivatedRoute} from "@angular/router";
import {Resolves} from "./interfaces/resolves.interface";
import {ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProductComponent implements OnInit {

  public products : FirebaseListObservable<ProductItem[]>;

  constructor(
      private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe((data: Resolves) => {
      this.products = data.products;
    });
  }

}
