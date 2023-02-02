import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../contact';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private _http: HttpClient) {}
  private baseUrl='http://localhost:8080';
  cdata:Boolean=false;

  addEmployee(contact:Contact):Observable<Object>{
    return this._http.post(`${this.baseUrl}/savejob`,contact,{responseType:"text"});
  }

  updateEmployee(id: number, contact: Contact): Observable<Object> {
    return this._http.put(`${this.baseUrl}/update/${id}`,contact,{responseType:"text"});
  }

  getEmployeeList(): Observable<any> {
    return this._http.get(`${this.baseUrl}/getlist`);
  }

  deleteEmployee(id: number): Observable<any> {
   this.cdata = confirm("do you want to delete this record");
   if(this.cdata)
    return this._http.delete(`${this.baseUrl}/delete/${id}`,{responseType:"text"});
    else
    return this.cdata;
  }

}
