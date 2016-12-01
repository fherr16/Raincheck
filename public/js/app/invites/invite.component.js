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
            template: "\n  <div *ngIf=\"isLoggedIn()\">\n\n    <h1> Select A Friend To Go With </h1>\n\n    <div style=\"border:1px solid\">\n      <h4> Current Friends </h4>\n      <ul *ngFor=\"let friend of friends\">\n        <li (click)=\"selectFriend(friend)\">\n            <span> Name: {{friend.firstName}}</span>\n        </li>\n      </ul>\n    </div>\n\n    <div *ngIf=\"selectedFriend\">\n      <h4> When Do You Want To Go With {{selectedFriend.firstName}}? </h4>\n    </div>\n\n  </div>\n  ",
        }), 
        __metadata('design:paramtypes', [router_1.Router, auth_service_1.AuthService, invite_service_1.InviteService, error_service_1.ErrorService, friend_service_1.FriendService])
    ], InviteComponent);
    return InviteComponent;
}());
exports.InviteComponent = InviteComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludml0ZXMvaW52aXRlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXlDLGVBQWUsQ0FBQyxDQUFBO0FBRXpELDhCQUE2Qix5QkFBeUIsQ0FBQyxDQUFBO0FBQ3ZELHVCQUF1QixpQkFBaUIsQ0FBQyxDQUFBO0FBRXpDLCtCQUE0Qiw2QkFBNkIsQ0FBQyxDQUFBO0FBRzFELDZCQUEwQix3QkFBd0IsQ0FBQyxDQUFBO0FBQ25ELCtCQUE0QixrQkFBa0IsQ0FBQyxDQUFBO0FBMEIvQztJQUNFLHlCQUNVLE1BQWMsRUFDZCxZQUF5QixFQUN6QixhQUE0QixFQUM1QixhQUEyQixFQUMzQixhQUEyQjtRQUozQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsaUJBQVksR0FBWixZQUFZLENBQWE7UUFDekIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsa0JBQWEsR0FBYixhQUFhLENBQWM7UUFDM0Isa0JBQWEsR0FBYixhQUFhLENBQWM7SUFDakMsQ0FBQztJQUtMLGtDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVELHNDQUFZLEdBQVosVUFBYSxNQUFjO1FBQ3pCLElBQUksQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDO0lBQy9CLENBQUM7SUFFRCxvQ0FBVSxHQUFWO1FBQUEsaUJBU0M7UUFSQyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRTthQUMxQixTQUFTLENBQ04sVUFBQSxPQUFPO1lBQ0gsS0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7WUFDdkIsS0FBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3pDLENBQUMsRUFDRCxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxFQUFyQyxDQUFxQyxDQUNqRCxDQUFDO0lBQ1IsQ0FBQztJQUVELG9DQUFVLEdBQVY7UUFDTSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUM1QyxDQUFDO0lBekRIO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFFBQVEsRUFBRSxpZUFtQlQ7U0FDRixDQUFDOzt1QkFBQTtJQW9DRixzQkFBQztBQUFELENBbENBLEFBa0NDLElBQUE7QUFsQ1ksdUJBQWUsa0JBa0MzQixDQUFBIiwiZmlsZSI6Imludml0ZXMvaW52aXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXMsIFJPVVRFUl9ESVJFQ1RJVkVTIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgRXJyb3JTZXJ2aWNlIH0gZnJvbSBcIi4uL2Vycm9ycy9lcnJvci5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQge0ZyaWVuZFNlcnZpY2V9IGZyb20gXCIuLy4uL2ZyaWVuZHMvZnJpZW5kLnNlcnZpY2VcIjtcbmltcG9ydCB7RnJpZW5kfSBmcm9tIFwiLi8uLi9mcmllbmRzL2ZyaWVuZFwiO1xuaW1wb3J0IHtJbnZpdGV9IGZyb20gXCIuL2ludml0ZVwiO1xuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSBcIi4vLi4vYXV0aC9hdXRoLnNlcnZpY2VcIjtcbmltcG9ydCB7SW52aXRlU2VydmljZX0gZnJvbSBcIi4vaW52aXRlLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcIm15LXJlc3RzXCIsXG4gIHRlbXBsYXRlOiBgXG4gIDxkaXYgKm5nSWY9XCJpc0xvZ2dlZEluKClcIj5cblxuICAgIDxoMT4gU2VsZWN0IEEgRnJpZW5kIFRvIEdvIFdpdGggPC9oMT5cblxuICAgIDxkaXYgc3R5bGU9XCJib3JkZXI6MXB4IHNvbGlkXCI+XG4gICAgICA8aDQ+IEN1cnJlbnQgRnJpZW5kcyA8L2g0PlxuICAgICAgPHVsICpuZ0Zvcj1cImxldCBmcmllbmQgb2YgZnJpZW5kc1wiPlxuICAgICAgICA8bGkgKGNsaWNrKT1cInNlbGVjdEZyaWVuZChmcmllbmQpXCI+XG4gICAgICAgICAgICA8c3Bhbj4gTmFtZToge3tmcmllbmQuZmlyc3ROYW1lfX08L3NwYW4+XG4gICAgICAgIDwvbGk+XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiAqbmdJZj1cInNlbGVjdGVkRnJpZW5kXCI+XG4gICAgICA8aDQ+IFdoZW4gRG8gWW91IFdhbnQgVG8gR28gV2l0aCB7e3NlbGVjdGVkRnJpZW5kLmZpcnN0TmFtZX19PyA8L2g0PlxuICAgIDwvZGl2PlxuXG4gIDwvZGl2PlxuICBgLFxufSlcblxuZXhwb3J0IGNsYXNzIEludml0ZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIF9hdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBpbnZpdGVTZXJ2aWNlOiBJbnZpdGVTZXJ2aWNlLFxuICAgIHByaXZhdGUgX2Vycm9yU2VydmljZTogRXJyb3JTZXJ2aWNlLFxuICAgIHByaXZhdGUgZnJpZW5kU2VydmljZTpGcmllbmRTZXJ2aWNlXG4gICkgeyB9XG5cbiAgZnJpZW5kczogRnJpZW5kW107XG4gIHNlbGVjdGVkRnJpZW5kOiBGcmllbmQ7XG5cbiAgbmdPbkluaXQoKXtcbiAgICB0aGlzLmdldEZyaWVuZHMoKTtcbiAgfVxuXG4gIHNlbGVjdEZyaWVuZChmcmllbmQ6IEZyaWVuZCl7XG4gICAgdGhpcy5zZWxlY3RlZEZyaWVuZCA9IGZyaWVuZDtcbiAgfVxuXG4gIGdldEZyaWVuZHMoKXtcbiAgICB0aGlzLmZyaWVuZFNlcnZpY2UuZ2V0RnJpZW5kcygpXG4gICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICBmcmllbmRzID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmZyaWVuZHMgPSBmcmllbmRzO1xuICAgICAgICAgICAgICAgIHRoaXMuZnJpZW5kU2VydmljZS5mcmllbmRzID0gZnJpZW5kcztcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvciA9PiB0aGlzLl9lcnJvclNlcnZpY2UuaGFuZGxlRXJyb3IoZXJyb3IpXG4gICAgICAgICk7XG4gIH1cblxuICBpc0xvZ2dlZEluKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYXV0aFNlcnZpY2UuaXNMb2dnZWRJbigpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
