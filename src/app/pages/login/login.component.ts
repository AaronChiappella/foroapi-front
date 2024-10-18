import { Router } from "@angular/router";
import { UserService } from "../../services/user.service";
import { Component, inject } from "@angular/core";
import { MaterialModule } from "../../material.module";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MaterialModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
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
  private userService = inject(UserService);

  onRegister() {
    this.userService.register(this.userRegisterObj).subscribe(
      (response) => {
        if (response.isSuccess) {
          alert("Registration successful!");
          this.isLoginView = true;
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
        console.log('Respuesta del servidor:', response);
        if (response.response.isSuccess) {
          // Guarda el token en el almacenamiento local
          localStorage.setItem('userToken', response.token);
          
          // Opcional: guarda información del usuario (excepto la contraseña)
          const userData = {
            id: response.response.data.id,
            email: response.response.data.email,
            activo: response.response.data.activo
          };
          localStorage.setItem('userData', JSON.stringify(userData)); // Guarda la info del usuario si es necesario
  
          // Redirige a la página de layout
          this.router.navigate(['layout']);
        } else {
          alert(response.response.message); // Muestra el mensaje de error
        }
      },
      (error) => {
        console.error('Error al iniciar sesión:', error);
        alert("Incorrect email or password");
      }
    );
  }
  
  

  onLogout() {
    this.userService.logout();
    this.router.navigateByUrl(''); // Redirect to login after logout
  }
}
 