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
var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'my-header',
            template: "\n        <header class=\"row\">\n            <nav class=\"col-sm-12\">\n                <div class=\"logo\">\n                    <a [routerLink]=\"['']\">Raincheck</a>\n                </div>\n                <ul class=\"nav-links\">\n                    <li><a [routerLink]=\"['/']\">Friend List</a></li>\n                    <li><a [routerLink]=\"['/auth']\">Authentication</a></li>\n                </ul>\n            </nav>\n        </header>\n    ",
            directives: [router_1.ROUTER_DIRECTIVES],
            styles: ["\n        header {\n            margin-bottom: 20px;\n            border-bottom: solid 1px;\n        }\n\n        .logo {\n            display: inline-block;\n            margin: 20px;\n        }\n    \n        .nav-links {\n            display: inline-block;\n            float: right;\n            padding: 0;\n            margin: 20px;\n        }\n        \n        li {\n            float: none;\n            display: inline-block;\n            padding-left: 10px;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEwQixlQUFlLENBQUMsQ0FBQTtBQUMxQyx1QkFBa0MsaUJBQWlCLENBQUMsQ0FBQTtBQTBDcEQ7SUFBQTtJQUVBLENBQUM7SUEzQ0Q7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFdBQVc7WUFDckIsUUFBUSxFQUFFLHdjQVlUO1lBQ0QsVUFBVSxFQUFFLENBQUMsMEJBQWlCLENBQUM7WUFDL0IsTUFBTSxFQUFFLENBQUMsdWVBdUJSLENBQUM7U0FDTCxDQUFDOzt1QkFBQTtJQUdGLHNCQUFDO0FBQUQsQ0FGQSxBQUVDLElBQUE7QUFGWSx1QkFBZSxrQkFFM0IsQ0FBQSIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJPVVRFUl9ESVJFQ1RJVkVTIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1oZWFkZXInLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxoZWFkZXIgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgIDxuYXYgY2xhc3M9XCJjb2wtc20tMTJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9nb1wiPlxuICAgICAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XCJbJyddXCI+UmFpbmNoZWNrPC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cIm5hdi1saW5rc1wiPlxuICAgICAgICAgICAgICAgICAgICA8bGk+PGEgW3JvdXRlckxpbmtdPVwiWycvJ11cIj5GcmllbmQgTGlzdDwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+PGEgW3JvdXRlckxpbmtdPVwiWycvYXV0aCddXCI+QXV0aGVudGljYXRpb248L2E+PC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgIGAsXG4gICAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTXSxcbiAgICBzdHlsZXM6IFtgXG4gICAgICAgIGhlYWRlciB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmxvZ28ge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgbWFyZ2luOiAyMHB4O1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIC5uYXYtbGlua3Mge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIG1hcmdpbjogMjBweDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgbGkge1xuICAgICAgICAgICAgZmxvYXQ6IG5vbmU7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICAgIH1cbiAgICBgXVxufSlcbmV4cG9ydCBjbGFzcyBIZWFkZXJDb21wb25lbnQge1xuICAgIFxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
