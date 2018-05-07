import {Component, OnInit} from '@angular/core';
import {RouteHistoryService} from "./shared/route-history.service";

import {MessageService} from "./shared/message.service";
import {Store} from '@ngrx/store';
import * as fromApp from './store/app.reducers';
import * as fromOrders from './orders/store/orders.reducers'
import * as ProductsActions from './products/store/products.actions'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{


  constructor(  private store: Store<fromApp.AppState>, routeHistory: RouteHistoryService) {
  }

  ngOnInit() {
   this.store.dispatch(new  ProductsActions.LoadProducts());
 }
}

