import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {HomeComponent} from "./home/home.component";
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {AppRoutingModule} from "../app-routing.module";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {AuthInterceptor} from "../auth/auth.interceptor";

@NgModule({
  declarations:[
    HomeComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports:[
    CommonModule,
    AppRoutingModule

  ],
  exports:[
    AppRoutingModule,
    HeaderComponent,
    FooterComponent
  ],
  providers: [ { provide: HTTP_INTERCEPTORS , useClass: AuthInterceptor, multi: true}]
})
export class CoreModule {

}
