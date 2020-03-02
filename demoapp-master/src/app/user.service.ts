// user.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  uri = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  addUser(usr_fullname,usr_email, usr_address) {
    const obj = {
      usr_fullname: usr_fullname,
      usr_email: usr_email,
      usr_address:usr_address

    };
    console.log(obj);
    this.http.post(`${this.uri}/users`, obj)
        .subscribe(res => console.log('Done'));
  }


    getUsers() {
    return this
           .http
           .get(`${this.uri}/users`);
  }

    editUser(id) {
      return this
              .http
              .get(`${this.uri}/users/${id}`);
      }


      updateUser(usr_fullname,usr_email, usr_address, id) {

          const obj = {
              usr_fullname: usr_fullname,
              usr_email: usr_email,
              usr_address:usr_address
            };
          this
            .http
            .put(`${this.uri}/users/${id}`, obj)
            .subscribe(res => console.log('Done'));
        }

        deleteUser(id) {
            return this
                      .http
                      .delete(`${this.uri}/users/${id}`);
          }


}
