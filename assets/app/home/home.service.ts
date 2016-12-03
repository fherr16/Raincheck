import { Http, Headers } from "@angular/http";
import { Injectable, EventEmitter } from "@angular/core";
import 'rxjs/Rx';
import { Observable } from "rxjs/Observable";

import { Home } from "./home";
import { User } from "./../auth/user";
import { Friend } from "./../friends/friend";

@Injectable()
export class HomeService {
    actions: Home[] = [];
    private homeURL = 'http://localhost:3000/actions';
    
    constructor (private _http: Http) {}

    addAction(message: String, timestamp: Number, user: User, friend: Friend) {

        if(this.actions.length >= 5) {
            this.deleteAction(this.actions[0]);
        }

        const temp = new Home(message, null, timestamp, user.firstName, friend.firstName);
        const body = JSON.stringify(temp);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this._http.post(this.homeURL, body, {headers: headers})
            .map(response => {
                const data = response.json().obj;
                let action = new Home(data.message, data._id, data.timestamp, data.userName, data.friendName);
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
                    let action = new Home(data[i].message, data[i]._id, data[i].timestamp, data[i].userName, data[i].friendName);
                    objs.push(action);
                };
                return objs;
            })
            .catch(error => Observable.throw(error.json()));
    }

    deleteAction(action: Home) {
        this.actions.splice(this.actions.indexOf(action), 1);
        console.log(action.homeId);
        return this._http.delete(this.homeURL + '/' + action.homeId)
            .map(response => response.json())
            .catch(error => Observable.throw(error.json()));
    }
}