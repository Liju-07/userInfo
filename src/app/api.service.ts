import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  user=()=>{
    return this.http.get("https://reqres.in/api/users?page=1")
  }
}
