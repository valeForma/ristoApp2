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
  email: FormControl;
  password: FormControl;
  loginForm: FormGroup;
  constructor(private store: Store<fromApp.AppState>) {

  }

  ngOnInit() {
    this.email = new FormControl(null, [Validators.required , Validators.email]);
    this.password =new FormControl(null, [ Validators.required , Validators.minLength(8)]);
    this.loginForm = new FormGroup({
      'email': this.email ,
      'password': this.password
    });

  }
  onSubmit(){
    this.store.dispatch(new AuthActions.LoginEff(
      {email: this.loginForm.get('email').value ,
        password: this.loginForm.get('password').value }));
  }
}
