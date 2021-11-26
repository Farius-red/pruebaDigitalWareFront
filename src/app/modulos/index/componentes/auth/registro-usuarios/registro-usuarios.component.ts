import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../../core/servicios/auth/auth.service';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/core/servicios/auth/token.service';

import { ToastrService } from 'ngx-toastr';
import { NuevoUsuario } from '../../../../../modelos/auth/nuevo-usuario';

@Component({
  selector: 'app-registro-usuarios',
  templateUrl: './registro-usuarios.component.html',
  styleUrls: ['./registro-usuarios.component.css']
})
export class RegistroUsuariosComponent implements OnInit {
  
  isLogged = false;
  nuevoUsuario!: NuevoUsuario;
  nombre!: string;
  nombreUsuario!: string;
  email!: string;
  password!: string;
  nuevoUsuarioFrom!: FormGroup;

  constructor(
    private authService: AuthService, 
    private router: Router, 
    private tokenService: TokenService,
    private toastr: ToastrService,
    ) { }


  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    }
    this.nuevoUsuarioFrom = this.authService.nuevoUsuarioFrom;
  }

  registroUsuario(): void {
    if (this.nuevoUsuarioFrom.valid) {

       this.nombre = this.nuevoUsuarioFrom.value.nombre;
       this.nombreUsuario = this.nuevoUsuarioFrom.value.nombreUsuario;
       this.email = this.nuevoUsuarioFrom.value.email;
       this.password = this.nuevoUsuarioFrom.value.password;

      this.nuevoUsuario = new NuevoUsuario(this.nombre, this.nombreUsuario, this.email, this.password)
      this.authService.registrarUsuario(this.nuevoUsuario).subscribe(
        data => {
            this.toastr.success(data.message, 'OK', {
              timeOut: 3000, positionClass: 'toast-top-center'
            });

            this.router.navigate(['/login']);
        },
        error => {
          this.toastr.error(error.error.message, 'fallo', {
            timeOut: 3000, positionClass: 'toast-top-center'
          });
          

        }
      )

    }
  }
}
