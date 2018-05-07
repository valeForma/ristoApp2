 import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
 import {ProductsComponent} from './products/products.component';
 import {HomeComponent} from './core/home/home.component';

 import {NgModule} from '@angular/core';
 import {CheckoutComponent} from "./orders/checkout/checkout.component";
 import {AuthGuardService} from "./auth/auth-guard.service";

 const appRoutes: Routes =[
   {path: '', redirectTo: '/home' , pathMatch: 'full'} ,
   {path: 'products', component: ProductsComponent },
   {path: 'orders', loadChildren: './orders/orders.module#OrdersModule'},
   {path: 'checkout', component: CheckoutComponent, canActivate: [AuthGuardService]},
   {path: 'home', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
