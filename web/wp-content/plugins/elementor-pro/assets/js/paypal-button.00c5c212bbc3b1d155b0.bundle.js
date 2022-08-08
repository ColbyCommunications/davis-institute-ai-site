<<<<<<< HEAD:web/wp-content/plugins/elementor-pro/assets/js/paypal-button.00c5c212bbc3b1d155b0.bundle.js
/*! elementor-pro - v3.6.4 - 15-03-2022 */
"use strict";
=======
/*! elementor-pro - v3.4.1 - 01-09-2021 */
>>>>>>> 59e350e52aa59b5c4ddf95de67c26f79ffd0ba00:plugins/elementor-pro/assets/js/paypal-button.a8f3d929735cca75a572.bundle.js
(self["webpackChunkelementor_pro"] = self["webpackChunkelementor_pro"] || []).push([["paypal-button"],{

/***/ "../modules/payments/assets/js/frontend/handlers/paypal-button.js":
/*!************************************************************************!*\
  !*** ../modules/payments/assets/js/frontend/handlers/paypal-button.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

class PayPalHandler extends elementorModules.frontend.handlers.Base {
  getDefaultSettings() {
    return {
      selectors: {
        button: '.elementor-button.elementor-paypal-legacy',
        errors: '.elementor-message-danger'
      }
    };
  }

  getDefaultElements() {
    const settings = this.getSettings();
    return {
      wrapper: this.$element[0],
      button: this.$element[0].querySelector(settings.selectors.button),
      errors: this.$element[0].querySelectorAll(settings.selectors.errors)
    };
  }

  handleClick(event) {
    if (0 < this.elements.errors.length) {
      event.preventDefault();
      this.elements.errors.forEach(error => {
        error.classList.remove('elementor-hidden');
      });
    }
  }

  bindEvents() {
    this.elements.button.addEventListener('click', this.handleClick.bind(this));
  }

}

exports["default"] = PayPalHandler;

/***/ })

}]);
//# sourceMappingURL=paypal-button.00c5c212bbc3b1d155b0.bundle.js.map