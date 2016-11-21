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
var friend_component_1 = require("./friend.component");
var friends_header_component_1 = require("./friends-header.component");
var user_list_component_1 = require("./user-list.component");
var auth_service_1 = require("./../auth/auth.service");
var friend_service_1 = require("./friend.service");
var error_service_1 = require("../errors/error.service");
var FriendListComponent = (function () {
    function FriendListComponent(_authService, _friendService, _errorService) {
        this._authService = _authService;
        this._friendService = _friendService;
        this._errorService = _errorService;
    }
    FriendListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._friendService.getFriends()
            .subscribe(function (friends) {
            _this.friends = friends;
            _this._friendService.friends = friends;
        }, function (error) { return _this._errorService.handleError(error); });
    };
    FriendListComponent.prototype.isLoggedIn = function () {
        return this._authService.isLoggedIn();
    };
    FriendListComponent = __decorate([
        core_1.Component({
            selector: 'my-friend-list',
            template: "   \n        <my-friends-header></my-friends-header>\n        <div class=\"row\">    \n            </div>\n        <div *ngIf=\"isLoggedIn()\">\n            <my-friend *ngFor=\"let friend of friends\" [friend]=\"friend\"></my-friend>\n            <my-user-list [friends]=\"friends\"></my-user-list>\n        </div>\n    ",
            directives: [friends_header_component_1.FriendsHeaderComponent, friend_component_1.FriendComponent, user_list_component_1.UserListComponent]
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthService, friend_service_1.FriendService, error_service_1.ErrorService])
    ], FriendListComponent);
    return FriendListComponent;
}());
exports.FriendListComponent = FriendListComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZyaWVuZHMvZnJpZW5kLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFFbEQsaUNBQWdDLG9CQUFvQixDQUFDLENBQUE7QUFDckQseUNBQXVDLDRCQUE0QixDQUFDLENBQUE7QUFDcEUsb0NBQWtDLHVCQUF1QixDQUFDLENBQUE7QUFFMUQsNkJBQTRCLHdCQUF3QixDQUFDLENBQUE7QUFDckQsK0JBQThCLGtCQUFrQixDQUFDLENBQUE7QUFDakQsOEJBQTZCLHlCQUF5QixDQUFDLENBQUE7QUFjdkQ7SUFFSSw2QkFBb0IsWUFBeUIsRUFBVSxjQUE2QixFQUFVLGFBQTJCO1FBQXJHLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQVUsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBYztJQUFHLENBQUM7SUFJN0gsc0NBQVEsR0FBUjtRQUFBLGlCQVNDO1FBUkcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLEVBQUU7YUFDM0IsU0FBUyxDQUNOLFVBQUEsT0FBTztZQUNILEtBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1lBQ3ZCLEtBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUMxQyxDQUFDLEVBQ0QsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBckMsQ0FBcUMsQ0FDakQsQ0FBQztJQUNWLENBQUM7SUFFRCx3Q0FBVSxHQUFWO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDMUMsQ0FBQztJQWhDTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFFBQVEsRUFBRSxrVUFRVDtZQUNELFVBQVUsRUFBRSxDQUFDLGlEQUFzQixFQUFFLGtDQUFlLEVBQUUsdUNBQWlCLENBQUM7U0FDM0UsQ0FBQzs7MkJBQUE7SUFxQkYsMEJBQUM7QUFBRCxDQXBCQSxBQW9CQyxJQUFBO0FBcEJZLDJCQUFtQixzQkFvQi9CLENBQUEiLCJmaWxlIjoiZnJpZW5kcy9mcmllbmQtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IEZyaWVuZENvbXBvbmVudCB9IGZyb20gXCIuL2ZyaWVuZC5jb21wb25lbnRcIjtcbmltcG9ydCB7IEZyaWVuZHNIZWFkZXJDb21wb25lbnQgfSBmcm9tIFwiLi9mcmllbmRzLWhlYWRlci5jb21wb25lbnRcIjtcbmltcG9ydCB7IFVzZXJMaXN0Q29tcG9uZW50IH0gZnJvbSBcIi4vdXNlci1saXN0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgRnJpZW5kIH0gZnJvbSBcIi4vZnJpZW5kXCI7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gXCIuLy4uL2F1dGgvYXV0aC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBGcmllbmRTZXJ2aWNlIH0gZnJvbSBcIi4vZnJpZW5kLnNlcnZpY2VcIjtcbmltcG9ydCB7IEVycm9yU2VydmljZSB9IGZyb20gXCIuLi9lcnJvcnMvZXJyb3Iuc2VydmljZVwiO1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1mcmllbmQtbGlzdCcsXG4gICAgdGVtcGxhdGU6IGAgICBcbiAgICAgICAgPG15LWZyaWVuZHMtaGVhZGVyPjwvbXktZnJpZW5kcy1oZWFkZXI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj4gICAgXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiAqbmdJZj1cImlzTG9nZ2VkSW4oKVwiPlxuICAgICAgICAgICAgPG15LWZyaWVuZCAqbmdGb3I9XCJsZXQgZnJpZW5kIG9mIGZyaWVuZHNcIiBbZnJpZW5kXT1cImZyaWVuZFwiPjwvbXktZnJpZW5kPlxuICAgICAgICAgICAgPG15LXVzZXItbGlzdCBbZnJpZW5kc109XCJmcmllbmRzXCI+PC9teS11c2VyLWxpc3Q+XG4gICAgICAgIDwvZGl2PlxuICAgIGAsXG4gICAgZGlyZWN0aXZlczogW0ZyaWVuZHNIZWFkZXJDb21wb25lbnQsIEZyaWVuZENvbXBvbmVudCwgVXNlckxpc3RDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIEZyaWVuZExpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLCBwcml2YXRlIF9mcmllbmRTZXJ2aWNlOiBGcmllbmRTZXJ2aWNlLCBwcml2YXRlIF9lcnJvclNlcnZpY2U6IEVycm9yU2VydmljZSkge31cblxuICAgIGZyaWVuZHM6IEZyaWVuZFtdO1xuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuX2ZyaWVuZFNlcnZpY2UuZ2V0RnJpZW5kcygpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgIGZyaWVuZHMgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZyaWVuZHMgPSBmcmllbmRzO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9mcmllbmRTZXJ2aWNlLmZyaWVuZHMgPSBmcmllbmRzO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gdGhpcy5fZXJyb3JTZXJ2aWNlLmhhbmRsZUVycm9yKGVycm9yKVxuICAgICAgICAgICAgKTtcbiAgICB9XG5cbiAgICBpc0xvZ2dlZEluKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYXV0aFNlcnZpY2UuaXNMb2dnZWRJbigpO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
