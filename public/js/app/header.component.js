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
            template: "\n        <div class=\"row\">\n            <div class=\"col-sm-12 top-header\">\n                    <h1 id=\"title\">Raincheck</h1>\n            </div>\n        </div>\n        <header class=\"row\">\n            <nav class=\"col-sm-12\">\n                <ul class=\"nav-links\">\n                    <li><a [routerLink]=\"['/']\" *ngIf=\"isLoggedIn()\">Friend List</a></li>\n                    <li><a [routerLink]=\"['/rest']\" *ngIf=\"isLoggedIn()\">Restaurants</a></li>\n                    <li><a [routerLink]=\"['/auth']\" *ngIf=\"!isLoggedIn()\">Log In</a></li>\n                    <li><a [routerLink]=\"['/auth']\" *ngIf=\"isLoggedIn()\">Log Out</a></li>\n                </ul>\n            </nav>\n        </header>\n    ",
            directives: [router_1.ROUTER_DIRECTIVES],
            styles: ["\n        .top-header{\n            background-color: #0e8dd6;\n            height: 100px;\n        }\n\n        #title {\n            width: 100%;\n            text-align: center;\n            color: white;\n            text-transform: uppercase;\n            font-family: Gadget;\n        }\n\n        header {\n            margin-bottom: 20px;\n            border-bottom: solid 1px;\n            background-color: #06324c;\n        }\n\n        .logo {\n            display: inline-block;\n            margin: 20px;\n        }\n    \n        .nav-links {\n            display: inline-block;\n            float: right;\n            padding: 0;\n            margin: 20px;\n        }\n\n        .nav-links>li>a {\n            color: white;\n        }\n\n        li {\n            float: none;\n            display: inline-block;\n            padding-left: 10px;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthService])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEwQixlQUFlLENBQUMsQ0FBQTtBQUMxQyx1QkFBa0MsaUJBQWlCLENBQUMsQ0FBQTtBQUVwRCw2QkFBNEIscUJBQXFCLENBQUMsQ0FBQTtBQWdFbEQ7SUFDSSx5QkFBb0IsWUFBeUI7UUFBekIsaUJBQVksR0FBWixZQUFZLENBQWE7SUFBRyxDQUFDO0lBRWpELG9DQUFVLEdBQVY7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUMxQyxDQUFDO0lBcEVMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFFBQVEsRUFBRSwrdEJBZ0JUO1lBQ0QsVUFBVSxFQUFFLENBQUMsMEJBQWlCLENBQUM7WUFDL0IsTUFBTSxFQUFFLENBQUMsZzNCQXlDUixDQUFDO1NBQ0wsQ0FBQzs7dUJBQUE7SUFPRixzQkFBQztBQUFELENBTkEsQUFNQyxJQUFBO0FBTlksdUJBQWUsa0JBTTNCLENBQUEiLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBST1VURVJfRElSRUNUSVZFUyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tIFwiLi9hdXRoL2F1dGguc2VydmljZVwiO1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1oZWFkZXInLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTIgdG9wLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8aDEgaWQ9XCJ0aXRsZVwiPlJhaW5jaGVjazwvaDE+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxoZWFkZXIgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgIDxuYXYgY2xhc3M9XCJjb2wtc20tMTJcIj5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJuYXYtbGlua3NcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjxhIFtyb3V0ZXJMaW5rXT1cIlsnLyddXCIgKm5nSWY9XCJpc0xvZ2dlZEluKClcIj5GcmllbmQgTGlzdDwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+PGEgW3JvdXRlckxpbmtdPVwiWycvcmVzdCddXCIgKm5nSWY9XCJpc0xvZ2dlZEluKClcIj5SZXN0YXVyYW50czwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+PGEgW3JvdXRlckxpbmtdPVwiWycvYXV0aCddXCIgKm5nSWY9XCIhaXNMb2dnZWRJbigpXCI+TG9nIEluPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48YSBbcm91dGVyTGlua109XCJbJy9hdXRoJ11cIiAqbmdJZj1cImlzTG9nZ2VkSW4oKVwiPkxvZyBPdXQ8L2E+PC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgIGAsXG4gICAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTXSxcbiAgICBzdHlsZXM6IFtgXG4gICAgICAgIC50b3AtaGVhZGVye1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzBlOGRkNjtcbiAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAjdGl0bGUge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IEdhZGdldDtcbiAgICAgICAgfVxuXG4gICAgICAgIGhlYWRlciB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzA2MzI0YztcbiAgICAgICAgfVxuXG4gICAgICAgIC5sb2dvIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIG1hcmdpbjogMjBweDtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICAubmF2LWxpbmtzIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBtYXJnaW46IDIwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAubmF2LWxpbmtzPmxpPmEge1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGkge1xuICAgICAgICAgICAgZmxvYXQ6IG5vbmU7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICAgIH1cbiAgICBgXVxufSlcbmV4cG9ydCBjbGFzcyBIZWFkZXJDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2F1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSkge31cblxuICAgIGlzTG9nZ2VkSW4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hdXRoU2VydmljZS5pc0xvZ2dlZEluKCk7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
