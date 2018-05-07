import {Component, OnInit} from '@angular/core';
import {myOrder} from "./myorder.model";
import {Store} from "@ngrx/store";

import * as fromApp from  '../store/app.reducers';
import * as ordersActions from './store/orders.actions';
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-order',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})

export class OrderComponent implements OnInit {
  orderState: Observable<{orderItem: myOrder}>;

  constructor(private store: Store<fromApp.AppState>) {

  }

  ngOnInit() {
    this.orderState = this.store.select('orders');
  }

}
