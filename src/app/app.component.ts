import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import * as ProductsActions from './products/store/products.actions';
import * as fromApp from './store/app.reducers';
import * as AuthActions from './auth/store/auth.actions';
import * as OrdersAction from './orders/store/orders.actions';
import * as fromOrders from './orders/store/orders.reducers';
import {Observable} from 'rxjs/Rx';
import * as fromShared from './shared/sharedStore/shared.reducers';
import * as SharedActions from "./shared/sharedStore/shared.actions";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  persons:  Observable<fromOrders.State> ;
  sharedState: Observable<fromShared.State>

  constructor(public store: Store<fromApp.AppState>, private  router: Router) {
  }

  ngOnInit() {
    this.persons = this.store.select('orders');
    this.sharedState = this.store.select('shared');
   this.store.dispatch(new  ProductsActions.LoadProducts());
 }

  onAddPerson(val: number ) {
    this.store.dispatch(new OrdersAction.SetPersons(val));
  }

  onLogout(){
    this.store.dispatch(new AuthActions.Logout());

  }
 onItemClick(setLink: boolean , link: string) {
    if (setLink) {
      this.store.dispatch(new SharedActions.SetActualRoute(link));
    }
   this.router.navigate([link]);

 }
}

