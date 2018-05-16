import {Component, OnDestroy, OnInit} from '@angular/core';
import {Product} from '../product.model';
import {Subscription} from 'rxjs/Subscription';
import {Observable} from "rxjs/Observable";
import {Store} from "@ngrx/store";
import * as fromApp from '../../store/app.reducers';
import * as fromProducts from '../store/products.reducer';
import * as fromShared from '../../shared/sharedStore/shared.reducers';
import * as SharedActions from '../../shared/sharedStore/shared.actions';
import * as fromOrders from '../../orders/store/orders.reducers';
import * as ordersActions from '../../orders/store/orders.actions';
import {Router} from "@angular/router";

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  products: Observable<fromProducts.State>;

  constructor(private store: Store<fromApp.AppState>, private router: Router ) { }

  ngOnInit() {
     this.store.dispatch(new SharedActions.SetToolbarTitle('select'));
    this.store.dispatch(new SharedActions.SetActualRoute('/products'));
    this.store.dispatch(new SharedActions.SetNextRoute('/orders'));
   this.products = this.store.select('products') ;
  }

  onActionClick() {
    this.router.navigate(['/orders']);
  }

}
