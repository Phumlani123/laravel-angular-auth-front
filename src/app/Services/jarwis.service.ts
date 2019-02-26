import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";

import {tap, map, filter, switchMap } from 'rxjs/operators';
// import { Http, Response, Headers } from "@angular/http";
import {Client} from '../client.interface';








@Injectable({
  providedIn: 'root'
})
export class JarwisService {

  private baseUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) { }

  signup(data){
    return this.http.post(`${this.baseUrl}/signup`, data)
  }

  login(data){
    return this.http.post(`${this.baseUrl}/login`, data)
  }

  sendPasswordResetLink(data){

    return this.http.post(`${this.baseUrl}/passwordResetLink`, data)

  }

  changePassword(data){

    return this.http.post(`${this.baseUrl}/resetPassword`, data)

  }

  addClient(name) {
    const body = JSON.stringify({name: name});
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post(`${this.baseUrl}/client`,body, {headers : headers})
  }

 

  getClients (): Observable<any> {
    return this.http.get('http://localhost:8000/api/clients')
      .pipe(
        tap(clients => console.log('fetched clients'))
      );
  }

  getClient(id: number): Observable<Client | undefined> {
    return this.getClients().pipe(
      map((clients: Client[]) => clients.find(c => c.id === id))
    );
  }




  

  updateClient (id, client): Observable<any> {
    const url = `${this.baseUrl}/client/${id}`;
    
    const headers = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    
    return this.http.put(url, client, headers).pipe(
      tap(_ => console.log(`updated client id=${id}`))
    );
  }
  

  deleteClient(id: number) {
    return this.http.delete(`${this.baseUrl}/client` + id);
  }


}
