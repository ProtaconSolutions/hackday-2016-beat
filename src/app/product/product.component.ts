import { Component, OnInit } from '@angular/core';
import {FirebaseListObservable} from "angularfire2";
import {ProductItem} from "./interfaces/product-item.interface";
import {ActivatedRoute, Router} from "@angular/router";
import {Resolves} from "./interfaces/resolves.interface";
import {ViewEncapsulation} from '@angular/core';
import {AngularFire} from "angularfire2/angularfire2";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProductComponent implements OnInit {

  public products : FirebaseListObservable<ProductItem[]>;
  public orders: FirebaseListObservable<any[]>;
  public activeProduct: ProductItem;
  constructor(
      private activatedRoute: ActivatedRoute,
      private angularFire: AngularFire,
      private router: Router
  )
  {
    this.orders = this.angularFire.database.list('orders');
  }

  ngOnInit() {
    this.activatedRoute.data.subscribe((data: Resolves) => {
      this.products = data.products;
    });
  }

  public addOrder(product, qty){
    let {name, price} = product;
    this.orders.push({
      name,
      price,
      qty
    });
    this.activeProduct = null;
  }
  public closeModal() {
    var overlay = document.getElementById("overlay");
    overlay.classList.toggle("is-active");
  }
  public openModal(){
    var overlay = document.getElementById("overlay");
    overlay.classList.toggle("is-active");
    var anim = document.getElementById("modal");
    anim.addEventListener("animationend", this.closeModal, false);
  }

  public openProduct(product: ProductItem) {
    this.router.navigate(['product', product.$key]);
  }
}
