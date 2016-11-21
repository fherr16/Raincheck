import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/Rx';

import {Rest} from './rest';

@Injectable()
export class RestService {
  private restURL = 'http://localhost:3000/rest';

  constructor(private http: Http) { }

  create(rest: Rest)
  {
    const body = JSON.stringify(rest);
    const header = new Headers({'Content-Type':'application/json'});
    return this.http.post(this.restURL, body, {headers:header})
      .map(response => response.json())
      .catch(error => Observable.throw(error.json()));
  }

  delete(id: String)
  {
    return this.http.delete(`${this.restURL}/${id}`)
      .map(response => response.json())
      .catch(error => Observable.throw(error.json()));
  }

  get(id:String):Observable<Rest[]>{
    return this.http.get(`${this.restURL}/${id}`)
      .map(response => response.json().obj)
      .catch(error => Observable.throw(error.json()));
  }

  getRests():Observable<Rest[]>{
    return this.http.get(this.restURL)
      .map(response => response.json().obj)
      .catch(error => Observable.throw(error.json()));
  }
}
