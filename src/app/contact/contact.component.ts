import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  isSubmitting = false;

  ngOnInit(): void {
    
  }

  public sendEmail(e) {

    this.isSubmitting = true;
      e.preventDefault();
      emailjs.sendForm('service_yvejts9', 'template_ed5ve0g', e.target as HTMLFormElement,
      "user_Yu0jX9EaO6AO6xl4v7yaq")
        .then((result: EmailJSResponseStatus) => {
          alert("Message Sent! We will get back to you as soon as possible! Thank you!");
          this.isSubmitting = false;
        }, (error) => {
          alert("Something went wrong. Try one more time.");
          this.isSubmitting = false;
        });

      }
}
