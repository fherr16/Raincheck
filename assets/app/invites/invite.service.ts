import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/Rx';

import {Invite} from './invite';

@Injectable()
export class InviteService {
  private inviteURL = 'http://localhost:3000/invite';

  constructor(private http: Http) { }

}
