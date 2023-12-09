import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  url ="https://portfolio-api-peach.vercel.app/api/contact/"
  constructor( private http: HttpClient) { }

  sendmessage(message:any):Observable<any>{
   return this.http.post(this.url,message)
  }
}
