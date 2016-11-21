import { Component } from '@angular/core';
import { Routes, ROUTER_DIRECTIVES } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { InviteComponent } from "./invites/invite.component";
import { FriendListComponent } from "./friends/friend-list.component";
import { RestComponent } from "./rest/rests.component";
import { SigninComponent } from "./auth/signin.component";
import { LogoutComponent } from "./auth/logout.component";
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
    {path: '/', component: HomeComponent},
    {path: '/friends', component: FriendListComponent},
    {path: '/signin', component: SigninComponent},
    {path: '/logout', component: LogoutComponent},
    {path: '/rest', component: RestComponent},
    {path: '/invites', component: InviteComponent},
])
export class AppComponent {

}
