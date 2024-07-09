import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
Validators
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  ngOnInit(): void {
    this.authService.ngOnInit();    
  }
  formRegister = new FormGroup({
    email: new FormControl<string>('', [Validators.pattern('[a-zA-Z0-9]+\.[a-zA-Z0-9]+@gmail\.com'), Validators.required]),
    password: new FormControl<string>('', [Validators.minLength(6), Validators.required]),
    confirmPassword: new FormControl<string>('')
  });
  constructor(private authService: AuthService, private router: Router) {

  }
  submit() {
    this.authService.register(this.formRegister.value).subscribe(data => {
      this.ngOnInit()
    });
  }


}
