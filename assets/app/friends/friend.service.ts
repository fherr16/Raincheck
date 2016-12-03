import { Http, Headers } from "@angular/http";
import { Injectable, EventEmitter } from "@angular/core";
import 'rxjs/Rx';
import { Observable } from "rxjs/Observable";

import { Friend } from "./friend";

@Injectable()
export class FriendService {
    friends: Friend[] = [];
    users: Friend[] = [];
    
    constructor (private _http: Http) {}

    addFriend(friend: Friend) {
        const body = JSON.stringify(friend);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this._http.post('http://localhost:3000/friendlist', body, {headers: headers})
            .map(response => {
                const data = response.json().obj;
                let friend = new Friend(data.firstName, data.userId, data._id);
                return friend;
            })
            .catch(error => Observable.throw(error.json()));
    }

    getFriends() {
        return this._http.get('http://localhost:3000/friendlist')
            .map(response => {
                const data = response.json().obj;
                let objs: any[] = [];
                for (let i = 0; i < data.length; i++) {
                    let friend = new Friend(data[i].firstName, data[i].userId, data[i]._id);
                    objs.push(friend);
                };
                return objs;
            })
            .catch(error => Observable.throw(error.json()));
    }

    getUsers() {
        return this._http.get('http://localhost:3000/friendlist/users')
            .map(response => {
                const data = response.json().obj;
                let objs: any[] = [];
                for (let i = 0; i < data.length; i++) {
                    let friend = new Friend(data[i].firstName, data[i]._id, null);
                    objs.push(friend);
                };
                return objs;
            })
            .catch(error => Observable.throw(error.json()));
    }

    getUser(userId: String) {
        const headers = new Headers({'Content-Type': 'application/json'});
        return this._http.get('http://localhost:3000/friendlist/user/' + userId)
            .map(response => response.json().obj)
            .catch(error => Observable.throw(error.json()));
    }

    deleteFriend(friend: Friend) {
        this.friends.splice(this.friends.indexOf(friend), 1);
        return this._http.delete('http://localhost:3000/friendlist/' + friend.friendId)
            .map(response => response.json())
            .catch(error => Observable.throw(error.json()));
    }
}