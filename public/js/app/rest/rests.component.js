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
var rest_1 = require("./rest");
var rest_service_1 = require("./rest.service");
var RestComponent = (function () {
    function RestComponent(restService, _errorService) {
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
            templateUrl: "app/rest/rests.component.html",
            styleUrls: ["app/rest/rests.component.css"]
        }), 
        __metadata('design:paramtypes', [rest_service_1.RestService, error_service_1.ErrorService])
    ], RestComponent);
    return RestComponent;
}());
exports.RestComponent = RestComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc3QvcmVzdHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFFbEQsOEJBQTZCLHlCQUF5QixDQUFDLENBQUE7QUFFdkQscUJBQW1CLFFBQVEsQ0FBQyxDQUFBO0FBQzVCLDZCQUEwQixnQkFBZ0IsQ0FBQyxDQUFBO0FBUTNDO0lBR0UsdUJBQW9CLFdBQXdCLEVBQVUsYUFBMkI7UUFBN0QsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBYztJQUFJLENBQUM7SUFFdEYsMkJBQUcsR0FBSCxVQUFJLElBQVcsRUFBRSxPQUFjLEVBQUUsTUFBYTtRQUE5QyxpQkFPQztRQU5DLElBQU0sSUFBSSxHQUFHLElBQUksV0FBSSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO2FBQzFCLFNBQVMsQ0FDTixVQUFBLElBQUksSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQWpCLENBQWlCLEVBQ3pCLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQXJDLENBQXFDLENBQ2pELENBQUE7SUFDTCxDQUFDO0lBbEJIO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFdBQVcsRUFBRSwrQkFBK0I7WUFDNUMsU0FBUyxFQUFFLENBQUMsOEJBQThCLENBQUM7U0FDNUMsQ0FBQzs7cUJBQUE7SUFlRixvQkFBQztBQUFELENBYkEsQUFhQyxJQUFBO0FBYlkscUJBQWEsZ0JBYXpCLENBQUEiLCJmaWxlIjoicmVzdC9yZXN0cy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXMsIFJPVVRFUl9ESVJFQ1RJVkVTIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgRXJyb3JTZXJ2aWNlIH0gZnJvbSBcIi4uL2Vycm9ycy9lcnJvci5zZXJ2aWNlXCI7XG5cbmltcG9ydCB7UmVzdH0gZnJvbSBcIi4vcmVzdFwiO1xuaW1wb3J0IHtSZXN0U2VydmljZX0gZnJvbSBcIi4vcmVzdC5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJteS1yZXN0c1wiLFxuICB0ZW1wbGF0ZVVybDogXCJhcHAvcmVzdC9yZXN0cy5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcImFwcC9yZXN0L3Jlc3RzLmNvbXBvbmVudC5jc3NcIl1cbn0pXG5cbmV4cG9ydCBjbGFzcyBSZXN0Q29tcG9uZW50e1xuICByZXN0czogUmVzdFtdO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVzdFNlcnZpY2U6IFJlc3RTZXJ2aWNlLCBwcml2YXRlIF9lcnJvclNlcnZpY2U6IEVycm9yU2VydmljZSkgeyB9XG5cbiAgYWRkKG5hbWU6c3RyaW5nLCBhZGRyZXNzOnN0cmluZywgcmF0aW5nOm51bWJlcik6IHZvaWR7XG4gICAgY29uc3QgcmVzdCA9IG5ldyBSZXN0KG5hbWUsIGFkZHJlc3MsIHJhdGluZyk7XG4gICAgdGhpcy5yZXN0U2VydmljZS5jcmVhdGUocmVzdClcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhKSxcbiAgICAgICAgICBlcnJvciA9PiB0aGlzLl9lcnJvclNlcnZpY2UuaGFuZGxlRXJyb3IoZXJyb3IpXG4gICAgICApXG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
