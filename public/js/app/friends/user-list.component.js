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
    UserListComponent = __decorate([
        core_1.Component({
            selector: 'my-user-list',
            template: "\n        <section class=\"col-md-8 col-md-offset-2\">\n            <ul *ngFor=\"let user of users\">\n                <li>{{user.firstName}}</li>\n            </ul>\n\n        </section>\n    ",
            directives: [friend_component_1.FriendComponent]
        }), 
        __metadata('design:paramtypes', [friend_service_1.FriendService, error_service_1.ErrorService])
    ], UserListComponent);
    return UserListComponent;
}());
exports.UserListComponent = UserListComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZyaWVuZHMvdXNlci1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWtDLGVBQWUsQ0FBQyxDQUFBO0FBRWxELGlDQUFnQyxvQkFBb0IsQ0FBQyxDQUFBO0FBRXJELCtCQUE4QixrQkFBa0IsQ0FBQyxDQUFBO0FBQ2pELDhCQUE2Qix5QkFBeUIsQ0FBQyxDQUFBO0FBYXZEO0lBRUksMkJBQW9CLGNBQTZCLEVBQVUsYUFBMkI7UUFBbEUsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBYztJQUFHLENBQUM7SUFJMUYsb0NBQVEsR0FBUjtRQUFBLGlCQVNDO1FBUkcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUU7YUFDekIsU0FBUyxDQUNOLFVBQUEsS0FBSztZQUNELEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1lBQ25CLEtBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUN0QyxDQUFDLEVBQ0QsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBckMsQ0FBcUMsQ0FDakQsQ0FBQztJQUNWLENBQUM7SUEzQkw7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGNBQWM7WUFDeEIsUUFBUSxFQUFFLG1NQU9UO1lBQ0QsVUFBVSxFQUFFLENBQUMsa0NBQWUsQ0FBQztTQUNoQyxDQUFDOzt5QkFBQTtJQWlCRix3QkFBQztBQUFELENBaEJBLEFBZ0JDLElBQUE7QUFoQlkseUJBQWlCLG9CQWdCN0IsQ0FBQSIsImZpbGUiOiJmcmllbmRzL3VzZXItbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IEZyaWVuZENvbXBvbmVudCB9IGZyb20gXCIuL2ZyaWVuZC5jb21wb25lbnRcIjtcbmltcG9ydCB7IEZyaWVuZCB9IGZyb20gXCIuL2ZyaWVuZFwiO1xuaW1wb3J0IHsgRnJpZW5kU2VydmljZSB9IGZyb20gXCIuL2ZyaWVuZC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBFcnJvclNlcnZpY2UgfSBmcm9tIFwiLi4vZXJyb3JzL2Vycm9yLnNlcnZpY2VcIjtcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktdXNlci1saXN0JyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cImNvbC1tZC04IGNvbC1tZC1vZmZzZXQtMlwiPlxuICAgICAgICAgICAgPHVsICpuZ0Zvcj1cImxldCB1c2VyIG9mIHVzZXJzXCI+XG4gICAgICAgICAgICAgICAgPGxpPnt7dXNlci5maXJzdE5hbWV9fTwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuXG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICBgLFxuICAgIGRpcmVjdGl2ZXM6IFtGcmllbmRDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIFVzZXJMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2ZyaWVuZFNlcnZpY2U6IEZyaWVuZFNlcnZpY2UsIHByaXZhdGUgX2Vycm9yU2VydmljZTogRXJyb3JTZXJ2aWNlKSB7fVxuXG4gICAgdXNlcnM6IEZyaWVuZFtdO1xuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuX2ZyaWVuZFNlcnZpY2UuZ2V0VXNlcnMoKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICB1c2VycyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXNlcnMgPSB1c2VycztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZnJpZW5kU2VydmljZS51c2VycyA9IHVzZXJzO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gdGhpcy5fZXJyb3JTZXJ2aWNlLmhhbmRsZUVycm9yKGVycm9yKVxuICAgICAgICAgICAgKTtcbiAgICB9ICBcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
