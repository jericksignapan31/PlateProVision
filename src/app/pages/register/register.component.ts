import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
firstName: string = '';
lastName: string = '';
confirmPassword: string = '';
  email: string = '';
  username: string = '';
  password: string = '';

  onSubmit(){
     console.log('Full Name:', this.firstName);
     console.log('Full Name:', this.lastName);
    console.log('Email:', this.email);
    console.log('Username:', this.username);
    console.log('Password:', this.password);
     console.log('Email:', this.confirmPassword);
  }
}
