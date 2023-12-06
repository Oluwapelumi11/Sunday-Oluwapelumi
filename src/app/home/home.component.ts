import { Component,ElementRef,PLATFORM_ID,Inject } from '@angular/core';
import { CommonModule,isPlatformBrowser } from '@angular/common';
import Typewriter from 't-writer.js';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent  {
  



  constructor( private el: ElementRef,@Inject(PLATFORM_ID) private platformId: Object ) {}



  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
    this.Writer();
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
  .rest(3000)
  .clear()
  .rest(500)
  .type(" data analyst")
  .rest(1000)
  .removeCursor()
  .then(writer3.start.bind(writer3))

writer3
  .type(" who specializes in             ")
  .rest(500)
  .rest(1000)
  .removeCursor()
  .then(writer4.start.bind(writer4))
writer4
  .changeTypeColor('#C778DD')
  .type('  machine learning')
  .rest(1000)
  


  }

  


}
