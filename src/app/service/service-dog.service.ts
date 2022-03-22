import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ModeloDog } from '../models/modelo-dog';
import { Img } from '../models/img';

@Injectable({
  providedIn: 'root'
})
export class ServiceDogService {

  
  constructor(private http: HttpClient) { }

  getListDog (){
    const urlDog = `${environment.dogApi}/breeds/list/all`
    return this.http.get<ModeloDog>(urlDog); 
  }

  getImgDog (breed: string): Observable<any> {
    const url = `${environment.dogApi}/breed/${breed}/images/random`
    return this.http.get<Img>(url);
}
}