import { Component, OnInit, Input } from "@angular/core";

import { FriendComponent } from "./friend.component";
import { Friend } from "./friend";
import { FriendService } from "./friend.service";
import { ErrorService } from "../errors/error.service";
@Component({
    selector: 'my-user-list',
    template: `
        <section class="col-md-8 col-md-offset-2">
            <ul *ngFor="let user of users">
                <li>{{user.firstName}}<button class="btn btn-xs btn-primary" (click)="onAdd(user)" *ngIf="friends">Add</button></li>
            </ul>

        </section>
    `
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