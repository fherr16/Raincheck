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
var FriendComponent = (function () {
    function FriendComponent(_friendService, _errorService) {
        this._friendService = _friendService;
        this._errorService = _errorService;
    }
    FriendComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._friendService.getFriends()
            .subscribe(function (friends) {
            _this.friends = friends;
            _this._friendService.friends = friends;
        }, function (error) { return _this._errorService.handleError(error); });
    };
    FriendComponent.prototype.onDelete = function (friend) {
        var _this = this;
        this._friendService.deleteFriend(friend)
            .subscribe(function (data) { return console.log(data); }, function (error) { return _this._errorService.handleError(error); });
    };
    FriendComponent = __decorate([
        core_1.Component({
            selector: 'my-friend',
            template: "\n        <div class=\"col-sm-8 col-sm-offset-2\">\n            <table class=\"table table-hover\">\n                <thead>\n                    <tr>\n                        <th><u>Name</u></th>\n                        <th><u>Action</u></th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let friend of friends\">\n                        <td>{{ friend.firstName }}</td>\n                        <td><button class=\"btn btn-danger btn-xs\" (click)=\"onDelete(friend)\">Delete</button></td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n    ",
            styles: ["\n        .table>thead>tr>th {\n            border: none;\n        }\n\n        .table>tbody>tr>td {\n            border: none;\n        }\n\n        u {\n            color: blue;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [friend_service_1.FriendService, error_service_1.ErrorService])
    ], FriendComponent);
    return FriendComponent;
}());
exports.FriendComponent = FriendComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZyaWVuZHMvZnJpZW5kLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWtDLGVBQWUsQ0FBQyxDQUFBO0FBR2xELCtCQUE4QixrQkFBa0IsQ0FBQyxDQUFBO0FBQ2pELDhCQUE2Qix5QkFBeUIsQ0FBQyxDQUFBO0FBbUN2RDtJQUdJLHlCQUFxQixjQUE2QixFQUFVLGFBQTJCO1FBQWxFLG1CQUFjLEdBQWQsY0FBYyxDQUFlO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWM7SUFBRyxDQUFDO0lBRTNGLGtDQUFRLEdBQVI7UUFBQSxpQkFTQztRQVJHLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxFQUFFO2FBQzNCLFNBQVMsQ0FDTixVQUFBLE9BQU87WUFDSCxLQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztZQUN2QixLQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDMUMsQ0FBQyxFQUNELFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQXJDLENBQXFDLENBQ2pELENBQUM7SUFDVixDQUFDO0lBRUQsa0NBQVEsR0FBUixVQUFTLE1BQWM7UUFBdkIsaUJBTUM7UUFMRyxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUM7YUFDbkMsU0FBUyxDQUNOLFVBQUEsSUFBSSxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBakIsQ0FBaUIsRUFDekIsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBckMsQ0FBcUMsQ0FDakQsQ0FBQztJQUNWLENBQUM7SUF4REw7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFdBQVc7WUFDckIsUUFBUSxFQUFFLGdwQkFpQlQ7WUFDRCxNQUFNLEVBQUUsQ0FBQyxzTUFZUixDQUFDO1NBQ0wsQ0FBQzs7dUJBQUE7SUF3QkYsc0JBQUM7QUFBRCxDQXZCQSxBQXVCQyxJQUFBO0FBdkJZLHVCQUFlLGtCQXVCM0IsQ0FBQSIsImZpbGUiOiJmcmllbmRzL2ZyaWVuZC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBGcmllbmQgfSBmcm9tIFwiLi9mcmllbmRcIjtcblxuaW1wb3J0IHsgRnJpZW5kU2VydmljZSB9IGZyb20gXCIuL2ZyaWVuZC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBFcnJvclNlcnZpY2UgfSBmcm9tIFwiLi4vZXJyb3JzL2Vycm9yLnNlcnZpY2VcIjtcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktZnJpZW5kJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTggY29sLXNtLW9mZnNldC0yXCI+XG4gICAgICAgICAgICA8dGFibGUgY2xhc3M9XCJ0YWJsZSB0YWJsZS1ob3ZlclwiPlxuICAgICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPjx1Pk5hbWU8L3U+PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD48dT5BY3Rpb248L3U+PC90aD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgPHRyICpuZ0Zvcj1cImxldCBmcmllbmQgb2YgZnJpZW5kc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt7IGZyaWVuZC5maXJzdE5hbWUgfX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxidXR0b24gY2xhc3M9XCJidG4gYnRuLWRhbmdlciBidG4teHNcIiAoY2xpY2spPVwib25EZWxldGUoZnJpZW5kKVwiPkRlbGV0ZTwvYnV0dG9uPjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgIDwvZGl2PlxuICAgIGAsXG4gICAgc3R5bGVzOiBbYFxuICAgICAgICAudGFibGU+dGhlYWQ+dHI+dGgge1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgLnRhYmxlPnRib2R5PnRyPnRkIHtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHUge1xuICAgICAgICAgICAgY29sb3I6IGJsdWU7XG4gICAgICAgIH1cbiAgICBgXVxufSlcbmV4cG9ydCBjbGFzcyBGcmllbmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGZyaWVuZHM6IEZyaWVuZFtdO1xuXG4gICAgY29uc3RydWN0b3IgKHByaXZhdGUgX2ZyaWVuZFNlcnZpY2U6IEZyaWVuZFNlcnZpY2UsIHByaXZhdGUgX2Vycm9yU2VydmljZTogRXJyb3JTZXJ2aWNlKSB7fVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuX2ZyaWVuZFNlcnZpY2UuZ2V0RnJpZW5kcygpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgIGZyaWVuZHMgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZyaWVuZHMgPSBmcmllbmRzO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9mcmllbmRTZXJ2aWNlLmZyaWVuZHMgPSBmcmllbmRzO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gdGhpcy5fZXJyb3JTZXJ2aWNlLmhhbmRsZUVycm9yKGVycm9yKVxuICAgICAgICAgICAgKTtcbiAgICB9XG5cbiAgICBvbkRlbGV0ZShmcmllbmQ6IEZyaWVuZCkge1xuICAgICAgICB0aGlzLl9mcmllbmRTZXJ2aWNlLmRlbGV0ZUZyaWVuZChmcmllbmQpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgIGRhdGEgPT4gY29uc29sZS5sb2coZGF0YSksXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gdGhpcy5fZXJyb3JTZXJ2aWNlLmhhbmRsZUVycm9yKGVycm9yKVxuICAgICAgICAgICAgKTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
