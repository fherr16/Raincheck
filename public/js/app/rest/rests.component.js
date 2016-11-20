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
var auth_service_1 = require("./../auth/auth.service");
var rest_service_1 = require("./rest.service");
var RestComponent = (function () {
    function RestComponent(router, _authService, restService, _errorService) {
        this.router = router;
        this._authService = _authService;
        this.restService = restService;
        this._errorService = _errorService;
    }
    RestComponent.prototype.add = function (name, address, rating) {
        var _this = this;
        var rest = new rest_1.Rest(localStorage.getItem('userId'), name, address, rating);
        this.restService.create(rest)
            .subscribe(function (data) {
            console.log(data);
            if (data.message == "Success") {
                _this.rests.push(rest); //Can erase when we don't want to show all Rests
                _this.userRests.push(rest);
            }
        }, function (error) { return _this._errorService.handleError(error); });
    };
    RestComponent.prototype.delete = function (id, rest) {
        var _this = this;
        this.restService.delete(id)
            .subscribe(function (data) {
            console.log(data);
            if (data.message == "Success") {
                _this.rests.splice(_this.rests.indexOf(rest), 1); //Can erase when we don't want to show all Rests
                _this.userRests.splice(_this.userRests.indexOf(rest), 1);
            }
        }, function (error) { return _this._errorService.handleError(error); });
    };
    RestComponent.prototype.ngOnInit = function () {
        this.get();
        this.getAll();
    };
    RestComponent.prototype.get = function () {
        var _this = this;
        this.restService.get(localStorage.getItem('userId'))
            .subscribe(function (userRests) { return _this.userRests = userRests; }, function (error) { return _this._errorService = error; });
    };
    RestComponent.prototype.getAll = function () {
        var _this = this;
        this.restService.getRests()
            .subscribe(function (rests) { return _this.rests = rests; }, function (error) { return _this._errorService = error; });
    };
    RestComponent.prototype.isLoggedIn = function () {
        return this._authService.isLoggedIn();
    };
    RestComponent = __decorate([
        core_1.Component({
            selector: "my-rests",
            template: "\n  <div *ngIf=\"isLoggedIn()\">\n\n    <h1> My Restaurants </h1>\n    <div>\n      <label> Name: </label><input #restName />\n      <label> Address: </label><input #restAddress />\n      <label> Rating: </label><input #restRating />\n      <button (click)=\"add(restName.value, restAddress.value, restRating.value);restName.value=null;restRating.value=null;restAddress.value=null\">\n        Add\n      </button>\n    </div>\n\n    <div style=\"border:1px solid\">\n      <h4> Current Restaurants In DB</h4>\n      <ul *ngFor=\"let rest of rests\">\n        <li>\n            <span> Name: {{rest.name}}</span>\n            <span> Address: {{rest.address}}</span>\n            <span> Rating: {{rest.rating}}</span>\n            <button (click)=\"delete(rest._id, rest)\">Delete</button>\n            </li>\n      </ul>\n    </div>\n\n    <div style=\"border:1px solid\">\n      <h4> User Rests</h4>\n      <ul *ngFor=\"let rest of userRests\">\n        <li>\n            <span> Name: {{rest.name}}</span>\n            <span> Address: {{rest.address}}</span>\n            <span> Rating: {{rest.rating}}</span>\n            <button (click)=\"delete(rest._id, rest)\">Delete</button>\n            </li>\n      </ul>\n    </div>\n\n  </div>\n  ",
        }), 
        __metadata('design:paramtypes', [router_1.Router, auth_service_1.AuthService, rest_service_1.RestService, error_service_1.ErrorService])
    ], RestComponent);
    return RestComponent;
}());
exports.RestComponent = RestComponent;

//# sourceMappingURL=data:application/json;base64,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QTBCLEVBQ3ZDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLGFBQWEsR0FBUSxLQUFLLEVBQS9CLENBQStCLENBQ3pDLENBQUM7SUFDTixDQUFDO0lBRUQsOEJBQU0sR0FBTjtRQUFBLGlCQU1DO1FBSkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUU7YUFDbEIsU0FBUyxDQUNSLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFLLEVBQWxCLENBQWtCLEVBQzNCLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLGFBQWEsR0FBTyxLQUFLLEVBQTlCLENBQThCLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRUQsa0NBQVUsR0FBVjtRQUNNLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzFDLENBQUM7SUEzR0w7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFVBQVU7WUFDcEIsUUFBUSxFQUFFLDB0Q0FzQ1Q7U0FDRixDQUFDOztxQkFBQTtJQW1FRixvQkFBQztBQUFELENBakVBLEFBaUVDLElBQUE7QUFqRVkscUJBQWEsZ0JBaUV6QixDQUFBIiwiZmlsZSI6InJlc3QvcmVzdHMuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlcywgUk9VVEVSX0RJUkVDVElWRVMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBFcnJvclNlcnZpY2UgfSBmcm9tIFwiLi4vZXJyb3JzL2Vycm9yLnNlcnZpY2VcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7UmVzdH0gZnJvbSBcIi4vcmVzdFwiO1xuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSBcIi4vLi4vYXV0aC9hdXRoLnNlcnZpY2VcIjtcbmltcG9ydCB7UmVzdFNlcnZpY2V9IGZyb20gXCIuL3Jlc3Quc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibXktcmVzdHNcIixcbiAgdGVtcGxhdGU6IGBcbiAgPGRpdiAqbmdJZj1cImlzTG9nZ2VkSW4oKVwiPlxuXG4gICAgPGgxPiBNeSBSZXN0YXVyYW50cyA8L2gxPlxuICAgIDxkaXY+XG4gICAgICA8bGFiZWw+IE5hbWU6IDwvbGFiZWw+PGlucHV0ICNyZXN0TmFtZSAvPlxuICAgICAgPGxhYmVsPiBBZGRyZXNzOiA8L2xhYmVsPjxpbnB1dCAjcmVzdEFkZHJlc3MgLz5cbiAgICAgIDxsYWJlbD4gUmF0aW5nOiA8L2xhYmVsPjxpbnB1dCAjcmVzdFJhdGluZyAvPlxuICAgICAgPGJ1dHRvbiAoY2xpY2spPVwiYWRkKHJlc3ROYW1lLnZhbHVlLCByZXN0QWRkcmVzcy52YWx1ZSwgcmVzdFJhdGluZy52YWx1ZSk7cmVzdE5hbWUudmFsdWU9bnVsbDtyZXN0UmF0aW5nLnZhbHVlPW51bGw7cmVzdEFkZHJlc3MudmFsdWU9bnVsbFwiPlxuICAgICAgICBBZGRcbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBzdHlsZT1cImJvcmRlcjoxcHggc29saWRcIj5cbiAgICAgIDxoND4gQ3VycmVudCBSZXN0YXVyYW50cyBJbiBEQjwvaDQ+XG4gICAgICA8dWwgKm5nRm9yPVwibGV0IHJlc3Qgb2YgcmVzdHNcIj5cbiAgICAgICAgPGxpPlxuICAgICAgICAgICAgPHNwYW4+IE5hbWU6IHt7cmVzdC5uYW1lfX08L3NwYW4+XG4gICAgICAgICAgICA8c3Bhbj4gQWRkcmVzczoge3tyZXN0LmFkZHJlc3N9fTwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuPiBSYXRpbmc6IHt7cmVzdC5yYXRpbmd9fTwvc3Bhbj5cbiAgICAgICAgICAgIDxidXR0b24gKGNsaWNrKT1cImRlbGV0ZShyZXN0Ll9pZCwgcmVzdClcIj5EZWxldGU8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBzdHlsZT1cImJvcmRlcjoxcHggc29saWRcIj5cbiAgICAgIDxoND4gVXNlciBSZXN0czwvaDQ+XG4gICAgICA8dWwgKm5nRm9yPVwibGV0IHJlc3Qgb2YgdXNlclJlc3RzXCI+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxzcGFuPiBOYW1lOiB7e3Jlc3QubmFtZX19PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4+IEFkZHJlc3M6IHt7cmVzdC5hZGRyZXNzfX08L3NwYW4+XG4gICAgICAgICAgICA8c3Bhbj4gUmF0aW5nOiB7e3Jlc3QucmF0aW5nfX08L3NwYW4+XG4gICAgICAgICAgICA8YnV0dG9uIChjbGljayk9XCJkZWxldGUocmVzdC5faWQsIHJlc3QpXCI+RGVsZXRlPC9idXR0b24+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cblxuICA8L2Rpdj5cbiAgYCxcbn0pXG5cbmV4cG9ydCBjbGFzcyBSZXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xuICByZXN0czogUmVzdFtdO1xuICB1c2VyUmVzdHM6IFJlc3RbXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIF9hdXRoU2VydmljZTogQXV0aFNlcnZpY2UsIHByaXZhdGUgcmVzdFNlcnZpY2U6IFJlc3RTZXJ2aWNlLCBwcml2YXRlIF9lcnJvclNlcnZpY2U6IEVycm9yU2VydmljZSkgeyB9XG5cbiAgYWRkKG5hbWU6c3RyaW5nLCBhZGRyZXNzOnN0cmluZywgcmF0aW5nOm51bWJlcik6IHZvaWR7XG4gICAgY29uc3QgcmVzdCA9IG5ldyBSZXN0KGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VySWQnKSwgbmFtZSwgYWRkcmVzcywgcmF0aW5nKTtcbiAgICB0aGlzLnJlc3RTZXJ2aWNlLmNyZWF0ZShyZXN0KVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICBkYXRhID0+XG4gICAgICAgICAge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICAgICAgICAgIGlmKGRhdGEubWVzc2FnZSA9PSBcIlN1Y2Nlc3NcIilcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGhpcy5yZXN0cy5wdXNoKHJlc3QpOyAvL0NhbiBlcmFzZSB3aGVuIHdlIGRvbid0IHdhbnQgdG8gc2hvdyBhbGwgUmVzdHNcbiAgICAgICAgICAgICAgdGhpcy51c2VyUmVzdHMucHVzaChyZXN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIGVycm9yID0+IHRoaXMuX2Vycm9yU2VydmljZS5oYW5kbGVFcnJvcihlcnJvcilcbiAgICAgIClcbiAgfVxuXG4gIGRlbGV0ZShpZDogU3RyaW5nLCByZXN0OiBSZXN0KTp2b2lkXG4gIHtcbiAgICB0aGlzLnJlc3RTZXJ2aWNlLmRlbGV0ZShpZClcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIGRhdGEgPT5cbiAgICAgICAge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgICAgICAgaWYoZGF0YS5tZXNzYWdlID09IFwiU3VjY2Vzc1wiKVxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMucmVzdHMuc3BsaWNlKHRoaXMucmVzdHMuaW5kZXhPZihyZXN0KSwgMSk7IC8vQ2FuIGVyYXNlIHdoZW4gd2UgZG9uJ3Qgd2FudCB0byBzaG93IGFsbCBSZXN0c1xuICAgICAgICAgICAgdGhpcy51c2VyUmVzdHMuc3BsaWNlKHRoaXMudXNlclJlc3RzLmluZGV4T2YocmVzdCksIDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3IgPT4gdGhpcy5fZXJyb3JTZXJ2aWNlLmhhbmRsZUVycm9yKGVycm9yKVxuICAgICAgKVxuICB9XG5cbiAgbmdPbkluaXQoKXtcbiAgICB0aGlzLmdldCgpO1xuICAgIHRoaXMuZ2V0QWxsKCk7XG4gIH1cblxuICBnZXQoKVxuICB7XG4gICAgdGhpcy5yZXN0U2VydmljZS5nZXQobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJJZCcpKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgdXNlclJlc3RzID0+IHRoaXMudXNlclJlc3RzID0gdXNlclJlc3RzLFxuICAgICAgICBlcnJvciA9PiB0aGlzLl9lcnJvclNlcnZpY2UgPSA8YW55PmVycm9yXG4gICAgICApO1xuICB9XG5cbiAgZ2V0QWxsKClcbiAge1xuICAgIHRoaXMucmVzdFNlcnZpY2UuZ2V0UmVzdHMoKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgcmVzdHMgPT4gdGhpcy5yZXN0cyA9IHJlc3RzLFxuICAgICAgICAgICAgICBlcnJvciA9PiB0aGlzLl9lcnJvclNlcnZpY2U9IDxhbnk+ZXJyb3IpO1xuICB9XG5cbiAgaXNMb2dnZWRJbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2F1dGhTZXJ2aWNlLmlzTG9nZ2VkSW4oKTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
