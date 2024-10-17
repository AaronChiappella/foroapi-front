import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../models/post';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // Ensure the service is available application-wide
})
export class PostService {

  constructor(private http: HttpClient) {}

  // Base URL for the API
  private apiUrl = 'https://localhost:7289/api/Posts';

  // Create a new post
  createPost(post: Post): Observable<Post> {
    return this.http.post<Post>(`${this.apiUrl}/Create`, post); // POST to /Create
  }

  // Get all posts
  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.apiUrl}/GetAll`); // GET to /GetAll
  }

  // Get a post by its ID
  getPostBy(id: number): Observable<Post> {
    return this.http.get<Post>(`${this.apiUrl}/${id}`); // GET to /{id}
  }

  // Update an existing post
  updatePost(post: Post): Observable<Post> {
    return this.http.put<Post>(`${this.apiUrl}/Edit`, post); // PUT to /Edit
  }

  // Delete a post by its ID
  deletePost(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`); // DELETE to /{id}
  }
}
