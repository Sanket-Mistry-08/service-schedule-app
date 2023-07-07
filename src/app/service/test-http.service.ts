import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestHttpService {

  constructor(private http:HttpClient) { }

  //Issue : Following API gives error when one sends the data
  postData(){
    this.http.post('https://631945908e51a64d2be10770.mockapi.io/api/v1/products',{'test':'test'}).subscribe(res=>console.log(res))
  }
}
