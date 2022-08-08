<<<<<<< HEAD:web/wp-content/plugins/elementor-pro/assets/js/social.a44d2048d9b1fcb6c560.bundle.js
/*! elementor-pro - v3.6.4 - 15-03-2022 */
"use strict";
=======
/*! elementor-pro - v3.4.1 - 01-09-2021 */
>>>>>>> 59e350e52aa59b5c4ddf95de67c26f79ffd0ba00:plugins/elementor-pro/assets/js/social.b17f5f1767e41333a1dc.bundle.js
(self["webpackChunkelementor_pro"] = self["webpackChunkelementor_pro"] || []).push([["social"],{

/***/ "../modules/social/assets/js/frontend/handlers/facebook.js":
/*!*****************************************************************!*\
  !*** ../modules/social/assets/js/frontend/handlers/facebook.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

class FacebookHandler extends elementorModules.frontend.handlers.Base {
  getConfig() {
    return elementorProFrontend.config.facebook_sdk;
  }

  setConfig(prop, value) {
    elementorProFrontend.config.facebook_sdk[prop] = value;
  }

  parse() {
    // On FB SDK is loaded, parse current element
    FB.XFBML.parse(this.$element[0]);
  }

  loadSDK() {
    const config = this.getConfig(); // Preventing from ajax request to be sent multiple times when loading multiple widgets

    if (config.isLoading || config.isLoaded) {
      return;
    }

    this.setConfig('isLoading', true);
    jQuery.ajax({
      url: 'https://connect.facebook.net/' + config.lang + '/sdk.js',
      dataType: 'script',
      cache: true,
      success: () => {
        FB.init({
          appId: config.app_id,
          version: 'v2.10',
          xfbml: false
        });
        this.setConfig('isLoaded', true);
        this.setConfig('isLoading', false);
        elementorFrontend.elements.$document.trigger('fb:sdk:loaded');
      }
    });
  }

  onInit() {
    super.onInit(...arguments);
    this.loadSDK();
    const config = this.getConfig();

    if (config.isLoaded) {
      this.parse();
    } else {
      elementorFrontend.elements.$document.on('fb:sdk:loaded', () => this.parse());
    }
  }

}

exports["default"] = FacebookHandler;

/***/ })

}]);
//# sourceMappingURL=social.a44d2048d9b1fcb6c560.bundle.js.map