import { Component } from '@angular/core';
import { RouterOutlet, ActivatedRoute } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { Router } from '@angular/router';
import { PostsComponent } from '../posts/posts.component';
import { MaterialModule } from '../../material.module';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';
import { ProfilePictureComponent } from "../profile-picture/profile-picture.component";
import { MainComponent } from '../main/main.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [MainComponent, RouterOutlet, MaterialModule, ProfilePictureComponent, NavbarComponent, PostsComponent, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'] // Cambié styleUrl por styleUrls (en plural) ya que este es el nombre correcto
})
export class LayoutComponent {

  constructor(private router: Router, private userService: UserService){};
   
  navigateToLogin() {
    this.router.navigate(['/login']);
  }

  navigateToCreatePost() {
    this.router.navigate(['/layout/createPost']); // Cambiamos la ruta a la correcta
  }

  isLoggedIn(): boolean {
    return this.userService.isAuthenticated(); // Usa el método que ya tienes
  }


  navigateToMain() {
    this.router.navigate(['/layout/main']); // Navega a la ruta principal o cualquier ruta que definas para la página principal
  }

}
