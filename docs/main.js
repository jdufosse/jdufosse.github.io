(self["webpackChunkcurriculum_vitae"] = self["webpackChunkcurriculum_vitae"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 1258);


class AppComponent {
    constructor() {
        this.title = 'Curriculum-vitae';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, consts: [[1, "app"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 2334);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! angular-responsive-carousel */ 1237);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _pages_main_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/main/main.component */ 440);
/* harmony import */ var _pages_job_job_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/job/job.component */ 2843);
/* harmony import */ var _pages_four_oh_four_four_oh_four_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/four-oh-four/four-oh-four.component */ 872);
/* harmony import */ var _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/layout/layout.component */ 9520);
/* harmony import */ var _components_thematic_thematic_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/thematic/thematic.component */ 3816);
/* harmony import */ var _components_experience_experience_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/experience/experience.component */ 6228);
/* harmony import */ var _components_hobby_hobby_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/hobby/hobby.component */ 9570);
/* harmony import */ var _components_skill_skill_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/skill/skill.component */ 1269);
/* harmony import */ var _components_formation_formation_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/formation/formation.component */ 5445);
/* harmony import */ var _components_formation_formations_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/formation/formations.component */ 572);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/footer/footer.component */ 4662);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/header/header.component */ 3646);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/data.service */ 2468);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 2316);





// Components














// Services



const routes = [
    { path: 'experience/:id', component: _pages_job_job_component__WEBPACK_IMPORTED_MODULE_3__.JobComponent },
    { path: '', component: _pages_main_main_component__WEBPACK_IMPORTED_MODULE_2__.MainComponent },
    { path: 'not-found', component: _pages_four_oh_four_four_oh_four_component__WEBPACK_IMPORTED_MODULE_4__.FourOhFourComponent },
    { path: '**', redirectTo: 'not-found' },
];
const routerOptions = {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    scrollOffset: [0, 32],
};
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({ providers: [_services_data_service__WEBPACK_IMPORTED_MODULE_14__.DataService], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__.BrowserModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterModule.forRoot(routes, routerOptions),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_18__.HttpClientModule,
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_19__.FontAwesomeModule,
            angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_20__.IvyCarouselModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _pages_main_main_component__WEBPACK_IMPORTED_MODULE_2__.MainComponent,
        _pages_job_job_component__WEBPACK_IMPORTED_MODULE_3__.JobComponent,
        _pages_four_oh_four_four_oh_four_component__WEBPACK_IMPORTED_MODULE_4__.FourOhFourComponent,
        _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_5__.LayoutComponent,
        _components_thematic_thematic_component__WEBPACK_IMPORTED_MODULE_6__.ThematicComponent,
        _components_experience_experience_component__WEBPACK_IMPORTED_MODULE_7__.ExperienceComponent,
        _components_hobby_hobby_component__WEBPACK_IMPORTED_MODULE_8__.HobbyComponent,
        _components_skill_skill_component__WEBPACK_IMPORTED_MODULE_9__.SkillComponent,
        _components_formation_formation_component__WEBPACK_IMPORTED_MODULE_10__.FormationComponent,
        _components_formation_formations_component__WEBPACK_IMPORTED_MODULE_11__.FormationsComponent,
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__.FooterComponent,
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_13__.HeaderComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__.BrowserModule, _angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_18__.HttpClientModule,
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_19__.FontAwesomeModule,
        angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_20__.IvyCarouselModule] }); })();


/***/ }),

/***/ 6228:
/*!***************************************************************!*\
  !*** ./src/app/components/experience/experience.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExperienceComponent": () => (/* binding */ ExperienceComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4364);


function ExperienceComponent_p_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" From ", ctx_r0.model.from, " to ", ctx_r0.model.to, " ");
} }
function ExperienceComponent_p_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Since ", ctx_r1.model.from, " ");
} }
class ExperienceComponent {
    constructor() {
        this._model = null;
        this._index = 0;
    }
    ngOnInit() {
    }
    get model() { return this._model; }
    set model(model) {
        this._model = model;
    }
    get index() { return this._index; }
    set index(index) {
        this._index = index;
    }
}
ExperienceComponent.ɵfac = function ExperienceComponent_Factory(t) { return new (t || ExperienceComponent)(); };
ExperienceComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExperienceComponent, selectors: [["app-experience"]], inputs: { model: "model", index: "index" }, decls: 21, vars: 2, consts: [[1, "title", "is-3"], ["class", "title is-5", 4, "ngIf"], [1, "media"], [1, "media-left"], [1, "image", "is-64x64"], ["src", "https://bulma.io/images/placeholders/128x128.png", "alt", "Image"], [1, "media-content"], [1, "content"], [1, "title", "is-5"]], template: function ExperienceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Test");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ExperienceComponent_p_4_Template, 2, 2, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ExperienceComponent_p_5_Template, 2, 1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "article", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "figure", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "John Smith");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "@johnsmith");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "31m");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.model.from && ctx.model.to);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.model.from && !ctx.model.to);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJleHBlcmllbmNlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 4662:
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 12, vars: 0, consts: [[1, "footer"], [1, "content", "has-text-centered"], ["href", "https://angular.io/"], ["href", "https://bulma.io/"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " This page is made with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Angular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " and styled by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Bulma");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 5445:
/*!*************************************************************!*\
  !*** ./src/app/components/formation/formation.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormationComponent": () => (/* binding */ FormationComponent)
/* harmony export */ });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 2457);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 2334);




function FormationComponent_header_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.model.title);
} }
function FormationComponent_div_1_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.model.description);
} }
function FormationComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "fa-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FormationComponent_div_1_p_6_Template, 2, 1, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r1.faFlag);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.model.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.model.description);
} }
class FormationComponent {
    constructor() {
        this.faFlag = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faFlag;
        this._model = { isHeader: false, title: '' };
    }
    ngOnInit() { }
    get model() {
        return this._model;
    }
    set model(model) {
        this._model = model;
    }
}
FormationComponent.ɵfac = function FormationComponent_Factory(t) { return new (t || FormationComponent)(); };
FormationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FormationComponent, selectors: [["app-formation"]], inputs: { model: "model" }, decls: 2, vars: 2, consts: [["class", "timeline-header", 4, "ngIf"], ["class", "timeline-item", 4, "ngIf"], [1, "timeline-header"], [1, "tag", "is-primary"], [1, "timeline-item"], [1, "timeline-marker", "is-icon"], [3, "icon"], [1, "timeline-content"], [1, "heading"], [4, "ngIf"]], template: function FormationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FormationComponent_header_0_Template, 3, 1, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FormationComponent_div_1_Template, 7, 3, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.model.isHeader);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.model.isHeader);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FaIconComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3JtYXRpb24uY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 572:
/*!**************************************************************!*\
  !*** ./src/app/components/formation/formations.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormationsComponent": () => (/* binding */ FormationsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _formation_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formation.component */ 5445);



function FormationsComponent_app_formation_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-formation", 2);
} if (rf & 2) {
    const line_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("model", line_r1);
} }
class FormationsComponent {
    constructor() {
        this.timeline = [];
        this._model = [];
    }
    ngOnInit() { }
    updateViewModel() {
        if (this._model) {
            this.timeline = [];
            this.model.forEach((formation) => {
                if (!formation) {
                    return;
                }
                if (!this.timeline.length ||
                    (formation.to &&
                        this.timeline[this.timeline.length - 1].title !== formation.to)) {
                    this.timeline.push({
                        isHeader: true,
                        title: formation.to,
                    });
                }
                this.timeline.push({
                    isHeader: false,
                    title: formation.title,
                    description: formation.description,
                });
                if (formation.from !== formation.to) {
                    this.timeline.push({
                        isHeader: true,
                        title: formation.from,
                    });
                }
            });
        }
    }
    get model() {
        return this._model;
    }
    set model(model) {
        this._model = model;
        console.log('FormationsComponent', { model });
        this.updateViewModel();
    }
}
FormationsComponent.ɵfac = function FormationsComponent_Factory(t) { return new (t || FormationsComponent)(); };
FormationsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FormationsComponent, selectors: [["app-formations"]], inputs: { model: "model" }, decls: 2, vars: 1, consts: [[1, "timeline"], [3, "model", 4, "ngFor", "ngForOf"], [3, "model"]], template: function FormationsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, FormationsComponent_app_formation_1_Template, 1, 1, "app-formation", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.timeline);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _formation_component__WEBPACK_IMPORTED_MODULE_0__.FormationComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3JtYXRpb25zLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 3646:
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/data.service */ 2468);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4364);



function HeaderComponent_section_1_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.data == null ? null : ctx_r1.data.lastName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.data == null ? null : ctx_r1.data.firstName, " ");
} }
function HeaderComponent_section_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "article", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "figure", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, HeaderComponent_section_1_div_9_Template, 4, 2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r0.data == null ? null : ctx_r0.data.avatarUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.data == null ? null : ctx_r0.data.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.data);
} }
class HeaderComponent {
    constructor(dataService) {
        this.dataService = dataService;
        this.data = undefined;
        this._handleGeneralChangeCallback = this.handleGeneralChange.bind(this);
    }
    ngOnDestroy() {
        this.dataService.unsubscribeGeneralChange(this._handleGeneralChangeCallback);
    }
    ngOnInit() {
        this.dataService.subscribeGeneralChange(this._handleGeneralChangeCallback);
        this.data = this.dataService.getGeneral();
        console.log('HeaderComponent-ngOnInit', { data: this.data });
    }
    handleGeneralChange(data) {
        if (data) {
            this.data = data;
            console.log('HeaderComponent-handleGeneralChange', { data: this.data });
        }
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_data_service__WEBPACK_IMPORTED_MODULE_0__.DataService)); };
HeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 2, vars: 1, consts: [[1, "container"], ["class", "box hero is-success", 4, "ngIf"], [1, "box", "hero", "is-success"], [1, "media"], [1, "media-left"], [1, "image", "is-64x64"], ["alt", "image", 3, "src"], [1, "media-content"], [1, "content"], ["class", "content", 4, "ngIf"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HeaderComponent_section_1_Template, 10, 3, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.data);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf], styles: ["header[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n\n.box.hero[_ngcontent-%COMP%] {\n  border-top-left-radius: 0px;\n  border-top-right-radius: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSwyQkFBQTtFQUNBLDRCQUFBO0FBQ0YiLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaGVhZGVyIHtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcblxyXG4uYm94Lmhlcm8ge1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDBweDtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMHB4O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 9570:
/*!*****************************************************!*\
  !*** ./src/app/components/hobby/hobby.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HobbyComponent": () => (/* binding */ HobbyComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-responsive-carousel */ 1237);


class HobbyComponent {
    constructor() {
        this.images = [];
        this._model = [];
    }
    updateImages() {
        const images = [];
        if (this._model) {
            this._model.forEach((hobby, i) => {
                if (hobby) {
                    images.push({ path: hobby.image });
                }
            });
        }
        this.images = images;
    }
    get model() {
        return this._model;
    }
    set model(model) {
        this._model = model;
        this.updateImages();
    }
}
HobbyComponent.ɵfac = function HobbyComponent_Factory(t) { return new (t || HobbyComponent)(); };
HobbyComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HobbyComponent, selectors: [["app-hobby"]], inputs: { model: "model" }, decls: 2, vars: 5, consts: [[1, "hobbies"], [3, "loop", "autoplay", "cellsToShow", "autoplayInterval", "images"]], template: function HobbyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "carousel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("loop", true)("autoplay", true)("cellsToShow", 3)("autoplayInterval", 3000)("images", ctx.images);
    } }, directives: [angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_1__.CarouselComponent], styles: [".hobbies[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvYmJ5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtBQUNGIiwiZmlsZSI6ImhvYmJ5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhvYmJpZXMge1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 9520:
/*!*******************************************************!*\
  !*** ./src/app/components/layout/layout.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutComponent": () => (/* binding */ LayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../header/header.component */ 3646);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../footer/footer.component */ 4662);



const _c0 = ["*"];
class LayoutComponent {
    constructor() { }
    ngOnInit() {
    }
}
LayoutComponent.ɵfac = function LayoutComponent_Factory(t) { return new (t || LayoutComponent)(); };
LayoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: LayoutComponent, selectors: [["app-layout"]], ngContentSelectors: _c0, decls: 5, vars: 0, consts: [[1, "layout"], [1, "content"]], template: function LayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsYXlvdXQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 1269:
/*!*****************************************************!*\
  !*** ./src/app/components/skill/skill.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SkillComponent": () => (/* binding */ SkillComponent)
/* harmony export */ });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 2457);
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ 2627);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 2334);





function SkillComponent_div_0_h2_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.model.title);
} }
function SkillComponent_div_0_h3_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.model.title);
} }
function SkillComponent_div_0_h4_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.model.title);
} }
function SkillComponent_div_0_h5_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.model.title);
} }
function SkillComponent_div_0_h6_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.model.title);
} }
function SkillComponent_div_0_div_7_div_1_fa_icon_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "fa-icon", 9);
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r10.fasStar);
} }
function SkillComponent_div_0_div_7_div_1_fa_icon_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "fa-icon", 9);
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r11.fasStarHalfAlt);
} }
function SkillComponent_div_0_div_7_div_1_fa_icon_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "fa-icon", 9);
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r12.farStar);
} }
function SkillComponent_div_0_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SkillComponent_div_0_div_7_div_1_fa_icon_1_Template, 1, 1, "fa-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SkillComponent_div_0_div_7_div_1_fa_icon_2_Template, 1, 1, "fa-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SkillComponent_div_0_div_7_div_1_fa_icon_3_Template, 1, 1, "fa-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const starNumber_r9 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", starNumber_r9 + 1 <= ctx_r8.model.score);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", starNumber_r9 + 0.5 == ctx_r8.model.score);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", starNumber_r9 >= ctx_r8.model.score);
} }
const _c0 = function () { return [0, 1, 2, 3, 4]; };
function SkillComponent_div_0_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SkillComponent_div_0_div_7_div_1_Template, 4, 3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
} }
function SkillComponent_div_0_div_8_app_skill_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-skill", 11);
} if (rf & 2) {
    const skill_r14 = ctx.$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("model", skill_r14)("level", ctx_r13.level + 1);
} }
function SkillComponent_div_0_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SkillComponent_div_0_div_8_app_skill_1_Template, 1, 2, "app-skill", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r7.level ? "sub-skill" : "sub-skill card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.model.skills);
} }
function SkillComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SkillComponent_div_0_h2_2_Template, 2, 1, "h2", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SkillComponent_div_0_h3_3_Template, 2, 1, "h3", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SkillComponent_div_0_h4_4_Template, 2, 1, "h4", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SkillComponent_div_0_h5_5_Template, 2, 1, "h5", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SkillComponent_div_0_h6_6_Template, 2, 1, "h6", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SkillComponent_div_0_div_7_Template, 2, 2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SkillComponent_div_0_div_8_Template, 2, 2, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.level ? "skill" : "skill card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.level ? "skill-title" : "skill-title card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.level == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.level == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.level == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.level == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.level >= 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.model.score);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.model.skills);
} }
class SkillComponent {
    constructor() {
        this.fasStar = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faStar;
        this.fasStarHalfAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faStarHalfAlt;
        this.farStar = _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faStar;
        this._model = undefined;
        this._level = 0;
    }
    ngOnInit() { }
    get model() {
        return this._model;
    }
    set model(model) {
        this._model = model;
    }
    get level() {
        return this._level;
    }
    set level(level) {
        this._level = level;
    }
}
SkillComponent.ɵfac = function SkillComponent_Factory(t) { return new (t || SkillComponent)(); };
SkillComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SkillComponent, selectors: [["app-skill"]], inputs: { model: "model", level: "level" }, decls: 1, vars: 1, consts: [[3, "ngClass", 4, "ngIf"], [3, "ngClass"], ["class", "card-header-title", 4, "ngIf"], [4, "ngIf"], ["class", "skill-score", 4, "ngIf"], [1, "card-header-title"], [1, "skill-score"], [4, "ngFor", "ngForOf"], [3, "icon", 4, "ngIf"], [3, "icon"], [3, "model", "level", 4, "ngFor", "ngForOf"], [3, "model", "level"]], template: function SkillComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SkillComponent_div_0_Template, 9, 9, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.model);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FaIconComponent, SkillComponent], styles: [".skill-title[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n.skill-score[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  margin-left: 1rem;\n  margin-right: 0.5rem;\n}\n\n.sub-skill[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding-left: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNraWxsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFDRjs7QUFDQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUFFRjs7QUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0FBR0YiLCJmaWxlIjoic2tpbGwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2tpbGwtdGl0bGUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuLnNraWxsLXNjb3JlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XHJcbn1cclxuLnN1Yi1za2lsbCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHBhZGRpbmctbGVmdDogMC41cmVtO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 3816:
/*!***********************************************************!*\
  !*** ./src/app/components/thematic/thematic.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThematicComponent": () => (/* binding */ ThematicComponent)
/* harmony export */ });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 2457);
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ 2627);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 2334);
/* harmony import */ var _formation_formations_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../formation/formations.component */ 572);
/* harmony import */ var _experience_experience_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../experience/experience.component */ 6228);
/* harmony import */ var _skill_skill_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../skill/skill.component */ 1269);
/* harmony import */ var _hobby_hobby_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hobby/hobby.component */ 9570);









function ThematicComponent_div_0_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-formations", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("model", ctx_r1.model.formations);
} }
function ThematicComponent_div_0_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-experience", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("model", ctx_r5.model.experiences);
} }
function ThematicComponent_div_0_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ThematicComponent_div_0_div_6_div_1_Template, 2, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r2.model.experiences);
} }
function ThematicComponent_div_0_div_7_app_skill_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-skill", 13);
} if (rf & 2) {
    const skill_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("model", skill_r8);
} }
function ThematicComponent_div_0_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ThematicComponent_div_0_div_7_app_skill_1_Template, 1, 1, "app-skill", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r3.model.skills);
} }
function ThematicComponent_div_0_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-hobby", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("model", ctx_r4.model.hobbies);
} }
function ThematicComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h1", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "fa-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, ThematicComponent_div_0_div_5_Template, 2, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, ThematicComponent_div_0_div_6_Template, 2, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, ThematicComponent_div_0_div_7_Template, 2, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, ThematicComponent_div_0_div_8_Template, 2, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", ctx_r0.faCoffee);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.model.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.model.formations && ctx_r0.model.formations.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.model.experiences && ctx_r0.model.experiences.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.model.skills && ctx_r0.model.skills.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.model.hobbies && ctx_r0.model.hobbies.length > 0);
} }
class ThematicComponent {
    constructor() {
        this.faCoffee = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faCoffee;
        this.faStar = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faStar;
        this.faStarHalfAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faStarHalfAlt;
        this.farStar = _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faStar;
        this._model = undefined;
    }
    ngOnInit() { }
    get model() {
        return this._model;
    }
    set model(model) {
        this._model = model;
    }
}
ThematicComponent.ɵfac = function ThematicComponent_Factory(t) { return new (t || ThematicComponent)(); };
ThematicComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ThematicComponent, selectors: [["app-thematic"]], inputs: { model: "model" }, decls: 1, vars: 1, consts: [["class", "panel is-success mb-3", 4, "ngIf"], [1, "panel", "is-success", "mb-3"], [1, "panel-heading"], [3, "icon"], ["class", "panel-block", 4, "ngIf"], [4, "ngIf"], ["class", "main-skills", 4, "ngIf"], ["class", "is-full", 4, "ngIf"], [1, "panel-block"], [3, "model"], ["class", "panel-block", 4, "ngFor", "ngForOf"], [1, "main-skills"], ["class", "main-skill", 3, "model", 4, "ngFor", "ngForOf"], [1, "main-skill", 3, "model"], [1, "is-full"]], template: function ThematicComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, ThematicComponent_div_0_Template, 9, 6, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.model);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__.FaIconComponent, _formation_formations_component__WEBPACK_IMPORTED_MODULE_0__.FormationsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _experience_experience_component__WEBPACK_IMPORTED_MODULE_1__.ExperienceComponent, _skill_skill_component__WEBPACK_IMPORTED_MODULE_2__.SkillComponent, _hobby_hobby_component__WEBPACK_IMPORTED_MODULE_3__.HobbyComponent], styles: [".main-skills[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n\n.main-skill[_ngcontent-%COMP%] {\n  margin-left: 1.5rem;\n  margin-bottom: 1.5rem;\n  padding: 0.1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRoZW1hdGljLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUNBO0VBQ0UsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUFFRiIsImZpbGUiOiJ0aGVtYXRpYy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLXNraWxscyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG4ubWFpbi1za2lsbCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDEuNXJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcbiAgcGFkZGluZzogMC4xcmVtO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 872:
/*!**************************************************************!*\
  !*** ./src/app/pages/four-oh-four/four-oh-four.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FourOhFourComponent": () => (/* binding */ FourOhFourComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class FourOhFourComponent {
    constructor() { }
    ngOnInit() {
    }
}
FourOhFourComponent.ɵfac = function FourOhFourComponent_Factory(t) { return new (t || FourOhFourComponent)(); };
FourOhFourComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FourOhFourComponent, selectors: [["app-four-oh-four"]], decls: 2, vars: 0, template: function FourOhFourComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "four-oh-four works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3VyLW9oLWZvdXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 2843:
/*!********************************************!*\
  !*** ./src/app/pages/job/job.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JobComponent": () => (/* binding */ JobComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/layout/layout.component */ 9520);


class JobComponent {
    constructor() { }
    ngOnInit() {
    }
}
JobComponent.ɵfac = function JobComponent_Factory(t) { return new (t || JobComponent)(); };
JobComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: JobComponent, selectors: [["app-job"]], decls: 3, vars: 0, template: function JobComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "job works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_0__.LayoutComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJqb2IuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 440:
/*!**********************************************!*\
  !*** ./src/app/pages/main/main.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainComponent": () => (/* binding */ MainComponent)
/* harmony export */ });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 2457);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/data.service */ 2468);
/* harmony import */ var _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/layout/layout.component */ 9520);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _components_thematic_thematic_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/thematic/thematic.component */ 3816);







function MainComponent_div_5_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const thematic_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ".")("fragment", thematic_r2.anchor);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", thematic_r2.title, " ");
} }
function MainComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, MainComponent_div_5_a_1_Template, 4, 3, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const thematic_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", thematic_r2);
} }
function MainComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-thematic", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const thematic_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("id", thematic_r5 == null ? null : thematic_r5.anchor);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("model", thematic_r5);
} }
class MainComponent {
    constructor(dataService) {
        this.dataService = dataService;
        this.data = [];
        this.faCoffee = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faCoffee;
        this._handleThematicsChangeCallback =
            this.handleThematicsChangeCallback.bind(this);
    }
    ngOnInit() {
        this.dataService.subscribeThematicsChange(this._handleThematicsChangeCallback);
        this.data = this.dataService.getThematics();
        console.log('MainComponent-ngOnInit', { data: this.data });
    }
    ngOnDestroy() {
        this.dataService.unsubscribeThematicsChange(this._handleThematicsChangeCallback);
    }
    handleThematicsChangeCallback(data) {
        if (data) {
            this.data = data;
            console.log('MainComponent-handleThematicsChangeCallback', {
                data: this.data,
            });
        }
    }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_data_service__WEBPACK_IMPORTED_MODULE_0__.DataService)); };
MainComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], decls: 8, vars: 2, consts: [[1, "main", "container"], [1, "columns"], [1, "column", "is-one-quarter"], [1, "panel", "sticky-menu"], [4, "ngFor", "ngForOf"], [1, "column", "is-three-quarters"], ["class", "panel-block is-active", 3, "routerLink", "fragment", 4, "ngIf"], [1, "panel-block", "is-active", 3, "routerLink", "fragment"], [1, "panel-icon"], ["aria-hidden", "true", 1, "fas", "fa-book"], [3, "model"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "app-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "article", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, MainComponent_div_5_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "section", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, MainComponent_div_7_Template, 2, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.data);
    } }, directives: [_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__.LayoutComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkWithHref, _components_thematic_thematic_component__WEBPACK_IMPORTED_MODULE_2__.ThematicComponent], styles: ["fieldset[_ngcontent-%COMP%] {\n  margin: 8px;\n  border: 1px solid silver;\n  padding: 8px;\n  border-radius: 4px;\n}\n\nlegend[_ngcontent-%COMP%] {\n  padding: 2px;\n}\n\n.sticky-menu[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0Esd0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7QUFDRjs7QUFFQTtFQUVFLGdCQUFBO0VBQ0EsU0FBQTtBQUNGIiwiZmlsZSI6Im1haW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmaWVsZHNldCB7XHJcbiAgbWFyZ2luOiA4cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgc2lsdmVyO1xyXG4gIHBhZGRpbmc6IDhweDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuXHJcbmxlZ2VuZCB7XHJcbiAgcGFkZGluZzogMnB4O1xyXG59XHJcblxyXG4uc3RpY2t5LW1lbnUge1xyXG4gIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIHRvcDogMXJlbTtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 2468:
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataService": () => (/* binding */ DataService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _prismicio_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @prismicio/client */ 4667);
/* harmony import */ var _utils_prismic_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/prismic.helper */ 8052);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 3882);





class DataService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this._common = undefined;
        this._thematics = [];
        this._commonCallbacks = [];
        this._thematicsCallbacks = [];
        console.log('DataService-ngOnInit');
        const endpoint = _prismicio_client__WEBPACK_IMPORTED_MODULE_1__.getEndpoint('jdufosse');
        const client = _prismicio_client__WEBPACK_IMPORTED_MODULE_1__.createClient(endpoint, {
            accessToken: 'MC5ZcC0takJFQUFDQUF5Y2lX.77-977-977-977-9bwDvv73vv73vv73vv73vv70CP--_ve-_ve-_vSwMA--_vSHvv73vv71a77-977-977-977-9Ru-_vWVy',
        });
        this.init(client);
    }
    getGeneral() {
        return this._common;
    }
    getThematics() {
        return this._thematics;
    }
    subscribeGeneralChange(callback) {
        if (callback) {
            this._commonCallbacks.push(callback);
        }
    }
    unsubscribeGeneralChange(callback) {
        if (callback) {
            this._commonCallbacks = this._commonCallbacks.filter((c) => c !== callback);
        }
    }
    subscribeThematicsChange(callback) {
        if (callback) {
            this._thematicsCallbacks.push(callback);
        }
    }
    unsubscribeThematicsChange(callback) {
        if (callback) {
            this._thematicsCallbacks = this._thematicsCallbacks.filter((c) => c !== callback);
        }
    }
    init(client) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const common = yield client.getByUID('common', 'common');
            if (common) {
                this._common = _utils_prismic_helper__WEBPACK_IMPORTED_MODULE_0__.PrismicHelper.GetGeneral(common);
                this._commonCallbacks.forEach((callback) => {
                    if (callback) {
                        callback(this._common);
                    }
                });
            }
            const skills = yield client.getAllByType('skills');
            const experiences = yield client.getAllByType('experience');
            const missions = yield client.getAllByType('mission');
            const skillModels = _utils_prismic_helper__WEBPACK_IMPORTED_MODULE_0__.PrismicHelper.GetSkills(skills);
            const missionModels = _utils_prismic_helper__WEBPACK_IMPORTED_MODULE_0__.PrismicHelper.GetMissions(missions, skillModels);
            const experienceModels = _utils_prismic_helper__WEBPACK_IMPORTED_MODULE_0__.PrismicHelper.GetExperiences(experiences, missionModels);
            console.log('init', { skills, experiences, missions });
            const thematics = yield client.getByUID('thematics', 'thematics', {
                fetchLinks: `thematics.skills`,
            });
            if (thematics) {
                this._thematics = _utils_prismic_helper__WEBPACK_IMPORTED_MODULE_0__.PrismicHelper.GetThematics(thematics);
                if (this._thematics) {
                    console.log('init', { thematics: this._thematics });
                    yield Promise.all(this._thematics.map((thematic) => (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
                        console.log('init-thematics', { thematic });
                        if (thematic) {
                            if (thematic.experiences) {
                                thematic.experiences = thematic.experiences.map((experience) => {
                                    return experienceModels.find((em) => (em === null || em === void 0 ? void 0 : em.uid) == (experience === null || experience === void 0 ? void 0 : experience.uid));
                                });
                            }
                            if (thematic.skills) {
                                thematic.skills = thematic.skills.map((skill) => {
                                    return skillModels.find((s) => (s === null || s === void 0 ? void 0 : s.uid) == (skill === null || skill === void 0 ? void 0 : skill.uid));
                                });
                            }
                        }
                    })));
                }
                this._thematicsCallbacks.forEach((callback) => {
                    if (callback) {
                        callback(this._thematics);
                    }
                });
            }
        });
    }
}
DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient)); };
DataService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: DataService, factory: DataService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8052:
/*!*****************************************!*\
  !*** ./src/app/utils/prismic.helper.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrismicHelper": () => (/* binding */ PrismicHelper)
/* harmony export */ });
class PrismicHelper {
    static GetGeneral(prismicValue) {
        var _a, _b, _c, _d, _e;
        const result = {
            firstName: PrismicHelper.getText((_a = prismicValue.data) === null || _a === void 0 ? void 0 : _a.firstname),
            lastName: PrismicHelper.getText((_b = prismicValue.data) === null || _b === void 0 ? void 0 : _b.lastname),
            avatarUrl: PrismicHelper.getText((_d = (_c = prismicValue.data) === null || _c === void 0 ? void 0 : _c.avatar) === null || _d === void 0 ? void 0 : _d.url),
            title: PrismicHelper.getText((_e = prismicValue.data) === null || _e === void 0 ? void 0 : _e.title),
        };
        console.log('GetGeneral', { prismicValue, result });
        return result;
    }
    static GetThematics(prismicValue) {
        var _a, _b;
        const result = (_b = (_a = prismicValue === null || prismicValue === void 0 ? void 0 : prismicValue.data) === null || _a === void 0 ? void 0 : _a.body) === null || _b === void 0 ? void 0 : _b.map((thematicData) => {
            const title = PrismicHelper.getText(thematicData.primary.title);
            const anchor = thematicData.primary.anchor;
            const thematic = {
                title,
                anchor,
                formations: [],
                experiences: [],
                skills: [],
                hobbies: [],
            };
            switch (thematicData.slice_type) {
                case 'cursus':
                    thematic.formations = thematicData.items.map((item) => {
                        const formation = this.createFormation(item);
                        if (formation) {
                            return formation;
                        }
                        return;
                    });
                    break;
                case 'experiences':
                    thematic.experiences = thematicData.items.map((item) => {
                        const experience = this.createExperience(item.experience);
                        if (experience) {
                            return experience;
                        }
                        return;
                    });
                    break;
                case 'skills':
                    thematic.skills = thematicData.items.map((item) => {
                        const skill = this.createSkill(item.skill);
                        if (skill) {
                            return skill;
                        }
                        return;
                    });
                    break;
                case 'hobbies':
                    thematic.hobbies = thematicData.items.map((item) => {
                        const hobby = this.createHobby(item);
                        if (hobby) {
                            return hobby;
                        }
                        return;
                    });
                    break;
                default:
                    break;
            }
            return thematic;
        });
        console.log('GetThematics', { prismicValue, result });
        return result;
    }
    static GetExperiences(prismicValues, missions) {
        const experiences = prismicValues.map((prismicValue) => {
            var _a;
            return (_a = this.createExperience(prismicValue)) !== null && _a !== void 0 ? _a : undefined;
        });
        prismicValues.forEach((prismicValue) => {
            var _a;
            const experience = experiences.find((m) => (m === null || m === void 0 ? void 0 : m.uid) == prismicValue.uid);
            if (experience && ((_a = prismicValue.data.missions) === null || _a === void 0 ? void 0 : _a.length) > 0) {
                experience.missions = prismicValue.data.missions.map((m) => {
                    return missions.find((m2) => (m2 === null || m2 === void 0 ? void 0 : m2.uid) == m.mission.uid);
                });
            }
        });
        console.log('GetExperiences', { prismicValues, experiences });
        return experiences;
    }
    static GetMissions(prismicValues, skills) {
        const missions = prismicValues.map((prismicValue) => {
            var _a;
            return (_a = PrismicHelper.createMission(prismicValue)) !== null && _a !== void 0 ? _a : undefined;
        });
        prismicValues.forEach((prismicValue) => {
            var _a;
            const mission = missions.find((m) => (m === null || m === void 0 ? void 0 : m.uid) == prismicValue.uid);
            if (mission && ((_a = prismicValue.data.skills) === null || _a === void 0 ? void 0 : _a.length) > 0) {
                mission.skills = prismicValue.data.skills.map((s) => {
                    return skills.find((s2) => (s2 === null || s2 === void 0 ? void 0 : s2.uid) == s.skill.uid);
                });
            }
        });
        console.log('GetMissions', { prismicValues, missions });
        return missions;
    }
    static GetSkills(prismicValues) {
        const skills = prismicValues.map((prismicValue) => {
            var _a;
            return (_a = this.createSkill(prismicValue)) !== null && _a !== void 0 ? _a : undefined;
        });
        prismicValues.forEach((prismicValue) => {
            var _a;
            const skill = skills.find((s) => (s === null || s === void 0 ? void 0 : s.uid) == prismicValue.uid);
            if (skill && ((_a = prismicValue.data.skills) === null || _a === void 0 ? void 0 : _a.length) > 0) {
                skill.skills = prismicValue.data.skills.map((s) => {
                    return skills.find((s2) => (s2 === null || s2 === void 0 ? void 0 : s2.uid) == s.skill.uid);
                });
            }
        });
        console.log('GetSkills', { prismicValues, skills });
        return skills;
    }
    static createFormation(formationData) {
        const description = PrismicHelper.getText(formationData.description);
        const title = PrismicHelper.getText(formationData.title);
        const from = formationData.start_year;
        const to = formationData.end_year;
        return { title, from, description, to };
    }
    static createExperience(experienceData) {
        var _a, _b, _c, _d, _e, _f, _g;
        const description = PrismicHelper.getText((_a = experienceData.data) === null || _a === void 0 ? void 0 : _a.description);
        const title = PrismicHelper.getText((_b = experienceData.data) === null || _b === void 0 ? void 0 : _b.title);
        const from = (_c = experienceData.data) === null || _c === void 0 ? void 0 : _c.start_date;
        const to = (_d = experienceData.data) === null || _d === void 0 ? void 0 : _d.end_date;
        const missions = (_g = (_f = (_e = experienceData.data) === null || _e === void 0 ? void 0 : _e.missions) === null || _f === void 0 ? void 0 : _f.map((item) => {
            if (item.mission) {
                return PrismicHelper.createMission(item.mission);
            }
            return;
        })) !== null && _g !== void 0 ? _g : [];
        return {
            uid: experienceData.uid,
            title,
            description,
            from,
            to,
            missions: [],
            isLoaded: !!title,
        };
    }
    static createMission(experienceData) {
        var _a, _b;
        const description = PrismicHelper.getText((_a = experienceData.data) === null || _a === void 0 ? void 0 : _a.description);
        const title = PrismicHelper.getText((_b = experienceData.data) === null || _b === void 0 ? void 0 : _b.title);
        return {
            uid: experienceData.uid,
            title,
            description,
            'short-description': '',
            skills: [],
            isLoaded: !!title,
        };
    }
    static createSkill(skillData) {
        var _a, _b;
        const title = PrismicHelper.getText((_a = skillData.data) === null || _a === void 0 ? void 0 : _a.title);
        const score = ((_b = skillData.data) === null || _b === void 0 ? void 0 : _b.score) / 2;
        return {
            uid: skillData.uid,
            title: title,
            score,
            isLoaded: !!title,
        };
    }
    static createHobby(formationData) {
        const image = formationData.image.url;
        const title = PrismicHelper.getText(formationData.title);
        return { title, image };
    }
    static getText(source) {
        var _a;
        if (typeof source === 'string') {
            return source;
        }
        else if (Array.isArray(source) && source.length > 0) {
            return (_a = source[0]) === null || _a === void 0 ? void 0 : _a.text;
        }
        return '';
    }
}


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
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
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map