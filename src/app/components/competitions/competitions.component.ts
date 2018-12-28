import { Competition } from './../../models/competition';
import { CompetitionService } from './../../services/competition.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { SpecificErrorHandler } from 'src/app/models/errors/SpecificErrorHandler';

@Component({
  selector: 'app-competitions',
  templateUrl: './competitions.component.html',
  styleUrls: ['./competitions.component.css']
})
export class CompetitionsComponent implements OnInit {
  competitions: Competition[];

  constructor(private competitionService: CompetitionService, private toastrService: ToastrService) {
  }

  ngOnInit() {
    this.competitionService.get()
      .subscribe(
        result => {
          if (result) {
            this.competitions = result;
          }
        }),
      (error => (new SpecificErrorHandler(this.toastrService)).handleError(error));
  }

}
