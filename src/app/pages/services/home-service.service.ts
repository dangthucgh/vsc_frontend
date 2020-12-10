import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {
  url = `http://localhost:8080/account`;

  constructor(
    private http: HttpClient
  ) {
  }

  getAllListAccount(options: any): Observable<any> {
    return this.http.post(this.url + `/getAllList`, options, {observe: 'response'});
  }

  createAccount(data: any): Observable<any> {
    return this.http.post(this.url + `/createAccount`, data, {observe: 'response'});
  }

  updateAccount(data: any): Observable<any> {
    return this.http.post(this.url + `/updateAccount`, data, {observe: 'response'});
  }

  deleteAccount(data: any): Observable<any> {
    return this.http.post(this.url + `/deleteByAccountNumber`, data, {observe: 'response'});
  }
}
