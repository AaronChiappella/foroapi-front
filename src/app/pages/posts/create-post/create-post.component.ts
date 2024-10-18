import { Component } from "@angular/core";
import { MaterialModule } from "../../../material.module";
import { Post } from "../../../models/post";
import { PostService } from "../../../services/post.service";
import { UserService } from "../../../services/user.service";

@Component({
  selector: 'app-create-post',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent {

  constructor(private postService: PostService, private userService: UserService) {}

  post: Post = {
    title: '',
    content: '',
    authorEmail: ''
  };

  submitForm() {
    // Check if the user is authenticated
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
    this.post = { title: '', content: '', authorEmail: '' }; // Reset form
  }
}
