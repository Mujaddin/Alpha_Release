import { Injectable } from '@angular/core';
import {
  Http,
  Headers,
  Response,
  RequestOptions,
  URLSearchParams
} from '@angular/http';



import { Observable } from 'rxjs/Observable';
import { Employee } from '../employee/employee';
import 'rxjs/Rx';

@Injectable()
export class EmployeeDataService {
  public url: string = "http://localhost:3000/Employees";
  headers: Headers;
  options: RequestOptions;
  constructor(private _http: Http) {
    this.headers = new Headers({ 'Content-Type': 'application/json' });
    this.options = new RequestOptions({ headers: this.headers });
  }
  getAllEmployee(): any {
    return this._http.get(this.url).toPromise()
      .then(response=>response.json() as Employee[])
      .catch(this.handleError);
  }

  getEmployeeWithId(id: any): any {

    return this._http.get(this.url + "/" + id).toPromise()       
    .then(resp => resp.json() as Employee)       
    .catch(this.handleError);

  }

  deleteEmployeeWithId(id:number): any {
    return this._http.delete(this.url + "/" + id, this.options).toPromise()       
    .then(this.extractData)       
    .catch(this.handleError);
  }

  addEmployee(item: Employee): any {
    let body = JSON.stringify(item);
    console.log(body);
    return this._http.post(this.url, body, this.options).toPromise()       
    .then(this.extractData)       
    .catch(this.handleError);
  }

  editEmployeeWithId(item: Employee,id:number): any {
    let body = JSON.stringify(item);
    item.id=id;
    console.log(id);
    return this._http.put(this.url + "/" + id, body, this.options).toPromise()       
    .then(this.extractData)       
    .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
