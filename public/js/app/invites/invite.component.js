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
var error_service_1 = require("../errors/error.service");
var router_1 = require('@angular/router');
var friend_service_1 = require("./../friends/friend.service");
var auth_service_1 = require("./../auth/auth.service");
var invite_service_1 = require("./invite.service");
var InviteComponent = (function () {
    function InviteComponent(router, _authService, inviteService, _errorService, friendService) {
        this.router = router;
        this._authService = _authService;
        this.inviteService = inviteService;
        this._errorService = _errorService;
        this.friendService = friendService;
    }
    InviteComponent.prototype.ngOnInit = function () {
        this.getFriends();
    };
    InviteComponent.prototype.selectFriend = function (friend) {
        this.selectedFriend = friend;
    };
    InviteComponent.prototype.getFriends = function () {
        var _this = this;
        this.friendService.getFriends()
            .subscribe(function (friends) {
            _this.friends = friends;
            _this.friendService.friends = friends;
        }, function (error) { return _this._errorService.handleError(error); });
    };
    InviteComponent.prototype.isLoggedIn = function () {
        return this._authService.isLoggedIn();
    };
    InviteComponent = __decorate([
        core_1.Component({
            selector: "my-rests",
            template: "\n  <div *ngIf=\"isLoggedIn()\">\n\n    <h1> Select A Friend To Go With </h1>\n\n    <div style=\"border:1px solid\">\n      <h4> Current Friends </h4>\n      <ul *ngFor=\"let friend of friends\">\n        <li (click)=\"selectFriend(friend)\">\n            <span> Name: {{friend.firstName}}</span>\n        </li>\n      </ul>\n    </div>\n\n    <div *ngIf=\"selectedFriend\">\n      <h4> When Do You Want To Go With {{selectedFriend.firstName}}? </h4>\n      <p> Just added this to change </p>\n    </div>\n\n  </div>\n  ",
        }), 
        __metadata('design:paramtypes', [router_1.Router, auth_service_1.AuthService, invite_service_1.InviteService, error_service_1.ErrorService, friend_service_1.FriendService])
    ], InviteComponent);
    return InviteComponent;
}());
exports.InviteComponent = InviteComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludml0ZXMvaW52aXRlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXlDLGVBQWUsQ0FBQyxDQUFBO0FBRXpELDhCQUE2Qix5QkFBeUIsQ0FBQyxDQUFBO0FBQ3ZELHVCQUF1QixpQkFBaUIsQ0FBQyxDQUFBO0FBRXpDLCtCQUE0Qiw2QkFBNkIsQ0FBQyxDQUFBO0FBRzFELDZCQUEwQix3QkFBd0IsQ0FBQyxDQUFBO0FBQ25ELCtCQUE0QixrQkFBa0IsQ0FBQyxDQUFBO0FBMkIvQztJQUNFLHlCQUNVLE1BQWMsRUFDZCxZQUF5QixFQUN6QixhQUE0QixFQUM1QixhQUEyQixFQUMzQixhQUEyQjtRQUozQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsaUJBQVksR0FBWixZQUFZLENBQWE7UUFDekIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsa0JBQWEsR0FBYixhQUFhLENBQWM7UUFDM0Isa0JBQWEsR0FBYixhQUFhLENBQWM7SUFDakMsQ0FBQztJQUtMLGtDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVELHNDQUFZLEdBQVosVUFBYSxNQUFjO1FBQ3pCLElBQUksQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDO0lBQy9CLENBQUM7SUFFRCxvQ0FBVSxHQUFWO1FBQUEsaUJBU0M7UUFSQyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRTthQUMxQixTQUFTLENBQ04sVUFBQSxPQUFPO1lBQ0gsS0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7WUFDdkIsS0FBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3pDLENBQUMsRUFDRCxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxFQUFyQyxDQUFxQyxDQUNqRCxDQUFDO0lBQ1IsQ0FBQztJQUVELG9DQUFVLEdBQVY7UUFDTSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUM1QyxDQUFDO0lBMURIO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFFBQVEsRUFBRSwyZ0JBb0JUO1NBQ0YsQ0FBQzs7dUJBQUE7SUFvQ0Ysc0JBQUM7QUFBRCxDQWxDQSxBQWtDQyxJQUFBO0FBbENZLHVCQUFlLGtCQWtDM0IsQ0FBQSIsImZpbGUiOiJpbnZpdGVzL2ludml0ZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVzLCBST1VURVJfRElSRUNUSVZFUyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IEVycm9yU2VydmljZSB9IGZyb20gXCIuLi9lcnJvcnMvZXJyb3Iuc2VydmljZVwiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHtGcmllbmRTZXJ2aWNlfSBmcm9tIFwiLi8uLi9mcmllbmRzL2ZyaWVuZC5zZXJ2aWNlXCI7XG5pbXBvcnQge0ZyaWVuZH0gZnJvbSBcIi4vLi4vZnJpZW5kcy9mcmllbmRcIjtcbmltcG9ydCB7SW52aXRlfSBmcm9tIFwiLi9pbnZpdGVcIjtcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gXCIuLy4uL2F1dGgvYXV0aC5zZXJ2aWNlXCI7XG5pbXBvcnQge0ludml0ZVNlcnZpY2V9IGZyb20gXCIuL2ludml0ZS5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJteS1yZXN0c1wiLFxuICB0ZW1wbGF0ZTogYFxuICA8ZGl2ICpuZ0lmPVwiaXNMb2dnZWRJbigpXCI+XG5cbiAgICA8aDE+IFNlbGVjdCBBIEZyaWVuZCBUbyBHbyBXaXRoIDwvaDE+XG5cbiAgICA8ZGl2IHN0eWxlPVwiYm9yZGVyOjFweCBzb2xpZFwiPlxuICAgICAgPGg0PiBDdXJyZW50IEZyaWVuZHMgPC9oND5cbiAgICAgIDx1bCAqbmdGb3I9XCJsZXQgZnJpZW5kIG9mIGZyaWVuZHNcIj5cbiAgICAgICAgPGxpIChjbGljayk9XCJzZWxlY3RGcmllbmQoZnJpZW5kKVwiPlxuICAgICAgICAgICAgPHNwYW4+IE5hbWU6IHt7ZnJpZW5kLmZpcnN0TmFtZX19PC9zcGFuPlxuICAgICAgICA8L2xpPlxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgKm5nSWY9XCJzZWxlY3RlZEZyaWVuZFwiPlxuICAgICAgPGg0PiBXaGVuIERvIFlvdSBXYW50IFRvIEdvIFdpdGgge3tzZWxlY3RlZEZyaWVuZC5maXJzdE5hbWV9fT8gPC9oND5cbiAgICAgIDxwPiBKdXN0IGFkZGVkIHRoaXMgdG8gY2hhbmdlIDwvcD5cbiAgICA8L2Rpdj5cblxuICA8L2Rpdj5cbiAgYCxcbn0pXG5cbmV4cG9ydCBjbGFzcyBJbnZpdGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSBfYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuICAgIHByaXZhdGUgaW52aXRlU2VydmljZTogSW52aXRlU2VydmljZSxcbiAgICBwcml2YXRlIF9lcnJvclNlcnZpY2U6IEVycm9yU2VydmljZSxcbiAgICBwcml2YXRlIGZyaWVuZFNlcnZpY2U6RnJpZW5kU2VydmljZVxuICApIHsgfVxuXG4gIGZyaWVuZHM6IEZyaWVuZFtdO1xuICBzZWxlY3RlZEZyaWVuZDogRnJpZW5kO1xuXG4gIG5nT25Jbml0KCl7XG4gICAgdGhpcy5nZXRGcmllbmRzKCk7XG4gIH1cblxuICBzZWxlY3RGcmllbmQoZnJpZW5kOiBGcmllbmQpe1xuICAgIHRoaXMuc2VsZWN0ZWRGcmllbmQgPSBmcmllbmQ7XG4gIH1cblxuICBnZXRGcmllbmRzKCl7XG4gICAgdGhpcy5mcmllbmRTZXJ2aWNlLmdldEZyaWVuZHMoKVxuICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgZnJpZW5kcyA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5mcmllbmRzID0gZnJpZW5kcztcbiAgICAgICAgICAgICAgICB0aGlzLmZyaWVuZFNlcnZpY2UuZnJpZW5kcyA9IGZyaWVuZHM7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3IgPT4gdGhpcy5fZXJyb3JTZXJ2aWNlLmhhbmRsZUVycm9yKGVycm9yKVxuICAgICAgICApO1xuICB9XG5cbiAgaXNMb2dnZWRJbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2F1dGhTZXJ2aWNlLmlzTG9nZ2VkSW4oKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
