import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent implements OnInit {

  angForm: FormGroup;
  constructor(private fb: FormBuilder, private us: UserService) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      usr_fullname: ['', Validators.required ],
      usr_email: ['', Validators.required ],
      usr_address: ['', Validators.required ]
    });
  }

  addUser(usr_fullname, usr_email, usr_address) {
     this.us.addUser(usr_fullname, usr_email, usr_address);
   }

  ngOnInit() {
  }
}
