

import {NgModule} from "@angular/core";
import {
  MatBadgeModule,
  MatButtonModule, MatCard, MatCardModule, MatExpansionModule, MatFormFieldModule, MatIconModule, MatInputModule,
  MatListModule,
  MatSidenavModule, MatSnackBarModule,
  MatToolbarModule
} from "@angular/material";
import {FlexLayoutModule} from "@angular/flex-layout";

@NgModule({
  imports: [
    FlexLayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatBadgeModule,
    MatFormFieldModule,
    MatButtonModule,
    MatExpansionModule,
    MatInputModule,
    MatSnackBarModule
  ],
  exports:[
    FlexLayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatBadgeModule,
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule,
    MatButtonModule,
    MatSnackBarModule
  ]
})
export class MaterialFlexModule{

}
