"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require("@angular/router");
var friend_list_component_1 = require("./friends/friend-list.component");
var authentication_component_1 = require("./auth/authentication.component");
var header_component_1 = require("./header.component");
var error_component_1 = require("./errors/error.component");
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: " \n        <div class=\"container\">\n            <my-header></my-header>\n            <router-outlet></router-outlet>\n        </div>\n        <my-error></my-error>\n    ",
            directives: [router_1.ROUTER_DIRECTIVES, header_component_1.HeaderComponent, error_component_1.ErrorComponent]
        }),
        router_1.Routes([
            { path: '/', component: friend_list_component_1.FriendListComponent },
            { path: '/auth', component: authentication_component_1.AuthenticationComponent }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEwQixlQUFlLENBQUMsQ0FBQTtBQUMxQyx1QkFBMEMsaUJBQWlCLENBQUMsQ0FBQTtBQUU1RCxzQ0FBb0MsaUNBQWlDLENBQUMsQ0FBQTtBQUN0RSx5Q0FBd0MsaUNBQWlDLENBQUMsQ0FBQTtBQUMxRSxpQ0FBZ0Msb0JBQW9CLENBQUMsQ0FBQTtBQUNyRCxnQ0FBK0IsMEJBQTBCLENBQUMsQ0FBQTtBQWdCMUQ7SUFBQTtJQUVBLENBQUM7SUFqQkQ7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsUUFBUSxFQUFFLDZLQU1UO1lBQ0QsVUFBVSxFQUFFLENBQUMsMEJBQWlCLEVBQUUsa0NBQWUsRUFBRSxnQ0FBYyxDQUFDO1NBQ25FLENBQUM7UUFDRCxlQUFNLENBQUM7WUFDSixFQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLDJDQUFtQixFQUFDO1lBQzNDLEVBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsa0RBQXVCLEVBQUM7U0FDdEQsQ0FBQzs7b0JBQUE7SUFHRixtQkFBQztBQUFELENBRkEsQUFFQyxJQUFBO0FBRlksb0JBQVksZUFFeEIsQ0FBQSIsImZpbGUiOiJhcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXMsIFJPVVRFUl9ESVJFQ1RJVkVTIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBGcmllbmRMaXN0Q29tcG9uZW50IH0gZnJvbSBcIi4vZnJpZW5kcy9mcmllbmQtbGlzdC5jb21wb25lbnRcIjtcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uQ29tcG9uZW50IH0gZnJvbSBcIi4vYXV0aC9hdXRoZW50aWNhdGlvbi5jb21wb25lbnRcIjtcbmltcG9ydCB7IEhlYWRlckNvbXBvbmVudCB9IGZyb20gXCIuL2hlYWRlci5jb21wb25lbnRcIjtcbmltcG9ydCB7IEVycm9yQ29tcG9uZW50IH0gZnJvbSBcIi4vZXJyb3JzL2Vycm9yLmNvbXBvbmVudFwiO1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxuICAgIHRlbXBsYXRlOiBgIFxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8bXktaGVhZGVyPjwvbXktaGVhZGVyPlxuICAgICAgICAgICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPG15LWVycm9yPjwvbXktZXJyb3I+XG4gICAgYCxcbiAgICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVMsIEhlYWRlckNvbXBvbmVudCwgRXJyb3JDb21wb25lbnRdXG59KVxuQFJvdXRlcyhbXG4gICAge3BhdGg6ICcvJywgY29tcG9uZW50OiBGcmllbmRMaXN0Q29tcG9uZW50fSxcbiAgICB7cGF0aDogJy9hdXRoJywgY29tcG9uZW50OiBBdXRoZW50aWNhdGlvbkNvbXBvbmVudH1cbl0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbiAgICBcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
