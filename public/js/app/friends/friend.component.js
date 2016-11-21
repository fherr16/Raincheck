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
            template: "\n        <div class=\"col-md-8 col-md-offset-2\">\n            <table class=\"table\">\n                <thead>\n                    <tr>\n                        <th>Name</th>\n                        <th>Action</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let friend of friends\">\n                        <td>{{ friend.firstName }}</td>\n                        <td><a (click)=\"onDelete(friend)\">Delete</a></td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n    ",
            styles: ["\n        .contact {\n            display: inline-block;\n            border-bottom: solid 1px;\n            font-size: 12px;\n            width: 100%;\n        }\n        .admin-delete {\n            display: inline-block;\n            text-align: right;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [friend_service_1.FriendService, error_service_1.ErrorService])
    ], FriendComponent);
    return FriendComponent;
}());
exports.FriendComponent = FriendComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZyaWVuZHMvZnJpZW5kLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWtDLGVBQWUsQ0FBQyxDQUFBO0FBR2xELCtCQUE4QixrQkFBa0IsQ0FBQyxDQUFBO0FBQ2pELDhCQUE2Qix5QkFBeUIsQ0FBQyxDQUFBO0FBa0N2RDtJQUdJLHlCQUFxQixjQUE2QixFQUFVLGFBQTJCO1FBQWxFLG1CQUFjLEdBQWQsY0FBYyxDQUFlO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWM7SUFBRyxDQUFDO0lBRTNGLGtDQUFRLEdBQVI7UUFBQSxpQkFTQztRQVJHLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxFQUFFO2FBQzNCLFNBQVMsQ0FDTixVQUFBLE9BQU87WUFDSCxLQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztZQUN2QixLQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDMUMsQ0FBQyxFQUNELFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQXJDLENBQXFDLENBQ2pELENBQUM7SUFDVixDQUFDO0lBRUQsa0NBQVEsR0FBUixVQUFTLE1BQWM7UUFBdkIsaUJBTUM7UUFMRyxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUM7YUFDbkMsU0FBUyxDQUNOLFVBQUEsSUFBSSxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBakIsQ0FBaUIsRUFDekIsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBckMsQ0FBcUMsQ0FDakQsQ0FBQztJQUNWLENBQUM7SUF2REw7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFdBQVc7WUFDckIsUUFBUSxFQUFFLDRrQkFpQlQ7WUFDRCxNQUFNLEVBQUUsQ0FBQyxrUkFXUixDQUFDO1NBQ0wsQ0FBQzs7dUJBQUE7SUF3QkYsc0JBQUM7QUFBRCxDQXZCQSxBQXVCQyxJQUFBO0FBdkJZLHVCQUFlLGtCQXVCM0IsQ0FBQSIsImZpbGUiOiJmcmllbmRzL2ZyaWVuZC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBGcmllbmQgfSBmcm9tIFwiLi9mcmllbmRcIjtcblxuaW1wb3J0IHsgRnJpZW5kU2VydmljZSB9IGZyb20gXCIuL2ZyaWVuZC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBFcnJvclNlcnZpY2UgfSBmcm9tIFwiLi4vZXJyb3JzL2Vycm9yLnNlcnZpY2VcIjtcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktZnJpZW5kJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTggY29sLW1kLW9mZnNldC0yXCI+XG4gICAgICAgICAgICA8dGFibGUgY2xhc3M9XCJ0YWJsZVwiPlxuICAgICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPk5hbWU8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkFjdGlvbjwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgIDx0ciAqbmdGb3I9XCJsZXQgZnJpZW5kIG9mIGZyaWVuZHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57eyBmcmllbmQuZmlyc3ROYW1lIH19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48YSAoY2xpY2spPVwib25EZWxldGUoZnJpZW5kKVwiPkRlbGV0ZTwvYT48L3RkPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICA8L2Rpdj5cbiAgICBgLFxuICAgIHN0eWxlczogW2BcbiAgICAgICAgLmNvbnRhY3Qge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgLmFkbWluLWRlbGV0ZSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgfVxuICAgIGBdXG59KVxuZXhwb3J0IGNsYXNzIEZyaWVuZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgZnJpZW5kczogRnJpZW5kW107XG5cbiAgICBjb25zdHJ1Y3RvciAocHJpdmF0ZSBfZnJpZW5kU2VydmljZTogRnJpZW5kU2VydmljZSwgcHJpdmF0ZSBfZXJyb3JTZXJ2aWNlOiBFcnJvclNlcnZpY2UpIHt9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5fZnJpZW5kU2VydmljZS5nZXRGcmllbmRzKClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgZnJpZW5kcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZnJpZW5kcyA9IGZyaWVuZHM7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2ZyaWVuZFNlcnZpY2UuZnJpZW5kcyA9IGZyaWVuZHM7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB0aGlzLl9lcnJvclNlcnZpY2UuaGFuZGxlRXJyb3IoZXJyb3IpXG4gICAgICAgICAgICApO1xuICAgIH1cblxuICAgIG9uRGVsZXRlKGZyaWVuZDogRnJpZW5kKSB7XG4gICAgICAgIHRoaXMuX2ZyaWVuZFNlcnZpY2UuZGVsZXRlRnJpZW5kKGZyaWVuZClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhKSxcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB0aGlzLl9lcnJvclNlcnZpY2UuaGFuZGxlRXJyb3IoZXJyb3IpXG4gICAgICAgICAgICApO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
