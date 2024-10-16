import { Component } from '@angular/core';
import { LayoutComponent } from "./pages/layout/layout.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule, 
    LayoutComponent
    ], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'foroapi';
}
