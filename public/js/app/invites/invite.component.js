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
            template: "\n  <div *ngIf=\"isLoggedIn()\">\n\n    <h1> Select A Friend To Go With </h1>\n\n    <div style=\"border:1px solid\">\n      <h4> Current Friends </h4>\n      <ul *ngFor=\"let friend of friends\">\n        <li>\n            <span> Name: {{friend.firstName}}</span>\n        </li>\n      </ul>\n    </div>\n  </div>\n  ",
        }), 
        __metadata('design:paramtypes', [router_1.Router, auth_service_1.AuthService, invite_service_1.InviteService, error_service_1.ErrorService, friend_service_1.FriendService])
    ], InviteComponent);
    return InviteComponent;
}());
exports.InviteComponent = InviteComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludml0ZXMvaW52aXRlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXlDLGVBQWUsQ0FBQyxDQUFBO0FBRXpELDhCQUE2Qix5QkFBeUIsQ0FBQyxDQUFBO0FBQ3ZELHVCQUF1QixpQkFBaUIsQ0FBQyxDQUFBO0FBRXpDLCtCQUE0Qiw2QkFBNkIsQ0FBQyxDQUFBO0FBRzFELDZCQUEwQix3QkFBd0IsQ0FBQyxDQUFBO0FBQ25ELCtCQUE0QixrQkFBa0IsQ0FBQyxDQUFBO0FBcUIvQztJQUNFLHlCQUNVLE1BQWMsRUFDZCxZQUF5QixFQUN6QixhQUE0QixFQUM1QixhQUEyQixFQUMzQixhQUEyQjtRQUozQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsaUJBQVksR0FBWixZQUFZLENBQWE7UUFDekIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsa0JBQWEsR0FBYixhQUFhLENBQWM7UUFDM0Isa0JBQWEsR0FBYixhQUFhLENBQWM7SUFDakMsQ0FBQztJQUlMLGtDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVELG9DQUFVLEdBQVY7UUFBQSxpQkFTQztRQVJDLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFO2FBQzFCLFNBQVMsQ0FDTixVQUFBLE9BQU87WUFDSCxLQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztZQUN2QixLQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDekMsQ0FBQyxFQUNELFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQXJDLENBQXFDLENBQ2pELENBQUM7SUFDUixDQUFDO0lBRUQsb0NBQVUsR0FBVjtRQUNNLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzVDLENBQUM7SUEvQ0g7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFVBQVU7WUFDcEIsUUFBUSxFQUFFLGdVQWNUO1NBQ0YsQ0FBQzs7dUJBQUE7SUErQkYsc0JBQUM7QUFBRCxDQTdCQSxBQTZCQyxJQUFBO0FBN0JZLHVCQUFlLGtCQTZCM0IsQ0FBQSIsImZpbGUiOiJpbnZpdGVzL2ludml0ZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVzLCBST1VURVJfRElSRUNUSVZFUyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IEVycm9yU2VydmljZSB9IGZyb20gXCIuLi9lcnJvcnMvZXJyb3Iuc2VydmljZVwiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHtGcmllbmRTZXJ2aWNlfSBmcm9tIFwiLi8uLi9mcmllbmRzL2ZyaWVuZC5zZXJ2aWNlXCI7XG5pbXBvcnQge0ZyaWVuZH0gZnJvbSBcIi4vLi4vZnJpZW5kcy9mcmllbmRcIjtcbmltcG9ydCB7SW52aXRlfSBmcm9tIFwiLi9pbnZpdGVcIjtcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gXCIuLy4uL2F1dGgvYXV0aC5zZXJ2aWNlXCI7XG5pbXBvcnQge0ludml0ZVNlcnZpY2V9IGZyb20gXCIuL2ludml0ZS5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJteS1yZXN0c1wiLFxuICB0ZW1wbGF0ZTogYFxuICA8ZGl2ICpuZ0lmPVwiaXNMb2dnZWRJbigpXCI+XG5cbiAgICA8aDE+IFNlbGVjdCBBIEZyaWVuZCBUbyBHbyBXaXRoIDwvaDE+XG5cbiAgICA8ZGl2IHN0eWxlPVwiYm9yZGVyOjFweCBzb2xpZFwiPlxuICAgICAgPGg0PiBDdXJyZW50IEZyaWVuZHMgPC9oND5cbiAgICAgIDx1bCAqbmdGb3I9XCJsZXQgZnJpZW5kIG9mIGZyaWVuZHNcIj5cbiAgICAgICAgPGxpPlxuICAgICAgICAgICAgPHNwYW4+IE5hbWU6IHt7ZnJpZW5kLmZpcnN0TmFtZX19PC9zcGFuPlxuICAgICAgICA8L2xpPlxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIGAsXG59KVxuXG5leHBvcnQgY2xhc3MgSW52aXRlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgX2F1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICBwcml2YXRlIGludml0ZVNlcnZpY2U6IEludml0ZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBfZXJyb3JTZXJ2aWNlOiBFcnJvclNlcnZpY2UsXG4gICAgcHJpdmF0ZSBmcmllbmRTZXJ2aWNlOkZyaWVuZFNlcnZpY2VcbiAgKSB7IH1cblxuICBmcmllbmRzOiBGcmllbmRbXTtcblxuICBuZ09uSW5pdCgpe1xuICAgIHRoaXMuZ2V0RnJpZW5kcygpO1xuICB9XG5cbiAgZ2V0RnJpZW5kcygpe1xuICAgIHRoaXMuZnJpZW5kU2VydmljZS5nZXRGcmllbmRzKClcbiAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgIGZyaWVuZHMgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZnJpZW5kcyA9IGZyaWVuZHM7XG4gICAgICAgICAgICAgICAgdGhpcy5mcmllbmRTZXJ2aWNlLmZyaWVuZHMgPSBmcmllbmRzO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yID0+IHRoaXMuX2Vycm9yU2VydmljZS5oYW5kbGVFcnJvcihlcnJvcilcbiAgICAgICAgKTtcbiAgfVxuXG4gIGlzTG9nZ2VkSW4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hdXRoU2VydmljZS5pc0xvZ2dlZEluKCk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
