import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly APIUrl = "http://localhost:8080/knowledge"

  constructor(private httpClient:HttpClient) {

  }

    getknowledgeList():Observable<any[]>{
      return this.httpClient.get<any>(this.APIUrl)
      }

      addKnowledge(val:any){
        return this.httpClient.post(this.APIUrl,val)
      }

    }

