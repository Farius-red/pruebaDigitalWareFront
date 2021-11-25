import { Injectable } from '@angular/core';
const Token_KEY = 'AuthToken';
const USERNAME_KEY = 'AuthUsername';
const AUTHORITIES_KEY = "AuthAthorities";

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  roles: Array<string> =[];

  constructor() { }

  public setToken(token: string):void{
    window.sessionStorage.removeItem(Token_KEY);
    window.sessionStorage.setItem(Token_KEY, token);
  }

  public getToken(){
    return sessionStorage.getItem(Token_KEY);
  }

  public setUserName(userName: string):void{
    window.sessionStorage.removeItem(USERNAME_KEY);
    window.sessionStorage.setItem(USERNAME_KEY, userName);
  }

  public getUserName(){
    return sessionStorage.getItem(USERNAME_KEY);
  }


  public setAuthorities(authorities: string[]):void{
    window.sessionStorage.removeItem(AUTHORITIES_KEY);
    window.sessionStorage.setItem(AUTHORITIES_KEY, JSON.stringify(authorities));
  }

  public getAturhorities(): string[]{
    this.roles=[];
  
    if(sessionStorage.getItem(AUTHORITIES_KEY)){
    

    JSON.parse(sessionStorage.getItem(AUTHORITIES_KEY)|| '').forEach( (authority: any)  => {
      this.roles.push(authority.authority);
    });
    }
    return this.roles;
  }

  public  logOut():void{
      window.sessionStorage.clear();
  }
}
