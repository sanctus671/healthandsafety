(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-purchases-purchases-module"],{

/***/ "AUGG":
/*!*****************************************************!*\
  !*** ./src/app/pages/purchases/purchases.module.ts ***!
  \*****************************************************/
/*! exports provided: PurchasesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchasesPageModule", function() { return PurchasesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _purchases_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./purchases-routing.module */ "Xs19");
/* harmony import */ var _purchases_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./purchases.page */ "yNjP");







var PurchasesPageModule = /** @class */ (function () {
    function PurchasesPageModule() {
    }
    PurchasesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _purchases_routing_module__WEBPACK_IMPORTED_MODULE_5__["PurchasesPageRoutingModule"]
            ],
            declarations: [_purchases_page__WEBPACK_IMPORTED_MODULE_6__["PurchasesPage"]]
        })
    ], PurchasesPageModule);
    return PurchasesPageModule;
}());



/***/ }),

/***/ "U69w":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/purchases/purchases.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-title>Purchases</ion-title>\n        \n    \n    <ion-buttons slot=\"start\">\n        <ion-button>\n            <ion-back-button defaultHref=\"/home\"></ion-back-button>\n        </ion-button>            \n    </ion-buttons>          \n        \n        \n    </ion-toolbar>\n    \n    \n    \n</ion-header>\n\n<ion-content class=\"purchases\">\n    \n    \n    <div class=\"purchases__loading\" *ngIf=\"loading\">\n        <ion-spinner color='primary'></ion-spinner>\n    </div> \n\n    \n    <ion-list class=\"purchases__list\">\n        \n        <ion-item *ngFor=\"let purchase of purchases\">\n            <ion-label>\n                <h2>Purchased {{purchase.book ? purchase.book.title : \"book\"}}</h2>\n                <p>{{purchase.created_at}}</p>\n            </ion-label>\n            \n            \n        </ion-item>\n        \n\n    </ion-list>\n\n</ion-content>\n");

/***/ }),

/***/ "Xs19":
/*!*************************************************************!*\
  !*** ./src/app/pages/purchases/purchases-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: PurchasesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchasesPageRoutingModule", function() { return PurchasesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _purchases_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./purchases.page */ "yNjP");




var routes = [
    {
        path: '',
        component: _purchases_page__WEBPACK_IMPORTED_MODULE_3__["PurchasesPage"]
    }
];
var PurchasesPageRoutingModule = /** @class */ (function () {
    function PurchasesPageRoutingModule() {
    }
    PurchasesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], PurchasesPageRoutingModule);
    return PurchasesPageRoutingModule;
}());



/***/ }),

/***/ "o216":
/*!*****************************************************!*\
  !*** ./src/app/pages/purchases/purchases.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".purchases .purchases__loading {\n  text-align: center;\n  margin-top: 60px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwdXJjaGFzZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQURKIiwiZmlsZSI6InB1cmNoYXNlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHVyY2hhc2Vze1xyXG4gICAgXHJcbi5wdXJjaGFzZXNfX2xvYWRpbmd7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiA2MHB4OyAgICAgICAgXHJcbn0gICAgXHJcbiAgICBcclxuICAgIFxyXG59Il19 */");

/***/ }),

/***/ "yNjP":
/*!***************************************************!*\
  !*** ./src/app/pages/purchases/purchases.page.ts ***!
  \***************************************************/
/*! exports provided: PurchasesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchasesPage", function() { return PurchasesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_purchases_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./purchases.page.html */ "U69w");
/* harmony import */ var _purchases_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./purchases.page.scss */ "o216");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_account_account_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/account/account.service */ "IRyT");





var PurchasesPage = /** @class */ (function () {
    function PurchasesPage(accountService) {
        var _this = this;
        this.accountService = accountService;
        this.loading = true;
        this.accountService.getPurchases().then(function (data) {
            _this.loading = false;
            _this.purchases = data;
        }).catch(function () {
            _this.loading = false;
        });
    }
    PurchasesPage.prototype.ngOnInit = function () {
    };
    PurchasesPage.ctorParameters = function () { return [
        { type: _services_account_account_service__WEBPACK_IMPORTED_MODULE_4__["AccountService"] }
    ]; };
    PurchasesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-purchases',
            template: _raw_loader_purchases_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_purchases_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        })
    ], PurchasesPage);
    return PurchasesPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-purchases-purchases-module.js.map