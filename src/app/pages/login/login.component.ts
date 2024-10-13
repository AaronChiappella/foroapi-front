import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MaterialModule } from '../../material.module';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    MaterialModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatDividerModule,
    MatFormFieldModule,
    MatSelectModule,
    HttpClientModule // Asegúrate de incluir esto
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
