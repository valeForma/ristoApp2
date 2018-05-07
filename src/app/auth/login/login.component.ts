import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";


import * as fromApp from '../../store/app.reducers';
import * as AuthActions from '../store/auth.actions';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(private store: Store<fromApp.AppState>) {

  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'email': new FormControl(null, [Validators.required , Validators.email]) ,
      'password': new FormControl(null, [ Validators.required , Validators.minLength(8)])
    });

  }
  onSubmit(){
    this.store.dispatch(new AuthActions.LoginEff(
      {email: this.loginForm.get('email').value ,
        password: this.loginForm.get('password').value }));
  }
}
