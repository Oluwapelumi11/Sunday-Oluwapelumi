import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-mobile-nav',
  standalone: true,
  imports: [CommonModule,RouterModule],
  template: `
    <div class="md:hidden block w-full  z-30 fixed left-0 top-0 bg-my-gray py-4">
        <div class="flex justify-between items-center py-4 px-3">
            <div class="flex text-2xl items-center">
                <svg width="25" height="25" class="mr-1" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M39 0H26V13H13H0V26V39V52H13H26V39H39H52V26V13V0H39ZM13 39H26V26H39V13H26V26H13V39Z" fill="white"/>
                    </svg>
                <p class="">Oluwapelumi</p>
            </div>
            <button (click)="showNav()"  class="active:bg-transparent bg-transparent focus:ring-0 " id="navtoggle" >
          @if (!shown) {    
            <svg width="24" id="open" class="" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect y="5" width="24" height="2" fill="#D9D9D9"/>
                    <rect x="9" y="12" width="15" height="2" fill="#D9D9D9"/>
                    </svg>}
            @if (shown){
                    <svg width="24" id="close" class="" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="1" height="1" transform="matrix(1 0 0 -1 11 12)" fill="#D9D9D9"/>
                        <rect x="3" y="19.9706" width="24" height="2" transform="rotate(-45 3 19.9706)" fill="#D9D9D9"/>
                        <rect x="4" y="3" width="24" height="2" transform="rotate(45 4 3)" fill="#D9D9D9"/>
                    </svg>
            }
                </button>
        </div>
    @if (shown){
        <div class=" py-20 h-full  overflow-hidden z-50 font-glitch text-3xl " id="nav">
            <ul class="flex flex-col text-3xl h-[97vh] md:text-inherit">
                <li class="py-2 md:py-0 px-2 text-gray-400" ><span class="text-my-purple">#</span><a (click)="showNav()" routerLink="" routerLinkActive="text-white" [routerLinkActiveOptions]="{exact:true}">home</a></li>
                <li class="py-2 md:py-0 px-2 text-gray-400 active:text-white"><span class="text-my-purple">#</span><a (click)="showNav()" routerLink="fullstack" routerLinkActive="text-white" >Web Projects</a></li>
                <li class="py-2 md:py-0 px-2 text-gray-400 active:text-white"><span class="text-my-purple">#</span><a (click)="showNav()" routerLink="data-analyst" routerLinkActive="text-white" >Data Science Projects</a></li>
                <li class="py-2 md:py-0 px-2 text-gray-400 active:text-white"><span class="text-my-purple">#</span><a (click)="showNav()" routerLink="about" routerLinkActive="text-white">about-me</a></li>
                <li class="py-2 md:py-0 px-2 text-gray-400 active:text-white"><span class="text-my-purple">#</span><a (click)="showNav()" routerLink="contact" routerLinkActive="text-white">contacts</a></li>
                <div class="py-2 md:py-0 md:px-2 text-left">
                    <select name="" id="" class="bg-transparent border-none focus:ring-0 text-2xl text-gray-400 focus-within:bg-my-gray focus-within:ring-0 ">
                        <option value="EN" class=" text-gray-400 " selected>EN</option>
                        <option value="FR" class="text-gray-400" >FR</option>
                    </select>
                </div>
            </ul>
            <div class="flex items-end justify-center w-full fixed bottom-0  py-8  px-5">
                <svg width="40" height="40" class="my-1 mx-2" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.5 6C9.69875 6 5 10.5882 5 16.2529C5 20.7899 8.00562 24.6219 12.1794 25.9804C12.7044 26.0701 12.9012 25.7625 12.9012 25.4934C12.9012 25.2499 12.8881 24.4425 12.8881 23.5838C10.25 24.058 9.5675 22.9558 9.3575 22.3791C9.23938 22.0843 8.7275 21.1743 8.28125 20.9308C7.91375 20.7386 7.38875 20.2644 8.26813 20.2516C9.095 20.2388 9.68563 20.9949 9.8825 21.3025C10.8275 22.8533 12.3369 22.4175 12.9406 22.1484C13.0325 21.4819 13.3081 21.0334 13.61 20.777C11.2737 20.5207 8.8325 19.6364 8.8325 15.7147C8.8325 14.5997 9.23938 13.6769 9.90875 12.9592C9.80375 12.7029 9.43625 11.6519 10.0138 10.2422C10.0138 10.2422 10.8931 9.97301 12.9012 11.2931C13.7413 11.0624 14.6338 10.947 15.5263 10.947C16.4188 10.947 17.3113 11.0624 18.1513 11.2931C20.1594 9.9602 21.0387 10.2422 21.0387 10.2422C21.6163 11.6519 21.2488 12.7029 21.1438 12.9592C21.8131 13.6769 22.22 14.5868 22.22 15.7147C22.22 19.6492 19.7656 20.5207 17.4294 20.777C17.81 21.0975 18.1381 21.7126 18.1381 22.6738C18.1381 24.0452 18.125 25.1474 18.125 25.4934C18.125 25.7625 18.3219 26.0829 18.8469 25.9804C20.9314 25.2935 22.7428 23.9854 24.026 22.2403C25.3092 20.4953 25.9996 18.4012 26 16.2529C26 10.5882 21.3013 6 15.5 6Z" fill="#ABB2BF"/>
                    </svg>
        
                    <svg width="40" height="40" class="my-1 mx-2" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24.1641 7.65906C22.543 6.87826 20.8325 6.32099 19.0751 6.00114C19.0592 5.99832 19.0428 6.00076 19.0283 6.0081C19.0137 6.01544 19.0017 6.02733 18.9938 6.04214C18.7735 6.45211 18.5298 6.98835 18.3595 7.40816C16.4651 7.10643 14.5383 7.10643 12.6439 7.40816C12.4539 6.9405 12.239 6.48443 12.0002 6.04214C11.9922 6.02749 11.9801 6.01574 11.9656 6.00842C11.9511 6.0011 11.9348 5.99856 11.9189 6.00114C10.1611 6.31928 8.45021 6.87684 6.82991 7.65906C6.81605 7.66461 6.80445 7.67504 6.7971 7.68858C3.55651 12.7706 2.66745 17.7279 3.10339 22.623C3.10495 22.6459 3.11901 22.6689 3.1362 22.6836C5.02325 24.1507 7.13396 25.2708 9.37832 25.9962C9.39417 26.0014 9.4112 26.0013 9.42693 25.9957C9.44267 25.99 9.45629 25.9793 9.46582 25.965C9.94707 25.2763 10.3752 24.5498 10.7439 23.7856C10.7516 23.7699 10.7543 23.752 10.7514 23.7345C10.7486 23.7171 10.7405 23.7011 10.7283 23.6889C10.7202 23.6809 10.7107 23.6747 10.7002 23.6708C10.027 23.3993 9.37503 23.0731 8.7502 22.6951C8.73275 22.6847 8.71977 22.6677 8.71395 22.6476C8.70814 22.6274 8.70993 22.6057 8.71895 22.5869C8.72427 22.5747 8.73231 22.564 8.74239 22.5557C8.87364 22.4524 9.00489 22.3442 9.12989 22.236C9.14093 22.2266 9.15418 22.2206 9.16821 22.2186C9.18225 22.2166 9.19655 22.2186 9.20957 22.2245C13.3017 24.1858 17.7314 24.1858 21.7735 22.2245C21.787 22.2183 21.8018 22.2162 21.8164 22.2182C21.831 22.2202 21.8448 22.2264 21.8563 22.236C21.9813 22.3442 22.1126 22.4524 22.2438 22.5557C22.2544 22.5639 22.263 22.5747 22.2687 22.5872C22.2744 22.5996 22.277 22.6134 22.2764 22.6272C22.2758 22.641 22.2719 22.6544 22.2651 22.6663C22.2584 22.6781 22.2489 22.688 22.2376 22.6951C21.6142 23.0765 20.9614 23.4024 20.286 23.6692C20.2752 23.6733 20.2655 23.6798 20.2574 23.6883C20.2493 23.6968 20.243 23.7071 20.2391 23.7184C20.2355 23.7294 20.2341 23.741 20.2349 23.7525C20.2357 23.7641 20.2387 23.7754 20.2438 23.7856C20.6188 24.5482 21.0485 25.2763 21.5204 25.965C21.5299 25.9793 21.5435 25.99 21.5593 25.9957C21.575 26.0013 21.592 26.0014 21.6079 25.9962C23.856 25.2731 25.9701 24.1528 27.8594 22.6836C27.8688 22.6768 27.8767 22.6677 27.8824 22.6572C27.8881 22.6467 27.8914 22.635 27.8922 22.623C28.4141 16.9637 27.0188 12.0474 24.1954 7.69022C24.1925 7.68302 24.1883 7.67653 24.1829 7.67116C24.1775 7.66579 24.1711 7.66167 24.1641 7.65906ZM11.3549 19.6417C10.1221 19.6417 9.10801 18.4544 9.10801 16.9982C9.10801 15.5403 10.1033 14.353 11.3549 14.353C12.6158 14.353 13.6205 15.5502 13.6017 16.9982C13.6017 18.4544 12.6064 19.6417 11.3549 19.6417ZM19.661 19.6417C18.4298 19.6417 17.4142 18.4544 17.4142 16.9982C17.4142 15.5403 18.4095 14.353 19.661 14.353C20.922 14.353 21.9282 15.5502 21.9079 16.9982C21.9079 18.4544 20.922 19.6417 19.661 19.6417Z" fill="#ABB2BF"/>
                        </svg>
        
                        <svg width="40" height="40" class="my-1 mx-2" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.07187 9.20292C5.2168 8.57709 5.57307 8.01832 6.08232 7.6181C6.59158 7.21789 7.22365 6.99996 7.875 7H25.125C25.7764 6.99996 26.4084 7.21789 26.9177 7.6181C27.4269 8.01832 27.7832 8.57709 27.9281 9.20292L16.5 16.0865L5.07187 9.20292ZM5 10.8207V20.8847L13.3418 15.8442L5 10.8207ZM14.7189 16.6758L5.27456 22.3807C5.50791 22.8657 5.87619 23.2753 6.33656 23.5619C6.79693 23.8486 7.33044 24.0005 7.875 24H25.125C25.6695 24.0001 26.2028 23.8479 26.6629 23.561C27.123 23.274 27.491 22.8643 27.724 22.3793L18.2796 16.6744L16.5 17.7468L14.7189 16.6744V16.6758ZM19.6582 15.8457L28 20.8847V10.8207L19.6582 15.8442V15.8457Z" fill="#ABB2BF"/>
                            </svg>
            </div>
        </div>
    }
    

  `,
  styleUrl: './mobile-nav.component.css'
})
export class MobileNavComponent {


  shown : boolean = false;

  showNav(): any| undefined{
    this.shown = !this.shown
  }

}
