import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Product} from '../product.model';
import {Store} from '@ngrx/store';
import * as fromApp from '../../store/app.reducers';
import * as fromOrders from '../../orders/store/orders.reducers';
import * as ordersActions from '../../orders/store/orders.actions';
import {Observable} from "rxjs/Observable";
import {OrdersActions} from "../../orders/store/orders.actions";
import {Subscription} from "rxjs/Rx";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit , OnDestroy{
  @Input() item: Product;
   quantity = 0;
  mySubscription: Subscription;
  constructor(private store: Store<fromApp.AppState>) {
  }

  ngOnInit() {
  this.mySubscription = this.store.select('orders').take(1).subscribe((state: fromOrders.State) => {
     if(state) {
       console.log('stato non nullo');
       if(!(state.orderItem.products.length === 0)){
         const ind = state.orderItem.products.findIndex((p) => {
           return p.product._id === this.item._id;
         });
         if(ind !== -1){
           console.log('ind diverso -1');
           this.quantity = state.orderItem.products[ind].quantity;
         } else {
           this.quantity = 0;
         }
       }
     }
   });
  }

  addProduct() {
    this.store.dispatch(new ordersActions.AddProduct(this.item));
    this.quantity++;
  }

  removeProduct() {
    this.store.dispatch(new ordersActions.RemoveProduct(this.item));
    this.quantity--;
  }

ngOnDestroy(){
    this.mySubscription.unsubscribe();
}

}
