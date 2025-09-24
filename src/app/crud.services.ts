import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retryWhen } from 'rxjs';
import { IUser } from './iuser';

@Injectable({
  providedIn: 'root',
})
export class CrudServices {
  baseurl = 'http://localhost:3000/Users';
  constructor(private http: HttpClient) {}

  getdatas() {
    return this.http.get<IUser[]>(this.baseurl);
  }

  postData(data:IUser[]){
    return this.http.post(this.baseurl, data)
  }

  getDatabyId(id:number){
    return this.http.get<IUser[]>(`${this.baseurl}/${id}`)
  }

  putDatabyId(id:number, data:IUser){
    return this.http.put<IUser[]>(`${this.baseurl}/${id}`, data)
  }

  deleteDatabyId(id:number){
    return this.http.delete<IUser[]>(`${this.baseurl}/${id}`)
  }
}
