import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';



import {AppRoutingModule} from './app-routing.module';


import {AuthGuardService} from './auth/auth-guard.service';

import {ReactiveFormsModule} from "@angular/forms";
import { HttpClientModule} from "@angular/common/http";
import {DataService} from "./shared/data.service";

import {MessageService} from "./shared/message.service";
import {HttpErrorHandler} from "./shared/http-error-handler.service";
import {RouteHistoryService} from "./shared/route-history.service";

import {CoreModule} from "./core/core.module";
import {OrdersModule} from "./orders/orders.module";
import {ProductsModule} from "./products/products.module";
import {AuthModule} from "./auth/auth.module";
import {reducers} from "./store/app.reducers";
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import {StoreModule} from "@ngrx/store";
import {ProductsEffects} from "./products/store/products.effects";
import {AuthEffects} from "./auth/store/auth.effects";
import {OrderEffects} from "./orders/store/order.effects";






@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    AuthModule,
    CoreModule,
    OrdersModule,
    ProductsModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([ProductsEffects, AuthEffects,OrderEffects ]),
    StoreRouterConnectingModule,
    !environment.production ? StoreDevtoolsModule.instrument() : []

  ],
  providers: [
    AuthGuardService,
    DataService,
    MessageService
     , HttpErrorHandler
     , RouteHistoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
