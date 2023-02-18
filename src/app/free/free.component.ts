import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-free',
  templateUrl: './free.component.html',
  styleUrls: ['./free.component.css']
})
export class FreeComponent implements OnInit {

  constructor() { }
  
  isSubmitting = false;

  ngOnInit(): void {
  }

  public sendEmail(e) {

    this.isSubmitting = true;
      e.preventDefault();
      emailjs.sendForm('service_yvejts9', 'template_puhen7q', e.target as HTMLFormElement,
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
