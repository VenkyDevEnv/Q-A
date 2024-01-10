import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      mail: [''],
      password: [''],
    });
  }
  ngOnInit(): void {}

  onSubmit() {
    if (this.loginForm.valid) {
      this.router.navigate(['home']);
    }
    console.log(this.loginForm.value);
    console.log('User successfully logged in');
  }
}
