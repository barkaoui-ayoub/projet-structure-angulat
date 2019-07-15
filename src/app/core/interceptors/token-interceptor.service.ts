import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let tokenReq = req.clone({
      setHeaders: {
        Authorization: 'Bearer ${this.auth.getToken()}'
      }
    });
    return next.handle(tokenReq);
  }

  constructor(private auth : AuthService) { }
}
