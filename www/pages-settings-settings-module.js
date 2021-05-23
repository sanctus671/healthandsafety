(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-settings-settings-module"],{

/***/ "HATU":
/*!***********************************************************!*\
  !*** ./src/app/pages/settings/settings-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: SettingsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageRoutingModule", function() { return SettingsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings.page */ "nD9t");




var routes = [
    {
        path: '',
        component: _settings_page__WEBPACK_IMPORTED_MODULE_3__["SettingsPage"]
    }
];
var SettingsPageRoutingModule = /** @class */ (function () {
    function SettingsPageRoutingModule() {
    }
    SettingsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], SettingsPageRoutingModule);
    return SettingsPageRoutingModule;
}());



/***/ }),

/***/ "JLDx":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/settings/settings.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-title>Settings</ion-title>\n        \n    \n    <ion-buttons slot=\"start\">\n        <ion-button>\n            <ion-back-button defaultHref=\"/home\"></ion-back-button>\n        </ion-button>            \n    </ion-buttons>          \n        \n        \n    </ion-toolbar>\n    \n    \n    \n</ion-header>\n\n<ion-content>\n    \n    \n<ion-list class=\"settings-list\">\n    \n    <ion-list-header>Support</ion-list-header>  \n    \n    <ion-item>\n        <ion-icon color=\"primary\" name=\"heart\" slot=\"start\" ></ion-icon>\n        Rate The App\n        <ion-button slot=\"end\" fill=\"outline\" (click)=\"openRate()\">Rate</ion-button>\n  </ion-item>    \n    \n    \n <ion-item>\n    <ion-icon color=\"primary\" name=\"logo-facebook\" slot=\"start\"></ion-icon>\n    Follow Us\n    <ion-button slot=\"end\" fill=\"outline\" (click)=\"openFollow()\">Follow</ion-button>\n  </ion-item>  \n\n\n    \n <ion-item>\n    <ion-icon color=\"primary\" name=\"mail\" slot=\"start\"></ion-icon>\n    Contact Support\n    <ion-button slot=\"end\" fill=\"outline\" (click)=\"openEmail()\">Email</ion-button>\n  </ion-item>     \n    \n <ion-item>\n    <ion-icon color=\"primary\" name=\"information-circle\" slot=\"start\"></ion-icon>\n    Disclaimer\n    <ion-button slot=\"end\" fill=\"outline\" (click)=\"openDisclaimer()\">View</ion-button>\n  </ion-item> \n\n    \n    <ion-list-header>Account</ion-list-header>   \n    \n    <ion-item [routerLink]=\"['/purchases']\" routerDirection=\"forward\" detail>\n            <ion-icon color=\"primary\" name=\"wallet\" slot=\"start\"></ion-icon>\n            <ion-label>My Purchases</ion-label>\n    </ion-item> \n    \n    <ion-item (click)=\"openSwitchAccount()\" detail>\n            <ion-icon color=\"primary\" name=\"swap-horizontal\" slot=\"start\"></ion-icon>\n            <ion-label>Switch Account</ion-label>\n    </ion-item> \n    \n    <ion-item (click)=\"openChangeEmail()\" detail>\n            <ion-icon color=\"primary\" name=\"at-circle\" slot=\"start\"></ion-icon>\n            <ion-label>Change Email</ion-label>\n    </ion-item>  \n    \n    <ion-item (click)=\"openChangePassword()\" detail>\n            <ion-icon color=\"primary\" name=\"lock-open\" slot=\"start\"></ion-icon>\n            <ion-label>Change Password</ion-label>\n    </ion-item>  \n\n\n     \n</ion-list>        \n    \n    \n    \n\n</ion-content>\n");

/***/ }),

/***/ "j/5A":
/*!***************************************************!*\
  !*** ./src/app/pages/settings/settings.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".settings-list ion-list-header {\n  margin-bottom: 10px;\n  margin-top: 20px;\n  padding-top: 10px;\n}\n\n.settings-list ion-list-header:first-child {\n  margin-top: 0px;\n  padding-top: 0px;\n}\n\n.settings-list ion-list-header ion-label {\n  margin-bottom: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzZXR0aW5ncy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7QUFDSiIsImZpbGUiOiJzZXR0aW5ncy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2V0dGluZ3MtbGlzdCBpb24tbGlzdC1oZWFkZXJ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIHBhZGRpbmctdG9wOjEwcHg7XHJcbn1cclxuXHJcbi5zZXR0aW5ncy1saXN0IGlvbi1saXN0LWhlYWRlcjpmaXJzdC1jaGlsZHtcclxuICAgIG1hcmdpbi10b3A6MHB4O1xyXG4gICAgcGFkZGluZy10b3A6MHB4O1xyXG59XHJcblxyXG4uc2V0dGluZ3MtbGlzdCBpb24tbGlzdC1oZWFkZXIgaW9uLWxhYmVse1xyXG4gICAgbWFyZ2luLWJvdHRvbTowcHg7XHJcbn1cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ "nD9t":
/*!*************************************************!*\
  !*** ./src/app/pages/settings/settings.page.ts ***!
  \*************************************************/
/*! exports provided: SettingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPage", function() { return SettingsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_settings_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./settings.page.html */ "JLDx");
/* harmony import */ var _settings_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings.page.scss */ "j/5A");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_account_account_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/account/account.service */ "IRyT");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "m/P+");







var SettingsPage = /** @class */ (function () {
    function SettingsPage(plt, accountService, alertCtrl, iab) {
        var _this = this;
        this.plt = plt;
        this.accountService = accountService;
        this.alertCtrl = alertCtrl;
        this.iab = iab;
        this.user = {};
        this.accountService.getUserData().subscribe(function (value) {
            _this.user = value;
        });
    }
    SettingsPage.prototype.ngOnInit = function () {
    };
    SettingsPage.prototype.openRate = function () {
        if (this.plt.is("ios")) {
            this.iab.create("https://apps.apple.com/us/app/", '_system');
        }
        else {
            this.iab.create("https://play.google.com/store/apps/details?id=com.healthandsafetystories.app", '_system');
        }
    };
    SettingsPage.prototype.openFollow = function () {
        var link = 'https://www.facebook.com/Whanauora-599348520177935/';
        this.iab.create(link, '_system');
    };
    SettingsPage.prototype.openEmail = function () {
        this.iab.create("mailto:tekotukubusiness@gmail.com", '_system');
    };
    SettingsPage.prototype.openDisclaimer = function () {
        var alert = this.alertCtrl.create({
            header: 'Disclaimer',
            message: 'The publisher would like to inform the reader that the safety information contained in the Te Kōtuku Apps is for education purposes only and intended for children who live in New Zealand. Please consult a health professional to see if the safety information in these apps are correct for you and your child.',
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
    SettingsPage.prototype.openChangePassword = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            header: 'Change Password',
            inputs: [
                {
                    name: 'password',
                    placeholder: 'Password',
                    type: 'password'
                },
                {
                    name: 'confirmPassword',
                    placeholder: 'Confirm Password',
                    type: 'password'
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function (data) {
                    }
                },
                {
                    text: 'Change',
                    handler: function (data) {
                        if (data.password && data.confirmPassword && data.password === data.confirmPassword) {
                            _this.accountService.changePassword(_this.user.email, data.password, data.confirmPassword).then(function () {
                                var alert = _this.alertCtrl.create({
                                    header: 'Success',
                                    message: 'Your password has been updated',
                                    buttons: [
                                        {
                                            text: 'Dismiss',
                                            role: 'cancel',
                                            handler: function (data) {
                                            }
                                        }
                                    ]
                                }).then(function (el) {
                                    el.present();
                                });
                            }).catch(function () {
                                var alert = _this.alertCtrl.create({
                                    header: 'Error',
                                    message: 'There was an error while changing your password.',
                                    buttons: [
                                        {
                                            text: 'Cancel',
                                            role: 'cancel',
                                            handler: function (data) {
                                            }
                                        },
                                        {
                                            text: 'Try Again',
                                            handler: function (data) {
                                                setTimeout(function () { _this.openChangePassword(); }, 200);
                                            }
                                        }
                                    ]
                                }).then(function (el) {
                                    el.present();
                                });
                            });
                        }
                        else {
                            var alert_1 = _this.alertCtrl.create({
                                header: 'Error',
                                message: 'Passwords do not match',
                                buttons: [
                                    {
                                        text: 'Cancel',
                                        role: 'cancel',
                                        handler: function (data) {
                                        }
                                    },
                                    {
                                        text: 'Try Again',
                                        handler: function (data) {
                                            setTimeout(function () { _this.openChangePassword(); }, 200);
                                        }
                                    }
                                ]
                            }).then(function (el) {
                                el.present();
                            });
                        }
                    }
                }
            ]
        }).then(function (el) {
            el.present();
        });
    };
    SettingsPage.prototype.openChangeEmail = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            header: 'Change Email',
            message: 'Your current email is: ' + this.user.email,
            inputs: [
                {
                    name: 'email',
                    placeholder: 'New Email',
                    type: 'email'
                },
                {
                    name: 'confirmEmail',
                    placeholder: 'Confirm Email',
                    type: 'email'
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function (data) {
                    }
                },
                {
                    text: 'Change',
                    handler: function (data) {
                        if (data.email && data.confirmEmail && data.email === data.confirmEmail) {
                            _this.accountService.changeEmail(data.email).then(function () {
                                var alert = _this.alertCtrl.create({
                                    header: 'Success',
                                    message: 'Your email has been updated',
                                    buttons: [
                                        {
                                            text: 'Dismiss',
                                            role: 'cancel',
                                            handler: function (data) {
                                            }
                                        }
                                    ]
                                }).then(function (el) {
                                    el.present();
                                });
                                _this.accountService.retreiveUserData().then(function (data) {
                                    _this.user = data;
                                });
                            }).catch(function () {
                                var alert = _this.alertCtrl.create({
                                    header: 'Error',
                                    message: 'There was an error while changing your email.',
                                    buttons: [
                                        {
                                            text: 'Cancel',
                                            role: 'cancel',
                                            handler: function (data) {
                                            }
                                        },
                                        {
                                            text: 'Try Again',
                                            handler: function (data) {
                                                setTimeout(function () { _this.openChangeEmail(); }, 200);
                                            }
                                        }
                                    ]
                                }).then(function (el) {
                                    el.present();
                                });
                            });
                        }
                        else {
                            var alert_2 = _this.alertCtrl.create({
                                header: 'Error',
                                message: 'Emails do not match',
                                buttons: [
                                    {
                                        text: 'Cancel',
                                        role: 'cancel',
                                        handler: function (data) {
                                        }
                                    },
                                    {
                                        text: 'Try Again',
                                        handler: function (data) {
                                            setTimeout(function () { _this.openChangeEmail(); }, 200);
                                        }
                                    }
                                ]
                            }).then(function (el) {
                                el.present();
                            });
                        }
                    }
                }
            ]
        }).then(function (el) {
            el.present();
        });
    };
    SettingsPage.prototype.openSwitchAccount = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            header: 'Swtich Accounts',
            inputs: [
                {
                    name: 'email',
                    placeholder: 'Email',
                    type: 'email'
                },
                {
                    name: 'password',
                    placeholder: 'Password',
                    type: 'password'
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function (data) {
                    }
                },
                {
                    text: 'Login',
                    handler: function (data) {
                        if (data.email && data.password) {
                            _this.accountService.login({ email: _this.user.email, password: data.password }).then(function () {
                                var alert = _this.alertCtrl.create({
                                    header: 'Success',
                                    message: 'You have switched accounts.',
                                    buttons: [
                                        {
                                            text: 'Dismiss',
                                            role: 'cancel',
                                            handler: function (data) {
                                            }
                                        }
                                    ]
                                }).then(function (el) {
                                    el.present();
                                });
                            }).catch(function () {
                                var alert = _this.alertCtrl.create({
                                    header: 'Error',
                                    message: 'There was an error while logging in.',
                                    buttons: [
                                        {
                                            text: 'Cancel',
                                            role: 'cancel',
                                            handler: function (data) {
                                            }
                                        },
                                        {
                                            text: 'Try Again',
                                            handler: function (data) {
                                                setTimeout(function () { _this.openSwitchAccount(); }, 200);
                                            }
                                        }
                                    ]
                                }).then(function (el) {
                                    el.present();
                                });
                            });
                        }
                        else {
                            var alert_3 = _this.alertCtrl.create({
                                header: 'Error',
                                message: 'Emails do not match',
                                buttons: [
                                    {
                                        text: 'Cancel',
                                        role: 'cancel',
                                        handler: function (data) {
                                        }
                                    },
                                    {
                                        text: 'Try Again',
                                        handler: function (data) {
                                            setTimeout(function () { _this.openSwitchAccount(); }, 200);
                                        }
                                    }
                                ]
                            }).then(function (el) {
                                el.present();
                            });
                        }
                    }
                }
            ]
        }).then(function (el) {
            el.present();
        });
    };
    SettingsPage.prototype.logout = function () {
        this.accountService.logout();
    };
    SettingsPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
        { type: _services_account_account_service__WEBPACK_IMPORTED_MODULE_5__["AccountService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
        { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__["InAppBrowser"] }
    ]; };
    SettingsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-settings',
            template: _raw_loader_settings_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_settings_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        })
    ], SettingsPage);
    return SettingsPage;
}());



/***/ }),

/***/ "yPrK":
/*!***************************************************!*\
  !*** ./src/app/pages/settings/settings.module.ts ***!
  \***************************************************/
/*! exports provided: SettingsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _settings_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./settings-routing.module */ "HATU");
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settings.page */ "nD9t");







var SettingsPageModule = /** @class */ (function () {
    function SettingsPageModule() {
    }
    SettingsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _settings_routing_module__WEBPACK_IMPORTED_MODULE_5__["SettingsPageRoutingModule"]
            ],
            declarations: [_settings_page__WEBPACK_IMPORTED_MODULE_6__["SettingsPage"]]
        })
    ], SettingsPageModule);
    return SettingsPageModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-settings-settings-module.js.map