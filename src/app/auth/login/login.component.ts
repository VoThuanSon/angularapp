import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Users } from '../auth';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  ngOnInit(): void {
    this.authService.ngOnInit()
  }
  formLogin = new FormGroup({
    email: new FormControl<string>('', [Validators.required, Validators.pattern('[a-zA-Z0-9]+\.[a-zA-Z0-9]+@gmail\.com')]),
    password: new FormControl<string>('', [Validators.required]),
  });
  constructor(private authService: AuthService, private router: Router) { }
  submit() {
    this.authService.login(this.formLogin.value).subscribe(data => {
      this.ngOnInit()
    }
    )
  }
}
