import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactInfo = {
    email: 'atharesakshi590@gmail.com',
    phone: '+91 8010254307',
    linkedin: 'https://linkedin.com/in/sakshi-athare-63b505268',
    github: 'https://github.com/your-username'
  };
}
