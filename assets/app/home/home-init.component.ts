import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'home-init',
    template: `   
        <div class="row">
            <div class="col-sm-12">
                <h2 id="welcome-message">Welcome!</h2>
            </div>
        </div>
    `,
    styles: [`
        #welcome-message {
            text-align: center;
        }
    `]
})
export class HomeInitComponent {
}