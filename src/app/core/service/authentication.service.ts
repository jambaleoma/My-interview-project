import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/models/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private myAppUrl = environment.myAppUrl;
  private loginUrl = '/login';
  private registerUrl = '/registerUser';
  private resetPswUrl = '/account/password';

  constructor(private http: HttpClient) {}

  // Get the status
  login(user: User): Observable<any> {
    const body = user;
    return this.http.post(('https://' + this.myAppUrl) + this.loginUrl, body);
  }

  register(user: User): Observable<any> {
    const body = user;
    return this.http.post(('https://' + this.myAppUrl) + this.registerUrl, body);
  }

  resetPassword(email: string): Observable<any> {
    return this.http.put((this.myAppUrl ? this.myAppUrl : '') + this.resetPswUrl + '?email=' + email, null);
  }
}
