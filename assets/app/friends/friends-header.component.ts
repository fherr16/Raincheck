import { Component } from "@angular/core";
import { Routes, ROUTER_DIRECTIVES } from "@angular/router";

import { Friend } from "./friend";
import { HomeComponent } from "./../home/home.component";
import { FriendComponent } from "./friend.component";
import { UserListComponent } from "./user-list.component";
import { FriendService } from "./friend.service";
import { ErrorService } from "../errors/error.service";
@Component({
    selector: 'my-friends-header',
    template: `
        <div class="row">
            <div class="col-sm-8 col-sm-offset-2">
                <ul class="friends-header-buttons">
                    <li><a [routerLink]="['/friends']"><i class="glyphicon glyphicon-search"></i></a></li>
                    <li><a [routerLink]="['userlist']"><i class="glyphicon glyphicon-user"></i></a></li>
                </ul>
            </div>
        </div>
        <div class="row spacing">
            <router-outlet></router-outlet>
        </div>
    `,
    directives: [ROUTER_DIRECTIVES],
    styles: [`
        .friends-header-buttons {
            display: inline;
            list-style-type: none;
            float: right;
        }

        .friends-header-buttons>li {
            display: inline;
        }
    `]
})
@Routes([
    {path: '', component: FriendComponent},
    {path: '/userlist', component: UserListComponent}
])
export class FriendsHeaderComponent {

    constructor (private _friendService: FriendService, private _errorService: ErrorService) {}
}