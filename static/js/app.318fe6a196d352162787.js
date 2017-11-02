webpackJsonp([0],[
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(15),
  /* template */
  __webpack_require__(22),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 7 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(11),
  /* template */
  __webpack_require__(21),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 9 */,
/* 10 */,
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_homePage__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_homePage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_homePage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_newsPage__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_newsPage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_newsPage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_settingsPage__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_settingsPage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_settingsPage__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      currentPage: 'home',
      pages: ['home', 'news', 'settings'],
      openSide: false
    };
  },
  components: {
    home: __WEBPACK_IMPORTED_MODULE_0__components_homePage___default.a,
    news: __WEBPACK_IMPORTED_MODULE_1__components_newsPage___default.a,
    settings: __WEBPACK_IMPORTED_MODULE_2__components_settingsPage___default.a
  }
});

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toolbar__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toolbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__toolbar__);
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['toggleMenu'],
  components: { customToolbar: __WEBPACK_IMPORTED_MODULE_0__toolbar___default.a }
});

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toolbar__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toolbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__toolbar__);
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['toggleMenu'],
  components: { customToolbar: __WEBPACK_IMPORTED_MODULE_0__toolbar___default.a }
});

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toolbar__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toolbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__toolbar__);
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['toggleMenu'],
  components: { customToolbar: __WEBPACK_IMPORTED_MODULE_0__toolbar___default.a }
});

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['title', 'action']
});

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_onsenui__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_onsenui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_onsenui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_onsenui__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_onsenui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vue_onsenui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__App_vue__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__App_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__App_vue__);




// Onsen UI Styling and Icons
__webpack_require__(6);
__webpack_require__(7);



__WEBPACK_IMPORTED_MODULE_1_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_2_vue_onsenui___default.a);

new __WEBPACK_IMPORTED_MODULE_1_vue__["a" /* default */]({
  el: '#app',
  template: '<app></app>',
  components: { App: __WEBPACK_IMPORTED_MODULE_3__App_vue___default.a }
});

/***/ }),
/* 17 */,
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(12),
  /* template */
  __webpack_require__(25),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(13),
  /* template */
  __webpack_require__(24),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(14),
  /* template */
  __webpack_require__(23),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('v-ons-splitter', [_c('v-ons-splitter-side', {
    attrs: {
      "swipeable": "",
      "width": "150px",
      "collapse": "",
      "side": "left",
      "open": _vm.openSide
    },
    on: {
      "update:open": function($event) {
        _vm.openSide = $event
      }
    }
  }, [_c('v-ons-page', [_c('v-ons-list', [_c('v-ons-list-header', [_vm._v("Menu")]), _vm._v(" "), _vm._l((_vm.pages), function(page) {
    return _c('v-ons-list-item', {
      attrs: {
        "tappable": "",
        "modifier": "chevron"
      },
      on: {
        "click": function($event) {
          _vm.currentPage = page;
          _vm.openSide = false
        }
      }
    }, [_c('div', {
      staticClass: "center"
    }, [_vm._v(_vm._s(page))])])
  })], 2)], 1)], 1), _vm._v(" "), _c('v-ons-splitter-content', [_c(_vm.currentPage, {
    tag: "div",
    attrs: {
      "toggle-menu": function () { return _vm.openSide = !_vm.openSide; }
    }
  })])], 1)
},staticRenderFns: []}

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('v-ons-toolbar', [_c('div', {
    staticClass: "left"
  }, [_c('v-ons-toolbar-button', {
    on: {
      "click": _vm.action
    }
  }, [_c('v-ons-icon', {
    attrs: {
      "icon": "ion-navicon, material:md-menu"
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "center"
  }, [_vm._v(_vm._s(_vm.title))])])
},staticRenderFns: []}

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('v-ons-page', [_c('custom-toolbar', {
    attrs: {
      "title": 'Settings',
      "action": _vm.toggleMenu
    }
  }), _vm._v(" "), _c('p', {
    staticStyle: {
      "text-align": "center"
    }
  }, [_vm._v("\n    Change the settings.\n  ")])], 1)
},staticRenderFns: []}

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('v-ons-page', [_c('custom-toolbar', {
    attrs: {
      "title": 'News',
      "action": _vm.toggleMenu
    }
  }), _vm._v(" "), _c('p', {
    staticStyle: {
      "text-align": "center"
    }
  }, [_vm._v("\n    Some news here.\n  ")])], 1)
},staticRenderFns: []}

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('v-ons-page', [_c('custom-toolbar', {
    attrs: {
      "title": 'Home',
      "action": _vm.toggleMenu
    }
  }), _vm._v(" "), _c('p', {
    staticStyle: {
      "text-align": "center"
    }
  }, [_vm._v("\n    Welcome home.\n  ")])], 1)
},staticRenderFns: []}

/***/ })
],[16]);
//# sourceMappingURL=app.318fe6a196d352162787.js.map