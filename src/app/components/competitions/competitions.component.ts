import { Competition } from './../../models/competition';
import { CompetitionService } from './../../services/competition.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-competitions',
  templateUrl: './competitions.component.html',
  styleUrls: ['./competitions.component.css']
})
export class CompetitionsComponent implements OnInit {
  competitions: Competition[];

  constructor(private competitionService: CompetitionService) {
  }

  ngOnInit() {
    this.competitions = this.competitionService.getCompetitions();
  }

}
