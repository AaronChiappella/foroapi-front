import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {LoginComponent} from './pages/login/login.component'
import { LayoutComponent } from "./pages/layout/layout.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LoginComponent,RouterOutlet, LoginComponent, LayoutComponent],  // Agrega RouterOutlet a las importaciones
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'foroapi';
}
