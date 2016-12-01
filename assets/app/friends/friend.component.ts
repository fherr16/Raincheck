import { Component, OnInit } from "@angular/core";
import { Friend } from "./friend";

import { FriendService } from "./friend.service";
import { ErrorService } from "../errors/error.service";
@Component({
    selector: 'my-friend',
    template: `
        <div class="col-sm-8 col-sm-offset-2">
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th><u>Name</u></th>
                        <th><u>Action</u></th>
                    </tr>
                </thead>
                <tbody>
                    <tr *ngFor="let friend of friends">
                        <td>{{ friend.firstName }}</td>
                        <td><button class="btn btn-danger btn-xs" (click)="onDelete(friend)">Delete</button></td>
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