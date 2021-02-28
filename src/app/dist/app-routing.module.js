"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var is_logged_guard_1 = require("./modules/shared/guards/is-logged/is-logged.guard");
var not_logged_guard_1 = require("./modules/shared/guards/not-logged/not-logged.guard");
var routes = [
    { path: '', loadChildren: function () { return Promise.resolve().then(function () { return require('./modules/site/site.module'); }).then(function (m) { return m.SiteModule; }); }
    },
    { path: 'dashboard', loadChildren: function () { return Promise.resolve().then(function () { return require('./modules/dashboard/dashboard.module'); }).then(function (m) { return m.DashboardModule; }); }, canActivate: [is_logged_guard_1.IsLoggedGuard] },
    { path: 'login', loadChildren: function () { return Promise.resolve().then(function () { return require('./modules/site/login/login.module'); }).then(function (m) { return m.LoginModule; }); }, canActivate: [not_logged_guard_1.NotLoggedGuard] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
