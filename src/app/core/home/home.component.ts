import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import * as fromApp from '../../store/app.reducers';
import * as SharedActions from'../../shared/sharedStore/shared.actions';
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router , private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.store.dispatch(new SharedActions.SetToolbarTitle('Home'))
    this.store.dispatch(new SharedActions.SetActualRoute('/home'));
    this.store.dispatch(new SharedActions.SetNextRoute('/products'));
  }


  OnHomeClick(){

    this.router.navigate(['/products']);
  }
}
