import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {OrderDetailComponent} from "./order-detail/order-detail.component";
import {OrderComponent} from "./orders.component";
import {OrderListComponent} from "./order-list/order-list.component";
import {OrderItemComponent} from "./order-item/order-item.component";
import {OrdersRoutingModule} from "./orders-routing.module";
import {CheckoutComponent} from "./checkout/checkout.component";
import {MaterialFlexModule} from "../shared/material-flex.module";

@NgModule({
  declarations: [
    OrderDetailComponent,
    OrderComponent,
    OrderListComponent,
    OrderItemComponent,
    CheckoutComponent
  ],
  imports : [
    CommonModule,
    OrdersRoutingModule,
    MaterialFlexModule
  ],
  exports:[
  ]
})
export class OrdersModule {

}
