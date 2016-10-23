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
    console.log("I'm now creating");
    const body = JSON.stringify(rest);
    const header = new Headers({'Content-Type':'application/json'});
    return this.http.post(this.restURL, body, {headers:header})
      .map(response => response.json())
      .catch(error => Observable.throw(error.json()));
  }

  delete(id: String)
  {
    console.log("Deleting Now" + id);
    return this.http.delete(`${this.restURL}/${id}`)
      .map(response => response.json())
      .catch(error => Observable.throw(error.json()));
  }

  getRests():Observable<Rest[]>{
    console.log("About to get the Rests");
    return this.http.get(this.restURL)
                .map(response => response.json().obj)
                .catch(error => Observable.throw(error.json()));
  }
}
