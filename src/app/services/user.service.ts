import { Observable, tap } from "rxjs";
import { User } from "../models/user";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'https://localhost:7289/api/users';

  constructor(private http: HttpClient) {}

  // Create a new user (register)
  register(user: User): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/Register`, user);
  }

  // User login
  login(email: string, password: string): Observable<any> {
    const loginData = { email, password };
    return this.http.post<any>(`${this.apiUrl}/Login`, loginData).pipe(
      tap((response) => {
        if (response.isSuccess) {
          localStorage.setItem('token', response.data.token); // Store token in localStorage
        }
      })
    );
  }

  // Check if the user is authenticated
  isAuthenticated(): boolean {
    return !!localStorage.getItem('userToken'); // If token exists, user is authenticated
  }

  // Log out the user
  logout() {
    console.log('eliminacion token');
    
    localStorage.removeItem('userToken'); // Remove token on logout
  }

  // Other methods (getPosts, updatePost, deletePost) remain the same...
}
