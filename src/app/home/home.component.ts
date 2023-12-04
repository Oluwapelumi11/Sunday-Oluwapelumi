import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import Typewriter from 't-writer.js';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  ngOnInit(): void {
    const target1 = document.querySelector('.typewriter1'); // Replace with your target element
    const target2 = document.querySelector('.typewriter2'); // Replace with your target element
    const options = {
      loop: true,
      typeColor: '#C778DD',
      typeSpeed: 150,
    };

    const writer1 = new Typewriter(target1, options);
    const writer2 = new Typewriter(target2, options);
    writer1
      .type('fullstack web developer')
      .rest(6800)
      .remove(23)
      .start();

      writer2
      .rest(4000)
      .type('data analyst')
      .remove(10)
      .start()

  }



}
