import { Component } from '@angular/core';
import { PostComponent } from './post/post.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [PostComponent,CommonModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent {



posts = [
    {
      id: 1,
      title: 'Post 1',
      longText: 'Este es el contenido del Post 1',
      authorName: 'Autor 1',
      aliasName: '@autor1',
      urlProfileImage: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      topics: [{ id: 1, name: 'Angular' }, { id: 2, name: 'Frontend' }]
    },
    {
      id: 2,
      title: 'Post 2',
      longText: 'Este es el contenido del Post 2',
      authorName: 'Autor 2',
      aliasName: '@autor2',
      urlProfileImage: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      topics: [{ id: 1, name: 'TypeScript' }, { id: 2, name: 'JavaScript' }]
    }
  ];

}
