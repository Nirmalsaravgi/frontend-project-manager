import { HttpClient, HttpHeaders, HttpEvent } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  cookieService = inject(CookieService);

  // apiUrl: string = 'http://127.0.0.1:8000/api/'
  apiUrl: string = 'http://localhost:8000/user/'
  apiUrl2: string = 'http://localhost:8000/projects/'

  constructor(private http: HttpClient) { }

  login(obj: any){
    return this.http.post(this.apiUrl+'signin/', obj, { withCredentials: true })
  }

  getProject(){
    return this.http.get(`${this.apiUrl2}getProjects/`)
  }

  // getUserProjects() {
  //   return this.http.get(`${this.apiUrl2}getUserProjects/`, { withCredentials: true });
  // }
  // getUserProjects() {
  //   const token = this.cookieService.get('token');  // Get token from cookies
  //   const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

  //   return this.http.get(`${this.apiUrl2}getUserProjects/`, { headers, withCredentials: true });
  // }

  getUserProjects(token: string) {
    const headers = new HttpHeaders().set('token', `${token}`);
    return this.http.get(`${this.apiUrl2}getUserProjects/`, { headers, withCredentials: true });
  }
  

  create_Project(obj: any, token: string){
    const headers = new HttpHeaders().set('token', `${token}`);
    return this.http.post(`${this.apiUrl2}createProject/`, obj, { headers, withCredentials: true })
  }

  // update_project(obj: any)
  update_Project(id: number, obj: any){
    return this.http.put(`${this.apiUrl2}updateProject/${id}`, obj)
  }

  delete_Project(id: string){
    return this.http.delete(`${this.apiUrl2}deleteProject/${id}`)
  }
}
