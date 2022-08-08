<<<<<<< HEAD:web/wp-content/plugins/elementor-pro/assets/js/code-highlight.e520eaa79dbee1cfac29.bundle.js
/*! elementor-pro - v3.6.4 - 15-03-2022 */
"use strict";
=======
/*! elementor-pro - v3.4.1 - 01-09-2021 */
>>>>>>> 59e350e52aa59b5c4ddf95de67c26f79ffd0ba00:plugins/elementor-pro/assets/js/code-highlight.cc6c8eb49e0aff6d419e.bundle.js
(self["webpackChunkelementor_pro"] = self["webpackChunkelementor_pro"] || []).push([["code-highlight"],{

/***/ "../modules/code-highlight/assets/js/frontend/handler.js":
/*!***************************************************************!*\
  !*** ../modules/code-highlight/assets/js/frontend/handler.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

class codeHighlightHandler extends elementorModules.frontend.handlers.Base {
  onInit() {
    super.onInit(...arguments);
    Prism.highlightAllUnder(this.$element[0], false);
  }

  onElementChange() {
    // Handle the changes for "Word Wrap" feature
    Prism.highlightAllUnder(this.$element[0], false);
  }

}

exports["default"] = codeHighlightHandler;

/***/ })

}]);
//# sourceMappingURL=code-highlight.e520eaa79dbee1cfac29.bundle.js.map