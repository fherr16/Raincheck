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
    return this.http.post('http://localhost:3000/rest', body, {headers:header})
      .map(response => response.json())
      .catch(error => Observable.throw(error.json()));
  }
}
