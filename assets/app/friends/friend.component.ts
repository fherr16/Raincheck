import { Component, Input } from "@angular/core";
import { Friend } from "./friend";

import { FriendService } from "./friend.service";
import { ErrorService } from "../errors/error.service";
@Component({
    selector: 'my-friend',
    template: `
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="contact">
                    {{ friend.firstName }}
                    <div class="admin-delete">
                        <a (click)="onDelete()">Delete</a>
                    </div>
                </div>
            </div>
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
export class FriendComponent {
    @Input() friend:Friend;

    constructor (private _friendService: FriendService, private _errorService: ErrorService) {}

    onDelete() {
        this._friendService.deleteFriend(this.friend)
            .subscribe(
                data => console.log(data),
                error => this._errorService.handleError(error)
            );
    }
}