import { Component, OnInit } from '@angular/core';
import {User} from '../User';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-get',
  templateUrl: './user-get.component.html',
  styleUrls: ['./user-get.component.scss']
})
export class UserGetComponent implements OnInit {


  users: User[];

  constructor(private us: UserService) { }



  deleteUser(id) {
      this.us.deleteUser(id).subscribe(res => {
        console.log('Deleted');
      });
    }

    ngOnInit() {
      this.us
        .getUsers()
        .subscribe((data: User[]) => {
          this.users = data;
      });
    }

}
