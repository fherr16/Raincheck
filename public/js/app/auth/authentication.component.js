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
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var signup_component_1 = require("./signup.component");
var signin_component_1 = require("./signin.component");
var rests_component_1 = require("../rest/rests.component");
var logout_component_1 = require("./logout.component");
var auth_service_1 = require("./auth.service");
var AuthenticationComponent = (function () {
    function AuthenticationComponent(_authService) {
        this._authService = _authService;
    }
    AuthenticationComponent.prototype.isLoggedIn = function () {
        return this._authService.isLoggedIn();
    };
    AuthenticationComponent = __decorate([
        core_1.Component({
            selector: 'my-auth',
            template: "\n        <header class=\"row spacing\">\n            <nav class=\"col-md-8 col-md-offset-2\">\n                <ul class=\"nav nav-tabs\">\n                    <li><a [routerLink]=\"['signup']\">Signup</a></li>\n                    <li><a [routerLink]='[rest]'>Restaurants</a></li>\n                    <li><a [routerLink]=\"['signin']\" *ngIf=\"!isLoggedIn()\">Signin</a></li>\n                    <li><a [routerLink]=\"['logout']\" *ngIf=\"isLoggedIn()\">Logout</a></li>\n                </ul>\n            </nav>\n        </header>\n        <div class=\"row spacing\">\n            <router-outlet></router-outlet>\n        </div>\n    ",
            directives: [router_1.ROUTER_DIRECTIVES],
            styles: ["\n        .router-link-active {\n            color: #555;\n            cursor: default;\n            background-color: #fff;\n            border: 1px solid #ddd;\n            border-bottom-color: transparent;\n        }\n    "]
        }),
        router_1.Routes([
            { path: 'signup', component: signup_component_1.SignupComponent },
            { path: 'signin', component: signin_component_1.SigninComponent },
            { path: 'logout', component: logout_component_1.LogoutComponent },
            { path: 'rest', component: rests_component_1.RestComponent }
        ]), 
        __metadata('design:paramtypes', [auth_service_1.AuthService])
    ], AuthenticationComponent);
    return AuthenticationComponent;
}());
exports.AuthenticationComponent = AuthenticationComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgvYXV0aGVudGljYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMEIsZUFBZSxDQUFDLENBQUE7QUFDMUMsdUJBQTBDLGlCQUFpQixDQUFDLENBQUE7QUFFNUQsaUNBQWdDLG9CQUFvQixDQUFDLENBQUE7QUFDckQsaUNBQWdDLG9CQUFvQixDQUFDLENBQUE7QUFDckQsZ0NBQThCLHlCQUF5QixDQUFDLENBQUE7QUFDeEQsaUNBQWdDLG9CQUFvQixDQUFDLENBQUE7QUFDckQsNkJBQTRCLGdCQUFnQixDQUFDLENBQUE7QUFvQzdDO0lBQ0ksaUNBQXFCLFlBQXlCO1FBQXpCLGlCQUFZLEdBQVosWUFBWSxDQUFhO0lBQUcsQ0FBQztJQUVsRCw0Q0FBVSxHQUFWO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDMUMsQ0FBQztJQXZDTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsU0FBUztZQUNuQixRQUFRLEVBQUUsaW9CQWNUO1lBQ0QsVUFBVSxFQUFFLENBQUMsMEJBQWlCLENBQUM7WUFDL0IsTUFBTSxFQUFFLENBQUMsbU9BUVIsQ0FBQztTQUNMLENBQUM7UUFDRCxlQUFNLENBQUM7WUFDSixFQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLGtDQUFlLEVBQUM7WUFDNUMsRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxrQ0FBZSxFQUFDO1lBQzVDLEVBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsa0NBQWUsRUFBQztZQUM1QyxFQUFDLElBQUksRUFBQyxNQUFNLEVBQUUsU0FBUyxFQUFDLCtCQUFhLEVBQUM7U0FDekMsQ0FBQzs7K0JBQUE7SUFRRiw4QkFBQztBQUFELENBUEEsQUFPQyxJQUFBO0FBUFksK0JBQXVCLDBCQU9uQyxDQUFBIiwiZmlsZSI6ImF1dGgvYXV0aGVudGljYXRpb24uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlcywgUk9VVEVSX0RJUkVDVElWRVMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7IFNpZ251cENvbXBvbmVudCB9IGZyb20gXCIuL3NpZ251cC5jb21wb25lbnRcIjtcbmltcG9ydCB7IFNpZ25pbkNvbXBvbmVudCB9IGZyb20gXCIuL3NpZ25pbi5jb21wb25lbnRcIjtcbmltcG9ydCB7IFJlc3RDb21wb25lbnQgfSBmcm9tIFwiLi4vcmVzdC9yZXN0cy5jb21wb25lbnRcIjtcbmltcG9ydCB7IExvZ291dENvbXBvbmVudCB9IGZyb20gXCIuL2xvZ291dC5jb21wb25lbnRcIjtcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSBcIi4vYXV0aC5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktYXV0aCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGhlYWRlciBjbGFzcz1cInJvdyBzcGFjaW5nXCI+XG4gICAgICAgICAgICA8bmF2IGNsYXNzPVwiY29sLW1kLTggY29sLW1kLW9mZnNldC0yXCI+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwibmF2IG5hdi10YWJzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48YSBbcm91dGVyTGlua109XCJbJ3NpZ251cCddXCI+U2lnbnVwPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48YSBbcm91dGVyTGlua109J1tyZXN0XSc+UmVzdGF1cmFudHM8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjxhIFtyb3V0ZXJMaW5rXT1cIlsnc2lnbmluJ11cIiAqbmdJZj1cIiFpc0xvZ2dlZEluKClcIj5TaWduaW48L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjxhIFtyb3V0ZXJMaW5rXT1cIlsnbG9nb3V0J11cIiAqbmdJZj1cImlzTG9nZ2VkSW4oKVwiPkxvZ291dDwvYT48L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L25hdj5cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgc3BhY2luZ1wiPlxuICAgICAgICAgICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxuICAgICAgICA8L2Rpdj5cbiAgICBgLFxuICAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFU10sXG4gICAgc3R5bGVzOiBbYFxuICAgICAgICAucm91dGVyLWxpbmstYWN0aXZlIHtcbiAgICAgICAgICAgIGNvbG9yOiAjNTU1O1xuICAgICAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgfVxuICAgIGBdXG59KVxuQFJvdXRlcyhbXG4gICAge3BhdGg6ICdzaWdudXAnLCBjb21wb25lbnQ6IFNpZ251cENvbXBvbmVudH0sXG4gICAge3BhdGg6ICdzaWduaW4nLCBjb21wb25lbnQ6IFNpZ25pbkNvbXBvbmVudH0sXG4gICAge3BhdGg6ICdsb2dvdXQnLCBjb21wb25lbnQ6IExvZ291dENvbXBvbmVudH0sXG4gICAge3BhdGg6J3Jlc3QnLCBjb21wb25lbnQ6UmVzdENvbXBvbmVudH1cbl0pXG5leHBvcnQgY2xhc3MgQXV0aGVudGljYXRpb25Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yIChwcml2YXRlIF9hdXRoU2VydmljZTogQXV0aFNlcnZpY2UpIHt9XG5cbiAgICBpc0xvZ2dlZEluKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYXV0aFNlcnZpY2UuaXNMb2dnZWRJbigpO1xuICAgIH1cblxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
