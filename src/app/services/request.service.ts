import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, timer } from 'rxjs';

export interface Division{
  id: number,
  name: string, 
}

export interface User{
  id: number,
  user_id: number,
  first_name: string,
  last_name: string,
  image_url: string,
  telegram_id: string
}

export interface Tools {
  id: number,
  name: string
}

export interface Limits {
  id: number,
  user_id: number,
  telegram_id: string,
  value: number
}

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) { }

  patchDivision(id: number, name: string) {
    return this.http.patch('divisions', {id, name})
  }

  addDivision(name: string){
    return this.http.post(`divisions/`,{name})
  }

  public getDivision(): Observable<Division[]> {
    return this.http.get<Division[]>('divisions')
  }

  deleteDivision(id: number){
    return this.http.delete(`divisions/${id}`)
  }

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>('auth/')
  }
  
  deleteUser(user_id: number){
    return this.http.delete(`auth/${user_id}`)
  }

  addUser(telegram_id: string){
    return this.http.post(`auth/${telegram_id}`,{})
  }

  public getTools(): Observable<Tools[]> {
     return this.http.get<Tools[]>('finances/tools')
  }

  patchTools(id: number, name: string){
    return this.http.patch('finances/tools', {id, name})
  }

  addTools(name: string){
    return this.http.post(`finances/tools`,{name})
  }

  deleteServices(id: number){
    return this.http.delete(`finances/tools/${id}`)
  }

  public getLimits(): Observable<Limits[]> {
    return this.http.get<Limits[]>('/finances/limits')
 }

  postLimits(id: number, user_id: number, telegram_id: string, value: number){
    return this.http.post("/finances/limits", {id, user_id, telegram_id, value})
  } 

}
