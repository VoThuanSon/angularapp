import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'doan';
  constructor(private authService: AuthService) { }
  isAuthenticated() {
    return Boolean(sessionStorage.getItem('authLogin'));
  }
  logout() {
    this.authService.logout()
  }

}
