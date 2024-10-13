import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbar } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { NavbarComponent } from '../navbar/navbar.component';

import { Router } from '@angular/router';


@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet,MatToolbar,MatSidenavModule,MatButtonModule,NavbarComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  constructor(private router: Router) {}


  navigateToLogin() {
    this.router.navigate(['/login']);
  }

}
