import { Component, OnInit } from "@angular/core";

import { FriendComponent } from "./friend.component";
import { UserListComponent } from "./user-list.component";
import { Friend } from "./friend";
import { FriendService } from "./friend.service";
import { ErrorService } from "../errors/error.service";
@Component({
    selector: 'my-friend-list',
    template: `
        <section class="col-md-8 col-md-offset-2">
            <my-friend *ngFor="let friend of friends" [friend]="friend"></my-friend>

            <my-user-list [friends]="friends"></my-user-list>

        </section>
    `,
    directives: [FriendComponent, UserListComponent]
})
export class FriendListComponent implements OnInit {

    constructor(private _friendService: FriendService, private _errorService: ErrorService) {}

    friends: Friend[];

    ngOnInit() {
        this._friendService.getFriends()
            .subscribe(
                friends => {
                    this.friends = friends;
                    this._friendService.friends = friends;
                },
                error => this._errorService.handleError(error)
            );
    }   
}