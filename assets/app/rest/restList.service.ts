import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/Rx';

import {RestList} from './restList';

@Injectable()
export class RestListService {
  private restListURL = 'http://localhost:3000/restList';

  constructor(private http: Http) { }

  create(restList: RestList)
  {
    const body = JSON.stringify(restList);
    const header = new Headers({'Content-Type':'application/json'});
    return this.http.post(this.restListURL, body, {headers:header})
      .map(response => response.json())
      .catch(error => Observable.throw(error.json()));
  }

  delete(id: String)
  {
    return this.http.delete(`${this.restListURL}/${id}`)
      .map(response => response.json())
      .catch(error => Observable.throw(error.json()));
  }

  getRestsList():Observable<RestList[]>{
    return this.http.get(this.restListURL)
                .map(response => response.json().obj)
                .catch(error => Observable.throw(error.json()));
  }
}
