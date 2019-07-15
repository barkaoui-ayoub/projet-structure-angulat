import { Injectable } from '@angular/core';
import { Observable, throwError, of } from 'rxjs';
import { User } from '../models/user.model';

const userMock = {
  login: 'aaaa',
  password: '12345',
  token: '12345'
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(login:string,password:string) : Observable<User>{

    if(login === userMock.login && password === userMock.password){

      localStorage.setItem('token',userMock.token);
      return of(userMock);
    }
    return throwError('Invalid username or password');

  }

  public isAuthenticated() : boolean{
    const token = localStorage.getItem('token');
    return token === "12345"; 
  }

}
