import { Component } from "@angular/core";
import { Post } from "../../../models/post";
import { PostService } from "../../../services/post.service";
import { UserService } from "../../../services/user.service";
import { MaterialModule } from "../../../material.module";

@Component({
  standalone : true,
  selector: 'app-create-post',
  imports : [MaterialModule],
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css'],
  
})
export class CreatePostComponent {

  constructor(private postService: PostService, private userService: UserService) {}

  post: Post = {
    title: '',
    content: '',
    authorEmail: ''
  };

  topic: string = '';  // Almacena el valor del nuevo topic a agregar
  topics: string[] = [];  // Almacena la lista de topics

  submitForm() {
    if (this.userService.isAuthenticated()) {
      this.postService.createPost(this.post).subscribe({
        next: (response) => {
          console.log('Post created successfully:', response);
        },
        error: (error) => {
          console.error('Error creating post:', error);
        }
      });
    } else {
      alert('You must be logged in to create a post.');
    }
  }

  cancel() {
    this.post = { title: '', content: '', authorEmail: '' }; // Resetea el formulario
    this.topics = []; // Resetea la lista de topics
    this.topic = '';  // Resetea el campo de topic
  }

  addTopic() {
    // Solo agregar si el campo no está vacío y el topic no está repetido
    if (this.topic && !this.topics.includes(this.topic)) {
      this.topics.push(this.topic);
      console.log(this.topics);
      
      this.topic = ''; // Limpiar el campo de input después de agregar
    }
  }

  removeTopic(topic: string) {
    const index = this.topics.indexOf(topic);
    if (index >= 0) {
      this.topics.splice(index, 1);  // Remover el topic de la lista
    }
  }

  



}
