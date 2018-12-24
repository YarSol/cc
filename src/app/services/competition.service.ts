import { Competition } from './../models/competition';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompetitionService {

  constructor() { }

  getCompetitions() {
    let competitions: Competition[] = [{ id: 1, name: "Competition 1" }, { id: 2, name: "Competition 2" }];
    return competitions;
  }
}
