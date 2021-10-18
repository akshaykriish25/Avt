import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UsersJsonSerService } from 'src/app/myServices/users-json-serv.service';

@Component({
  selector: 'app-display-users',
  templateUrl: './display-users.component.html',
  styleUrls: ['./display-users.component.css']
})
export class DisplayUsersComponent implements OnInit {
  Employee: any = [];
 
  constructor(public restApi: UsersJsonSerService) { }

  ngOnInit(): void {
    this.loadEmployees()
  }
  loadEmployees() {
    return this.restApi.getUsers().subscribe((data: {}) => {
      this.Employee = data;     
    })
  }
}
