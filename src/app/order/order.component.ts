import { Component, OnInit } from '@angular/core';
import {AngularFire} from "angularfire2";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  public orders;

  constructor(
      private angularFire: AngularFire
  ) {
    this.orders = this.angularFire.database.list('orders');
  }

  ngOnInit() {
  }

}
