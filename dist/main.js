(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/main/main.component.css":
/*!*****************************************!*\
  !*** ./src/app/main/main.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".some{\n    max-width: 1600px;\n    margin-left: auto;\n    margin-right: auto;\n}\n.p{\n    position: relative;\n    top: 30px;\n}\ncanvas{\n    background: rgb(63, 57, 77);\n}\n.corie{\n    position: absolute;\n    color: white;\n    text-align: center;\n    width: 100%;\n    letter-spacing: 5px;\n    top: 34%;\n    font-size: 120%;  \n}\n.corie hr{\n    width: 25%;  \n    margin-left: 37%;\n}\n.corie p {\n     margin-top: 10px;\n}\n.corie :not(hr) {\n    text-shadow: 2px 2px 8px #170e22;\n}\n#nav{\n    top: 0;\n    position: fixed;\n    /* display: none; */\n    width: 100%;\n    text-align: right; \n    z-index: 900;\n    background: rgb(113, 109, 139);\n    padding: 14px 0px; \n}\n#nav li{\n    display: inline;\n}\n#nav li a{\n    text-align: center;\n    padding: 14px 16px;\n    text-decoration: none;\n    color: white;\n}\n#nav li a:hover{\n    background: #ffffff6b;\n    color: rgb(8, 61, 56);\n}\n#me{\n    margin-top: -9px;\n    padding: 40px;\n    background-image: linear-gradient(\n        to right bottom, \n        rgba(125, 84, 158, 0.397),\n        rgba(102, 121, 185, 0.425)),\n        url(\"/assets/images/full-bloom.png\");\n        \n}\n#skill{\n    padding: 55px 0px 91px 0px;\n    /* height: 1500px; */\n    border-top: 10px 10px solid #372350;\n    background-image: linear-gradient(\n        to bottom, \n        #372350be,\n        rgba(57, 67, 102, 0.534)),\n        url(\"/assets/images/seigaiha.png\");   \n}\n#skill img{\n    height: 40px;\n    padding: 10px;\n}\n#skill h1{\n    text-align: center;\n    color: white;\n    text-shadow: 2px 1px 8px rgb(12, 9, 9);\n    margin-bottom: 40px;\n}\n.logo1, .logo2{\n    text-align: center;\n}\n#order{\n    display: flex;\n    justify-content: space-evenly;\n}\n.set{\n    width: 200px;\n    display: block;\n    /* vertical-align: top; */\n    color: white;\n    text-align: center;\n}\n.set p {\n    font-size: 18px;\n    text-shadow: 0 1.5rem 4rem rgba(0,0,0,0.4);\n    width: 100%;\n}\nfieldset{\n   \n    border-radius: 8px;\n    border: 3px solid white;\n    padding: 10px;\n    box-shadow: 0 1.5rem 4rem rgba(0,0,0,0.4);\n    background-image: linear-gradient(\n        to right bottom, \n        rgba(39, 10, 66, 0.507),\n        rgba(24, 38, 87, 0.651)),\n        url(\"/assets/images/full-bloom.png\");\n}\nlegend{\n    text-align: center;\n    color: white;\n    font-size: 25px;\n    padding: 0px 5px; \n    text-shadow: 2px 1px 8px rgb(12, 9, 9);\n}\n#projects{\n    padding: 30px 40px;\n    /* height: 1800px; */\n\n    background-image: linear-gradient(\n        to left bottom, \n        rgba(102, 121, 185, 0.425),\n        rgba(125, 84, 158, 0.397)),\n        url(\"/assets/images/full-bloom.png\");\n    \n}\n.project{\n    background: white;\n    margin: 30px 0;\n    padding: 20px;\n    box-shadow: 0 1.5rem 4rem rgba(0,0,0,0.4);\n    -webkit-clip-path: polygon(10% 0, 100% 0%, 90% 100%, 0 100%);\n            clip-path: polygon(10% 0, 100% 0%, 90% 100%, 0 100%);\n}\n.projectLarge, .projectSmall{\n    background: white;\n    margin: 20px 0px;\n    padding: 20px;\n    box-shadow: 0 1.5rem 4rem rgba(0,0,0,0.4);\n    display: none;\n    -webkit-clip-path: polygon(0 0, 90% 0, 100% 100%, 10% 100%);\n            clip-path: polygon(0 0, 90% 0, 100% 100%, 10% 100%);\n}\n.pText{\n    width: 50%;\n    display: inline-block;\n    vertical-align: top;\n    text-align: right;\n    \n}\n.pimg{\n    width: 50%;\n    display: inline-block;\n    vertical-align: top;\n    text-align: center;\n}\n.projectLarge .pimg{\n    text-align: center;\n}\n.projectLarge .pText{\n    text-align: left;\n}\n.pimg img{\n    width: 300px;\n    padding: 10px;\n    \n}\n#contact{\n    padding: 20px;\n    background-image: linear-gradient(\n        to bottom, \n        rgba(57, 67, 102, 0.534),\n        rgba(57, 67, 102, 0.534)),\n        url(\"/assets/images/seigaiha.png\");\n}\n#contact h1{\n    text-align: center;\n    color: white;\n    text-shadow: 2px 1px 8px rgb(12, 9, 9);\n    margin-bottom: 20px;\n}\n.emailtyped{\n    display: inline-block;\n    vertical-align: top;\n    margin-top: 13px;\n    margin-left: 8px;\n}\na.linkedin img, a.github img, a.email img{\n    width:50px;\n    margin: 0px 10px 40px 10px;\n}\n.copyright{\n    float: right;\n    margin-right: 10px;\n}\n/* smallscreen */\n@media only screen and (max-width: 900px){\n    .corie hr{\n        width: 39%;  \n        margin-left: 30%;\n    }\n    .corie{\n        top: 12%;\n    }\n    #nav{\n        text-align: center;\n    }\n    .pic{\n        text-align: center;\n        margin-top: 10px; \n        \n    }\n    .pic img{\n        /* rgba(97, 143, 170, 0.808) */\n        width: 200px;\n        padding: 13px;\n        border-radius: 400px; \n        border: 10px solid rgba(97, 143, 170, 0.582);\n    }\n\n    #me h1{\n        text-align: center;\n        margin-top: 20px;\n        margin-bottom: 10px;\n        color: #372350;\n        \n    }\n    .info h1{\n        text-align: center;\n        margin-top: 20px;\n        margin-bottom: 20px; \n        color: #372350;\n        \n    }\n    .info h3 {\n        margin-top: 10px;\n        text-align: justify;\n        color: #372350;\n    }\n\n    .info p{\n        text-align: justify;\n        color: #372350;\n        margin: 10px 15px;\n    }\n    .img1, .img2, .img3{\n        display: none;\n    }\n    .large{\n        display: none;\n    }\n    #projects{\n        height: 100px;\n        width: 100%;\n    }\n    #skill{\n        display: block;\n    }\n    .set{\n        display: flex;\n        justify-content: center;\n        width: 100%;\n    }\n    fieldset{\n        width: 70%;\n        margin: 10px 0px;\n        padding: 20px 0px;\n    }\n    .set p{\n        font-size: 20px;\n        letter-spacing: 2px;\n        line-height: 35px;\n    }\n    legend{\n        text-shadow: 2px 1px 8px rgb(12, 9, 9);\n        font-size: 30px;\n    }\n    #projects{\n        width: unset;\n        height: unset;\n        padding: 15px;\n    }\n    .pText, .pimg{\n        display: block;\n        width: 100%;\n    }\n    .pimg img{\n        width: 200px;\n    }\n    .projectSmall, .project{\n        display: inherit;\n        -webkit-clip-path: none;\n                clip-path: none;\n        box-shadow: none;\n        margin: 15px 0px;\n        background: rgba(255, 255, 255, 0.753);     \n        text-align: center; \n    }\n    #contact{\n        text-align: center;\n    }\n    .emailtyped{\n       display: unset;\n    }\n    a.linkedin img, a.github img, a.email img{\n        width:50px;\n        margin: 0px 10px 20px 10px;\n    }\n    .copyright{\n        float: none;\n        margin: none;\n    }\n}\n/* middle */\n@media only screen and (max-width: 1000px){\n    #order{\n        display: block;\n    }\n    .set{\n        display: flex;\n        justify-content: center;\n        width: 100%;\n    }\n    fieldset{\n        width: 70%;\n        margin: 10px 0px;\n        padding: 20px 0px;\n    }\n    .set p{\n        font-size: 25px;\n        letter-spacing: 2px;\n        line-height: 35px;\n    }\n    legend{\n        text-shadow: 2px 1px 8px rgb(12, 9, 9);\n        font-size: 35px;\n    }\n    .pic2 .img1, .pic2 .img2, .pic2 .img3{\n        top: 15%;\n    }\n    #contact{\n        text-align: center;\n    }\n    .emailtyped{\n       display: block;\n       margin-top: 0px;\n    }\n    a.linkedin img, a.github img, a.email img{\n        width:50px;\n        margin: 0px 10px 20px 10px;\n    }\n    .copyright{\n        float: none;\n        margin: none;\n    }\n}\n/* large screen */\n@media only screen and (min-width: 900px){\n    .pic, .show{\n        display: none;\n    }\n    #me{\n        display: flex;\n        flex-direction: row;\n        padding-top: 80px;\n        padding-bottom: 80px; \n    }\n    .pic2{\n        width: 60%;\n        position: relative;\n        /* margin-top: 2% */\n        /* border: 2px solid black; */\n    }\n    .info, .pic2{\n        display: inline-block;\n        vertical-align: top;\n    }\n    .info{\n        width: 40%;\n        padding: 0px;\n    }\n    \n    .info h1{\n        text-align: center;\n        margin: 20px 0px 20px 0px;\n    }\n    .large{\n        margin: 0px 0px 20px 0px;\n        font-size: 40px;\n        border-bottom: 2px solid  #372350;\n    }\n    .info p{\n        text-align: justify;\n        margin-bottom: 15px;\n    }\n    .img1, .img2, .img3{\n        margin-top: 50px;\n        position: absolute;\n        width:225px;\n        border-radius: 300px;\n        padding: 13px;\n        border-radius: 400px; \n        border: 10px solid rgba(97, 143, 170, 0.582);\n        transition: width 1s, margin-top 1s, border 1s;;\n    }\n    .img1{\n        top: 2%;\n        left: 6%;\n    }\n    .img2{\n        top: 2%;\n        left: 62%;\n    }\n    .img3{\n        top: 2%;\n        left: 34%;  \n    }\n    .img1:hover, .img2:hover, .img3:hover{\n        box-shadow: 0 1.5rem 4rem rgba(0,0,0,0.4);\n        border: 10px solid rgba(255, 255, 255);\n        z-index: 10;\n        width: 250px;\n        margin-top: 10px;\n        background: rgba(255, 255, 255, 0.479);\n        transition: width 1s, margin-top 1s, border 1s;\n    }\n    .projectLarge{\n        display: inherit;    \n    }\n}\n\n"

/***/ }),

/***/ "./src/app/main/main.component.html":
/*!******************************************!*\
  !*** ./src/app/main/main.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div id=\"nav\">\n        <ul>\n          <li><a (click)=\"scrollToElement('me')\" >About Me</a></li>\n          <li><a (click)=\"scrollToElement('skill')\">Skills</a></li>\n          <li><a (click)=\"scrollToElement('projects')\">Projects</a></li>\n          <li><a (click)=\"scrollToElement('contact')\">Contact</a></li>\n        </ul>\n</div>\n<div class=\"p\">\n    <div class=\"corie\">\n        <h1>Corie McLaughlin</h1>\n        <hr>\n        <p>Full Stack Software Developer</p>\n    </div>\n    <canvas></canvas>\n</div>\n\n<!-- <div id=\"about\"></div> -->\n<div id=\"me\">\n    <div class=\"some\">\n        <h1 class=\"show\">A little about me...</h1>\n        <!-- hidden above 800px -->\n        <div class=\"pic\">\n            <img src=\"assets/images/5.6.gif\" alt=\"Corie McLaughlin\">\n        </div>\n        <div class=\"info\">  \n            <h1 class=\"large\">A little about me...</h1>  \n            <p>I am an outgoing, upbeat, and passionate Full Stack Developer in the Seattle area. I've graduated from a full-time intensive Full-Stack coding bootcamp, and have found that I thrive on the challenges and complex problem solving that came with such a vibrant learning enviornment. Suprisingly, Java has become one of my absolute favorite languages due to it's mathmatical and minimalistic nature. I'm excited to find a position where I can continue growing my own skillset and work on a team alongside talented tech professionals.</p>\n            <p>When my eyes aren't scanning stackoverflow or the terminal, my hands are full with two amazing little monsters. They are what inspires me most and keeps me ambitious so I can be an example of perserverance and stregth for them. I am also a competitive powerlifter currently ranked fourth in the state, and a photography junkie with an eye for dramatic lighting.</p>\n\n        </div>\n        <div class=\"pic2\">\n            <img class=\"img1\" src=\"assets/images/5.6.gif\" alt=\"Corie McLaughlin\">\n            <img class=\"img2\" src=\"assets/images/suvi.gif\" alt=\"Corie McLaughlin\">\n            <img class=\"img3\" src=\"assets/images/will.gif\" alt=\"Corie McLaughlin\">\n        </div>\n    </div>\n</div>  \n<div id=\"skill\">\n    <div class=\"some\">\n        <h1>- SKILLS -</h1>\n        <p></p>\n        <div id=\"order\">\n            <div *ngFor=\"let idx of skillsList\" class=\"set\">\n                <fieldset *ngFor=\"let key of Object.keys(idx)\">\n                    <legend>{{key}}</legend>\n                        <p *ngFor=\"let item of idx[key]\">{{item}}</p>\n                </fieldset>\n            </div>\n        </div>\n    </div>\n</div>\n<div id=\"projects\">\n    <div class=\"some\">\n        <div class=\"project\">\n            <div class=\"pText\">\n                <h1>Title of project 1</h1>\n                <p>This is all about project one</p>\n                <a href=\"\">Click here to have a look</a>\n            </div>\n            <div class=\"pimg\">\n                <img src=\"assets/images/pic.png\" alt=\"\">\n            </div>\n        </div>\n        <div class=\"projectSmall\">\n            <div class=\"pText\">\n                <h1>Title of project 2</h1>\n                <p>This is all about project two</p>\n                <a href=\"\">Click here to have a look</a>\n            </div>\n            <div class=\"pimg\">\n                <img src=\"assets/images/pic.png\" alt=\"\">\n            </div>\n        </div>\n        <div class=\"projectLarge\">\n                <div class=\"pimg\">\n                    <img src=\"assets/images/pic.png\" alt=\"\">\n                </div>\n                <div class=\"pText\">\n                    <h1>Title of project 2</h1>\n                    <p>This is all about project two</p>\n                    <a href=\"\">Click here to have a look</a>\n                </div>\n            </div>\n        <div class=\"project\">\n            <div class=\"pText\">\n                <h1>Title of project 3</h1>\n                <p>This is all about project three</p>\n                <a href=\"\">Click here to have a look</a>\n            </div>\n            <div class=\"pimg\">\n                <img src=\"assets/images/pic.png\" alt=\"\">\n            </div>\n        </div>\n    </div>\n</div>\n<div id=\"contact\">\n    <h1>- Contact -</h1>\n    <div class=\"icons\">\n        <a class=\"linkedin\" target=\"_blank\" href=\"https://www.linkedin.com/in/corie-mclaughlin-5015a4156/\"><img src=\"/assets/icons/linkedin3.png\" alt=\"\"></a>\n        <a class=\"github\" href=\"https://github.com/cmac88\"><img src=\"/assets/icons/github.png\" alt=\"\"></a>\n        <a class=\"email\" href=\"mailto:cmclaughlin88@gmail.com\"><img src=\"/assets/icons/email.png\" alt=\"\"></a>\n        <p class=\"emailtyped\">cmclaughlin88@gmail.com</p>\n        <p class=\"copyright\" >© Copyright 2018. All Rights Reserved.</p>\n    </div>\n\n</div>"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainComponent = /** @class */ (function () {
    function MainComponent() {
        this.skillsList = [];
    }
    MainComponent.prototype.ngOnInit = function () {
        this.Object = Object;
        this.skillsList = [
            { "Languages": [
                    "Java", "Python", "JavaScript"
                ] },
            { "Frameworks": [
                    "Spring", "Django", "Flask", "Angular", "Express", "Node.js"
                ] },
            { "Databases": [
                    "MySQL", "SQLite", "NoSQL : MongoDB, Mongoose.js"
                ] },
            { "Front-End": [
                    "HTML", "CSS", "SASS", "JQuery"
                ] },
            { "Methodologies": [
                    "Object-oriented programming",
                    "MVC",
                    "RESTful Architecture"
                ] }
        ];
        var canvas = document.querySelector("canvas");
        var c = canvas.getContext("2d");
        var h = window.innerHeight;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight / 3;
        var mouse = {
            "x": undefined,
            "y": undefined
        };
        var maxRadius = 30;
        canvas.addEventListener("mousemove", function (event) {
            mouse.x = event.x;
            mouse.y = event.y;
        });
        window.addEventListener("resize", function () {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight / 3;
            init();
        });
        var Circle = /** @class */ (function () {
            function Circle(x, y, dx, dy, radius) {
                this.x = x;
                this.y = y;
                this.dx = dx;
                this.dy = dy;
                this.radius = radius;
                this.minRadius = radius;
                this.color = this.getColor();
            }
            Circle.prototype.getColor = function () {
                // var arr = ["#8DDDF7", "#B1A7F2", "#B1A7F2", "#E9A1F7", "#AC77E4"];
                var arr = ["#69abd1", "#55C2F5", "#2591DB", "#B1A7F2", "#C1E3F5"];
                var num = Math.floor(Math.random() * (arr.length));
                return arr[num];
            };
            Circle.prototype.draw = function () {
                c.beginPath();
                c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
                c.strokeStyle = this.color;
                c.stroke();
                c.fillStyle = this.color;
                c.fill();
            };
            Circle.prototype.update = function () {
                mouse.x = canvas.width / 2;
                mouse.y = canvas.height / 2;
                if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
                    this.dx = -this.dx;
                }
                if (this.y + this.radius > innerHeight / 3 || this.y - this.radius < 0) {
                    this.dy = -this.dy;
                }
                this.x += this.dx;
                this.y += this.dy;
                // this.x > canvas.width / 2 - 200 && this.x < canvas.width / 2 + 200 
                // mouse.x - this.x < 50 && mouse.x - this.x > -50
                // interactivity 
                if (this.x > canvas.width / 2 - 200 && this.x < canvas.width / 2 + 200 && mouse.y - this.y < 40 && mouse.y - this.y > -40) {
                    if (this.radius < maxRadius) {
                        this.radius += 1;
                    }
                }
                else if (this.radius > this.minRadius) {
                    this.radius -= 1;
                }
                this.draw();
            };
            return Circle;
        }());
        var circleArray = [];
        function init() {
            circleArray = [];
            var num = 0;
            if (innerWidth < 500) {
                num = 500;
            }
            else {
                num = 900;
            }
            console.log(num);
            for (var index = 0; index < num; index++) {
                var radius = Math.random() * 3 + 1;
                var x = Math.random() * (innerWidth - radius * 2) + radius;
                var y = Math.random() * (innerHeight / 3 - radius * 2) + radius;
                var dx = (Math.random() - 0.5);
                var dy = (Math.random() - 0.5);
                circleArray.push(new Circle(x, y, dx, dy, radius));
            }
        }
        function animate() {
            //requestAnimationFrame(animate);
            c.clearRect(0, 0, innerWidth, innerHeight);
            for (var i = 0; i < circleArray.length; i++) {
                circleArray[i].update();
            }
        }
        setInterval(function () { return animate(); }, 60);
        init();
    };
    MainComponent.prototype.scrollToElement = function (id) {
        document.getElementById(id).scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    };
    MainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/main/main.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
}());



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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/boonchic88/Desktop/cmac88.github.io/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map