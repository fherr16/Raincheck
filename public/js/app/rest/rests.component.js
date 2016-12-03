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
    RestComponent.prototype.chooseFriend = function (restID) {
        localStorage.setItem('restID', restID);
        this.router.navigate(['/invite']);
    };
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
            template: "\n  <div *ngIf=\"isLoggedIn()\">\n\n    <h1> My Restaurants </h1>\n    <div>\n      <label> Name: </label><input #restName />\n      <label> Address: </label><input #restAddress />\n      <label> Rating: </label><input #restRating />\n      <button (click)=\"add(restName.value, restAddress.value, restRating.value);restName.value=null;restRating.value=null;restAddress.value=null\">\n        Add\n      </button>\n    </div>\n\n    <div style=\"border:1px solid\">\n      <h4> Current Restaurants In DB</h4>\n      <ul *ngFor=\"let rest of rests\">\n        <li>\n            <span> Name: {{rest.name}}</span>\n            <span> Address: {{rest.address}}</span>\n            <span> Rating: {{rest.rating}}</span>\n            <button (click)=\"delete(rest._id, rest)\">Delete</button>\n            </li>\n      </ul>\n    </div>\n\n    <div style=\"border:1px solid\">\n      <h4> User Rests</h4>\n      <ul *ngFor=\"let rest of userRests\">\n        <li>\n            <span> Name: {{rest.name}}</span>\n            <span> Address: {{rest.address}}</span>\n            <span> Rating: {{rest.rating}}</span>\n            <button (click)=\"delete(rest._id, rest)\">Delete</button>\n            <button (click)='chooseFriend(rest._id)'>Invite</button>\n            </li>\n      </ul>\n    </div>\n\n  </div>\n  ",
        }), 
        __metadata('design:paramtypes', [router_1.Router, auth_service_1.AuthService, rest_service_1.RestService, error_service_1.ErrorService])
    ], RestComponent);
    return RestComponent;
}());
exports.RestComponent = RestComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QUFBLGlCQU9DO1FBTEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUNqRCxTQUFTLENBQ1IsVUFBQSxTQUFTLElBQUksT0FBQSxLQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsRUFBMUIsQ0FBMEIsRUFDdkMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsYUFBYSxHQUFRLEtBQUssRUFBL0IsQ0FBK0IsQ0FDekMsQ0FBQztJQUNOLENBQUM7SUFFRCw4QkFBTSxHQUFOO1FBQUEsaUJBTUM7UUFKQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRTthQUNsQixTQUFTLENBQ1IsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssRUFBbEIsQ0FBa0IsRUFDM0IsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsYUFBYSxHQUFPLEtBQUssRUFBOUIsQ0FBOEIsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFRCxrQ0FBVSxHQUFWO1FBQ00sTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDMUMsQ0FBQztJQWpITDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsVUFBVTtZQUNwQixRQUFRLEVBQUUsZ3lDQXVDVDtTQUNGLENBQUM7O3FCQUFBO0lBd0VGLG9CQUFDO0FBQUQsQ0F0RUEsQUFzRUMsSUFBQTtBQXRFWSxxQkFBYSxnQkFzRXpCLENBQUEiLCJmaWxlIjoicmVzdC9yZXN0cy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVzLCBST1VURVJfRElSRUNUSVZFUyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IEVycm9yU2VydmljZSB9IGZyb20gXCIuLi9lcnJvcnMvZXJyb3Iuc2VydmljZVwiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHtSZXN0fSBmcm9tIFwiLi9yZXN0XCI7XG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tIFwiLi8uLi9hdXRoL2F1dGguc2VydmljZVwiO1xuaW1wb3J0IHtSZXN0U2VydmljZX0gZnJvbSBcIi4vcmVzdC5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJteS1yZXN0c1wiLFxuICB0ZW1wbGF0ZTogYFxuICA8ZGl2ICpuZ0lmPVwiaXNMb2dnZWRJbigpXCI+XG5cbiAgICA8aDE+IE15IFJlc3RhdXJhbnRzIDwvaDE+XG4gICAgPGRpdj5cbiAgICAgIDxsYWJlbD4gTmFtZTogPC9sYWJlbD48aW5wdXQgI3Jlc3ROYW1lIC8+XG4gICAgICA8bGFiZWw+IEFkZHJlc3M6IDwvbGFiZWw+PGlucHV0ICNyZXN0QWRkcmVzcyAvPlxuICAgICAgPGxhYmVsPiBSYXRpbmc6IDwvbGFiZWw+PGlucHV0ICNyZXN0UmF0aW5nIC8+XG4gICAgICA8YnV0dG9uIChjbGljayk9XCJhZGQocmVzdE5hbWUudmFsdWUsIHJlc3RBZGRyZXNzLnZhbHVlLCByZXN0UmF0aW5nLnZhbHVlKTtyZXN0TmFtZS52YWx1ZT1udWxsO3Jlc3RSYXRpbmcudmFsdWU9bnVsbDtyZXN0QWRkcmVzcy52YWx1ZT1udWxsXCI+XG4gICAgICAgIEFkZFxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IHN0eWxlPVwiYm9yZGVyOjFweCBzb2xpZFwiPlxuICAgICAgPGg0PiBDdXJyZW50IFJlc3RhdXJhbnRzIEluIERCPC9oND5cbiAgICAgIDx1bCAqbmdGb3I9XCJsZXQgcmVzdCBvZiByZXN0c1wiPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgICA8c3Bhbj4gTmFtZToge3tyZXN0Lm5hbWV9fTwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuPiBBZGRyZXNzOiB7e3Jlc3QuYWRkcmVzc319PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4+IFJhdGluZzoge3tyZXN0LnJhdGluZ319PC9zcGFuPlxuICAgICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwiZGVsZXRlKHJlc3QuX2lkLCByZXN0KVwiPkRlbGV0ZTwvYnV0dG9uPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IHN0eWxlPVwiYm9yZGVyOjFweCBzb2xpZFwiPlxuICAgICAgPGg0PiBVc2VyIFJlc3RzPC9oND5cbiAgICAgIDx1bCAqbmdGb3I9XCJsZXQgcmVzdCBvZiB1c2VyUmVzdHNcIj5cbiAgICAgICAgPGxpPlxuICAgICAgICAgICAgPHNwYW4+IE5hbWU6IHt7cmVzdC5uYW1lfX08L3NwYW4+XG4gICAgICAgICAgICA8c3Bhbj4gQWRkcmVzczoge3tyZXN0LmFkZHJlc3N9fTwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuPiBSYXRpbmc6IHt7cmVzdC5yYXRpbmd9fTwvc3Bhbj5cbiAgICAgICAgICAgIDxidXR0b24gKGNsaWNrKT1cImRlbGV0ZShyZXN0Ll9pZCwgcmVzdClcIj5EZWxldGU8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gKGNsaWNrKT0nY2hvb3NlRnJpZW5kKHJlc3QuX2lkKSc+SW52aXRlPC9idXR0b24+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cblxuICA8L2Rpdj5cbiAgYCxcbn0pXG5cbmV4cG9ydCBjbGFzcyBSZXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xuICByZXN0czogUmVzdFtdO1xuICB1c2VyUmVzdHM6IFJlc3RbXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIF9hdXRoU2VydmljZTogQXV0aFNlcnZpY2UsIHByaXZhdGUgcmVzdFNlcnZpY2U6IFJlc3RTZXJ2aWNlLCBwcml2YXRlIF9lcnJvclNlcnZpY2U6IEVycm9yU2VydmljZSkgeyB9XG5cbiAgY2hvb3NlRnJpZW5kKHJlc3RJRDpzdHJpbmcpe1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdyZXN0SUQnLCByZXN0SUQpO1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2ludml0ZSddKTtcbiAgfVxuXG4gIGFkZChuYW1lOnN0cmluZywgYWRkcmVzczpzdHJpbmcsIHJhdGluZzpudW1iZXIpOiB2b2lke1xuICAgIGNvbnN0IHJlc3QgPSBuZXcgUmVzdChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcklkJyksIG5hbWUsIGFkZHJlc3MsIHJhdGluZyk7XG4gICAgdGhpcy5yZXN0U2VydmljZS5jcmVhdGUocmVzdClcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgZGF0YSA9PlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgICAgICAgICBpZihkYXRhLm1lc3NhZ2UgPT0gXCJTdWNjZXNzXCIpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRoaXMucmVzdHMucHVzaChyZXN0KTsgLy9DYW4gZXJhc2Ugd2hlbiB3ZSBkb24ndCB3YW50IHRvIHNob3cgYWxsIFJlc3RzXG4gICAgICAgICAgICAgIHRoaXMudXNlclJlc3RzLnB1c2gocmVzdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBlcnJvciA9PiB0aGlzLl9lcnJvclNlcnZpY2UuaGFuZGxlRXJyb3IoZXJyb3IpXG4gICAgICApXG4gIH1cblxuICBkZWxldGUoaWQ6IFN0cmluZywgcmVzdDogUmVzdCk6dm9pZFxuICB7XG4gICAgdGhpcy5yZXN0U2VydmljZS5kZWxldGUoaWQpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICBkYXRhID0+XG4gICAgICAgIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgICAgICAgIGlmKGRhdGEubWVzc2FnZSA9PSBcIlN1Y2Nlc3NcIilcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLnJlc3RzLnNwbGljZSh0aGlzLnJlc3RzLmluZGV4T2YocmVzdCksIDEpOyAvL0NhbiBlcmFzZSB3aGVuIHdlIGRvbid0IHdhbnQgdG8gc2hvdyBhbGwgUmVzdHNcbiAgICAgICAgICAgIHRoaXMudXNlclJlc3RzLnNwbGljZSh0aGlzLnVzZXJSZXN0cy5pbmRleE9mKHJlc3QpLCAxKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yID0+IHRoaXMuX2Vycm9yU2VydmljZS5oYW5kbGVFcnJvcihlcnJvcilcbiAgICAgIClcbiAgfVxuXG4gIG5nT25Jbml0KCl7XG4gICAgdGhpcy5nZXQoKTtcbiAgICB0aGlzLmdldEFsbCgpO1xuICB9XG5cbiAgZ2V0KClcbiAge1xuICAgIHRoaXMucmVzdFNlcnZpY2UuZ2V0KGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VySWQnKSlcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIHVzZXJSZXN0cyA9PiB0aGlzLnVzZXJSZXN0cyA9IHVzZXJSZXN0cyxcbiAgICAgICAgZXJyb3IgPT4gdGhpcy5fZXJyb3JTZXJ2aWNlID0gPGFueT5lcnJvclxuICAgICAgKTtcbiAgfVxuXG4gIGdldEFsbCgpXG4gIHtcbiAgICB0aGlzLnJlc3RTZXJ2aWNlLmdldFJlc3RzKClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgIHJlc3RzID0+IHRoaXMucmVzdHMgPSByZXN0cyxcbiAgICAgICAgICAgICAgZXJyb3IgPT4gdGhpcy5fZXJyb3JTZXJ2aWNlPSA8YW55PmVycm9yKTtcbiAgfVxuXG4gIGlzTG9nZ2VkSW4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hdXRoU2VydmljZS5pc0xvZ2dlZEluKCk7XG4gICAgfVxufVxuIl19
