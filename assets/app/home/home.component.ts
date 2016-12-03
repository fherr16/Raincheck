import { Component, OnInit } from "@angular/core";

import {Home} from "./home";
import {AuthService} from "./../auth/auth.service";
import {HomeService} from "./home.service";
import { ErrorService } from "../errors/error.service";

@Component({
    selector: 'home',
    template: `   
        <div class="row">
            <ul class="col-sm-12"> 
                <li *ngFor="let action of actions">{{action.userName + ' ' + action.message + ' ' + action.friendName}}</li>
            </ul>
        </div>
    `,
    styles: [`
        #welcome-message {
            text-align: center;
        }
    `]
})
export class HomeComponent implements OnInit {
    actions: Home[];

    constructor(private _authService: AuthService, private _homeService: HomeService, private _errorService: ErrorService) { }

    ngOnInit() {
        this._homeService.getActions()
            .subscribe(
                actions => {
                    this.actions = actions;
                    this._homeService.actions = actions;
                },
                error => this._errorService.handleError(error)
            );
    }

    isLoggedIn() {
        return this._authService.isLoggedIn();
    }
}