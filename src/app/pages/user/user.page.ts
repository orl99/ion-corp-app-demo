import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {
  public userFullName: string;
  public userRole: string;
  public userDep: string;
  public userEmail: string;
  constructor(private userService: UserService) { }

  ngOnInit() {
    const { userfullname, email, department, role } = this.userService.getUserData();

    if (!!userfullname) {
      this.userFullName = userfullname;
      this.userRole = role;
      this.userDep = department;
      this.userEmail = email;
    }

  }

}
