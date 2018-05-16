import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';



import {AppRoutingModule} from './app-routing.module';


import {AuthGuardService} from './auth/auth-guard.service';

import {ReactiveFormsModule} from "@angular/forms";
import { HttpClientModule} from "@angular/common/http";

import {CoreModule} from "./core/core.module";
import {OrdersModule} from "./orders/orders.module";
import {ProductsModule} from "./products/products.module";
import {AuthModule} from "./auth/auth.module";
import {reducers} from "./store/app.reducers";
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import {ActionReducer, ActionReducerMap, MetaReducer, StoreModule} from "@ngrx/store";
import {ProductsEffects} from "./products/store/products.effects";
import {AuthEffects} from "./auth/store/auth.effects";
import {OrderEffects} from "./orders/store/order.effects";
import {BrowserAnimationsModule, NoopAnimationsModule} from "@angular/platform-browser/animations";
import {MaterialFlexModule} from "./shared/material-flex.module";
import {localStorageSync} from "ngrx-store-localstorage";
import * as FromOrders from './orders/store/orders.reducers';








@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AuthModule,
    CoreModule,
    OrdersModule,
    ProductsModule,
    MaterialFlexModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([ProductsEffects, AuthEffects, OrderEffects ]),
    StoreRouterConnectingModule,
    !environment.production ? StoreDevtoolsModule.instrument() : []

  ],
  providers: [
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
