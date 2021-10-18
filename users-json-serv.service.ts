import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Users } from '../models/usersJson.';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersJsonSerService {

  constructor(private http : HttpClient) { }
  url : string = "http://localhost:3000/Users/"
  
  myhandleError(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
    
      errorMessage = error.error.message;
    } else {
     
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
  getUsers(): Observable<Users> 
    {
      return this.http.get<Users>(this.url)
      .pipe(
        retry(1),
        catchError(this.myhandleError)
      )
    }

    
    createUser(userData: any) {
      const url = 'http://localhost:3000/Users';
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json; charset=UTF-8'
        })
      };
    
      return this.http.post(url, userData, httpOptions);
    }
    deleteUser(userData: { id: any; }) {
      const url = `http://localhost:3000/Users/${userData.id}`;
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json; charset=UTF-8'
        })
      };
      return this.http.delete(url, httpOptions);
    }
    editUser(userData: { id: any; }) {
      const url = `http://localhost:3000/Users/${userData.id}`;
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json; charset=UTF-8'
        })
      };
    
      return this.http.put(url, userData, httpOptions);
    }
}


