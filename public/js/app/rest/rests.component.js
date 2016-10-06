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
var error_service_1 = require("../errors/error.service");
var router_1 = require('@angular/router');
var rest_1 = require("./rest");
var rest_service_1 = require("./rest.service");
var RestComponent = (function () {
    function RestComponent(router, restService, _errorService) {
        this.router = router;
        this.restService = restService;
        this._errorService = _errorService;
    }
    RestComponent.prototype.add = function (name, address, rating) {
        var _this = this;
        var rest = new rest_1.Rest(name, address, rating);
        this.restService.create(rest)
            .subscribe(function (data) { return console.log(data); }, function (error) { return _this._errorService.handleError(error); });
    };
    RestComponent = __decorate([
        core_1.Component({
            selector: "my-rests",
            template: "\n  <h1> My Restaurants </h1>\n  <div>\n    <label> Name: </label><input #restName />\n    <label> Address: </label><input #restAddress />\n    <label> Rating: </label><input #restRating />\n    <button (click)=\"add(restName.value, restAddress.value, restRating.value); restName.value=''\">\n      Add\n    </button>\n  </div>\n  ",
        }), 
        __metadata('design:paramtypes', [router_1.Router, rest_service_1.RestService, error_service_1.ErrorService])
    ], RestComponent);
    return RestComponent;
}());
exports.RestComponent = RestComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc3QvcmVzdHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFFbEQsOEJBQTZCLHlCQUF5QixDQUFDLENBQUE7QUFDdkQsdUJBQXVCLGlCQUFpQixDQUFDLENBQUE7QUFFekMscUJBQW1CLFFBQVEsQ0FBQyxDQUFBO0FBQzVCLDZCQUEwQixnQkFBZ0IsQ0FBQyxDQUFBO0FBaUIzQztJQUdFLHVCQUFvQixNQUFjLEVBQVUsV0FBd0IsRUFBVSxhQUEyQjtRQUFyRixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBYztJQUFJLENBQUM7SUFFOUcsMkJBQUcsR0FBSCxVQUFJLElBQVcsRUFBRSxPQUFjLEVBQUUsTUFBYTtRQUE5QyxpQkFPQztRQU5DLElBQU0sSUFBSSxHQUFHLElBQUksV0FBSSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO2FBQzFCLFNBQVMsQ0FDTixVQUFBLElBQUksSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQWpCLENBQWlCLEVBQ3pCLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQXJDLENBQXFDLENBQ2pELENBQUE7SUFDTCxDQUFDO0lBM0JIO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFFBQVEsRUFBRSw2VUFVVDtTQUNGLENBQUM7O3FCQUFBO0lBZUYsb0JBQUM7QUFBRCxDQWJBLEFBYUMsSUFBQTtBQWJZLHFCQUFhLGdCQWF6QixDQUFBIiwiZmlsZSI6InJlc3QvcmVzdHMuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVzLCBST1VURVJfRElSRUNUSVZFUyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IEVycm9yU2VydmljZSB9IGZyb20gXCIuLi9lcnJvcnMvZXJyb3Iuc2VydmljZVwiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHtSZXN0fSBmcm9tIFwiLi9yZXN0XCI7XG5pbXBvcnQge1Jlc3RTZXJ2aWNlfSBmcm9tIFwiLi9yZXN0LnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcIm15LXJlc3RzXCIsXG4gIHRlbXBsYXRlOiBgXG4gIDxoMT4gTXkgUmVzdGF1cmFudHMgPC9oMT5cbiAgPGRpdj5cbiAgICA8bGFiZWw+IE5hbWU6IDwvbGFiZWw+PGlucHV0ICNyZXN0TmFtZSAvPlxuICAgIDxsYWJlbD4gQWRkcmVzczogPC9sYWJlbD48aW5wdXQgI3Jlc3RBZGRyZXNzIC8+XG4gICAgPGxhYmVsPiBSYXRpbmc6IDwvbGFiZWw+PGlucHV0ICNyZXN0UmF0aW5nIC8+XG4gICAgPGJ1dHRvbiAoY2xpY2spPVwiYWRkKHJlc3ROYW1lLnZhbHVlLCByZXN0QWRkcmVzcy52YWx1ZSwgcmVzdFJhdGluZy52YWx1ZSk7IHJlc3ROYW1lLnZhbHVlPScnXCI+XG4gICAgICBBZGRcbiAgICA8L2J1dHRvbj5cbiAgPC9kaXY+XG4gIGAsXG59KVxuXG5leHBvcnQgY2xhc3MgUmVzdENvbXBvbmVudHtcbiAgcmVzdHM6IFJlc3RbXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHJlc3RTZXJ2aWNlOiBSZXN0U2VydmljZSwgcHJpdmF0ZSBfZXJyb3JTZXJ2aWNlOiBFcnJvclNlcnZpY2UpIHsgfVxuXG4gIGFkZChuYW1lOnN0cmluZywgYWRkcmVzczpzdHJpbmcsIHJhdGluZzpudW1iZXIpOiB2b2lke1xuICAgIGNvbnN0IHJlc3QgPSBuZXcgUmVzdChuYW1lLCBhZGRyZXNzLCByYXRpbmcpO1xuICAgIHRoaXMucmVzdFNlcnZpY2UuY3JlYXRlKHJlc3QpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgIGRhdGEgPT4gY29uc29sZS5sb2coZGF0YSksXG4gICAgICAgICAgZXJyb3IgPT4gdGhpcy5fZXJyb3JTZXJ2aWNlLmhhbmRsZUVycm9yKGVycm9yKVxuICAgICAgKVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
