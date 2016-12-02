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
var auth_service_1 = require("./../auth/auth.service");
var home_service_1 = require("./home.service");
var error_service_1 = require("../errors/error.service");
var HomeComponent = (function () {
    function HomeComponent(_authService, _homeService, _errorService) {
        this._authService = _authService;
        this._homeService = _homeService;
        this._errorService = _errorService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._homeService.getActions()
            .subscribe(function (actions) {
            _this.actions = actions;
            _this._homeService.actions = actions;
        }, function (error) { return _this._errorService.handleError(error); });
    };
    HomeComponent.prototype.isLoggedIn = function () {
        return this._authService.isLoggedIn();
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'home',
            template: "   \n        <div class=\"row\">\n            <ul class=\"col-sm-12\"> \n                <li *ngFor=\"let action of actions\">{{action.message}}</li>\n            </ul>\n        </div>\n    ",
            styles: ["\n        #welcome-message {\n            text-align: center;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthService, home_service_1.HomeService, error_service_1.ErrorService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUvaG9tZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFrQyxlQUFlLENBQUMsQ0FBQTtBQUdsRCw2QkFBMEIsd0JBQXdCLENBQUMsQ0FBQTtBQUNuRCw2QkFBMEIsZ0JBQWdCLENBQUMsQ0FBQTtBQUMzQyw4QkFBNkIseUJBQXlCLENBQUMsQ0FBQTtBQWlCdkQ7SUFHSSx1QkFBb0IsWUFBeUIsRUFBVSxZQUF5QixFQUFVLGFBQTJCO1FBQWpHLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWE7UUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBYztJQUFJLENBQUM7SUFFMUgsZ0NBQVEsR0FBUjtRQUFBLGlCQVNDO1FBUkcsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUU7YUFDekIsU0FBUyxDQUNOLFVBQUEsT0FBTztZQUNILEtBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1lBQ3ZCLEtBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN4QyxDQUFDLEVBQ0QsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBckMsQ0FBcUMsQ0FDakQsQ0FBQztJQUNWLENBQUM7SUFFRCxrQ0FBVSxHQUFWO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDMUMsQ0FBQztJQWpDTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTTtZQUNoQixRQUFRLEVBQUUsZ01BTVQ7WUFDRCxNQUFNLEVBQUUsQ0FBQyxnRkFJUixDQUFDO1NBQ0wsQ0FBQzs7cUJBQUE7SUFvQkYsb0JBQUM7QUFBRCxDQW5CQSxBQW1CQyxJQUFBO0FBbkJZLHFCQUFhLGdCQW1CekIsQ0FBQSIsImZpbGUiOiJob21lL2hvbWUuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQge0hvbWV9IGZyb20gXCIuL2hvbWVcIjtcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gXCIuLy4uL2F1dGgvYXV0aC5zZXJ2aWNlXCI7XG5pbXBvcnQge0hvbWVTZXJ2aWNlfSBmcm9tIFwiLi9ob21lLnNlcnZpY2VcIjtcbmltcG9ydCB7IEVycm9yU2VydmljZSB9IGZyb20gXCIuLi9lcnJvcnMvZXJyb3Iuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2hvbWUnLFxuICAgIHRlbXBsYXRlOiBgICAgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgIDx1bCBjbGFzcz1cImNvbC1zbS0xMlwiPiBcbiAgICAgICAgICAgICAgICA8bGkgKm5nRm9yPVwibGV0IGFjdGlvbiBvZiBhY3Rpb25zXCI+e3thY3Rpb24ubWVzc2FnZX19PC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgIGAsXG4gICAgc3R5bGVzOiBbYFxuICAgICAgICAjd2VsY29tZS1tZXNzYWdlIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgIGBdXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGFjdGlvbnM6IEhvbWVbXTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2F1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSwgcHJpdmF0ZSBfaG9tZVNlcnZpY2U6IEhvbWVTZXJ2aWNlLCBwcml2YXRlIF9lcnJvclNlcnZpY2U6IEVycm9yU2VydmljZSkgeyB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5faG9tZVNlcnZpY2UuZ2V0QWN0aW9ucygpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgIGFjdGlvbnMgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGlvbnMgPSBhY3Rpb25zO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9ob21lU2VydmljZS5hY3Rpb25zID0gYWN0aW9ucztcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yID0+IHRoaXMuX2Vycm9yU2VydmljZS5oYW5kbGVFcnJvcihlcnJvcilcbiAgICAgICAgICAgICk7XG4gICAgfVxuXG4gICAgaXNMb2dnZWRJbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2F1dGhTZXJ2aWNlLmlzTG9nZ2VkSW4oKTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
