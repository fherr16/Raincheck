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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc3QvcmVzdHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFFbEQsOEJBQTZCLHlCQUF5QixDQUFDLENBQUE7QUFDdkQsdUJBQXVCLGlCQUFpQixDQUFDLENBQUE7QUFFekMscUJBQW1CLFFBQVEsQ0FBQyxDQUFBO0FBQzVCLDZCQUEwQixnQkFBZ0IsQ0FBQyxDQUFBO0FBMkIzQztJQUdFLHVCQUFvQixNQUFjLEVBQVUsV0FBd0IsRUFBVSxhQUEyQjtRQUFyRixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBYztJQUFJLENBQUM7SUFFOUcsMkJBQUcsR0FBSCxVQUFJLElBQVcsRUFBRSxPQUFjLEVBQUUsTUFBYTtRQUE5QyxpQkFZQztRQVhDLElBQU0sSUFBSSxHQUFHLElBQUksV0FBSSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO2FBQzFCLFNBQVMsQ0FDTixVQUFBLElBQUk7WUFFRixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBO1lBQ2pCLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksU0FBUyxDQUFDO2dCQUMzQixLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUN6QixDQUFDLEVBQ0QsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBckMsQ0FBcUMsQ0FDakQsQ0FBQTtJQUNMLENBQUM7SUFFRCw4QkFBTSxHQUFOLFVBQU8sRUFBVSxFQUFFLElBQVU7UUFBN0IsaUJBZUM7UUFiQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7YUFDeEIsU0FBUyxDQUNSLFVBQUEsSUFBSTtZQUVGLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDakIsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxTQUFTLENBQUMsQ0FDN0IsQ0FBQztnQkFDQyxJQUFJLEtBQUssR0FBRyxLQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQTtnQkFDcEMsS0FBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFBO1lBQzdCLENBQUM7UUFDSCxDQUFDLEVBQ0QsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBckMsQ0FBcUMsQ0FDL0MsQ0FBQTtJQUNMLENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQUEsaUJBTUM7UUFKQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRTthQUNsQixTQUFTLENBQ1IsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssRUFBbEIsQ0FBa0IsRUFDM0IsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsYUFBYSxHQUFPLEtBQUssRUFBOUIsQ0FBOEIsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUF2RUg7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFVBQVU7WUFDcEIsUUFBUSxFQUFFLCtxQkFvQlQ7U0FDRixDQUFDOztxQkFBQTtJQWlERixvQkFBQztBQUFELENBL0NBLEFBK0NDLElBQUE7QUEvQ1kscUJBQWEsZ0JBK0N6QixDQUFBIiwiZmlsZSI6InJlc3QvcmVzdHMuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVzLCBST1VURVJfRElSRUNUSVZFUyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IEVycm9yU2VydmljZSB9IGZyb20gXCIuLi9lcnJvcnMvZXJyb3Iuc2VydmljZVwiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHtSZXN0fSBmcm9tIFwiLi9yZXN0XCI7XG5pbXBvcnQge1Jlc3RTZXJ2aWNlfSBmcm9tIFwiLi9yZXN0LnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcIm15LXJlc3RzXCIsXG4gIHRlbXBsYXRlOiBgXG4gIDxoMT4gTXkgUmVzdGF1cmFudHMgPC9oMT5cbiAgPGRpdj5cbiAgICA8bGFiZWw+IE5hbWU6IDwvbGFiZWw+PGlucHV0ICNyZXN0TmFtZSAvPlxuICAgIDxsYWJlbD4gQWRkcmVzczogPC9sYWJlbD48aW5wdXQgI3Jlc3RBZGRyZXNzIC8+XG4gICAgPGxhYmVsPiBSYXRpbmc6IDwvbGFiZWw+PGlucHV0ICNyZXN0UmF0aW5nIC8+XG4gICAgPGJ1dHRvbiAoY2xpY2spPVwiYWRkKHJlc3ROYW1lLnZhbHVlLCByZXN0QWRkcmVzcy52YWx1ZSwgcmVzdFJhdGluZy52YWx1ZSk7cmVzdE5hbWUudmFsdWU9bnVsbDtyZXN0UmF0aW5nLnZhbHVlPW51bGw7cmVzdEFkZHJlc3MudmFsdWU9bnVsbFwiPlxuICAgICAgQWRkXG4gICAgPC9idXR0b24+XG4gIDwvZGl2PlxuXG48aDQ+IEN1cnJlbnQgUmVzdGF1cmFudHMgPC9oND5cbiAgPHVsICpuZ0Zvcj1cImxldCByZXN0IG9mIHJlc3RzXCI+XG4gICAgPGxpPlxuICAgICAgICA8c3Bhbj4gTmFtZToge3tyZXN0Lm5hbWV9fTwvc3Bhbj5cbiAgICAgICAgPHNwYW4+IEFkZHJlc3M6IHt7cmVzdC5hZGRyZXNzfX08L3NwYW4+XG4gICAgICAgIDxzcGFuPiBSYXRpbmc6IHt7cmVzdC5yYXRpbmd9fTwvc3Bhbj5cbiAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwiZGVsZXRlKHJlc3QuX2lkLCByZXN0KVwiPkRlbGV0ZTwvYnV0dG9uPlxuICAgIDwvbGk+XG4gIDwvdWw+XG4gIGAsXG59KVxuXG5leHBvcnQgY2xhc3MgUmVzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcbiAgcmVzdHM6IFJlc3RbXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHJlc3RTZXJ2aWNlOiBSZXN0U2VydmljZSwgcHJpdmF0ZSBfZXJyb3JTZXJ2aWNlOiBFcnJvclNlcnZpY2UpIHsgfVxuXG4gIGFkZChuYW1lOnN0cmluZywgYWRkcmVzczpzdHJpbmcsIHJhdGluZzpudW1iZXIpOiB2b2lke1xuICAgIGNvbnN0IHJlc3QgPSBuZXcgUmVzdChuYW1lLCBhZGRyZXNzLCByYXRpbmcpO1xuICAgIHRoaXMucmVzdFNlcnZpY2UuY3JlYXRlKHJlc3QpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgIGRhdGEgPT5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgICAgICAgICAgaWYoZGF0YS5tZXNzYWdlID09IFwiU3VjY2Vzc1wiKVxuICAgICAgICAgICAgICB0aGlzLnJlc3RzLnB1c2gocmVzdClcbiAgICAgICAgICB9LFxuICAgICAgICAgIGVycm9yID0+IHRoaXMuX2Vycm9yU2VydmljZS5oYW5kbGVFcnJvcihlcnJvcilcbiAgICAgIClcbiAgfVxuXG4gIGRlbGV0ZShpZDogU3RyaW5nLCByZXN0OiBSZXN0KTp2b2lkXG4gIHtcbiAgICB0aGlzLnJlc3RTZXJ2aWNlLmRlbGV0ZShpZClcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIGRhdGEgPT5cbiAgICAgICAge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgICAgICAgaWYoZGF0YS5tZXNzYWdlID09IFwiU3VjY2Vzc1wiKVxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHZhciBpbmRleCA9IHRoaXMucmVzdHMuaW5kZXhPZihyZXN0KVxuICAgICAgICAgICAgdGhpcy5yZXN0cy5zcGxpY2UoaW5kZXgsIDEpXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlcnJvciA9PiB0aGlzLl9lcnJvclNlcnZpY2UuaGFuZGxlRXJyb3IoZXJyb3IpXG4gICAgICApXG4gIH1cblxuICBuZ09uSW5pdCgpe1xuICAgIHRoaXMuZ2V0UmVzdHMoKTtcbiAgfVxuXG4gIGdldFJlc3RzKClcbiAge1xuICAgIHRoaXMucmVzdFNlcnZpY2UuZ2V0UmVzdHMoKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgcmVzdHMgPT4gdGhpcy5yZXN0cyA9IHJlc3RzLFxuICAgICAgICAgICAgICBlcnJvciA9PiB0aGlzLl9lcnJvclNlcnZpY2U9IDxhbnk+ZXJyb3IpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
