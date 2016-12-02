import { Http, Headers } from "@angular/http";
import { Injectable, EventEmitter } from "@angular/core";
import 'rxjs/Rx';
import { Observable } from "rxjs/Observable";

import { Home } from "./home";

@Injectable()
export class HomeService {
    actions: Home[] = [];
    private homeURL = 'http://localhost:3000/actions';
    
    constructor (private _http: Http) {}

    addAction(message: String, timestamp: String) {
        const temp = new Home(message, null, timestamp);
        const body = JSON.stringify(temp);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this._http.post(this.homeURL, body, {headers: headers})
            .map(response => {
                const data = response.json().obj;
                let action = new Home(data.message, data._id, data.message);
                return action;
            })
            .catch(error => Observable.throw(error.json()));
    }

    getActions() {
        return this._http.get(this.homeURL)
            .map(response => {
                const data = response.json().obj;
                let objs: any[] = [];
                for (let i = 0; i < data.length; i++) {
                    let action = new Home(data[i].message, data[i]._id, data[i].timestamp);
                    objs.push(action);
                };
                return objs;
            })
            .catch(error => Observable.throw(error.json()));
    }

    deleteAction(action: Home) {
        this.actions.splice(this.actions.indexOf(action), 1);
        return this._http.delete(this.homeURL + action.homeId)
            .map(response => response.json())
            .catch(error => Observable.throw(error.json()));
    }
}