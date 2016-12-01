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
            template: "\n  <div *ngIf=\"isLoggedIn()\">\n\n    <h1>When Do You Want To Go?</h1>\n\n    <div style=\"border:1px solid\">\n      <h4> Select a Time and Date </h4>\n    </div>\n\n  </div>\n  ",
        }), 
        __metadata('design:paramtypes', [router_1.Router, auth_service_1.AuthService, invite_service_1.InviteService, error_service_1.ErrorService, friend_service_1.FriendService])
    ], InviteComponent);
    return InviteComponent;
}());
exports.InviteComponent = InviteComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludml0ZXMvdGltZUFuZERhdGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUMsZUFBZSxDQUFDLENBQUE7QUFFekQsOEJBQTZCLHlCQUF5QixDQUFDLENBQUE7QUFDdkQsdUJBQXVCLGlCQUFpQixDQUFDLENBQUE7QUFFekMsK0JBQTRCLDZCQUE2QixDQUFDLENBQUE7QUFHMUQsNkJBQTBCLHdCQUF3QixDQUFDLENBQUE7QUFDbkQsK0JBQTRCLGtCQUFrQixDQUFDLENBQUE7QUFpQi9DO0lBQ0UseUJBQ1UsTUFBYyxFQUNkLFlBQXlCLEVBQ3pCLGFBQTRCLEVBQzVCLGFBQTJCLEVBQzNCLGFBQTJCO1FBSjNCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUN6QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixrQkFBYSxHQUFiLGFBQWEsQ0FBYztRQUMzQixrQkFBYSxHQUFiLGFBQWEsQ0FBYztJQUNqQyxDQUFDO0lBSUwsa0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRUQsb0NBQVUsR0FBVjtRQUFBLGlCQVNDO1FBUkMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUU7YUFDMUIsU0FBUyxDQUNOLFVBQUEsT0FBTztZQUNILEtBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1lBQ3ZCLEtBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN6QyxDQUFDLEVBQ0QsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBckMsQ0FBcUMsQ0FDakQsQ0FBQztJQUNSLENBQUM7SUFFRCxvQ0FBVSxHQUFWO1FBQ00sTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDNUMsQ0FBQztJQTNDSDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsVUFBVTtZQUNwQixRQUFRLEVBQUUsdUxBVVQ7U0FDRixDQUFDOzt1QkFBQTtJQStCRixzQkFBQztBQUFELENBN0JBLEFBNkJDLElBQUE7QUE3QlksdUJBQWUsa0JBNkIzQixDQUFBIiwiZmlsZSI6Imludml0ZXMvdGltZUFuZERhdGUuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlcywgUk9VVEVSX0RJUkVDVElWRVMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBFcnJvclNlcnZpY2UgfSBmcm9tIFwiLi4vZXJyb3JzL2Vycm9yLnNlcnZpY2VcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7RnJpZW5kU2VydmljZX0gZnJvbSBcIi4vLi4vZnJpZW5kcy9mcmllbmQuc2VydmljZVwiO1xuaW1wb3J0IHtGcmllbmR9IGZyb20gXCIuLy4uL2ZyaWVuZHMvZnJpZW5kXCI7XG5pbXBvcnQge0ludml0ZX0gZnJvbSBcIi4vaW52aXRlXCI7XG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tIFwiLi8uLi9hdXRoL2F1dGguc2VydmljZVwiO1xuaW1wb3J0IHtJbnZpdGVTZXJ2aWNlfSBmcm9tIFwiLi9pbnZpdGUuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibXktcmVzdHNcIixcbiAgdGVtcGxhdGU6IGBcbiAgPGRpdiAqbmdJZj1cImlzTG9nZ2VkSW4oKVwiPlxuXG4gICAgPGgxPldoZW4gRG8gWW91IFdhbnQgVG8gR28/PC9oMT5cblxuICAgIDxkaXYgc3R5bGU9XCJib3JkZXI6MXB4IHNvbGlkXCI+XG4gICAgICA8aDQ+IFNlbGVjdCBhIFRpbWUgYW5kIERhdGUgPC9oND5cbiAgICA8L2Rpdj5cblxuICA8L2Rpdj5cbiAgYCxcbn0pXG5cbmV4cG9ydCBjbGFzcyBJbnZpdGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSBfYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuICAgIHByaXZhdGUgaW52aXRlU2VydmljZTogSW52aXRlU2VydmljZSxcbiAgICBwcml2YXRlIF9lcnJvclNlcnZpY2U6IEVycm9yU2VydmljZSxcbiAgICBwcml2YXRlIGZyaWVuZFNlcnZpY2U6RnJpZW5kU2VydmljZVxuICApIHsgfVxuXG4gIGZyaWVuZHM6IEZyaWVuZFtdO1xuXG4gIG5nT25Jbml0KCl7XG4gICAgdGhpcy5nZXRGcmllbmRzKCk7XG4gIH1cblxuICBnZXRGcmllbmRzKCl7XG4gICAgdGhpcy5mcmllbmRTZXJ2aWNlLmdldEZyaWVuZHMoKVxuICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgZnJpZW5kcyA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5mcmllbmRzID0gZnJpZW5kcztcbiAgICAgICAgICAgICAgICB0aGlzLmZyaWVuZFNlcnZpY2UuZnJpZW5kcyA9IGZyaWVuZHM7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3IgPT4gdGhpcy5fZXJyb3JTZXJ2aWNlLmhhbmRsZUVycm9yKGVycm9yKVxuICAgICAgICApO1xuICB9XG5cbiAgaXNMb2dnZWRJbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2F1dGhTZXJ2aWNlLmlzTG9nZ2VkSW4oKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
