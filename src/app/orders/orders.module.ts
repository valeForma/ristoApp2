import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {OrderDetailComponent} from "./order-detail/order-detail.component";
import {OrderComponent} from "./orders.component";
import {OrderListComponent} from "./order-list/order-list.component";
import {OrderItemComponent} from "./order-item/order-item.component";
import {OrdersRoutingModule} from "./orders-routing.module";
import {CheckoutComponent} from "./checkout/checkout.component";

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
    OrdersRoutingModule
  ],
  exports:[
  ]
})
export class OrdersModule {

}
