import { Component } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { PostsComponent } from '../posts/posts.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { CreatePostComponent } from "../posts/create-post/create-post.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [NavbarComponent,CreatePostComponent, MaterialModule, PostsComponent, CreatePostComponent,CreatePostComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
