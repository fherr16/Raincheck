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
            template: "\n        <header class=\"row spacing\">\n            <nav class=\"col-md-8 col-md-offset-2\">\n                <ul class=\"nav nav-tabs\">\n                    <li><a [routerLink]=\"['signup']\">Signup</a></li>\n                    <li><a [routerLink]=\"['signin']\" *ngIf=\"!isLoggedIn()\">Signin</a></li>\n                    <li><a [routerLink]=\"['logout']\" *ngIf=\"isLoggedIn()\">Logout</a></li>\n                </ul>\n            </nav>\n        </header>\n    ",
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgvYXV0aGVudGljYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMEIsZUFBZSxDQUFDLENBQUE7QUFDMUMsdUJBQTBDLGlCQUFpQixDQUFDLENBQUE7QUFFNUQsaUNBQWdDLG9CQUFvQixDQUFDLENBQUE7QUFDckQsaUNBQWdDLG9CQUFvQixDQUFDLENBQUE7QUFDckQsZ0NBQThCLHlCQUF5QixDQUFDLENBQUE7QUFDeEQsaUNBQWdDLG9CQUFvQixDQUFDLENBQUE7QUFDckQsNkJBQTRCLGdCQUFnQixDQUFDLENBQUE7QUFnQzdDO0lBQ0ksaUNBQXFCLFlBQXlCO1FBQXpCLGlCQUFZLEdBQVosWUFBWSxDQUFhO0lBQUcsQ0FBQztJQUVsRCw0Q0FBVSxHQUFWO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDMUMsQ0FBQztJQW5DTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsU0FBUztZQUNuQixRQUFRLEVBQUUsd2RBVVQ7WUFDRCxVQUFVLEVBQUUsQ0FBQywwQkFBaUIsQ0FBQztZQUMvQixNQUFNLEVBQUUsQ0FBQyxtT0FRUixDQUFDO1NBQ0wsQ0FBQztRQUNELGVBQU0sQ0FBQztZQUNKLEVBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsa0NBQWUsRUFBQztZQUM1QyxFQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLGtDQUFlLEVBQUM7WUFDNUMsRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxrQ0FBZSxFQUFDO1lBQzVDLEVBQUMsSUFBSSxFQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUMsK0JBQWEsRUFBQztTQUN6QyxDQUFDOzsrQkFBQTtJQVFGLDhCQUFDO0FBQUQsQ0FQQSxBQU9DLElBQUE7QUFQWSwrQkFBdUIsMEJBT25DLENBQUEiLCJmaWxlIjoiYXV0aC9hdXRoZW50aWNhdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVzLCBST1VURVJfRElSRUNUSVZFUyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgU2lnbnVwQ29tcG9uZW50IH0gZnJvbSBcIi4vc2lnbnVwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgU2lnbmluQ29tcG9uZW50IH0gZnJvbSBcIi4vc2lnbmluLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgUmVzdENvbXBvbmVudCB9IGZyb20gXCIuLi9yZXN0L3Jlc3RzLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTG9nb3V0Q29tcG9uZW50IH0gZnJvbSBcIi4vbG9nb3V0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tIFwiLi9hdXRoLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1hdXRoJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8aGVhZGVyIGNsYXNzPVwicm93IHNwYWNpbmdcIj5cbiAgICAgICAgICAgIDxuYXYgY2xhc3M9XCJjb2wtbWQtOCBjb2wtbWQtb2Zmc2V0LTJcIj5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJuYXYgbmF2LXRhYnNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjxhIFtyb3V0ZXJMaW5rXT1cIlsnc2lnbnVwJ11cIj5TaWdudXA8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjxhIFtyb3V0ZXJMaW5rXT1cIlsnc2lnbmluJ11cIiAqbmdJZj1cIiFpc0xvZ2dlZEluKClcIj5TaWduaW48L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjxhIFtyb3V0ZXJMaW5rXT1cIlsnbG9nb3V0J11cIiAqbmdJZj1cImlzTG9nZ2VkSW4oKVwiPkxvZ291dDwvYT48L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L25hdj5cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgYCxcbiAgICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVNdLFxuICAgIHN0eWxlczogW2BcbiAgICAgICAgLnJvdXRlci1saW5rLWFjdGl2ZSB7XG4gICAgICAgICAgICBjb2xvcjogIzU1NTtcbiAgICAgICAgICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIH1cbiAgICBgXVxufSlcbkBSb3V0ZXMoW1xuICAgIHtwYXRoOiAnc2lnbnVwJywgY29tcG9uZW50OiBTaWdudXBDb21wb25lbnR9LFxuICAgIHtwYXRoOiAnc2lnbmluJywgY29tcG9uZW50OiBTaWduaW5Db21wb25lbnR9LFxuICAgIHtwYXRoOiAnbG9nb3V0JywgY29tcG9uZW50OiBMb2dvdXRDb21wb25lbnR9LFxuICAgIHtwYXRoOidyZXN0JywgY29tcG9uZW50OlJlc3RDb21wb25lbnR9XG5dKVxuZXhwb3J0IGNsYXNzIEF1dGhlbnRpY2F0aW9uQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvciAocHJpdmF0ZSBfYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlKSB7fVxuXG4gICAgaXNMb2dnZWRJbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2F1dGhTZXJ2aWNlLmlzTG9nZ2VkSW4oKTtcbiAgICB9XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
