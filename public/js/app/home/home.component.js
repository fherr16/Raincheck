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
            template: "   \n        <div class=\"row\">\n            <ul class=\"col-sm-12\"> \n                <li *ngFor=\"let action of actions\">{{action.userName + ' ' + action.message + ' ' + action.friendName}}</li>\n            </ul>\n        </div>\n    ",
            styles: ["\n        #welcome-message {\n            text-align: center;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthService, home_service_1.HomeService, error_service_1.ErrorService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUvaG9tZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFrQyxlQUFlLENBQUMsQ0FBQTtBQUdsRCw2QkFBMEIsd0JBQXdCLENBQUMsQ0FBQTtBQUNuRCw2QkFBMEIsZ0JBQWdCLENBQUMsQ0FBQTtBQUMzQyw4QkFBNkIseUJBQXlCLENBQUMsQ0FBQTtBQWlCdkQ7SUFHSSx1QkFBb0IsWUFBeUIsRUFBVSxZQUF5QixFQUFVLGFBQTJCO1FBQWpHLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWE7UUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBYztJQUFJLENBQUM7SUFFMUgsZ0NBQVEsR0FBUjtRQUFBLGlCQVNDO1FBUkcsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUU7YUFDekIsU0FBUyxDQUNOLFVBQUEsT0FBTztZQUNILEtBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1lBQ3ZCLEtBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN4QyxDQUFDLEVBQ0QsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBckMsQ0FBcUMsQ0FDakQsQ0FBQztJQUNWLENBQUM7SUFFRCxrQ0FBVSxHQUFWO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDMUMsQ0FBQztJQWpDTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTTtZQUNoQixRQUFRLEVBQUUsa1BBTVQ7WUFDRCxNQUFNLEVBQUUsQ0FBQyxnRkFJUixDQUFDO1NBQ0wsQ0FBQzs7cUJBQUE7SUFvQkYsb0JBQUM7QUFBRCxDQW5CQSxBQW1CQyxJQUFBO0FBbkJZLHFCQUFhLGdCQW1CekIsQ0FBQSIsImZpbGUiOiJob21lL2hvbWUuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQge0hvbWV9IGZyb20gXCIuL2hvbWVcIjtcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gXCIuLy4uL2F1dGgvYXV0aC5zZXJ2aWNlXCI7XG5pbXBvcnQge0hvbWVTZXJ2aWNlfSBmcm9tIFwiLi9ob21lLnNlcnZpY2VcIjtcbmltcG9ydCB7IEVycm9yU2VydmljZSB9IGZyb20gXCIuLi9lcnJvcnMvZXJyb3Iuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2hvbWUnLFxuICAgIHRlbXBsYXRlOiBgICAgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgIDx1bCBjbGFzcz1cImNvbC1zbS0xMlwiPiBcbiAgICAgICAgICAgICAgICA8bGkgKm5nRm9yPVwibGV0IGFjdGlvbiBvZiBhY3Rpb25zXCI+e3thY3Rpb24udXNlck5hbWUgKyAnICcgKyBhY3Rpb24ubWVzc2FnZSArICcgJyArIGFjdGlvbi5mcmllbmROYW1lfX08L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcbiAgICBzdHlsZXM6IFtgXG4gICAgICAgICN3ZWxjb21lLW1lc3NhZ2Uge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgYF1cbn0pXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgYWN0aW9uczogSG9tZVtdO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLCBwcml2YXRlIF9ob21lU2VydmljZTogSG9tZVNlcnZpY2UsIHByaXZhdGUgX2Vycm9yU2VydmljZTogRXJyb3JTZXJ2aWNlKSB7IH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLl9ob21lU2VydmljZS5nZXRBY3Rpb25zKClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgYWN0aW9ucyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0aW9ucyA9IGFjdGlvbnM7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2hvbWVTZXJ2aWNlLmFjdGlvbnMgPSBhY3Rpb25zO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gdGhpcy5fZXJyb3JTZXJ2aWNlLmhhbmRsZUVycm9yKGVycm9yKVxuICAgICAgICAgICAgKTtcbiAgICB9XG5cbiAgICBpc0xvZ2dlZEluKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYXV0aFNlcnZpY2UuaXNMb2dnZWRJbigpO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
