import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, timer } from 'rxjs';

export interface Division{
  id: number,
  name: string, 
  role_id: number, 
  role_name: string
}

export interface User{
  id: number,
  user_id: number,
  first_name: string,
  last_name: string,
  image_url: string
  telegram_id: string
}

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) { }

  patchDivision(name: string) {
    return this.http.patch('divisions', {name})
  }

  public getDivision(): Observable<Division[]> {
    return this.http.get<Division[]>('divisions')
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

}
