import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { SpecificErrorHandler } from 'src/app/models/errors/SpecificErrorHandler';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];

  constructor(private userService: UserService, private toastrService: ToastrService) { }

  ngOnInit() {
    this.userService.get()
      .subscribe(
        result => {
          if (result) {
            this.users = result;
          }
        }),
      (error => (new SpecificErrorHandler(this.toastrService)).handleError(error));
  }

}
