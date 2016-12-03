import { Component, OnInit, Input } from "@angular/core";

import { FriendComponent } from "./friend.component";
import { Friend } from "./friend";
import { FriendService } from "./friend.service";
import { HomeService } from "./../home/home.service";
import { ErrorService } from "../errors/error.service";
@Component({
    selector: 'my-user-list',
    template: `
        <div class="col-sm-8 col-sm-offset-2">           
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th><u>First Name</u></th>
                        <th><u>Action</u></th>
                    </tr>
                </thead>
                <tbody>
                    <tr *ngFor="let user of users">
                        <td>{{user.firstName}}</td>
                        <td><button class="btn btn-xs btn-primary user-button" (click)="onAdd(user)" *ngIf="friends">Add</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    `,
    styles: [`
        .table>thead>tr>th {
            border: none;
        }

        .table>tbody>tr>td {
            border: none;
        }

        u {
            color: blue;
        }

        .user-button {
            margin-left: 3px;
        }
    `]
})
export class UserListComponent implements OnInit {

    constructor(private _friendService: FriendService, private _homeService: HomeService, private _errorService: ErrorService) {}

    friends: Friend[];
    users: Friend[];

    ngOnInit() {
        this._friendService.getFriends()
            .subscribe(
                friends => {
                    this.friends = friends;
                    this._friendService.friends = friends;
                },
                error => this._errorService.handleError(error)
            );

        this._friendService.getUsers()
            .subscribe(
                users => {
                    this.users = users;
                    this._friendService.users = users;
                },
                error => this._errorService.handleError(error)
            );
    }

    onAdd(friend: Friend) {
        var hasFriend = false,
            friendId = friend.userId,
            user;

        this._friendService.getUser(localStorage.getItem('userId'))
            .subscribe(
                data => {
                    user = data;

                    for(var i = 0;i < this.friends.length; i++) {
                        if(friendId == this.friends[i].userId) {
                            hasFriend = true;
                            alert('You are already friends with this user!');
                        }
                    }

                    if(!hasFriend) {
                        this._homeService.addAction('added', 123, user, friend)
                            .subscribe(
                                data => {
                                    console.log(data);
                                    this._homeService.actions.push(data);
                                },
                                error => this._errorService.handleError(error)
                            );

                        this._friendService.addFriend(friend)
                            .subscribe(
                                data => {
                                    console.log(data);
                                    this._friendService.friends.push(data);
                                },
                                error => this._errorService.handleError(error)
                            );
                    }     
            );
        }
    }  
}