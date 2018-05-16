import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {myOrder} from "../myorder.model";

import {Router} from "@angular/router";


import {Store} from "@ngrx/store";
import * as fromApp from '../../store/app.reducers';

import * as OrdersActions from '../store/orders.actions';

import * as SharedActions from '../../shared/sharedStore/shared.actions';
import * as fromOrders from '../store/orders.reducers';
import {MatSnackBar} from "@angular/material";
import {Subscription} from "rxjs/Rx";
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.css']
})
export class OrderItemComponent implements OnInit , OnDestroy {
  @Input() order: myOrder;
  subscription: Subscription;
  allowSave: boolean;
  constructor(private store: Store<fromApp.AppState> , private router: Router  ,  private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.store.dispatch(new SharedActions.SetToolbarTitle('order'));
    this.store.dispatch(new SharedActions.SetActualRoute('/orders'));
    this.store.dispatch(new SharedActions.SetNextRoute('/checkout'));

    this.subscription =  this.store.select('orders')
      .map((state: fromOrders.State ) => {
        console.log('products lenght'+ state.orderItem.products.length);
        return state.orderItem.products.length;
      }).subscribe((len) => {
          if(len > 0) {
            this.allowSave = true;
          }
      });
  }

  onBackToProducts(){
    this.router.navigate(['/products']);
  }
  onActionClick() {
    if ( this.allowSave) {
      this.store.dispatch(new OrdersActions.SetOrderTosave(true));
      this.router.navigate(['/checkout']);
    } else {
      this.snackBar.open('you must add at least a product for checkout','add a product',{
        duration: 2000,
        panelClass: ['mySnackbarError']
      });
    }


  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
