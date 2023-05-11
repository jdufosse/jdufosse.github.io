"use strict";
(self["webpackChunkCurriculum_vitae"] = self["webpackChunkCurriculum_vitae"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);


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
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: [".app[_ngcontent-%COMP%] {\n  background-color: var(--background-color);\n  color: var(--font-color);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlDQUFBO0VBQ0Esd0JBQUE7QUFDRiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcclxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 9397);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! angular-responsive-carousel */ 6406);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _pages_main_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/main/main.component */ 440);
/* harmony import */ var _pages_four_oh_four_four_oh_four_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/four-oh-four/four-oh-four.component */ 872);
/* harmony import */ var _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/layout/layout.component */ 9520);
/* harmony import */ var _components_thematic_thematic_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/thematic/thematic.component */ 3816);
/* harmony import */ var _components_experience_experience_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/experience/experience.component */ 6228);
/* harmony import */ var _components_mission_mission_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/mission/mission.component */ 2098);
/* harmony import */ var _components_hobby_hobby_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/hobby/hobby.component */ 9570);
/* harmony import */ var _components_skill_skill_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/skill/skill.component */ 1269);
/* harmony import */ var _components_formation_formation_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/formation/formation.component */ 5445);
/* harmony import */ var _components_formation_formations_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/formation/formations.component */ 572);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/footer/footer.component */ 4662);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/header/header.component */ 3646);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/data.service */ 2468);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 3184);





// Components














// Services



const routes = [
    { path: '', component: _pages_main_main_component__WEBPACK_IMPORTED_MODULE_2__.MainComponent },
    { path: '**', component: _pages_four_oh_four_four_oh_four_component__WEBPACK_IMPORTED_MODULE_3__.FourOhFourComponent },
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
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({ providers: [_services_data_service__WEBPACK_IMPORTED_MODULE_14__.DataService], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__.BrowserModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterModule.forRoot(routes, routerOptions),
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_18__.HttpClientModule,
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_19__.FontAwesomeModule,
        angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_20__.IvyCarouselModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _pages_main_main_component__WEBPACK_IMPORTED_MODULE_2__.MainComponent,
        _pages_four_oh_four_four_oh_four_component__WEBPACK_IMPORTED_MODULE_3__.FourOhFourComponent,
        _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_4__.LayoutComponent,
        _components_thematic_thematic_component__WEBPACK_IMPORTED_MODULE_5__.ThematicComponent,
        _components_experience_experience_component__WEBPACK_IMPORTED_MODULE_6__.ExperienceComponent,
        _components_hobby_hobby_component__WEBPACK_IMPORTED_MODULE_8__.HobbyComponent,
        _components_skill_skill_component__WEBPACK_IMPORTED_MODULE_9__.SkillComponent,
        _components_formation_formation_component__WEBPACK_IMPORTED_MODULE_10__.FormationComponent,
        _components_formation_formations_component__WEBPACK_IMPORTED_MODULE_11__.FormationsComponent,
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__.FooterComponent,
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_13__.HeaderComponent,
        _components_mission_mission_component__WEBPACK_IMPORTED_MODULE_7__.MissionComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__.BrowserModule, _angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_18__.HttpClientModule,
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_19__.FontAwesomeModule,
        angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_20__.IvyCarouselModule] }); })();


/***/ }),

/***/ 6228:
/*!***************************************************************!*\
  !*** ./src/app/components/experience/experience.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExperienceComponent": () => (/* binding */ ExperienceComponent)
/* harmony export */ });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 9306);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 9397);
/* harmony import */ var _mission_mission_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mission/mission.component */ 2098);





function ExperienceComponent_div_0_div_9_app_mission_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-mission", 13);
} if (rf & 2) {
    const mission_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("model", mission_r3);
} }
function ExperienceComponent_div_0_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9)(1, "div", 10)(2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ExperienceComponent_div_0_div_9_app_mission_5_Template, 1, 1, "app-mission", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.model.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.model.missions);
} }
function ExperienceComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1)(1, "header", 2)(2, "div", 3)(3, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ExperienceComponent_div_0_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r4.onToggleDisplayContent()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "fa-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, ExperienceComponent_div_0_div_9_Template, 6, 2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.model.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.model.to ? "From " + ctx_r0.dateToString(ctx_r0.model.from) + " to " + ctx_r0.dateToString(ctx_r0.model.to) : "Since " + ctx_r0.dateToString(ctx_r0.model.from), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx_r0.headerIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.displayContent);
} }
class ExperienceComponent {
    constructor() {
        this.displayContent = true;
        this.headerIcon = this.displayContent
            ? _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faCaretDown
            : _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faCaretLeft;
        this._model = undefined;
    }
    ngOnInit() { }
    dateToString(stringDate) {
        const date = new Date(stringDate);
        return new Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: 'long',
        }).format(date);
    }
    onToggleDisplayContent() {
        console.log('toggleDisplayContent');
        this.displayContent = !this.displayContent;
        this.headerIcon = this.displayContent
            ? _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faCaretDown
            : _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faCaretLeft;
    }
    get model() {
        return this._model;
    }
    set model(model) {
        this._model = model;
    }
}
ExperienceComponent.ɵfac = function ExperienceComponent_Factory(t) { return new (t || ExperienceComponent)(); };
ExperienceComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ExperienceComponent, selectors: [["app-experience"]], inputs: { model: "model" }, decls: 1, vars: 1, consts: [["class", "card", 4, "ngIf"], [1, "card"], [1, "card-header"], [1, "card-header-title", "experience-title"], [1, "title", "is-4"], [1, "title", "is-5"], ["aria-label", "more options", 1, "card-header-icon", 3, "click"], [3, "icon"], ["class", "card-content", 4, "ngIf"], [1, "card-content"], [1, "content"], [1, "missions"], [3, "model", 4, "ngFor", "ngForOf"], [3, "model"]], template: function ExperienceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ExperienceComponent_div_0_Template, 10, 4, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.model);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FaIconComponent, _mission_mission_component__WEBPACK_IMPORTED_MODULE_0__.MissionComponent], styles: [".experience-title[_ngcontent-%COMP%] {\n  flex-direction: column;\n  align-items: flex-start;\n}\n\n.missions[_ngcontent-%COMP%] {\n  position: relative;\n  display: grid;\n  grid-template-columns: auto;\n  grid-gap: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4cGVyaWVuY2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBQTtFQUNBLHVCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLGNBQUE7QUFDRiIsImZpbGUiOiJleHBlcmllbmNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4cGVyaWVuY2UtdGl0bGUge1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbn1cclxuXHJcbi5taXNzaW9ucyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvO1xyXG4gIGdyaWQtZ2FwOiAxcmVtO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 4662:
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 12, vars: 0, consts: [[1, "footer"], [1, "content", "has-text-centered"], ["href", "https://angular.io/"], ["href", "https://bulma.io/"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0)(1, "div", 1)(2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " This page is made with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 2)(5, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Angular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " and styled by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 3)(9, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Bulma");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } }, styles: [".footer[_ngcontent-%COMP%] {\n  padding: 1rem 1.5rem 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0FBQ0oiLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlciB7XHJcbiAgICBwYWRkaW5nOiAxcmVtIDEuNXJlbSAxcmVtO1xyXG59Il19 */"] });


/***/ }),

/***/ 5445:
/*!*************************************************************!*\
  !*** ./src/app/components/formation/formation.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormationComponent": () => (/* binding */ FormationComponent)
/* harmony export */ });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 9306);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 9397);




function FormationComponent_header_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 2)(1, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4)(1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "fa-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7)(4, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FormationComponent_div_1_p_6_Template, 2, 1, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
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
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FaIconComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3JtYXRpb24uY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 572:
/*!**************************************************************!*\
  !*** ./src/app/components/formation/formations.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormationsComponent": () => (/* binding */ FormationsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);
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
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _formation_component__WEBPACK_IMPORTED_MODULE_0__.FormationComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3JtYXRpb25zLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 3646:
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 9306);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/data.service */ 2468);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 9397);





function HeaderComponent_section_1_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12)(1, "h1", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 14)(4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.data.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.data.lastName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.data.firstName);
} }
function HeaderComponent_section_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 2)(1, "article", 3)(2, "div", 4)(3, "figure", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, HeaderComponent_section_1_div_6_Template, 8, 3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "img", 10)(9, "fa-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    let tmp_1_0;
    let tmp_4_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r0.data.avatar == null ? null : ctx_r0.data.avatar.url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("alt", (tmp_1_0 = ctx_r0.data.avatar == null ? null : ctx_r0.data.avatar.alt) !== null && tmp_1_0 !== undefined ? tmp_1_0 : "image");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.data);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r0.data.avatar == null ? null : ctx_r0.data.avatar.url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("alt", (tmp_4_0 = ctx_r0.data.avatar == null ? null : ctx_r0.data.avatar.alt) !== null && tmp_4_0 !== undefined ? tmp_4_0 : "image");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx_r0.faBars);
} }
class HeaderComponent {
    constructor(dataService) {
        this.dataService = dataService;
        this.faBars = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faBars;
        this.data = undefined;
        this._handleDataLoadedCallback = this.handleDataLoadedCallback.bind(this);
    }
    ngOnDestroy() {
        this.dataService.unsubscribeDataLoaded(this._handleDataLoadedCallback);
    }
    ngOnInit() {
        this.dataService.subscribeDataLoaded(this._handleDataLoadedCallback);
        this.data = this.dataService.getGeneral();
        console.log('HeaderComponent-ngOnInit', { data: this.data });
    }
    handleDataLoadedCallback(data) {
        if (data) {
            this.data = data.general;
            console.log('HeaderComponent-handleGeneralChange', { data: this.data });
        }
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_data_service__WEBPACK_IMPORTED_MODULE_0__.DataService)); };
HeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 2, vars: 1, consts: [[1, "container", "header"], ["class", "box hero is-success", 4, "ngIf"], [1, "box", "hero", "is-success"], [1, "media"], [1, "media-left"], [1, "image", "is-64x64"], [3, "src", "alt"], [1, "media-content"], ["class", "content", 4, "ngIf"], [1, "media-right"], [1, "media-right__icon", "media-right__language-icon", 3, "src", "alt"], [1, "media-right__icon", "media-right__menu-icon", 3, "icon"], [1, "content"], [1, "content__title"], [1, "content__name"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HeaderComponent_section_1_Template, 10, 6, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.data);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FaIconComponent], styles: ["header[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\nheader[_ngcontent-%COMP%]   .media-content[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\nheader[_ngcontent-%COMP%]   .box.hero[_ngcontent-%COMP%] {\n  border-radius: 0;\n}\nheader[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row-reverse;\n  justify-content: flex-end;\n  align-items: stretch;\n}\nheader[_ngcontent-%COMP%]   h1.content__title[_ngcontent-%COMP%] {\n  margin: 0 0 0 2rem;\n  font-size: 2.5rem;\n  color: var(--header-font-color);\n}\nheader[_ngcontent-%COMP%]   .content__name[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  font-size: 1.25rem;\n}\nheader[_ngcontent-%COMP%]   .media-right__icon[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n}\n@media only screen and (min-width: 768px) {\n  header[_ngcontent-%COMP%]   .box.hero[_ngcontent-%COMP%]   .media-right__menu-icon[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media only screen and (min-width: 1024px) {\n  header[_ngcontent-%COMP%]   .box.hero[_ngcontent-%COMP%] {\n    border-bottom-left-radius: 6px;\n    border-bottom-right-radius: 6px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0FBQ0Y7QUFDRTtFQUNFLGdCQUFBO0FBQ0o7QUFFRTtFQUNFLGdCQUFBO0FBQUo7QUFHRTtFQUNFLGFBQUE7RUFDQSwyQkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7QUFESjtBQUlFO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLCtCQUFBO0FBRko7QUFLRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FBSEo7QUFNRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBSko7QUFRQTtFQUdNO0lBQ0UsYUFBQTtFQVBOO0FBQ0Y7QUFZQTtFQUVJO0lBQ0UsOEJBQUE7SUFDQSwrQkFBQTtFQVhKO0FBQ0YiLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaGVhZGVyIHtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG5cclxuICAubWVkaWEtY29udGVudCB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIH1cclxuXHJcbiAgLmJveC5oZXJvIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgfVxyXG5cclxuICAuY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gIH1cclxuXHJcbiAgaDEuY29udGVudF9fdGl0bGUge1xyXG4gICAgbWFyZ2luOiAwIDAgMCAycmVtO1xyXG4gICAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgICBjb2xvcjogdmFyKC0taGVhZGVyLWZvbnQtY29sb3IpO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRlbnRfX25hbWUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgfVxyXG5cclxuICAubWVkaWEtcmlnaHRfX2ljb24ge1xyXG4gICAgd2lkdGg6IDMycHg7XHJcbiAgICBoZWlnaHQ6IDMycHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgaGVhZGVyIHtcclxuICAgIC5ib3guaGVybyB7XHJcbiAgICAgIC5tZWRpYS1yaWdodF9fbWVudS1pY29ue1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcbiAgaGVhZGVyIHtcclxuICAgIC5ib3guaGVybyB7XHJcbiAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDZweDtcclxuICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDZweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 9570:
/*!*****************************************************!*\
  !*** ./src/app/components/hobby/hobby.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HobbyComponent": () => (/* binding */ HobbyComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-responsive-carousel */ 6406);


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
    } }, dependencies: [angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_1__.CarouselComponent], styles: [".hobbies[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvYmJ5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtBQUNGIiwiZmlsZSI6ImhvYmJ5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhvYmJpZXMge1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 9520:
/*!*******************************************************!*\
  !*** ./src/app/components/layout/layout.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutComponent": () => (/* binding */ LayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../footer/footer.component */ 4662);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../header/header.component */ 3646);



const _c0 = ["*"];
class LayoutComponent {
    constructor() { }
    ngOnInit() {
    }
}
LayoutComponent.ɵfac = function LayoutComponent_Factory(t) { return new (t || LayoutComponent)(); };
LayoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: LayoutComponent, selectors: [["app-layout"]], ngContentSelectors: _c0, decls: 5, vars: 0, consts: [[1, "layout"], [1, "header"], [1, "content"]], template: function LayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } }, dependencies: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_0__.FooterComponent, _header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent], styles: [".layout[_ngcontent-%COMP%] {\n  padding-top: 125px;\n}\n.layout[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100%;\n  z-index: 10;\n  top: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxheW91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FBQ0Y7QUFDRTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLE1BQUE7QUFDSiIsImZpbGUiOiJsYXlvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGF5b3V0IHtcclxuICBwYWRkaW5nLXRvcDogMTI1cHg7XHJcblxyXG4gIC5oZWFkZXIge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB6LWluZGV4OiAxMDtcclxuICAgIHRvcDogMDtcclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 2098:
/*!*********************************************************!*\
  !*** ./src/app/components/mission/mission.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MissionComponent": () => (/* binding */ MissionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6362);


function MissionComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "blockquote")(2, "p", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.model.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.model.description);
} }
class MissionComponent {
    constructor() {
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
MissionComponent.ɵfac = function MissionComponent_Factory(t) { return new (t || MissionComponent)(); };
MissionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MissionComponent, selectors: [["app-mission"]], inputs: { model: "model" }, decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "title", "is-6"], [1, "description"]], template: function MissionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MissionComponent_div_0_Template, 6, 2, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.model);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtaXNzaW9uLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 1269:
/*!*****************************************************!*\
  !*** ./src/app/components/skill/skill.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SkillComponent": () => (/* binding */ SkillComponent)
/* harmony export */ });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 9306);
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ 2898);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 9397);





function SkillComponent_div_0_h3_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.model.title);
} }
function SkillComponent_div_0_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.model.title);
} }
function SkillComponent_div_0_div_4_div_1_fa_icon_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "fa-icon", 8);
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r7.fasStar);
} }
function SkillComponent_div_0_div_4_div_1_fa_icon_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "fa-icon", 8);
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r8.fasStarHalfAlt);
} }
function SkillComponent_div_0_div_4_div_1_fa_icon_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "fa-icon", 8);
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r9.farStar);
} }
function SkillComponent_div_0_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SkillComponent_div_0_div_4_div_1_fa_icon_1_Template, 1, 1, "fa-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SkillComponent_div_0_div_4_div_1_fa_icon_2_Template, 1, 1, "fa-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SkillComponent_div_0_div_4_div_1_fa_icon_3_Template, 1, 1, "fa-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const starNumber_r6 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", starNumber_r6 + 1 <= ctx_r5.model.score);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", starNumber_r6 + 0.5 == ctx_r5.model.score);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", starNumber_r6 >= ctx_r5.model.score);
} }
const _c0 = function () { return [0, 1, 2, 3, 4]; };
function SkillComponent_div_0_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SkillComponent_div_0_div_4_div_1_Template, 4, 3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "skill-score" + (ctx_r3.level === 1 ? " strong" : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
} }
function SkillComponent_div_0_div_5_app_skill_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-skill", 11);
} if (rf & 2) {
    const skill_r11 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("model", skill_r11)("level", ctx_r10.level + 1);
} }
function SkillComponent_div_0_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SkillComponent_div_0_div_5_app_skill_1_Template, 1, 2, "app-skill", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.model.skills);
} }
function SkillComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1)(1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SkillComponent_div_0_h3_2_Template, 2, 1, "h3", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SkillComponent_div_0_span_3_Template, 2, 1, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SkillComponent_div_0_div_4_Template, 2, 3, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SkillComponent_div_0_div_5_Template, 2, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "skill skill--" + ctx_r0.level);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.level);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.level);
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
SkillComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SkillComponent, selectors: [["app-skill"]], inputs: { model: "model", level: "level" }, decls: 1, vars: 1, consts: [[3, "ngClass", 4, "ngIf"], [3, "ngClass"], [1, "skill__content"], ["class", "skill__content__title", 4, "ngIf"], ["class", "skill__sub-skills", 4, "ngIf"], [1, "skill__content__title"], [4, "ngFor", "ngForOf"], [3, "icon", 4, "ngIf"], [3, "icon"], [1, "skill__sub-skills"], [3, "model", "level", 4, "ngFor", "ngForOf"], [3, "model", "level"]], template: function SkillComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SkillComponent_div_0_Template, 6, 5, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.model);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FaIconComponent, SkillComponent], styles: [".skill[_ngcontent-%COMP%]   .skill__content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n.skill.skill--0[_ngcontent-%COMP%]    > .skill__content[_ngcontent-%COMP%]    > .skill__content__title[_ngcontent-%COMP%] {\n  border-bottom: 1px solid;\n  border-bottom-color: var(--effect-color);\n  padding-bottom: 0.5rem;\n  width: 100%;\n}\n.skill.skill--1[_ngcontent-%COMP%]    > .skill__content[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.skill[_ngcontent-%COMP%]   .skill-score[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  margin-left: 1rem;\n  margin-right: 0.5rem;\n}\n.skill[_ngcontent-%COMP%]   .skill-score.strong[_ngcontent-%COMP%] {\n  color: var(--font-color--strong);\n}\n.skill[_ngcontent-%COMP%]   .skill__sub-skills[_ngcontent-%COMP%] {\n  padding-left: 0.5rem;\n}\n.skill.skill--0[_ngcontent-%COMP%]    > .skill__sub-skills[_ngcontent-%COMP%] {\n  display: grid;\n  grid-row-gap: 0.3rem;\n}\n.skill.skill--1[_ngcontent-%COMP%]    > .skill__sub-skills[_ngcontent-%COMP%] {\n  border-left: 1px solid;\n  border-left-color: var(--effect-color);\n  margin-right: 0;\n  padding-left: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNraWxsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFBSjtBQUdFO0VBQ0Usd0JBQUE7RUFDQSx3Q0FBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBQURKO0FBSUU7RUFDRSxpQkFBQTtBQUZKO0FBS0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FBSEo7QUFJSTtFQUNFLGdDQUFBO0FBRk47QUFNRTtFQUNFLG9CQUFBO0FBSko7QUFPRTtFQUNFLGFBQUE7RUFDQSxvQkFBQTtBQUxKO0FBUUU7RUFDRSxzQkFBQTtFQUNBLHNDQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0FBTkoiLCJmaWxlIjoic2tpbGwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2tpbGwge1xyXG4gIC5za2lsbF9fY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB9XHJcblxyXG4gICYuc2tpbGwtLTAgPiAuc2tpbGxfX2NvbnRlbnQgPiAuc2tpbGxfX2NvbnRlbnRfX3RpdGxlIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcclxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHZhcigtLWVmZmVjdC1jb2xvcik7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAmLnNraWxsLS0xID4gLnNraWxsX19jb250ZW50IHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuXHJcbiAgLnNraWxsLXNjb3JlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcclxuICAgICYuc3Ryb25nIHtcclxuICAgICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3ItLXN0cm9uZyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuc2tpbGxfX3N1Yi1za2lsbHMge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XHJcbiAgfVxyXG5cclxuICAmLnNraWxsLS0wID4gLnNraWxsX19zdWItc2tpbGxzIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXJvdy1nYXA6IDAuM3JlbTtcclxuICB9XHJcblxyXG4gICYuc2tpbGwtLTEgPiAuc2tpbGxfX3N1Yi1za2lsbHMge1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZDtcclxuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiB2YXIoLS1lZmZlY3QtY29sb3IpO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 3816:
/*!***********************************************************!*\
  !*** ./src/app/components/thematic/thematic.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThematicComponent": () => (/* binding */ ThematicComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 9306);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 9397);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _experience_experience_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../experience/experience.component */ 6228);
/* harmony import */ var _hobby_hobby_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hobby/hobby.component */ 9570);
/* harmony import */ var _skill_skill_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../skill/skill.component */ 1269);
/* harmony import */ var _formation_formations_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../formation/formations.component */ 572);









function ThematicComponent_div_0_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-formations", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("model", ctx_r1.model.formations);
} }
function ThematicComponent_div_0_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-experience", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const experience_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("model", experience_r6);
} }
function ThematicComponent_div_0_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ThematicComponent_div_0_div_6_div_1_Template, 2, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r2.model.experiences);
} }
function ThematicComponent_div_0_div_7_app_skill_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-skill", 15);
} if (rf & 2) {
    const skill_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("model", skill_r8);
} }
function ThematicComponent_div_0_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ThematicComponent_div_0_div_7_app_skill_1_Template, 1, 1, "app-skill", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r3.model.skills);
} }
function ThematicComponent_div_0_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-hobby", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("model", ctx_r4.model.hobbies);
} }
const _c0 = function (a1) { return ["fas", a1]; };
function ThematicComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 1)(1, "h2", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "fa-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, ThematicComponent_div_0_div_5_Template, 2, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, ThematicComponent_div_0_div_6_Template, 2, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, ThematicComponent_div_0_div_7_Template, 2, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, ThematicComponent_div_0_div_8_Template, 2, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](6, _c0, ctx_r0.iconName));
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
    constructor(library) {
        this.iconName = 'coffee';
        this._model = undefined;
        library.addIconPacks(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.fas);
    }
    UpdateIcon() {
        var _a, _b;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            if ((_a = this._model) === null || _a === void 0 ? void 0 : _a.icon) {
                const iconName = (_b = this._model) === null || _b === void 0 ? void 0 : _b.icon;
                if (iconName) {
                    console.log('UpdateIcon', { iconName });
                    this.iconName = iconName;
                }
            }
        });
    }
    get model() {
        return this._model;
    }
    set model(model) {
        this._model = model;
        this.UpdateIcon();
    }
}
ThematicComponent.ɵfac = function ThematicComponent_Factory(t) { return new (t || ThematicComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__.FaIconLibrary)); };
ThematicComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ThematicComponent, selectors: [["app-thematic"]], inputs: { model: "model" }, decls: 1, vars: 1, consts: [["class", "panel is-success mb-3", 4, "ngIf"], [1, "panel", "is-success", "mb-3"], [1, "panel-heading"], [1, "panel-heading__icon", 3, "icon"], [1, "panel-heading__title"], ["class", "panel-block", 4, "ngIf"], [4, "ngIf"], ["class", "main-skills", 4, "ngIf"], ["class", "is-full", 4, "ngIf"], [1, "panel-block"], [3, "model"], ["class", "panel-block", 4, "ngFor", "ngForOf"], [1, "column", "is-full", 3, "model"], [1, "main-skills"], ["class", "main-skill", 3, "model", 4, "ngFor", "ngForOf"], [1, "main-skill", 3, "model"], [1, "is-full"]], template: function ThematicComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, ThematicComponent_div_0_Template, 9, 8, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.model);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__.FaIconComponent, _experience_experience_component__WEBPACK_IMPORTED_MODULE_0__.ExperienceComponent, _hobby_hobby_component__WEBPACK_IMPORTED_MODULE_1__.HobbyComponent, _skill_skill_component__WEBPACK_IMPORTED_MODULE_2__.SkillComponent, _formation_formations_component__WEBPACK_IMPORTED_MODULE_3__.FormationsComponent], styles: [".panel[_ngcontent-%COMP%] {\n  background-color: var(--panel-background-color);\n}\n.panel[_ngcontent-%COMP%]   .panel-block[_ngcontent-%COMP%] {\n  color: var(--font-color);\n}\n.panel[_ngcontent-%COMP%]   .panel-heading__title[_ngcontent-%COMP%] {\n  padding-left: 1rem;\n}\n.main-skills[_ngcontent-%COMP%] {\n  padding: 1rem;\n  display: grid;\n  gap: 1.5rem;\n  grid-auto-flow: dense;\n  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));\n}\n.main-skills[_ngcontent-%COMP%]   .main-skill[_ngcontent-%COMP%]:nth-child(1) {\n  grid-row: span 3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRoZW1hdGljLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsK0NBQUE7QUFDRjtBQUNFO0VBQ0Usd0JBQUE7QUFDSjtBQUVFO0VBQ0Usa0JBQUE7QUFBSjtBQUlBO0VBQ0UsYUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSw0REFBQTtBQURGO0FBR0U7RUFDRSxnQkFBQTtBQURKIiwiZmlsZSI6InRoZW1hdGljLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhbmVsIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYW5lbC1iYWNrZ3JvdW5kLWNvbG9yKTtcclxuXHJcbiAgLnBhbmVsLWJsb2NrIHtcclxuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcclxuICB9XHJcblxyXG4gIC5wYW5lbC1oZWFkaW5nX190aXRsZSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XHJcbiAgfVxyXG59XHJcblxyXG4ubWFpbi1za2lsbHMge1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBnYXA6IDEuNXJlbTtcclxuICBncmlkLWF1dG8tZmxvdzogZGVuc2U7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMzUwcHgsIDFmcikpO1xyXG5cclxuICAubWFpbi1za2lsbDpudGgtY2hpbGQoMSl7IFxyXG4gICAgZ3JpZC1yb3c6IHNwYW4gMztcclxuICB9XHJcbn0iXX0= */"] });


/***/ }),

/***/ 872:
/*!**************************************************************!*\
  !*** ./src/app/pages/four-oh-four/four-oh-four.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FourOhFourComponent": () => (/* binding */ FourOhFourComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

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

/***/ 440:
/*!**********************************************!*\
  !*** ./src/app/pages/main/main.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainComponent": () => (/* binding */ MainComponent)
/* harmony export */ });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 9306);
/* harmony import */ var src_app_utils_languages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/utils/languages */ 8280);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/data.service */ 2468);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 9397);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/layout/layout.component */ 9520);
/* harmony import */ var _components_thematic_thematic_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/thematic/thematic.component */ 3816);









const _c0 = function (a1) { return ["fas", a1]; };
function MainComponent_div_4_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "fa-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const thematic_r2 = ctx_r5.$implicit;
    const index_r3 = ctx_r5.index;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", ".")("fragment", thematic_r2.uid);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](4, _c0, ctx_r4.iconNames[index_r3]));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](thematic_r2.title);
} }
function MainComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, MainComponent_div_4_a_1_Template, 4, 6, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const thematic_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", thematic_r2);
} }
function MainComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-thematic", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const thematic_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("id", thematic_r6 == null ? null : thematic_r6.uid);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("model", thematic_r6);
} }
class MainComponent {
    constructor(router, dataService, library) {
        this.router = router;
        this.dataService = dataService;
        this.data = [];
        this.iconNames = [];
        this.language = src_app_utils_languages__WEBPACK_IMPORTED_MODULE_0__.Languages.FRENCH;
        this.dataService.setLanguage(router.url.includes('en') ? src_app_utils_languages__WEBPACK_IMPORTED_MODULE_0__.Languages.ENGLISH : src_app_utils_languages__WEBPACK_IMPORTED_MODULE_0__.Languages.FRENCH);
        library.addIconPacks(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.fas);
        this._handleDataLoadedCallback = this.handleDataLoadedCallback.bind(this);
    }
    ngOnInit() {
        this.dataService.subscribeDataLoaded(this._handleDataLoadedCallback);
        this.handleDataLoadedCallback(this.dataService.getData());
        console.log('MainComponent-ngOnInit', { data: this.data });
    }
    ngOnDestroy() {
        this.dataService.unsubscribeDataLoaded(this._handleDataLoadedCallback);
    }
    handleDataLoadedCallback(data) {
        if (data) {
            this.data = data.thematics;
            console.log('MainComponent-handleThematicsChangeCallback', {
                data: this.data,
            });
            this.UpdateIcons();
        }
    }
    UpdateIcons() {
        if (this.data) {
            this.data.forEach((item, index) => {
                const iconName = item === null || item === void 0 ? void 0 : item.icon;
                console.log('UpdateIcon', { iconName });
                this.iconNames[index] = iconName !== null && iconName !== void 0 ? iconName : 'circle-exclamation';
            });
        }
    }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_data_service__WEBPACK_IMPORTED_MODULE_1__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__.FaIconLibrary)); };
MainComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], decls: 6, vars: 2, consts: [[1, "main", "container"], [1, "menu"], [1, "panel", "menu__sticky"], [4, "ngFor", "ngForOf"], ["class", "anchor", 4, "ngFor", "ngForOf"], ["class", "panel-block is-active", 3, "routerLink", "fragment", 4, "ngIf"], [1, "panel-block", "is-active", 3, "routerLink", "fragment"], [1, "menu__icon", 3, "icon"], [1, "menu__title"], [1, "anchor"], [3, "model"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-layout")(1, "div", 0)(2, "section", 1)(3, "article", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, MainComponent_div_4_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, MainComponent_div_5_Template, 2, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.data);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkWithHref, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__.FaIconComponent, _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__.LayoutComponent, _components_thematic_thematic_component__WEBPACK_IMPORTED_MODULE_3__.ThematicComponent], styles: ["article.panel[_ngcontent-%COMP%] {\n  background-color: var(--panel-background-color);\n}\narticle.panel[_ngcontent-%COMP%]   .panel-block[_ngcontent-%COMP%] {\n  color: var(--font-color);\n}\nfieldset[_ngcontent-%COMP%] {\n  margin: 8px;\n  border: 1px solid silver;\n  padding: 8px;\n  border-radius: 4px;\n}\nlegend[_ngcontent-%COMP%] {\n  padding: 2px;\n}\n.menu[_ngcontent-%COMP%] {\n  display: none;\n}\n.menu[_ngcontent-%COMP%]   .menu__sticky[_ngcontent-%COMP%]:hover   .menu__title[_ngcontent-%COMP%] {\n  display: inline;\n}\n.menu[_ngcontent-%COMP%]   .menu__sticky[_ngcontent-%COMP%]   .menu__title[_ngcontent-%COMP%] {\n  display: none;\n}\n.anchor[_ngcontent-%COMP%] {\n  margin-top: -85px;\n  padding-top: 85px;\n}\n@media only screen and (min-width: 768px) {\n  .menu[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .menu[_ngcontent-%COMP%]   .menu__sticky[_ngcontent-%COMP%] {\n    position: fixed;\n    z-index: 200;\n    top: 50%;\n    left: 0%;\n    transform: translateY(-50%);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwrQ0FBQTtBQUNGO0FBQ0U7RUFDRSx3QkFBQTtBQUNKO0FBR0E7RUFDRSxXQUFBO0VBQ0Esd0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFBRjtBQUdBO0VBQ0UsWUFBQTtBQUFGO0FBR0E7RUFDRSxhQUFBO0FBQUY7QUFHSTtFQUNFLGVBQUE7QUFETjtBQUdJO0VBQ0UsYUFBQTtBQUROO0FBTUE7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0FBSEY7QUFNQTtFQUNFO0lBQ0UsY0FBQTtFQUhGO0VBSUU7SUFDRSxlQUFBO0lBQ0EsWUFBQTtJQUNBLFFBQUE7SUFDQSxRQUFBO0lBQ0EsMkJBQUE7RUFGSjtBQUNGIiwiZmlsZSI6Im1haW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcnRpY2xlLnBhbmVsIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYW5lbC1iYWNrZ3JvdW5kLWNvbG9yKTtcclxuXHJcbiAgLnBhbmVsLWJsb2NrIHtcclxuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcclxuICB9XHJcbn1cclxuXHJcbmZpZWxkc2V0IHtcclxuICBtYXJnaW46IDhweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCBzaWx2ZXI7XHJcbiAgcGFkZGluZzogOHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5cclxubGVnZW5kIHtcclxuICBwYWRkaW5nOiAycHg7XHJcbn1cclxuXHJcbi5tZW51IHtcclxuICBkaXNwbGF5OiBub25lO1xyXG5cclxuICAubWVudV9fc3RpY2t5IHtcclxuICAgICY6aG92ZXIgLm1lbnVfX3RpdGxlIHtcclxuICAgICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgfVxyXG4gICAgLm1lbnVfX3RpdGxlIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5hbmNob3Ige1xyXG4gIG1hcmdpbi10b3A6IC04NXB4O1xyXG4gIHBhZGRpbmctdG9wOiA4NXB4O1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgLm1lbnUge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAubWVudV9fc3RpY2t5IHtcclxuICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICB6LWluZGV4OiAyMDA7XHJcbiAgICAgIHRvcDogNTAlO1xyXG4gICAgICBsZWZ0OiAwJTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 2468:
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataService": () => (/* binding */ DataService)
/* harmony export */ });
/* harmony import */ var _utils_languages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/languages */ 8280);
/* harmony import */ var src_assets_data_data_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/assets/data/data.json */ 6351);
/* harmony import */ var src_assets_data_image_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/assets/data/image.json */ 2549);
/* harmony import */ var src_assets_data_culture_en_gb_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/assets/data/culture.en-gb.json */ 3923);
/* harmony import */ var src_assets_data_culture_fr_fr_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/assets/data/culture.fr-fr.json */ 5835);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);






class DataService {
    constructor() {
        this._data = {
            french: Object.assign({}, src_assets_data_data_json__WEBPACK_IMPORTED_MODULE_1__),
            english: Object.assign({}, src_assets_data_data_json__WEBPACK_IMPORTED_MODULE_1__),
        };
        this._dataCallbacks = [];
        this._language = _utils_languages__WEBPACK_IMPORTED_MODULE_0__.Languages.FRENCH;
        console.log('DataService-ngOnInit');
        this.init();
    }
    getLanguage() {
        return this._language;
    }
    setLanguage(language) {
        if (this._language !== language) {
            this._language = language;
            this.raiseDataLoaded();
        }
    }
    getData() {
        return this._data[this._language];
    }
    getGeneral() {
        var _a;
        return (_a = this._data[this._language]) === null || _a === void 0 ? void 0 : _a.general;
    }
    getThematics() {
        var _a;
        return (_a = this._data[this._language]) === null || _a === void 0 ? void 0 : _a.thematics;
    }
    subscribeDataLoaded(callback) {
        if (callback) {
            this._dataCallbacks.push(callback);
        }
    }
    unsubscribeDataLoaded(callback) {
        if (callback) {
            this._dataCallbacks = this._dataCallbacks.filter((c) => c !== callback);
        }
    }
    raiseDataLoaded() {
        this._dataCallbacks.forEach((callback) => {
            if (callback) {
                callback(this._data[this._language]);
            }
        });
    }
    init() {
        console.log('init', { data: this._data });
        Object.values(_utils_languages__WEBPACK_IMPORTED_MODULE_0__.Languages).forEach((language) => {
            this.loadDataByLanguage(this._data[language], language);
        });
        console.log('init done', { data: this._data });
        this.raiseDataLoaded();
    }
    loadDataByLanguage(data, language) {
        const languageData = this.getLanguageData(language);
        if (!languageData) {
            console.error('loadDataByLanguage - No language data');
            return;
        }
        (0,_utils_languages__WEBPACK_IMPORTED_MODULE_0__.loadDataRecursively)(data, languageData, src_assets_data_image_json__WEBPACK_IMPORTED_MODULE_2__);
    }
    getLanguageData(language) {
        switch (language) {
            case _utils_languages__WEBPACK_IMPORTED_MODULE_0__.Languages.ENGLISH:
                return src_assets_data_culture_en_gb_json__WEBPACK_IMPORTED_MODULE_3__;
            case _utils_languages__WEBPACK_IMPORTED_MODULE_0__.Languages.FRENCH:
            default:
                return src_assets_data_culture_fr_fr_json__WEBPACK_IMPORTED_MODULE_4__;
        }
    }
}
DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(); };
DataService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: DataService, factory: DataService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8280:
/*!************************************!*\
  !*** ./src/app/utils/languages.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Languages": () => (/* binding */ Languages),
/* harmony export */   "loadDataRecursively": () => (/* binding */ loadDataRecursively)
/* harmony export */ });
const PREFIX_LANGUAGE_VALUE = 'text__';
const PREFIX_IMAGE_VALUE = 'image__';
var Languages;
(function (Languages) {
    Languages["FRENCH"] = "french";
    Languages["ENGLISH"] = "english";
})(Languages || (Languages = {}));
function loadDataRecursively(data, languageData, imageData) {
    var _a;
    if (Array.isArray(data)) {
        data.forEach((item) => {
            loadDataRecursively(item, languageData, imageData);
        });
    }
    else if (typeof data === 'object') {
        (_a = Object.entries(data)) === null || _a === void 0 ? void 0 : _a.forEach((entry) => {
            if (typeof entry[1] === 'string') {
                data[entry[0]] = loadStringData(entry[1], languageData, imageData);
            }
            else if (Array.isArray(entry[1]) || typeof entry[1] === 'object') {
                loadDataRecursively(entry[1], languageData, imageData);
            }
        });
    }
}
function loadStringData(data, languageData, imageData) {
    if (data.startsWith(PREFIX_LANGUAGE_VALUE)) {
        return languageData[data.substring(PREFIX_LANGUAGE_VALUE.length)];
    }
    else if (data.startsWith(PREFIX_IMAGE_VALUE)) {
        return imageData[data.substring(PREFIX_IMAGE_VALUE.length)];
    }
    else {
        return data;
    }
}


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
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

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 3923:
/*!********************************************!*\
  !*** ./src/assets/data/culture.en-gb.json ***!
  \********************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"firstName":"Jérémy","lastName":"Dufossé","about-me":"Test","page-title":"Curriculum vitae","title":"Développeur full stack","avatar":"Avatar","page-icon":"CV","language-french":"French","language-english":"English","experiences--title":"Expériences professionnelles","experiences--publicis-title":"Publicis / Epsilon-France","experiences--publicis-description":"Développeur informatique","experiences--publicis--digital-universities-title":"Digital Universities","experiences--publicis--digital-universities-description":"Développement de création de présentation vidéo personnalisable.","experiences--publicis--axa-title":"AxA","experiences--publicis--axa-description":"Maintenance évolutive des sites BonjourDocteur et Angel pour AxA.","experiences--publicis--la-poste-title":"La Poste","experiences--publicis--la-poste-description":"Développement d\'un outil de création de diaporama personnalisable.","experiences--publicis--orange-title":"Orange","experiences--publicis--orange-description":"Développeur au sein de l\'équipe du site web la boutique d\'Orange.","experiences--scotler-title":"Scotler","experiences--scotler-description":"Ingénieur recherche & développeemnt","experiences--scotler--micropross-title":"Mission chez MicroPross","experiences--scotler--micropross-description":"Maintenance applicative de leur produit en version tablette, notamment axé sur l\'amélioration de la fluidité des déplacements sur des graphiques à large données.","experiences--scotler--care-and-comfort-title":"Care-and-Comfort","experiences--scotler--care-and-comfort-description":"Maintenance applicative d\'une interface utilisateur pour promouvoir les services en chambres des patients hospitalisés.\\nL\'application est déployé sur tablette équipé d\'un bras articulé.","experiences--imabiotech-title":"ImaBiotech","experiences--imabiotech-description":"Entreprise d\'analyse scientifique par spectrométrie de masse.","cursus--title":"Cursus","cursus--engineer-title":"Polytech\'Lille, école d\'ingénieur","cursus--engineer-description":"Diplômé en tant qu\'ingénieur \\"Génie informatique et Statistique\\"","cursus--prepa-title":"Lycée Robespierre, prépa","cursus--prepa-description":"Maths sup / Maths spe","cursus--bac-title":"Baccalauréat","skills--title":"Compétences","skills--languages-title":"Langages","skills--csharp-title":"C#","skills--asp-title":"ASP .Net","skills--wpf-title":"WPF","skills--unity-title":"Unity","skills--javascript-title":"JavaScript","skills--reactjs-title":"ReactJS","skills--angular-title":"Angular","skills--jquery-title":"jQuery","skills--web-title":"Web","skills--html-title":"HTML","skills--css-title":"CSS","skills--sql-title":"SQL / mySQL","skills--os-title":"Système d\'exploitation","skills--windows-title":"Windows","skills--unix-title":"Unix","skills--methodology-title":"Méthodologie","skills--agile-title":"Agile","skills--kanban-title":"Kanban","skills--patterns-title":"Patterns","skills--mvc-title":"MVC","skills--mvp-title":"MVP","skills--mvvm-title":"MVVM","skills--linguistic-title":"Connaissances linguistiques","skills--french-title":"French","skills--english-title":"English","skills--spanish-title":"Espagnol","skills--source-code-title":"Source code manager","skills--tfs-title":"TFS","skills--git-title":"GIT","skills--software-title":"Software","skills--vs-title":"Visual Studio","skills--vsc-title":"Visual Studio Code","skills--ssms-title":"SQL Server Management Studio","skills--iis-title":"IIS","skills--postman-title":"Postman","hobbies--title":"Loisirs","hobbies--development":"Programmation","hobbies--movies":"Films","hobbies--music":"Musiques","hobbies--sport":"Sport","hobbies--videogames":"Jeux vidéos"}');

/***/ }),

/***/ 5835:
/*!********************************************!*\
  !*** ./src/assets/data/culture.fr-fr.json ***!
  \********************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"firstName":"Jérémy","lastName":"Dufossé","about-me":"Test","page-title":"Curriculum vitae","title":"Développeur full stack","avatar":"Avatar","page-icon":"CV","language-french":"Français","language-english":"Anglais","experiences--title":"Expériences professionnelles","experiences--publicis-title":"Publicis / Epsilon-France","experiences--publicis-description":"Développeur informatique","experiences--publicis--digital-universities-title":"Digital Universities","experiences--publicis--digital-universities-description":"Développement de création de présentation vidéo personnalisable.","experiences--publicis--axa-title":"AxA","experiences--publicis--axa-description":"Maintenance évolutive des sites BonjourDocteur et Angel pour AxA.","experiences--publicis--la-poste-title":"La Poste","experiences--publicis--la-poste-description":"Développement d\'un outil de création de diaporama personnalisable.","experiences--publicis--orange-title":"Orange","experiences--publicis--orange-description":"Développeur au sein de l\'équipe du site web la boutique d\'Orange.","experiences--scotler-title":"Scotler","experiences--scotler-description":"Ingénieur recherche & développeemnt","experiences--scotler--micropross-title":"Mission chez MicroPross","experiences--scotler--micropross-description":"Maintenance applicative de leur produit en version tablette, notamment axé sur l\'amélioration de la fluidité des déplacements sur des graphiques à large données.","experiences--scotler--care-and-comfort-title":"Care-and-Comfort","experiences--scotler--care-and-comfort-description":"Maintenance applicative d\'une interface utilisateur pour promouvoir les services en chambres des patients hospitalisés.\\nL\'application est déployé sur tablette équipé d\'un bras articulé.","experiences--imabiotech-title":"ImaBiotech","experiences--imabiotech-description":"Entreprise d\'analyse scientifique par spectrométrie de masse.","cursus--title":"Cursus","cursus--engineer-title":"Polytech\'Lille, école d\'ingénieur","cursus--engineer-description":"Diplômé en tant qu\'ingénieur \\"Génie informatique et Statistique\\"","cursus--prepa-title":"Lycée Robespierre, prépa","cursus--prepa-description":"Maths sup / Maths spe","cursus--bac-title":"Baccalauréat","skills--title":"Compétences","skills--languages-title":"Langages","skills--csharp-title":"C#","skills--asp-title":"ASP .Net","skills--wpf-title":"WPF","skills--unity-title":"Unity","skills--javascript-title":"JavaScript","skills--reactjs-title":"ReactJS","skills--angular-title":"Angular","skills--jquery-title":"jQuery","skills--web-title":"Web","skills--html-title":"HTML","skills--css-title":"CSS","skills--sql-title":"SQL / mySQL","skills--os-title":"Système d\'exploitation","skills--windows-title":"Windows","skills--unix-title":"Unix","skills--methodology-title":"Méthodologie","skills--agile-title":"Agile","skills--kanban-title":"Kanban","skills--patterns-title":"Patterns","skills--mvc-title":"MVC","skills--mvp-title":"MVP","skills--mvvm-title":"MVVM","skills--linguistic-title":"Connaissances linguistiques","skills--french-title":"Français","skills--english-title":"Anglais","skills--spanish-title":"Espagnol","skills--source-code-title":"Source code manager","skills--tfs-title":"TFS","skills--git-title":"GIT","skills--software-title":"Software","skills--vs-title":"Visual Studio","skills--vsc-title":"Visual Studio Code","skills--ssms-title":"SQL Server Management Studio","skills--iis-title":"IIS","skills--postman-title":"Postman","hobbies--title":"Loisirs","hobbies--development":"Programmation","hobbies--movies":"Films","hobbies--music":"Musiques","hobbies--sport":"Sport","hobbies--videogames":"Jeux vidéos"}');

/***/ }),

/***/ 6351:
/*!***********************************!*\
  !*** ./src/assets/data/data.json ***!
  \***********************************/
/***/ ((module) => {

module.exports = JSON.parse('{"general":{"firstName":"Jérémy","lastName":"Dufossé","avatar":{"alt":"text__avatar","url":"image__avatar"},"pageIcon":{"alt":"text__page-icon","url":"image__page-icon"},"pageTitle":"text__page-title","title":"text__title","about":"text__about-me","languages":[{"uid":"french","icon":{"alt":"fr","url":"image__french-flag"},"code":"fr-fr","name":"text__language-french"},{"uid":"english","icon":{"alt":"en","url":"image__british-flag"},"code":"en-gb","name":"text__language-english"}]},"thematics":[{"uid":"experiences","title":"text__experiences--title","icon":"person-digging","experiences":[{"uid":"publicis","title":"text__experiences--publicis-title","description":"text__experiences--publicis-description","from":"2016-07-18","missions":[{"uid":"publicis--digital-universities","title":"text__experiences--publicis--digital-universities-title","description":"text__experiences--publicis--digital-universities-description","skills":[]},{"uid":"publicis--axa","title":"text__experiences--publicis--axa-title","description":"text__experiences--publicis--axa-description"},{"uid":"publicis--la-poste","title":"text__experiences--publicis--la-poste-title","description":"text__experiences--publicis--la-poste-description"},{"uid":"publicis--orange","title":"text__experiences--publicis--orange-title","description":"text__experiences--publicis--orange-description","skills":[]}]},{"uid":"scotler","title":"text__experiences--scotler-title","description":"text__experiences--description","from":"2013-07-22","to":"2016-07-14","missions":[{"uid":"scotler--micropross","title":"text__experiences--scotler--micropross-title","description":"text__experiences--scotler--micropross-description","skills":[]},{"uid":"scotler--care-and-comfort","title":"text__experiences--scotler--care-and-comfort-title","description":"text__experiences--scotler--care-and-comfort-description","skills":[]}]},{"uid":"imabiotech","title":"text__experiences--imabiotech-title","description":"text__experiences--imabiotech-description","from":"2012-12-03","to":"2013-06-28","missions":[]}]},{"uid":"cursus","title":"text__cursus--title","icon":"graduation-cap","formations":[{"title":"text__cursus--title","description":"text__cursus--description","from":"2008","to":"2013"},{"title":"text__cursus--title","description":"text__cursus--prepa-description","from":"2006","to":"2008"},{"title":"text__cursus--bac-title","from":"2006","to":"2006"}]},{"uid":"skills","title":"text__skills--title","icon":"list-check","skills":[{"uid":"languages","title":"text__skills--languages-title","skills":[{"uid":"csharp","title":"text__skills--csharp-title","score":4.5,"skills":[{"uid":"asp.net","title":"text__skills--asp-title","score":0},{"uid":"wpf","title":"text__skills--wpf-title","score":3.5},{"uid":"unity","title":"text__skills--unity-title","score":2.5}]},{"uid":"javascript","title":"text__skills--javascript-title","score":4,"skills":[{"uid":"reactjs","title":"text__skills--reactjs-title","score":4},{"uid":"angular","title":"text__skills--angular-title","score":2.5},{"uid":"jquery","title":"text__skills--jquery-title","score":2.5}]},{"uid":"web","title":"text__skills--web-title","skills":[{"uid":"html","title":"text__skills--html-title","score":4},{"uid":"css","title":"text__skills--css-title","score":2.5}]},{"uid":"sql","title":"text__skills--sql-title","score":3.5}]},{"uid":"os","title":"text__skills--os-title","score":0,"skills":[{"uid":"windows","title":"text__skills--windows-title","score":3.5},{"uid":"unix","title":"text__skills--unix-title","score":1.5}]},{"uid":"methodology","title":"text__skills--methodology-title","score":0,"skills":[{"uid":"agile","title":"text__skills--agile-title","score":0},{"uid":"kanban","title":"text__skills--kanban-title","score":0}]},{"uid":"patterns","title":"text__skills--patterns-title","score":0,"skills":[{"uid":"mvc","title":"text__skills--mvc-title","score":0},{"uid":"mvp","title":"text__skills--mvp-title","score":0},{"uid":"mvvm","title":"text__skills--mvvm-title","score":0}]},{"uid":"linguistic","title":"text__skills--linguistic-title","score":0,"skills":[{"uid":"french","title":"text__skills--french-title","score":4.5},{"uid":"english","title":"text__skills--english-title","score":3.5},{"uid":"spanish","title":"text__skills--spanish-title","score":1}]},{"uid":"source-code","title":"text__skills--source-code-title","skills":[{"uid":"tfs","title":"text__skills--tfs-title"},{"uid":"git","title":"text__skills--git-title"}]},{"uid":"software","title":"text__skills--software-title","skills":[{"uid":"vs","title":"text__skills--vs-title"},{"uid":"vsc","title":"text__skills--vsc-title"},{"uid":"ssms","title":"text__skills--ssms-title"},{"uid":"iis","title":"text__skills--iis-title"},{"uid":"postman","title":"text__skills--postman-title"}]}]},{"uid":"hobbies","title":"text__hobbies--title","icon":"gamepad","hobbies":[{"title":"text__hobbies--sport","image":"image__hobbies--sport"},{"title":"text__hobbies--videogames","image":"image__hobbies--videogames"},{"title":"text__hobbies--music","image":"image__hobbies--music"},{"title":"text__hobbies--movies","image":"image__hobbies--movies"},{"title":"text__hobbies--development","image":"image__hobbies--development"}]}]}');

/***/ }),

/***/ 2549:
/*!************************************!*\
  !*** ./src/assets/data/image.json ***!
  \************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"page-icon":"/images/curriculum-vitae.png","avatar":"/images/test.png","french-flag":"/images/french-flag.jpg","british-flag":"/images/british-flag.jpg","hobbies--development":"/images/hobby-development.jpg","hobbies--movies":"/images/hobby-movies.jpg","hobbies--music":"/images/hobby-music.jpg","hobbies--sport":"/images/hobby-sport.jpg","hobbies--videogames":"/images/hobby-videogames.jpg"}');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map