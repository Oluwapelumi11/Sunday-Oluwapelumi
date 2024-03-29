import { Component,ElementRef,PLATFORM_ID,Inject, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule,isPlatformBrowser } from '@angular/common';
import Typewriter from 't-writer.js';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ProjectComponent } from '../project/project.component';
import { ProjectService } from '../project.service';
import { SkillService } from '../skill.service';
import { Project } from '../project';
import { Skill } from '../skill';
import { Subscription } from 'rxjs';




@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,RouterModule,RouterOutlet,ProjectComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit,AfterViewInit,OnDestroy {
  projectList: Project[] = [];
  skillList: Skill[] = []

  projectsubscription! : Subscription
  skillsubscription! : Subscription

  constructor( private el: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object,
   private projectService: ProjectService,
   private skillService: SkillService ) {}

   ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.Writer();
    }
  }


  ngOnInit(): void {

    this.projectService.fetchData();
    this.projectsubscription =this.projectService.data$.subscribe((result) => {
      this.projectList = result;
    })

    this.skillService.fetchData();
    this.skillsubscription =this.skillService.data$.subscribe((result)=>{
      this.skillList = result;
    })
}
ngOnDestroy(): void {
  if (this.projectsubscription){
    this.projectsubscription.unsubscribe();
  }
  if (this.skillsubscription){
    this.skillsubscription.unsubscribe();
  }
}





   
  


  Writer():void{
  
    const target1 = document.querySelector('.typewriter1'); // Replace with your target element
    const target2 = document.querySelector('.typewriter2'); // Replace with your target element
    const target3 = document.querySelector('.typewriter3'); // Replace with your target element
    const target4 = document.querySelector('.typewriter4'); // Replace with your target element
    const options = {
      loop: false,
      typeColor: 'white',
      cursorColor: 'white',
      typeSpeed: 'random',
    };
    const options1 = {
      loop: false,
      typeColor: 'white',
      typeSpeed: 100,
      cursorColor: '#C778DD',
    };


    const writer1 = new Typewriter(target1, options);
    const writer2 = new Typewriter(target2, options1);
    const writer3 = new Typewriter(target3, options);
    const writer4 = new Typewriter(target4, options1);
    

  writer1
  .type('Oluwapelumi is a ')
  .rest(1000)
  .removeCursor()
  .then(writer2.start.bind(writer2))

  .start()

writer2
  .changeTypeColor('#C778DD')
  .type(" fullstack web developer")
  .rest(1000)
  .removeCursor()
  .then(writer3.start.bind(writer3))

writer3
  .type(" and              ")
  .rest(500)
  .removeCursor()
  .then(writer4.start.bind(writer4))
writer4
  .changeTypeColor('#C778DD')
  .type('  data scientist')
  .rest(1000)
  


  }

  


}
