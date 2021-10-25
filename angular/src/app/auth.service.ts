import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:3000/teacher';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
   constructor(private http : HttpClient) { }
   public isAuthenticated() : Boolean {
     let userData = localStorage.getItem('userInfo')
     if(userData && JSON.parse(userData)){
       return true;
     }
     return false;
   }
   public setUserInfo(user){
     localStorage.setItem('userInfo', JSON.stringify(user));
   }
   public validate(email,password) {
     return this.http.post('/api/authenticate', {'username' : email, 'password' : password}).toPromise()
   }
}
