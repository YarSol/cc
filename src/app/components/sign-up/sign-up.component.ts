import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { SpecificErrorHandler } from 'src/app/models/errors/SpecificErrorHandler';

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router, private toastrService: ToastrService) { }

  ngOnInit() { }

  create(model: User) {
    this.auth.signup(model)
      .subscribe(
        result => {
          if (result) {
            this.router.navigate(['/users']);
          }
        },
        (error => (new SpecificErrorHandler(this.toastrService)).handleError(error))
      )
  }
}
