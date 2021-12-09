import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient)
{}  login(user: any) {
    return this.http.post('http://localhost:8761/auth/login', user);
  }

  register(user: any) {
    return this.http.post('http://localhost:8761/auth/register', user);
  }
  getProducts() {
    return this.http.get('http://localhost:8761/products');
  }
}
