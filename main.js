(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/components/dialog/dialog.component */ "./src/app/shared/components/dialog/dialog.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/services/notification.service */ "./src/app/shared/services/notification.service.ts");
/* harmony import */ var _shared_components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/components/sidenav/sidenav.component */ "./src/app/shared/components/sidenav/sidenav.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_components_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/components/home/home.component */ "./src/app/shared/components/home/home.component.ts");
/* harmony import */ var _shared_components_saving_acct_saving_acct_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/components/saving-acct/saving-acct.component */ "./src/app/shared/components/saving-acct/saving-acct.component.ts");
/* harmony import */ var _shared_components_goals_acct_goals_acct_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/components/goals-acct/goals-acct.component */ "./src/app/shared/components/goals-acct/goals-acct.component.ts");
/* harmony import */ var _shared_components_investment_acct_investment_acct_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/components/investment-acct/investment-acct.component */ "./src/app/shared/components/investment-acct/investment-acct.component.ts");
/* harmony import */ var _shared_components_check_balance_check_balance_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/components/check-balance/check-balance.component */ "./src/app/shared/components/check-balance/check-balance.component.ts");
// src\app\app.component.ts












function AppComponent_app_home_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-home");
} }
function AppComponent_app_saving_acct_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-saving-acct", 8);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("titleName", ctx_r2.contentElem.contentTitle)("savingAcctList", ctx_r2.savingAcctList);
} }
function AppComponent_app_goals_acct_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-goals-acct", 9);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("titleName", ctx_r3.contentElem.contentTitle)("goalsAcctList", ctx_r3.goalsAcctList);
} }
function AppComponent_app_investment_acct_6_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-investment-acct", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onNewInvestment", function AppComponent_app_investment_acct_6_Template_app_investment_acct_onNewInvestment_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.onNewInvestment($event); })("onCloseInvestment", function AppComponent_app_investment_acct_6_Template_app_investment_acct_onCloseInvestment_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.onCloseInvestment($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("titleName", ctx_r4.contentElem.contentTitle)("investmentAcctList", ctx_r4.investmentAcctList)("sidenav", _r0);
} }
function AppComponent_app_check_balance_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-check-balance", 11);
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("titleName", ctx_r5.contentElem.contentTitle)("savingAcctList", ctx_r5.savingAcctList)("goalsAcctList", ctx_r5.goalsAcctList)("sidenav", _r0);
} }
const SAVING_ACCT_DATA = [
    { acctNum: 'SA-0001', custNum: '730201-02-3948', custName: 'Abu Bakar', totBalance: '5000' },
    { acctNum: 'SA-0002', custNum: '820406-01-3346', custName: 'Umar Khatab', totBalance: '10400' },
    { acctNum: 'SA-0003', custNum: '760211-01-7764', custName: 'Bilal Rabah', totBalance: '450' },
    { acctNum: 'SA-0004', custNum: '734571-12-7348', custName: 'Ahmad Albab', totBalance: '5992' },
    { acctNum: 'SA-0005', custNum: '874351-02-3738', custName: 'Sulaiman Akhlaken', totBalance: '522' },
    { acctNum: 'SA-0006', custNum: '892341-02-8858', custName: 'Sadiq Sigaraga', totBalance: '3325' },
    { acctNum: 'SA-0007', custNum: '792011-03-6738', custName: 'Sudin Abdullah', totBalance: '533' },
    { acctNum: 'SA-0008', custNum: '892341-04-2868', custName: 'Syafiq Rahim', totBalance: '425' },
    { acctNum: 'SA-0009', custNum: '902211-02-9438', custName: 'Ismail Ibrahim', totBalance: '755' },
    { acctNum: 'SA-00010', custNum: '839921-09-3548', custName: 'Safawi Rashid', totBalance: '335' },
    { acctNum: 'SA-00011', custNum: '782931-10-7748', custName: 'Pablo Aimar', totBalance: '309' },
    { acctNum: 'SA-00012', custNum: '812341-02-3934', custName: 'Dollah Salleh', totBalance: '4995' },
    { acctNum: 'SA-00013', custNum: '829931-05-3378', custName: 'Benjamin Mora', totBalance: '1208' },
    { acctNum: 'SA-00014', custNum: '872931-07-4498', custName: 'Moktar Dahari', totBalance: '937' }
];
const GOALS_ACCT_DATA = [
    { acctNum: 'GA-0001', custNum: '730201-02-3948', custName: 'Abu Bakar', totBalance: '102' },
    { acctNum: 'GA-0002', custNum: '820406-01-3346', custName: 'Umar Khatab', totBalance: '33' },
    { acctNum: 'GA-0003', custNum: '760211-01-7764', custName: 'Bilal Rabah', totBalance: '345' },
    { acctNum: 'GA-0004', custNum: '734571-12-7348', custName: 'Ahmad Albab', totBalance: '564' },
    { acctNum: 'GA-0005', custNum: '874351-02-3738', custName: 'Sulaiman Akhlaken', totBalance: '43' },
    { acctNum: 'GA-0006', custNum: '892341-02-8858', custName: 'Sadiq Sigaraga', totBalance: '564' },
    { acctNum: 'GA-0007', custNum: '792011-03-6738', custName: 'Sudin Abdullah', totBalance: '768' },
    { acctNum: 'GA-0008', custNum: '892341-04-2868', custName: 'Syafiq Rahim', totBalance: '384' },
    { acctNum: 'GA-0009', custNum: '902211-02-9438', custName: 'Ismail Ibrahim', totBalance: '743' },
    { acctNum: 'GA-00010', custNum: '839921-09-3548', custName: 'Safawi Rashid', totBalance: '54' },
    { acctNum: 'GA-00011', custNum: '782931-10-7748', custName: 'Pablo Aimar', totBalance: '764' },
    { acctNum: 'GA-00012', custNum: '812341-02-3934', custName: 'Dollah Salleh', totBalance: '553' },
    { acctNum: 'GA-00013', custNum: '829931-05-3378', custName: 'Benjamin Mora', totBalance: '784' },
    { acctNum: 'GA-00014', custNum: '872931-07-4498', custName: 'Moktar Dahari', totBalance: '44' }
];
const INVESTMENT_ACCT_DATA = [
    { acctNum: 'IA-0001', custNum: '874351-02-3738', custName: 'Sulaiman Akhlaken', totBalance: '43' },
    { acctNum: 'IA-0002', custNum: '892341-02-8858', custName: 'Sadiq Sigaraga', totBalance: '564' },
    { acctNum: 'IA-0003', custNum: '792011-03-6738', custName: 'Sudin Abdullah', totBalance: '768' },
    { acctNum: 'IA-0004', custNum: '892341-04-2868', custName: 'Syafiq Rahim', totBalance: '384' },
    { acctNum: 'IA-0005', custNum: '902211-02-9438', custName: 'Ismail Ibrahim', totBalance: '743' },
    { acctNum: 'IA-0006', custNum: '812341-02-3934', custName: 'Dollah Salleh', totBalance: '553' },
    { acctNum: 'IA-0007', custNum: '829931-05-3378', custName: 'Benjamin Mora', totBalance: '784' },
    { acctNum: 'IA-0008', custNum: '872931-07-4498', custName: 'Moktar Dahari', totBalance: '44' }
];
class AppComponent {
    constructor(dialog, notification) {
        this.dialog = dialog;
        this.notification = notification;
        this.contentElem = {
            contentType: 'home',
            contentTitle: 'Welcome'
        };
        this.savingAcctList = SAVING_ACCT_DATA;
        this.goalsAcctList = GOALS_ACCT_DATA;
        this.investmentAcctList = INVESTMENT_ACCT_DATA;
    }
    openDialog(themeColor) {
        const dialogRef = this.dialog.open(_shared_components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_1__["DialogComponent"], {
            panelClass: 'custom-dialog',
            data: {
                themeColor,
            },
        });
    }
    openNotification() {
        this.notification.default('Default Notification');
    }
    onNavigate(features) {
        this.contentElem.contentType = features.type;
        this.contentElem.contentTitle = features.title;
    }
    onNewInvestment(investmentRec) {
        this.investmentAcctList.push(investmentRec);
        this.investmentAcctList = [...this.investmentAcctList];
    }
    onCloseInvestment(investmentRec) {
        for (let i = 0; i < this.investmentAcctList.length; i++) {
            if (this.investmentAcctList[i].acctNum === investmentRec.acctNum) {
                this.transferInvestment_toSaving(investmentRec);
                this.investmentAcctList.splice(i, 1);
                break;
            }
        }
        this.investmentAcctList = [...this.investmentAcctList];
    }
    transferInvestment_toSaving(investmentRec) {
        for (let i = 0; i < this.savingAcctList.length; i++) {
            if (this.savingAcctList[i].custNum === investmentRec.custNum) {
                this.savingAcctList[i].totBalance = (parseFloat(this.savingAcctList[i].totBalance) + parseFloat(investmentRec.totBalance)).toString();
                break;
            }
        }
        this.savingAcctList = [...this.savingAcctList];
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 8, vars: 5, consts: [[3, "featureSelected"], ["sidenav", ""], [1, "container"], [4, "ngIf"], [3, "titleName", "savingAcctList", 4, "ngIf"], [3, "titleName", "goalsAcctList", 4, "ngIf"], [3, "titleName", "investmentAcctList", "sidenav", "onNewInvestment", "onCloseInvestment", 4, "ngIf"], [3, "titleName", "savingAcctList", "goalsAcctList", "sidenav", 4, "ngIf"], [3, "titleName", "savingAcctList"], [3, "titleName", "goalsAcctList"], [3, "titleName", "investmentAcctList", "sidenav", "onNewInvestment", "onCloseInvestment"], [3, "titleName", "savingAcctList", "goalsAcctList", "sidenav"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-sidenav", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("featureSelected", function AppComponent_Template_app_sidenav_featureSelected_0_listener($event) { return ctx.onNavigate($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppComponent_app_home_3_Template, 1, 0, "app-home", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppComponent_app_saving_acct_4_Template, 1, 2, "app-saving-acct", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppComponent_app_goals_acct_5_Template, 1, 2, "app-goals-acct", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AppComponent_app_investment_acct_6_Template, 1, 3, "app-investment-acct", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AppComponent_app_check_balance_7_Template, 1, 4, "app-check-balance", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.contentElem.contentType === "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.contentElem.contentType === "saving-acct");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.contentElem.contentType === "goals-acct");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.contentElem.contentType === "investment-acct");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.contentElem.contentType === "check-balance");
    } }, directives: [_shared_components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_4__["SidenavComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _shared_components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], _shared_components_saving_acct_saving_acct_component__WEBPACK_IMPORTED_MODULE_7__["SavingAcctComponent"], _shared_components_goals_acct_goals_acct_component__WEBPACK_IMPORTED_MODULE_8__["GoalsAcctComponent"], _shared_components_investment_acct_investment_acct_component__WEBPACK_IMPORTED_MODULE_9__["InvestmentAcctComponent"], _shared_components_check_balance_check_balance_component__WEBPACK_IMPORTED_MODULE_10__["CheckBalanceComponent"]], styles: [".container[_ngcontent-%COMP%] {\n  padding: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsWUFBQTtBQURGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2Nzc1xuXG4uY29udGFpbmVyIHtcbiAgcGFkZGluZzogOHB4O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }, { type: _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _shared_components_saving_acct_saving_acct_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/components/saving-acct/saving-acct.component */ "./src/app/shared/components/saving-acct/saving-acct.component.ts");
/* harmony import */ var _shared_components_goals_acct_goals_acct_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/components/goals-acct/goals-acct.component */ "./src/app/shared/components/goals-acct/goals-acct.component.ts");
/* harmony import */ var _shared_components_investment_acct_investment_acct_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/components/investment-acct/investment-acct.component */ "./src/app/shared/components/investment-acct/investment-acct.component.ts");
/* harmony import */ var _shared_components_check_balance_check_balance_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/components/check-balance/check-balance.component */ "./src/app/shared/components/check-balance/check-balance.component.ts");
/* harmony import */ var _shared_components_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/components/home/home.component */ "./src/app/shared/components/home/home.component.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
// app/app.module.ts


















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_10__["MaterialModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatTableModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__["MatAutocompleteModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], _shared_components_saving_acct_saving_acct_component__WEBPACK_IMPORTED_MODULE_3__["SavingAcctComponent"], _shared_components_goals_acct_goals_acct_component__WEBPACK_IMPORTED_MODULE_4__["GoalsAcctComponent"], _shared_components_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], _shared_components_investment_acct_investment_acct_component__WEBPACK_IMPORTED_MODULE_5__["InvestmentAcctComponent"], _shared_components_check_balance_check_balance_component__WEBPACK_IMPORTED_MODULE_6__["CheckBalanceComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_10__["MaterialModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatTableModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__["MatAutocompleteModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], _shared_components_saving_acct_saving_acct_component__WEBPACK_IMPORTED_MODULE_3__["SavingAcctComponent"], _shared_components_goals_acct_goals_acct_component__WEBPACK_IMPORTED_MODULE_4__["GoalsAcctComponent"], _shared_components_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], _shared_components_investment_acct_investment_acct_component__WEBPACK_IMPORTED_MODULE_5__["InvestmentAcctComponent"], _shared_components_check_balance_check_balance_component__WEBPACK_IMPORTED_MODULE_6__["CheckBalanceComponent"]],
                imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_10__["MaterialModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatTableModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__["MatAutocompleteModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"]],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/material/material.module.ts":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/badge.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
// src/app/material/material.module.ts















class MaterialModule {
}
MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MaterialModule_Factory(t) { return new (t || MaterialModule)(); }, imports: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_2__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_3__["MatSlideToggleModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__["MatTooltipModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__["MatSnackBarModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, { exports: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_2__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_3__["MatSlideToggleModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__["MatTooltipModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__["MatSnackBarModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                exports: [
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_2__["MatSliderModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_3__["MatSlideToggleModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__["MatTooltipModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"],
                    _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__["MatSnackBarModule"]
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/components/check-balance/check-balance.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/check-balance/check-balance.component.ts ***!
  \****************************************************************************/
/*! exports provided: CheckBalanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckBalanceComponent", function() { return CheckBalanceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");











function CheckBalanceComponent_mat_option_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const savingAcctList_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", savingAcctList_r4.custNum);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", savingAcctList_r4.custNum, " ");
} }
function CheckBalanceComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Saving Account Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Customer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Saving Account Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Total Balance");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.chckBalDetails.custName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.chckBalDetails.savingAcctNum);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](20, 3, ctx_r2.chckBalDetails.savingTotalBal, "RM "));
} }
function CheckBalanceComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Goals Account Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Customer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Goals Account Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Total Balance");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.chckBalDetails.custName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.chckBalDetails.goalsAcctNum);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](20, 3, ctx_r3.chckBalDetails.goalsTotalBal, "RM "));
} }
class CheckBalanceComponent {
    constructor() {
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.searchKey = '';
        this.chckBalDetails = {
            custName: 'N/A',
            savingAcctNum: 'N/A',
            savingTotalBal: 'N/A',
            goalsAcctNum: 'N/A',
            goalsTotalBal: 'N/A'
        };
        this.showDetails = false;
    }
    ngOnInit() {
        this.filteredOptions = this.myControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(value => (typeof value === 'string' ? value : value.custNum)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(custNum => (custNum ? this._filter(custNum) : this.savingAcctList.slice())));
    }
    displayFn(custNum) {
        return custNum ? custNum : '';
    }
    _filter(name) {
        const filterValue = name.toLowerCase();
        return this.savingAcctList.filter(option => option.custNum.toLowerCase().includes(filterValue));
    }
    chkBalance() {
        if (this.searchKey === '')
            this.showDetails = false;
        else {
            this.showDetails = true;
            this.chckBalDetails.custName = 'N/A';
            this.chckBalDetails.savingAcctNum = 'N/A';
            this.chckBalDetails.savingTotalBal = '0';
            this.chckBalDetails.goalsAcctNum = 'N/A';
            this.chckBalDetails.goalsTotalBal = '0';
            for (let sAcctDetils of this.savingAcctList) {
                if (this.searchKey === sAcctDetils.custNum) {
                    this.chckBalDetails.custName = sAcctDetils.custName;
                    this.chckBalDetails.savingAcctNum = sAcctDetils.acctNum;
                    this.chckBalDetails.savingTotalBal = sAcctDetils.totBalance;
                    break;
                }
            }
            for (let gAcctDetils of this.goalsAcctList) {
                if (this.searchKey === gAcctDetils.custNum) {
                    this.chckBalDetails.goalsAcctNum = gAcctDetils.acctNum;
                    this.chckBalDetails.goalsTotalBal = gAcctDetils.totBalance;
                    break;
                }
            }
        }
    }
}
CheckBalanceComponent.ɵfac = function CheckBalanceComponent_Factory(t) { return new (t || CheckBalanceComponent)(); };
CheckBalanceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CheckBalanceComponent, selectors: [["app-check-balance"]], inputs: { titleName: "titleName", goalsAcctList: "goalsAcctList", sidenav: "sidenav", savingAcctList: "savingAcctList" }, decls: 16, vars: 11, consts: [[1, "lbl-select"], [1, "chk-bal-form"], ["appearance", "outline", 1, "chk-bal-width", 3, "color"], ["type", "text", "matInput", "", 3, "formControl", "matAutocomplete", "ngModel", "ngModelChange"], [3, "displayWith"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", "ngClass", "lbl-search", 3, "color", "click"], ["id", "panel-acct", 4, "ngIf"], [3, "value"], ["id", "panel-acct"], [1, "lbl-acct"], [2, "width", "100%"], [2, "text-align", "center"], [1, "lbl-caption"], [1, "lbl-value"]], template: function CheckBalanceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Please enter the customer ID that you want to check balance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Customer ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CheckBalanceComponent_Template_input_ngModelChange_7_listener($event) { return ctx.searchKey = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-autocomplete", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CheckBalanceComponent_mat_option_10_Template, 2, 2, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CheckBalanceComponent_Template_button_click_12_listener() { return ctx.chkBalance(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Check Account Balance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, CheckBalanceComponent_div_14_Template, 21, 6, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, CheckBalanceComponent_div_15_Template, 21, 6, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.sidenav.themeColor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.myControl)("matAutocomplete", _r0)("ngModel", ctx.searchKey);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx.displayFn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 9, ctx.filteredOptions));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.sidenav.themeColor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showDetails);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showDetails);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatOption"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["CurrencyPipe"]], styles: [".lbl-select[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: lighter;\n  color: lightslategray;\n  display: flex;\n  margin: 52px auto 32px;\n  padding: 0 16px;\n  max-width: 960px;\n  flex-direction: column;\n  align-items: center;\n  letter-spacing: 1px;\n}\n\n.chk-bal-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 700px;\n  width: 100%;\n}\n\n.chk-bal-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.chk-bal-width[_ngcontent-%COMP%]    .mat-form-field-wrapper {\n  padding-bottom: 0px;\n}\n\n.lbl-search[_ngcontent-%COMP%] {\n  font-size: 24px;\n  display: flex;\n  margin: 0px auto 32px;\n  padding: 10px 40px 10px 40px;\n  max-width: 960px;\n  flex-direction: column;\n  align-items: center;\n  letter-spacing: 1px;\n}\n\n#panel-acct[_ngcontent-%COMP%] {\n  border-radius: 15px !important;\n  background-color: #f2f2f4 !important;\n  padding: 20px 20px 20px 20px;\n  min-width: 90%;\n  margin-bottom: 20px;\n}\n\n.lbl-acct[_ngcontent-%COMP%] {\n  color: #182e4d;\n  padding-left: 10px;\n  margin-top: 10px;\n  margin-bottom: 25px;\n  letter-spacing: 1px;\n  font-size: 24px;\n  font-weight: bold;\n}\n\n.lbl-caption[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  font-size: 1.3rem;\n  color: #182e4d;\n}\n\n.lbl-value[_ngcontent-%COMP%] {\n  font-weight: bolder;\n  color: #182e4d;\n  margin-bottom: 10px;\n  font-size: 1.3rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY2hlY2stYmFsYW5jZS9jaGVjay1iYWxhbmNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0FBQ0o7O0FBQUk7RUFDSSxtQkFBQTtBQUVSOztBQUVBO0VBQ0ksZUFBQTtFQUdBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFESjs7QUFJQTtFQUNJLDhCQUFBO0VBQ0Esb0NBQUE7RUFDQSw0QkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQURKOztBQUlBO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBREo7O0FBSUE7RUFDSSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQURKOztBQUdBO0VBQ0ksbUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUFKIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY2hlY2stYmFsYW5jZS9jaGVjay1iYWxhbmNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxibC1zZWxlY3Qge1xyXG4gICAgZm9udC1zaXplOjI0cHg7XHJcbiAgICBmb250LXdlaWdodDpsaWdodGVyO1xyXG4gICAgY29sb3I6IGxpZ2h0c2xhdGVncmF5O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbjogNTJweCBhdXRvIDMycHg7XHJcbiAgICBwYWRkaW5nOiAwIDE2cHg7XHJcbiAgICBtYXgtd2lkdGg6IDk2MHB4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG59XHJcblxyXG4uY2hrLWJhbC1mb3JtIHtcclxuICAgIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDcwMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuICBcclxuLmNoay1iYWwtd2lkdGgge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICA6Om5nLWRlZXAubWF0LWZvcm0tZmllbGQtd3JhcHBlciB7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDBweDtcclxuICAgIH1cclxufVxyXG5cclxuLmxibC1zZWFyY2gge1xyXG4gICAgZm9udC1zaXplOjI0cHg7XHJcbiAgICAvLyBmb250LXdlaWdodDpsaWdodGVyO1xyXG4gICAgLy8gY29sb3I6IGxpZ2h0c2xhdGVncmF5O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbjogMHB4IGF1dG8gMzJweDtcclxuICAgIHBhZGRpbmc6IDEwcHggNDBweCAxMHB4IDQwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDk2MHB4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG59XHJcblxyXG4jcGFuZWwtYWNjdCB7XHJcbiAgICBib3JkZXItcmFkaXVzIDogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmNCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogMjBweCAyMHB4IDIwcHggMjBweDtcclxuICAgIG1pbi13aWR0aDogOTAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLmxibC1hY2N0IHtcclxuICAgIGNvbG9yOiAjMTgyZTRkO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgZm9udC1zaXplOjI0cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmxibC1jYXB0aW9ue1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gICAgY29sb3I6ICMxODJlNGQ7XHJcbn1cclxuLmxibC12YWx1ZXtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICBjb2xvcjogIzE4MmU0ZDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDEuM3JlbTtcclxufVxyXG5cclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CheckBalanceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-check-balance',
                templateUrl: './check-balance.component.html',
                styleUrls: ['./check-balance.component.scss']
            }]
    }], null, { titleName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], goalsAcctList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], sidenav: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], savingAcctList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/components/dialog/dialog.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/dialog/dialog.component.ts ***!
  \**************************************************************/
/*! exports provided: DialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogComponent", function() { return DialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
// src\app\shared\components\dialog\dialog.component.ts











function DialogComponent_mat_option_6_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogComponent_mat_option_6_Template_mat_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const custnumelem_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.setCustNum(custnumelem_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const custnumelem_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", custnumelem_r3.custNum);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", custnumelem_r3.custNum, " ");
} }
function DialogComponent_p_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Customer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r1.data.custName);
} }
function DialogComponent_p_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Investment ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r2.data.invID);
} }
const _c0 = function () { return { standalone: true }; };
class DialogComponent {
    constructor(data) {
        this.data = data;
        this.custnumrec = [
            { acctNum: 'SA-0001', custNum: '730201-02-3948', custName: 'Abu Bakar', totBalance: '5000' },
            { acctNum: 'SA-0002', custNum: '820406-01-3346', custName: 'Umar Khatab', totBalance: '10400' },
            { acctNum: 'SA-0003', custNum: '760211-01-7764', custName: 'Bilal Rabah', totBalance: '450' },
            { acctNum: 'SA-0004', custNum: '734571-12-7348', custName: 'Ahmad Albab', totBalance: '5992' },
            { acctNum: 'SA-0005', custNum: '874351-02-3738', custName: 'Sulaiman Akhlaken', totBalance: '522' },
            { acctNum: 'SA-0006', custNum: '892341-02-8858', custName: 'Sadiq Sigaraga', totBalance: '3325' },
            { acctNum: 'SA-0007', custNum: '792011-03-6738', custName: 'Sudin Abdullah', totBalance: '533' },
            { acctNum: 'SA-0008', custNum: '892341-04-2868', custName: 'Syafiq Rahim', totBalance: '425' },
            { acctNum: 'SA-0009', custNum: '902211-02-9438', custName: 'Ismail Ibrahim', totBalance: '755' },
            { acctNum: 'SA-00010', custNum: '839921-09-3548', custName: 'Safawi Rashid', totBalance: '335' },
            { acctNum: 'SA-00011', custNum: '782931-10-7748', custName: 'Pablo Aimar', totBalance: '309' },
            { acctNum: 'SA-00012', custNum: '812341-02-3934', custName: 'Dollah Salleh', totBalance: '4995' },
            { acctNum: 'SA-00013', custNum: '829931-05-3378', custName: 'Benjamin Mora', totBalance: '1208' },
            { acctNum: 'SA-00014', custNum: '872931-07-4498', custName: 'Moktar Dahari', totBalance: '937' }
        ];
    }
    ngOnInit() { }
    setCustNum(custNumData) {
        this.data.custName = custNumData.custName;
        this.data.custID = custNumData.custNum;
    }
}
DialogComponent.ɵfac = function DialogComponent_Factory(t) { return new (t || DialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
DialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DialogComponent, selectors: [["app-dialog"]], decls: 21, vars: 9, consts: [["mat-dialog-title", ""], ["mat-dialog-content", "", 2, "padding-top", "20px"], ["placeholder", "Customer ID"], [3, "value", "click", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["matPrefix", ""], ["type", "text", "matInput", "", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["align", "end"], ["mat-flat-button", "", 3, "color", "mat-dialog-close"], ["mat-stroked-button", "", "mat-dialog-close", ""], [3, "value", "click"], ["matInput", "", "readonly", "", 3, "value"]], template: function DialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "New Investment Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DialogComponent_mat_option_6_Template, 2, 2, "mat-option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DialogComponent_p_7_Template, 5, 1, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DialogComponent_p_8_Template, 5, 1, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "RM \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DialogComponent_Template_input_ngModelChange_15_listener($event) { return ctx.data.amount = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-dialog-actions", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("color", ctx.data.themeColor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.custnumrec);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.custName !== "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.custName !== "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.data.amount)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.data.themeColor)("mat-dialog-close", ctx.data);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_3__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatLabel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatPrefix"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatOption"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2RpYWxvZy9kaWFsb2cuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dialog',
                templateUrl: './dialog.component.html',
                styleUrls: ['./dialog.component.scss'],
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/components/goals-acct/goals-acct.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/goals-acct/goals-acct.component.ts ***!
  \**********************************************************************/
/*! exports provided: GoalsAcctComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoalsAcctComponent", function() { return GoalsAcctComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function GoalsAcctComponent_th_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Customer ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GoalsAcctComponent_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r10 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r1.selectedAcct == element_r10.custNum ? "cell-caption1" : "cell-caption2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r10.custNum, " ");
} }
function GoalsAcctComponent_th_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Customer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GoalsAcctComponent_td_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r11 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r3.selectedAcct == element_r11.custNum ? "cell-caption1" : "cell-caption2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r11.custName, " ");
} }
function GoalsAcctComponent_th_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Goals Account Number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GoalsAcctComponent_td_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r12 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r5.selectedAcct == element_r12.custNum ? "cell-caption1" : "cell-caption2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r12.acctNum, " ");
} }
function GoalsAcctComponent_th_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Total Balance");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GoalsAcctComponent_td_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r13 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r7.selectedAcct == element_r13.custNum ? "cell-caption1" : "cell-caption2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 2, element_r13.totBalance, "RM "), " ");
} }
function GoalsAcctComponent_tr_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 13);
} }
const _c0 = function (a0) { return { "highlight": a0 }; };
function GoalsAcctComponent_tr_17_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GoalsAcctComponent_tr_17_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const row_r14 = ctx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.highlight(row_r14); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r14 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r9.selectedAcct == row_r14.custNum));
} }
class GoalsAcctComponent {
    constructor() {
        this.displayedColumns = ['custnum', 'custname', 'acctnum', 'totbalance'];
        this.selectedAcct = '';
    }
    ngOnInit() {
    }
    highlight(row) {
        this.selectedAcct = row.custNum;
    }
}
GoalsAcctComponent.ɵfac = function GoalsAcctComponent_Factory(t) { return new (t || GoalsAcctComponent)(); };
GoalsAcctComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GoalsAcctComponent, selectors: [["app-goals-acct"]], inputs: { titleName: "titleName", goalsAcctList: "goalsAcctList" }, decls: 18, vars: 5, consts: [[1, "lbl-title"], ["id", "panel-form-userxmgmt"], ["mat-table", "", 2, "width", "100%", 3, "dataSource"], ["matColumnDef", "custnum"], ["mat-header-cell", "", "class", "clmappt", 4, "matHeaderCellDef"], ["mat-cell", "", 3, "ngClass", 4, "matCellDef"], ["matColumnDef", "custname"], ["matColumnDef", "acctnum"], ["matColumnDef", "totbalance"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 3, "ngClass", "click", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", "", 1, "clmappt"], ["mat-cell", "", 3, "ngClass"], ["mat-header-row", ""], ["mat-row", "", 3, "ngClass", "click"]], template: function GoalsAcctComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](4, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, GoalsAcctComponent_th_5_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, GoalsAcctComponent_td_6_Template, 2, 2, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](7, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, GoalsAcctComponent_th_8_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, GoalsAcctComponent_td_9_Template, 2, 2, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](10, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, GoalsAcctComponent_th_11_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, GoalsAcctComponent_td_12_Template, 2, 2, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](13, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, GoalsAcctComponent_th_14_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, GoalsAcctComponent_td_15_Template, 3, 5, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, GoalsAcctComponent_tr_16_Template, 1, 0, "tr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, GoalsAcctComponent_tr_17_Template, 1, 3, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.titleName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.goalsAcctList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns)("matHeaderRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCell"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRow"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CurrencyPipe"]], styles: [".example-container[_ngcontent-%COMP%] {\n  height: 400px;\n  width: 550px;\n  max-width: 100%;\n  overflow: auto;\n}\n\ntable[_ngcontent-%COMP%] {\n  table-layout: fixed;\n  width: 250px;\n  background-color: #f2f2f4 !important;\n}\n\n#panel-form-usermgmt[_ngcontent-%COMP%] {\n  border-radius: 15px !important;\n  background-color: #f2f2f4 !important;\n  padding: 10px 10px 10px 10px;\n}\n\n.col-lg-12[_ngcontent-%COMP%] {\n  padding-right: 0px;\n  padding-left: 0px;\n}\n\n#panel-table-usermgmt[_ngcontent-%COMP%] {\n  max-width: 100%;\n  min-width: 600px;\n  overflow: auto;\n  height: calc(100vh - 150px);\n}\n\n.lbl-title[_ngcontent-%COMP%] {\n  color: #182e4d;\n  padding-left: 10px;\n  margin-top: 10px;\n  letter-spacing: 1px;\n  font-size: 24px;\n  font-weight: bold;\n}\n\n.loading-shade[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 56px;\n  right: 0;\n  background: transparent;\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.example-rate-limit-reached[_ngcontent-%COMP%] {\n  color: #980000;\n  max-width: 360px;\n  text-align: center;\n  height: calc(100vh - 150px);\n}\n\n.mat-header-cell.actionid[_ngcontent-%COMP%] {\n  width: 45px;\n  box-sizing: border-box;\n  font-size: 0.8rem;\n  color: #182e4d;\n  padding: 0px 0px 0px 0px;\n}\n\nth.mat-header-cell[_ngcontent-%COMP%]:first-of-type, td.mat-cell[_ngcontent-%COMP%]:first-of-type, td.mat-footer-cell[_ngcontent-%COMP%]:first-of-type {\n  padding-left: 15px;\n}\n\n.mat-table-sticky[_ngcontent-%COMP%]:first-child {\n  padding-top: 8px;\n  padding-left: 10px;\n}\n\n.mat-header-cell.uid[_ngcontent-%COMP%] {\n  width: 100px;\n  box-sizing: border-box;\n  font-size: 0.8rem;\n  color: #182e4d;\n  padding: 0px 24px 0px 10px;\n}\n\n.mat-header-cell.name[_ngcontent-%COMP%] {\n  width: 130px;\n  box-sizing: border-box;\n  font-size: 0.8rem;\n  color: #182e4d;\n  padding: 0px 24px 0px 0px;\n}\n\n.mat-cell.cell-caption[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: bolder;\n  color: #182e4d;\n  margin-bottom: 8px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  padding-right: 10px;\n}\n\n.mat-cell.cell-morevert[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: bolder;\n  color: #182e4d;\n  margin-bottom: 8px;\n  overflow: hidden;\n  padding-right: 10px;\n}\n\n.mat-cell.cell-caption-uid[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: bolder;\n  color: #182e4d;\n  margin-bottom: 8px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  padding-right: 10px;\n  padding-left: 10px;\n}\n\n.mat-cell.cell-action[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: bolder;\n  color: #182e4d;\n  margin-bottom: 8px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  padding-right: 10px;\n}\n\n[_ngcontent-%COMP%]::placeholder {\n  font-style: italic;\n}\n\nul.lbl-style[_ngcontent-%COMP%] {\n  list-style-type: none;\n  padding-left: 1px;\n  margin: unset;\n}\n\n.mtbtn[_ngcontent-%COMP%] {\n  border: 0;\n  outline: none;\n}\n\n.mtbtn[_ngcontent-%COMP%]:hover {\n  color: #008bb5;\n  cursor: pointer;\n}\n\na.srlink[_ngcontent-%COMP%]:hover {\n  color: #008bb5;\n  cursor: pointer;\n}\n\n.modal-title[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  line-height: 1.5;\n  font-size: 20px;\n  color: #182e4d;\n  letter-spacing: 2px;\n}\n\n.lbl-value[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: bolder;\n  font-family: Arial, Helvetica, sans-serif;\n  color: #182e4d;\n  margin-bottom: 8px;\n}\n\n.lbl-caption[_ngcontent-%COMP%] {\n  margin-bottom: 1px;\n  font-size: 0.8rem;\n  font-family: Arial, Helvetica, sans-serif;\n  color: #49525e;\n}\n\n.lbl-value[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: bolder;\n  font-family: Arial, Helvetica, sans-serif;\n  color: #182e4d;\n  margin-bottom: 8px;\n}\n\nbutton.close[_ngcontent-%COMP%] {\n  border: 0;\n  outline: none;\n}\n\nbutton.mat-menu-item[_ngcontent-%COMP%] {\n  border: 0;\n  outline: none;\n}\n\n.highlight[_ngcontent-%COMP%] {\n  background: #d2d7dd;\n}\n\n#panel-list[_ngcontent-%COMP%] {\n  max-width: 100%;\n  background-color: white;\n  overflow: auto;\n  height: 65vh;\n  border-radius: 15px;\n  border-width: 1px;\n}\n\n#panel-list[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 14px;\n  height: 18px;\n}\n\n#panel-list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  cursor: pointer;\n  scroll-padding-top: 10px;\n  border: 4px solid rgba(0, 0, 0, 0);\n  background-clip: padding-box;\n  -webkit-border-radius: 7px;\n  background-color: rgba(0, 0, 0, 0.15);\n  -webkit-box-shadow: inset -1px -1px 0px rgba(0, 0, 0, 0.05), inset 1px 1px 0px rgba(0, 0, 0, 0.05);\n}\n\n#panel-list[_ngcontent-%COMP%]::-webkit-scrollbar-button {\n  width: 0;\n  height: 0;\n}\n\n#panel-list[_ngcontent-%COMP%]::-webkit-scrollbar-corner {\n  background-color: transparent;\n}\n\n#panel-list[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 14px;\n  height: 18px;\n}\n\n#panel-list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  cursor: pointer;\n  scroll-padding-top: 10px;\n  border: 4px solid rgba(0, 0, 0, 0);\n  background-clip: padding-box;\n  -webkit-border-radius: 7px;\n  background-color: rgba(0, 0, 0, 0.15);\n  -webkit-box-shadow: inset -1px -1px 0px rgba(0, 0, 0, 0.05), inset 1px 1px 0px rgba(0, 0, 0, 0.05);\n}\n\n#panel-list[_ngcontent-%COMP%]::-webkit-scrollbar-button {\n  width: 0;\n  height: 0;\n}\n\n#panel-list[_ngcontent-%COMP%]::-webkit-scrollbar-corner {\n  background-color: transparent;\n}\n\n.mat-header-cell.clmappt[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  font-size: 0.9rem;\n  font-weight: bold;\n  background-color: lightgray;\n  border-top: 3px inset #182e4d;\n  border-bottom: 2px inset #182e4d;\n  color: #182e4d;\n  padding: 0px 5px 0px 0px;\n}\n\n.mat-cell.cell-caption2[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: lighter;\n  color: #182e4d;\n  margin-bottom: 8px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  padding-right: 10px;\n  padding-left: 0px;\n  letter-spacing: 1px;\n}\n\n.mat-cell.cell-caption1[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: bolder;\n  color: #182e4d;\n  margin-bottom: 8px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  padding-right: 10px;\n  padding-left: 0px;\n  letter-spacing: 1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZ29hbHMtYWNjdC9nb2Fscy1hY2N0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUFKOztBQUdFO0VBQ0UsbUJBQUE7RUFFQSxZQUFBO0VBQ0Esb0NBQUE7QUFESjs7QUFJRTtFQUNFLDhCQUFBO0VBQ0Esb0NBQUE7RUFDQSw0QkFBQTtBQURKOztBQUtFO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtBQUZKOztBQUtFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUVBLDJCQUFBO0FBSEo7O0FBTUU7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUVBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBSko7O0FBUUU7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFFQSx1QkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQU5KOztBQVNFO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtBQU5KOztBQVNFO0VBQ0UsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esd0JBQUE7QUFOSjs7QUFVRTtFQUNFLGtCQUFBO0FBUEo7O0FBV0U7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FBUko7O0FBV0U7RUFDRSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtBQVJKOztBQVlFO0VBQ0UsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7QUFUSjs7QUFZRTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQVRKOztBQWFFO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBR0EsbUJBQUE7QUFaSjs7QUFnQkU7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQWJKOztBQWlCRTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQWRKOztBQTBCRTtFQUNFLGtCQUFBO0FBYko7O0FBZ0JFO0VBQ0UscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7QUFiSjs7QUFpQkU7RUFDRSxTQUFBO0VBQ0EsYUFBQTtBQWRKOztBQWlCRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FBZEo7O0FBaUJFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUFkSjs7QUFpQkU7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQWRKOztBQWlCRTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5Q0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQWRKOztBQWlCRTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5Q0FBQTtFQUNBLGNBQUE7QUFkSjs7QUFpQkU7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUNBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFkSjs7QUE4QkU7RUFDRSxTQUFBO0VBQ0EsYUFBQTtBQTNCSjs7QUE4QkU7RUFDRSxTQUFBO0VBQ0EsYUFBQTtBQTNCSjs7QUE4QkU7RUFDRSxtQkFBQTtBQTNCSjs7QUE4QkE7RUFDSSxlQUFBO0VBQ0EsdUJBQUE7RUFFQSxjQUFBO0VBQ0EsWUFBQTtFQUdFLG1CQUFBO0VBQ0EsaUJBQUE7QUE1Qk47O0FBK0JFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUE1Qko7O0FBOEJFO0VBRUUsZUFBQTtFQUNBLHdCQUFBO0VBQ0Esa0NBQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0VBQ0EscUNBQUE7RUFDQSxrR0FBQTtBQTVCSjs7QUE4QkU7RUFDRSxRQUFBO0VBQ0EsU0FBQTtBQTNCSjs7QUE4QkU7RUFDRSw2QkFBQTtBQTNCSjs7QUE4QkU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQTNCSjs7QUE2QkU7RUFFRSxlQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsMEJBQUE7RUFDQSxxQ0FBQTtFQUNBLGtHQUFBO0FBM0JKOztBQTZCRTtFQUNFLFFBQUE7RUFDQSxTQUFBO0FBMUJKOztBQTZCRTtFQUNFLDZCQUFBO0FBMUJKOztBQTRCRTtFQUVDLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQ0FBQTtFQUNBLGNBQUE7RUFDQSx3QkFBQTtBQTFCSDs7QUE2QkU7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBMUJKOztBQTZCRTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUExQkoiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9nb2Fscy1hY2N0L2dvYWxzLWFjY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmV4YW1wbGUtY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICB3aWR0aDogNTUwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICB9XHJcbiAgXHJcbiAgdGFibGUge1xyXG4gICAgdGFibGUtbGF5b3V0OiBmaXhlZDtcclxuICAgIC8vIHdpZHRoOiAxMDAlO1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmNCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAjcGFuZWwtZm9ybS11c2VybWdtdCB7XHJcbiAgICBib3JkZXItcmFkaXVzIDogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmNCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggMTBweDtcclxuICAgIC8vIG1hcmdpbi10b3A6MzBweDtcclxuICB9XHJcbiAgXHJcbiAgLmNvbC1sZy0xMiB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICB9XHJcbiAgXHJcbiAgI3BhbmVsLXRhYmxlLXVzZXJtZ210IHtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIG1pbi13aWR0aDogNjAwcHg7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIC8vIGhlaWdodDogNDUwcHg7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxNTBweCk7XHJcbiAgfVxyXG4gIFxyXG4gIC5sYmwtdGl0bGV7XHJcbiAgICBjb2xvcjogIzE4MmU0ZDtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAvLyBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIGZvbnQtc2l6ZToyNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC5sb2FkaW5nLXNoYWRlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3R0b206IDU2cHg7XHJcbiAgICByaWdodDogMDtcclxuICAgIC8vIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgICBiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLXJhdGUtbGltaXQtcmVhY2hlZCB7XHJcbiAgICBjb2xvcjogIzk4MDAwMDtcclxuICAgIG1heC13aWR0aDogMzYwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxNTBweCk7XHJcbiAgfVxyXG4gIFxyXG4gIC5tYXQtaGVhZGVyLWNlbGwuYWN0aW9uaWQge1xyXG4gICAgd2lkdGg6IDQ1cHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgZm9udC1zaXplOiAuOHJlbTtcclxuICAgIGNvbG9yOiAjMTgyZTRkO1xyXG4gICAgcGFkZGluZzowcHggMHB4IDBweCAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gXHJcbiAgdGgubWF0LWhlYWRlci1jZWxsOmZpcnN0LW9mLXR5cGUsIHRkLm1hdC1jZWxsOmZpcnN0LW9mLXR5cGUsIHRkLm1hdC1mb290ZXItY2VsbDpmaXJzdC1vZi10eXBlIHtcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgIC8vIHBhZGRpbmctdG9wOiA4cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5tYXQtdGFibGUtc3RpY2t5OmZpcnN0LWNoaWxkIHtcclxuICAgIHBhZGRpbmctdG9wOiA4cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgfVxyXG5cclxuICAubWF0LWhlYWRlci1jZWxsLnVpZCB7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgZm9udC1zaXplOiAuOHJlbTtcclxuICAgIGNvbG9yOiAjMTgyZTRkO1xyXG4gICAgcGFkZGluZzowcHggMjRweCAwcHggMTBweDtcclxuICBcclxuICB9XHJcbiAgXHJcbiAgLm1hdC1oZWFkZXItY2VsbC5uYW1lIHtcclxuICAgIHdpZHRoOiAxMzBweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBmb250LXNpemU6IC44cmVtO1xyXG4gICAgY29sb3I6ICMxODJlNGQ7XHJcbiAgICBwYWRkaW5nOjBweCAyNHB4IDBweCAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5tYXQtY2VsbC5jZWxsLWNhcHRpb257XHJcbiAgICBmb250LXNpemU6IC45cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgIGNvbG9yOiAjMTgyZTRkO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICAvLyBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gIH1cclxuICBcclxuICAubWF0LWNlbGwuY2VsbC1tb3JldmVydHtcclxuICAgIGZvbnQtc2l6ZTogLjlyZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgY29sb3I6ICMxODJlNGQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgLy8gdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAvLyB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgIC8vIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5tYXQtY2VsbC5jZWxsLWNhcHRpb24tdWlke1xyXG4gICAgZm9udC1zaXplOiAuOXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICBjb2xvcjogIzE4MmU0ZDtcclxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OjEwcHg7XHJcbiAgICAvLyBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gIH1cclxuICBcclxuICAubWF0LWNlbGwuY2VsbC1hY3Rpb257XHJcbiAgICBmb250LXNpemU6IC45cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgIGNvbG9yOiAjMTgyZTRkO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7IC8qIEVkZ2UgKi9cclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICB9XHJcbiAgXHJcbiAgOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7IC8qIEludGVybmV0IEV4cGxvcmVyIDEwLTExICovXHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgfVxyXG4gIFxyXG4gIDo6cGxhY2Vob2xkZXIge1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIH1cclxuICBcclxuICB1bC5sYmwtc3R5bGV7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6bm9uZTtcclxuICAgIHBhZGRpbmctbGVmdDogMXB4O1xyXG4gICAgbWFyZ2luOiB1bnNldDtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLm10YnRue1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLm10YnRuOmhvdmVye1xyXG4gICAgY29sb3I6ICMwMDhiYjU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIGEuc3JsaW5rOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjMDA4YmI1O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICBcclxuICAubW9kYWwtdGl0bGUge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBjb2xvcjogIzE4MmU0ZDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAycHggO1xyXG4gIH1cclxuICBcclxuICAubGJsLXZhbHVle1xyXG4gICAgZm9udC1zaXplOiAuOHJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiAjMTgyZTRkO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gIH1cclxuICBcclxuICAubGJsLWNhcHRpb257XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcHg7XHJcbiAgICBmb250LXNpemU6IC44cmVtO1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogIzQ5NTI1ZTtcclxuICB9XHJcbiAgXHJcbiAgLmxibC12YWx1ZXtcclxuICAgIGZvbnQtc2l6ZTogLjhyZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogIzE4MmU0ZDtcclxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICB9XHJcbiAgXHJcbi8vICAgLnNwYW4ubGJsLW1lbnUtdmFsdWV7XHJcbi8vICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuLy8gICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbi8vICAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuLy8gICAgIGNvbG9yOiAjMTgyZTRkO1xyXG4vLyAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4vLyAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4vLyAgIH1cclxuICBcclxuLy8gICAuc3JzdGF0dXNlZGl0e1xyXG4vLyAgICAgbWFyZ2luLXRvcDoxNXB4O1xyXG4vLyAgIH1cclxuICBcclxuICBidXR0b24uY2xvc2Uge1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgYnV0dG9uLm1hdC1tZW51LWl0ZW0ge1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLmhpZ2hsaWdodHtcclxuICAgIGJhY2tncm91bmQ6ICNkMmQ3ZGQ7XHJcbiAgfVxyXG4gIFxyXG4jcGFuZWwtbGlzdCB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIC8vIG1pbi13aWR0aDogNjAwcHg7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIGhlaWdodDogNjV2aDtcclxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgfVxyXG4gIFxyXG4gICNwYW5lbC1saXN0Ojotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICB3aWR0aDogMTRweDtcclxuICAgIGhlaWdodDogMThweDtcclxuICB9XHJcbiAgI3BhbmVsLWxpc3Q6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgIC8vIGhlaWdodDogNnB4O1xyXG4gICAgY3Vyc29yOnBvaW50ZXI7XHJcbiAgICBzY3JvbGwtcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICBib3JkZXI6IDRweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDApO1xyXG4gICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgLTFweCAtMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMDUpLCBpbnNldCAxcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG4gIH1cclxuICAjcGFuZWwtbGlzdDo6LXdlYmtpdC1zY3JvbGxiYXItYnV0dG9uIHtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gICAgLy8gZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgI3BhbmVsLWxpc3Q6Oi13ZWJraXQtc2Nyb2xsYmFyLWNvcm5lciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudFxyXG4gIH1cclxuICBcclxuICAjcGFuZWwtbGlzdDo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgd2lkdGg6IDE0cHg7XHJcbiAgICBoZWlnaHQ6IDE4cHg7XHJcbiAgfVxyXG4gICNwYW5lbC1saXN0Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICAvLyBoZWlnaHQ6IDZweDtcclxuICAgIGN1cnNvcjpwb2ludGVyO1xyXG4gICAgc2Nyb2xsLXBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgYm9yZGVyOiA0cHggc29saWQgcmdiYSgwLCAwLCAwLCAwKTtcclxuICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDdweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IC0xcHggLTFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjA1KSwgaW5zZXQgMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuICB9XHJcbiAgI3BhbmVsLWxpc3Q6Oi13ZWJraXQtc2Nyb2xsYmFyLWJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIGhlaWdodDogMDtcclxuICAgIC8vIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gICNwYW5lbC1saXN0Ojotd2Via2l0LXNjcm9sbGJhci1jb3JuZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnRcclxuICB9XHJcbiAgLm1hdC1oZWFkZXItY2VsbC5jbG1hcHB0IHtcclxuICAgIC8vIHdpZHRoOiAxMTVweDtcclxuICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgZm9udC1zaXplOiAuOXJlbTtcclxuICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgIGJhY2tncm91bmQtY29sb3I6bGlnaHRncmF5O1xyXG4gICBib3JkZXItdG9wOiAzcHggaW5zZXQgIzE4MmU0ZDtcclxuICAgYm9yZGVyLWJvdHRvbTogMnB4IGluc2V0ICMxODJlNGQ7XHJcbiAgIGNvbG9yOiAjMTgyZTRkO1xyXG4gICBwYWRkaW5nOjBweCA1cHggMHB4IDBweDtcclxuICB9XHJcbiAgXHJcbiAgLm1hdC1jZWxsLmNlbGwtY2FwdGlvbjJ7XHJcbiAgICBmb250LXNpemU6IC45cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6bGlnaHRlcjtcclxuICAgIGNvbG9yOiAjMTgyZTRkO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6MHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICB9XHJcbiAgXHJcbiAgLm1hdC1jZWxsLmNlbGwtY2FwdGlvbjF7XHJcbiAgICBmb250LXNpemU6IC45cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgIGNvbG9yOiAjMTgyZTRkO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6MHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICB9XHJcbiAgIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GoalsAcctComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-goals-acct',
                templateUrl: './goals-acct.component.html',
                styleUrls: ['./goals-acct.component.scss']
            }]
    }], function () { return []; }, { titleName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], goalsAcctList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/components/home/home.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/components/home/home.component.ts ***!
  \**********************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 4, vars: 0, consts: [[1, "lbl-welcome"], [1, "lbl-select"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Welcome, Khalil Ahmad !");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Please choose your preferred features that you want to execute.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".lbl-welcome[_ngcontent-%COMP%] {\n  font-size: 64px;\n  font-weight: lighter;\n  display: flex;\n  margin: 82px auto 32px;\n  padding: 0 16px;\n  max-width: 960px;\n  flex-direction: column;\n  align-items: center;\n  letter-spacing: 1px;\n}\n\n.lbl-select[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: lighter;\n  color: lightslategray;\n  display: flex;\n  margin: 82px auto 32px;\n  padding: 0 16px;\n  max-width: 960px;\n  flex-direction: column;\n  align-items: center;\n  letter-spacing: 1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxibC13ZWxjb21lIHtcclxuICAgIGZvbnQtc2l6ZTo2NHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6bGlnaHRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW46IDgycHggYXV0byAzMnB4O1xyXG4gICAgcGFkZGluZzogMCAxNnB4O1xyXG4gICAgbWF4LXdpZHRoOiA5NjBweDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxufVxyXG5cclxuLmxibC1zZWxlY3Qge1xyXG4gICAgZm9udC1zaXplOjI0cHg7XHJcbiAgICBmb250LXdlaWdodDpsaWdodGVyO1xyXG4gICAgY29sb3I6IGxpZ2h0c2xhdGVncmF5O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbjogODJweCBhdXRvIDMycHg7XHJcbiAgICBwYWRkaW5nOiAwIDE2cHg7XHJcbiAgICBtYXgtd2lkdGg6IDk2MHB4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/components/investment-acct/investment-acct.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/shared/components/investment-acct/investment-acct.component.ts ***!
  \********************************************************************************/
/*! exports provided: InvestmentAcctComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvestmentAcctComponent", function() { return InvestmentAcctComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../dialog/dialog.component */ "./src/app/shared/components/dialog/dialog.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function InvestmentAcctComponent_th_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Customer ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InvestmentAcctComponent_td_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r12 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r1.selectedAcct == element_r12.custNum ? "cell-caption1" : "cell-caption2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r12.custNum, " ");
} }
function InvestmentAcctComponent_th_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Customer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InvestmentAcctComponent_td_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r13 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r3.selectedAcct == element_r13.custNum ? "cell-caption1" : "cell-caption2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r13.custName, " ");
} }
function InvestmentAcctComponent_th_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Investment Account Number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InvestmentAcctComponent_td_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r14 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r5.selectedAcct == element_r14.custNum ? "cell-caption1" : "cell-caption2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r14.acctNum, " ");
} }
function InvestmentAcctComponent_th_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Total Balance");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InvestmentAcctComponent_td_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r15 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r7.selectedAcct == element_r15.custNum ? "cell-caption1" : "cell-caption2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 2, element_r15.totBalance, "RM "), " ");
} }
function InvestmentAcctComponent_th_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "th", 19);
} }
function InvestmentAcctComponent_td_22_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InvestmentAcctComponent_td_22_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const element_r16 = ctx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.showAcctDetails(element_r16); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Close Investment Account");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r9.sidenav.themeColor);
} }
function InvestmentAcctComponent_tr_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 22);
} }
const _c0 = function (a0) { return { "highlight": a0 }; };
function InvestmentAcctComponent_tr_24_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InvestmentAcctComponent_tr_24_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const row_r19 = ctx.$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.highlight(row_r19); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r19 = ctx.$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r11.selectedAcct == row_r19.custNum));
} }
class InvestmentAcctComponent {
    constructor(dialog) {
        this.dialog = dialog;
        this.onNewInvestment = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onCloseInvestment = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.displayedColumns = ['custnum', 'custname', 'acctnum', 'totbalance', 'closeacct'];
        this.selectedAcct = '';
    }
    ngOnInit() {
    }
    highlight(row) {
        this.selectedAcct = row.custNum;
    }
    openDialog(themeColor) {
        const dialogRef = this.dialog.open(_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_1__["DialogComponent"], {
            panelClass: 'custom-dialog',
            data: {
                themeColor,
                invID: 'IA-0009',
                custID: '',
                custName: '',
                amount: ''
            },
        });
        dialogRef.afterClosed().subscribe(result => {
            if (typeof (result) !== 'undefined') {
                this.onNewInvestment.emit({
                    acctNum: result.invID,
                    custNum: result.custID,
                    custName: result.custName,
                    totBalance: result.amount
                });
            }
        });
    }
    showAcctDetails(elemAcctDetails) {
        this.onCloseInvestment.emit(elemAcctDetails);
    }
}
InvestmentAcctComponent.ɵfac = function InvestmentAcctComponent_Factory(t) { return new (t || InvestmentAcctComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"])); };
InvestmentAcctComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InvestmentAcctComponent, selectors: [["app-investment-acct"]], inputs: { titleName: "titleName", investmentAcctList: "investmentAcctList", sidenav: "sidenav" }, outputs: { onNewInvestment: "onNewInvestment", onCloseInvestment: "onCloseInvestment" }, decls: 25, vars: 6, consts: [[1, "main"], [1, "lbl-title"], [1, "new-inv"], ["mat-raised-button", "", 3, "color", "click"], ["id", "panel-form-userxmgmt"], ["mat-table", "", 2, "width", "100%", 3, "dataSource"], ["matColumnDef", "custnum"], ["mat-header-cell", "", "class", "clmappt", 4, "matHeaderCellDef"], ["mat-cell", "", 3, "ngClass", 4, "matCellDef"], ["matColumnDef", "custname"], ["matColumnDef", "acctnum"], ["matColumnDef", "totbalance"], ["matColumnDef", "closeacct"], ["mat-header-cell", "", "class", "clmcloseacct", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 3, "ngClass", "click", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", "", 1, "clmappt"], ["mat-cell", "", 3, "ngClass"], ["mat-header-cell", "", 1, "clmcloseacct"], ["mat-cell", ""], ["mat-flat-button", "", 3, "color", "click"], ["mat-header-row", ""], ["mat-row", "", 3, "ngClass", "click"]], template: function InvestmentAcctComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InvestmentAcctComponent_Template_button_click_4_listener() { return ctx.openDialog(ctx.sidenav.themeColor); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "New Investment Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](8, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, InvestmentAcctComponent_th_9_Template, 2, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, InvestmentAcctComponent_td_10_Template, 2, 2, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](11, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, InvestmentAcctComponent_th_12_Template, 2, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, InvestmentAcctComponent_td_13_Template, 2, 2, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](14, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, InvestmentAcctComponent_th_15_Template, 2, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, InvestmentAcctComponent_td_16_Template, 2, 2, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](17, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, InvestmentAcctComponent_th_18_Template, 2, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, InvestmentAcctComponent_td_19_Template, 3, 5, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](20, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, InvestmentAcctComponent_th_21_Template, 1, 0, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, InvestmentAcctComponent_td_22_Template, 3, 1, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, InvestmentAcctComponent_tr_23_Template, 1, 0, "tr", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, InvestmentAcctComponent_tr_24_Template, 1, 3, "tr", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.titleName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.sidenav.themeColor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.investmentAcctList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns)("matHeaderRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCell"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRow"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CurrencyPipe"]], styles: [".example-container[_ngcontent-%COMP%] {\n  height: 400px;\n  width: 550px;\n  max-width: 100%;\n  overflow: auto;\n}\n\ntable[_ngcontent-%COMP%] {\n  table-layout: fixed;\n  width: 250px;\n  background-color: #f2f2f4 !important;\n}\n\n#panel-form-usermgmt[_ngcontent-%COMP%] {\n  border-radius: 15px !important;\n  background-color: #f2f2f4 !important;\n  padding: 10px 10px 10px 10px;\n}\n\n.col-lg-12[_ngcontent-%COMP%] {\n  padding-right: 0px;\n  padding-left: 0px;\n}\n\n#panel-table-usermgmt[_ngcontent-%COMP%] {\n  max-width: 100%;\n  min-width: 600px;\n  overflow: auto;\n  height: calc(100vh - 150px);\n}\n\n.lbl-title[_ngcontent-%COMP%] {\n  color: #182e4d;\n  padding-left: 10px;\n  margin-top: 10px;\n  letter-spacing: 1px;\n  font-size: 24px;\n  font-weight: bold;\n}\n\n.loading-shade[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 56px;\n  right: 0;\n  background: transparent;\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.example-rate-limit-reached[_ngcontent-%COMP%] {\n  color: #980000;\n  max-width: 360px;\n  text-align: center;\n  height: calc(100vh - 150px);\n}\n\n.mat-header-cell.actionid[_ngcontent-%COMP%] {\n  width: 45px;\n  box-sizing: border-box;\n  font-size: 0.8rem;\n  color: #182e4d;\n  padding: 0px 0px 0px 0px;\n}\n\nth.mat-header-cell[_ngcontent-%COMP%]:first-of-type, td.mat-cell[_ngcontent-%COMP%]:first-of-type, td.mat-footer-cell[_ngcontent-%COMP%]:first-of-type {\n  padding-left: 15px;\n}\n\n.mat-table-sticky[_ngcontent-%COMP%]:first-child {\n  padding-top: 8px;\n  padding-left: 10px;\n}\n\n.mat-header-cell.uid[_ngcontent-%COMP%] {\n  width: 100px;\n  box-sizing: border-box;\n  font-size: 0.8rem;\n  color: #182e4d;\n  padding: 0px 24px 0px 10px;\n}\n\n.mat-header-cell.name[_ngcontent-%COMP%] {\n  width: 130px;\n  box-sizing: border-box;\n  font-size: 0.8rem;\n  color: #182e4d;\n  padding: 0px 24px 0px 0px;\n}\n\n.mat-cell.cell-caption[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: bolder;\n  color: #182e4d;\n  margin-bottom: 8px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  padding-right: 10px;\n}\n\n.mat-cell.cell-morevert[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: bolder;\n  color: #182e4d;\n  margin-bottom: 8px;\n  overflow: hidden;\n  padding-right: 10px;\n}\n\n.mat-cell.cell-caption-uid[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: bolder;\n  color: #182e4d;\n  margin-bottom: 8px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  padding-right: 10px;\n  padding-left: 10px;\n}\n\n.mat-cell.cell-action[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: bolder;\n  color: #182e4d;\n  margin-bottom: 8px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  padding-right: 10px;\n}\n\n[_ngcontent-%COMP%]::placeholder {\n  font-style: italic;\n}\n\nul.lbl-style[_ngcontent-%COMP%] {\n  list-style-type: none;\n  padding-left: 1px;\n  margin: unset;\n}\n\n.mtbtn[_ngcontent-%COMP%] {\n  border: 0;\n  outline: none;\n}\n\n.mtbtn[_ngcontent-%COMP%]:hover {\n  color: #008bb5;\n  cursor: pointer;\n}\n\na.srlink[_ngcontent-%COMP%]:hover {\n  color: #008bb5;\n  cursor: pointer;\n}\n\n.modal-title[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  line-height: 1.5;\n  font-size: 20px;\n  color: #182e4d;\n  letter-spacing: 2px;\n}\n\n.lbl-value[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: bolder;\n  font-family: Arial, Helvetica, sans-serif;\n  color: #182e4d;\n  margin-bottom: 8px;\n}\n\n.lbl-caption[_ngcontent-%COMP%] {\n  margin-bottom: 1px;\n  font-size: 0.8rem;\n  font-family: Arial, Helvetica, sans-serif;\n  color: #49525e;\n}\n\n.lbl-value[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: bolder;\n  font-family: Arial, Helvetica, sans-serif;\n  color: #182e4d;\n  margin-bottom: 8px;\n}\n\nbutton.close[_ngcontent-%COMP%] {\n  border: 0;\n  outline: none;\n}\n\nbutton.mat-menu-item[_ngcontent-%COMP%] {\n  border: 0;\n  outline: none;\n}\n\n.highlight[_ngcontent-%COMP%] {\n  background: #d2d7dd;\n}\n\n#panel-list[_ngcontent-%COMP%] {\n  max-width: 100%;\n  background-color: white;\n  overflow: auto;\n  height: 65vh;\n  border-radius: 15px;\n  border-width: 1px;\n}\n\n#panel-list[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 14px;\n  height: 18px;\n}\n\n#panel-list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  cursor: pointer;\n  scroll-padding-top: 10px;\n  border: 4px solid rgba(0, 0, 0, 0);\n  background-clip: padding-box;\n  -webkit-border-radius: 7px;\n  background-color: rgba(0, 0, 0, 0.15);\n  -webkit-box-shadow: inset -1px -1px 0px rgba(0, 0, 0, 0.05), inset 1px 1px 0px rgba(0, 0, 0, 0.05);\n}\n\n#panel-list[_ngcontent-%COMP%]::-webkit-scrollbar-button {\n  width: 0;\n  height: 0;\n}\n\n#panel-list[_ngcontent-%COMP%]::-webkit-scrollbar-corner {\n  background-color: transparent;\n}\n\n#panel-list[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 14px;\n  height: 18px;\n}\n\n#panel-list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  cursor: pointer;\n  scroll-padding-top: 10px;\n  border: 4px solid rgba(0, 0, 0, 0);\n  background-clip: padding-box;\n  -webkit-border-radius: 7px;\n  background-color: rgba(0, 0, 0, 0.15);\n  -webkit-box-shadow: inset -1px -1px 0px rgba(0, 0, 0, 0.05), inset 1px 1px 0px rgba(0, 0, 0, 0.05);\n}\n\n#panel-list[_ngcontent-%COMP%]::-webkit-scrollbar-button {\n  width: 0;\n  height: 0;\n}\n\n#panel-list[_ngcontent-%COMP%]::-webkit-scrollbar-corner {\n  background-color: transparent;\n}\n\n.mat-header-cell.clmappt[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  font-size: 0.9rem;\n  font-weight: bold;\n  background-color: lightgray;\n  border-top: 3px inset #182e4d;\n  border-bottom: 2px inset #182e4d;\n  color: #182e4d;\n  padding: 0px 5px 0px 0px;\n}\n\n.mat-header-cell.clmcloseacct[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  font-size: 0.9rem;\n  font-weight: bold;\n  background-color: lightgray;\n  border-top: 3px inset #182e4d;\n  border-bottom: 2px inset #182e4d;\n  color: #182e4d;\n  padding: 0px 0px 0px 0px;\n}\n\n.mat-cell.cell-caption2[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: lighter;\n  color: #182e4d;\n  margin-bottom: 8px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  padding-right: 10px;\n  padding-left: 0px;\n  letter-spacing: 1px;\n}\n\n.mat-cell.cell-caption1[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: bolder;\n  color: #182e4d;\n  margin-bottom: 8px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  padding-right: 10px;\n  padding-left: 0px;\n  letter-spacing: 1px;\n}\n\n.main[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.new-inv[_ngcontent-%COMP%] {\n  margin-left: auto;\n  padding-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaW52ZXN0bWVudC1hY2N0L2ludmVzdG1lbnQtYWNjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFBSjs7QUFHRTtFQUNFLG1CQUFBO0VBRUEsWUFBQTtFQUNBLG9DQUFBO0FBREo7O0FBSUU7RUFDRSw4QkFBQTtFQUNBLG9DQUFBO0VBQ0EsNEJBQUE7QUFESjs7QUFLRTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7QUFGSjs7QUFLRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFFQSwyQkFBQTtBQUhKOztBQU1FO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFFQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUpKOztBQVFFO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0VBRUEsdUJBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFOSjs7QUFTRTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7QUFOSjs7QUFTRTtFQUNFLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLHdCQUFBO0FBTko7O0FBVUU7RUFDRSxrQkFBQTtBQVBKOztBQVdFO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtBQVJKOztBQVdFO0VBQ0UsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsMEJBQUE7QUFSSjs7QUFZRTtFQUNFLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FBVEo7O0FBWUU7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFUSjs7QUFhRTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUdBLG1CQUFBO0FBWko7O0FBZ0JFO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFiSjs7QUFpQkU7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFkSjs7QUEwQkU7RUFDRSxrQkFBQTtBQWJKOztBQWdCRTtFQUNFLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0FBYko7O0FBaUJFO0VBQ0UsU0FBQTtFQUNBLGFBQUE7QUFkSjs7QUFpQkU7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQWRKOztBQWlCRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FBZEo7O0FBaUJFO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUFkSjs7QUFpQkU7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUNBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFkSjs7QUFpQkU7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUNBQUE7RUFDQSxjQUFBO0FBZEo7O0FBaUJFO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlDQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBZEo7O0FBOEJFO0VBQ0UsU0FBQTtFQUNBLGFBQUE7QUEzQko7O0FBOEJFO0VBQ0UsU0FBQTtFQUNBLGFBQUE7QUEzQko7O0FBOEJFO0VBQ0UsbUJBQUE7QUEzQko7O0FBOEJBO0VBQ0ksZUFBQTtFQUNBLHVCQUFBO0VBRUEsY0FBQTtFQUNBLFlBQUE7RUFHRSxtQkFBQTtFQUNBLGlCQUFBO0FBNUJOOztBQStCRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBNUJKOztBQThCRTtFQUVFLGVBQUE7RUFDQSx3QkFBQTtFQUNBLGtDQUFBO0VBQ0EsNEJBQUE7RUFDQSwwQkFBQTtFQUNBLHFDQUFBO0VBQ0Esa0dBQUE7QUE1Qko7O0FBOEJFO0VBQ0UsUUFBQTtFQUNBLFNBQUE7QUEzQko7O0FBOEJFO0VBQ0UsNkJBQUE7QUEzQko7O0FBOEJFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUEzQko7O0FBNkJFO0VBRUUsZUFBQTtFQUNBLHdCQUFBO0VBQ0Esa0NBQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0VBQ0EscUNBQUE7RUFDQSxrR0FBQTtBQTNCSjs7QUE2QkU7RUFDRSxRQUFBO0VBQ0EsU0FBQTtBQTFCSjs7QUE2QkU7RUFDRSw2QkFBQTtBQTFCSjs7QUE0QkU7RUFFQyxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxjQUFBO0VBQ0Esd0JBQUE7QUExQkg7O0FBNEJFO0VBRUMsc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMkJBQUE7RUFDQSw2QkFBQTtFQUNBLGdDQUFBO0VBQ0EsY0FBQTtFQUNBLHdCQUFBO0FBMUJIOztBQTZCRTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUExQko7O0FBNkJFO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQTFCSjs7QUE2QkU7RUFBUSxhQUFBO0FBekJWOztBQTBCRTtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7QUF2Qk4iLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9pbnZlc3RtZW50LWFjY3QvaW52ZXN0bWVudC1hY2N0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5leGFtcGxlLWNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgd2lkdGg6IDU1MHB4O1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gIHRhYmxlIHtcclxuICAgIHRhYmxlLWxheW91dDogZml4ZWQ7XHJcbiAgICAvLyB3aWR0aDogMTAwJTtcclxuICAgIHdpZHRoOiAyNTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjQgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgI3BhbmVsLWZvcm0tdXNlcm1nbXQge1xyXG4gICAgYm9yZGVyLXJhZGl1cyA6IDE1cHggIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjQgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDEwcHg7XHJcbiAgICAvLyBtYXJnaW4tdG9wOjMwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb2wtbGctMTIge1xyXG4gICAgcGFkZGluZy1yaWdodDogMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gICNwYW5lbC10YWJsZS11c2VybWdtdCB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4td2lkdGg6IDYwMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAvLyBoZWlnaHQ6IDQ1MHB4O1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTUwcHgpO1xyXG4gIH1cclxuICBcclxuICAubGJsLXRpdGxle1xyXG4gICAgY29sb3I6ICMxODJlNGQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgLy8gbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICBmb250LXNpemU6MjRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuICBcclxuICBcclxuICAubG9hZGluZy1zaGFkZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm90dG9tOiA1NnB4O1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICAvLyBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gICAgYmFja2dyb3VuZDp0cmFuc3BhcmVudDtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1yYXRlLWxpbWl0LXJlYWNoZWQge1xyXG4gICAgY29sb3I6ICM5ODAwMDA7XHJcbiAgICBtYXgtd2lkdGg6IDM2MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTUwcHgpO1xyXG4gIH1cclxuICBcclxuICAubWF0LWhlYWRlci1jZWxsLmFjdGlvbmlkIHtcclxuICAgIHdpZHRoOiA0NXB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGZvbnQtc2l6ZTogLjhyZW07XHJcbiAgICBjb2xvcjogIzE4MmU0ZDtcclxuICAgIHBhZGRpbmc6MHB4IDBweCAwcHggMHB4O1xyXG4gIH1cclxuICBcclxuIFxyXG4gIHRoLm1hdC1oZWFkZXItY2VsbDpmaXJzdC1vZi10eXBlLCB0ZC5tYXQtY2VsbDpmaXJzdC1vZi10eXBlLCB0ZC5tYXQtZm9vdGVyLWNlbGw6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICAvLyBwYWRkaW5nLXRvcDogOHB4O1xyXG4gIH1cclxuICBcclxuICAubWF0LXRhYmxlLXN0aWNreTpmaXJzdC1jaGlsZCB7XHJcbiAgICBwYWRkaW5nLXRvcDogOHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgLm1hdC1oZWFkZXItY2VsbC51aWQge1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGZvbnQtc2l6ZTogLjhyZW07XHJcbiAgICBjb2xvcjogIzE4MmU0ZDtcclxuICAgIHBhZGRpbmc6MHB4IDI0cHggMHB4IDEwcHg7XHJcbiAgXHJcbiAgfVxyXG4gIFxyXG4gIC5tYXQtaGVhZGVyLWNlbGwubmFtZSB7XHJcbiAgICB3aWR0aDogMTMwcHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgZm9udC1zaXplOiAuOHJlbTtcclxuICAgIGNvbG9yOiAjMTgyZTRkO1xyXG4gICAgcGFkZGluZzowcHggMjRweCAwcHggMHB4O1xyXG4gIH1cclxuICBcclxuICAubWF0LWNlbGwuY2VsbC1jYXB0aW9ue1xyXG4gICAgZm9udC1zaXplOiAuOXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICBjb2xvcjogIzE4MmU0ZDtcclxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgLy8gbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICB9XHJcbiAgXHJcbiAgLm1hdC1jZWxsLmNlbGwtbW9yZXZlcnR7XHJcbiAgICBmb250LXNpemU6IC45cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgIGNvbG9yOiAjMTgyZTRkO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIC8vIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgLy8gd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICAvLyBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gIH1cclxuICBcclxuICAubWF0LWNlbGwuY2VsbC1jYXB0aW9uLXVpZHtcclxuICAgIGZvbnQtc2l6ZTogLjlyZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgY29sb3I6ICMxODJlNGQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgIHBhZGRpbmctbGVmdDoxMHB4O1xyXG4gICAgLy8gbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICB9XHJcbiAgXHJcbiAgLm1hdC1jZWxsLmNlbGwtYWN0aW9ue1xyXG4gICAgZm9udC1zaXplOiAuOXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICBjb2xvcjogIzE4MmU0ZDtcclxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gIH1cclxuICBcclxuICBcclxuICA6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIgeyAvKiBFZGdlICovXHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgfVxyXG4gIFxyXG4gIDotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyAvKiBJbnRlcm5ldCBFeHBsb3JlciAxMC0xMSAqL1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIH1cclxuICBcclxuICA6OnBsYWNlaG9sZGVyIHtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICB9XHJcbiAgXHJcbiAgdWwubGJsLXN0eWxle1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOm5vbmU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDFweDtcclxuICAgIG1hcmdpbjogdW5zZXQ7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC5tdGJ0bntcclxuICAgIGJvcmRlcjogMDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5tdGJ0bjpob3ZlcntcclxuICAgIGNvbG9yOiAjMDA4YmI1O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICBcclxuICBhLnNybGluazpob3ZlciB7XHJcbiAgICBjb2xvcjogIzAwOGJiNTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLm1vZGFsLXRpdGxlIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgY29sb3I6ICMxODJlNGQ7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4IDtcclxuICB9XHJcbiAgXHJcbiAgLmxibC12YWx1ZXtcclxuICAgIGZvbnQtc2l6ZTogLjhyZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogIzE4MmU0ZDtcclxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICB9XHJcbiAgXHJcbiAgLmxibC1jYXB0aW9ue1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXB4O1xyXG4gICAgZm9udC1zaXplOiAuOHJlbTtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6ICM0OTUyNWU7XHJcbiAgfVxyXG4gIFxyXG4gIC5sYmwtdmFsdWV7XHJcbiAgICBmb250LXNpemU6IC44cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6ICMxODJlNGQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgfVxyXG4gIFxyXG4vLyAgIC5zcGFuLmxibC1tZW51LXZhbHVle1xyXG4vLyAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbi8vICAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4vLyAgICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbi8vICAgICBjb2xvcjogIzE4MmU0ZDtcclxuLy8gICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuLy8gICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuLy8gICB9XHJcbiAgXHJcbi8vICAgLnNyc3RhdHVzZWRpdHtcclxuLy8gICAgIG1hcmdpbi10b3A6MTVweDtcclxuLy8gICB9XHJcbiAgXHJcbiAgYnV0dG9uLmNsb3NlIHtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIGJ1dHRvbi5tYXQtbWVudS1pdGVtIHtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5oaWdobGlnaHR7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZDJkN2RkO1xyXG4gIH1cclxuICBcclxuI3BhbmVsLWxpc3Qge1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAvLyBtaW4td2lkdGg6IDYwMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBoZWlnaHQ6IDY1dmg7XHJcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAgIGJvcmRlci13aWR0aDogMXB4O1xyXG4gIH1cclxuICBcclxuICAjcGFuZWwtbGlzdDo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgd2lkdGg6IDE0cHg7XHJcbiAgICBoZWlnaHQ6IDE4cHg7XHJcbiAgfVxyXG4gICNwYW5lbC1saXN0Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICAvLyBoZWlnaHQ6IDZweDtcclxuICAgIGN1cnNvcjpwb2ludGVyO1xyXG4gICAgc2Nyb2xsLXBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgYm9yZGVyOiA0cHggc29saWQgcmdiYSgwLCAwLCAwLCAwKTtcclxuICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDdweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IC0xcHggLTFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjA1KSwgaW5zZXQgMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuICB9XHJcbiAgI3BhbmVsLWxpc3Q6Oi13ZWJraXQtc2Nyb2xsYmFyLWJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIGhlaWdodDogMDtcclxuICAgIC8vIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gICNwYW5lbC1saXN0Ojotd2Via2l0LXNjcm9sbGJhci1jb3JuZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnRcclxuICB9XHJcbiAgXHJcbiAgI3BhbmVsLWxpc3Q6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIHdpZHRoOiAxNHB4O1xyXG4gICAgaGVpZ2h0OiAxOHB4O1xyXG4gIH1cclxuICAjcGFuZWwtbGlzdDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgLy8gaGVpZ2h0OiA2cHg7XHJcbiAgICBjdXJzb3I6cG9pbnRlcjtcclxuICAgIHNjcm9sbC1wYWRkaW5nLXRvcDogMTBweDtcclxuICAgIGJvcmRlcjogNHB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMCk7XHJcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAtMXB4IC0xcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4wNSksIGluc2V0IDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcbiAgfVxyXG4gICNwYW5lbC1saXN0Ojotd2Via2l0LXNjcm9sbGJhci1idXR0b24ge1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgICAvLyBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICAjcGFuZWwtbGlzdDo6LXdlYmtpdC1zY3JvbGxiYXItY29ybmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50XHJcbiAgfVxyXG4gIC5tYXQtaGVhZGVyLWNlbGwuY2xtYXBwdCB7XHJcbiAgICAvLyB3aWR0aDogMTE1cHg7XHJcbiAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgIGZvbnQtc2l6ZTogLjlyZW07XHJcbiAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOmxpZ2h0Z3JheTtcclxuICAgYm9yZGVyLXRvcDogM3B4IGluc2V0ICMxODJlNGQ7XHJcbiAgIGJvcmRlci1ib3R0b206IDJweCBpbnNldCAjMTgyZTRkO1xyXG4gICBjb2xvcjogIzE4MmU0ZDtcclxuICAgcGFkZGluZzowcHggNXB4IDBweCAwcHg7XHJcbiAgfVxyXG4gIC5tYXQtaGVhZGVyLWNlbGwuY2xtY2xvc2VhY2N0e1xyXG4gIC8vICB3aWR0aDogMjAlO1xyXG4gICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICBmb250LXNpemU6IC45cmVtO1xyXG4gICBmb250LXdlaWdodDogYm9sZDtcclxuICAgYmFja2dyb3VuZC1jb2xvcjpsaWdodGdyYXk7XHJcbiAgIGJvcmRlci10b3A6IDNweCBpbnNldCAjMTgyZTRkO1xyXG4gICBib3JkZXItYm90dG9tOiAycHggaW5zZXQgIzE4MmU0ZDtcclxuICAgY29sb3I6ICMxODJlNGQ7XHJcbiAgIHBhZGRpbmc6MHB4IDBweCAwcHggMHB4O1xyXG4gIH1cclxuICBcclxuICAubWF0LWNlbGwuY2VsbC1jYXB0aW9uMntcclxuICAgIGZvbnQtc2l6ZTogLjlyZW07XHJcbiAgICBmb250LXdlaWdodDpsaWdodGVyO1xyXG4gICAgY29sb3I6ICMxODJlNGQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgIHBhZGRpbmctbGVmdDowcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gIH1cclxuICBcclxuICAubWF0LWNlbGwuY2VsbC1jYXB0aW9uMXtcclxuICAgIGZvbnQtc2l6ZTogLjlyZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgY29sb3I6ICMxODJlNGQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgIHBhZGRpbmctbGVmdDowcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gIH1cclxuICBcclxuICAubWFpbiB7IGRpc3BsYXk6IGZsZXg7IH1cclxuICAubmV3LWludiB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InvestmentAcctComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-investment-acct',
                templateUrl: './investment-acct.component.html',
                styleUrls: ['./investment-acct.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }]; }, { titleName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], investmentAcctList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], sidenav: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onNewInvestment: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], onCloseInvestment: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/components/saving-acct/saving-acct.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/saving-acct/saving-acct.component.ts ***!
  \************************************************************************/
/*! exports provided: SavingAcctComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SavingAcctComponent", function() { return SavingAcctComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function SavingAcctComponent_th_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Customer ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SavingAcctComponent_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r10 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r1.selectedAcct == element_r10.custNum ? "cell-caption1" : "cell-caption2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r10.custNum, " ");
} }
function SavingAcctComponent_th_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Customer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SavingAcctComponent_td_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r11 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r3.selectedAcct == element_r11.custNum ? "cell-caption1" : "cell-caption2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r11.custName, " ");
} }
function SavingAcctComponent_th_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Saving Account Number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SavingAcctComponent_td_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r12 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r5.selectedAcct == element_r12.custNum ? "cell-caption1" : "cell-caption2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r12.acctNum, " ");
} }
function SavingAcctComponent_th_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Total Balance");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SavingAcctComponent_td_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r13 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r7.selectedAcct == element_r13.custNum ? "cell-caption1" : "cell-caption2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 2, element_r13.totBalance, "RM "), " ");
} }
function SavingAcctComponent_tr_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 13);
} }
const _c0 = function (a0) { return { "highlight": a0 }; };
function SavingAcctComponent_tr_17_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SavingAcctComponent_tr_17_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const row_r14 = ctx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.highlight(row_r14); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r14 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r9.selectedAcct == row_r14.custNum));
} }
class SavingAcctComponent {
    constructor() {
        this.displayedColumns = ['custnum', 'custname', 'acctnum', 'totbalance'];
        this.selectedAcct = '';
    }
    ngOnInit() {
    }
    highlight(row) {
        this.selectedAcct = row.custNum;
    }
}
SavingAcctComponent.ɵfac = function SavingAcctComponent_Factory(t) { return new (t || SavingAcctComponent)(); };
SavingAcctComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SavingAcctComponent, selectors: [["app-saving-acct"]], inputs: { titleName: "titleName", savingAcctList: "savingAcctList" }, decls: 18, vars: 5, consts: [[1, "lbl-title"], ["id", "panel-form-userxmgmt"], ["mat-table", "", 2, "width", "100%", 3, "dataSource"], ["matColumnDef", "custnum"], ["mat-header-cell", "", "class", "clmappt", 4, "matHeaderCellDef"], ["mat-cell", "", 3, "ngClass", 4, "matCellDef"], ["matColumnDef", "custname"], ["matColumnDef", "acctnum"], ["matColumnDef", "totbalance"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 3, "ngClass", "click", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", "", 1, "clmappt"], ["mat-cell", "", 3, "ngClass"], ["mat-header-row", ""], ["mat-row", "", 3, "ngClass", "click"]], template: function SavingAcctComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](4, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SavingAcctComponent_th_5_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SavingAcctComponent_td_6_Template, 2, 2, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](7, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SavingAcctComponent_th_8_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SavingAcctComponent_td_9_Template, 2, 2, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](10, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SavingAcctComponent_th_11_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, SavingAcctComponent_td_12_Template, 2, 2, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](13, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, SavingAcctComponent_th_14_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, SavingAcctComponent_td_15_Template, 3, 5, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, SavingAcctComponent_tr_16_Template, 1, 0, "tr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, SavingAcctComponent_tr_17_Template, 1, 3, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.titleName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.savingAcctList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns)("matHeaderRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCell"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRow"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CurrencyPipe"]], styles: [".example-container[_ngcontent-%COMP%] {\n  height: 400px;\n  width: 550px;\n  max-width: 100%;\n  overflow: auto;\n}\n\ntable[_ngcontent-%COMP%] {\n  table-layout: fixed;\n  width: 250px;\n  background-color: #f2f2f4 !important;\n}\n\n#panel-form-usermgmt[_ngcontent-%COMP%] {\n  border-radius: 15px !important;\n  background-color: #f2f2f4 !important;\n  padding: 10px 10px 10px 10px;\n}\n\n.col-lg-12[_ngcontent-%COMP%] {\n  padding-right: 0px;\n  padding-left: 0px;\n}\n\n#panel-table-usermgmt[_ngcontent-%COMP%] {\n  max-width: 100%;\n  min-width: 600px;\n  overflow: auto;\n  height: calc(100vh - 150px);\n}\n\n.lbl-title[_ngcontent-%COMP%] {\n  color: #182e4d;\n  padding-left: 10px;\n  margin-top: 10px;\n  letter-spacing: 1px;\n  font-size: 24px;\n  font-weight: bold;\n}\n\n.loading-shade[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 56px;\n  right: 0;\n  background: transparent;\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.example-rate-limit-reached[_ngcontent-%COMP%] {\n  color: #980000;\n  max-width: 360px;\n  text-align: center;\n  height: calc(100vh - 150px);\n}\n\n.mat-header-cell.actionid[_ngcontent-%COMP%] {\n  width: 45px;\n  box-sizing: border-box;\n  font-size: 0.8rem;\n  color: #182e4d;\n  padding: 0px 0px 0px 0px;\n}\n\nth.mat-header-cell[_ngcontent-%COMP%]:first-of-type, td.mat-cell[_ngcontent-%COMP%]:first-of-type, td.mat-footer-cell[_ngcontent-%COMP%]:first-of-type {\n  padding-left: 15px;\n}\n\n.mat-table-sticky[_ngcontent-%COMP%]:first-child {\n  padding-top: 8px;\n  padding-left: 10px;\n}\n\n.mat-header-cell.uid[_ngcontent-%COMP%] {\n  width: 100px;\n  box-sizing: border-box;\n  font-size: 0.8rem;\n  color: #182e4d;\n  padding: 0px 24px 0px 10px;\n}\n\n.mat-header-cell.name[_ngcontent-%COMP%] {\n  width: 130px;\n  box-sizing: border-box;\n  font-size: 0.8rem;\n  color: #182e4d;\n  padding: 0px 24px 0px 0px;\n}\n\n.mat-cell.cell-caption[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: bolder;\n  color: #182e4d;\n  margin-bottom: 8px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  padding-right: 10px;\n}\n\n.mat-cell.cell-morevert[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: bolder;\n  color: #182e4d;\n  margin-bottom: 8px;\n  overflow: hidden;\n  padding-right: 10px;\n}\n\n.mat-cell.cell-caption-uid[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: bolder;\n  color: #182e4d;\n  margin-bottom: 8px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  padding-right: 10px;\n  padding-left: 10px;\n}\n\n.mat-cell.cell-action[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: bolder;\n  color: #182e4d;\n  margin-bottom: 8px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  padding-right: 10px;\n}\n\n[_ngcontent-%COMP%]::placeholder {\n  font-style: italic;\n}\n\nul.lbl-style[_ngcontent-%COMP%] {\n  list-style-type: none;\n  padding-left: 1px;\n  margin: unset;\n}\n\n.mtbtn[_ngcontent-%COMP%] {\n  border: 0;\n  outline: none;\n}\n\n.mtbtn[_ngcontent-%COMP%]:hover {\n  color: #008bb5;\n  cursor: pointer;\n}\n\na.srlink[_ngcontent-%COMP%]:hover {\n  color: #008bb5;\n  cursor: pointer;\n}\n\n.modal-title[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  line-height: 1.5;\n  font-size: 20px;\n  color: #182e4d;\n  letter-spacing: 2px;\n}\n\n.lbl-value[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: bolder;\n  font-family: Arial, Helvetica, sans-serif;\n  color: #182e4d;\n  margin-bottom: 8px;\n}\n\n.lbl-caption[_ngcontent-%COMP%] {\n  margin-bottom: 1px;\n  font-size: 0.8rem;\n  font-family: Arial, Helvetica, sans-serif;\n  color: #49525e;\n}\n\n.lbl-value[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: bolder;\n  font-family: Arial, Helvetica, sans-serif;\n  color: #182e4d;\n  margin-bottom: 8px;\n}\n\nbutton.close[_ngcontent-%COMP%] {\n  border: 0;\n  outline: none;\n}\n\nbutton.mat-menu-item[_ngcontent-%COMP%] {\n  border: 0;\n  outline: none;\n}\n\n.highlight[_ngcontent-%COMP%] {\n  background: #d2d7dd;\n}\n\n#panel-list[_ngcontent-%COMP%] {\n  max-width: 100%;\n  background-color: white;\n  overflow: auto;\n  height: 65vh;\n  border-radius: 15px;\n  border-width: 1px;\n}\n\n#panel-list[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 14px;\n  height: 18px;\n}\n\n#panel-list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  cursor: pointer;\n  scroll-padding-top: 10px;\n  border: 4px solid rgba(0, 0, 0, 0);\n  background-clip: padding-box;\n  -webkit-border-radius: 7px;\n  background-color: rgba(0, 0, 0, 0.15);\n  -webkit-box-shadow: inset -1px -1px 0px rgba(0, 0, 0, 0.05), inset 1px 1px 0px rgba(0, 0, 0, 0.05);\n}\n\n#panel-list[_ngcontent-%COMP%]::-webkit-scrollbar-button {\n  width: 0;\n  height: 0;\n}\n\n#panel-list[_ngcontent-%COMP%]::-webkit-scrollbar-corner {\n  background-color: transparent;\n}\n\n#panel-list[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 14px;\n  height: 18px;\n}\n\n#panel-list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  cursor: pointer;\n  scroll-padding-top: 10px;\n  border: 4px solid rgba(0, 0, 0, 0);\n  background-clip: padding-box;\n  -webkit-border-radius: 7px;\n  background-color: rgba(0, 0, 0, 0.15);\n  -webkit-box-shadow: inset -1px -1px 0px rgba(0, 0, 0, 0.05), inset 1px 1px 0px rgba(0, 0, 0, 0.05);\n}\n\n#panel-list[_ngcontent-%COMP%]::-webkit-scrollbar-button {\n  width: 0;\n  height: 0;\n}\n\n#panel-list[_ngcontent-%COMP%]::-webkit-scrollbar-corner {\n  background-color: transparent;\n}\n\n.mat-header-cell.clmappt[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  font-size: 0.9rem;\n  font-weight: bold;\n  background-color: lightgray;\n  border-top: 3px inset #182e4d;\n  border-bottom: 2px inset #182e4d;\n  color: #182e4d;\n  padding: 0px 5px 0px 0px;\n}\n\n.mat-cell.cell-caption2[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: lighter;\n  color: #182e4d;\n  margin-bottom: 8px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  padding-right: 10px;\n  padding-left: 0px;\n  letter-spacing: 1px;\n}\n\n.mat-cell.cell-caption1[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: bolder;\n  color: #182e4d;\n  margin-bottom: 8px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  padding-right: 10px;\n  padding-left: 0px;\n  letter-spacing: 1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc2F2aW5nLWFjY3Qvc2F2aW5nLWFjY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBQUo7O0FBR0U7RUFDRSxtQkFBQTtFQUVBLFlBQUE7RUFDQSxvQ0FBQTtBQURKOztBQUlFO0VBQ0UsOEJBQUE7RUFDQSxvQ0FBQTtFQUNBLDRCQUFBO0FBREo7O0FBS0U7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0FBRko7O0FBS0U7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBRUEsMkJBQUE7QUFISjs7QUFNRTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBRUEsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFKSjs7QUFRRTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtFQUVBLHVCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBTko7O0FBU0U7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0FBTko7O0FBU0U7RUFDRSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSx3QkFBQTtBQU5KOztBQVVFO0VBQ0Usa0JBQUE7QUFQSjs7QUFXRTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUFSSjs7QUFXRTtFQUNFLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLDBCQUFBO0FBUko7O0FBWUU7RUFDRSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtBQVRKOztBQVlFO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBVEo7O0FBYUU7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFHQSxtQkFBQTtBQVpKOztBQWdCRTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBYko7O0FBaUJFO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBZEo7O0FBMEJFO0VBQ0Usa0JBQUE7QUFiSjs7QUFnQkU7RUFDRSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtBQWJKOztBQWlCRTtFQUNFLFNBQUE7RUFDQSxhQUFBO0FBZEo7O0FBaUJFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUFkSjs7QUFpQkU7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQWRKOztBQWlCRTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBZEo7O0FBaUJFO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlDQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBZEo7O0FBaUJFO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHlDQUFBO0VBQ0EsY0FBQTtBQWRKOztBQWlCRTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5Q0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQWRKOztBQThCRTtFQUNFLFNBQUE7RUFDQSxhQUFBO0FBM0JKOztBQThCRTtFQUNFLFNBQUE7RUFDQSxhQUFBO0FBM0JKOztBQThCRTtFQUNFLG1CQUFBO0FBM0JKOztBQThCQTtFQUNJLGVBQUE7RUFDQSx1QkFBQTtFQUVBLGNBQUE7RUFDQSxZQUFBO0VBR0UsbUJBQUE7RUFDQSxpQkFBQTtBQTVCTjs7QUErQkU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQTVCSjs7QUE4QkU7RUFFRSxlQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsMEJBQUE7RUFDQSxxQ0FBQTtFQUNBLGtHQUFBO0FBNUJKOztBQThCRTtFQUNFLFFBQUE7RUFDQSxTQUFBO0FBM0JKOztBQThCRTtFQUNFLDZCQUFBO0FBM0JKOztBQThCRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBM0JKOztBQTZCRTtFQUVFLGVBQUE7RUFDQSx3QkFBQTtFQUNBLGtDQUFBO0VBQ0EsNEJBQUE7RUFDQSwwQkFBQTtFQUNBLHFDQUFBO0VBQ0Esa0dBQUE7QUEzQko7O0FBNkJFO0VBQ0UsUUFBQTtFQUNBLFNBQUE7QUExQko7O0FBNkJFO0VBQ0UsNkJBQUE7QUExQko7O0FBb0NFO0VBRUMsc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMkJBQUE7RUFDQSw2QkFBQTtFQUNBLGdDQUFBO0VBQ0EsY0FBQTtFQUNBLHdCQUFBO0FBbENIOztBQXFDRTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFsQ0o7O0FBcUNFO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQWxDSiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3NhdmluZy1hY2N0L3NhdmluZy1hY2N0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5leGFtcGxlLWNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgd2lkdGg6IDU1MHB4O1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gIHRhYmxlIHtcclxuICAgIHRhYmxlLWxheW91dDogZml4ZWQ7XHJcbiAgICAvLyB3aWR0aDogMTAwJTtcclxuICAgIHdpZHRoOiAyNTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjQgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgI3BhbmVsLWZvcm0tdXNlcm1nbXQge1xyXG4gICAgYm9yZGVyLXJhZGl1cyA6IDE1cHggIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjQgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDEwcHg7XHJcbiAgICAvLyBtYXJnaW4tdG9wOjMwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb2wtbGctMTIge1xyXG4gICAgcGFkZGluZy1yaWdodDogMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gICNwYW5lbC10YWJsZS11c2VybWdtdCB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4td2lkdGg6IDYwMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAvLyBoZWlnaHQ6IDQ1MHB4O1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTUwcHgpO1xyXG4gIH1cclxuICBcclxuICAubGJsLXRpdGxle1xyXG4gICAgY29sb3I6ICMxODJlNGQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgLy8gbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICBmb250LXNpemU6MjRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuICBcclxuICBcclxuICAubG9hZGluZy1zaGFkZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm90dG9tOiA1NnB4O1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICAvLyBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gICAgYmFja2dyb3VuZDp0cmFuc3BhcmVudDtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1yYXRlLWxpbWl0LXJlYWNoZWQge1xyXG4gICAgY29sb3I6ICM5ODAwMDA7XHJcbiAgICBtYXgtd2lkdGg6IDM2MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTUwcHgpO1xyXG4gIH1cclxuICBcclxuICAubWF0LWhlYWRlci1jZWxsLmFjdGlvbmlkIHtcclxuICAgIHdpZHRoOiA0NXB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGZvbnQtc2l6ZTogLjhyZW07XHJcbiAgICBjb2xvcjogIzE4MmU0ZDtcclxuICAgIHBhZGRpbmc6MHB4IDBweCAwcHggMHB4O1xyXG4gIH1cclxuICBcclxuIFxyXG4gIHRoLm1hdC1oZWFkZXItY2VsbDpmaXJzdC1vZi10eXBlLCB0ZC5tYXQtY2VsbDpmaXJzdC1vZi10eXBlLCB0ZC5tYXQtZm9vdGVyLWNlbGw6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICAvLyBwYWRkaW5nLXRvcDogOHB4O1xyXG4gIH1cclxuICBcclxuICAubWF0LXRhYmxlLXN0aWNreTpmaXJzdC1jaGlsZCB7XHJcbiAgICBwYWRkaW5nLXRvcDogOHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgLm1hdC1oZWFkZXItY2VsbC51aWQge1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGZvbnQtc2l6ZTogLjhyZW07XHJcbiAgICBjb2xvcjogIzE4MmU0ZDtcclxuICAgIHBhZGRpbmc6MHB4IDI0cHggMHB4IDEwcHg7XHJcbiAgXHJcbiAgfVxyXG4gIFxyXG4gIC5tYXQtaGVhZGVyLWNlbGwubmFtZSB7XHJcbiAgICB3aWR0aDogMTMwcHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgZm9udC1zaXplOiAuOHJlbTtcclxuICAgIGNvbG9yOiAjMTgyZTRkO1xyXG4gICAgcGFkZGluZzowcHggMjRweCAwcHggMHB4O1xyXG4gIH1cclxuICBcclxuICAubWF0LWNlbGwuY2VsbC1jYXB0aW9ue1xyXG4gICAgZm9udC1zaXplOiAuOXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICBjb2xvcjogIzE4MmU0ZDtcclxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgLy8gbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICB9XHJcbiAgXHJcbiAgLm1hdC1jZWxsLmNlbGwtbW9yZXZlcnR7XHJcbiAgICBmb250LXNpemU6IC45cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgIGNvbG9yOiAjMTgyZTRkO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIC8vIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgLy8gd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICAvLyBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gIH1cclxuICBcclxuICAubWF0LWNlbGwuY2VsbC1jYXB0aW9uLXVpZHtcclxuICAgIGZvbnQtc2l6ZTogLjlyZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgY29sb3I6ICMxODJlNGQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgIHBhZGRpbmctbGVmdDoxMHB4O1xyXG4gICAgLy8gbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICB9XHJcbiAgXHJcbiAgLm1hdC1jZWxsLmNlbGwtYWN0aW9ue1xyXG4gICAgZm9udC1zaXplOiAuOXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICBjb2xvcjogIzE4MmU0ZDtcclxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gIH1cclxuICBcclxuICBcclxuICA6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIgeyAvKiBFZGdlICovXHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgfVxyXG4gIFxyXG4gIDotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyAvKiBJbnRlcm5ldCBFeHBsb3JlciAxMC0xMSAqL1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIH1cclxuICBcclxuICA6OnBsYWNlaG9sZGVyIHtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICB9XHJcbiAgXHJcbiAgdWwubGJsLXN0eWxle1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOm5vbmU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDFweDtcclxuICAgIG1hcmdpbjogdW5zZXQ7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC5tdGJ0bntcclxuICAgIGJvcmRlcjogMDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5tdGJ0bjpob3ZlcntcclxuICAgIGNvbG9yOiAjMDA4YmI1O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICBcclxuICBhLnNybGluazpob3ZlciB7XHJcbiAgICBjb2xvcjogIzAwOGJiNTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLm1vZGFsLXRpdGxlIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgY29sb3I6ICMxODJlNGQ7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4IDtcclxuICB9XHJcbiAgXHJcbiAgLmxibC12YWx1ZXtcclxuICAgIGZvbnQtc2l6ZTogLjhyZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogIzE4MmU0ZDtcclxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICB9XHJcbiAgXHJcbiAgLmxibC1jYXB0aW9ue1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXB4O1xyXG4gICAgZm9udC1zaXplOiAuOHJlbTtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6ICM0OTUyNWU7XHJcbiAgfVxyXG4gIFxyXG4gIC5sYmwtdmFsdWV7XHJcbiAgICBmb250LXNpemU6IC44cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6ICMxODJlNGQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgfVxyXG4gIFxyXG4vLyAgIC5zcGFuLmxibC1tZW51LXZhbHVle1xyXG4vLyAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbi8vICAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4vLyAgICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbi8vICAgICBjb2xvcjogIzE4MmU0ZDtcclxuLy8gICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuLy8gICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuLy8gICB9XHJcbiAgXHJcbi8vICAgLnNyc3RhdHVzZWRpdHtcclxuLy8gICAgIG1hcmdpbi10b3A6MTVweDtcclxuLy8gICB9XHJcbiAgXHJcbiAgYnV0dG9uLmNsb3NlIHtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIGJ1dHRvbi5tYXQtbWVudS1pdGVtIHtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5oaWdobGlnaHR7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZDJkN2RkO1xyXG4gIH1cclxuICBcclxuI3BhbmVsLWxpc3Qge1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAvLyBtaW4td2lkdGg6IDYwMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBoZWlnaHQ6IDY1dmg7XHJcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAgIGJvcmRlci13aWR0aDogMXB4O1xyXG4gIH1cclxuICBcclxuICAjcGFuZWwtbGlzdDo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgd2lkdGg6IDE0cHg7XHJcbiAgICBoZWlnaHQ6IDE4cHg7XHJcbiAgfVxyXG4gICNwYW5lbC1saXN0Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICAvLyBoZWlnaHQ6IDZweDtcclxuICAgIGN1cnNvcjpwb2ludGVyO1xyXG4gICAgc2Nyb2xsLXBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgYm9yZGVyOiA0cHggc29saWQgcmdiYSgwLCAwLCAwLCAwKTtcclxuICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDdweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IC0xcHggLTFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjA1KSwgaW5zZXQgMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuICB9XHJcbiAgI3BhbmVsLWxpc3Q6Oi13ZWJraXQtc2Nyb2xsYmFyLWJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIGhlaWdodDogMDtcclxuICAgIC8vIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gICNwYW5lbC1saXN0Ojotd2Via2l0LXNjcm9sbGJhci1jb3JuZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnRcclxuICB9XHJcbiAgXHJcbiAgI3BhbmVsLWxpc3Q6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIHdpZHRoOiAxNHB4O1xyXG4gICAgaGVpZ2h0OiAxOHB4O1xyXG4gIH1cclxuICAjcGFuZWwtbGlzdDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgLy8gaGVpZ2h0OiA2cHg7XHJcbiAgICBjdXJzb3I6cG9pbnRlcjtcclxuICAgIHNjcm9sbC1wYWRkaW5nLXRvcDogMTBweDtcclxuICAgIGJvcmRlcjogNHB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMCk7XHJcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAtMXB4IC0xcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4wNSksIGluc2V0IDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcbiAgfVxyXG4gICNwYW5lbC1saXN0Ojotd2Via2l0LXNjcm9sbGJhci1idXR0b24ge1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgICAvLyBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICAjcGFuZWwtbGlzdDo6LXdlYmtpdC1zY3JvbGxiYXItY29ybmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50XHJcbiAgfVxyXG4vLyAgIC5tYXQtaGVhZGVyLWNlbGwuY2xtYXBwdCB7XHJcbi8vICAgICAvLyB3aWR0aDogMTE1cHg7XHJcbi8vICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbi8vICAgIGZvbnQtc2l6ZTogLjlyZW07XHJcbi8vICAgIGJhY2tncm91bmQtY29sb3I6IzE4MmU0ZDtcclxuLy8gICAgY29sb3I6ICNlNGU4ZWM7XHJcbi8vICAgIHBhZGRpbmc6MHB4IDVweCAwcHggMHB4O1xyXG4vLyAgIH1cclxuICAubWF0LWhlYWRlci1jZWxsLmNsbWFwcHQge1xyXG4gICAgLy8gd2lkdGg6IDExNXB4O1xyXG4gICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICBmb250LXNpemU6IC45cmVtO1xyXG4gICBmb250LXdlaWdodDogYm9sZDtcclxuICAgYmFja2dyb3VuZC1jb2xvcjpsaWdodGdyYXk7XHJcbiAgIGJvcmRlci10b3A6IDNweCBpbnNldCAjMTgyZTRkO1xyXG4gICBib3JkZXItYm90dG9tOiAycHggaW5zZXQgIzE4MmU0ZDtcclxuICAgY29sb3I6ICMxODJlNGQ7XHJcbiAgIHBhZGRpbmc6MHB4IDVweCAwcHggMHB4O1xyXG4gIH1cclxuICBcclxuICAubWF0LWNlbGwuY2VsbC1jYXB0aW9uMntcclxuICAgIGZvbnQtc2l6ZTogLjlyZW07XHJcbiAgICBmb250LXdlaWdodDpsaWdodGVyO1xyXG4gICAgY29sb3I6ICMxODJlNGQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgIHBhZGRpbmctbGVmdDowcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gIH1cclxuICBcclxuICAubWF0LWNlbGwuY2VsbC1jYXB0aW9uMXtcclxuICAgIGZvbnQtc2l6ZTogLjlyZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgY29sb3I6ICMxODJlNGQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgIHBhZGRpbmctbGVmdDowcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gIH1cclxuICAiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SavingAcctComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-saving-acct',
                templateUrl: './saving-acct.component.html',
                styleUrls: ['./saving-acct.component.scss']
            }]
    }], function () { return []; }, { titleName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], savingAcctList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/components/sidenav/sidenav.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/sidenav/sidenav.component.ts ***!
  \****************************************************************/
/*! exports provided: SidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavComponent", function() { return SidenavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/overlay.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
// src\app\shared\components\sidenav\sidenav.component.ts











function SidenavComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " radio_button_unchecked ");
} }
function SidenavComponent_ng_container_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "radio_button_checked");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function SidenavComponent_ng_container_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "radio_button_checked");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function SidenavComponent_ng_container_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "radio_button_checked");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
const _c0 = ["*"];
class SidenavComponent {
    constructor(overlayContainer) {
        this.overlayContainer = overlayContainer;
        this.featureSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.themeColor = 'primary';
        this.isDark = false;
    }
    ngOnInit() { }
    toggleTheme() {
        this.isDark = !this.isDark;
        if (this.isDark) {
            this.overlayContainer.getContainerElement().classList.add('dark-theme');
        }
        else {
            this.overlayContainer
                .getContainerElement()
                .classList.remove('dark-theme');
        }
    }
    onSelect(features) {
        this.featureSelected.emit({
            type: features.type,
            title: features.title
        });
    }
}
SidenavComponent.ɵfac = function SidenavComponent_Factory(t) { return new (t || SidenavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["OverlayContainer"])); };
SidenavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidenavComponent, selectors: [["app-sidenav"]], outputs: { featureSelected: "featureSelected" }, ngContentSelectors: _c0, decls: 60, vars: 15, consts: [[3, "color"], [1, "company-name"], [2, "padding-right", "10px"], [1, "example-spacer"], ["mat-icon-button", "", "matTooltip", "Toggle dark theme", 3, "click"], ["mat-button", "", "matTooltip", "Select a theme color", 1, "menu-button", 3, "matMenuTriggerFor"], ["noRadio", ""], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click"], [4, "ngIf", "ngIfElse"], [1, "example-container"], ["mode", "side", "opened", ""], ["sidenav", ""], ["mat-list-item", "", "href", "#", 3, "click"]], template: function SidenavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " museum ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Company Z");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidenavComponent_Template_button_click_8_listener() { return ctx.toggleTheme(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " brightness_6 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, SidenavComponent_ng_template_13_Template, 1, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-menu", null, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidenavComponent_Template_button_click_17_listener() { return ctx.themeColor = "primary"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-icon", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, SidenavComponent_ng_container_19_Template, 2, 0, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Primary ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidenavComponent_Template_button_click_21_listener() { return ctx.themeColor = "warn"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-icon", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, SidenavComponent_ng_container_23_Template, 2, 0, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Warn ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidenavComponent_Template_button_click_25_listener() { return ctx.themeColor = "accent"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-icon", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, SidenavComponent_ng_container_27_Template, 2, 0, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Accent ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-sidenav-container", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-sidenav", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidenavComponent_Template_a_click_33_listener() { return ctx.onSelect({ type: "saving-acct", title: "Saving Account" }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " monetization_on ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Savings Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidenavComponent_Template_a_click_38_listener() { return ctx.onSelect({ type: "goals-acct", title: "Goals Account" }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " golf_course ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Goals Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidenavComponent_Template_a_click_43_listener() { return ctx.onSelect({ type: "investment-acct", title: "Investment Account" }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " beach_access ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Investment Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidenavComponent_Template_a_click_48_listener() { return ctx.onSelect({ type: "check-balance", title: "Check Balance" }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " price_check ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Check Balance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidenavComponent_Template_a_click_53_listener() { return ctx.onSelect({ type: "transfer-money", title: "Transfer Money" }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " send ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Transfer Money");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "mat-sidenav-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](59, 0, ["[]", ""]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("dark-theme", ctx.isDark);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.themeColor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.themeColor, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.themeColor === "primary" ? "primary" : "no-color");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.themeColor === "primary")("ngIfElse", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.themeColor === "warn" ? "warn" : "no-color");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.themeColor === "warn")("ngIfElse", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.themeColor === "accent" ? "accent" : "no-color");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.themeColor === "accent")("ngIfElse", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("color", ctx.themeColor);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbar"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__["MatTooltip"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuItem"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenav"], _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatNavList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatListItem"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavContent"]], styles: [".example-container[_ngcontent-%COMP%] {\n  height: calc(100vh - 64px);\n}\n.example-container[_ngcontent-%COMP%]   .mat-sidenav[_ngcontent-%COMP%] {\n  padding: 8px;\n  min-width: 300px;\n}\n.example-container[_ngcontent-%COMP%]   .mat-sidenav-content[_ngcontent-%COMP%] {\n  height: calc(100vh - 64px);\n}\n.menu-button[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n}\n.example-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n.mat-icon-no-color[_ngcontent-%COMP%] {\n  color: rbga(0, 0, 0, 0.54);\n}\n.company-name[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  font-weight: bolder;\n  font-family: Arial, Helvetica, sans-serif;\n  color: whitesmoke;\n  margin-bottom: 8px;\n  padding-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc2lkZW5hdi9zaWRlbmF2LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsMEJBQUE7QUFERjtBQUVFO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0FBQUo7QUFFRTtFQUNFLDBCQUFBO0FBQUo7QUFHQTtFQUNFLDBCQUFBO0FBQUY7QUFHQTtFQUNFLGNBQUE7QUFBRjtBQUdBO0VBQ0UsMEJBQUE7QUFBRjtBQUdBO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlDQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBQUYiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9zaWRlbmF2L3NpZGVuYXYuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBzcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFxzaWRlbmF2XFxzaWRlbmF2LmNvbXBvbmVudC5zY3NzXG5cbi5leGFtcGxlLWNvbnRhaW5lciB7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDY0cHgpO1xuICAubWF0LXNpZGVuYXYge1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xuICB9XG4gIC5tYXQtc2lkZW5hdi1jb250ZW50IHtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA2NHB4KTtcbiAgfVxufVxuLm1lbnUtYnV0dG9uIHtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbi5leGFtcGxlLXNwYWNlciB7XG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuXG4ubWF0LWljb24tbm8tY29sb3Ige1xuICBjb2xvcjogcmJnYSgwLCAwLCAwLCAwLjU0KTtcbn1cblxuLmNvbXBhbnktbmFtZXtcbiAgZm9udC1zaXplOiAxLjhyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogd2hpdGVzbW9rZTtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidenavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sidenav',
                templateUrl: './sidenav.component.html',
                styleUrls: ['./sidenav.component.scss'],
            }]
    }], function () { return [{ type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["OverlayContainer"] }]; }, { featureSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/services/notification.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/services/notification.service.ts ***!
  \*********************************************************/
/*! exports provided: NotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationService", function() { return NotificationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
// src\app\shared\services\notification.service.ts



class NotificationService {
    constructor(snackBar) {
        this.snackBar = snackBar;
    }
    default(message) {
        this.show(message, {
            duration: 2000,
            panelClass: 'default-notification-overlay',
        });
    }
    info(message) {
        this.show(message, {
            duration: 2000,
            panelClass: 'info-notification-overlay',
        });
    }
    success(message) {
        this.show(message, {
            duration: 2000,
            panelClass: 'success-notification-overlay',
        });
    }
    warn(message) {
        this.show(message, {
            duration: 2500,
            panelClass: 'warning-notification-overlay',
        });
    }
    error(message) {
        this.show(message, {
            duration: 3000,
            panelClass: 'error-notification-overlay',
        });
    }
    show(message, configuration) {
        configuration.horizontalPosition = 'right';
        configuration.verticalPosition = 'top';
        this.snackBar.open(message, null, configuration);
    }
}
NotificationService.ɵfac = function NotificationService_Factory(t) { return new (t || NotificationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"])); };
NotificationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NotificationService, factory: NotificationService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/sidenav/sidenav.component */ "./src/app/shared/components/sidenav/sidenav.component.ts");
/* harmony import */ var _components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/dialog/dialog.component */ "./src/app/shared/components/dialog/dialog.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
// src/app/shared/shared.module.ts










class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_2__["MaterialModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_6__["SidenavComponent"], _components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_7__["DialogComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_2__["MaterialModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]], exports: [_components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_6__["SidenavComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_6__["SidenavComponent"], _components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_7__["DialogComponent"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_2__["MaterialModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]],
                exports: [_components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_6__["SidenavComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\angular\account_management\acct-mgmt\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map