import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {OrderComponent} from "./orders.component";
import {OrderListComponent} from "./order-list/order-list.component";
import {OrderDetailComponent} from "./order-detail/order-detail.component";
import {CheckoutComponent} from "./checkout/checkout.component";
import {AuthGuardService} from "../auth/auth-guard.service";

const ordersRoutes: Routes =[
  {path: '', component: OrderComponent, children : [
    {path: 'list', component: OrderListComponent},
    {path: ':id', component: OrderDetailComponent},
  ]}
];

@NgModule({
  imports : [RouterModule.forChild(ordersRoutes)],
  exports : [RouterModule]
})
export class OrdersRoutingModule {

}
