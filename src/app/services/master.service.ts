import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  // apiUrl: string = 'http://127.0.0.1:8000/api/'
  apiUrl: string = 'http://localhost:8000/user/'

  constructor(private http: HttpClient) { }

  login(obj: any){
    return this.http.post(this.apiUrl+'signin/', obj, { withCredentials: true })
  }

}
