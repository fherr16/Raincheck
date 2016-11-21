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
require('rxjs/Rx');
var InviteService = (function () {
    function InviteService(http) {
        this.http = http;
        this.inviteURL = 'http://localhost:3000/invite';
    }
    InviteService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], InviteService);
    return InviteService;
}());
exports.InviteService = InviteService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludml0ZXMvaW52aXRlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUE4QixlQUFlLENBQUMsQ0FBQTtBQUM5QyxxQkFBOEIsZUFBZSxDQUFDLENBQUE7QUFFOUMsUUFBTyxTQUFTLENBQUMsQ0FBQTtBQUtqQjtJQUdFLHVCQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUZ0QixjQUFTLEdBQUcsOEJBQThCLENBQUM7SUFFakIsQ0FBQztJQUpyQztRQUFDLGlCQUFVLEVBQUU7O3FCQUFBO0lBTWIsb0JBQUM7QUFBRCxDQUxBLEFBS0MsSUFBQTtBQUxZLHFCQUFhLGdCQUt6QixDQUFBIiwiZmlsZSI6Imludml0ZXMvaW52aXRlLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gICAgZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIZWFkZXJzLCBIdHRwIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xuaW1wb3J0ICdyeGpzL1J4JztcblxuaW1wb3J0IHtJbnZpdGV9IGZyb20gJy4vaW52aXRlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEludml0ZVNlcnZpY2Uge1xuICBwcml2YXRlIGludml0ZVVSTCA9ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvaW52aXRlJztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHsgfVxuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
