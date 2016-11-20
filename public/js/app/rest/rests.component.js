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
var restList_1 = require("./restList");
var restList_service_1 = require("./restList.service");
var RestComponent = (function () {
    function RestComponent(router, _authService, restService, _errorService, restListService) {
        this.router = router;
        this._authService = _authService;
        this.restService = restService;
        this._errorService = _errorService;
        this.restListService = restListService;
        this.rests = [];
        this.restsList = [];
        this.myRestList = [];
    }
    RestComponent.prototype.add = function (name, address, rating) {
        var _this = this;
        var rest = new rest_1.Rest(name, address, rating);
        this.restService.create(rest)
            .subscribe(function (data) {
            console.log(data);
            if (data.message == "Success") {
                _this.rests.push(rest);
                _this.myRestList.push(rest);
                var restList_2 = new restList_1.RestList(localStorage.getItem('userId'), data.obj._id);
                _this.restListService.create(restList_2)
                    .subscribe(function (data) {
                    console.log(data);
                    if (data.message == "Success") {
                        _this.restsList.push(restList_2);
                    }
                }, function (error) { return _this._errorService.handleError(error); });
            }
        }, function (error) { return _this._errorService.handleError(error); });
    };
    RestComponent.prototype.deleteMyRestList = function (id, rest) {
        var _this = this;
        for (var i = 0; i < this.restsList.length; i++)
            if (this.restsList[i].restId == id) {
                var _id = this.restsList[i]._id;
                var loc = i;
            }
        this.restListService.delete(_id)
            .subscribe(function (data) {
            console.log(data);
            if (data.message == "Success") {
                var index = _this.myRestList.indexOf(rest);
                _this.myRestList.splice(index, 1);
                _this.restsList.splice(loc, 1);
            }
        }, function (error) { return _this._errorService.handleError(error); });
    };
    RestComponent.prototype.deleteRestList = function (id, restList) {
        var _this = this;
        this.restListService.delete(id)
            .subscribe(function (data) {
            console.log(data);
            if (data.message == "Success") {
                var index = _this.restsList.indexOf(restList);
                _this.restsList.splice(index, 1);
            }
        }, function (error) { return _this._errorService.handleError(error); });
    };
    RestComponent.prototype.deleteRest = function (id, rest) {
        var _this = this;
        this.restService.delete(id)
            .subscribe(function (data) {
            console.log(data);
            if (data.message == "Success") {
                var index = _this.rests.indexOf(rest);
                _this.rests.splice(index, 1);
            }
        }, function (error) { return _this._errorService.handleError(error); });
    };
    RestComponent.prototype.ngOnInit = function () {
        this.getRests();
        this.getRestLists();
    };
    RestComponent.prototype.getRestLists = function () {
        var _this = this;
        this.restListService.getRestsList()
            .subscribe(function (restsList) {
            _this.restsList = restsList;
            for (var i = 0; i < _this.restsList.length; i++) {
                if (_this.restsList[i].userId == localStorage.getItem('userId')) {
                    for (var j = 0; j < _this.rests.length; j++) {
                        if (_this.rests[j]._id == _this.restsList[i].restId) {
                            _this.myRestList.push(_this.rests[j]);
                        }
                    }
                }
            }
        }, function (error) { return _this._errorService = error; });
    };
    RestComponent.prototype.getRests = function () {
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
            template: "\n  <div *ngIf=\"isLoggedIn()\">\n    <h1> My Restaurants </h1>\n    <div>\n      <label> Name: </label><input #restName />\n      <label> Address: </label><input #restAddress />\n      <label> Rating: </label><input #restRating />\n      <button (click)=\"add(restName.value, restAddress.value, restRating.value);restName.value=null;restRating.value=null;restAddress.value=null\">\n        Add\n      </button>\n    </div>\n\n<div style=\"border:1px solid\">\n  <h4> Current Restaurants In DB</h4>\n    <ul *ngFor=\"let rest of rests\">\n      <li>\n          <span> Name: {{rest.name}}</span>\n          <span> Address: {{rest.address}}</span>\n          <span> Rating: {{rest.rating}}</span>\n          <button (click)=\"deleteRest(rest._id, rest)\">Delete</button>\n          </li>\n    </ul>\n</div>\n\n<div style=\"border:1px solid\">\n  <h4> My Actual List</h4>\n    <ul *ngFor=\"let rest of myRestList\">\n      <li>\n          <span> Name: {{rest.name}}</span>\n          <span> Address: {{rest.address}}</span>\n          <span> Rating: {{rest.rating}}</span>\n          <button (click)=\"deleteMyRestList(rest._id, rest)\">Delete</button>\n          </li>\n    </ul>\n</div>\n\n<div style=\"border:1px solid\">\n  <h4>All RestList Items</h4>\n    <ul *ngFor=\"let rest of restsList\">\n      <li>\n          <span> userID: {{rest.userId}}</span>\n          <span> restID: {{rest.restId}}</span>\n          <button (click)=\"deleteRestList(rest._id, rest)\">Delete</button>\n          </li>\n    </ul>\n</div>\n  ",
        }), 
        __metadata('design:paramtypes', [router_1.Router, auth_service_1.AuthService, rest_service_1.RestService, error_service_1.ErrorService, restList_service_1.RestListService])
    ], RestComponent);
    return RestComponent;
}());
exports.RestComponent = RestComponent;

//# sourceMappingURL=data:application/json;base64,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SUFDMUMsQ0FBQztJQXBMTDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsVUFBVTtZQUNwQixRQUFRLEVBQUUscS9DQThDVDtTQUNGLENBQUM7O3FCQUFBO0lBb0lGLG9CQUFDO0FBQUQsQ0FsSUEsQUFrSUMsSUFBQTtBQWxJWSxxQkFBYSxnQkFrSXpCLENBQUEiLCJmaWxlIjoicmVzdC9yZXN0cy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVzLCBST1VURVJfRElSRUNUSVZFUyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IEVycm9yU2VydmljZSB9IGZyb20gXCIuLi9lcnJvcnMvZXJyb3Iuc2VydmljZVwiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHtSZXN0fSBmcm9tIFwiLi9yZXN0XCI7XG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tIFwiLi8uLi9hdXRoL2F1dGguc2VydmljZVwiO1xuaW1wb3J0IHtSZXN0U2VydmljZX0gZnJvbSBcIi4vcmVzdC5zZXJ2aWNlXCI7XG5pbXBvcnQge1Jlc3RMaXN0fSBmcm9tIFwiLi9yZXN0TGlzdFwiO1xuaW1wb3J0IHtSZXN0TGlzdFNlcnZpY2V9IGZyb20gXCIuL3Jlc3RMaXN0LnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcIm15LXJlc3RzXCIsXG4gIHRlbXBsYXRlOiBgXG4gIDxkaXYgKm5nSWY9XCJpc0xvZ2dlZEluKClcIj5cbiAgICA8aDE+IE15IFJlc3RhdXJhbnRzIDwvaDE+XG4gICAgPGRpdj5cbiAgICAgIDxsYWJlbD4gTmFtZTogPC9sYWJlbD48aW5wdXQgI3Jlc3ROYW1lIC8+XG4gICAgICA8bGFiZWw+IEFkZHJlc3M6IDwvbGFiZWw+PGlucHV0ICNyZXN0QWRkcmVzcyAvPlxuICAgICAgPGxhYmVsPiBSYXRpbmc6IDwvbGFiZWw+PGlucHV0ICNyZXN0UmF0aW5nIC8+XG4gICAgICA8YnV0dG9uIChjbGljayk9XCJhZGQocmVzdE5hbWUudmFsdWUsIHJlc3RBZGRyZXNzLnZhbHVlLCByZXN0UmF0aW5nLnZhbHVlKTtyZXN0TmFtZS52YWx1ZT1udWxsO3Jlc3RSYXRpbmcudmFsdWU9bnVsbDtyZXN0QWRkcmVzcy52YWx1ZT1udWxsXCI+XG4gICAgICAgIEFkZFxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG5cbjxkaXYgc3R5bGU9XCJib3JkZXI6MXB4IHNvbGlkXCI+XG4gIDxoND4gQ3VycmVudCBSZXN0YXVyYW50cyBJbiBEQjwvaDQ+XG4gICAgPHVsICpuZ0Zvcj1cImxldCByZXN0IG9mIHJlc3RzXCI+XG4gICAgICA8bGk+XG4gICAgICAgICAgPHNwYW4+IE5hbWU6IHt7cmVzdC5uYW1lfX08L3NwYW4+XG4gICAgICAgICAgPHNwYW4+IEFkZHJlc3M6IHt7cmVzdC5hZGRyZXNzfX08L3NwYW4+XG4gICAgICAgICAgPHNwYW4+IFJhdGluZzoge3tyZXN0LnJhdGluZ319PC9zcGFuPlxuICAgICAgICAgIDxidXR0b24gKGNsaWNrKT1cImRlbGV0ZVJlc3QocmVzdC5faWQsIHJlc3QpXCI+RGVsZXRlPC9idXR0b24+XG4gICAgICAgICAgPC9saT5cbiAgICA8L3VsPlxuPC9kaXY+XG5cbjxkaXYgc3R5bGU9XCJib3JkZXI6MXB4IHNvbGlkXCI+XG4gIDxoND4gTXkgQWN0dWFsIExpc3Q8L2g0PlxuICAgIDx1bCAqbmdGb3I9XCJsZXQgcmVzdCBvZiBteVJlc3RMaXN0XCI+XG4gICAgICA8bGk+XG4gICAgICAgICAgPHNwYW4+IE5hbWU6IHt7cmVzdC5uYW1lfX08L3NwYW4+XG4gICAgICAgICAgPHNwYW4+IEFkZHJlc3M6IHt7cmVzdC5hZGRyZXNzfX08L3NwYW4+XG4gICAgICAgICAgPHNwYW4+IFJhdGluZzoge3tyZXN0LnJhdGluZ319PC9zcGFuPlxuICAgICAgICAgIDxidXR0b24gKGNsaWNrKT1cImRlbGV0ZU15UmVzdExpc3QocmVzdC5faWQsIHJlc3QpXCI+RGVsZXRlPC9idXR0b24+XG4gICAgICAgICAgPC9saT5cbiAgICA8L3VsPlxuPC9kaXY+XG5cbjxkaXYgc3R5bGU9XCJib3JkZXI6MXB4IHNvbGlkXCI+XG4gIDxoND5BbGwgUmVzdExpc3QgSXRlbXM8L2g0PlxuICAgIDx1bCAqbmdGb3I9XCJsZXQgcmVzdCBvZiByZXN0c0xpc3RcIj5cbiAgICAgIDxsaT5cbiAgICAgICAgICA8c3Bhbj4gdXNlcklEOiB7e3Jlc3QudXNlcklkfX08L3NwYW4+XG4gICAgICAgICAgPHNwYW4+IHJlc3RJRDoge3tyZXN0LnJlc3RJZH19PC9zcGFuPlxuICAgICAgICAgIDxidXR0b24gKGNsaWNrKT1cImRlbGV0ZVJlc3RMaXN0KHJlc3QuX2lkLCByZXN0KVwiPkRlbGV0ZTwvYnV0dG9uPlxuICAgICAgICAgIDwvbGk+XG4gICAgPC91bD5cbjwvZGl2PlxuICBgLFxufSlcblxuZXhwb3J0IGNsYXNzIFJlc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG4gIHJlc3RzOiBSZXN0W10gPSBbXTtcbiAgcmVzdHNMaXN0OiBSZXN0TGlzdFtdID0gW107XG4gIG15UmVzdExpc3Q6IFJlc3RbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgX2F1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSwgcHJpdmF0ZSByZXN0U2VydmljZTogUmVzdFNlcnZpY2UsIHByaXZhdGUgX2Vycm9yU2VydmljZTogRXJyb3JTZXJ2aWNlLCBwcml2YXRlIHJlc3RMaXN0U2VydmljZTogUmVzdExpc3RTZXJ2aWNlKSB7IH1cblxuICBhZGQobmFtZTpzdHJpbmcsIGFkZHJlc3M6c3RyaW5nLCByYXRpbmc6bnVtYmVyKTogdm9pZHtcbiAgICBjb25zdCByZXN0ID0gbmV3IFJlc3QobmFtZSwgYWRkcmVzcywgcmF0aW5nKTtcbiAgICB0aGlzLnJlc3RTZXJ2aWNlLmNyZWF0ZShyZXN0KVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICBkYXRhID0+XG4gICAgICAgICAge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICAgICAgICAgIGlmKGRhdGEubWVzc2FnZSA9PSBcIlN1Y2Nlc3NcIil7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXN0cy5wdXNoKHJlc3QpO1xuICAgICAgICAgICAgICAgIHRoaXMubXlSZXN0TGlzdC5wdXNoKHJlc3QpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3RMaXN0ID0gbmV3IFJlc3RMaXN0KGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VySWQnKSwgZGF0YS5vYmouX2lkKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc3RMaXN0U2VydmljZS5jcmVhdGUocmVzdExpc3QpXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICAgIGRhdGEgPT5cbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICAgICAgICAgICAgICAgICAgaWYoZGF0YS5tZXNzYWdlID09IFwiU3VjY2Vzc1wiKXtcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc3RzTGlzdC5wdXNoKHJlc3RMaXN0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB0aGlzLl9lcnJvclNlcnZpY2UuaGFuZGxlRXJyb3IoZXJyb3IpXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIGVycm9yID0+IHRoaXMuX2Vycm9yU2VydmljZS5oYW5kbGVFcnJvcihlcnJvcilcbiAgICAgIClcbiAgfVxuXG4gIGRlbGV0ZU15UmVzdExpc3QoaWQ6IFN0cmluZywgcmVzdDogUmVzdCk6dm9pZFxuICB7XG5cbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5yZXN0c0xpc3QubGVuZ3RoOyBpKyspXG4gICAgICBpZih0aGlzLnJlc3RzTGlzdFtpXS5yZXN0SWQgPT0gaWQpXG4gICAgICB7XG4gICAgICAgIHZhciBfaWQgPSB0aGlzLnJlc3RzTGlzdFtpXS5faWRcbiAgICAgICAgdmFyIGxvYyA9IGlcbiAgICAgIH1cblxuICAgIHRoaXMucmVzdExpc3RTZXJ2aWNlLmRlbGV0ZShfaWQpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICBkYXRhID0+XG4gICAgICAgIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgICAgICAgIGlmKGRhdGEubWVzc2FnZSA9PSBcIlN1Y2Nlc3NcIilcbiAgICAgICAgICB7XG4gICAgICAgICAgICB2YXIgaW5kZXggPSB0aGlzLm15UmVzdExpc3QuaW5kZXhPZihyZXN0KVxuICAgICAgICAgICAgdGhpcy5teVJlc3RMaXN0LnNwbGljZShpbmRleCwgMSlcbiAgICAgICAgICAgIHRoaXMucmVzdHNMaXN0LnNwbGljZShsb2MsIDEpXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlcnJvciA9PiB0aGlzLl9lcnJvclNlcnZpY2UuaGFuZGxlRXJyb3IoZXJyb3IpXG4gICAgICApXG4gIH1cblxuICBkZWxldGVSZXN0TGlzdChpZDogU3RyaW5nLCByZXN0TGlzdDogUmVzdExpc3QpOnZvaWRcbiAge1xuICAgIHRoaXMucmVzdExpc3RTZXJ2aWNlLmRlbGV0ZShpZClcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIGRhdGEgPT5cbiAgICAgICAge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgICAgICAgaWYoZGF0YS5tZXNzYWdlID09IFwiU3VjY2Vzc1wiKVxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHZhciBpbmRleCA9IHRoaXMucmVzdHNMaXN0LmluZGV4T2YocmVzdExpc3QpXG4gICAgICAgICAgICB0aGlzLnJlc3RzTGlzdC5zcGxpY2UoaW5kZXgsIDEpXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlcnJvciA9PiB0aGlzLl9lcnJvclNlcnZpY2UuaGFuZGxlRXJyb3IoZXJyb3IpXG4gICAgICApXG4gIH1cblxuICBkZWxldGVSZXN0KGlkOiBTdHJpbmcsIHJlc3Q6IFJlc3QpOnZvaWRcbiAge1xuICAgIHRoaXMucmVzdFNlcnZpY2UuZGVsZXRlKGlkKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgZGF0YSA9PlxuICAgICAgICB7XG4gICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICAgICAgICBpZihkYXRhLm1lc3NhZ2UgPT0gXCJTdWNjZXNzXCIpXG4gICAgICAgICAge1xuICAgICAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5yZXN0cy5pbmRleE9mKHJlc3QpXG4gICAgICAgICAgICB0aGlzLnJlc3RzLnNwbGljZShpbmRleCwgMSlcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yID0+IHRoaXMuX2Vycm9yU2VydmljZS5oYW5kbGVFcnJvcihlcnJvcilcbiAgICAgIClcbiAgfVxuXG4gIG5nT25Jbml0KCl7XG4gICAgdGhpcy5nZXRSZXN0cygpO1xuICAgIHRoaXMuZ2V0UmVzdExpc3RzKCk7XG4gIH1cblxuICBnZXRSZXN0TGlzdHMoKXtcbiAgICB0aGlzLnJlc3RMaXN0U2VydmljZS5nZXRSZXN0c0xpc3QoKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgcmVzdHNMaXN0ID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc3RzTGlzdCA9IHJlc3RzTGlzdDtcblxuICAgICAgICAgICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLnJlc3RzTGlzdC5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAgICAgICBpZih0aGlzLnJlc3RzTGlzdFtpXS51c2VySWQgPT0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJJZCcpKXtcbiAgICAgICAgICAgICAgICAgICAgZm9yKHZhciBqID0gMDsgaiA8IHRoaXMucmVzdHMubGVuZ3RoOyBqKyspe1xuICAgICAgICAgICAgICAgICAgICAgIGlmKHRoaXMucmVzdHNbal0uX2lkID09IHRoaXMucmVzdHNMaXN0W2ldLnJlc3RJZCl7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm15UmVzdExpc3QucHVzaCh0aGlzLnJlc3RzW2pdKTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGVycm9yID0+IHRoaXMuX2Vycm9yU2VydmljZT0gPGFueT5lcnJvcik7XG4gIH1cblxuICBnZXRSZXN0cygpXG4gIHtcbiAgICB0aGlzLnJlc3RTZXJ2aWNlLmdldFJlc3RzKClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgIHJlc3RzID0+IHRoaXMucmVzdHMgPSByZXN0cyxcbiAgICAgICAgICAgICAgZXJyb3IgPT4gdGhpcy5fZXJyb3JTZXJ2aWNlPSA8YW55PmVycm9yKTtcbiAgfVxuXG4gIGlzTG9nZ2VkSW4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hdXRoU2VydmljZS5pc0xvZ2dlZEluKCk7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
