import { Component } from '@angular/core';
import { Utilisateur } from '../models/utilisateur.model';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  model: Utilisateur = new Utilisateur(); // Use Utilisateur model

  constructor(private router: Router) {}

  onSubmit() {
    // Here you can add your authentication logic, e.g., call a service to validate the user
    console.log('Username:', this.model.nomutilisateur);
    console.log('Password:', this.model.motdepasse);

    // Navigate to home or another route after login
    this.router.navigate(['/home']);
  }

  
}
