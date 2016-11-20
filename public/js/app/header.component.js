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
            template: "\n        <div class=\"row\">\n            <div class=\"col-sm-12 top-header\">\n                    <h1 id=\"title\">Raincheck</h1>\n            </div>\n        </div>\n        <header class=\"row\">\n            <nav class=\"col-sm-12\">\n                <ul class=\"nav-links\">\n                    <li><a [routerLink]=\"['/']\">Friend List</a></li>\n                    <li><a [routerLink]=\"['/auth']\">Authentication</a></li>\n                    <li><a [routerLink]=\"['/rest']\">Restaurants</a></li>\n                </ul>\n            </nav>\n        </header>\n    ",
            directives: [router_1.ROUTER_DIRECTIVES],
            styles: ["\n        .top-header{\n            background-color: #0e8dd6;\n            height: 100px;\n        }\n\n        #title {\n            width: 100%;\n            text-align: center;\n            color: white;\n            text-transform: uppercase;\n            font-family: Gadget;\n        }\n\n        header {\n            margin-bottom: 20px;\n            border-bottom: solid 1px;\n            background-color: #06324c;\n        }\n\n        .logo {\n            display: inline-block;\n            margin: 20px;\n        }\n    \n        .nav-links {\n            display: inline-block;\n            float: right;\n            padding: 0;\n            margin: 20px;\n        }\n\n        .nav-links>li>a {\n            color: white;\n        }\n\n        li {\n            float: none;\n            display: inline-block;\n            padding-left: 10px;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEwQixlQUFlLENBQUMsQ0FBQTtBQUMxQyx1QkFBa0MsaUJBQWlCLENBQUMsQ0FBQTtBQStEcEQ7SUFBQTtJQUVBLENBQUM7SUFoRUQ7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFdBQVc7WUFDckIsUUFBUSxFQUFFLGtrQkFlVDtZQUNELFVBQVUsRUFBRSxDQUFDLDBCQUFpQixDQUFDO1lBQy9CLE1BQU0sRUFBRSxDQUFDLGczQkF5Q1IsQ0FBQztTQUNMLENBQUM7O3VCQUFBO0lBR0Ysc0JBQUM7QUFBRCxDQUZBLEFBRUMsSUFBQTtBQUZZLHVCQUFlLGtCQUUzQixDQUFBIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUk9VVEVSX0RJUkVDVElWRVMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LWhlYWRlcicsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMiB0b3AtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMSBpZD1cInRpdGxlXCI+UmFpbmNoZWNrPC9oMT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGhlYWRlciBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgPG5hdiBjbGFzcz1cImNvbC1zbS0xMlwiPlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cIm5hdi1saW5rc1wiPlxuICAgICAgICAgICAgICAgICAgICA8bGk+PGEgW3JvdXRlckxpbmtdPVwiWycvJ11cIj5GcmllbmQgTGlzdDwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+PGEgW3JvdXRlckxpbmtdPVwiWycvYXV0aCddXCI+QXV0aGVudGljYXRpb248L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjxhIFtyb3V0ZXJMaW5rXT1cIlsnL3Jlc3QnXVwiPlJlc3RhdXJhbnRzPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICA8L2hlYWRlcj5cbiAgICBgLFxuICAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFU10sXG4gICAgc3R5bGVzOiBbYFxuICAgICAgICAudG9wLWhlYWRlcntcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwZThkZDY7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgI3RpdGxlIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBHYWRnZXQ7XG4gICAgICAgIH1cblxuICAgICAgICBoZWFkZXIge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwNjMyNGM7XG4gICAgICAgIH1cblxuICAgICAgICAubG9nbyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBtYXJnaW46IDIwcHg7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgLm5hdi1saW5rcyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgbWFyZ2luOiAyMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLm5hdi1saW5rcz5saT5hIHtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxpIHtcbiAgICAgICAgICAgIGZsb2F0OiBub25lO1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgICB9XG4gICAgYF1cbn0pXG5leHBvcnQgY2xhc3MgSGVhZGVyQ29tcG9uZW50IHtcblxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
