import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ListserviceService {

  constructor( private http: HttpClient) { }



getEmployeeDatas(): Observable<any> {
  return this.http.get("http://dummy.restapiexample.com/api/v1/employees");
}

}

