import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Skill } from '../skill';

@Component({
  selector: 'app-skill',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class=" h-fit border mt-3 col-span-full md:col-span-1 border-gray-400 w-full">

<p class="px-1 sm:px-2 border-b">
  {{ skill.category }}</p>

<p class="sm:text-base text-xs text-gray-400 px-2 py-1 leading-6">
  @for (skill of skill.skills; track $index) {
    {{skill}}
  }
</p>
</div>
  `,
  styleUrl: './skill.component.css'
})
export class SkillComponent {
@Input() skill! :Skill;

}
