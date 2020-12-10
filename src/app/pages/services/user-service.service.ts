import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  Url = 'http://localhost:8080/';

  constructor(private http: HttpClient) {
  }

  login(user: any): Observable<any> {
    return this.http.post(this.Url + `login`, user);
  }
}
