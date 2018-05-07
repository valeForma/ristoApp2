import { Injectable } from '@angular/core';
import {MyMessage} from "./my-message.model";

@Injectable()
export class MessageService {
  messages: MyMessage[] = [];

  add(message: string, mextype: string , timeout: number) {
    var alertType;
    switch (mextype) {
      case 'err': {
        alertType = 'alert-danger';
       break;
      }
      case 'succ': {
        alertType = 'alert-success';
        break;
      }
      case 'inf':{
        alertType = 'alert-info';
        break;
      }
      default: {
        alertType = 'alert-info';
        break;
      }
    }


    if(timeout !== 0 ){
      setTimeout(() => {
        this.clear();
      } , timeout);
    }
    this.messages.push(new MyMessage(message , alertType));

  }

  clear() {
    this.messages = [];
  }
}
