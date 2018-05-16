(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["orders-orders-module-ngfactory"],{

/***/ "./src/app/orders/orders.module.ngfactory.js":
/*!***************************************************!*\
  !*** ./src/app/orders/orders.module.ngfactory.js ***!
  \***************************************************/
/*! exports provided: OrdersModuleNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersModuleNgFactory", function() { return OrdersModuleNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _orders_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./orders.module */ "./src/app/orders/orders.module.ts");
/* harmony import */ var _orders_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./orders.component.ngfactory */ "./src/app/orders/orders.component.ngfactory.js");
/* harmony import */ var _order_list_order_list_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./order-list/order-list.component.ngfactory */ "./src/app/orders/order-list/order-list.component.ngfactory.js");
/* harmony import */ var _order_detail_order_detail_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./order-detail/order-detail.component.ngfactory */ "./src/app/orders/order-detail/order-detail.component.ngfactory.js");
/* harmony import */ var _node_modules_angular_material_snack_bar_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../node_modules/@angular/material/snack-bar/typings/index.ngfactory */ "./node_modules/@angular/material/snack-bar/typings/index.ngfactory.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/core */ "./node_modules/@angular/flex-layout/esm5/core.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _orders_routing_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./orders-routing.module */ "./src/app/orders/orders-routing.module.ts");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/esm5/flex.es5.js");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/flex-layout/extended */ "./node_modules/@angular/flex-layout/esm5/extended.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm5/divider.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm5/badge.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/cdk/accordion */ "./node_modules/@angular/cdk/esm5/accordion.es5.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/cdk/text-field */ "./node_modules/@angular/cdk/esm5/text-field.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _shared_material_flex_module__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../shared/material-flex.module */ "./src/app/shared/material-flex.module.ts");
/* harmony import */ var _orders_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./orders.component */ "./src/app/orders/orders.component.ts");
/* harmony import */ var _order_list_order_list_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./order-list/order-list.component */ "./src/app/orders/order-list/order-list.component.ts");
/* harmony import */ var _order_detail_order_detail_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./order-detail/order-detail.component */ "./src/app/orders/order-detail/order-detail.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 









































var OrdersModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_orders_module__WEBPACK_IMPORTED_MODULE_1__["OrdersModule"], [], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_orders_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["OrderComponentNgFactory"], _order_list_order_list_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["OrderListComponentNgFactory"], _order_detail_order_detail_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["OrderDetailComponentNgFactory"], _node_modules_angular_material_snack_bar_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["MatSnackBarContainerNgFactory"], _node_modules_angular_material_snack_bar_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["SimpleSnackBarNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["ObservableMedia"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["MediaService"], [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["BreakPointRegistry"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["MatchMedia"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_BOOTSTRAP_LISTENER"], function (p0_0, p0_1) { return [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["removeStyles"](p0_0, p0_1)]; }, [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconRegistry"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["ICON_REGISTRY_PROVIDER_FACTORY"], [[3, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconRegistry"]], [2, _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"]], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["DomSanitizer"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["ErrorStateMatcher"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["ErrorStateMatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__["Overlay"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__["Overlay"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__["ScrollStrategyOptions"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__["OverlayContainer"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__["OverlayPositionBuilder"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__["OverlayKeyboardDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__["Directionality"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__["MatSnackBar"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__["MatSnackBar"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__["Overlay"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_15__["LiveAnnouncer"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_16__["BreakpointObserver"], [3, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__["MatSnackBar"]], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__["MAT_SNACK_BAR_DEFAULT_OPTIONS"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_17__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_17__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_17__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_17__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _orders_routing_module__WEBPACK_IMPORTED_MODULE_18__["OrdersRoutingModule"], _orders_routing_module__WEBPACK_IMPORTED_MODULE_18__["OrdersRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["CoreModule"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["CoreModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__["FlexModule"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__["FlexModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_20__["ExtendedModule"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_20__["ExtendedModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_21__["FlexLayoutModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_21__["FlexLayoutModule"], [[2, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["SERVER_TOKEN"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatCommonModule"], [[2, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MATERIAL_SANITY_CHECKS"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_22__["MatToolbarModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_22__["MatToolbarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_23__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_23__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_24__["ScrollDispatchModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_24__["ScrollDispatchModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_25__["MatSidenavModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_25__["MatSidenavModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_card__WEBPACK_IMPORTED_MODULE_26__["MatCardModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_26__["MatCardModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatRippleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_button__WEBPACK_IMPORTED_MODULE_27__["MatButtonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_27__["MatButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatLineModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatPseudoCheckboxModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatPseudoCheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_divider__WEBPACK_IMPORTED_MODULE_28__["MatDividerModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_28__["MatDividerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_list__WEBPACK_IMPORTED_MODULE_29__["MatListModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_29__["MatListModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_badge__WEBPACK_IMPORTED_MODULE_30__["MatBadgeModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_30__["MatBadgeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_31__["MatFormFieldModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_31__["MatFormFieldModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_32__["CdkAccordionModule"], _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_32__["CdkAccordionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_33__["PortalModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_33__["PortalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_34__["MatExpansionModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_34__["MatExpansionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_35__["TextFieldModule"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_35__["TextFieldModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_input__WEBPACK_IMPORTED_MODULE_36__["MatInputModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_36__["MatInputModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__["OverlayModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__["OverlayModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__["MatSnackBarModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__["MatSnackBarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shared_material_flex_module__WEBPACK_IMPORTED_MODULE_37__["MaterialFlexModule"], _shared_material_flex_module__WEBPACK_IMPORTED_MODULE_37__["MaterialFlexModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _orders_module__WEBPACK_IMPORTED_MODULE_1__["OrdersModule"], _orders_module__WEBPACK_IMPORTED_MODULE_1__["OrdersModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_17__["ROUTES"], function () { return [[{ path: "", component: _orders_component__WEBPACK_IMPORTED_MODULE_38__["OrderComponent"], children: [{ path: "list", component: _order_list_order_list_component__WEBPACK_IMPORTED_MODULE_39__["OrderListComponent"] }, { path: ":id", component: _order_detail_order_detail_component__WEBPACK_IMPORTED_MODULE_40__["OrderDetailComponent"] }] }]]; }, [])]); });



/***/ })

}]);
//# sourceMappingURL=orders-orders-module-ngfactory.js.map