import {NgModule} from "@angular/core";
import {ProductsComponent} from "./products.component";
import {ItemComponent} from "./item/item.component";
import {ItemListComponent} from "./item-list/item-list.component";
import {CommonModule} from "@angular/common";
import {MaterialFlexModule} from "../shared/material-flex.module";

@NgModule({
  declarations:[
    ProductsComponent,
    ItemComponent,
    ItemListComponent
  ],
  imports: [
    CommonModule,
    MaterialFlexModule
  ],
  exports:[]

})
export class ProductsModule {

}
