import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { NuevoUsuario } from '../../../modelos/auth/nuevo-usuario';
import { Observable } from 'rxjs';
import { LoginUsuario } from '../../../modelos/auth/login-usuario';
import { JwtDTO } from '../../../modelos/auth/jwt-dto';
import { FormBuilder, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  authUrl = `${environment.urlApi}/auth/`;

  

  constructor(private httpClient: HttpClient, private fb: FormBuilder) { 
  }

  public registrarUsuario(nuevoUsuario : NuevoUsuario): Observable<any>{

     return this.httpClient.post<any>(this.authUrl + 'crearUsuario', nuevoUsuario);
  }

  public login(loginUsuario: LoginUsuario): Observable<JwtDTO>{
    return this.httpClient.post<any>(this.authUrl + 'login', loginUsuario);
  }
  

  loginForm = this.fb.group({
    
    nombreUsuario: ['', Validators.required],
   password:['', Validators.required]
  });




}
