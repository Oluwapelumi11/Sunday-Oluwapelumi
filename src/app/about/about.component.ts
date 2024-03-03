import { Component,OnDestroy,OnInit,inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillComponent } from '../skill/skill.component';
import { SkillService } from '../skill.service';
import { Skill } from '../skill';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule,SkillComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit, OnDestroy {
skillList: Skill[] = [];
skillsub!: Subscription;

  constructor(private skillService:SkillService ){ } 

  ngOnInit (): void{
   
    this.skillService.fetchData();
    this.skillsub = this.skillService.data$.subscribe((result)=>{
      this.skillList = result;
    })
  }


  ngOnDestroy(): void {
    if(this.skillsub){
      this.skillsub.unsubscribe();
    }
  }
}
