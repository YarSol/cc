import { Login } from './../../models/login';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

import { ToastrService } from 'ngx-toastr';
import { SpecificErrorHandler } from 'src/app/models/errors/SpecificErrorHandler';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router, private route: ActivatedRoute, private toastrService: ToastrService) { }

  ngOnInit() { }

  login(model: Login) {
    this.auth.login(model)
      .subscribe(
        result => {
          if (result) {
            let returnUrl = this.route.snapshot.queryParamMap.get("returnUrl");
            this.router.navigate([returnUrl || "/users"]);
          }
        },
        (error => (new SpecificErrorHandler(this.toastrService)).handleError(error))
      )
  }
}
