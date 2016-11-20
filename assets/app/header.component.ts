import { Component } from "@angular/core";
import { ROUTER_DIRECTIVES } from "@angular/router";

import { AuthService } from "./auth/auth.service";
@Component({
    selector: 'my-header',
    template: `
        <header class="row">
            <nav class="col-sm-12">
                <div class="logo">
                    <a [routerLink]="['/']">Raincheck</a>
                </div>
                <ul class="nav-links">
                    <li><a [routerLink]="['/']" *ngIf="isLoggedIn()">Friend List</a></li>
                    <li><a [routerLink]="['/rest']" *ngIf="isLoggedIn()">Restaurants</a></li>
                    <li><a [routerLink]="['/auth']" *ngIf="!isLoggedIn()">Log In</a></li>
                    <li><a [routerLink]="['/auth']" *ngIf="isLoggedIn()">Log Out</a></li>
                </ul>
            </nav>
        </header>
    `,
    directives: [ROUTER_DIRECTIVES],
    styles: [`
        header {
            margin-bottom: 20px;
            border-bottom: solid 1px;
        }

        .logo {
            display: inline-block;
            margin: 20px;
        }
    
        .nav-links {
            display: inline-block;
            float: right;
            padding: 0;
            margin: 20px;
        }

        li {
            float: none;
            display: inline-block;
            padding-left: 10px;
        }
    `]
})
export class HeaderComponent {
    constructor(private _authService: AuthService) {}

    isLoggedIn() {
        return this._authService.isLoggedIn();
    }
}
