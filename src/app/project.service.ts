import { Injectable } from '@angular/core';
import { Project } from './project';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  url = "http://127.0.0.1:8000/api/projects";

  constructor( private http: HttpClient) { }
  // async getAllProjects():Promise<Project[]>{
  //   const data = await fetch(`${this.url}`);
  //   return data.json() ?? [];

  getAllProjects():Observable<Project[]> {
    return this.http.get<Project[]>(this.url)
  }
  
}
