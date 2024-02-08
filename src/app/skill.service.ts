import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Skill } from './skill';
import { BehaviorSubject, Observable, catchError, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SkillService {
 private url = 'https://portfolio-api-oluwapelumi11s-projects.vercel.app/api/skills/'
 private skilldataSubject = new BehaviorSubject<Skill[]>([]);

 data$: Observable<Skill[]> = this.skilldataSubject.asObservable();
  
  constructor(private http: HttpClient) { }

 fetchData(): void {
  this.http.get<Skill[]>(this.url).pipe(
    tap((data:Skill[]) => this.skilldataSubject.next(data)),
    
  )
 } 

 
}
