import { Component } from '@angular/core';
import { LayoutComponent } from "./pages/layout/layout.component";
import { RouterModule } from '@angular/router';
import { PostComponent } from "./pages/posts/post/post.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { UserService } from './services/user.service';
import { PostService } from './services/post.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    LayoutComponent,
    PostComponent,
    RouterModule,
    MaterialModule,   
    
  ], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'foroapi';
}
