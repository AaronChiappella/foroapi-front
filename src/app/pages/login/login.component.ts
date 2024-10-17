import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MaterialModule } from '../../material.module';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MaterialModule,
    CommonModule,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'], // Cambia 'styleUrl' por 'styleUrls'
})
export class LoginComponent {
  isLoginView: boolean = true;

  userRegisterObj: any = {
    userName: '',
    password: '',
    email: ''
  };

  userLogin: any = {
    email: '',
    password: ''
  };

  private router = inject(Router);
  private userService = inject(UserService); // Usa el UserService

  onRegister() {
    this.userService.register(this.userRegisterObj).subscribe(
      (response) => {
        if (response.isSuccess) {
          alert("Registration successful!");
          this.isLoginView = true; // Volver a la vista de login
        } else {
          alert(response.message);
        }
      },
      (error) => {
        alert("Error during registration. Please try again.");
      }
    );
  }

  onLogin() {
    this.userService.login(this.userLogin.email, this.userLogin.password).subscribe(
      (response) => {
        if (response.isSuccess) {
          // Almacenar el token o datos que devuelva la API
          // localStorage.setItem('token', response.data.token);
          this.router.navigateByUrl('layout'); // Redirigir al dashboard si el login es exitoso
        } else {
          alert(response.message);
        }
      },
      (error) => {
        alert("Email o contraseña incorrectos");
      }
    );
  }
}
