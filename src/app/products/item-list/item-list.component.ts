import {Component, OnDestroy, OnInit} from '@angular/core';
import {Product} from '../product.model';
import {Subscription} from 'rxjs/Subscription';
import {Observable} from "rxjs/Observable";
import {Store} from "@ngrx/store";
import * as fromApp from '../../store/app.reducers';
import * as fromProducts from '../store/products.reducer'

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit , OnDestroy{
  products: Observable<fromProducts.State>;

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {


   this.products = this.store.select('products') ;
  }

ngOnDestroy(){


}

}
