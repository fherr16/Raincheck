import { Component } from "@angular/core";
import { ROUTER_DIRECTIVES } from "@angular/router";
@Component({
    selector: 'my-header',
    template: `
        <header class="row">
            <nav class="col-sm-12">
                <div class="logo">
                    <a [routerLink]="['/']">Raincheck</a>
                </div>
                <ul class="nav-links">
                    <li><a [routerLink]="['/']">Friend List</a></li>
                    <li><a [routerLink]="['/auth']">Authentication</a></li>
                    <li><a [routerLink]="['/rest']">Restaurants</a></li>
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

}
