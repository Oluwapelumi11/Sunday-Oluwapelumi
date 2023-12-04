import { Component,inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../project';
import { ProjectService } from '../project.service';
import { ProjectComponent } from '../project/project.component';

@Component({
  selector: 'app-works',
  standalone: true,
  imports: [CommonModule,ProjectComponent],
  templateUrl: './works.component.html',
  styleUrl: './works.component.css'
})
export class WorksComponent {
  projectList : Project[] = [];
  

constructor( private projectService:ProjectService){}


ngOnInit() : void {
  this.projectService.getAllProjects().subscribe((projectList:Project[]) => {
    this.projectList = projectList
  })
}
}
