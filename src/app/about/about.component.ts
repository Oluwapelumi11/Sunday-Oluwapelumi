import { Component,inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillComponent } from '../skill/skill.component';
import { SkillService } from '../skill.service';
import { Skill } from '../skill';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule,SkillComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
skillList: Skill[] = [];


  constructor(private skillService:SkillService ){ } 

  ngOnInit (): void{
   
    this.skillService.fetchData();
    this.skillService.data$.subscribe((result)=>{
      this.skillList = result;
    })
    
   






  }
}
