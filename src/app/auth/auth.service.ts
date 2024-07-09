import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from './auth';
import { HttpClient } from '@angular/common/http';
import {  Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private urlUsers = 'http://localhost:3000/Users';
  user: Users;
  isAuthenticated: boolean = false;
  Users: Users[] = [];
  ngOnInit(): void {
    this.getAllUser().subscribe(data => {
      this.Users = data;
    })
  }
  constructor(private router: Router, private http: HttpClient) {
  }
  getAllUser() {
    return this.http.get<Users[]>(`${this.urlUsers}`);
  }
  getUser(id: string) {
    return this.http.get<Users>(`${this.urlUsers}/${id}`);
  }
  register(form: object): Observable<Users[]> {
    var user = this.Users.find(x => x.email === form['email'])
    if (form['password'] == form['confirmPassword'] && !user) {
      alert('Dang ky thanh cong')
      this.router.navigate(['login'])
      return this.http.post<Users[]>(`${this.urlUsers}`, form)
    }
    if (form['password'] != form['confirmPassword']) {
      alert('Password and ConfirmPassword not match!')
    } else if (user) {
      alert('Email had been created')
    }
    return this.http.get<Users[]>(`${this.urlUsers}`)
  }
  logout() {
    this.router.navigate(['login'])
    this.isAuthenticated = false
    sessionStorage.clear()
  }
  // can acctive route ///// !!
  Islogin() {
    return sessionStorage.getItem('authLogin');
  }
  // login
  login(form: Object) {
    this.ngOnInit()
    let hasuser = this.Users.find(x => x['password'] === form['password'] && x['email'] === form['email'])
    if (hasuser) {
      this.user = hasuser
    }
    if (this.user) {
      this.router.navigate([''])
      this.isAuthenticated = true;
      sessionStorage.setItem('authLogin', String(this.isAuthenticated))
      return this.http.get<Users[]>(`${this.urlUsers}`)
    } else {
      alert('login not success')
      sessionStorage.setItem('authLogin', String(this.isAuthenticated))
      return this.http.get<Users[]>(`${this.urlUsers}`);
    }
  }
}
