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
            .subscribe(function (data) {
            console.log(data);
            if (data.message == "Success")
                _this.rests.push(rest);
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
    };
    RestComponent.prototype.getRests = function () {
        var _this = this;
        this.restService.getRests()
            .subscribe(function (rests) { return _this.rests = rests; }, function (error) { return _this._errorService = error; });
        console.log("Finished with getRests()");
    };
    RestComponent = __decorate([
        core_1.Component({
            selector: "my-rests",
            template: "\n  <h1> My Restaurants </h1>\n  <div>\n    <label> Name: </label><input #restName />\n    <label> Address: </label><input #restAddress />\n    <label> Rating: </label><input #restRating />\n    <button (click)=\"add(restName.value, restAddress.value, restRating.value);restName.value=null;restRating.value=null;restAddress.value=null\">\n      Add\n    </button>\n  </div>\n\n<h4> Current Restaurants </h4>\n  <ul *ngFor=\"let rest of rests\">\n    <li>\n        <span> Name: {{rest.name}}</span>\n        <span> Address: {{rest.address}}</span>\n        <span> Rating: {{rest.rating}}</span>\n        <button (click)=\"delete(rest._id, rest)\">Delete</button>\n    </li>\n  </ul>\n  ",
        }), 
        __metadata('design:paramtypes', [router_1.Router, rest_service_1.RestService, error_service_1.ErrorService])
    ], RestComponent);
    return RestComponent;
}());
exports.RestComponent = RestComponent;

//# sourceMappingURL=data:application/json;base64,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cG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlcywgUk9VVEVSX0RJUkVDVElWRVMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBFcnJvclNlcnZpY2UgfSBmcm9tIFwiLi4vZXJyb3JzL2Vycm9yLnNlcnZpY2VcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7UmVzdH0gZnJvbSBcIi4vcmVzdFwiO1xuaW1wb3J0IHtSZXN0U2VydmljZX0gZnJvbSBcIi4vcmVzdC5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJteS1yZXN0c1wiLFxuICB0ZW1wbGF0ZTogYFxuICA8aDE+IE15IFJlc3RhdXJhbnRzIDwvaDE+XG4gIDxkaXY+XG4gICAgPGxhYmVsPiBOYW1lOiA8L2xhYmVsPjxpbnB1dCAjcmVzdE5hbWUgLz5cbiAgICA8bGFiZWw+IEFkZHJlc3M6IDwvbGFiZWw+PGlucHV0ICNyZXN0QWRkcmVzcyAvPlxuICAgIDxsYWJlbD4gUmF0aW5nOiA8L2xhYmVsPjxpbnB1dCAjcmVzdFJhdGluZyAvPlxuICAgIDxidXR0b24gKGNsaWNrKT1cImFkZChyZXN0TmFtZS52YWx1ZSwgcmVzdEFkZHJlc3MudmFsdWUsIHJlc3RSYXRpbmcudmFsdWUpO3Jlc3ROYW1lLnZhbHVlPW51bGw7cmVzdFJhdGluZy52YWx1ZT1udWxsO3Jlc3RBZGRyZXNzLnZhbHVlPW51bGxcIj5cbiAgICAgIEFkZFxuICAgIDwvYnV0dG9uPlxuICA8L2Rpdj5cblxuPGg0PiBDdXJyZW50IFJlc3RhdXJhbnRzIDwvaDQ+XG4gIDx1bCAqbmdGb3I9XCJsZXQgcmVzdCBvZiByZXN0c1wiPlxuICAgIDxsaT5cbiAgICAgICAgPHNwYW4+IE5hbWU6IHt7cmVzdC5uYW1lfX08L3NwYW4+XG4gICAgICAgIDxzcGFuPiBBZGRyZXNzOiB7e3Jlc3QuYWRkcmVzc319PC9zcGFuPlxuICAgICAgICA8c3Bhbj4gUmF0aW5nOiB7e3Jlc3QucmF0aW5nfX08L3NwYW4+XG4gICAgICAgIDxidXR0b24gKGNsaWNrKT1cImRlbGV0ZShyZXN0Ll9pZCwgcmVzdClcIj5EZWxldGU8L2J1dHRvbj5cbiAgICA8L2xpPlxuICA8L3VsPlxuICBgLFxufSlcblxuZXhwb3J0IGNsYXNzIFJlc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG4gIHJlc3RzOiBSZXN0W107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSByZXN0U2VydmljZTogUmVzdFNlcnZpY2UsIHByaXZhdGUgX2Vycm9yU2VydmljZTogRXJyb3JTZXJ2aWNlKSB7IH1cblxuICBhZGQobmFtZTpzdHJpbmcsIGFkZHJlc3M6c3RyaW5nLCByYXRpbmc6bnVtYmVyKTogdm9pZHtcbiAgICBjb25zdCByZXN0ID0gbmV3IFJlc3QobmFtZSwgYWRkcmVzcywgcmF0aW5nKTtcbiAgICB0aGlzLnJlc3RTZXJ2aWNlLmNyZWF0ZShyZXN0KVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICBkYXRhID0+XG4gICAgICAgICAge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICAgICAgICAgIGlmKGRhdGEubWVzc2FnZSA9PSBcIlN1Y2Nlc3NcIilcbiAgICAgICAgICAgICAgdGhpcy5yZXN0cy5wdXNoKHJlc3QpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBlcnJvciA9PiB0aGlzLl9lcnJvclNlcnZpY2UuaGFuZGxlRXJyb3IoZXJyb3IpXG4gICAgICApXG4gIH1cblxuICBkZWxldGUoaWQ6IFN0cmluZywgcmVzdDogUmVzdCk6dm9pZFxuICB7XG4gICAgdGhpcy5yZXN0U2VydmljZS5kZWxldGUoaWQpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICBkYXRhID0+XG4gICAgICAgIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgICAgICAgIGlmKGRhdGEubWVzc2FnZSA9PSBcIlN1Y2Nlc3NcIilcbiAgICAgICAgICB7XG4gICAgICAgICAgICB2YXIgaW5kZXggPSB0aGlzLnJlc3RzLmluZGV4T2YocmVzdClcbiAgICAgICAgICAgIHRoaXMucmVzdHMuc3BsaWNlKGluZGV4LCAxKVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3IgPT4gdGhpcy5fZXJyb3JTZXJ2aWNlLmhhbmRsZUVycm9yKGVycm9yKVxuICAgICAgKVxuICB9XG5cbiAgbmdPbkluaXQoKXtcbiAgICB0aGlzLmdldFJlc3RzKCk7XG4gIH1cblxuICBnZXRSZXN0cygpXG4gIHtcbiAgICB0aGlzLnJlc3RTZXJ2aWNlLmdldFJlc3RzKClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgIHJlc3RzID0+IHRoaXMucmVzdHMgPSByZXN0cyxcbiAgICAgICAgICAgICAgZXJyb3IgPT4gdGhpcy5fZXJyb3JTZXJ2aWNlPSA8YW55PmVycm9yKTtcbiAgICBjb25zb2xlLmxvZyhcIkZpbmlzaGVkIHdpdGggZ2V0UmVzdHMoKVwiKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
