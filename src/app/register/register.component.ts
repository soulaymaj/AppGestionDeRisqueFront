import { Component } from '@angular/core';
import { Utilisateur } from '../models/utilisateur.model';
import { UtilisateurService } from '../services/utilisateur.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  model: Utilisateur = new Utilisateur(); // Utiliser le modèle Utilisateur

  constructor(private utilisateurService: UtilisateurService, private router: Router) {}

  onSubmit() {
    this.utilisateurService.createUtilisateur(this.model).subscribe(response => {
      console.log('User registered:', response);
      // Naviguer vers la page de connexion ou d'accueil
      this.router.navigate(['/login']);
    }, error => {
      console.error('Error registering user:', error);
    });
  }
}


