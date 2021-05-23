(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-book-book-module"],{

/***/ "6KHS":
/*!*******************************************!*\
  !*** ./src/app/pages/book/book.module.ts ***!
  \*******************************************/
/*! exports provided: BookPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookPageModule", function() { return BookPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _book_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./book-routing.module */ "vdTv");
/* harmony import */ var _book_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./book.page */ "i6/7");







var BookPageModule = /** @class */ (function () {
    function BookPageModule() {
    }
    BookPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _book_routing_module__WEBPACK_IMPORTED_MODULE_5__["BookPageRoutingModule"]
            ],
            declarations: [_book_page__WEBPACK_IMPORTED_MODULE_6__["BookPage"]]
        })
    ], BookPageModule);
    return BookPageModule;
}());



/***/ }),

/***/ "Mz7z":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/book/book.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [ngClass]=\"{'transparent-header': book.started}\">\n    <ion-toolbar color=\"primary\">\n        <ion-title *ngIf=\"!book.started\">{{book.title}}</ion-title>\n        \n    \n    <ion-buttons slot=\"start\">\n        <ion-button [color]=\"book.started ? 'primary' : 'light'\">\n            <ion-back-button defaultHref=\"/home\"></ion-back-button>\n        </ion-button>            \n    </ion-buttons>          \n        \n        \n    </ion-toolbar>\n    \n    \n    \n</ion-header>\n\n<ion-content class=\"book\">\n    \n    <div class=\"book__loading\" *ngIf=\"loading\">\n        <ion-spinner color='primary'></ion-spinner>\n    </div> \n\n    <div class=\"book__cover\" *ngIf=\"!book.started\">\n        <div class=\"book__cover__image\">\n            <img [src]=\"book.cover_image\" />\n        </div>\n\n        <div class=\"book__cover__blurb\">\n            {{book.blurb}}\n        </div>\n    </div>\n    \n    <div  *ngIf=\"book.started\">\n        <div *ngFor=\"let page of book.pages;let i = index;\">\n            <div class=\"book__page\" *ngIf=\"currentPage === i;\">\n\n                <div class=\"book__page__image\">\n                    <img [src]=\"page.image\" />\n                    \n                    \n                    <div class=\"book__page__image__tip\" [ngStyle]=\"getTipPosition(page.tip_position)\" *ngIf=\"page.tip\" (click)=\"openTip(page.tip)\">\n                        Tap here!\n                    </div>\n                    \n                    \n                </div>        \n\n                <div class=\"book__page__text\">\n                    <p class=\"book__page__maori\">{{page.maori_text}}</p>\n                    <p class=\"book__page__english\">{{page.english_text}}</p>\n                    \n                   \n                    \n                    \n                    \n                </div>      \n\n                <div class=\"book__page__audio\">\n                    <ion-icon color=\"primary\" name=\"play\" *ngIf=\"!audioPlaying\" (click)=\"playAudio()\"></ion-icon>\n                    <ion-icon color=\"primary\" name=\"pause\" *ngIf=\"audioPlaying\" (click)=\"pauseAudio()\"></ion-icon>\n                </div>  \n\n                <div class=\"book__page__navigation\">\n                    <ion-button color='primary' *ngIf=\"currentPage > 0\" (click)=\"previousPage()\" [disabled]=\"audioPlaying\">\n                        <ion-icon name=\"arrow-back\"></ion-icon>\n                        &nbsp;&nbsp;Previous Page\n                    </ion-button>              \n                    <ion-button color='primary' *ngIf=\"currentPage < (book.pages.length - 1)\" (click)=\"nextPage()\" [disabled]=\"audioPlaying\">\n                        Next Page&nbsp;&nbsp;\n                        <ion-icon name=\"arrow-forward\"></ion-icon>\n                    </ion-button>   \n                    \n                    <ion-button color='primary' *ngIf=\"currentPage >= (book.pages.length - 1)\" (click)=\"closeBook()\" [disabled]=\"audioPlaying\">\n                        Close Book\n                    </ion-button>                     \n                    \n                </div>\n\n            </div>\n        </div>\n    </div>\n    \n    <div *ngIf=\"!loading && book.pages.length > 0\">\n            <audio *ngFor=\"let page of book.pages;let i = index\" id=\"pageaudio{{i}}\">\n              <source [src]=\"page.audio\" type=\"audio/mpeg\">\n            </audio>    \n    </div>\n\n</ion-content>\n\n\n\n<ion-footer class=\"book-footer\" *ngIf=\"!loading\">\n\n    <ion-button color='primary' expand=\"full\" class=\"book-footer__button\" *ngIf=\"!book.started\" (click)=\"startReading()\">\n        Start Reading&nbsp;&nbsp;\n        <ion-icon name=\"arrow-forward\"></ion-icon>\n    </ion-button>\n   \n    \n</ion-footer>");

/***/ }),

/***/ "i6/7":
/*!*****************************************!*\
  !*** ./src/app/pages/book/book.page.ts ***!
  \*****************************************/
/*! exports provided: BookPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookPage", function() { return BookPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_book_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./book.page.html */ "Mz7z");
/* harmony import */ var _book_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./book.page.scss */ "vqDS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_book_book_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/book/book.service */ "PfyA");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");








var BookPage = /** @class */ (function () {
    function BookPage(bookService, route, alertCtrl, location, platform) {
        this.bookService = bookService;
        this.route = route;
        this.alertCtrl = alertCtrl;
        this.location = location;
        this.platform = platform;
        this.loading = true;
        var bookId = this.route.snapshot.params['id'];
        this.book = { id: bookId, pages: [] };
        this.getBook();
    }
    BookPage.prototype.ngOnInit = function () {
    };
    BookPage.prototype.getBook = function () {
        var _this = this;
        this.bookService.getBook(this.book.id).then(function (data) {
            console.log(data);
            _this.book = data;
            _this.loading = false;
        }).catch(function () {
            _this.loading = false;
        });
    };
    BookPage.prototype.startReading = function () {
        this.currentPage = 0;
        if (!this.platform.is("ios")) {
            //autoplay disabled for ios
            this.playAudio();
        }
        this.book.started = true;
    };
    BookPage.prototype.nextPage = function () {
        this.currentPage += 1;
        if (!this.platform.is("ios")) {
            this.playAudio();
        }
    };
    BookPage.prototype.previousPage = function () {
        this.currentPage -= 1;
    };
    BookPage.prototype.playAudio = function () {
        var _this = this;
        var element = document.getElementById("pageaudio" + this.currentPage);
        element.play();
        this.audioPlaying = true;
        element.addEventListener('ended', function () {
            _this.audioPlaying = false;
        });
    };
    BookPage.prototype.pauseAudio = function () {
        var element = document.getElementById("pageaudio" + this.currentPage);
        element.pause();
        this.audioPlaying = false;
    };
    BookPage.prototype.getTipPosition = function (positionText) {
        var positionItems = positionText.split(",");
        return { top: positionItems[0] + "%", left: positionItems[1] + "%" };
    };
    BookPage.prototype.openTip = function (tip) {
        var alert = this.alertCtrl.create({
            header: 'Tip',
            message: tip,
            buttons: [
                {
                    text: 'Close',
                    role: 'cancel',
                    handler: function (data) {
                    }
                }
            ]
        }).then(function (el) {
            el.present();
        });
    };
    BookPage.prototype.closeBook = function () {
        this.location.back();
    };
    BookPage.ctorParameters = function () { return [
        { type: _services_book_book_service__WEBPACK_IMPORTED_MODULE_6__["BookService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"] }
    ]; };
    BookPage.propDecorators = {
        audio: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['audioPlayer',] }]
    };
    BookPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-book',
            template: _raw_loader_book_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_book_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        })
    ], BookPage);
    return BookPage;
}());



/***/ }),

/***/ "vdTv":
/*!***************************************************!*\
  !*** ./src/app/pages/book/book-routing.module.ts ***!
  \***************************************************/
/*! exports provided: BookPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookPageRoutingModule", function() { return BookPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _book_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./book.page */ "i6/7");




var routes = [
    {
        path: '',
        component: _book_page__WEBPACK_IMPORTED_MODULE_3__["BookPage"]
    }
];
var BookPageRoutingModule = /** @class */ (function () {
    function BookPageRoutingModule() {
    }
    BookPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], BookPageRoutingModule);
    return BookPageRoutingModule;
}());



/***/ }),

/***/ "vqDS":
/*!*******************************************!*\
  !*** ./src/app/pages/book/book.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".transparent-header {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n}\n.transparent-header ion-toolbar {\n  --ion-color-base: rgba(0, 0, 0, 0) !important;\n}\n.transparent-header.header-ios ion-toolbar:last-child {\n  --border-width: 0 0 0px;\n}\n.transparent-header:after {\n  background: none;\n}\n.book .book__loading {\n  text-align: center;\n  margin-top: 60px;\n}\n.book .book__cover {\n  padding: 0px 20px;\n}\n.book .book__cover .book__cover__image {\n  margin-top: 20px;\n}\n.book .book__cover .book__cover__blurb {\n  margin-top: 10px;\n  margin-bottom: 40px;\n  text-align: center;\n}\n.book .book__page__text {\n  padding: 0px 20px;\n  padding-top: 10px;\n  position: relative;\n  text-align: center;\n}\n.book .book__page__image {\n  width: 100%;\n  position: relative;\n}\n.book .book__page__image img {\n  width: 100%;\n}\n.book .book__page__image__tip {\n  position: absolute;\n  background-color: #329cce;\n  color: white;\n  font-size: 12px;\n  line-height: 60px;\n  width: 60px;\n  height: 60px;\n  text-align: center;\n  border-radius: 30px;\n  opacity: 0.9;\n}\n.book .book__page__audio {\n  margin-top: 20px;\n  text-align: center;\n}\n.book .book__page__audio ion-icon {\n  font-size: 30px;\n}\n.book .book__page__navigation {\n  text-align: center;\n  margin-top: 30px;\n  margin-bottom: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxib29rLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FBQ0o7QUFBSTtFQUNJLDZDQUFBO0FBRVI7QUFHSTtFQUNJLHVCQUFBO0FBRFI7QUFJSTtFQUNJLGdCQUFBO0FBRlI7QUFTQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7QUFOSjtBQVVJO0VBQ1EsaUJBQUE7QUFSWjtBQVNRO0VBQ0ksZ0JBQUE7QUFQWjtBQVVRO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBUlo7QUFjSTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBWlI7QUFrQkk7RUFFSSxXQUFBO0VBQ0Esa0JBQUE7QUFqQlI7QUFtQlE7RUFDSSxXQUFBO0FBakJaO0FBcUJJO0VBQ0ksa0JBQUE7RUFDSix5QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBbkJKO0FBdUJJO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtBQXJCUjtBQXVCUTtFQUNJLGVBQUE7QUFyQlo7QUE2Qkk7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUEzQlIiLCJmaWxlIjoiYm9vay5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudHJhbnNwYXJlbnQtaGVhZGVye1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICB0b3A6MHB4O1xyXG4gICAgbGVmdDowcHg7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgaW9uLXRvb2xiYXJ7XHJcbiAgICAgICAgLS1pb24tY29sb3ItYmFzZTogcmdiYSgwLCAwLCAwLCAwKSAhaW1wb3J0YW50O1xyXG4gICAgXHJcblxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAmLmhlYWRlci1pb3MgaW9uLXRvb2xiYXI6bGFzdC1jaGlsZHtcclxuICAgICAgICAtLWJvcmRlci13aWR0aDogMCAwIDBweDtcclxuICAgIH0gICAgXHJcbiAgICBcclxuICAgICY6YWZ0ZXJ7XHJcbiAgICAgICAgYmFja2dyb3VuZDpub25lO1xyXG4gICAgfSAgICBcclxufVxyXG5cclxuXHJcbi5ib29re1xyXG5cclxuLmJvb2tfX2xvYWRpbmd7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiA2MHB4OyAgICAgICAgXHJcbn1cclxuXHJcblxyXG4gICAgLmJvb2tfX2NvdmVye1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwcHggMjBweDsgICBcclxuICAgICAgICAuYm9va19fY292ZXJfX2ltYWdle1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4OyAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgLmJvb2tfX2NvdmVyX19ibHVyYntcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDoxMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOjQwcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuICAgIC5ib29rX19wYWdlX190ZXh0e1xyXG4gICAgICAgIHBhZGRpbmc6IDBweCAyMHB4O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOjEwcHg7XHJcbiAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYm9va19fcGFnZV9faW1hZ2V7XHJcbiAgICAgICAgXHJcbiAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgICAgICBcclxuICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgLmJvb2tfX3BhZ2VfX2ltYWdlX190aXB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMyOWNjZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA2MHB4O1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4OyBcclxuICAgIG9wYWNpdHk6MC45O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuICAgIC5ib29rX19wYWdlX19hdWRpb3tcclxuICAgICAgICBtYXJnaW4tdG9wOjIwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaW9uLWljb257XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTozMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuXHJcbiAgICAgICAgXHJcbiAgICB9ICAgIFxyXG4gICAgXHJcbiAgICBcclxuICAgIC5ib29rX19wYWdlX19uYXZpZ2F0aW9ue1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206MzBweDtcclxuICAgIH1cclxuICAgIFxyXG59Il19 */");

/***/ })

}]);
//# sourceMappingURL=pages-book-book-module.js.map