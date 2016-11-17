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
        var hasFriend = false;
        var id = user.userId;
        for (var i = 0; i < this.friends.length; i++) {
            if (user.userId == this.friends[i].userId) {
                hasFriend = true;
            }
        }
        if (!hasFriend) {
            this._friendService.addFriend(user)
                .subscribe(function (data) {
                console.log(data);
                _this._friendService.friends.push(data);
            }, function (error) { return _this._errorService.handleError(error); });
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], UserListComponent.prototype, "friends", void 0);
    UserListComponent = __decorate([
        core_1.Component({
            selector: 'my-user-list',
            template: "\n        <section class=\"col-md-8 col-md-offset-2\">\n            <ul class=\"friendlist\">\n                <li class=\"list-user\" *ngFor=\"let user of users\">{{user.firstName}}<button class=\"btn btn-xs btn-success user-button\" (click)=\"onAdd(user)\" *ngIf=\"friends\">ADD</button></li>\n            </ul>\n\n        </section>\n    ",
            styles: ["\n        .friendlist {\n            list-style-type: none;\n            text-align: right;\n        }\n\n        .list-user {\n            padding: 4px;\n        }\n        \n        .user-button {\n            margin-left: 3px;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [friend_service_1.FriendService, error_service_1.ErrorService])
    ], UserListComponent);
    return UserListComponent;
}());
exports.UserListComponent = UserListComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZyaWVuZHMvdXNlci1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXlDLGVBQWUsQ0FBQyxDQUFBO0FBSXpELCtCQUE4QixrQkFBa0IsQ0FBQyxDQUFBO0FBQ2pELDhCQUE2Qix5QkFBeUIsQ0FBQyxDQUFBO0FBMEJ2RDtJQUVJLDJCQUFvQixjQUE2QixFQUFVLGFBQTJCO1FBQWxFLG1CQUFjLEdBQWQsY0FBYyxDQUFlO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWM7SUFBRyxDQUFDO0lBSzFGLG9DQUFRLEdBQVI7UUFBQSxpQkFTQztRQVJHLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxFQUFFO2FBQ3pCLFNBQVMsQ0FDTixVQUFBLEtBQUs7WUFDRCxLQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztZQUNuQixLQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDdEMsQ0FBQyxFQUNELFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQXJDLENBQXFDLENBQ2pELENBQUM7SUFDVixDQUFDO0lBRUQsaUNBQUssR0FBTCxVQUFNLElBQVk7UUFBbEIsaUJBb0JDO1FBbkJHLElBQUksU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN0QixJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBRXJCLEdBQUcsQ0FBQSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUN6QyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDdkMsU0FBUyxHQUFHLElBQUksQ0FBQztZQUNyQixDQUFDO1FBQ0wsQ0FBQztRQUVELEVBQUUsQ0FBQSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNaLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQztpQkFDOUIsU0FBUyxDQUNOLFVBQUEsSUFBSTtnQkFDQSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNsQixLQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDM0MsQ0FBQyxFQUNELFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQXJDLENBQXFDLENBQ2pELENBQUM7UUFDVixDQUFDO0lBQ0wsQ0FBQztJQWxDRDtRQUFDLFlBQUssRUFBRTs7c0RBQUE7SUE3Qlo7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGNBQWM7WUFDeEIsUUFBUSxFQUFFLHVWQU9UO1lBQ0QsTUFBTSxFQUFFLENBQUMsd1BBYVIsQ0FBQztTQUNMLENBQUM7O3lCQUFBO0lBd0NGLHdCQUFDO0FBQUQsQ0F2Q0EsQUF1Q0MsSUFBQTtBQXZDWSx5QkFBaUIsb0JBdUM3QixDQUFBIiwiZmlsZSI6ImZyaWVuZHMvdXNlci1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IEZyaWVuZENvbXBvbmVudCB9IGZyb20gXCIuL2ZyaWVuZC5jb21wb25lbnRcIjtcbmltcG9ydCB7IEZyaWVuZCB9IGZyb20gXCIuL2ZyaWVuZFwiO1xuaW1wb3J0IHsgRnJpZW5kU2VydmljZSB9IGZyb20gXCIuL2ZyaWVuZC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBFcnJvclNlcnZpY2UgfSBmcm9tIFwiLi4vZXJyb3JzL2Vycm9yLnNlcnZpY2VcIjtcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktdXNlci1saXN0JyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cImNvbC1tZC04IGNvbC1tZC1vZmZzZXQtMlwiPlxuICAgICAgICAgICAgPHVsIGNsYXNzPVwiZnJpZW5kbGlzdFwiPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImxpc3QtdXNlclwiICpuZ0Zvcj1cImxldCB1c2VyIG9mIHVzZXJzXCI+e3t1c2VyLmZpcnN0TmFtZX19PGJ1dHRvbiBjbGFzcz1cImJ0biBidG4teHMgYnRuLXN1Y2Nlc3MgdXNlci1idXR0b25cIiAoY2xpY2spPVwib25BZGQodXNlcilcIiAqbmdJZj1cImZyaWVuZHNcIj5BREQ8L2J1dHRvbj48L2xpPlxuICAgICAgICAgICAgPC91bD5cblxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgYCxcbiAgICBzdHlsZXM6IFtgXG4gICAgICAgIC5mcmllbmRsaXN0IHtcbiAgICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICB9XG5cbiAgICAgICAgLmxpc3QtdXNlciB7XG4gICAgICAgICAgICBwYWRkaW5nOiA0cHg7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC51c2VyLWJ1dHRvbiB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogM3B4O1xuICAgICAgICB9XG4gICAgYF1cbn0pXG5leHBvcnQgY2xhc3MgVXNlckxpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfZnJpZW5kU2VydmljZTogRnJpZW5kU2VydmljZSwgcHJpdmF0ZSBfZXJyb3JTZXJ2aWNlOiBFcnJvclNlcnZpY2UpIHt9XG5cbiAgICBASW5wdXQoKSBmcmllbmRzOkZyaWVuZFtdO1xuICAgIHVzZXJzOiBGcmllbmRbXTtcblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLl9mcmllbmRTZXJ2aWNlLmdldFVzZXJzKClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgdXNlcnMgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXJzID0gdXNlcnM7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2ZyaWVuZFNlcnZpY2UudXNlcnMgPSB1c2VycztcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yID0+IHRoaXMuX2Vycm9yU2VydmljZS5oYW5kbGVFcnJvcihlcnJvcilcbiAgICAgICAgICAgICk7XG4gICAgfVxuXG4gICAgb25BZGQodXNlcjogRnJpZW5kKSB7XG4gICAgICAgIHZhciBoYXNGcmllbmQgPSBmYWxzZTtcbiAgICAgICAgdmFyIGlkID0gdXNlci51c2VySWQ7XG5cbiAgICAgICAgZm9yKHZhciBpID0gMDtpIDwgdGhpcy5mcmllbmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZih1c2VyLnVzZXJJZCA9PSB0aGlzLmZyaWVuZHNbaV0udXNlcklkKSB7XG4gICAgICAgICAgICAgICAgaGFzRnJpZW5kID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmKCFoYXNGcmllbmQpIHtcbiAgICAgICAgICAgIHRoaXMuX2ZyaWVuZFNlcnZpY2UuYWRkRnJpZW5kKHVzZXIpXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICAgICAgZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2ZyaWVuZFNlcnZpY2UuZnJpZW5kcy5wdXNoKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBlcnJvciA9PiB0aGlzLl9lcnJvclNlcnZpY2UuaGFuZGxlRXJyb3IoZXJyb3IpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgfSAgICAgXG4gICAgfSAgXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
