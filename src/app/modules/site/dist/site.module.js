"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SiteModule = void 0;
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var annuity_component_1 = require("./modules/annuity/annuity.component");
var create_account_form_component_1 = require("./modules/create-account-form/create-account-form.component");
var digital_account_component_1 = require("./modules/digital-account/digital-account.component");
var home_component_1 = require("./modules/home/home.component");
var site_routing_module_1 = require("./site.routing.module");
var SiteModule = /** @class */ (function () {
    function SiteModule() {
    }
    SiteModule = __decorate([
        core_1.NgModule({
            declarations: [
                home_component_1.HomeComponent,
                create_account_form_component_1.CreateAccountFormComponent,
                digital_account_component_1.DigitalAccountComponent,
                annuity_component_1.AnnuityComponent,
            ],
            imports: [
                common_1.CommonModule,
                site_routing_module_1.SiteRoutingModule,
            ],
            exports: [
                home_component_1.HomeComponent,
                create_account_form_component_1.CreateAccountFormComponent,
                digital_account_component_1.DigitalAccountComponent,
                annuity_component_1.AnnuityComponent,
            ]
        })
    ], SiteModule);
    return SiteModule;
}());
exports.SiteModule = SiteModule;
