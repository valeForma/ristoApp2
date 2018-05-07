import {Component, Input, OnInit} from '@angular/core';
import {myOrder} from "../myorder.model";

import {Router} from "@angular/router";

import {MessageService} from "../../shared/message.service";
import {Store} from "@ngrx/store";
import * as fromApp from '../../store/app.reducers';
import * as ordersActions from '../store/orders.actions';
import * as fromAuth from '../../auth/store/auth.reducer';
import * as OrdersActions from '../store/orders.actions';
@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.css']
})
export class OrderItemComponent implements OnInit {
  @Input() order: myOrder;
  constructor(private store: Store<fromApp.AppState> , private router: Router  , private mexService: MessageService) { }

  ngOnInit() {
  }
  onCancelOrder(){

    this.store.dispatch(new ordersActions.CancelOrder());
  }
  onSaveOrder(){
    this.store.select('auth').subscribe((auth: fromAuth.State) => {
       console.log('auth :'+auth.logged);
      if(auth.logged) {
        console.log('sending saving order');
        this.store.dispatch(new OrdersActions.SaveOrder());
      }
      else {
        this.mexService.add('you must login to store order' ,'err',3000);
        this.router.navigate(['/login']);
      }
    });

  }
}
