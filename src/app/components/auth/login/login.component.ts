import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { gql } from 'apollo-angular';
import { LoginService } from 'src/app/services/login.service';

const LOGIN_QUERY = gql`
  query GetUser($email: String!, $password: String!) {
    getUser(email: $email, password: $password) {
      name
      address
    }
  }
`;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup = this._formBuilder.group(
    {
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    },
    { updateOn: 'blur' }
  );

  constructor(private _formBuilder: FormBuilder, private _loginService: LoginService) {}

  handleLogin() {
    const { email, password } = this.loginForm.value;
    this._loginService.handleLoginQueries(LOGIN_QUERY, {email, password})
  }
}
