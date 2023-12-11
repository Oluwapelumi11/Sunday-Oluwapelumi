import { Component } from '@angular/core';
import { CommonModule} from '@angular/common';
import { FormGroup,FormControl,ReactiveFormsModule,Validators } from '@angular/forms';
import { ContactService } from '../contact.service';


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

  constructor(private contactService: ContactService){ }
  onSubmit(){
    if (this.contactForm.valid){
      this.buttonValue = "Sending..."
     const contactForm = this.contactForm.value;
    this.contactService.sendmessage(contactForm).subscribe(response => {
      this.contactForm.reset
      this.submitSuccess= true
      this.buttonValue = "Send"
      setTimeout(() => {
        this.submitSuccess = false
      }, 5000)
    })
    }
    
  }
}
