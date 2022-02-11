import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private loginUrl = '/login';
  private registerUrl = '/registerUser';

  constructor(private http: HttpClient) {}

  // Get the status
  login(user: User): Observable<any> {
    const body = user;
    return this.http.post(this.loginUrl, body);
  }

  register(user: User): Observable<any> {
    const body = user;
    return this.http.post(this.registerUrl, body);
  }
}
