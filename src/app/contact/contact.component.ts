import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser} from '@angular/common';
import { FormGroup,FormControl,ReactiveFormsModule,Validators } from '@angular/forms';
import { ContactService } from '../contact.service';
import Typewriter from 't-writer.js';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  submitSuccess : boolean = false;
  buttonValue: string ="Send"

  contactForm = new FormGroup({
    name : new FormControl('',[Validators.required,Validators.minLength(3)]),
    email : new FormControl('',[Validators.required]),
    title : new FormControl('',[Validators.required]),
    message : new FormControl('',[Validators.required,Validators.minLength(8)]),
    
  });
 

  constructor(private contactService: ContactService,
    @Inject(PLATFORM_ID) private platformId: Object
    ){ }
  onSubmit(){
    if (this.contactForm.valid){
      this.buttonValue = "Sending..."
     const contactForm = this.contactForm.value;
    this.contactService.sendmessage(contactForm).subscribe(response => {
      this.contactForm.reset
      this.submitSuccess= true
      this.buttonValue = "Send"
      if (isPlatformBrowser(this.platformId)) {
        this.Writer();
      }
    })
    }
    
  }

  Writer(): void {
    const target = document.querySelector(".success");
    const options = {
      loop: false,
      typeColor: 'white',
      cursorColor: 'white',
      typeSpeed: 'random',
    };
    const writer = new Typewriter(target, options);

    writer
 
    .type('Message Sent Successfully!')
    .rest(2500)
    .clear()
    .removeCursor()
    .start()
  }
  better(): void {
    this.Writer()
  }
}
