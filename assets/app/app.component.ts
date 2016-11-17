import { Component } from '@angular/core';
import { Routes, ROUTER_DIRECTIVES } from "@angular/router";

import { FriendListComponent } from "./friends/friend-list.component";
import { RestComponent } from "./rest/rests.component";
import { AuthenticationComponent } from "./auth/authentication.component";
import { HeaderComponent } from "./header.component";
import { ErrorComponent } from "./errors/error.component";
@Component({
    selector: 'my-app',
    template: `
        <div class="container">
            <my-header></my-header>
            <div class="row">
                
                <router-outlet class="col-md-8"></router-outlet>
            </div>
        </div>
        <my-error></my-error>
    `,
    directives: [ROUTER_DIRECTIVES, HeaderComponent, ErrorComponent]
  })
@Routes([
    {path: '/', component: FriendListComponent},
    {path: '/auth', component: AuthenticationComponent},
    {path: '/rest', component: RestComponent}
])
export class AppComponent {

}
