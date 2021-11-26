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
      this.roles = this.tokenService.getAuthorities();
    }
  }

  onLogin(): void {
debugger;
  this.nombreUsuario = this.loginForm.value.nombreUsuario;
  this.password = this.loginForm.value.password;
    this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password);
    this.authService.login(this.loginUsuario).subscribe(
      data => {
        this.isLogged = true;
        this.isLoginFail = false;

        this.tokenService.setToken(data.Token);
        this.tokenService.setUserName(data.nombreUsuario);
        this.tokenService.setAuthorities(data.authorities);
        this.roles = data.authorities;
        // if(this.roles.indexOf('ROL_USER') != -1)
        //   this.router.navigate(['/tienda']);
     console.log(this.roles)

        // if(this.roles.indexOf('ROL_ADMIN') != -1) 
         this.router.navigate(['/admin']);
        

        this.toastr.success('Bienvenido' ,'OK', {
          timeOut: 5000, positionClass: 'toast-top-center',
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
