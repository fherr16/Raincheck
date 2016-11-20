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
                var restList_2 = new restList_1.RestList("1", data.obj._id);
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
    RestComponent.prototype.delete = function (id, rest) {
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
                for (var j = 0; j < _this.rests.length; j++) {
                    if (_this.rests[j]._id == _this.restsList[i].restId) {
                        _this.myRestList.push(_this.rests[j]);
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
            template: "\n  <div *ngIf=\"isLoggedIn()\">\n    <h1> My Restaurants </h1>\n    <div>\n      <label> Name: </label><input #restName />\n      <label> Address: </label><input #restAddress />\n      <label> Rating: </label><input #restRating />\n      <button (click)=\"add(restName.value, restAddress.value, restRating.value);restName.value=null;restRating.value=null;restAddress.value=null\">\n        Add\n      </button>\n    </div>\n\n  <div style=\"border:1px solid\">\n    <h4> Current Restaurants In DB</h4>\n      <ul *ngFor=\"let rest of rests\">\n        <li>\n            <span> Name: {{rest.name}}</span>\n            <span> Address: {{rest.address}}</span>\n            <span> Rating: {{rest.rating}}</span>\n            <button (click)=\"delete(rest._id, rest)\">Delete</button>\n            </li>\n      </ul>\n  </div>\n\n  <div style=\"border:1px solid\">\n    <h4> Current Restaurants In DB</h4>\n      <ul *ngFor=\"let rest of myRestList\">\n        <li>\n            <span> Name: {{rest.name}}</span>\n            <span> Address: {{rest.address}}</span>\n            <span> Rating: {{rest.rating}}</span>\n            </li>\n      </ul>\n  </div>\n\n  <div style=\"border:1px solid\">\n    <h4> My Restaurants</h4>\n      <ul *ngFor=\"let rest of restsList\">\n        <li>\n            <span> userID: {{rest.userId}}</span>\n            <span> restID: {{rest.restId}}</span>\n            </li>\n      </ul>\n  </div>\n</div>\n  ",
        }), 
        __metadata('design:paramtypes', [router_1.Router, auth_service_1.AuthService, rest_service_1.RestService, error_service_1.ErrorService, restList_service_1.RestListService])
    ], RestComponent);
    return RestComponent;
}());
exports.RestComponent = RestComponent;

//# sourceMappingURL=data:application/json;base64,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QUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRTthQUNsQixTQUFTLENBQ1IsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssRUFBbEIsQ0FBa0IsRUFDM0IsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsYUFBYSxHQUFPLEtBQUssRUFBOUIsQ0FBOEIsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFRCxrQ0FBVSxHQUFWO1FBQ00sTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDMUMsQ0FBQztJQXJJTDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsVUFBVTtZQUNwQixRQUFRLEVBQUUsKzVDQTZDVDtTQUNGLENBQUM7O3FCQUFBO0lBc0ZGLG9CQUFDO0FBQUQsQ0FwRkEsQUFvRkMsSUFBQTtBQXBGWSxxQkFBYSxnQkFvRnpCLENBQUEiLCJmaWxlIjoicmVzdC9yZXN0cy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVzLCBST1VURVJfRElSRUNUSVZFUyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IEVycm9yU2VydmljZSB9IGZyb20gXCIuLi9lcnJvcnMvZXJyb3Iuc2VydmljZVwiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHtSZXN0fSBmcm9tIFwiLi9yZXN0XCI7XG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tIFwiLi8uLi9hdXRoL2F1dGguc2VydmljZVwiO1xuaW1wb3J0IHtSZXN0U2VydmljZX0gZnJvbSBcIi4vcmVzdC5zZXJ2aWNlXCI7XG5pbXBvcnQge1Jlc3RMaXN0fSBmcm9tIFwiLi9yZXN0TGlzdFwiO1xuaW1wb3J0IHtSZXN0TGlzdFNlcnZpY2V9IGZyb20gXCIuL3Jlc3RMaXN0LnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcIm15LXJlc3RzXCIsXG4gIHRlbXBsYXRlOiBgXG4gIDxkaXYgKm5nSWY9XCJpc0xvZ2dlZEluKClcIj5cbiAgICA8aDE+IE15IFJlc3RhdXJhbnRzIDwvaDE+XG4gICAgPGRpdj5cbiAgICAgIDxsYWJlbD4gTmFtZTogPC9sYWJlbD48aW5wdXQgI3Jlc3ROYW1lIC8+XG4gICAgICA8bGFiZWw+IEFkZHJlc3M6IDwvbGFiZWw+PGlucHV0ICNyZXN0QWRkcmVzcyAvPlxuICAgICAgPGxhYmVsPiBSYXRpbmc6IDwvbGFiZWw+PGlucHV0ICNyZXN0UmF0aW5nIC8+XG4gICAgICA8YnV0dG9uIChjbGljayk9XCJhZGQocmVzdE5hbWUudmFsdWUsIHJlc3RBZGRyZXNzLnZhbHVlLCByZXN0UmF0aW5nLnZhbHVlKTtyZXN0TmFtZS52YWx1ZT1udWxsO3Jlc3RSYXRpbmcudmFsdWU9bnVsbDtyZXN0QWRkcmVzcy52YWx1ZT1udWxsXCI+XG4gICAgICAgIEFkZFxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG5cbiAgPGRpdiBzdHlsZT1cImJvcmRlcjoxcHggc29saWRcIj5cbiAgICA8aDQ+IEN1cnJlbnQgUmVzdGF1cmFudHMgSW4gREI8L2g0PlxuICAgICAgPHVsICpuZ0Zvcj1cImxldCByZXN0IG9mIHJlc3RzXCI+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxzcGFuPiBOYW1lOiB7e3Jlc3QubmFtZX19PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4+IEFkZHJlc3M6IHt7cmVzdC5hZGRyZXNzfX08L3NwYW4+XG4gICAgICAgICAgICA8c3Bhbj4gUmF0aW5nOiB7e3Jlc3QucmF0aW5nfX08L3NwYW4+XG4gICAgICAgICAgICA8YnV0dG9uIChjbGljayk9XCJkZWxldGUocmVzdC5faWQsIHJlc3QpXCI+RGVsZXRlPC9idXR0b24+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgPC91bD5cbiAgPC9kaXY+XG5cbiAgPGRpdiBzdHlsZT1cImJvcmRlcjoxcHggc29saWRcIj5cbiAgICA8aDQ+IEN1cnJlbnQgUmVzdGF1cmFudHMgSW4gREI8L2g0PlxuICAgICAgPHVsICpuZ0Zvcj1cImxldCByZXN0IG9mIG15UmVzdExpc3RcIj5cbiAgICAgICAgPGxpPlxuICAgICAgICAgICAgPHNwYW4+IE5hbWU6IHt7cmVzdC5uYW1lfX08L3NwYW4+XG4gICAgICAgICAgICA8c3Bhbj4gQWRkcmVzczoge3tyZXN0LmFkZHJlc3N9fTwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuPiBSYXRpbmc6IHt7cmVzdC5yYXRpbmd9fTwvc3Bhbj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICA8L3VsPlxuICA8L2Rpdj5cblxuICA8ZGl2IHN0eWxlPVwiYm9yZGVyOjFweCBzb2xpZFwiPlxuICAgIDxoND4gTXkgUmVzdGF1cmFudHM8L2g0PlxuICAgICAgPHVsICpuZ0Zvcj1cImxldCByZXN0IG9mIHJlc3RzTGlzdFwiPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgICA8c3Bhbj4gdXNlcklEOiB7e3Jlc3QudXNlcklkfX08L3NwYW4+XG4gICAgICAgICAgICA8c3Bhbj4gcmVzdElEOiB7e3Jlc3QucmVzdElkfX08L3NwYW4+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgPC91bD5cbiAgPC9kaXY+XG48L2Rpdj5cbiAgYCxcbn0pXG5cbmV4cG9ydCBjbGFzcyBSZXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xuICByZXN0czogUmVzdFtdO1xuICByZXN0c0xpc3Q6IFJlc3RMaXN0W107XG4gIG15UmVzdExpc3Q6IFJlc3RbXSA9IFsgXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIF9hdXRoU2VydmljZTogQXV0aFNlcnZpY2UsIHByaXZhdGUgcmVzdFNlcnZpY2U6IFJlc3RTZXJ2aWNlLCBwcml2YXRlIF9lcnJvclNlcnZpY2U6IEVycm9yU2VydmljZSwgcHJpdmF0ZSByZXN0TGlzdFNlcnZpY2U6IFJlc3RMaXN0U2VydmljZSkgeyB9XG5cbiAgYWRkKG5hbWU6c3RyaW5nLCBhZGRyZXNzOnN0cmluZywgcmF0aW5nOm51bWJlcik6IHZvaWR7XG4gICAgY29uc3QgcmVzdCA9IG5ldyBSZXN0KG5hbWUsIGFkZHJlc3MsIHJhdGluZyk7XG4gICAgdGhpcy5yZXN0U2VydmljZS5jcmVhdGUocmVzdClcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgZGF0YSA9PlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgICAgICAgICBpZihkYXRhLm1lc3NhZ2UgPT0gXCJTdWNjZXNzXCIpe1xuICAgICAgICAgICAgICAgIHRoaXMucmVzdHMucHVzaChyZXN0KTtcbiAgICAgICAgICAgICAgICBjb25zdCByZXN0TGlzdCA9IG5ldyBSZXN0TGlzdChcIjFcIiwgZGF0YS5vYmouX2lkKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc3RMaXN0U2VydmljZS5jcmVhdGUocmVzdExpc3QpXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICAgIGRhdGEgPT5cbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICAgICAgICAgICAgICAgICAgaWYoZGF0YS5tZXNzYWdlID09IFwiU3VjY2Vzc1wiKXtcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc3RzTGlzdC5wdXNoKHJlc3RMaXN0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB0aGlzLl9lcnJvclNlcnZpY2UuaGFuZGxlRXJyb3IoZXJyb3IpXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIGVycm9yID0+IHRoaXMuX2Vycm9yU2VydmljZS5oYW5kbGVFcnJvcihlcnJvcilcbiAgICAgIClcbiAgfVxuXG4gIGRlbGV0ZShpZDogU3RyaW5nLCByZXN0OiBSZXN0KTp2b2lkXG4gIHtcbiAgICB0aGlzLnJlc3RTZXJ2aWNlLmRlbGV0ZShpZClcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIGRhdGEgPT5cbiAgICAgICAge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgICAgICAgaWYoZGF0YS5tZXNzYWdlID09IFwiU3VjY2Vzc1wiKVxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHZhciBpbmRleCA9IHRoaXMucmVzdHMuaW5kZXhPZihyZXN0KVxuICAgICAgICAgICAgdGhpcy5yZXN0cy5zcGxpY2UoaW5kZXgsIDEpXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlcnJvciA9PiB0aGlzLl9lcnJvclNlcnZpY2UuaGFuZGxlRXJyb3IoZXJyb3IpXG4gICAgICApXG4gIH1cblxuICBuZ09uSW5pdCgpe1xuICAgIHRoaXMuZ2V0UmVzdHMoKTtcbiAgICB0aGlzLmdldFJlc3RMaXN0cygpO1xuICB9XG5cbiAgZ2V0UmVzdExpc3RzKCl7XG4gICAgdGhpcy5yZXN0TGlzdFNlcnZpY2UuZ2V0UmVzdHNMaXN0KClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgIHJlc3RzTGlzdCA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXN0c0xpc3QgPSByZXN0c0xpc3Q7XG5cbiAgICAgICAgICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5yZXN0c0xpc3QubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgICAgZm9yKHZhciBqID0gMDsgaiA8IHRoaXMucmVzdHMubGVuZ3RoOyBqKyspe1xuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLnJlc3RzW2pdLl9pZCA9PSB0aGlzLnJlc3RzTGlzdFtpXS5yZXN0SWQpe1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMubXlSZXN0TGlzdC5wdXNoKHRoaXMucmVzdHNbal0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBlcnJvciA9PiB0aGlzLl9lcnJvclNlcnZpY2U9IDxhbnk+ZXJyb3IpO1xuICB9XG5cbiAgZ2V0UmVzdHMoKVxuICB7XG4gICAgdGhpcy5yZXN0U2VydmljZS5nZXRSZXN0cygpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICByZXN0cyA9PiB0aGlzLnJlc3RzID0gcmVzdHMsXG4gICAgICAgICAgICAgIGVycm9yID0+IHRoaXMuX2Vycm9yU2VydmljZT0gPGFueT5lcnJvcik7XG4gIH1cblxuICBpc0xvZ2dlZEluKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYXV0aFNlcnZpY2UuaXNMb2dnZWRJbigpO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
