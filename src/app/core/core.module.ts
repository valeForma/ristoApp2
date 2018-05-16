import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {HomeComponent} from "./home/home.component";
import {AppRoutingModule} from "../app-routing.module";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {AuthInterceptor} from "../auth/auth.interceptor";
import {MaterialFlexModule} from "../shared/material-flex.module";

@NgModule({
  declarations:[
    HomeComponent,

  ],
  imports:[
    CommonModule,
    AppRoutingModule,
    MaterialFlexModule,
  ],
  exports:[
    AppRoutingModule,

  ],
  providers: [ { provide: HTTP_INTERCEPTORS , useClass: AuthInterceptor, multi: true}]
})
export class CoreModule {

}
