import { Component, OnInit } from "@angular/core";

import { FriendComponent } from "./friend.component";
import { FriendsHeaderComponent } from "./friends-header.component";
import { UserListComponent } from "./user-list.component";
import { Friend } from "./friend";
import { AuthService } from "./../auth/auth.service";
import { FriendService } from "./friend.service";
import { ErrorService } from "../errors/error.service";
@Component({
    selector: 'my-friend-list',
    template: `   
        <my-friends-header></my-friends-header>
        <div *ngIf="isLoggedIn()">
            <my-friend *ngFor="let friend of friends" [friend]="friend"></my-friend>
            <my-user-list [friends]="friends"></my-user-list>
        </div>
    `,
    directives: [FriendsHeaderComponent, FriendComponent, UserListComponent]
})
export class FriendListComponent implements OnInit {

    constructor(private _authService: AuthService, private _friendService: FriendService, private _errorService: ErrorService) {}

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

    isLoggedIn() {
        return this._authService.isLoggedIn();
    }
}