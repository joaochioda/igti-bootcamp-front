import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contact-create',
  templateUrl: './contact-create.component.html',
  styleUrls: ['./contact-create.component.css'],
})
export class ContactCreateComponent {
  contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
  });
  constructor(
    private contactService: ContactsService,
    private router: Router
  ) {}

  createContact(): void {
    this.contactService
      .createContact(this.contactForm.value)
      .subscribe(() => {
        this.router.navigate(['/contacts']);
      });
  }
}
