import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectService } from '../project.service';
import { Project } from '../project';
import { ProjectComponent } from '../project/project.component';

@Component({
  selector: 'app-data-analysis',
  standalone: true,
  imports: [CommonModule,ProjectComponent],
  templateUrl: './data-analysis.component.html',
  styleUrl: './data-analysis.component.css'
})
export class DataAnalysisComponent {
projectList : Project[] = []
constructor(private projectService: ProjectService) {}

ngOnInit() : void {
  this.projectService.fetchData();
  this.projectService.data$.subscribe((result) => {
    this.projectList = result;
  })
  
}





}
