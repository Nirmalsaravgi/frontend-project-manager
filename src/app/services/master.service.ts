import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

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

  create_Project(obj: any){
    return this.http.post(`${this.apiUrl2}createProject/`, obj)
  }

  // update_project(obj: any)
  update_Project(id: number, obj: any){
    return this.http.put(`${this.apiUrl2}updateProject/${id}`, obj)
  }

  delete_Project(id: string){
    return this.http.delete(`${this.apiUrl2}deleteProject/${id}`)
  }
}
