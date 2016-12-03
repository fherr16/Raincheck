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
var friend_component_1 = require("./friend.component");
var user_list_component_1 = require("./user-list.component");
var friend_service_1 = require("./friend.service");
var error_service_1 = require("../errors/error.service");
var FriendsHeaderComponent = (function () {
    function FriendsHeaderComponent(_friendService, _errorService) {
        this._friendService = _friendService;
        this._errorService = _errorService;
    }
    FriendsHeaderComponent = __decorate([
        core_1.Component({
            selector: 'my-friends-header',
            template: "\n        <div class=\"row\">\n            <div class=\"col-sm-8 col-sm-offset-2\">\n                <ul class=\"friends-header-buttons\">\n                    <li><a [routerLink]=\"['/friends']\"><i class=\"glyphicon glyphicon-search\"></i></a></li>\n                    <li><a [routerLink]=\"['userlist']\"><i class=\"glyphicon glyphicon-user\"></i></a></li>\n                </ul>\n            </div>\n        </div>\n        <div class=\"row spacing\">\n            <router-outlet></router-outlet>\n        </div>\n    ",
            directives: [router_1.ROUTER_DIRECTIVES],
            styles: ["\n        .friends-header-buttons {\n            display: inline;\n            list-style-type: none;\n            float: right;\n        }\n\n        .friends-header-buttons>li {\n            display: inline;\n        }\n    "]
        }),
        router_1.Routes([
            { path: '', component: friend_component_1.FriendComponent },
            { path: '/userlist', component: user_list_component_1.UserListComponent }
        ]), 
        __metadata('design:paramtypes', [friend_service_1.FriendService, error_service_1.ErrorService])
    ], FriendsHeaderComponent);
    return FriendsHeaderComponent;
}());
exports.FriendsHeaderComponent = FriendsHeaderComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZyaWVuZHMvZnJpZW5kcy1oZWFkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMEIsZUFBZSxDQUFDLENBQUE7QUFDMUMsdUJBQTBDLGlCQUFpQixDQUFDLENBQUE7QUFJNUQsaUNBQWdDLG9CQUFvQixDQUFDLENBQUE7QUFDckQsb0NBQWtDLHVCQUF1QixDQUFDLENBQUE7QUFDMUQsK0JBQThCLGtCQUFrQixDQUFDLENBQUE7QUFDakQsOEJBQTZCLHlCQUF5QixDQUFDLENBQUE7QUFpQ3ZEO0lBRUksZ0NBQXFCLGNBQTZCLEVBQVUsYUFBMkI7UUFBbEUsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBYztJQUFHLENBQUM7SUFsQy9GO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxtQkFBbUI7WUFDN0IsUUFBUSxFQUFFLDZnQkFZVDtZQUNELFVBQVUsRUFBRSxDQUFDLDBCQUFpQixDQUFDO1lBQy9CLE1BQU0sRUFBRSxDQUFDLG9PQVVSLENBQUM7U0FDTCxDQUFDO1FBQ0QsZUFBTSxDQUFDO1lBQ0osRUFBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxrQ0FBZSxFQUFDO1lBQ3RDLEVBQUMsSUFBSSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsdUNBQWlCLEVBQUM7U0FDcEQsQ0FBQzs7OEJBQUE7SUFJRiw2QkFBQztBQUFELENBSEEsQUFHQyxJQUFBO0FBSFksOEJBQXNCLHlCQUdsQyxDQUFBIiwiZmlsZSI6ImZyaWVuZHMvZnJpZW5kcy1oZWFkZXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlcywgUk9VVEVSX0RJUkVDVElWRVMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7IEZyaWVuZCB9IGZyb20gXCIuL2ZyaWVuZFwiO1xuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gXCIuLy4uL2hvbWUvaG9tZS5jb21wb25lbnRcIjtcbmltcG9ydCB7IEZyaWVuZENvbXBvbmVudCB9IGZyb20gXCIuL2ZyaWVuZC5jb21wb25lbnRcIjtcbmltcG9ydCB7IFVzZXJMaXN0Q29tcG9uZW50IH0gZnJvbSBcIi4vdXNlci1saXN0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgRnJpZW5kU2VydmljZSB9IGZyb20gXCIuL2ZyaWVuZC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBFcnJvclNlcnZpY2UgfSBmcm9tIFwiLi4vZXJyb3JzL2Vycm9yLnNlcnZpY2VcIjtcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktZnJpZW5kcy1oZWFkZXInLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tOCBjb2wtc20tb2Zmc2V0LTJcIj5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJmcmllbmRzLWhlYWRlci1idXR0b25zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48YSBbcm91dGVyTGlua109XCJbJy9mcmllbmRzJ11cIj48aSBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tc2VhcmNoXCI+PC9pPjwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+PGEgW3JvdXRlckxpbmtdPVwiWyd1c2VybGlzdCddXCI+PGkgY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLXVzZXJcIj48L2k+PC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBzcGFjaW5nXCI+XG4gICAgICAgICAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XG4gICAgICAgIDwvZGl2PlxuICAgIGAsXG4gICAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTXSxcbiAgICBzdHlsZXM6IFtgXG4gICAgICAgIC5mcmllbmRzLWhlYWRlci1idXR0b25zIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5mcmllbmRzLWhlYWRlci1idXR0b25zPmxpIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICAgICAgfVxuICAgIGBdXG59KVxuQFJvdXRlcyhbXG4gICAge3BhdGg6ICcnLCBjb21wb25lbnQ6IEZyaWVuZENvbXBvbmVudH0sXG4gICAge3BhdGg6ICcvdXNlcmxpc3QnLCBjb21wb25lbnQ6IFVzZXJMaXN0Q29tcG9uZW50fVxuXSlcbmV4cG9ydCBjbGFzcyBGcmllbmRzSGVhZGVyQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yIChwcml2YXRlIF9mcmllbmRTZXJ2aWNlOiBGcmllbmRTZXJ2aWNlLCBwcml2YXRlIF9lcnJvclNlcnZpY2U6IEVycm9yU2VydmljZSkge31cbn0iXX0=
