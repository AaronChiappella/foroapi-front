import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-profile-picture',
  standalone: true,
  imports: [RouterOutlet,CommonModule,MatMenuModule,MatIconModule],
  templateUrl: './profile-picture.component.html',
  styleUrl: './profile-picture.component.css'
})
export class ProfilePictureComponent {

  constructor(private router: Router, private userService: UserService) {}

  
  isLoggedIn(): boolean {
    return this.userService.isAuthenticated(); // Usa el método que ya tienes
  }


  navigateToSettings(){
    this.router.navigate(['/layout/profile']);
  }

  logout() {
    this.userService.logout(); // Llama al método de logout
    this.router.navigate(['/']);
  }
}
