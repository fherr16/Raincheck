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
var rest_service_1 = require("../rest/rest.service");
var friend_service_1 = require("./../friends/friend.service");
var invite_1 = require("./invite");
var auth_service_1 = require("./../auth/auth.service");
var invite_service_1 = require("./invite.service");
var InviteComponent = (function () {
    function InviteComponent(router, _authService, inviteService, _errorService, friendService, restService) {
        this.router = router;
        this._authService = _authService;
        this.inviteService = inviteService;
        this._errorService = _errorService;
        this.friendService = friendService;
        this.restService = restService;
    }
    InviteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getFriends();
        this.inviteService.get(localStorage.getItem('userId'))
            .subscribe(function (invites) { return _this.invites = invites; }, function (error) { return _this._errorService = error; });
        this.restService.getSingleRest(localStorage.getItem('restID'))
            .subscribe(function (selectedRest) { return _this.selectedRest = selectedRest; }, function (error) { return _this._errorService = error; });
    };
    InviteComponent.prototype.selectFriend = function (friend) {
        this.selectedFriend = friend;
    };
    InviteComponent.prototype.createInvite = function (date, time) {
        var _this = this;
        console.log(this.selectedRest);
        var timeAndDate = date + " " + time;
        var invite = new invite_1.Invite(localStorage.getItem('userId'), this.selectedFriend.userId, this.selectedRest.name, this.selectedRest.address, timeAndDate);
        this.inviteService.create(invite)
            .subscribe(function (data) {
            console.log(data);
            if (data.message == "Success") {
                _this.invites.push(invite);
            }
        }, function (error) { return _this._errorService.handleError(error); });
    };
    InviteComponent.prototype.getFriends = function () {
        var _this = this;
        this.friendService.getFriends()
            .subscribe(function (friends) {
            _this.friends = friends;
            _this.friendService.friends = friends;
        }, function (error) { return _this._errorService.handleError(error); });
    };
    InviteComponent.prototype.delete = function (id, invite) {
        var _this = this;
        this.inviteService.delete(id)
            .subscribe(function (data) {
            console.log(data);
            if (data.message == "Success") {
                _this.invites.splice(_this.invites.indexOf(invite), 1);
            }
        }, function (error) { return _this._errorService.handleError(error); });
    };
    InviteComponent.prototype.isLoggedIn = function () {
        return this._authService.isLoggedIn();
    };
    InviteComponent = __decorate([
        core_1.Component({
            selector: "my-rests",
            template: "\n  <div *ngIf=\"isLoggedIn()\">\n\n    <h1> Select A Friend To Go With </h1>\n\n    <div style=\"border:1px solid\">\n      <h4> Current Friends </h4>\n      <ul *ngFor=\"let friend of friends\">\n        <li (click)=\"selectFriend(friend)\">\n            <span> Name: {{friend.firstName}}</span>\n        </li>\n      </ul>\n    </div>\n\n    <div style=\"border:1px solid\">\n      <h4> Current invites In DB</h4>\n      <ul *ngFor=\"let invite of invites\">\n        <li>\n            <span> UserID: {{invite.userId}}</span>\n            <span> FriendID: {{invite.friendId}}</span>\n            <span> RestName: {{invite.restName}}</span>\n            <span> RestAddress: {{invite.restAddress}}</span>\n            <span> Time And Date: {{invite.timeAndDate}}</span>\n            <button (click)=\"delete(invite._id, invite)\">Delete</button>\n        </li>\n      </ul>\n    </div>\n\n    <div *ngIf=\"selectedFriend\">\n      <p>Date: <input type=\"date\" #Date></p>\n      <p>Time: <input type = \"time\" #Time></p>\n      <button (click)=\"createInvite(Date.value, Time.value)\">\n        Send Invite\n      </button>\n    </div>\n  </div>\n  ",
        }), 
        __metadata('design:paramtypes', [router_1.Router, auth_service_1.AuthService, invite_service_1.InviteService, error_service_1.ErrorService, friend_service_1.FriendService, rest_service_1.RestService])
    ], InviteComponent);
    return InviteComponent;
}());
exports.InviteComponent = InviteComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludml0ZXMvaW52aXRlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXlDLGVBQWUsQ0FBQyxDQUFBO0FBRXpELDhCQUE2Qix5QkFBeUIsQ0FBQyxDQUFBO0FBQ3ZELHVCQUF1QixpQkFBaUIsQ0FBQyxDQUFBO0FBR3pDLDZCQUEwQixzQkFDMUIsQ0FBQyxDQUQrQztBQUNoRCwrQkFBNEIsNkJBQTZCLENBQUMsQ0FBQTtBQUUxRCx1QkFBcUIsVUFBVSxDQUFDLENBQUE7QUFDaEMsNkJBQTBCLHdCQUF3QixDQUFDLENBQUE7QUFDbkQsK0JBQTRCLGtCQUFrQixDQUFDLENBQUE7QUEyQy9DO0lBQ0UseUJBQ1UsTUFBYyxFQUNkLFlBQXlCLEVBQ3pCLGFBQTRCLEVBQzVCLGFBQTJCLEVBQzNCLGFBQTJCLEVBQzNCLFdBQXVCO1FBTHZCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUN6QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixrQkFBYSxHQUFiLGFBQWEsQ0FBYztRQUMzQixrQkFBYSxHQUFiLGFBQWEsQ0FBYztRQUMzQixnQkFBVyxHQUFYLFdBQVcsQ0FBWTtJQUM3QixDQUFDO0lBT0wsa0NBQVEsR0FBUjtRQUFBLGlCQWNDO1FBYkMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBRWxCLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDckQsU0FBUyxDQUNSLFVBQUEsT0FBTyxJQUFJLE9BQUEsS0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLEVBQXRCLENBQXNCLEVBQ2pDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLGFBQWEsR0FBUSxLQUFLLEVBQS9CLENBQStCLENBQ3hDLENBQUM7UUFFSCxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsT0FB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RixzQkFBQztBQUFELENBcEZBLEFBb0ZDLElBQUE7QUFwRlksdUJBQWUsa0JBb0YzQixDQUFBIiwiZmlsZSI6Imludml0ZXMvaW52aXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXMsIFJPVVRFUl9ESVJFQ1RJVkVTIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgRXJyb3JTZXJ2aWNlIH0gZnJvbSBcIi4uL2Vycm9ycy9lcnJvci5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQge1Jlc3R9IGZyb20gXCIuLi9yZXN0L3Jlc3RcIlxuaW1wb3J0IHtSZXN0U2VydmljZX0gZnJvbSBcIi4uL3Jlc3QvcmVzdC5zZXJ2aWNlXCJcbmltcG9ydCB7RnJpZW5kU2VydmljZX0gZnJvbSBcIi4vLi4vZnJpZW5kcy9mcmllbmQuc2VydmljZVwiO1xuaW1wb3J0IHtGcmllbmR9IGZyb20gXCIuLy4uL2ZyaWVuZHMvZnJpZW5kXCI7XG5pbXBvcnQge0ludml0ZX0gZnJvbSBcIi4vaW52aXRlXCI7XG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tIFwiLi8uLi9hdXRoL2F1dGguc2VydmljZVwiO1xuaW1wb3J0IHtJbnZpdGVTZXJ2aWNlfSBmcm9tIFwiLi9pbnZpdGUuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibXktcmVzdHNcIixcbiAgdGVtcGxhdGU6IGBcbiAgPGRpdiAqbmdJZj1cImlzTG9nZ2VkSW4oKVwiPlxuXG4gICAgPGgxPiBTZWxlY3QgQSBGcmllbmQgVG8gR28gV2l0aCA8L2gxPlxuXG4gICAgPGRpdiBzdHlsZT1cImJvcmRlcjoxcHggc29saWRcIj5cbiAgICAgIDxoND4gQ3VycmVudCBGcmllbmRzIDwvaDQ+XG4gICAgICA8dWwgKm5nRm9yPVwibGV0IGZyaWVuZCBvZiBmcmllbmRzXCI+XG4gICAgICAgIDxsaSAoY2xpY2spPVwic2VsZWN0RnJpZW5kKGZyaWVuZClcIj5cbiAgICAgICAgICAgIDxzcGFuPiBOYW1lOiB7e2ZyaWVuZC5maXJzdE5hbWV9fTwvc3Bhbj5cbiAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IHN0eWxlPVwiYm9yZGVyOjFweCBzb2xpZFwiPlxuICAgICAgPGg0PiBDdXJyZW50IGludml0ZXMgSW4gREI8L2g0PlxuICAgICAgPHVsICpuZ0Zvcj1cImxldCBpbnZpdGUgb2YgaW52aXRlc1wiPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgICA8c3Bhbj4gVXNlcklEOiB7e2ludml0ZS51c2VySWR9fTwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuPiBGcmllbmRJRDoge3tpbnZpdGUuZnJpZW5kSWR9fTwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuPiBSZXN0TmFtZToge3tpbnZpdGUucmVzdE5hbWV9fTwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuPiBSZXN0QWRkcmVzczoge3tpbnZpdGUucmVzdEFkZHJlc3N9fTwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuPiBUaW1lIEFuZCBEYXRlOiB7e2ludml0ZS50aW1lQW5kRGF0ZX19PC9zcGFuPlxuICAgICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwiZGVsZXRlKGludml0ZS5faWQsIGludml0ZSlcIj5EZWxldGU8L2J1dHRvbj5cbiAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2ICpuZ0lmPVwic2VsZWN0ZWRGcmllbmRcIj5cbiAgICAgIDxwPkRhdGU6IDxpbnB1dCB0eXBlPVwiZGF0ZVwiICNEYXRlPjwvcD5cbiAgICAgIDxwPlRpbWU6IDxpbnB1dCB0eXBlID0gXCJ0aW1lXCIgI1RpbWU+PC9wPlxuICAgICAgPGJ1dHRvbiAoY2xpY2spPVwiY3JlYXRlSW52aXRlKERhdGUudmFsdWUsIFRpbWUudmFsdWUpXCI+XG4gICAgICAgIFNlbmQgSW52aXRlXG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIGAsXG59KVxuXG5leHBvcnQgY2xhc3MgSW52aXRlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgX2F1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICBwcml2YXRlIGludml0ZVNlcnZpY2U6IEludml0ZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBfZXJyb3JTZXJ2aWNlOiBFcnJvclNlcnZpY2UsXG4gICAgcHJpdmF0ZSBmcmllbmRTZXJ2aWNlOkZyaWVuZFNlcnZpY2UsXG4gICAgcHJpdmF0ZSByZXN0U2VydmljZTpSZXN0U2VydmljZVxuICApIHsgfVxuXG4gIGZyaWVuZHM6IEZyaWVuZFtdO1xuICBzZWxlY3RlZEZyaWVuZDogRnJpZW5kO1xuICBzZWxlY3RlZFJlc3Q6UmVzdDtcbiAgaW52aXRlczogSW52aXRlW107XG5cbiAgbmdPbkluaXQoKXtcbiAgICB0aGlzLmdldEZyaWVuZHMoKTtcblxuICAgIHRoaXMuaW52aXRlU2VydmljZS5nZXQobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJJZCcpKVxuICAgIC5zdWJzY3JpYmUoXG4gICAgICBpbnZpdGVzID0+IHRoaXMuaW52aXRlcyA9IGludml0ZXMsXG4gICAgICBlcnJvciA9PiB0aGlzLl9lcnJvclNlcnZpY2UgPSA8YW55PmVycm9yXG4gICAgICk7XG5cbiAgICB0aGlzLnJlc3RTZXJ2aWNlLmdldFNpbmdsZVJlc3QobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Jlc3RJRCcpKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgc2VsZWN0ZWRSZXN0ID0+IHRoaXMuc2VsZWN0ZWRSZXN0ID0gc2VsZWN0ZWRSZXN0LFxuICAgICAgICBlcnJvciA9PiB0aGlzLl9lcnJvclNlcnZpY2UgPSA8YW55PmVycm9yXG4gICAgICApO1xuICB9XG5cbiAgc2VsZWN0RnJpZW5kKGZyaWVuZDogRnJpZW5kKXtcbiAgICB0aGlzLnNlbGVjdGVkRnJpZW5kID0gZnJpZW5kO1xuICB9XG5cbiAgY3JlYXRlSW52aXRlKGRhdGU6U3RyaW5nLCB0aW1lOlN0cmluZylcbiAge1xuICAgIGNvbnNvbGUubG9nKHRoaXMuc2VsZWN0ZWRSZXN0KTtcbiAgICBjb25zdCB0aW1lQW5kRGF0ZSA9IGRhdGUrXCIgXCIrdGltZTtcbiAgICBjb25zdCBpbnZpdGUgPSBuZXcgSW52aXRlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VySWQnKSwgdGhpcy5zZWxlY3RlZEZyaWVuZC51c2VySWQsIHRoaXMuc2VsZWN0ZWRSZXN0Lm5hbWUsIHRoaXMuc2VsZWN0ZWRSZXN0LmFkZHJlc3MsIHRpbWVBbmREYXRlKTtcbiAgICB0aGlzLmludml0ZVNlcnZpY2UuY3JlYXRlKGludml0ZSlcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgZGF0YSA9PlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgICAgICAgICBpZihkYXRhLm1lc3NhZ2UgPT0gXCJTdWNjZXNzXCIpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRoaXMuaW52aXRlcy5wdXNoKGludml0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBlcnJvciA9PiB0aGlzLl9lcnJvclNlcnZpY2UuaGFuZGxlRXJyb3IoZXJyb3IpXG4gICAgICApXG4gIH1cblxuICBnZXRGcmllbmRzKCl7XG4gICAgdGhpcy5mcmllbmRTZXJ2aWNlLmdldEZyaWVuZHMoKVxuICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgZnJpZW5kcyA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5mcmllbmRzID0gZnJpZW5kcztcbiAgICAgICAgICAgICAgICB0aGlzLmZyaWVuZFNlcnZpY2UuZnJpZW5kcyA9IGZyaWVuZHM7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3IgPT4gdGhpcy5fZXJyb3JTZXJ2aWNlLmhhbmRsZUVycm9yKGVycm9yKVxuICAgICAgICApO1xuICB9XG5cbiAgZGVsZXRlKGlkOiBTdHJpbmcsIGludml0ZTogSW52aXRlKTp2b2lkXG4gIHtcbiAgICB0aGlzLmludml0ZVNlcnZpY2UuZGVsZXRlKGlkKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgZGF0YSA9PlxuICAgICAgICB7XG4gICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICAgICAgICBpZihkYXRhLm1lc3NhZ2UgPT0gXCJTdWNjZXNzXCIpXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5pbnZpdGVzLnNwbGljZSh0aGlzLmludml0ZXMuaW5kZXhPZihpbnZpdGUpLCAxKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yID0+IHRoaXMuX2Vycm9yU2VydmljZS5oYW5kbGVFcnJvcihlcnJvcilcbiAgICAgIClcbiAgfVxuXG4gIGlzTG9nZ2VkSW4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hdXRoU2VydmljZS5pc0xvZ2dlZEluKCk7XG4gIH1cbn1cbiJdfQ==
