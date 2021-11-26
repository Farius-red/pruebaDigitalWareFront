import { Component, OnInit } from '@angular/core';
import { TokenService } from '../../../core/servicios/auth/token.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

   islogged = false;

  constructor(private tokenService : TokenService) { }

  ngOnInit(): void {
    if(this.tokenService.getToken())
      this.islogged= true;
    else this.islogged = false;
  }

  cerrarSesion():void{
    this.tokenService.logOut();
    window.location.reload();
  }

}
