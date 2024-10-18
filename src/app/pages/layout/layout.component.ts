import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';

import { Router } from '@angular/router';
import { PostsComponent } from '../posts/posts.component';
import { MaterialModule } from '../../material.module';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, MaterialModule, NavbarComponent, PostsComponent,CommonModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  constructor(private router: Router, private userService: UserService) {}


  navigateToLogin() {
    this.router.navigate(['/login']);
  }

  navigateToCreatePost() {
    this.router.navigate(['/layout/createPost']); // Cambiamos la ruta a la correcta
  }

  isLoggedIn(): boolean {
    return this.userService.isAuthenticated(); // Usa el método que ya tienes
  }

  logout() {
    this.userService.logout(); // Llama al método de logout
    this.router.navigate(['/login']);
  }


}
