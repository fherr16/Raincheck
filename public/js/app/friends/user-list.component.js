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
var friend_service_1 = require("./friend.service");
var error_service_1 = require("../errors/error.service");
var UserListComponent = (function () {
    function UserListComponent(_friendService, _errorService) {
        this._friendService = _friendService;
        this._errorService = _errorService;
    }
    UserListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._friendService.getUsers()
            .subscribe(function (users) {
            _this.users = users;
            _this._friendService.users = users;
        }, function (error) { return _this._errorService.handleError(error); });
    };
    UserListComponent.prototype.onAdd = function (user) {
        var _this = this;
        this._friendService.addFriend(user)
            .subscribe(function (data) {
            console.log(data);
            _this._friendService.friends.push(data);
        }, function (error) { return _this._errorService.handleError(error); });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], UserListComponent.prototype, "friends", void 0);
    UserListComponent = __decorate([
        core_1.Component({
            selector: 'my-user-list',
            template: "\n        <section class=\"col-md-8 col-md-offset-2\">\n            <ul *ngFor=\"let user of users\">\n                <li>{{user.firstName}}<button class=\"btn btn-xs btn-primary\" (click)=\"onAdd(user)\" *ngIf=\"friends\">Add</button></li>\n            </ul>\n\n        </section>\n    "
        }), 
        __metadata('design:paramtypes', [friend_service_1.FriendService, error_service_1.ErrorService])
    ], UserListComponent);
    return UserListComponent;
}());
exports.UserListComponent = UserListComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZyaWVuZHMvdXNlci1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXlDLGVBQWUsQ0FBQyxDQUFBO0FBSXpELCtCQUE4QixrQkFBa0IsQ0FBQyxDQUFBO0FBQ2pELDhCQUE2Qix5QkFBeUIsQ0FBQyxDQUFBO0FBWXZEO0lBRUksMkJBQW9CLGNBQTZCLEVBQVUsYUFBMkI7UUFBbEUsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBYztJQUFHLENBQUM7SUFLMUYsb0NBQVEsR0FBUjtRQUFBLGlCQVNDO1FBUkcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUU7YUFDekIsU0FBUyxDQUNOLFVBQUEsS0FBSztZQUNELEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1lBQ25CLEtBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUN0QyxDQUFDLEVBQ0QsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBckMsQ0FBcUMsQ0FDakQsQ0FBQztJQUNWLENBQUM7SUFFRCxpQ0FBSyxHQUFMLFVBQU0sSUFBWTtRQUFsQixpQkFVQztRQVRHLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQzthQUM5QixTQUFTLENBQ0UsVUFBQSxJQUFJO1lBQ0EsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsQixLQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0MsQ0FBQyxFQUNELFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQXJDLENBQXFDLENBQ2pELENBQUM7SUFFbEIsQ0FBQztJQXhCRDtRQUFDLFlBQUssRUFBRTs7c0RBQUE7SUFmWjtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsY0FBYztZQUN4QixRQUFRLEVBQUUsa1NBT1Q7U0FDSixDQUFDOzt5QkFBQTtJQThCRix3QkFBQztBQUFELENBN0JBLEFBNkJDLElBQUE7QUE3QlkseUJBQWlCLG9CQTZCN0IsQ0FBQSIsImZpbGUiOiJmcmllbmRzL3VzZXItbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBGcmllbmRDb21wb25lbnQgfSBmcm9tIFwiLi9mcmllbmQuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBGcmllbmQgfSBmcm9tIFwiLi9mcmllbmRcIjtcbmltcG9ydCB7IEZyaWVuZFNlcnZpY2UgfSBmcm9tIFwiLi9mcmllbmQuc2VydmljZVwiO1xuaW1wb3J0IHsgRXJyb3JTZXJ2aWNlIH0gZnJvbSBcIi4uL2Vycm9ycy9lcnJvci5zZXJ2aWNlXCI7XG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LXVzZXItbGlzdCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJjb2wtbWQtOCBjb2wtbWQtb2Zmc2V0LTJcIj5cbiAgICAgICAgICAgIDx1bCAqbmdGb3I9XCJsZXQgdXNlciBvZiB1c2Vyc1wiPlxuICAgICAgICAgICAgICAgIDxsaT57e3VzZXIuZmlyc3ROYW1lfX08YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi14cyBidG4tcHJpbWFyeVwiIChjbGljayk9XCJvbkFkZCh1c2VyKVwiICpuZ0lmPVwiZnJpZW5kc1wiPkFkZDwvYnV0dG9uPjwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuXG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICBgXG59KVxuZXhwb3J0IGNsYXNzIFVzZXJMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2ZyaWVuZFNlcnZpY2U6IEZyaWVuZFNlcnZpY2UsIHByaXZhdGUgX2Vycm9yU2VydmljZTogRXJyb3JTZXJ2aWNlKSB7fVxuXG4gICAgQElucHV0KCkgZnJpZW5kczpGcmllbmRbXTtcbiAgICB1c2VyczogRnJpZW5kW107XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5fZnJpZW5kU2VydmljZS5nZXRVc2VycygpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgIHVzZXJzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51c2VycyA9IHVzZXJzO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9mcmllbmRTZXJ2aWNlLnVzZXJzID0gdXNlcnM7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB0aGlzLl9lcnJvclNlcnZpY2UuaGFuZGxlRXJyb3IoZXJyb3IpXG4gICAgICAgICAgICApO1xuICAgIH1cblxuICAgIG9uQWRkKHVzZXI6IEZyaWVuZCkge1xuICAgICAgICB0aGlzLl9mcmllbmRTZXJ2aWNlLmFkZEZyaWVuZCh1c2VyKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2ZyaWVuZFNlcnZpY2UuZnJpZW5kcy5wdXNoKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yID0+IHRoaXMuX2Vycm9yU2VydmljZS5oYW5kbGVFcnJvcihlcnJvcilcbiAgICAgICAgICAgICAgICAgICAgKTtcblxuICAgIH0gIFxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
