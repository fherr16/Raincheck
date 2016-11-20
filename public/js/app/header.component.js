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
            template: "\n        <div class=\"row\">\n            <div class=\"col-sm-12 top-header\">\n                    <h1 id=\"title\">Raincheck</h1>\n            </div>\n        </div>\n        <header class=\"row\">\n            <nav class=\"col-sm-12\">\n                <ul class=\"nav-links\">\n                    <li><a [routerLink]=\"['/friends']\" *ngIf=\"isLoggedIn()\">Friend List</a></li>\n                    <li><a [routerLink]=\"['/rest']\" *ngIf=\"isLoggedIn()\">Restaurants</a></li>\n                    <li><a [routerLink]=\"['/signin']\" *ngIf=\"!isLoggedIn()\">Log In</a></li>\n                    <li><a [routerLink]=\"['/logout']\" *ngIf=\"isLoggedIn()\">Log Out</a></li>\n                </ul>\n            </nav>\n        </header>\n    ",
            directives: [router_1.ROUTER_DIRECTIVES],
            styles: ["\n        .top-header{\n            background-color: #0e8dd6;\n            height: 100px;\n        }\n\n        #title {\n            width: 100%;\n            text-align: center;\n            color: white;\n            text-transform: uppercase;\n            font-family: Gadget;\n        }\n\n        header {\n            margin-bottom: 20px;\n            border-bottom: solid 1px;\n            background-color: #06324c;\n        }\n\n        .logo {\n            display: inline-block;\n            margin: 20px;\n        }\n    \n        .nav-links {\n            display: inline-block;\n            float: right;\n            padding: 0;\n            margin: 20px;\n        }\n\n        .nav-links>li>a {\n            color: white;\n        }\n\n        li {\n            float: none;\n            display: inline-block;\n            padding-left: 10px;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthService])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEwQixlQUFlLENBQUMsQ0FBQTtBQUMxQyx1QkFBa0MsaUJBQWlCLENBQUMsQ0FBQTtBQUVwRCw2QkFBNEIscUJBQXFCLENBQUMsQ0FBQTtBQWdFbEQ7SUFDSSx5QkFBb0IsWUFBeUI7UUFBekIsaUJBQVksR0FBWixZQUFZLENBQWE7SUFBRyxDQUFDO0lBRWpELG9DQUFVLEdBQVY7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUMxQyxDQUFDO0lBcEVMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFFBQVEsRUFBRSwwdUJBZ0JUO1lBQ0QsVUFBVSxFQUFFLENBQUMsMEJBQWlCLENBQUM7WUFDL0IsTUFBTSxFQUFFLENBQUMsZzNCQXlDUixDQUFDO1NBQ0wsQ0FBQzs7dUJBQUE7SUFPRixzQkFBQztBQUFELENBTkEsQUFNQyxJQUFBO0FBTlksdUJBQWUsa0JBTTNCLENBQUEiLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBST1VURVJfRElSRUNUSVZFUyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tIFwiLi9hdXRoL2F1dGguc2VydmljZVwiO1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1oZWFkZXInLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTIgdG9wLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8aDEgaWQ9XCJ0aXRsZVwiPlJhaW5jaGVjazwvaDE+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxoZWFkZXIgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgIDxuYXYgY2xhc3M9XCJjb2wtc20tMTJcIj5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJuYXYtbGlua3NcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjxhIFtyb3V0ZXJMaW5rXT1cIlsnL2ZyaWVuZHMnXVwiICpuZ0lmPVwiaXNMb2dnZWRJbigpXCI+RnJpZW5kIExpc3Q8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjxhIFtyb3V0ZXJMaW5rXT1cIlsnL3Jlc3QnXVwiICpuZ0lmPVwiaXNMb2dnZWRJbigpXCI+UmVzdGF1cmFudHM8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjxhIFtyb3V0ZXJMaW5rXT1cIlsnL3NpZ25pbiddXCIgKm5nSWY9XCIhaXNMb2dnZWRJbigpXCI+TG9nIEluPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48YSBbcm91dGVyTGlua109XCJbJy9sb2dvdXQnXVwiICpuZ0lmPVwiaXNMb2dnZWRJbigpXCI+TG9nIE91dDwvYT48L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L25hdj5cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgYCxcbiAgICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVNdLFxuICAgIHN0eWxlczogW2BcbiAgICAgICAgLnRvcC1oZWFkZXJ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGU4ZGQ2O1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgICN0aXRsZSB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICBmb250LWZhbWlseTogR2FkZ2V0O1xuICAgICAgICB9XG5cbiAgICAgICAgaGVhZGVyIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDYzMjRjO1xuICAgICAgICB9XG5cbiAgICAgICAgLmxvZ28ge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgbWFyZ2luOiAyMHB4O1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIC5uYXYtbGlua3Mge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIG1hcmdpbjogMjBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5uYXYtbGlua3M+bGk+YSB7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIH1cblxuICAgICAgICBsaSB7XG4gICAgICAgICAgICBmbG9hdDogbm9uZTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgICAgfVxuICAgIGBdXG59KVxuZXhwb3J0IGNsYXNzIEhlYWRlckNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlKSB7fVxuXG4gICAgaXNMb2dnZWRJbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2F1dGhTZXJ2aWNlLmlzTG9nZ2VkSW4oKTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
