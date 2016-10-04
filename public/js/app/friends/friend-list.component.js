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
var user_list_component_1 = require("./user-list.component");
var friend_service_1 = require("./friend.service");
var error_service_1 = require("../errors/error.service");
var FriendListComponent = (function () {
    function FriendListComponent(_friendService, _errorService) {
        this._friendService = _friendService;
        this._errorService = _errorService;
    }
    FriendListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._friendService.getFriends()
            .subscribe(function (friends) {
            _this.friends = friends;
            _this._friendService.friends = friends;
        }, function (error) { return _this._errorService.handleError(error); });
    };
    FriendListComponent = __decorate([
        core_1.Component({
            selector: 'my-friend-list',
            template: "\n        <section class=\"col-md-8 col-md-offset-2\">\n            <my-friend *ngFor=\"let friend of friends\" [friend]=\"friend\"></my-friend>\n\n            <my-user-list [friends]=\"friends\"></my-user-list>\n\n        </section>\n    ",
            directives: [friend_component_1.FriendComponent, user_list_component_1.UserListComponent]
        }), 
        __metadata('design:paramtypes', [friend_service_1.FriendService, error_service_1.ErrorService])
    ], FriendListComponent);
    return FriendListComponent;
}());
exports.FriendListComponent = FriendListComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZyaWVuZHMvZnJpZW5kLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFFbEQsaUNBQWdDLG9CQUFvQixDQUFDLENBQUE7QUFDckQsb0NBQWtDLHVCQUF1QixDQUFDLENBQUE7QUFFMUQsK0JBQThCLGtCQUFrQixDQUFDLENBQUE7QUFDakQsOEJBQTZCLHlCQUF5QixDQUFDLENBQUE7QUFhdkQ7SUFFSSw2QkFBb0IsY0FBNkIsRUFBVSxhQUEyQjtRQUFsRSxtQkFBYyxHQUFkLGNBQWMsQ0FBZTtRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFjO0lBQUcsQ0FBQztJQUkxRixzQ0FBUSxHQUFSO1FBQUEsaUJBU0M7UUFSRyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsRUFBRTthQUMzQixTQUFTLENBQ04sVUFBQSxPQUFPO1lBQ0gsS0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7WUFDdkIsS0FBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQzFDLENBQUMsRUFDRCxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxFQUFyQyxDQUFxQyxDQUNqRCxDQUFDO0lBQ1YsQ0FBQztJQTNCTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFFBQVEsRUFBRSxpUEFPVDtZQUNELFVBQVUsRUFBRSxDQUFDLGtDQUFlLEVBQUUsdUNBQWlCLENBQUM7U0FDbkQsQ0FBQzs7MkJBQUE7SUFpQkYsMEJBQUM7QUFBRCxDQWhCQSxBQWdCQyxJQUFBO0FBaEJZLDJCQUFtQixzQkFnQi9CLENBQUEiLCJmaWxlIjoiZnJpZW5kcy9mcmllbmQtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IEZyaWVuZENvbXBvbmVudCB9IGZyb20gXCIuL2ZyaWVuZC5jb21wb25lbnRcIjtcbmltcG9ydCB7IFVzZXJMaXN0Q29tcG9uZW50IH0gZnJvbSBcIi4vdXNlci1saXN0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgRnJpZW5kIH0gZnJvbSBcIi4vZnJpZW5kXCI7XG5pbXBvcnQgeyBGcmllbmRTZXJ2aWNlIH0gZnJvbSBcIi4vZnJpZW5kLnNlcnZpY2VcIjtcbmltcG9ydCB7IEVycm9yU2VydmljZSB9IGZyb20gXCIuLi9lcnJvcnMvZXJyb3Iuc2VydmljZVwiO1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1mcmllbmQtbGlzdCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJjb2wtbWQtOCBjb2wtbWQtb2Zmc2V0LTJcIj5cbiAgICAgICAgICAgIDxteS1mcmllbmQgKm5nRm9yPVwibGV0IGZyaWVuZCBvZiBmcmllbmRzXCIgW2ZyaWVuZF09XCJmcmllbmRcIj48L215LWZyaWVuZD5cblxuICAgICAgICAgICAgPG15LXVzZXItbGlzdCBbZnJpZW5kc109XCJmcmllbmRzXCI+PC9teS11c2VyLWxpc3Q+XG5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgIGAsXG4gICAgZGlyZWN0aXZlczogW0ZyaWVuZENvbXBvbmVudCwgVXNlckxpc3RDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIEZyaWVuZExpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfZnJpZW5kU2VydmljZTogRnJpZW5kU2VydmljZSwgcHJpdmF0ZSBfZXJyb3JTZXJ2aWNlOiBFcnJvclNlcnZpY2UpIHt9XG5cbiAgICBmcmllbmRzOiBGcmllbmRbXTtcblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLl9mcmllbmRTZXJ2aWNlLmdldEZyaWVuZHMoKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICBmcmllbmRzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mcmllbmRzID0gZnJpZW5kcztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZnJpZW5kU2VydmljZS5mcmllbmRzID0gZnJpZW5kcztcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yID0+IHRoaXMuX2Vycm9yU2VydmljZS5oYW5kbGVFcnJvcihlcnJvcilcbiAgICAgICAgICAgICk7XG4gICAgfSAgIFxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
