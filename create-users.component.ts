import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UsersJsonSerService } from 'src/app/myServices/users-json-serv.service';

@Component({
  selector: 'app-create-users',
  templateUrl: './create-users.component.html',
  styleUrls: ['./create-users.component.css']
})
export class CreateUsersComponent implements OnInit {
  userCreated = false;
  userData:any;
  userForm!: FormGroup;
  constructor(public restApi: UsersJsonSerService,private userDataService: UsersJsonSerService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      name: [],
      gender: [],
      email: [],
      dept: [],
      sal: []
    });
  }
  createUser(event:any, userform:any) {
    const userData = userform.value;
    this.userDataService.createUser(userData).subscribe((data) => {
      console.log('user created', data);
      this.userCreated = true;
      setTimeout(() => {
        this.userCreated = false;
      }, 2000);
    });
    this.ngOnInit()
  }
}
