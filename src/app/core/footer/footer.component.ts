import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, RouterState, RouterStateSnapshot} from "@angular/router";
import {MessageService} from "../../shared/message.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  fabMenuOpened = false;
  constructor(private router: ActivatedRoute,public messages: MessageService) { }

  ngOnInit() {
    console.log(this.router);
  }

  onFabToggle(){
    this.fabMenuOpened =  !this.fabMenuOpened;
  }
}
