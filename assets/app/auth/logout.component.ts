import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { AuthService } from "./auth.service";

@Component({
    selector: 'my-logout',
    template: `
        <section class="col-md-8 col-md-offset-2" *ngIf="isLoggedIn()">
            <button class="btn btn-danger" (click)="onLogout()">Logout</button>
        </section>
    `
})
export class LogoutComponent {
    constructor(private _authService: AuthService, private _router: Router) {}

    isLoggedIn() {
        return this._authService.isLoggedIn();
    }

    onLogout() {
        this._authService.logout();
        this._router.navigate(['/']);
    }
}