import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CreateUsersComponent } from './JsonServCompAvt/create-users/create-users.component';
import { DisplayUsersComponent } from './JsonServCompAvt/display-users/display-users.component';
import { EditDelUsersComponent } from './JsonServCompAvt/edit-del-users/edit-del-users.component';
const routes: Routes = [
  {path : '',component : AppComponent},
  {path : 'display',component : DisplayUsersComponent},
  {path : 'create',component : CreateUsersComponent},
  {path : 'editdel',component : EditDelUsersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
