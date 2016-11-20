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
    RestComponent = __decorate([
        core_1.Component({
            selector: "my-rests",
            template: "\n  <h1> My Restaurants </h1>\n  <div>\n    <label> Name: </label><input #restName />\n    <label> Address: </label><input #restAddress />\n    <label> Rating: </label><input #restRating />\n    <button (click)=\"add(restName.value, restAddress.value, restRating.value);restName.value=null;restRating.value=null;restAddress.value=null\">\n      Add\n    </button>\n  </div>\n\n<div style=\"border:1px solid\">\n  <h4> Current Restaurants In DB</h4>\n    <ul *ngFor=\"let rest of rests\">\n      <li>\n          <span> Name: {{rest.name}}</span>\n          <span> Address: {{rest.address}}</span>\n          <span> Rating: {{rest.rating}}</span>\n          <button (click)=\"delete(rest._id, rest)\">Delete</button>\n          </li>\n    </ul>\n</div>\n\n<div style=\"border:1px solid\">\n  <h4> Current Restaurants In DB</h4>\n    <ul *ngFor=\"let rest of myRestList\">\n      <li>\n          <span> Name: {{rest.name}}</span>\n          <span> Address: {{rest.address}}</span>\n          <span> Rating: {{rest.rating}}</span>\n          </li>\n    </ul>\n</div>\n\n<div style=\"border:1px solid\">\n  <h4> My Restaurants</h4>\n    <ul *ngFor=\"let rest of restsList\">\n      <li>\n          <span> userID: {{rest.userId}}</span>\n          <span> restID: {{rest.restId}}</span>\n          </li>\n    </ul>\n</div>\n  ",
        }), 
        __metadata('design:paramtypes', [router_1.Router, rest_service_1.RestService, error_service_1.ErrorService, restList_service_1.RestListService])
    ], RestComponent);
    return RestComponent;
}());
exports.RestComponent = RestComponent;

//# sourceMappingURL=data:application/json;base64,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QUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxFQUFsQixDQUFrQixFQUMzQixVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUksQ0FBQyxhQUFhLEdBQU8sS0FBSyxFQUE5QixDQUE4QixDQUFDLENBQUM7SUFDckQsQ0FBQztJQS9ISDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsVUFBVTtZQUNwQixRQUFRLEVBQUUseXlDQTJDVDtTQUNGLENBQUM7O3FCQUFBO0lBa0ZGLG9CQUFDO0FBQUQsQ0FoRkEsQUFnRkMsSUFBQTtBQWhGWSxxQkFBYSxnQkFnRnpCLENBQUEiLCJmaWxlIjoicmVzdC9yZXN0cy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVzLCBST1VURVJfRElSRUNUSVZFUyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IEVycm9yU2VydmljZSB9IGZyb20gXCIuLi9lcnJvcnMvZXJyb3Iuc2VydmljZVwiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHtSZXN0fSBmcm9tIFwiLi9yZXN0XCI7XG5pbXBvcnQge1Jlc3RTZXJ2aWNlfSBmcm9tIFwiLi9yZXN0LnNlcnZpY2VcIjtcbmltcG9ydCB7UmVzdExpc3R9IGZyb20gXCIuL3Jlc3RMaXN0XCI7XG5pbXBvcnQge1Jlc3RMaXN0U2VydmljZX0gZnJvbSBcIi4vcmVzdExpc3Quc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibXktcmVzdHNcIixcbiAgdGVtcGxhdGU6IGBcbiAgPGgxPiBNeSBSZXN0YXVyYW50cyA8L2gxPlxuICA8ZGl2PlxuICAgIDxsYWJlbD4gTmFtZTogPC9sYWJlbD48aW5wdXQgI3Jlc3ROYW1lIC8+XG4gICAgPGxhYmVsPiBBZGRyZXNzOiA8L2xhYmVsPjxpbnB1dCAjcmVzdEFkZHJlc3MgLz5cbiAgICA8bGFiZWw+IFJhdGluZzogPC9sYWJlbD48aW5wdXQgI3Jlc3RSYXRpbmcgLz5cbiAgICA8YnV0dG9uIChjbGljayk9XCJhZGQocmVzdE5hbWUudmFsdWUsIHJlc3RBZGRyZXNzLnZhbHVlLCByZXN0UmF0aW5nLnZhbHVlKTtyZXN0TmFtZS52YWx1ZT1udWxsO3Jlc3RSYXRpbmcudmFsdWU9bnVsbDtyZXN0QWRkcmVzcy52YWx1ZT1udWxsXCI+XG4gICAgICBBZGRcbiAgICA8L2J1dHRvbj5cbiAgPC9kaXY+XG5cbjxkaXYgc3R5bGU9XCJib3JkZXI6MXB4IHNvbGlkXCI+XG4gIDxoND4gQ3VycmVudCBSZXN0YXVyYW50cyBJbiBEQjwvaDQ+XG4gICAgPHVsICpuZ0Zvcj1cImxldCByZXN0IG9mIHJlc3RzXCI+XG4gICAgICA8bGk+XG4gICAgICAgICAgPHNwYW4+IE5hbWU6IHt7cmVzdC5uYW1lfX08L3NwYW4+XG4gICAgICAgICAgPHNwYW4+IEFkZHJlc3M6IHt7cmVzdC5hZGRyZXNzfX08L3NwYW4+XG4gICAgICAgICAgPHNwYW4+IFJhdGluZzoge3tyZXN0LnJhdGluZ319PC9zcGFuPlxuICAgICAgICAgIDxidXR0b24gKGNsaWNrKT1cImRlbGV0ZShyZXN0Ll9pZCwgcmVzdClcIj5EZWxldGU8L2J1dHRvbj5cbiAgICAgICAgICA8L2xpPlxuICAgIDwvdWw+XG48L2Rpdj5cblxuPGRpdiBzdHlsZT1cImJvcmRlcjoxcHggc29saWRcIj5cbiAgPGg0PiBDdXJyZW50IFJlc3RhdXJhbnRzIEluIERCPC9oND5cbiAgICA8dWwgKm5nRm9yPVwibGV0IHJlc3Qgb2YgbXlSZXN0TGlzdFwiPlxuICAgICAgPGxpPlxuICAgICAgICAgIDxzcGFuPiBOYW1lOiB7e3Jlc3QubmFtZX19PC9zcGFuPlxuICAgICAgICAgIDxzcGFuPiBBZGRyZXNzOiB7e3Jlc3QuYWRkcmVzc319PC9zcGFuPlxuICAgICAgICAgIDxzcGFuPiBSYXRpbmc6IHt7cmVzdC5yYXRpbmd9fTwvc3Bhbj5cbiAgICAgICAgICA8L2xpPlxuICAgIDwvdWw+XG48L2Rpdj5cblxuPGRpdiBzdHlsZT1cImJvcmRlcjoxcHggc29saWRcIj5cbiAgPGg0PiBNeSBSZXN0YXVyYW50czwvaDQ+XG4gICAgPHVsICpuZ0Zvcj1cImxldCByZXN0IG9mIHJlc3RzTGlzdFwiPlxuICAgICAgPGxpPlxuICAgICAgICAgIDxzcGFuPiB1c2VySUQ6IHt7cmVzdC51c2VySWR9fTwvc3Bhbj5cbiAgICAgICAgICA8c3Bhbj4gcmVzdElEOiB7e3Jlc3QucmVzdElkfX08L3NwYW4+XG4gICAgICAgICAgPC9saT5cbiAgICA8L3VsPlxuPC9kaXY+XG4gIGAsXG59KVxuXG5leHBvcnQgY2xhc3MgUmVzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcbiAgcmVzdHM6IFJlc3RbXTtcbiAgcmVzdHNMaXN0OiBSZXN0TGlzdFtdO1xuICBteVJlc3RMaXN0OiBSZXN0W10gPSBbIF07XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSByZXN0U2VydmljZTogUmVzdFNlcnZpY2UsIHByaXZhdGUgX2Vycm9yU2VydmljZTogRXJyb3JTZXJ2aWNlLCBwcml2YXRlIHJlc3RMaXN0U2VydmljZTogUmVzdExpc3RTZXJ2aWNlKSB7IH1cblxuICBhZGQobmFtZTpzdHJpbmcsIGFkZHJlc3M6c3RyaW5nLCByYXRpbmc6bnVtYmVyKTogdm9pZHtcbiAgICBjb25zdCByZXN0ID0gbmV3IFJlc3QobmFtZSwgYWRkcmVzcywgcmF0aW5nKTtcbiAgICB0aGlzLnJlc3RTZXJ2aWNlLmNyZWF0ZShyZXN0KVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICBkYXRhID0+XG4gICAgICAgICAge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICAgICAgICAgIGlmKGRhdGEubWVzc2FnZSA9PSBcIlN1Y2Nlc3NcIil7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXN0cy5wdXNoKHJlc3QpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3RMaXN0ID0gbmV3IFJlc3RMaXN0KFwiMVwiLCBkYXRhLm9iai5faWQpO1xuICAgICAgICAgICAgICAgIHRoaXMucmVzdExpc3RTZXJ2aWNlLmNyZWF0ZShyZXN0TGlzdClcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgICAgZGF0YSA9PlxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgICAgICAgICAgICAgICAgICBpZihkYXRhLm1lc3NhZ2UgPT0gXCJTdWNjZXNzXCIpe1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVzdHNMaXN0LnB1c2gocmVzdExpc3QpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yID0+IHRoaXMuX2Vycm9yU2VydmljZS5oYW5kbGVFcnJvcihlcnJvcilcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZXJyb3IgPT4gdGhpcy5fZXJyb3JTZXJ2aWNlLmhhbmRsZUVycm9yKGVycm9yKVxuICAgICAgKVxuICB9XG5cbiAgZGVsZXRlKGlkOiBTdHJpbmcsIHJlc3Q6IFJlc3QpOnZvaWRcbiAge1xuICAgIHRoaXMucmVzdFNlcnZpY2UuZGVsZXRlKGlkKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgZGF0YSA9PlxuICAgICAgICB7XG4gICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICAgICAgICBpZihkYXRhLm1lc3NhZ2UgPT0gXCJTdWNjZXNzXCIpXG4gICAgICAgICAge1xuICAgICAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5yZXN0cy5pbmRleE9mKHJlc3QpXG4gICAgICAgICAgICB0aGlzLnJlc3RzLnNwbGljZShpbmRleCwgMSlcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yID0+IHRoaXMuX2Vycm9yU2VydmljZS5oYW5kbGVFcnJvcihlcnJvcilcbiAgICAgIClcbiAgfVxuXG4gIG5nT25Jbml0KCl7XG4gICAgdGhpcy5nZXRSZXN0cygpO1xuICAgIHRoaXMuZ2V0UmVzdExpc3RzKCk7XG4gIH1cblxuICBnZXRSZXN0TGlzdHMoKXtcbiAgICB0aGlzLnJlc3RMaXN0U2VydmljZS5nZXRSZXN0c0xpc3QoKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgcmVzdHNMaXN0ID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc3RzTGlzdCA9IHJlc3RzTGlzdDtcblxuICAgICAgICAgICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLnJlc3RzTGlzdC5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAgICAgICBmb3IodmFyIGogPSAwOyBqIDwgdGhpcy5yZXN0cy5sZW5ndGg7IGorKyl7XG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMucmVzdHNbal0uX2lkID09IHRoaXMucmVzdHNMaXN0W2ldLnJlc3RJZCl7XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5teVJlc3RMaXN0LnB1c2godGhpcy5yZXN0c1tqXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGVycm9yID0+IHRoaXMuX2Vycm9yU2VydmljZT0gPGFueT5lcnJvcik7XG4gIH1cblxuICBnZXRSZXN0cygpXG4gIHtcbiAgICB0aGlzLnJlc3RTZXJ2aWNlLmdldFJlc3RzKClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgIHJlc3RzID0+IHRoaXMucmVzdHMgPSByZXN0cyxcbiAgICAgICAgICAgICAgZXJyb3IgPT4gdGhpcy5fZXJyb3JTZXJ2aWNlPSA8YW55PmVycm9yKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
