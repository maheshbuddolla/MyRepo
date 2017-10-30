import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginServiceService {

  constructor(private http:Http) {   }


  fetchData(){
   // this.http.get('http://localhost:8080/hello').map((response)=>response.json)
   this.http.get('http://localhost:8080/hello')
    .subscribe(
      (data)=>console.log(data)
    )
  }

  success(){
    return "successful";
  }
}
