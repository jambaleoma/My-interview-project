import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  private statusUrl = '/api/status';
  public status = 'DOWN';

  constructor(private http: HttpClient) {}

  // Get the status
  getStatus(): Observable<any> {
    return this.http.get(this.statusUrl);
  }

}
