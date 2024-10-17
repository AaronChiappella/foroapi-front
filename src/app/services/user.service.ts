import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'https://localhost:7289/api/users';

  constructor(private http: HttpClient) {}

  // Create a new user (register)
  register(user: User): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/Register`, user); // POST to /Register
  }

  // User login
  login(email: string, password: string): Observable<any> {
    const loginData = { email, password };
    return this.http.post<any>(`${this.apiUrl}/Login`, loginData); // POST to /Login
  }

  // Get all posts
  getPosts(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/GetAll`); // GET to /GetAll
  }

  // Get a post by its ID
  getPostBy(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${id}`); // GET to /{id}
  }

  // Update an existing post
  updatePost(post: User): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/Edit`, post); // PUT to /Edit
  }

  // Delete a post by its ID
  deletePost(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`); // DELETE to /{id}
  }
}
