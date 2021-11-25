import { Component, OnInit } from '@angular/core';
import { TokenService } from '../../../../../core/servicios/auth/token.service';
import { AuthService } from '../../../../../core/servicios/auth/auth.service';
import { Router } from '@angular/router';
import { LoginUsuario } from '../../../../../modelos/auth/login-usuario';
import { ToastrService } from 'ngx-toastr';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  isLogged = false;
  isLoginFail = false;
  loginUsuario!: LoginUsuario;
  nombreUsuario!: string;
  password!: string;

  roles: string[] = [];

  loginForm!: FormGroup;

  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService

  ) { }

  ngOnInit(): void {

    this.loginForm = this.authService.loginForm;
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.isLoginFail = false;
      this.roles = this.tokenService.getAturhorities();
    }
  }

  onLogin(): void {

    this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password);
    this.authService.login(this.loginUsuario).subscribe(
      data => {
        this.isLogged = true;
        this.isLoginFail = false;

        this.tokenService.setToken(data.Token);
        this.tokenService.setUserName(data.nombreUsuario);
        this.tokenService.setAuthorities(data.authorities);
        this.roles = data.authorities;

        this.toastr.success('Bienvenido' ,'OK', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });

      },
      error => {
        this.isLogged = false;
        this.isLoginFail = true;
        this.toastr.error(error.error.message, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
      }
    )
  }

}
