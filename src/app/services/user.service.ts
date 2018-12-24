import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiURI = 'http://localhost:19216/api/users/';
  private token = localStorage.getItem("access_token");

  constructor(private http: HttpClient) { }

  get() {
    let headers = new HttpHeaders();
    //headers.set("Content-Type", "application/json")
    headers = headers.set("Authorization", "Bearer " + this.token);

    return this.http.get(this.apiURI, { headers: headers })
      .pipe(map(data => {
        return data as User[];
      }))
  }
}
