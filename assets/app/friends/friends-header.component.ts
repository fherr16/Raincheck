import { Component } from "@angular/core";
import { Friend } from "./friend";

import { FriendService } from "./friend.service";
import { ErrorService } from "../errors/error.service";
@Component({
    selector: 'my-friends-header',
    template: `
        <div class="row">
            <div class="col-sm-8 col-sm-offset-2">
                <button type="button" class="btn btn-primary friends-header-buttons">Test</button>
            </div>
        </div>
    `,
    styles: [`
        .friends-header-buttons {
            float: right;
        }
    `]
})
export class FriendsHeaderComponent {

    constructor (private _friendService: FriendService, private _errorService: ErrorService) {}
}