import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { FormControl,Validator } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Avt1Component } from './avt1/avt1.component';
import { Avt2Component } from './avt2/avt2.component';
import { Avt3Component } from './avt3/avt3.component';
import { NamePipePipe } from './mypipes/name-pipe.pipe';
import { DisplayUsersComponent } from './JsonServCompAvt/display-users/display-users.component';
import { CreateUsersComponent } from './JsonServCompAvt/create-users/create-users.component';
import { EditDelUsersComponent } from './JsonServCompAvt/edit-del-users/edit-del-users.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    Avt1Component,
    Avt2Component,
    Avt3Component,
    NamePipePipe,
    DisplayUsersComponent,
    CreateUsersComponent,
    EditDelUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,HttpClientModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
