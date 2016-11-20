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
var auth_service_1 = require("./auth/auth.service");
var HeaderComponent = (function () {
    function HeaderComponent(_authService) {
        this._authService = _authService;
    }
    HeaderComponent.prototype.isLoggedIn = function () {
        return this._authService.isLoggedIn();
    };
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'my-header',
            template: "\n        <header class=\"row\">\n            <nav class=\"col-sm-12\">\n                <div class=\"logo\">\n                    <a [routerLink]=\"['/']\">Raincheck</a>\n                </div>\n                <ul class=\"nav-links\">\n                    <li><a [routerLink]=\"['/']\" *ngIf=\"isLoggedIn()\">Friend List</a></li>\n                    <li><a [routerLink]=\"['/rest']\" *ngIf=\"isLoggedIn()\">Restaurants</a></li>\n                    <li><a [routerLink]=\"['/auth']\" *ngIf=\"!isLoggedIn()\">Log In</a></li>\n                    <li><a [routerLink]=\"['/auth']\" *ngIf=\"isLoggedIn()\">Log Out</a></li>\n                </ul>\n            </nav>\n        </header>\n    ",
            directives: [router_1.ROUTER_DIRECTIVES],
            styles: ["\n        header {\n            margin-bottom: 20px;\n            border-bottom: solid 1px;\n        }\n\n        .logo {\n            display: inline-block;\n            margin: 20px;\n        }\n    \n        .nav-links {\n            display: inline-block;\n            float: right;\n            padding: 0;\n            margin: 20px;\n        }\n\n        li {\n            float: none;\n            display: inline-block;\n            padding-left: 10px;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthService])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEwQixlQUFlLENBQUMsQ0FBQTtBQUMxQyx1QkFBa0MsaUJBQWlCLENBQUMsQ0FBQTtBQUVwRCw2QkFBNEIscUJBQXFCLENBQUMsQ0FBQTtBQTRDbEQ7SUFDSSx5QkFBb0IsWUFBeUI7UUFBekIsaUJBQVksR0FBWixZQUFZLENBQWE7SUFBRyxDQUFDO0lBRWpELG9DQUFVLEdBQVY7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUMxQyxDQUFDO0lBaERMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFFBQVEsRUFBRSxrckJBY1Q7WUFDRCxVQUFVLEVBQUUsQ0FBQywwQkFBaUIsQ0FBQztZQUMvQixNQUFNLEVBQUUsQ0FBQywrZEF1QlIsQ0FBQztTQUNMLENBQUM7O3VCQUFBO0lBT0Ysc0JBQUM7QUFBRCxDQU5BLEFBTUMsSUFBQTtBQU5ZLHVCQUFlLGtCQU0zQixDQUFBIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUk9VVEVSX0RJUkVDVElWRVMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSBcIi4vYXV0aC9hdXRoLnNlcnZpY2VcIjtcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktaGVhZGVyJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8aGVhZGVyIGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICA8bmF2IGNsYXNzPVwiY29sLXNtLTEyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvZ29cIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVwiWycvJ11cIj5SYWluY2hlY2s8L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwibmF2LWxpbmtzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48YSBbcm91dGVyTGlua109XCJbJy8nXVwiICpuZ0lmPVwiaXNMb2dnZWRJbigpXCI+RnJpZW5kIExpc3Q8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjxhIFtyb3V0ZXJMaW5rXT1cIlsnL3Jlc3QnXVwiICpuZ0lmPVwiaXNMb2dnZWRJbigpXCI+UmVzdGF1cmFudHM8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjxhIFtyb3V0ZXJMaW5rXT1cIlsnL2F1dGgnXVwiICpuZ0lmPVwiIWlzTG9nZ2VkSW4oKVwiPkxvZyBJbjwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+PGEgW3JvdXRlckxpbmtdPVwiWycvYXV0aCddXCIgKm5nSWY9XCJpc0xvZ2dlZEluKClcIj5Mb2cgT3V0PC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICA8L2hlYWRlcj5cbiAgICBgLFxuICAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFU10sXG4gICAgc3R5bGVzOiBbYFxuICAgICAgICBoZWFkZXIge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5sb2dvIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIG1hcmdpbjogMjBweDtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICAubmF2LWxpbmtzIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBtYXJnaW46IDIwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBsaSB7XG4gICAgICAgICAgICBmbG9hdDogbm9uZTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgICAgfVxuICAgIGBdXG59KVxuZXhwb3J0IGNsYXNzIEhlYWRlckNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlKSB7fVxuXG4gICAgaXNMb2dnZWRJbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2F1dGhTZXJ2aWNlLmlzTG9nZ2VkSW4oKTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
