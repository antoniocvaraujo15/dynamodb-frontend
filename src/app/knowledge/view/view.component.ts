import { Component, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  knowledgList:any[]=[];

  constructor(private service:SharedService) { }

  ngOnInit(): void {
    this.getKnowledge();
  }


  getKnowledge(){
    this.service.getknowledgeList().subscribe(response=>{
    this.knowledgList = response;
    });
  }

  
}
