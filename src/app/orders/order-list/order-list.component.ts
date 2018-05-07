import {Component, Input, OnInit} from '@angular/core';
import {myOrder} from "../myorder.model";

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
@Input() orders: myOrder[];
  constructor() { }

  ngOnInit() {


  }

}
