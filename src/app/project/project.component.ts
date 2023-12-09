import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../project';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule],
  template: `
   <div class="h-fit border border-b border-gray-500  text-gray-400 ">
                <div class=" w-full">
                  <!-- @if (!project.small_project){ -->
                <img class="w-full" [src]="project.image" alt="">
                  <!-- } -->
                  {{project.image}}
                    <p class="text-left text-sm px-2 py-2">
                  @for (skill of project.skills; track $index) {
                    <span>{{ skill.name }} </span>
                  }
                  </p>
                </div>
                <div class="border-t border-gray-400">
                    <p class="py-2 px-2 text-gray-100 font-glitch">{{project.title}}</p>
                    <p class="text-sm px-2 ">{{ project.description}}</p>
                    <div class="flex py-3 px-2 text-xl font-nine">
                    @if (project.live) {    
                    <a [href]="project.live_url" class=" border  border-my-purple  px-3 py-2 leading-3">Live <~~> </a>}
                       @else{ <a [href]="project.github_url" class=" border  border-gray-400 px-3 py-2 leading-3">Cached <~~> </a>
                    }
                    </div>
                </div>
    
            </div>
  `,
  styleUrl: './project.component.css'
})
export class ProjectComponent {
  @Input() project!: Project;

}
