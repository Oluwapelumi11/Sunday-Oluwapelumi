import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Skill } from './skill';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SkillService {
  url = 'https://portfolio-api-peach.vercel.app/api/skills/'

  
  constructor(private http: HttpClient) { }
  getAllSkill() : Observable<Skill[]> {
    return this.http.get<Skill[]>(this.url);
  }

}
