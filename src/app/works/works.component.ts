import { Component,OnDestroy,OnInit,inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../project';
import { ProjectService } from '../project.service';
import { ProjectComponent } from '../project/project.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-works',
  standalone: true,
  imports: [CommonModule,ProjectComponent],
  templateUrl: './works.component.html',
  styleUrl: './works.component.css'
})
export class WorksComponent implements OnInit, OnDestroy {
  projectList : Project[] = [];
  projectsubscription! : Subscription;

constructor( private projectService:ProjectService){}


ngOnInit() : void {
  this.projectService.fetchData();
  this.projectsubscription = this.projectService.data$.subscribe((result) => {
    this.projectList = result;
  })
}


ngOnDestroy(): void {
  if(this.projectsubscription){
    this.projectsubscription.unsubscribe();
  }
}

}
