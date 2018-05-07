import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../products/product.model";


@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})

export class OrderDetailComponent implements OnInit {

  @Input() orderPart: {product: Product, quantity: number};

  constructor() { }

  ngOnInit() {



  }

}
