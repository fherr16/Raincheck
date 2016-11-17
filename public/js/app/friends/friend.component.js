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
var friend_1 = require("./friend");
var friend_service_1 = require("./friend.service");
var error_service_1 = require("../errors/error.service");
var FriendComponent = (function () {
    function FriendComponent(_friendService, _errorService) {
        this._friendService = _friendService;
        this._errorService = _errorService;
    }
    FriendComponent.prototype.onDelete = function () {
        var _this = this;
        this._friendService.deleteFriend(this.friend)
            .subscribe(function (data) { return console.log(data); }, function (error) { return _this._errorService.handleError(error); });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', friend_1.Friend)
    ], FriendComponent.prototype, "friend", void 0);
    FriendComponent = __decorate([
        core_1.Component({
            selector: 'my-friend',
            template: "\n        <div class=\"row\">\n            <div class=\"col-md-8 col-md-offset-2\">\n                <div class=\"contact\">\n                    {{ friend.firstName }}\n                    <div class=\"admin-delete\">\n                        <a (click)=\"onDelete()\">Delete</a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    ",
            styles: ["\n        .contact {\n            display: inline-block;\n            border-bottom: solid 1px;\n            font-size: 12px;\n            width: 100%;\n        }\n        .admin-delete {\n            display: inline-block;\n            text-align: right;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [friend_service_1.FriendService, error_service_1.ErrorService])
    ], FriendComponent);
    return FriendComponent;
}());
exports.FriendComponent = FriendComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZyaWVuZHMvZnJpZW5kLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWlDLGVBQWUsQ0FBQyxDQUFBO0FBQ2pELHVCQUF1QixVQUFVLENBQUMsQ0FBQTtBQUVsQywrQkFBOEIsa0JBQWtCLENBQUMsQ0FBQTtBQUNqRCw4QkFBNkIseUJBQXlCLENBQUMsQ0FBQTtBQTRCdkQ7SUFHSSx5QkFBcUIsY0FBNkIsRUFBVSxhQUEyQjtRQUFsRSxtQkFBYyxHQUFkLGNBQWMsQ0FBZTtRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFjO0lBQUcsQ0FBQztJQUUzRixrQ0FBUSxHQUFSO1FBQUEsaUJBTUM7UUFMRyxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO2FBQ3hDLFNBQVMsQ0FDTixVQUFBLElBQUksSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQWpCLENBQWlCLEVBQ3pCLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQXJDLENBQXFDLENBQ2pELENBQUM7SUFDVixDQUFDO0lBVkQ7UUFBQyxZQUFLLEVBQUU7O21EQUFBO0lBNUJaO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFFBQVEsRUFBRSx3WEFXVDtZQUNELE1BQU0sRUFBRSxDQUFDLGtSQVdSLENBQUM7U0FDTCxDQUFDOzt1QkFBQTtJQWFGLHNCQUFDO0FBQUQsQ0FaQSxBQVlDLElBQUE7QUFaWSx1QkFBZSxrQkFZM0IsQ0FBQSIsImZpbGUiOiJmcmllbmRzL2ZyaWVuZC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEZyaWVuZCB9IGZyb20gXCIuL2ZyaWVuZFwiO1xuXG5pbXBvcnQgeyBGcmllbmRTZXJ2aWNlIH0gZnJvbSBcIi4vZnJpZW5kLnNlcnZpY2VcIjtcbmltcG9ydCB7IEVycm9yU2VydmljZSB9IGZyb20gXCIuLi9lcnJvcnMvZXJyb3Iuc2VydmljZVwiO1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1mcmllbmQnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtOCBjb2wtbWQtb2Zmc2V0LTJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFjdFwiPlxuICAgICAgICAgICAgICAgICAgICB7eyBmcmllbmQuZmlyc3ROYW1lIH19XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhZG1pbi1kZWxldGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIChjbGljayk9XCJvbkRlbGV0ZSgpXCI+RGVsZXRlPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICBgLFxuICAgIHN0eWxlczogW2BcbiAgICAgICAgLmNvbnRhY3Qge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgLmFkbWluLWRlbGV0ZSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgfVxuICAgIGBdXG59KVxuZXhwb3J0IGNsYXNzIEZyaWVuZENvbXBvbmVudCB7XG4gICAgQElucHV0KCkgZnJpZW5kOkZyaWVuZDtcblxuICAgIGNvbnN0cnVjdG9yIChwcml2YXRlIF9mcmllbmRTZXJ2aWNlOiBGcmllbmRTZXJ2aWNlLCBwcml2YXRlIF9lcnJvclNlcnZpY2U6IEVycm9yU2VydmljZSkge31cblxuICAgIG9uRGVsZXRlKCkge1xuICAgICAgICB0aGlzLl9mcmllbmRTZXJ2aWNlLmRlbGV0ZUZyaWVuZCh0aGlzLmZyaWVuZClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhKSxcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB0aGlzLl9lcnJvclNlcnZpY2UuaGFuZGxlRXJyb3IoZXJyb3IpXG4gICAgICAgICAgICApO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
