import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {

  user: any = {};
  angForm: FormGroup;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private us: UserService,
    private fb: FormBuilder) {
      this.createForm();
 }

 createForm() {
   this.angForm = this.fb.group({
     usr_fullname: ['', Validators.required ],
     usr_email: ['', Validators.required ],
     usr_address: ['', Validators.required ]
   });
 }

 updateUser(usr_fullname, usr_email, usr_address) {
   this.route.params.subscribe(params => {
      this.us.updateUser(usr_fullname, usr_email, usr_address, params['id']);
      this.router.navigate(['user']);
});
}

   ngOnInit() {
     this.route.params.subscribe(params => {
         this.us.editUser(params['id']).subscribe(res => {
           this.user = res;
       });
     });
   }

}
