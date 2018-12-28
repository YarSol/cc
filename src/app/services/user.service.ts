import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map, catchError } from 'rxjs/operators';
import { User } from '../models/user';
import { HttpErrorHandler } from '../models/errors/HttpErrorHandler';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiURI = 'http://localhost:19216/api/users/';

  constructor(private http: HttpClient) { }

  get() {
    let headers = new HttpHeaders();
    headers = headers.set("Authorization", "Bearer " + localStorage.getItem("access_token"));

    return this.http.get(this.apiURI, { headers: headers })
      .pipe(
        map(
          data => {
            return data as User[];
          }),
        catchError(HttpErrorHandler.handleError)
      )
  }
}
