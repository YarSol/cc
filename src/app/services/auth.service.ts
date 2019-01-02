import { User } from './../models/user';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

import { map, catchError } from 'rxjs/operators';

import { Login } from '../models/login';
import { HttpErrorHandler } from '../models/errors/HttpErrorHandler';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiURI = 'http://localhost:19216/api/accounts/';
  private helper = new JwtHelperService();

  constructor(private http: HttpClient) { }

  signup(model: User) {
    return this.http.post(this.apiURI + "signup", model)
      .pipe(
        map(this.setToken),
        catchError(HttpErrorHandler.handleError)
      )
  }

  login(model: Login) {
    return this.http.post(this.apiURI + "login", model)
      .pipe(
        map(this.setToken),
        catchError(HttpErrorHandler.handleError)
      )
  }

  logout() {
    localStorage.removeItem("access_token");
    localStorage.removeItem("firstName");
    localStorage.removeItem("lastName");
    localStorage.removeItem("email");
    localStorage.removeItem("currentUserId");
  }

  isLoggedIn() {
    return !this.helper.isTokenExpired(localStorage.getItem("access_token"));
  }

  get userName(): string {
    if (this.isLoggedIn())
      return localStorage.getItem("firstName") + " " + localStorage.getItem("lastName");

    return "";
  }

  private setToken(data) {
    if (data && data["access_token"]) {
      localStorage.setItem("access_token", data["access_token"]);
      localStorage.setItem("firstName", data["firstName"]);
      localStorage.setItem("lastName", data["lastName"]);
      localStorage.setItem("email", data["email"]);
      localStorage.setItem("currentUserId", data["currentUserId"]);

      return true;
    }

    return false;
  }

}
