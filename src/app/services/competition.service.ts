import { Competition } from './../models/competition';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { HttpErrorHandler } from '../models/errors/HttpErrorHandler';

@Injectable({
  providedIn: 'root'
})
export class CompetitionService {
  private apiURI = 'http://localhost:19216/api/competitions/';

  constructor(private http: HttpClient) { }

  get() {
    let headers = new HttpHeaders();
    headers = headers.set("Authorization", "Bearer " + localStorage.getItem("access_token"));

    return this.http.get(this.apiURI, { headers: headers })
      .pipe(
        map(
          data => {
            return data as Competition[];
          }),
        catchError(HttpErrorHandler.handleError)
      )
  }
}
