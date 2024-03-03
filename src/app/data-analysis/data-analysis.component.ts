import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectService } from '../project.service';
import { Project } from '../project';
import { ProjectComponent } from '../project/project.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-data-analysis',
  standalone: true,
  imports: [CommonModule,ProjectComponent],
  templateUrl: './data-analysis.component.html',
  styleUrl: './data-analysis.component.css'
})
export class DataAnalysisComponent implements OnInit, OnDestroy {
projectList : Project[] = []
projectsub!: Subscription;
constructor(private projectService: ProjectService) {}

ngOnInit() : void {
  this.projectService.fetchData();
  this.projectsub=  this.projectService.data$.subscribe((result) => {
    this.projectList = result;
  })
  
}
ngOnDestroy(): void {
  if(this.projectsub){
    this.projectsub.unsubscribe();
  }
}




}
