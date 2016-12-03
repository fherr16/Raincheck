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
var home_init_component_1 = require("./home/home-init.component");
var home_component_1 = require("./home/home.component");
var invite_component_1 = require("./invites/invite.component");
var friends_header_component_1 = require("./friends/friends-header.component");
var rests_component_1 = require("./rest/rests.component");
var signin_component_1 = require("./auth/signin.component");
var logout_component_1 = require("./auth/logout.component");
var header_component_1 = require("./header.component");
var error_component_1 = require("./errors/error.component");
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n        <div class=\"container\">\n            <my-header></my-header>\n            <div class=\"row\">\n                <router-outlet class=\"col-md-8\"></router-outlet>\n            </div>\n        </div>\n        <my-error></my-error>\n    ",
            directives: [router_1.ROUTER_DIRECTIVES, header_component_1.HeaderComponent, error_component_1.ErrorComponent]
        }),
        router_1.Routes([
            { path: '/', component: home_init_component_1.HomeInitComponent },
            { path: '/home', component: home_component_1.HomeComponent },
            { path: '/friends', component: friends_header_component_1.FriendsHeaderComponent },
            { path: '/signin', component: signin_component_1.SigninComponent },
            { path: '/logout', component: logout_component_1.LogoutComponent },
            { path: '/rest', component: rests_component_1.RestComponent },
            { path: '/invites', component: invite_component_1.InviteComponent },
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEwQixlQUFlLENBQUMsQ0FBQTtBQUMxQyx1QkFBMEMsaUJBQWlCLENBQUMsQ0FBQTtBQUU1RCxvQ0FBa0MsNEJBQTRCLENBQUMsQ0FBQTtBQUMvRCwrQkFBOEIsdUJBQXVCLENBQUMsQ0FBQTtBQUN0RCxpQ0FBZ0MsNEJBQTRCLENBQUMsQ0FBQTtBQUM3RCx5Q0FBdUMsb0NBQW9DLENBQUMsQ0FBQTtBQUM1RSxnQ0FBOEIsd0JBQXdCLENBQUMsQ0FBQTtBQUN2RCxpQ0FBZ0MseUJBQXlCLENBQUMsQ0FBQTtBQUMxRCxpQ0FBZ0MseUJBQXlCLENBQUMsQ0FBQTtBQUMxRCxpQ0FBZ0Msb0JBQW9CLENBQUMsQ0FBQTtBQUNyRCxnQ0FBK0IsMEJBQTBCLENBQUMsQ0FBQTtBQXdCMUQ7SUFBQTtJQUVBLENBQUM7SUF4QkQ7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsUUFBUSxFQUFFLHdQQVFUO1lBQ0QsVUFBVSxFQUFFLENBQUMsMEJBQWlCLEVBQUUsa0NBQWUsRUFBRSxnQ0FBYyxDQUFDO1NBQ2pFLENBQUM7UUFDSCxlQUFNLENBQUM7WUFDSixFQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLHVDQUFpQixFQUFDO1lBQ3pDLEVBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsOEJBQWEsRUFBQztZQUN6QyxFQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLGlEQUFzQixFQUFDO1lBQ3JELEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsa0NBQWUsRUFBQztZQUM3QyxFQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLGtDQUFlLEVBQUM7WUFDN0MsRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSwrQkFBYSxFQUFDO1lBQ3pDLEVBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsa0NBQWUsRUFBQztTQUNqRCxDQUFDOztvQkFBQTtJQUdGLG1CQUFDO0FBQUQsQ0FGQSxBQUVDLElBQUE7QUFGWSxvQkFBWSxlQUV4QixDQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlcywgUk9VVEVSX0RJUkVDVElWRVMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7IEhvbWVJbml0Q29tcG9uZW50IH0gZnJvbSBcIi4vaG9tZS9ob21lLWluaXQuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSBcIi4vaG9tZS9ob21lLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSW52aXRlQ29tcG9uZW50IH0gZnJvbSBcIi4vaW52aXRlcy9pbnZpdGUuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBGcmllbmRzSGVhZGVyQ29tcG9uZW50IH0gZnJvbSBcIi4vZnJpZW5kcy9mcmllbmRzLWhlYWRlci5jb21wb25lbnRcIjtcbmltcG9ydCB7IFJlc3RDb21wb25lbnQgfSBmcm9tIFwiLi9yZXN0L3Jlc3RzLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgU2lnbmluQ29tcG9uZW50IH0gZnJvbSBcIi4vYXV0aC9zaWduaW4uY29tcG9uZW50XCI7XG5pbXBvcnQgeyBMb2dvdXRDb21wb25lbnQgfSBmcm9tIFwiLi9hdXRoL2xvZ291dC5jb21wb25lbnRcIjtcbmltcG9ydCB7IEhlYWRlckNvbXBvbmVudCB9IGZyb20gXCIuL2hlYWRlci5jb21wb25lbnRcIjtcbmltcG9ydCB7IEVycm9yQ29tcG9uZW50IH0gZnJvbSBcIi4vZXJyb3JzL2Vycm9yLmNvbXBvbmVudFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LWFwcCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPG15LWhlYWRlcj48L215LWhlYWRlcj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICA8cm91dGVyLW91dGxldCBjbGFzcz1cImNvbC1tZC04XCI+PC9yb3V0ZXItb3V0bGV0PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8bXktZXJyb3I+PC9teS1lcnJvcj5cbiAgICBgLFxuICAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFUywgSGVhZGVyQ29tcG9uZW50LCBFcnJvckNvbXBvbmVudF1cbiAgfSlcbkBSb3V0ZXMoW1xuICAgIHtwYXRoOiAnLycsIGNvbXBvbmVudDogSG9tZUluaXRDb21wb25lbnR9LFxuICAgIHtwYXRoOiAnL2hvbWUnLCBjb21wb25lbnQ6IEhvbWVDb21wb25lbnR9LFxuICAgIHtwYXRoOiAnL2ZyaWVuZHMnLCBjb21wb25lbnQ6IEZyaWVuZHNIZWFkZXJDb21wb25lbnR9LFxuICAgIHtwYXRoOiAnL3NpZ25pbicsIGNvbXBvbmVudDogU2lnbmluQ29tcG9uZW50fSxcbiAgICB7cGF0aDogJy9sb2dvdXQnLCBjb21wb25lbnQ6IExvZ291dENvbXBvbmVudH0sXG4gICAge3BhdGg6ICcvcmVzdCcsIGNvbXBvbmVudDogUmVzdENvbXBvbmVudH0sXG4gICAge3BhdGg6ICcvaW52aXRlcycsIGNvbXBvbmVudDogSW52aXRlQ29tcG9uZW50fSxcbl0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcblxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
