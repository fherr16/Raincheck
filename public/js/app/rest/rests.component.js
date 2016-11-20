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
var restList_1 = require("./restList");
var restList_service_1 = require("./restList.service");
var RestComponent = (function () {
    function RestComponent(router, restService, _errorService, restListService) {
        this.router = router;
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
    RestComponent = __decorate([
        core_1.Component({
            selector: "my-rests",
            template: "\n  <h1> My Restaurants </h1>\n  <div>\n    <label> Name: </label><input #restName />\n    <label> Address: </label><input #restAddress />\n    <label> Rating: </label><input #restRating />\n    <button (click)=\"add(restName.value, restAddress.value, restRating.value);restName.value=null;restRating.value=null;restAddress.value=null\">\n      Add\n    </button>\n  </div>\n\n<div style=\"border:1px solid\">\n  <h4> Current Restaurants In DB</h4>\n    <ul *ngFor=\"let rest of rests\">\n      <li>\n          <span> Name: {{rest.name}}</span>\n          <span> Address: {{rest.address}}</span>\n          <span> Rating: {{rest.rating}}</span>\n          <button (click)=\"deleteRest(rest._id, rest)\">Delete</button>\n          </li>\n    </ul>\n</div>\n\n<div style=\"border:1px solid\">\n  <h4> My Actual List</h4>\n    <ul *ngFor=\"let rest of myRestList\">\n      <li>\n          <span> Name: {{rest.name}}</span>\n          <span> Address: {{rest.address}}</span>\n          <span> Rating: {{rest.rating}}</span>\n          <button (click)=\"deleteMyRest(rest._id, rest)\">Delete</button>\n          </li>\n    </ul>\n</div>\n\n<div style=\"border:1px solid\">\n  <h4>All RestList Items</h4>\n    <ul *ngFor=\"let rest of restsList\">\n      <li>\n          <span> userID: {{rest.userId}}</span>\n          <span> restID: {{rest.restId}}</span>\n          <button (click)=\"deleteRestList(rest._id, rest)\">Delete</button>\n          </li>\n    </ul>\n</div>\n  ",
        }), 
        __metadata('design:paramtypes', [router_1.Router, rest_service_1.RestService, error_service_1.ErrorService, restList_service_1.RestListService])
    ], RestComponent);
    return RestComponent;
}());
exports.RestComponent = RestComponent;

//# sourceMappingURL=data:application/json;base64,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KzdDQTZDVDtTQUNGLENBQUM7O3FCQUFBO0lBc0dGLG9CQUFDO0FBQUQsQ0FwR0EsQUFvR0MsSUFBQTtBQXBHWSxxQkFBYSxnQkFvR3pCLENBQUEiLCJmaWxlIjoicmVzdC9yZXN0cy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVzLCBST1VURVJfRElSRUNUSVZFUyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IEVycm9yU2VydmljZSB9IGZyb20gXCIuLi9lcnJvcnMvZXJyb3Iuc2VydmljZVwiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHtSZXN0fSBmcm9tIFwiLi9yZXN0XCI7XG5pbXBvcnQge1Jlc3RTZXJ2aWNlfSBmcm9tIFwiLi9yZXN0LnNlcnZpY2VcIjtcbmltcG9ydCB7UmVzdExpc3R9IGZyb20gXCIuL3Jlc3RMaXN0XCI7XG5pbXBvcnQge1Jlc3RMaXN0U2VydmljZX0gZnJvbSBcIi4vcmVzdExpc3Quc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibXktcmVzdHNcIixcbiAgdGVtcGxhdGU6IGBcbiAgPGgxPiBNeSBSZXN0YXVyYW50cyA8L2gxPlxuICA8ZGl2PlxuICAgIDxsYWJlbD4gTmFtZTogPC9sYWJlbD48aW5wdXQgI3Jlc3ROYW1lIC8+XG4gICAgPGxhYmVsPiBBZGRyZXNzOiA8L2xhYmVsPjxpbnB1dCAjcmVzdEFkZHJlc3MgLz5cbiAgICA8bGFiZWw+IFJhdGluZzogPC9sYWJlbD48aW5wdXQgI3Jlc3RSYXRpbmcgLz5cbiAgICA8YnV0dG9uIChjbGljayk9XCJhZGQocmVzdE5hbWUudmFsdWUsIHJlc3RBZGRyZXNzLnZhbHVlLCByZXN0UmF0aW5nLnZhbHVlKTtyZXN0TmFtZS52YWx1ZT1udWxsO3Jlc3RSYXRpbmcudmFsdWU9bnVsbDtyZXN0QWRkcmVzcy52YWx1ZT1udWxsXCI+XG4gICAgICBBZGRcbiAgICA8L2J1dHRvbj5cbiAgPC9kaXY+XG5cbjxkaXYgc3R5bGU9XCJib3JkZXI6MXB4IHNvbGlkXCI+XG4gIDxoND4gQ3VycmVudCBSZXN0YXVyYW50cyBJbiBEQjwvaDQ+XG4gICAgPHVsICpuZ0Zvcj1cImxldCByZXN0IG9mIHJlc3RzXCI+XG4gICAgICA8bGk+XG4gICAgICAgICAgPHNwYW4+IE5hbWU6IHt7cmVzdC5uYW1lfX08L3NwYW4+XG4gICAgICAgICAgPHNwYW4+IEFkZHJlc3M6IHt7cmVzdC5hZGRyZXNzfX08L3NwYW4+XG4gICAgICAgICAgPHNwYW4+IFJhdGluZzoge3tyZXN0LnJhdGluZ319PC9zcGFuPlxuICAgICAgICAgIDxidXR0b24gKGNsaWNrKT1cImRlbGV0ZVJlc3QocmVzdC5faWQsIHJlc3QpXCI+RGVsZXRlPC9idXR0b24+XG4gICAgICAgICAgPC9saT5cbiAgICA8L3VsPlxuPC9kaXY+XG5cbjxkaXYgc3R5bGU9XCJib3JkZXI6MXB4IHNvbGlkXCI+XG4gIDxoND4gTXkgQWN0dWFsIExpc3Q8L2g0PlxuICAgIDx1bCAqbmdGb3I9XCJsZXQgcmVzdCBvZiBteVJlc3RMaXN0XCI+XG4gICAgICA8bGk+XG4gICAgICAgICAgPHNwYW4+IE5hbWU6IHt7cmVzdC5uYW1lfX08L3NwYW4+XG4gICAgICAgICAgPHNwYW4+IEFkZHJlc3M6IHt7cmVzdC5hZGRyZXNzfX08L3NwYW4+XG4gICAgICAgICAgPHNwYW4+IFJhdGluZzoge3tyZXN0LnJhdGluZ319PC9zcGFuPlxuICAgICAgICAgIDxidXR0b24gKGNsaWNrKT1cImRlbGV0ZU15UmVzdChyZXN0Ll9pZCwgcmVzdClcIj5EZWxldGU8L2J1dHRvbj5cbiAgICAgICAgICA8L2xpPlxuICAgIDwvdWw+XG48L2Rpdj5cblxuPGRpdiBzdHlsZT1cImJvcmRlcjoxcHggc29saWRcIj5cbiAgPGg0PkFsbCBSZXN0TGlzdCBJdGVtczwvaDQ+XG4gICAgPHVsICpuZ0Zvcj1cImxldCByZXN0IG9mIHJlc3RzTGlzdFwiPlxuICAgICAgPGxpPlxuICAgICAgICAgIDxzcGFuPiB1c2VySUQ6IHt7cmVzdC51c2VySWR9fTwvc3Bhbj5cbiAgICAgICAgICA8c3Bhbj4gcmVzdElEOiB7e3Jlc3QucmVzdElkfX08L3NwYW4+XG4gICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwiZGVsZXRlUmVzdExpc3QocmVzdC5faWQsIHJlc3QpXCI+RGVsZXRlPC9idXR0b24+XG4gICAgICAgICAgPC9saT5cbiAgICA8L3VsPlxuPC9kaXY+XG4gIGAsXG59KVxuXG5leHBvcnQgY2xhc3MgUmVzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcbiAgcmVzdHM6IFJlc3RbXSA9IFtdO1xuICByZXN0c0xpc3Q6IFJlc3RMaXN0W10gPSBbXTtcbiAgbXlSZXN0TGlzdDogUmVzdFtdID0gW107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSByZXN0U2VydmljZTogUmVzdFNlcnZpY2UsIHByaXZhdGUgX2Vycm9yU2VydmljZTogRXJyb3JTZXJ2aWNlLCBwcml2YXRlIHJlc3RMaXN0U2VydmljZTogUmVzdExpc3RTZXJ2aWNlKSB7IH1cblxuICBhZGQobmFtZTpzdHJpbmcsIGFkZHJlc3M6c3RyaW5nLCByYXRpbmc6bnVtYmVyKTogdm9pZHtcbiAgICBjb25zdCByZXN0ID0gbmV3IFJlc3QobmFtZSwgYWRkcmVzcywgcmF0aW5nKTtcbiAgICB0aGlzLnJlc3RTZXJ2aWNlLmNyZWF0ZShyZXN0KVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICBkYXRhID0+XG4gICAgICAgICAge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICAgICAgICAgIGlmKGRhdGEubWVzc2FnZSA9PSBcIlN1Y2Nlc3NcIil7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXN0cy5wdXNoKHJlc3QpO1xuICAgICAgICAgICAgICAgIHRoaXMubXlSZXN0TGlzdC5wdXNoKHJlc3QpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3RMaXN0ID0gbmV3IFJlc3RMaXN0KGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VySWQnKSwgZGF0YS5vYmouX2lkKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc3RMaXN0U2VydmljZS5jcmVhdGUocmVzdExpc3QpXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICAgIGRhdGEgPT5cbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICAgICAgICAgICAgICAgICAgaWYoZGF0YS5tZXNzYWdlID09IFwiU3VjY2Vzc1wiKXtcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc3RzTGlzdC5wdXNoKHJlc3RMaXN0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB0aGlzLl9lcnJvclNlcnZpY2UuaGFuZGxlRXJyb3IoZXJyb3IpXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIGVycm9yID0+IHRoaXMuX2Vycm9yU2VydmljZS5oYW5kbGVFcnJvcihlcnJvcilcbiAgICAgIClcbiAgfVxuXG4gIGRlbGV0ZVJlc3RMaXN0KGlkOiBTdHJpbmcsIHJlc3RMaXN0OiBSZXN0TGlzdCk6dm9pZFxuICB7XG4gICAgdGhpcy5yZXN0TGlzdFNlcnZpY2UuZGVsZXRlKGlkKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgZGF0YSA9PlxuICAgICAgICB7XG4gICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICAgICAgICBpZihkYXRhLm1lc3NhZ2UgPT0gXCJTdWNjZXNzXCIpXG4gICAgICAgICAge1xuICAgICAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5yZXN0c0xpc3QuaW5kZXhPZihyZXN0TGlzdClcbiAgICAgICAgICAgIHRoaXMucmVzdHNMaXN0LnNwbGljZShpbmRleCwgMSlcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yID0+IHRoaXMuX2Vycm9yU2VydmljZS5oYW5kbGVFcnJvcihlcnJvcilcbiAgICAgIClcbiAgfVxuXG4gIGRlbGV0ZVJlc3QoaWQ6IFN0cmluZywgcmVzdDogUmVzdCk6dm9pZFxuICB7XG4gICAgdGhpcy5yZXN0U2VydmljZS5kZWxldGUoaWQpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICBkYXRhID0+XG4gICAgICAgIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgICAgICAgIGlmKGRhdGEubWVzc2FnZSA9PSBcIlN1Y2Nlc3NcIilcbiAgICAgICAgICB7XG4gICAgICAgICAgICB2YXIgaW5kZXggPSB0aGlzLnJlc3RzLmluZGV4T2YocmVzdClcbiAgICAgICAgICAgIHRoaXMucmVzdHMuc3BsaWNlKGluZGV4LCAxKVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3IgPT4gdGhpcy5fZXJyb3JTZXJ2aWNlLmhhbmRsZUVycm9yKGVycm9yKVxuICAgICAgKVxuICB9XG5cbiAgbmdPbkluaXQoKXtcbiAgICB0aGlzLmdldFJlc3RzKCk7XG4gICAgdGhpcy5nZXRSZXN0TGlzdHMoKTtcbiAgfVxuXG4gIGdldFJlc3RMaXN0cygpe1xuICAgIHRoaXMucmVzdExpc3RTZXJ2aWNlLmdldFJlc3RzTGlzdCgpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICByZXN0c0xpc3QgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucmVzdHNMaXN0ID0gcmVzdHNMaXN0O1xuXG4gICAgICAgICAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHRoaXMucmVzdHNMaXN0Lmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICAgICAgIGlmKHRoaXMucmVzdHNMaXN0W2ldLnVzZXJJZCA9PSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcklkJykpe1xuICAgICAgICAgICAgICAgICAgICBmb3IodmFyIGogPSAwOyBqIDwgdGhpcy5yZXN0cy5sZW5ndGg7IGorKyl7XG4gICAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5yZXN0c1tqXS5faWQgPT0gdGhpcy5yZXN0c0xpc3RbaV0ucmVzdElkKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubXlSZXN0TGlzdC5wdXNoKHRoaXMucmVzdHNbal0pO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZXJyb3IgPT4gdGhpcy5fZXJyb3JTZXJ2aWNlPSA8YW55PmVycm9yKTtcbiAgfVxuXG4gIGdldFJlc3RzKClcbiAge1xuICAgIHRoaXMucmVzdFNlcnZpY2UuZ2V0UmVzdHMoKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgcmVzdHMgPT4gdGhpcy5yZXN0cyA9IHJlc3RzLFxuICAgICAgICAgICAgICBlcnJvciA9PiB0aGlzLl9lcnJvclNlcnZpY2U9IDxhbnk+ZXJyb3IpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
