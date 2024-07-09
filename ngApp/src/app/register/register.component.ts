import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Subscriber } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private _auth: AuthService, private _router: Router) {

  }
  registerUserData = {
    email: '',
    password: ''
  }
  registerUser() {
    this._auth.registerUser(this.registerUserData).subscribe({
      next: (res) => {
        localStorage.setItem('token', res.token)
        this._router.navigate(['/special'])
      },
      error: err => console.log(err)
  }
    )
}
}
