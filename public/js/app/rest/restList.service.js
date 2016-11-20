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
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Observable_1 = require("rxjs/Observable");
require('rxjs/Rx');
var RestListService = (function () {
    function RestListService(http) {
        this.http = http;
        this.restListURL = 'http://localhost:3000/restList';
    }
    RestListService.prototype.create = function (restList) {
        var body = JSON.stringify(restList);
        var header = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this.http.post(this.restListURL, body, { headers: header })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Observable_1.Observable.throw(error.json()); });
    };
    RestListService.prototype.delete = function (id) {
        return this.http.delete(this.restListURL + "/" + id)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Observable_1.Observable.throw(error.json()); });
    };
    RestListService.prototype.getRestsList = function () {
        return this.http.get(this.restListURL)
            .map(function (response) { return response.json().obj; })
            .catch(function (error) { return Observable_1.Observable.throw(error.json()); });
    };
    RestListService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], RestListService);
    return RestListService;
}());
exports.RestListService = RestListService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc3QvcmVzdExpc3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQThCLGVBQWUsQ0FBQyxDQUFBO0FBQzlDLHFCQUE4QixlQUFlLENBQUMsQ0FBQTtBQUM5QywyQkFBMkIsaUJBQWlCLENBQUMsQ0FBQTtBQUM3QyxRQUFPLFNBQVMsQ0FBQyxDQUFBO0FBS2pCO0lBR0UseUJBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO1FBRnRCLGdCQUFXLEdBQUcsZ0NBQWdDLENBQUM7SUFFckIsQ0FBQztJQUVuQyxnQ0FBTSxHQUFOLFVBQU8sUUFBa0I7UUFFdkIsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN0QyxJQUFNLE1BQU0sR0FBRyxJQUFJLGNBQU8sQ0FBQyxFQUFDLGNBQWMsRUFBQyxrQkFBa0IsRUFBQyxDQUFDLENBQUM7UUFDaEUsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxFQUFFLEVBQUMsT0FBTyxFQUFDLE1BQU0sRUFBQyxDQUFDO2FBQzVELEdBQUcsQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBZixDQUFlLENBQUM7YUFDaEMsS0FBSyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsdUJBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQTlCLENBQThCLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRUQsZ0NBQU0sR0FBTixVQUFPLEVBQVU7UUFFZixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUksSUFBSSxDQUFDLFdBQVcsU0FBSSxFQUFJLENBQUM7YUFDakQsR0FBRyxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFmLENBQWUsQ0FBQzthQUNoQyxLQUFLLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSx1QkFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBOUIsQ0FBOEIsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFRCxzQ0FBWSxHQUFaO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7YUFDekIsR0FBRyxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsRUFBbkIsQ0FBbUIsQ0FBQzthQUNwQyxLQUFLLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSx1QkFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBOUIsQ0FBOEIsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUExQkg7UUFBQyxpQkFBVSxFQUFFOzt1QkFBQTtJQTJCYixzQkFBQztBQUFELENBMUJBLEFBMEJDLElBQUE7QUExQlksdUJBQWUsa0JBMEIzQixDQUFBIiwiZmlsZSI6InJlc3QvcmVzdExpc3Quc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSAgICBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEhlYWRlcnMsIEh0dHAgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XG5pbXBvcnQgJ3J4anMvUngnO1xuXG5pbXBvcnQge1Jlc3RMaXN0fSBmcm9tICcuL3Jlc3RMaXN0JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFJlc3RMaXN0U2VydmljZSB7XG4gIHByaXZhdGUgcmVzdExpc3RVUkwgPSAnaHR0cDovL2xvY2FsaG9zdDozMDAwL3Jlc3RMaXN0JztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHsgfVxuXG4gIGNyZWF0ZShyZXN0TGlzdDogUmVzdExpc3QpXG4gIHtcbiAgICBjb25zdCBib2R5ID0gSlNPTi5zdHJpbmdpZnkocmVzdExpc3QpO1xuICAgIGNvbnN0IGhlYWRlciA9IG5ldyBIZWFkZXJzKHsnQ29udGVudC1UeXBlJzonYXBwbGljYXRpb24vanNvbid9KTtcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5yZXN0TGlzdFVSTCwgYm9keSwge2hlYWRlcnM6aGVhZGVyfSlcbiAgICAgIC5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLmNhdGNoKGVycm9yID0+IE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpKSk7XG4gIH1cblxuICBkZWxldGUoaWQ6IFN0cmluZylcbiAge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKGAke3RoaXMucmVzdExpc3RVUkx9LyR7aWR9YClcbiAgICAgIC5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLmNhdGNoKGVycm9yID0+IE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpKSk7XG4gIH1cblxuICBnZXRSZXN0c0xpc3QoKTpPYnNlcnZhYmxlPFJlc3RMaXN0W10+e1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMucmVzdExpc3RVUkwpXG4gICAgICAgICAgICAgICAgLm1hcChyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkub2JqKVxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiBPYnNlcnZhYmxlLnRocm93KGVycm9yLmpzb24oKSkpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
