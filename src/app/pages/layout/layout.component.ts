import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NavbarComponent } from '../navbar/navbar.component';

import { Router } from '@angular/router';
import { PostsComponent } from '../posts/posts.component';
import { MaterialModule } from '../../material.module';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, MaterialModule, NavbarComponent, PostsComponent,CommonModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  constructor(private router: Router) {}


  navigateToLogin() {
    this.router.navigate(['/login']);
  }

}
