import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MaterialModule } from '../../material.module';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
   MaterialModule,
   CommonModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] // Cambia 'styleUrl' por 'styleUrls'
})
export class LoginComponent {
  isLoginView: boolean = true;

  userRegisterObj: any = {
    userName: '',
    password: '',
    email: ''
  };

  userLogin: any = {
    email: '', // Cambia 'mail' por 'email' para que coincida con loginData
    password: ''
  };

  router = inject(Router);
  http = inject(HttpClient);

  onRegister() {
    const registrationData = {
      userName: this.userRegisterObj.userName,
      email: this.userRegisterObj.email,
      password: this.userRegisterObj.password
    };

    // Realizar la petición POST a la API para crear el usuario
    this.http.post<any>('https://localhost:7289/api/Users/Register', registrationData).subscribe(
      (response) => {
        if (response.isSuccess) {
          alert("Registration successful!");
          this.isLoginView = true; // Volver a la vista de login
        } else {
          alert(response.message);
        }
      },
      (error) => {
        // Manejar el error de la petición
        alert("Error during registration. Please try again.");
      }
    );
  }


  onLogin() {
    const loginData = {
      email: this.userLogin.email,
      password: this.userLogin.password
    };

    // Realizar la petición POST a la API
    this.http.post<any>('https://localhost:7289/api/Users/Login', loginData).subscribe(
      (response) => {
        if (response.isSuccess) {
          // Aquí puedes almacenar el token o los datos que devuelva la API
          // localStorage.setItem('token', response.data.token); // Si tu API devuelve un token JWT
          
          // Redirigir al dashboard si el login es exitoso
          this.router.navigateByUrl('dashboard');
        } else {
          // Mostrar un mensaje si el login falla
          alert(response.message);
        }
      },
      (error) => {
        // Manejar el error de la petición
        alert("Email o contraseña incorrectos");
      }
    );
  }
}
