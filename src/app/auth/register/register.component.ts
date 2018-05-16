import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../user.model";
import {Store} from "@ngrx/store";
import * as _ from 'lodash';
import * as fromApp from '../../store/app.reducers';
import * as AuthActions from '../store/auth.actions';
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})



export class RegisterComponent implements OnInit {

  registerForm: FormGroup;


  constructor(private store: Store<fromApp.AppState>, private httpClient: HttpClient) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      'email' : new FormControl(null, [Validators.required , Validators.email],this.emailValidator.bind(this) ),
      'name' : new FormControl(null),
      'surname' : new FormControl(null),
      'address' : new FormControl(null),
      'phone' : new FormControl(null),
      'password' : new FormControl(null, [ Validators.required, Validators.minLength(8) ]),
      'password1' : new FormControl(null, [ Validators.required, Validators.minLength(8)]),
    }, [this.passwordValidator.bind(this)]);

  }
  passwordValidator(form: FormGroup ): {[s: string]: boolean} {

    if ( form.get('password').value !== form.get('password1').value  ) {
      return {'passwordMustMatch' : true};
    }
    return null;
  }
 emailValidator(control: FormControl): Promise<any> | Observable<any>{

    return this.httpClient.post('./api/users/checkemail', {email: control.value},{
      observe: 'body',
      responseType: 'text'
    })
      .map((val) => {


        if (val){
          return {'addressInUse': {value: control.value}};
        } else {
          return null;
        }
      });
  }
 onSubmit() {
   console.log('called');

   const user = new User(null ,
     this.registerForm.get('email').value ,
     this.registerForm.get('name').value ,
     this.registerForm.get('surname').value ,
     this.registerForm.get('address').value ,
      this.registerForm.get('phone').value ,
     this.registerForm.get('password').value ,
     null);
   this.store.dispatch(new AuthActions.RegisterEff(user));
 }
}


