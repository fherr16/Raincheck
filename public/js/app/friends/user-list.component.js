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
    UserListComponent.prototype.onAdd = function (friend) {
        var _this = this;
        var hasFriend = false, friendId = friend.userId, user;
        this._friendService.getUser(localStorage.getItem('userId'))
            .subscribe(function (data) {
            user = data;
            for (var i = 0; i < _this.friends.length; i++) {
                if (friendId == _this.friends[i].userId) {
                    hasFriend = true;
                    alert('You are already friends with this user!');
                }
            }
            if (!hasFriend) {
                _this._homeService.addAction('added', 123, user, friend)
                    .subscribe(function (data) {
                    console.log(data);
                    _this._homeService.actions.push(data);
                }, function (error) { return _this._errorService.handleError(error); });
                _this._friendService.addFriend(friend)
                    .subscribe(function (data) {
                    console.log(data);
                    _this._friendService.friends.push(data);
                }, function (error) { return _this._errorService.handleError(error); });
            }
        });
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZyaWVuZHMvdXNlci1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXlDLGVBQWUsQ0FBQyxDQUFBO0FBSXpELCtCQUE4QixrQkFBa0IsQ0FBQyxDQUFBO0FBQ2pELDZCQUE0Qix3QkFBd0IsQ0FBQyxDQUFBO0FBQ3JELDhCQUE2Qix5QkFBeUIsQ0FBQyxDQUFBO0FBdUN2RDtJQUVJLDJCQUFvQixjQUE2QixFQUFVLFlBQXlCLEVBQVUsYUFBMkI7UUFBckcsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFjO0lBQUcsQ0FBQztJQUs3SCxvQ0FBUSxHQUFSO1FBQUEsaUJBa0JDO1FBakJHLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxFQUFFO2FBQzNCLFNBQVMsQ0FDTixVQUFBLE9BQU87WUFDSCxLQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztZQUN2QixLQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDMUMsQ0FBQyxFQUNELFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQXJDLENBQXFDLENBQ2pELENBQUM7UUFFTixJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsRUFBRTthQUN6QixTQUFTLENBQ04sVUFBQSxLQUFLO1lBQ0QsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7WUFDbkIsS0FBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ3RDLENBQUMsRUFDRCxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxFQUFyQyxDQUFxQyxDQUNqRCxDQUFDO0lBQ1YsQ0FBQztJQUVELGlDQUFLLEdBQUwsVUFBTSxNQUFjO1FBQXBCLGlCQXFDSztRQXBDRCxJQUFJLFNBQVMsR0FBRyxLQUFLLEVBQ2pCLFFBQVEsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUN4QixJQUFJLENBQUM7UUFFVCxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQ3RELFNBQVMsQ0FDTixVQUFBLElBQUk7WUFDQSxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBRVosR0FBRyxDQUFBLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUMsR0FBRyxLQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUN6QyxFQUFFLENBQUEsQ0FBQyxRQUFRLElBQUksS0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO29CQUNwQyxTQUFTLEdBQUcsSUFBSSxDQUFDO29CQUNqQixLQUFLLENBQUMseUNBQXlDLENBQUMsQ0FBQztnQkFDckQsQ0FBQztZQUNMLENBQUM7WUFFRCxFQUFFLENBQUEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7Z0JBQ1osS0FBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDO3FCQUNsRCxTQUFTLENBQ04sVUFBQSxJQUFJO29CQUNBLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ2xCLEtBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDekMsQ0FBQyxFQUNELFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQXJDLENBQXFDLENBQ2pELENBQUM7Z0JBRU4sS0FBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDO3FCQUNoQyxTQUFTLENBQ04sVUFBQSxJQUFJO29CQUNBLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ2xCLEtBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDM0MsQ0FBQyxFQUNELFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQXJDLENBQXFDLENBQ2pELENBQUM7WUFDVixDQUFDO1FBQ1QsQ0FEUyxBQUNSLENBQUEsQ0FBQztJQUNOLENBQUM7SUF0R1Q7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGNBQWM7WUFDeEIsUUFBUSxFQUFFLGdyQkFpQlQ7WUFDRCxNQUFNLEVBQUUsQ0FBQywwUUFnQlIsQ0FBQztTQUNMLENBQUM7O3lCQUFBO0lBa0VFLHdCQUFDO0FBQUQsQ0FqRUosQUFpRUssSUFBQTtBQWpFUSx5QkFBaUIsb0JBaUV6QixDQUFBIiwiZmlsZSI6ImZyaWVuZHMvdXNlci1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IEZyaWVuZENvbXBvbmVudCB9IGZyb20gXCIuL2ZyaWVuZC5jb21wb25lbnRcIjtcbmltcG9ydCB7IEZyaWVuZCB9IGZyb20gXCIuL2ZyaWVuZFwiO1xuaW1wb3J0IHsgRnJpZW5kU2VydmljZSB9IGZyb20gXCIuL2ZyaWVuZC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBIb21lU2VydmljZSB9IGZyb20gXCIuLy4uL2hvbWUvaG9tZS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBFcnJvclNlcnZpY2UgfSBmcm9tIFwiLi4vZXJyb3JzL2Vycm9yLnNlcnZpY2VcIjtcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktdXNlci1saXN0JyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTggY29sLXNtLW9mZnNldC0yXCI+ICAgICAgICAgICBcbiAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cInRhYmxlIHRhYmxlLWhvdmVyXCI+XG4gICAgICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+PHU+Rmlyc3QgTmFtZTwvdT48L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPjx1PkFjdGlvbjwvdT48L3RoPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICA8dHIgKm5nRm9yPVwibGV0IHVzZXIgb2YgdXNlcnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57e3VzZXIuZmlyc3ROYW1lfX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxidXR0b24gY2xhc3M9XCJidG4gYnRuLXhzIGJ0bi1wcmltYXJ5IHVzZXItYnV0dG9uXCIgKGNsaWNrKT1cIm9uQWRkKHVzZXIpXCIgKm5nSWY9XCJmcmllbmRzXCI+QWRkPC9idXR0b24+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcbiAgICBzdHlsZXM6IFtgXG4gICAgICAgIC50YWJsZT50aGVhZD50cj50aCB7XG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICAudGFibGU+dGJvZHk+dHI+dGQge1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgdSB7XG4gICAgICAgICAgICBjb2xvcjogYmx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC51c2VyLWJ1dHRvbiB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogM3B4O1xuICAgICAgICB9XG4gICAgYF1cbn0pXG5leHBvcnQgY2xhc3MgVXNlckxpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfZnJpZW5kU2VydmljZTogRnJpZW5kU2VydmljZSwgcHJpdmF0ZSBfaG9tZVNlcnZpY2U6IEhvbWVTZXJ2aWNlLCBwcml2YXRlIF9lcnJvclNlcnZpY2U6IEVycm9yU2VydmljZSkge31cblxuICAgIGZyaWVuZHM6IEZyaWVuZFtdO1xuICAgIHVzZXJzOiBGcmllbmRbXTtcblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLl9mcmllbmRTZXJ2aWNlLmdldEZyaWVuZHMoKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICBmcmllbmRzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mcmllbmRzID0gZnJpZW5kcztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZnJpZW5kU2VydmljZS5mcmllbmRzID0gZnJpZW5kcztcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yID0+IHRoaXMuX2Vycm9yU2VydmljZS5oYW5kbGVFcnJvcihlcnJvcilcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5fZnJpZW5kU2VydmljZS5nZXRVc2VycygpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgIHVzZXJzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51c2VycyA9IHVzZXJzO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9mcmllbmRTZXJ2aWNlLnVzZXJzID0gdXNlcnM7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB0aGlzLl9lcnJvclNlcnZpY2UuaGFuZGxlRXJyb3IoZXJyb3IpXG4gICAgICAgICAgICApO1xuICAgIH1cblxuICAgIG9uQWRkKGZyaWVuZDogRnJpZW5kKSB7XG4gICAgICAgIHZhciBoYXNGcmllbmQgPSBmYWxzZSxcbiAgICAgICAgICAgIGZyaWVuZElkID0gZnJpZW5kLnVzZXJJZCxcbiAgICAgICAgICAgIHVzZXI7XG5cbiAgICAgICAgdGhpcy5fZnJpZW5kU2VydmljZS5nZXRVc2VyKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VySWQnKSlcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHVzZXIgPSBkYXRhO1xuXG4gICAgICAgICAgICAgICAgICAgIGZvcih2YXIgaSA9IDA7aSA8IHRoaXMuZnJpZW5kcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoZnJpZW5kSWQgPT0gdGhpcy5mcmllbmRzW2ldLnVzZXJJZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhc0ZyaWVuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ1lvdSBhcmUgYWxyZWFkeSBmcmllbmRzIHdpdGggdGhpcyB1c2VyIScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYoIWhhc0ZyaWVuZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5faG9tZVNlcnZpY2UuYWRkQWN0aW9uKCdhZGRlZCcsIDEyMywgdXNlciwgZnJpZW5kKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9ob21lU2VydmljZS5hY3Rpb25zLnB1c2goZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yID0+IHRoaXMuX2Vycm9yU2VydmljZS5oYW5kbGVFcnJvcihlcnJvcilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9mcmllbmRTZXJ2aWNlLmFkZEZyaWVuZChmcmllbmQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2ZyaWVuZFNlcnZpY2UuZnJpZW5kcy5wdXNoKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvciA9PiB0aGlzLl9lcnJvclNlcnZpY2UuaGFuZGxlRXJyb3IoZXJyb3IpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfSAgICAgXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfSAgXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
