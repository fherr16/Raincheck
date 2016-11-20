import { Component } from "@angular/core";
import { ROUTER_DIRECTIVES } from "@angular/router";

import { AuthService } from "./auth/auth.service";
@Component({
    selector: 'my-header',
    template: `
        <div class="row">
            <div class="col-sm-12 top-header">
                    <h1 id="title">Raincheck</h1>
            </div>
        </div>
        <header class="row">
            <nav class="col-sm-12">
                <ul class="nav-links">
                    <li><a [routerLink]="['/friends']" *ngIf="isLoggedIn()">Friend List</a></li>
                    <li><a [routerLink]="['/rest']" *ngIf="isLoggedIn()">Restaurants</a></li>
                    <li><a [routerLink]="['/signin']" *ngIf="!isLoggedIn()">Log In</a></li>
                    <li><a [routerLink]="['/logout']" *ngIf="isLoggedIn()">Log Out</a></li>
                </ul>
            </nav>
        </header>
    `,
    directives: [ROUTER_DIRECTIVES],
    styles: [`
        .top-header{
            background-color: #0e8dd6;
            height: 100px;
        }

        #title {
            width: 100%;
            text-align: center;
            color: white;
            text-transform: uppercase;
            font-family: Gadget;
        }

        header {
            margin-bottom: 20px;
            border-bottom: solid 1px;
            background-color: #06324c;
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

        .nav-links>li>a {
            color: white;
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
