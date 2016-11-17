import { Component, OnInit, Input } from "@angular/core";

import { FriendComponent } from "./friend.component";
import { Friend } from "./friend";
import { FriendService } from "./friend.service";
import { ErrorService } from "../errors/error.service";
@Component({
    selector: 'my-user-list',
    template: `
        <section class="col-md-8 col-md-offset-2">
            <ul class="friendlist">
                <li class="list-user" *ngFor="let user of users">{{user.firstName}}<button class="btn btn-xs btn-success user-button" (click)="onAdd(user)" *ngIf="friends">ADD</button></li>
            </ul>

        </section>
    `,
    styles: [`
        .friendlist {
            list-style-type: none;
            text-align: right;
        }

        .list-user {
            padding: 4px;
        }
        
        .user-button {
            margin-left: 3px;
        }
    `]
})
export class UserListComponent implements OnInit {

    constructor(private _friendService: FriendService, private _errorService: ErrorService) {}

    @Input() friends:Friend[];
    users: Friend[];

    ngOnInit() {
        this._friendService.getUsers()
            .subscribe(
                users => {
                    this.users = users;
                    this._friendService.users = users;
                },
                error => this._errorService.handleError(error)
            );
    }

    onAdd(user: Friend) {
        var hasFriend = false;
        var id = user.userId;

        for(var i = 0;i < this.friends.length; i++) {
            if(user.userId == this.friends[i].userId) {
                hasFriend = true;
            }
        }

        if(!hasFriend) {
            this._friendService.addFriend(user)
                .subscribe(
                    data => {
                        console.log(data);
                        this._friendService.friends.push(data);
                    },
                    error => this._errorService.handleError(error)
                );
        }     
    }  
}