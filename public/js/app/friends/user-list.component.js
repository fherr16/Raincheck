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
var home_service_1 = require("./../home/home.service");
var error_service_1 = require("../errors/error.service");
var UserListComponent = (function () {
    function UserListComponent(_friendService, _homeService, _errorService) {
        this._friendService = _friendService;
        this._homeService = _homeService;
        this._errorService = _errorService;
    }
    UserListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._friendService.getFriends()
            .subscribe(function (friends) {
            _this.friends = friends;
            _this._friendService.friends = friends;
        }, function (error) { return _this._errorService.handleError(error); });
        this._friendService.getUsers()
            .subscribe(function (users) {
            _this.users = users;
            _this._friendService.users = users;
        }, function (error) { return _this._errorService.handleError(error); });
    };
    UserListComponent.prototype.onAdd = function (user) {
        var _this = this;
        var hasFriend = false, id = user.userId;
        for (var i = 0; i < this.friends.length; i++) {
            if (user.userId == this.friends[i].userId) {
                hasFriend = true;
                alert('You are already friends with this user!');
            }
        }
        if (!hasFriend) {
            this._homeService.addAction('test added test2', '123')
                .subscribe(function (data) {
                console.log(data);
                _this._homeService.actions.push(data);
            }, function (error) { return _this._errorService.handleError(error); });
            this._friendService.addFriend(user)
                .subscribe(function (data) {
                console.log(data);
                _this._friendService.friends.push(data);
            }, function (error) { return _this._errorService.handleError(error); });
        }
    };
    UserListComponent = __decorate([
        core_1.Component({
            selector: 'my-user-list',
            template: "\n        <div class=\"col-sm-8 col-sm-offset-2\">           \n            <table class=\"table table-hover\">\n                <thead>\n                    <tr>\n                        <th><u>First Name</u></th>\n                        <th><u>Action</u></th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let user of users\">\n                        <td>{{user.firstName}}</td>\n                        <td><button class=\"btn btn-xs btn-primary user-button\" (click)=\"onAdd(user)\" *ngIf=\"friends\">Add</button></td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n    ",
            styles: ["\n        .table>thead>tr>th {\n            border: none;\n        }\n\n        .table>tbody>tr>td {\n            border: none;\n        }\n\n        u {\n            color: blue;\n        }\n\n        .user-button {\n            margin-left: 3px;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [friend_service_1.FriendService, home_service_1.HomeService, error_service_1.ErrorService])
    ], UserListComponent);
    return UserListComponent;
}());
exports.UserListComponent = UserListComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZyaWVuZHMvdXNlci1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXlDLGVBQWUsQ0FBQyxDQUFBO0FBSXpELCtCQUE4QixrQkFBa0IsQ0FBQyxDQUFBO0FBQ2pELDZCQUE0Qix3QkFBd0IsQ0FBQyxDQUFBO0FBQ3JELDhCQUE2Qix5QkFBeUIsQ0FBQyxDQUFBO0FBdUN2RDtJQUVJLDJCQUFvQixjQUE2QixFQUFVLFlBQXlCLEVBQVUsYUFBMkI7UUFBckcsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFjO0lBQUcsQ0FBQztJQUs3SCxvQ0FBUSxHQUFSO1FBQUEsaUJBa0JDO1FBakJHLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxFQUFFO2FBQzNCLFNBQVMsQ0FDTixVQUFBLE9BQU87WUFDSCxLQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztZQUN2QixLQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDMUMsQ0FBQyxFQUNELFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQXJDLENBQXFDLENBQ2pELENBQUM7UUFFTixJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsRUFBRTthQUN6QixTQUFTLENBQ04sVUFBQSxLQUFLO1lBQ0QsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7WUFDbkIsS0FBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ3RDLENBQUMsRUFDRCxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxFQUFyQyxDQUFxQyxDQUNqRCxDQUFDO0lBQ1YsQ0FBQztJQUVELGlDQUFLLEdBQUwsVUFBTSxJQUFZO1FBQWxCLGlCQThCQztRQTdCRyxJQUFJLFNBQVMsR0FBRyxLQUFLLEVBQ2pCLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBRXJCLEdBQUcsQ0FBQSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUN6QyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDdkMsU0FBUyxHQUFHLElBQUksQ0FBQztnQkFDakIsS0FBSyxDQUFDLHlDQUF5QyxDQUFDLENBQUM7WUFDckQsQ0FBQztRQUNMLENBQUM7UUFFRCxFQUFFLENBQUEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDWixJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsRUFBRSxLQUFLLENBQUM7aUJBQ2pELFNBQVMsQ0FDTixVQUFBLElBQUk7Z0JBQ0EsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDbEIsS0FBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3pDLENBQUMsRUFDRCxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxFQUFyQyxDQUFxQyxDQUNqRCxDQUFDO1lBRU4sSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO2lCQUM5QixTQUFTLENBQ04sVUFBQSxJQUFJO2dCQUNBLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2xCLEtBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMzQyxDQUFDLEVBQ0QsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBckMsQ0FBcUMsQ0FDakQsQ0FBQztRQUNWLENBQUM7SUFDTCxDQUFDO0lBL0ZMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFFBQVEsRUFBRSxnckJBaUJUO1lBQ0QsTUFBTSxFQUFFLENBQUMsMFFBZ0JSLENBQUM7U0FDTCxDQUFDOzt5QkFBQTtJQTJERix3QkFBQztBQUFELENBMURBLEFBMERDLElBQUE7QUExRFkseUJBQWlCLG9CQTBEN0IsQ0FBQSIsImZpbGUiOiJmcmllbmRzL3VzZXItbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBGcmllbmRDb21wb25lbnQgfSBmcm9tIFwiLi9mcmllbmQuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBGcmllbmQgfSBmcm9tIFwiLi9mcmllbmRcIjtcbmltcG9ydCB7IEZyaWVuZFNlcnZpY2UgfSBmcm9tIFwiLi9mcmllbmQuc2VydmljZVwiO1xuaW1wb3J0IHsgSG9tZVNlcnZpY2UgfSBmcm9tIFwiLi8uLi9ob21lL2hvbWUuc2VydmljZVwiO1xuaW1wb3J0IHsgRXJyb3JTZXJ2aWNlIH0gZnJvbSBcIi4uL2Vycm9ycy9lcnJvci5zZXJ2aWNlXCI7XG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LXVzZXItbGlzdCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS04IGNvbC1zbS1vZmZzZXQtMlwiPiAgICAgICAgICAgXG4gICAgICAgICAgICA8dGFibGUgY2xhc3M9XCJ0YWJsZSB0YWJsZS1ob3ZlclwiPlxuICAgICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPjx1PkZpcnN0IE5hbWU8L3U+PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD48dT5BY3Rpb248L3U+PC90aD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgPHRyICpuZ0Zvcj1cImxldCB1c2VyIG9mIHVzZXJzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3t1c2VyLmZpcnN0TmFtZX19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi14cyBidG4tcHJpbWFyeSB1c2VyLWJ1dHRvblwiIChjbGljayk9XCJvbkFkZCh1c2VyKVwiICpuZ0lmPVwiZnJpZW5kc1wiPkFkZDwvYnV0dG9uPjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgIDwvZGl2PlxuICAgIGAsXG4gICAgc3R5bGVzOiBbYFxuICAgICAgICAudGFibGU+dGhlYWQ+dHI+dGgge1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgLnRhYmxlPnRib2R5PnRyPnRkIHtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHUge1xuICAgICAgICAgICAgY29sb3I6IGJsdWU7XG4gICAgICAgIH1cblxuICAgICAgICAudXNlci1idXR0b24ge1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDNweDtcbiAgICAgICAgfVxuICAgIGBdXG59KVxuZXhwb3J0IGNsYXNzIFVzZXJMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2ZyaWVuZFNlcnZpY2U6IEZyaWVuZFNlcnZpY2UsIHByaXZhdGUgX2hvbWVTZXJ2aWNlOiBIb21lU2VydmljZSwgcHJpdmF0ZSBfZXJyb3JTZXJ2aWNlOiBFcnJvclNlcnZpY2UpIHt9XG5cbiAgICBmcmllbmRzOiBGcmllbmRbXTtcbiAgICB1c2VyczogRnJpZW5kW107XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5fZnJpZW5kU2VydmljZS5nZXRGcmllbmRzKClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgZnJpZW5kcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZnJpZW5kcyA9IGZyaWVuZHM7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2ZyaWVuZFNlcnZpY2UuZnJpZW5kcyA9IGZyaWVuZHM7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB0aGlzLl9lcnJvclNlcnZpY2UuaGFuZGxlRXJyb3IoZXJyb3IpXG4gICAgICAgICAgICApO1xuXG4gICAgICAgIHRoaXMuX2ZyaWVuZFNlcnZpY2UuZ2V0VXNlcnMoKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICB1c2VycyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXNlcnMgPSB1c2VycztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZnJpZW5kU2VydmljZS51c2VycyA9IHVzZXJzO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gdGhpcy5fZXJyb3JTZXJ2aWNlLmhhbmRsZUVycm9yKGVycm9yKVxuICAgICAgICAgICAgKTtcbiAgICB9XG5cbiAgICBvbkFkZCh1c2VyOiBGcmllbmQpIHtcbiAgICAgICAgdmFyIGhhc0ZyaWVuZCA9IGZhbHNlLFxuICAgICAgICAgICAgaWQgPSB1c2VyLnVzZXJJZDtcblxuICAgICAgICBmb3IodmFyIGkgPSAwO2kgPCB0aGlzLmZyaWVuZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmKHVzZXIudXNlcklkID09IHRoaXMuZnJpZW5kc1tpXS51c2VySWQpIHtcbiAgICAgICAgICAgICAgICBoYXNGcmllbmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGFsZXJ0KCdZb3UgYXJlIGFscmVhZHkgZnJpZW5kcyB3aXRoIHRoaXMgdXNlciEnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmKCFoYXNGcmllbmQpIHtcbiAgICAgICAgICAgIHRoaXMuX2hvbWVTZXJ2aWNlLmFkZEFjdGlvbigndGVzdCBhZGRlZCB0ZXN0MicsICcxMjMnKVxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgICAgIGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9ob21lU2VydmljZS5hY3Rpb25zLnB1c2goZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGVycm9yID0+IHRoaXMuX2Vycm9yU2VydmljZS5oYW5kbGVFcnJvcihlcnJvcilcbiAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICB0aGlzLl9mcmllbmRTZXJ2aWNlLmFkZEZyaWVuZCh1c2VyKVxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgICAgIGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9mcmllbmRTZXJ2aWNlLmZyaWVuZHMucHVzaChkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IgPT4gdGhpcy5fZXJyb3JTZXJ2aWNlLmhhbmRsZUVycm9yKGVycm9yKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgIH0gICAgIFxuICAgIH0gIFxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
