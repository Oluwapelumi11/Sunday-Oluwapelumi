import { Injectable } from '@angular/core';
import { Project } from './project';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import {catchError, filter,map, tap, throwIfEmpty, timeout} from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private url = "https://portfolio-api-theta-flame.vercel.app/api/projects";
  private projectDataSubject = new BehaviorSubject<Project[]>([]);

  data$: Observable<Project[]> = this.projectDataSubject.asObservable();

  constructor( private http: HttpClient) { }

  fetchData(): void {
    this.http.get<Project[]>(this.url).pipe(
      tap((data: Project[]) => this.projectDataSubject.next(data)),
      catchError((error) => {
        console.log("Error fetching data", error);
        throw error;
      })
    ).subscribe();
  }

















  // async getAllProjects():Promise<Project[]>{
  //   const data = await fetch(`${this.url}`);
  //   return data.json() ?? [];
  // getFeaturedProjects(): Observable<Project[]> {
  //   return this.http.get<Project[]>(this.url)
  //     .pipe(
  //       map((projects: Project[]) => projects.filter(project => project.featured === true))
  //     );
  // }

  // getAllProjects():Observable<Project[]> {
  //   return this.http.get<Project[]>(this.url) 
  //   .pipe(
  //     timeout(1000), // Set a timeout of 5 seconds
  //     catchError(error => {
  //       console.error('Error:', error);
  //       return throwError(error); // Rethrow the error after logging
  //     })
  //   )
  // }
  
}
