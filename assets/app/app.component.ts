import { Component } from '@angular/core';
import { Routes, ROUTER_DIRECTIVES } from "@angular/router";

import { RestComponent } from "./rest/rests.component";
import { AuthenticationComponent } from "./auth/authentication.component";
import { HeaderComponent } from "./header.component";
import { ErrorComponent } from "./errors/error.component";
@Component({
    selector: 'my-app',
    template: `
        <div class="container">
            <my-header></my-header>
            <router-outlet></router-outlet>
        </div>
        <my-error></my-error>
    `,
    directives: [ROUTER_DIRECTIVES, HeaderComponent, ErrorComponent]
  })
@Routes([
    {path: '/auth', component: AuthenticationComponent},
    {path: '/rest', component: RestComponent}
])
export class AppComponent {

}
