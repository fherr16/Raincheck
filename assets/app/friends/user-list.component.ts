import { Component, OnInit } from "@angular/core";

import { FriendComponent } from "./friend.component";
import { Friend } from "./friend";
import { FriendService } from "./friend.service";
import { ErrorService } from "../errors/error.service";
@Component({
    selector: 'my-user-list',
    template: `
        <section class="col-md-8 col-md-offset-2">
            <ul *ngFor="let user of users">
                <li>{{user.firstName}}</li>
            </ul>

        </section>
    `,
    directives: [FriendComponent]
})
export class UserListComponent implements OnInit {

    constructor(private _friendService: FriendService, private _errorService: ErrorService) {}

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
}