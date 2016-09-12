import { Component, Input } from "@angular/core";
import { Friend } from "./friend";

import { FriendService } from "./friend.service";
import { ErrorService } from "../errors/error.service";
@Component({
    selector: 'my-friend',
    template: `
        <article class="panel panel-default">
            <div class="panel-body">
                {{ friend.firstName }}
            </div>
            <footer class="panel-footer">
 
                <div class="config">
                    <a (click)="onDelete()">Delete</a>
                </div>
            </footer>
        </article>
    `,
    styles: [`
        .author {
            display: inline-block;
            font-style: italic;
            font-size: 12px;
            width: 80%;
        }
        .config {
            display: inline-block;
            text-align: right;
            font-size: 12px;
            width: 19%;
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