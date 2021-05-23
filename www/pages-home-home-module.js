(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"],{

/***/ "/rnz":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".home .home__list {\n  margin-top: 10px;\n}\n.home .home__list .home__list__item ion-avatar {\n  width: 100px;\n  height: auto;\n  border-radius: 0px;\n  --border-radius: 0px;\n}\n.home .home__loading {\n  text-align: center;\n  margin-top: 60px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUVJLGdCQUFBO0FBRlI7QUFNWTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQUpoQjtBQWFBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQVhKIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhvbWV7XG4gICAgXG4gICAgLmhvbWVfX2xpc3R7XG4gICAgICAgIFxuICAgICAgICBtYXJnaW4tdG9wOjEwcHg7XG4gICAgICAgIFxuICAgICAgICAuaG9tZV9fbGlzdF9faXRlbXtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaW9uLWF2YXRhcntcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgICAgICAgICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuICAgIFxuXG4uaG9tZV9fbG9hZGluZ3tcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogNjBweDsgICAgICAgIFxufSAgICBcbiAgICBcbn0iXX0= */");

/***/ }),

/***/ "99Un":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "hsj+");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-routing.module */ "9oos");







var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"]
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "9oos":
/*!***************************************************!*\
  !*** ./src/app/pages/home/home-routing.module.ts ***!
  \***************************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "hsj+");




var routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"],
    }
];
var HomePageRoutingModule = /** @class */ (function () {
    function HomePageRoutingModule() {
    }
    HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], HomePageRoutingModule);
    return HomePageRoutingModule;
}());



/***/ }),

/***/ "eUf4":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n    <ion-toolbar color=\"primary\">\n        <ion-title>\n            Stories\n        </ion-title>\n        \n    \n    <ion-buttons slot=\"end\">\n        <ion-button [color]=\"platform.is('ios') ? 'dark' : 'light'\" [routerLink]=\"['/settings']\" routerDirection=\"forward\">\n            <ion-icon slot=\"icon-only\" name=\"settings-sharp\"></ion-icon>\n        </ion-button>\n    </ion-buttons>          \n        \n        \n    </ion-toolbar>\n  \n    \n    \n</ion-header>\n\n<ion-content [fullscreen]=\"true\" class=\"home\">\n    <ion-header collapse=\"condense\">\n        <ion-toolbar>\n            <ion-title size=\"large\">Stories</ion-title>\n             \n            \n            \n        </ion-toolbar>\n        \n        \n        \n        \n    </ion-header>\n    \n    <div class=\"home__loading\" *ngIf=\"loading\">\n        <ion-spinner color='primary'></ion-spinner>\n    </div> \n    \n\n    <ion-list class=\"home__list\">\n        <ion-item class=\"home__list__item\" *ngFor=\"let book of books.data\" [routerLink]=\"['/book/' + book.id]\" routerDirection=\"forward\" detail=\"true\">\n            <ion-avatar slot=\"start\">\n                <img [src]=\"book.cover_image\">\n            </ion-avatar>\n            <ion-label>\n                <h2>{{book.title}}</h2>\n                <p>{{book.short_blurb}}</p>\n            </ion-label>\n        </ion-item>  \n\n    </ion-list>\n        \n\n</ion-content>\n");

/***/ }),

/***/ "hsj+":
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home.page.html */ "eUf4");
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.page.scss */ "/rnz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_book_book_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/book/book.service */ "PfyA");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");






var HomePage = /** @class */ (function () {
    function HomePage(bookService, platform) {
        this.bookService = bookService;
        this.platform = platform;
        this.loading = true;
        this.books = [];
        this.getBooks();
    }
    HomePage.prototype.getBooks = function () {
        var _this = this;
        this.bookService.getBooks().then(function (data) {
            console.log(data);
            _this.books = data;
            _this.loading = false;
        }).catch(function () {
            _this.loading = false;
        });
    };
    HomePage.ctorParameters = function () { return [
        { type: _services_book_book_service__WEBPACK_IMPORTED_MODULE_4__["BookService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] }
    ]; };
    HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-home',
            template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        })
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-home-home-module.js.map