import { Injectable } from '@angular/core';
import {
  Http,
  Headers,
  Response,
  RequestOptions
} from '@angular/http';

import { Employee } from '../employee/employee';
import 'rxjs/Rx';

@Injectable()
export class EmployeeDataService {
  public url: string = "http://localhost:3000/Employees";
  constructor(private _http: Http) { }
  getAllEmployee() {
    return this._http.get(this.url).map((response: Response) => response.json());
  }
  getEmployeeId(id: any) {
    return this._http.get(this.url + id).map((response: Response) => response.json());
  }
  deleteEmployee(item: Employee) {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    let options = new RequestOptions({
      headers: headers
    });
    return this._http.delete(this.url + item.id, options).map((response: Response) => response.json());
  }
  addEmployee(item: Employee) {
    let body = JSON.stringify(item);
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    let options = new RequestOptions({
      headers: headers
    });
    return this._http.post(this.url, body, options).map((response: Response) => response.json());
  }
  editEmployee(item: Employee) {
    let body = JSON.stringify(item);
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    let options = new RequestOptions({
      headers: headers
    });
    return this._http.put(this.url + item.id, body, options).map((response: Response) => response.json());
  }


}
