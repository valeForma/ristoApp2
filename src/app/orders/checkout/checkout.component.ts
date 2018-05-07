import { Component, OnInit } from '@angular/core';
import {DataService} from "../../shared/data.service";

import {Subscription} from "rxjs/Subscription";
import {myOrder} from "../myorder.model";
import * as fromApp from '../../store/app.reducers';
import * as OrdersActions from '../store/orders.actions';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs/Observable";
import * as fromOrders from '../store/orders.reducers'
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  myOrd: Observable<fromOrders.State> ;
  orders: Observable<myOrder[]>;
 ;
  constructor(private dataService: DataService , private store: Store<fromApp.AppState>) { }

  ngOnInit() {

    this.store.dispatch(new OrdersActions.LoadOrders());
    this.myOrd = this.store.select('orders');

  }

}
