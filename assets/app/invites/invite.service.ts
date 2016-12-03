import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/Rx';

import {Invite} from './invite';

@Injectable()
export class InviteService {
  private inviteURL = 'http://localhost:3000/invite';

  constructor(private http: Http) {}

  create(invite: Invite)
  {
    const body = JSON.stringify(invite);
    const header = new Headers({'Content-Type':'application/json'});
    return this.http.post(this.inviteURL, body, {headers:header})
      .map(response => response.json())
      .catch(error => Observable.throw(error.json()));
  }

  get(id:String):Observable<Invite[]>{
    return this.http.get(`${this.inviteURL}/${id}`)
      .map(response => response.json().obj)
      .catch(error => Observable.throw(error.json()));
  }

  delete(id:String){
    return this.http.delete(`${this.inviteURL}/${id}`)
      .map(response => response.json())
      .catch(error => Observable.throw(error.json()));
  }

}
