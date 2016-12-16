import { Component, OnInit } from '@angular/core';
import {ViewEncapsulation} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-footermenu',
  templateUrl: './footermenu.component.html',
  styleUrls: ['./footermenu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FootermenuComponent implements OnInit {

  constructor(
    public router: Router
  ) { }

  ngOnInit() {
  }
}
