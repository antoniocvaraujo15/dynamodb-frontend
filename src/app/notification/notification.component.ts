import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../websocket.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  
  msgList:any[]=[];

  constructor(private wsService:WebsocketService) { }

  ngOnInit(): void {
    this.wsService.connect().subscribe((msg)=>{
      console.log(msg)
      this.msgList.push(msg.content);
    })
  }

}
