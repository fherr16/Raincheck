import { Component, OnInit } from "@angular/core";
import { Friend } from "./friend";

import { FriendService } from "./friend.service";
import { ErrorService } from "../errors/error.service";
@Component({
    selector: 'my-friend',
    template: `
        <div class="col-md-8 col-md-offset-2">
            <table class="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr *ngFor="let friend of friends">
                        <td>{{ friend.firstName }}</td>
                        <td><a (click)="onDelete(friend)">Delete</a></td>
                    </tr>
                </tbody>
            </table>
        </div>
    `,
    styles: [`
        .contact {
            display: inline-block;
            border-bottom: solid 1px;
            font-size: 12px;
            width: 100%;
        }
        .admin-delete {
            display: inline-block;
            text-align: right;
        }
    `]
})
export class FriendComponent implements OnInit {
    friends: Friend[];

    constructor (private _friendService: FriendService, private _errorService: ErrorService) {}

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

    onDelete(friend: Friend) {
        this._friendService.deleteFriend(friend)
            .subscribe(
                data => console.log(data),
                error => this._errorService.handleError(error)
            );
    }
}