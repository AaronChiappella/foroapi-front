import { Component, OnInit } from '@angular/core';
import { PostComponent } from './post/post.component';
import { CommonModule } from '@angular/common';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/post';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [PostComponent,CommonModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit{

  posts: Post[] = [];

  constructor(/*private postService: PostService*/) {}


  ngOnInit(): void {
   // this.loadPosts(); // Cargar los posts al inicializar el componente
  }
/*
loadPosts(): void {
    this.postService.getPosts().subscribe({
      next: (data) => {
        this.posts = data; // Asignar la respuesta a la propiedad 'posts'
      },
      error: (err) => {
        console.error('Error fetching posts:', err); // Manejo de errores
      }
    });
  }

*/



  
}
