import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';


import * as fromApp from '../../store/app.reducers';
import * as AuthActions from '../../auth/store/auth.actions';
import * as OrdersAction from '../../orders/store/orders.actions';
import * as fromOrders from '../../orders/store/orders.reducers'
import {Observable} from "rxjs/Observable";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  persons:  Observable<fromOrders.State> ;
  sideOpen = false;
  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.persons = this.store.select('orders');
  }
 onAddPerson(val: number ) {
   this.store.dispatch(new OrdersAction.SetPersons(val));
    }
    onSidenav(){
     this.sideOpen = !this.sideOpen;
    }
  onLogout(){
    this.store.dispatch(new AuthActions.Logout());

  }
}
