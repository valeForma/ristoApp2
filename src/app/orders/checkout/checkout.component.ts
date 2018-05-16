import {Component, OnDestroy, OnInit} from '@angular/core';

import {Subscription} from "rxjs/Subscription";
import {myOrder} from "../myorder.model";
import * as fromApp from '../../store/app.reducers';
import * as OrdersActions from '../store/orders.actions';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs/Observable";
import * as fromOrders from '../store/orders.reducers';
import 'rxjs/add/operator/map';
import * as SharedActions from '../../shared/sharedStore/shared.actions';
import {Router} from "@angular/router";



@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit , OnDestroy{
  myOrd: Observable<fromOrders.State> ;
  orders: Observable<myOrder[]>;
  subscription: Subscription;
  constructor( private store: Store<fromApp.AppState>, private router: Router) { }

  ngOnInit() {
   this.subscription = this.store.select('orders').
    map((state: fromOrders.State) => {
      return state.orderToSave;
    })
      .subscribe((toSave) => {
        console.log('order to save' + toSave);
       if(toSave) {
         this.store.dispatch(new OrdersActions.SaveOrder());
       }
    });
    this.store.dispatch(new SharedActions.SetToolbarTitle('checkout'));
    this.store.dispatch(new SharedActions.SetActualRoute('/checkout'));
    this.store.dispatch(new SharedActions.SetNextRoute('/home'));
    this.store.dispatch(new OrdersActions.LoadOrders());
    this.myOrd = this.store.select('orders');
  }
  onActionClick() {
    this.router.navigate(['/home']);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
