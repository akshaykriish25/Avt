import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UsersJsonSerService } from 'src/app/myServices/users-json-serv.service';

@Component({
  selector: 'app-edit-del-users',
  templateUrl: './edit-del-users.component.html',
  styleUrls: ['./edit-del-users.component.css']
})
export class EditDelUsersComponent implements OnInit {
  Employee: any = [];
  userData:any;
  userForm!: FormGroup;
  editUserForm!: FormGroup;
  showEditUserForm = false;
  editFormId: any;
  userCreated = false;
  userEdited = false;
  userDeleted = false;
  userDeletedId: any;
  constructor(public restApi: UsersJsonSerService,private userDataService: UsersJsonSerService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.userDataService.getUsers().subscribe((data) => {
      console.log('data', data);
      this.userData = data;
    });
    this.initForm();
  }
  initForm() {
    this.userForm = this.fb.group({
      name: [],
      gender: [],
      email: [],
      dept:[],
      sal: []
    });
  }
  editUser(event:any, data:any) {
    this.showEditUserForm = true;
    this.editFormId = data.Id;
    this.editUserForm = this.fb.group({
      id: [data.id],
      name: [data.name],
      gender: [data.gender],
      email: [data.email],
      dept:[data.dept],
      sal: [data.sal]
    });
    this.ngOnInit()
  }

  editUserData(event:any, userform:any) {
    const userData = userform.value;
    this.userDataService.editUser(userData).subscribe((data) => {
      console.log('user edited', data);
      this.userEdited = true;
      setTimeout(() => {
        this.userEdited = false;
        this.showEditUserForm = false;
      }, 2000);
    });
    this.ngOnInit()
  }

  deleteUser(event:any, userData:any) {
    this.userDataService.deleteUser(userData).subscribe((data) => {
      console.log('user deleted', data);
      this.userDeletedId = userData.id;
      this.userDeleted = true;
      setTimeout(() => {
        this.userDeleted = false;
      }, 2000);
    });
    this.ngOnInit()
  }
}
