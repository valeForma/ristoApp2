import {Injectable, OnDestroy, OnInit} from '@angular/core';
import {Router, RoutesRecognized} from "@angular/router";
import {Subscription} from "rxjs/Subscription";

@Injectable()
export class RouteHistoryService implements OnInit, OnDestroy{
  lastUrl: string[] = [];
  routesSub: Subscription;
  constructor(private router: Router) {
    this.routesSub = this.router.events
      .filter(e => e instanceof RoutesRecognized)
      .pairwise()
      .subscribe((event: any[] ) => {

        this.lastUrl.push(event[0].urlAfterRedirects.toString());

      });
  }
  ngOnInit (){

  }
  ngOnDestroy(){
   this.routesSub.unsubscribe();
 }
}
