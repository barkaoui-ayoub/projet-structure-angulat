import { Injectable } from '@angular/core';
import { Observable, throwError, of } from 'rxjs';
import { User } from '../models/user.model';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { httpUrls } from '../http/httpUrls';

const userMock = {
  login: 'aaaa',
  password: '12345',
  token: '12345'
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  basUrl = environment.baseUrl;


  constructor(private httpClient: HttpClient) { }

  login(login: string, password: string): Observable<User> {

    if (login === userMock.login && password === userMock.password) {

      localStorage.setItem('token', userMock.token);
      return of(userMock);
    }
    return throwError('Invalid username or password');

  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return token === "12345";
  }

  public getToken() {
    return localStorage.getItem('token');
  }

  chiffrementService() {

    const  params = new  HttpParams().set('cle', "toto").set('chaine', "barkaoui ayoub");
    let url = this.basUrl + httpUrls.chiffrement
    
    return this.httpClient.post(url, { params });

  }

}
