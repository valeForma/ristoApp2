import {NgModule} from "@angular/core";
import {ProductsComponent} from "./products.component";
import {ItemComponent} from "./item/item.component";
import {ItemListComponent} from "./item-list/item-list.component";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations:[
    ProductsComponent,
    ItemComponent,
    ItemListComponent
  ],
  imports: [
    CommonModule,

  ],
  exports:[]

})
export class ProductsModule {

}
