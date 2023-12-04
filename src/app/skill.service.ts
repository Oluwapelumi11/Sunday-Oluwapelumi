import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Skill } from './skill';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SkillService {
  url = 'http://127.0.0.1:8000/api/skills/'

  
  constructor(private http: HttpClient) { }
  getAllSkill() : Observable<Skill[]> {
    return this.http.get<Skill[]>(this.url);
  }

}
