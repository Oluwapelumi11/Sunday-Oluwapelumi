import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  url ="http://127.0.0.1:8000/api/contact/"
  constructor( private http: HttpClient) { }

  sendmessage(message:any):Observable<any>{
   return this.http.post(this.url,message)
  }
}
