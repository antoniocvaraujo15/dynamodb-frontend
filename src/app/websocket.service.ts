import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';
import {webSocket} from 'rxjs/webSocket';
@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  private wsLink : string = "wss://websocket-dynamodb.webpubsub.azure.com/client/hubs/Hub?access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJ3c3M6Ly93ZWJzb2NrZXQtZHluYW1vZGIud2VicHVic3ViLmF6dXJlLmNvbS9jbGllbnQvaHVicy9IdWIiLCJpYXQiOjE2NDUzOTQ1MTIsImV4cCI6MTY0NTM5ODExMn0.ilX1Vkc0WIMIy_pHSVa0YPRNjag9ETkH_RzTI-Bbjj8"
  constructor() { }

  public connect(): Observable<any> {

    var observable = new Observable<any>((subcriber) => {

      var connection = webSocket(this.wsLink)

      connection.subscribe(
        msg => subcriber.next(msg),
        err => console.log(err),
        () => console.log('complete')
      );
    })

    return observable;
  }
  
  }

