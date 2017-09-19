module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/skills/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+5df":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCTextfieldFoundation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__("PZSP");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__("gjgI");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */




var MDCTextfieldFoundation = function (_MDCFoundation) {
  _inherits(MDCTextfieldFoundation, _MDCFoundation);

  _createClass(MDCTextfieldFoundation, null, [{
    key: 'cssClasses',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* cssClasses */];
    }
  }, {
    key: 'strings',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* strings */];
    }
  }, {
    key: 'defaultAdapter',
    get: function get() {
      return {
        addClass: function addClass() /* className: string */{},
        removeClass: function removeClass() /* className: string */{},
        addClassToLabel: function addClassToLabel() /* className: string */{},
        removeClassFromLabel: function removeClassFromLabel() /* className: string */{},
        addClassToHelptext: function addClassToHelptext() /* className: string */{},
        removeClassFromHelptext: function removeClassFromHelptext() /* className: string */{},
        helptextHasClass: function helptextHasClass() {
          return (/* className: string */ /* boolean */false
          );
        },
        registerInputFocusHandler: function registerInputFocusHandler() /* handler: EventListener */{},
        deregisterInputFocusHandler: function deregisterInputFocusHandler() /* handler: EventListener */{},
        registerInputBlurHandler: function registerInputBlurHandler() /* handler: EventListener */{},
        deregisterInputBlurHandler: function deregisterInputBlurHandler() /* handler: EventListener */{},
        registerInputInputHandler: function registerInputInputHandler() /* handler: EventListener */{},
        deregisterInputInputHandler: function deregisterInputInputHandler() /* handler: EventListener */{},
        registerInputKeydownHandler: function registerInputKeydownHandler() /* handler: EventListener */{},
        deregisterInputKeydownHandler: function deregisterInputKeydownHandler() /* handler: EventListener */{},
        setHelptextAttr: function setHelptextAttr() /* name: string, value: string */{},
        removeHelptextAttr: function removeHelptextAttr() /* name: string */{},
        getNativeInput: function getNativeInput() {
          return (/* HTMLInputElement */{}
          );
        }
      };
    }
  }]);

  function MDCTextfieldFoundation() {
    var adapter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, MDCTextfieldFoundation);

    var _this = _possibleConstructorReturn(this, _MDCFoundation.call(this, _extends(MDCTextfieldFoundation.defaultAdapter, adapter)));

    _this.receivedUserInput_ = false;
    _this.inputFocusHandler_ = function () {
      return _this.activateFocus_();
    };
    _this.inputBlurHandler_ = function () {
      return _this.deactivateFocus_();
    };
    _this.inputInputHandler_ = function () {
      return _this.autoCompleteFocus_();
    };
    _this.inputKeydownHandler_ = function () {
      return _this.receivedUserInput_ = true;
    };
    _this.useCustomValidityChecking_ = false;
    return _this;
  }

  MDCTextfieldFoundation.prototype.init = function init() {
    this.adapter_.addClass(MDCTextfieldFoundation.cssClasses.UPGRADED);
    this.adapter_.registerInputFocusHandler(this.inputFocusHandler_);
    this.adapter_.registerInputBlurHandler(this.inputBlurHandler_);
    this.adapter_.registerInputInputHandler(this.inputInputHandler_);
    this.adapter_.registerInputKeydownHandler(this.inputKeydownHandler_);

    // Ensure label does not collide with any pre-filled value.
    if (this.getNativeInput_().value) {
      this.adapter_.addClassToLabel(MDCTextfieldFoundation.cssClasses.LABEL_FLOAT_ABOVE);
    }
  };

  MDCTextfieldFoundation.prototype.destroy = function destroy() {
    this.adapter_.removeClass(MDCTextfieldFoundation.cssClasses.UPGRADED);
    this.adapter_.deregisterInputFocusHandler(this.inputFocusHandler_);
    this.adapter_.deregisterInputBlurHandler(this.inputBlurHandler_);
    this.adapter_.deregisterInputInputHandler(this.inputInputHandler_);
    this.adapter_.deregisterInputKeydownHandler(this.inputKeydownHandler_);
  };

  MDCTextfieldFoundation.prototype.activateFocus_ = function activateFocus_() {
    var _MDCTextfieldFoundati = MDCTextfieldFoundation.cssClasses,
        FOCUSED = _MDCTextfieldFoundati.FOCUSED,
        LABEL_FLOAT_ABOVE = _MDCTextfieldFoundati.LABEL_FLOAT_ABOVE;

    this.adapter_.addClass(FOCUSED);
    this.adapter_.addClassToLabel(LABEL_FLOAT_ABOVE);
    this.showHelptext_();
  };

  MDCTextfieldFoundation.prototype.autoCompleteFocus_ = function autoCompleteFocus_() {
    if (!this.receivedUserInput_) {
      this.activateFocus_();
    }
  };

  MDCTextfieldFoundation.prototype.showHelptext_ = function showHelptext_() {
    var ARIA_HIDDEN = MDCTextfieldFoundation.strings.ARIA_HIDDEN;

    this.adapter_.removeHelptextAttr(ARIA_HIDDEN);
  };

  MDCTextfieldFoundation.prototype.deactivateFocus_ = function deactivateFocus_() {
    var _MDCTextfieldFoundati2 = MDCTextfieldFoundation.cssClasses,
        FOCUSED = _MDCTextfieldFoundati2.FOCUSED,
        LABEL_FLOAT_ABOVE = _MDCTextfieldFoundati2.LABEL_FLOAT_ABOVE;

    var input = this.getNativeInput_();

    this.adapter_.removeClass(FOCUSED);
    if (!input.value && !this.isBadInput_()) {
      this.adapter_.removeClassFromLabel(LABEL_FLOAT_ABOVE);
      this.receivedUserInput_ = false;
    }
    if (!this.useCustomValidityChecking_) {
      this.changeValidity_(input.checkValidity());
    }
  };

  MDCTextfieldFoundation.prototype.changeValidity_ = function changeValidity_(isValid) {
    var INVALID = MDCTextfieldFoundation.cssClasses.INVALID;

    if (isValid) {
      this.adapter_.removeClass(INVALID);
    } else {
      this.adapter_.addClass(INVALID);
    }
    this.updateHelptext_(isValid);
  };

  MDCTextfieldFoundation.prototype.updateHelptext_ = function updateHelptext_(isValid) {
    var _MDCTextfieldFoundati3 = MDCTextfieldFoundation.cssClasses,
        HELPTEXT_PERSISTENT = _MDCTextfieldFoundati3.HELPTEXT_PERSISTENT,
        HELPTEXT_VALIDATION_MSG = _MDCTextfieldFoundati3.HELPTEXT_VALIDATION_MSG;
    var ROLE = MDCTextfieldFoundation.strings.ROLE;

    var helptextIsPersistent = this.adapter_.helptextHasClass(HELPTEXT_PERSISTENT);
    var helptextIsValidationMsg = this.adapter_.helptextHasClass(HELPTEXT_VALIDATION_MSG);
    var validationMsgNeedsDisplay = helptextIsValidationMsg && !isValid;

    if (validationMsgNeedsDisplay) {
      this.adapter_.setHelptextAttr(ROLE, 'alert');
    } else {
      this.adapter_.removeHelptextAttr(ROLE);
    }

    if (helptextIsPersistent || validationMsgNeedsDisplay) {
      return;
    }
    this.hideHelptext_();
  };

  MDCTextfieldFoundation.prototype.hideHelptext_ = function hideHelptext_() {
    var ARIA_HIDDEN = MDCTextfieldFoundation.strings.ARIA_HIDDEN;

    this.adapter_.setHelptextAttr(ARIA_HIDDEN, 'true');
  };

  MDCTextfieldFoundation.prototype.isBadInput_ = function isBadInput_() {
    var input = this.getNativeInput_();
    return input.validity ? input.validity.badInput : input.badInput;
  };

  MDCTextfieldFoundation.prototype.isDisabled = function isDisabled() {
    return this.getNativeInput_().disabled;
  };

  MDCTextfieldFoundation.prototype.setDisabled = function setDisabled(disabled) {
    var DISABLED = MDCTextfieldFoundation.cssClasses.DISABLED;

    this.getNativeInput_().disabled = disabled;
    if (disabled) {
      this.adapter_.addClass(DISABLED);
    } else {
      this.adapter_.removeClass(DISABLED);
    }
  };

  MDCTextfieldFoundation.prototype.getNativeInput_ = function getNativeInput_() {
    return this.adapter_.getNativeInput() || {
      checkValidity: function checkValidity() {
        return true;
      },
      value: '',
      disabled: false,
      badInput: false
    };
  };

  MDCTextfieldFoundation.prototype.setValid = function setValid(isValid) {
    this.useCustomValidityChecking_ = true;
    this.changeValidity_(isValid);
  };

  return MDCTextfieldFoundation;
}(__WEBPACK_IMPORTED_MODULE_0__material_base__["b" /* MDCFoundation */]);



/***/ }),

/***/ "+O1K":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return strings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return numbers; });
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/** @enum {string} */
var cssClasses = {
  ROOT: 'mdc-simple-menu',
  OPEN: 'mdc-simple-menu--open',
  ANIMATING: 'mdc-simple-menu--animating',
  TOP_RIGHT: 'mdc-simple-menu--open-from-top-right',
  BOTTOM_LEFT: 'mdc-simple-menu--open-from-bottom-left',
  BOTTOM_RIGHT: 'mdc-simple-menu--open-from-bottom-right'
};

/** @enum {string} */
var strings = {
  ITEMS_SELECTOR: '.mdc-simple-menu__items',
  SELECTED_EVENT: 'MDCSimpleMenu:selected',
  CANCEL_EVENT: 'MDCSimpleMenu:cancel',
  ARIA_DISABLED_ATTR: 'aria-disabled'
};

/** @enum {number} */
var numbers = {
  // Amount of time to wait before triggering a selected event on the menu. Note that this time
  // will most likely be bumped up once interactive lists are supported to allow for the ripple to
  // animate before closing the menu
  SELECTED_TRIGGER_DELAY: 50,
  // Total duration of the menu animation.
  TRANSITION_DURATION_MS: 300,
  // The menu starts its open animation with the X axis at this time value (0 - 1).
  TRANSITION_SCALE_ADJUSTMENT_X: 0.5,
  // The time value the menu waits until the animation starts on the Y axis (0 - 1).
  TRANSITION_SCALE_ADJUSTMENT_Y: 0.2,
  // The cubic bezier control points for the animation (cubic-bezier(0, 0, 0.2, 1)).
  TRANSITION_X1: 0,
  TRANSITION_Y1: 0,
  TRANSITION_X2: 0.2,
  TRANSITION_Y2: 1
};

/***/ }),

/***/ "/FYG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCDialogFoundation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__("PZSP");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__("ZmY6");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */




var MDCDialogFoundation = function (_MDCFoundation) {
  _inherits(MDCDialogFoundation, _MDCFoundation);

  _createClass(MDCDialogFoundation, null, [{
    key: 'cssClasses',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */];
    }
  }, {
    key: 'strings',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* strings */];
    }
  }, {
    key: 'defaultAdapter',
    get: function get() {
      return {
        addClass: function addClass() /* className: string */{},
        removeClass: function removeClass() /* className: string */{},
        addBodyClass: function addBodyClass() /* className: string */{},
        removeBodyClass: function removeBodyClass() /* className: string */{},
        eventTargetHasClass: function eventTargetHasClass() {
          return (/* target: EventTarget, className: string */ /* boolean */false
          );
        },
        registerInteractionHandler: function registerInteractionHandler() /* evt: string, handler: EventListener */{},
        deregisterInteractionHandler: function deregisterInteractionHandler() /* evt: string, handler: EventListener */{},
        registerSurfaceInteractionHandler: function registerSurfaceInteractionHandler() /* evt: string, handler: EventListener */{},
        deregisterSurfaceInteractionHandler: function deregisterSurfaceInteractionHandler() /* evt: string, handler: EventListener */{},
        registerDocumentKeydownHandler: function registerDocumentKeydownHandler() /* handler: EventListener */{},
        deregisterDocumentKeydownHandler: function deregisterDocumentKeydownHandler() /* handler: EventListener */{},
        registerTransitionEndHandler: function registerTransitionEndHandler() /* handler: EventListener */{},
        deregisterTransitionEndHandler: function deregisterTransitionEndHandler() /* handler: EventListener */{},
        notifyAccept: function notifyAccept() {},
        notifyCancel: function notifyCancel() {},
        trapFocusOnSurface: function trapFocusOnSurface() {},
        untrapFocusOnSurface: function untrapFocusOnSurface() {},
        isDialog: function isDialog() {
          return (/* el: Element */ /* boolean */false
          );
        },
        layoutFooterRipples: function layoutFooterRipples() {}
      };
    }
  }]);

  function MDCDialogFoundation(adapter) {
    _classCallCheck(this, MDCDialogFoundation);

    var _this = _possibleConstructorReturn(this, _MDCFoundation.call(this, _extends(MDCDialogFoundation.defaultAdapter, adapter)));

    _this.isOpen_ = false;
    _this.componentClickHandler_ = function (evt) {
      if (_this.adapter_.eventTargetHasClass(evt.target, __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */].BACKDROP)) {
        _this.cancel(true);
      }
    };
    _this.dialogClickHandler_ = function (evt) {
      return _this.handleDialogClick_(evt);
    };
    _this.documentKeydownHandler_ = function (evt) {
      if (evt.key && evt.key === 'Escape' || evt.keyCode === 27) {
        _this.cancel(true);
      }
    };
    _this.transitionEndHandler_ = function (evt) {
      return _this.handleTransitionEnd_(evt);
    };
    return _this;
  }

  MDCDialogFoundation.prototype.destroy = function destroy() {
    // Ensure that dialog is cleaned up when destroyed
    if (this.isOpen_) {
      this.adapter_.deregisterSurfaceInteractionHandler('click', this.dialogClickHandler_);
      this.adapter_.deregisterDocumentKeydownHandler(this.documentKeydownHandler_);
      this.adapter_.deregisterInteractionHandler('click', this.componentClickHandler_);
      this.adapter_.untrapFocusOnSurface();
      this.adapter_.deregisterTransitionEndHandler(this.transitionEndHandler_);
      this.adapter_.removeClass(MDCDialogFoundation.cssClasses.ANIMATING);
      this.adapter_.removeClass(MDCDialogFoundation.cssClasses.OPEN);
      this.enableScroll_();
    }
  };

  MDCDialogFoundation.prototype.open = function open() {
    this.isOpen_ = true;
    this.disableScroll_();
    this.adapter_.registerDocumentKeydownHandler(this.documentKeydownHandler_);
    this.adapter_.registerSurfaceInteractionHandler('click', this.dialogClickHandler_);
    this.adapter_.registerInteractionHandler('click', this.componentClickHandler_);
    this.adapter_.registerTransitionEndHandler(this.transitionEndHandler_);
    this.adapter_.addClass(MDCDialogFoundation.cssClasses.ANIMATING);
    this.adapter_.addClass(MDCDialogFoundation.cssClasses.OPEN);
  };

  MDCDialogFoundation.prototype.close = function close() {
    this.isOpen_ = false;
    this.adapter_.deregisterSurfaceInteractionHandler('click', this.dialogClickHandler_);
    this.adapter_.deregisterDocumentKeydownHandler(this.documentKeydownHandler_);
    this.adapter_.deregisterInteractionHandler('click', this.componentClickHandler_);
    this.adapter_.untrapFocusOnSurface();
    this.adapter_.registerTransitionEndHandler(this.transitionEndHandler_);
    this.adapter_.addClass(MDCDialogFoundation.cssClasses.ANIMATING);
    this.adapter_.removeClass(MDCDialogFoundation.cssClasses.OPEN);
  };

  MDCDialogFoundation.prototype.isOpen = function isOpen() {
    return this.isOpen_;
  };

  MDCDialogFoundation.prototype.accept = function accept(shouldNotify) {
    if (shouldNotify) {
      this.adapter_.notifyAccept();
    }

    this.close();
  };

  MDCDialogFoundation.prototype.cancel = function cancel(shouldNotify) {
    if (shouldNotify) {
      this.adapter_.notifyCancel();
    }

    this.close();
  };

  MDCDialogFoundation.prototype.handleDialogClick_ = function handleDialogClick_(evt) {
    var target = evt.target;

    if (this.adapter_.eventTargetHasClass(target, __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */].ACCEPT_BTN)) {
      this.accept(true);
    } else if (this.adapter_.eventTargetHasClass(target, __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */].CANCEL_BTN)) {
      this.cancel(true);
    }
  };

  MDCDialogFoundation.prototype.handleTransitionEnd_ = function handleTransitionEnd_(evt) {
    if (this.adapter_.isDialog(evt.target)) {
      this.adapter_.deregisterTransitionEndHandler(this.transitionEndHandler_);
      this.adapter_.removeClass(MDCDialogFoundation.cssClasses.ANIMATING);
      if (this.isOpen_) {
        this.adapter_.trapFocusOnSurface();
        this.adapter_.layoutFooterRipples();
      } else {
        this.enableScroll_();
      };
    };
  };

  MDCDialogFoundation.prototype.disableScroll_ = function disableScroll_() {
    this.adapter_.addBodyClass(__WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */].SCROLL_LOCK);
  };

  MDCDialogFoundation.prototype.enableScroll_ = function enableScroll_() {
    this.adapter_.removeBodyClass(__WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */].SCROLL_LOCK);
  };

  return MDCDialogFoundation;
}(__WEBPACK_IMPORTED_MODULE_0__material_base__["b" /* MDCFoundation */]);



/***/ }),

/***/ 0:
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "0Orf":
/***/ (function(module, exports) {

module.exports = function (el) {
  var elementDocument = el.ownerDocument;
  var basicTabbables = [];
  var orderedTabbables = [];

  // A node is "available" if
  // - it's computed style
  var isUnavailable = createIsUnavailable(elementDocument);

  var candidateSelectors = ['input', 'select', 'a[href]', 'textarea', 'button', '[tabindex]'];

  var candidates = el.querySelectorAll(candidateSelectors);

  var candidate, candidateIndex;
  for (var i = 0, l = candidates.length; i < l; i++) {
    candidate = candidates[i];
    candidateIndex = parseInt(candidate.getAttribute('tabindex'), 10) || candidate.tabIndex;

    if (candidateIndex < 0 || candidate.tagName === 'INPUT' && candidate.type === 'hidden' || candidate.disabled || isUnavailable(candidate, elementDocument)) {
      continue;
    }

    if (candidateIndex === 0) {
      basicTabbables.push(candidate);
    } else {
      orderedTabbables.push({
        index: i,
        tabIndex: candidateIndex,
        node: candidate
      });
    }
  }

  var tabbableNodes = orderedTabbables.sort(function (a, b) {
    return a.tabIndex === b.tabIndex ? a.index - b.index : a.tabIndex - b.tabIndex;
  }).map(function (a) {
    return a.node;
  });

  Array.prototype.push.apply(tabbableNodes, basicTabbables);

  return tabbableNodes;
};

function createIsUnavailable(elementDocument) {
  // Node cache must be refreshed on every check, in case
  // the content of the element has changed
  var isOffCache = [];

  // "off" means `display: none;`, as opposed to "hidden",
  // which means `visibility: hidden;`. getComputedStyle
  // accurately reflects visiblity in context but not
  // "off" state, so we need to recursively check parents.

  function isOff(node, nodeComputedStyle) {
    if (node === elementDocument.documentElement) return false;

    // Find the cached node (Array.prototype.find not available in IE9)
    for (var i = 0, length = isOffCache.length; i < length; i++) {
      if (isOffCache[i][0] === node) return isOffCache[i][1];
    }

    nodeComputedStyle = nodeComputedStyle || elementDocument.defaultView.getComputedStyle(node);

    var result = false;

    if (nodeComputedStyle.display === 'none') {
      result = true;
    } else if (node.parentNode) {
      result = isOff(node.parentNode);
    }

    isOffCache.push([node, result]);

    return result;
  }

  return function isUnavailable(node) {
    if (node === elementDocument.documentElement) return false;

    var computedStyle = elementDocument.defaultView.getComputedStyle(node);

    if (isOff(node, computedStyle)) return true;

    return computedStyle.visibility === 'hidden';
  };
}

/***/ }),

/***/ "0gCF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("EBst");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MaterialComponent__ = __webpack_require__("jM6C");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_select___ = __webpack_require__("Mov4");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__List__ = __webpack_require__("u5aD");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};






var Select = function (_MaterialComponent) {
  _inherits(Select, _MaterialComponent);

  function Select() {
    _classCallCheck(this, Select);

    var _this = _possibleConstructorReturn(this, _MaterialComponent.call(this));

    _this.componentName = "select";
    _this._mdcProps = ["disabled"];
    _this._changed = _this._changed.bind(_this);
    return _this;
  }

  Select.prototype._changed = function _changed(e) {
    e = e || {};
    e.selectedIndex = e.selectedIndex || this.MDComponent.selectedIndex;
    e.selectedOptions = e.selectedOptions || this.MDComponent.selectedOptions;
    if (this.props.onChange) {
      this.props.onChange(e);
    }
  };

  Select.prototype.componentDidMount = function componentDidMount() {
    if (!this.props.basic) {
      this.MDComponent = new __WEBPACK_IMPORTED_MODULE_2__material_select___["a" /* MDCSelect */](this.control);
      this.MDComponent.listen("MDCSelect:change", this._changed);
      this.updateSelection();
    }
  };

  Select.prototype.componentWillUnmount = function componentWillUnmount() {
    if (!this.props.basic) {
      this.MDComponent.unlisten("MDCSelect:change", this._changed);
      this.MDComponent.destroy && this.MDComponent.destroy();
    }
  };

  Select.prototype.updateSelection = function updateSelection() {
    if ("selectedIndex" in this.props && this.MDComponent) {
      this.MDComponent.selectedIndex = this.props.selectedIndex;
    }
  };

  Select.prototype.componentDidUpdate = function componentDidUpdate() {
    this.updateSelection();
    if (this.MDComponent && this.MDComponent.foundation_) {
      this.MDComponent.foundation_.resize();
    }
  };

  Select.prototype.materialDom = function materialDom(props) {
    var _this2 = this;

    if (props.basic) {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("select", _extends({}, props, {
        ref: function ref(control) {
          _this2.control = control;
        }
      }), props.children);
    }

    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("div", _extends({
      role: "listbox"
    }, props, {
      ref: function ref(control) {
        _this2.control = control;
      }
    }), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("span", { className: "mdc-select__selected-text" }, props.hintText), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("div", { className: "mdc-simple-menu mdc-select__menu" }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("ul", { className: "mdc-list mdc-simple-menu__items " }, props.children)));
  };

  return Select;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);

Select.Item = __WEBPACK_IMPORTED_MODULE_3__List__["a" /* default */].Item;

/* unused harmony default export */ var _unused_webpack_default_export = (Select);

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),

/***/ 10:
/***/ (function(module, exports) {

module.exports = require("util");

/***/ }),

/***/ 11:
/***/ (function(module, exports) {

module.exports = require("zlib");

/***/ }),

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("JkW7");


/***/ }),

/***/ "1AK+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* eslint no-unused-vars: [2, {"args": "none"}] */

/**
 * Adapter for MDC Ripple. Provides an interface for managing
 * - classes
 * - dom
 * - CSS variables
 * - position
 * - dimensions
 * - scroll position
 * - event handlers
 * - unbounded, active and disabled states
 *
 * Additionally, provides type information for the adapter to the Closure
 * compiler.
 *
 * Implement this adapter for your framework of choice to delegate updates to
 * the component in your framework of choice. See architecture documentation
 * for more details.
 * https://github.com/material-components/material-components-web/blob/master/docs/architecture.md
 *
 * @record
 */
var MDCRippleAdapter = function () {
  function MDCRippleAdapter() {
    _classCallCheck(this, MDCRippleAdapter);
  }

  /** @return {boolean} */
  MDCRippleAdapter.prototype.browserSupportsCssVars = function browserSupportsCssVars() {};

  /** @return {boolean} */


  MDCRippleAdapter.prototype.isUnbounded = function isUnbounded() {};

  /** @return {boolean} */


  MDCRippleAdapter.prototype.isSurfaceActive = function isSurfaceActive() {};

  /** @return {boolean} */


  MDCRippleAdapter.prototype.isSurfaceDisabled = function isSurfaceDisabled() {};

  /** @param {string} className */


  MDCRippleAdapter.prototype.addClass = function addClass(className) {};

  /** @param {string} className */


  MDCRippleAdapter.prototype.removeClass = function removeClass(className) {};

  /**
   * @param {string} evtType
   * @param {!Function} handler
   */


  MDCRippleAdapter.prototype.registerInteractionHandler = function registerInteractionHandler(evtType, handler) {};

  /**
   * @param {string} evtType
   * @param {!Function} handler
   */


  MDCRippleAdapter.prototype.deregisterInteractionHandler = function deregisterInteractionHandler(evtType, handler) {};

  /**
   * @param {!Function} handler
   */


  MDCRippleAdapter.prototype.registerResizeHandler = function registerResizeHandler(handler) {};

  /**
   * @param {!Function} handler
   */


  MDCRippleAdapter.prototype.deregisterResizeHandler = function deregisterResizeHandler(handler) {};

  /**
   * @param {string} varName
   * @param {?number|string} value
   */


  MDCRippleAdapter.prototype.updateCssVariable = function updateCssVariable(varName, value) {};

  /** @return {!ClientRect} */


  MDCRippleAdapter.prototype.computeBoundingRect = function computeBoundingRect() {};

  /** @return {{x: number, y: number}} */


  MDCRippleAdapter.prototype.getWindowPageOffset = function getWindowPageOffset() {};

  return MDCRippleAdapter;
}();



/***/ }),

/***/ "1bFC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = applyPassive;
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var supportsPassive_ = void 0;

// Determine whether the current browser supports passive event listeners, and if so, use them.
function applyPassive() {
  var globalObj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;
  var forceRefresh = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (supportsPassive_ === undefined || forceRefresh) {
    var isSupported = false;
    try {
      globalObj.document.addEventListener('test', null, { get passive() {
          isSupported = true;
        } });
    } catch (e) {}

    supportsPassive_ = isSupported;
  }

  return supportsPassive_ ? { passive: true } : false;
}

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = require("https");

/***/ }),

/***/ "20uY":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "21It":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__("FtD3");

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError('Request failed with status code ' + response.status, response.config, null, response));
  }
};

/***/ }),

/***/ "2YVC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCCheckboxFoundation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__ = __webpack_require__("6y2n");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_selection_control__ = __webpack_require__("2exO");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__adapter__ = __webpack_require__("ch9a");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants__ = __webpack_require__("QJUz");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


/* eslint-disable no-unused-vars */


/* eslint-enable no-unused-vars */


/** @const {!Array<string>} */
var CB_PROTO_PROPS = ['checked', 'indeterminate'];

/**
 * @extends {MDCFoundation<!MDCCheckboxAdapter>}
 */

var MDCCheckboxFoundation = function (_MDCFoundation) {
  _inherits(MDCCheckboxFoundation, _MDCFoundation);

  _createClass(MDCCheckboxFoundation, null, [{
    key: 'cssClasses',

    /** @return enum {cssClasses} */
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_3__constants__["a" /* cssClasses */];
    }

    /** @return enum {strings} */

  }, {
    key: 'strings',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_3__constants__["b" /* strings */];
    }

    /** @return enum {numbers} */

  }, {
    key: 'numbers',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_3__constants__["c" /* numbers */];
    }

    /** @return {!MDCCheckboxAdapter} */

  }, {
    key: 'defaultAdapter',
    get: function get() {
      return (/** @type {!MDCCheckboxAdapter} */{
          addClass: function addClass() /* className: string */{},
          removeClass: function removeClass() /* className: string */{},
          registerAnimationEndHandler: function registerAnimationEndHandler() /* handler: EventListener */{},
          deregisterAnimationEndHandler: function deregisterAnimationEndHandler() /* handler: EventListener */{},
          registerChangeHandler: function registerChangeHandler() /* handler: EventListener */{},
          deregisterChangeHandler: function deregisterChangeHandler() /* handler: EventListener */{},
          getNativeControl: function getNativeControl() /* !MDCSelectionControlState */{},
          forceLayout: function forceLayout() {},
          isAttachedToDOM: function isAttachedToDOM() /* boolean */{}
        }
      );
    }
  }]);

  function MDCCheckboxFoundation(adapter) {
    _classCallCheck(this, MDCCheckboxFoundation);

    /** @private {string} */
    var _this = _possibleConstructorReturn(this, _MDCFoundation.call(this, _extends(MDCCheckboxFoundation.defaultAdapter, adapter)));

    _this.currentCheckState_ = __WEBPACK_IMPORTED_MODULE_3__constants__["b" /* strings */].TRANSITION_STATE_INIT;

    /** @private {string} */
    _this.currentAnimationClass_ = '';

    /** @private {number} */
    _this.animEndLatchTimer_ = 0;

    _this.animEndHandler_ = /** @private {!EventListener} */function () {
      clearTimeout(_this.animEndLatchTimer_);
      _this.animEndLatchTimer_ = setTimeout(function () {
        _this.adapter_.removeClass(_this.currentAnimationClass_);
        _this.adapter_.deregisterAnimationEndHandler(_this.animEndHandler_);
      }, __WEBPACK_IMPORTED_MODULE_3__constants__["c" /* numbers */].ANIM_END_LATCH_MS);
    };

    _this.changeHandler_ = /** @private {!EventListener} */function () {
      return _this.transitionCheckState_();
    };
    return _this;
  }

  MDCCheckboxFoundation.prototype.init = function init() {
    this.adapter_.addClass(__WEBPACK_IMPORTED_MODULE_3__constants__["a" /* cssClasses */].UPGRADED);
    this.adapter_.registerChangeHandler(this.changeHandler_);
    this.installPropertyChangeHooks_();
  };

  MDCCheckboxFoundation.prototype.destroy = function destroy() {
    this.adapter_.deregisterChangeHandler(this.changeHandler_);
    this.uninstallPropertyChangeHooks_();
  };

  /** @return {boolean} */


  MDCCheckboxFoundation.prototype.isChecked = function isChecked() {
    return this.getNativeControl_().checked;
  };

  /** @param {boolean} checked */


  MDCCheckboxFoundation.prototype.setChecked = function setChecked(checked) {
    this.getNativeControl_().checked = checked;
  };

  /** @return {boolean} */


  MDCCheckboxFoundation.prototype.isIndeterminate = function isIndeterminate() {
    return this.getNativeControl_().indeterminate;
  };

  /** @param {boolean} indeterminate */


  MDCCheckboxFoundation.prototype.setIndeterminate = function setIndeterminate(indeterminate) {
    this.getNativeControl_().indeterminate = indeterminate;
  };

  /** @return {boolean} */


  MDCCheckboxFoundation.prototype.isDisabled = function isDisabled() {
    return this.getNativeControl_().disabled;
  };

  /** @param {boolean} disabled */


  MDCCheckboxFoundation.prototype.setDisabled = function setDisabled(disabled) {
    this.getNativeControl_().disabled = disabled;
    if (disabled) {
      this.adapter_.addClass(__WEBPACK_IMPORTED_MODULE_3__constants__["a" /* cssClasses */].DISABLED);
    } else {
      this.adapter_.removeClass(__WEBPACK_IMPORTED_MODULE_3__constants__["a" /* cssClasses */].DISABLED);
    }
  };

  /** @return {?string} */


  MDCCheckboxFoundation.prototype.getValue = function getValue() {
    return this.getNativeControl_().value;
  };

  /** @param {?string} value */


  MDCCheckboxFoundation.prototype.setValue = function setValue(value) {
    this.getNativeControl_().value = value;
  };

  /** @private */


  MDCCheckboxFoundation.prototype.installPropertyChangeHooks_ = function installPropertyChangeHooks_() {
    var _this2 = this;

    var nativeCb = this.getNativeControl_();
    var cbProto = Object.getPrototypeOf(nativeCb);

    CB_PROTO_PROPS.forEach(function (controlState) {
      var desc = Object.getOwnPropertyDescriptor(cbProto, controlState);
      // We have to check for this descriptor, since some browsers (Safari) don't support its return.
      // See: https://bugs.webkit.org/show_bug.cgi?id=49739
      if (validDescriptor(desc)) {
        var nativeCbDesc = /** @type {!ObjectPropertyDescriptor} */{
          get: desc.get,
          set: function set(state) {
            desc.set.call(nativeCb, state);
            _this2.transitionCheckState_();
          },
          configurable: desc.configurable,
          enumerable: desc.enumerable
        };
        Object.defineProperty(nativeCb, controlState, nativeCbDesc);
      }
    });
  };

  /** @private */


  MDCCheckboxFoundation.prototype.uninstallPropertyChangeHooks_ = function uninstallPropertyChangeHooks_() {
    var nativeCb = this.getNativeControl_();
    var cbProto = Object.getPrototypeOf(nativeCb);

    CB_PROTO_PROPS.forEach(function (controlState) {
      var desc = /** @type {!ObjectPropertyDescriptor} */Object.getOwnPropertyDescriptor(cbProto, controlState);
      if (validDescriptor(desc)) {
        Object.defineProperty(nativeCb, controlState, desc);
      }
    });
  };

  /** @private */


  MDCCheckboxFoundation.prototype.transitionCheckState_ = function transitionCheckState_() {
    var nativeCb = this.adapter_.getNativeControl();
    if (!nativeCb) {
      return;
    }
    var oldState = this.currentCheckState_;
    var newState = this.determineCheckState_(nativeCb);
    if (oldState === newState) {
      return;
    }

    // Check to ensure that there isn't a previously existing animation class, in case for example
    // the user interacted with the checkbox before the animation was finished.
    if (this.currentAnimationClass_.length > 0) {
      clearTimeout(this.animEndLatchTimer_);
      this.adapter_.forceLayout();
      this.adapter_.removeClass(this.currentAnimationClass_);
    }

    this.currentAnimationClass_ = this.getTransitionAnimationClass_(oldState, newState);
    this.currentCheckState_ = newState;

    // Check for parentNode so that animations are only run when the element is attached
    // to the DOM.
    if (this.adapter_.isAttachedToDOM() && this.currentAnimationClass_.length > 0) {
      this.adapter_.addClass(this.currentAnimationClass_);
      this.adapter_.registerAnimationEndHandler(this.animEndHandler_);
    }
  };

  /**
   * @param {!MDCSelectionControlState} nativeCb
   * @return {string}
   * @private
   */


  MDCCheckboxFoundation.prototype.determineCheckState_ = function determineCheckState_(nativeCb) {
    var TRANSITION_STATE_INDETERMINATE = __WEBPACK_IMPORTED_MODULE_3__constants__["b" /* strings */].TRANSITION_STATE_INDETERMINATE,
        TRANSITION_STATE_CHECKED = __WEBPACK_IMPORTED_MODULE_3__constants__["b" /* strings */].TRANSITION_STATE_CHECKED,
        TRANSITION_STATE_UNCHECKED = __WEBPACK_IMPORTED_MODULE_3__constants__["b" /* strings */].TRANSITION_STATE_UNCHECKED;


    if (nativeCb.indeterminate) {
      return TRANSITION_STATE_INDETERMINATE;
    }
    return nativeCb.checked ? TRANSITION_STATE_CHECKED : TRANSITION_STATE_UNCHECKED;
  };

  /**
   * @param {string} oldState
   * @param {string} newState
   * @return {string}
   */


  MDCCheckboxFoundation.prototype.getTransitionAnimationClass_ = function getTransitionAnimationClass_(oldState, newState) {
    var TRANSITION_STATE_INIT = __WEBPACK_IMPORTED_MODULE_3__constants__["b" /* strings */].TRANSITION_STATE_INIT,
        TRANSITION_STATE_CHECKED = __WEBPACK_IMPORTED_MODULE_3__constants__["b" /* strings */].TRANSITION_STATE_CHECKED,
        TRANSITION_STATE_UNCHECKED = __WEBPACK_IMPORTED_MODULE_3__constants__["b" /* strings */].TRANSITION_STATE_UNCHECKED;
    var _MDCCheckboxFoundatio = MDCCheckboxFoundation.cssClasses,
        ANIM_UNCHECKED_CHECKED = _MDCCheckboxFoundatio.ANIM_UNCHECKED_CHECKED,
        ANIM_UNCHECKED_INDETERMINATE = _MDCCheckboxFoundatio.ANIM_UNCHECKED_INDETERMINATE,
        ANIM_CHECKED_UNCHECKED = _MDCCheckboxFoundatio.ANIM_CHECKED_UNCHECKED,
        ANIM_CHECKED_INDETERMINATE = _MDCCheckboxFoundatio.ANIM_CHECKED_INDETERMINATE,
        ANIM_INDETERMINATE_CHECKED = _MDCCheckboxFoundatio.ANIM_INDETERMINATE_CHECKED,
        ANIM_INDETERMINATE_UNCHECKED = _MDCCheckboxFoundatio.ANIM_INDETERMINATE_UNCHECKED;


    switch (oldState) {
      case TRANSITION_STATE_INIT:
        if (newState === TRANSITION_STATE_UNCHECKED) {
          return '';
        }
      // fallthrough
      case TRANSITION_STATE_UNCHECKED:
        return newState === TRANSITION_STATE_CHECKED ? ANIM_UNCHECKED_CHECKED : ANIM_UNCHECKED_INDETERMINATE;
      case TRANSITION_STATE_CHECKED:
        return newState === TRANSITION_STATE_UNCHECKED ? ANIM_CHECKED_UNCHECKED : ANIM_CHECKED_INDETERMINATE;
      // TRANSITION_STATE_INDETERMINATE
      default:
        return newState === TRANSITION_STATE_CHECKED ? ANIM_INDETERMINATE_CHECKED : ANIM_INDETERMINATE_UNCHECKED;
    }
  };

  /**
   * @return {!MDCSelectionControlState}
   * @private
   */


  MDCCheckboxFoundation.prototype.getNativeControl_ = function getNativeControl_() {
    return this.adapter_.getNativeControl() || {
      checked: false,
      indeterminate: false,
      disabled: false,
      value: null
    };
  };

  return MDCCheckboxFoundation;
}(__WEBPACK_IMPORTED_MODULE_0__material_base_foundation__["a" /* default */]);

/**
 * @param {ObjectPropertyDescriptor|undefined} inputPropDesc
 * @return {boolean}
 */



function validDescriptor(inputPropDesc) {
  return !!inputPropDesc && typeof inputPropDesc.set === 'function';
}

/***/ }),

/***/ "2exO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MDCSelectionControlState */
/* unused harmony export MDCSelectionControl */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_ripple__ = __webpack_require__("ucTD");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* eslint-disable no-unused-vars */

/* eslint-enable no-unused-vars */

/**
 * @typedef {!{
 *   checked: boolean,
 *   indeterminate: boolean,
 *   disabled: boolean,
 *   value: ?string
 * }}
 */
var MDCSelectionControlState = void 0;

/**
 * @record
 */
var MDCSelectionControl = function () {
  function MDCSelectionControl() {
    _classCallCheck(this, MDCSelectionControl);
  }

  _createClass(MDCSelectionControl, [{
    key: 'ripple',

    /** @return {?MDCRipple} */
    get: function get() {}
  }]);

  return MDCSelectionControl;
}();

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = require("assert");

/***/ }),

/***/ "3Erf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCToolbar; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__("PZSP");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundation__ = __webpack_require__("JPqk");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__("1bFC");
/* unused harmony reexport MDCToolbarFoundation */
/* unused harmony reexport util */
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */









var MDCToolbar = function (_MDCComponent) {
  _inherits(MDCToolbar, _MDCComponent);

  function MDCToolbar() {
    _classCallCheck(this, MDCToolbar);

    return _possibleConstructorReturn(this, _MDCComponent.apply(this, arguments));
  }

  MDCToolbar.attachTo = function attachTo(root) {
    return new MDCToolbar(root);
  };

  MDCToolbar.prototype.getDefaultFoundation = function getDefaultFoundation() {
    var _this2 = this;

    return new __WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */]({
      hasClass: function hasClass(className) {
        return _this2.root_.classList.contains(className);
      },
      addClass: function addClass(className) {
        return _this2.root_.classList.add(className);
      },
      removeClass: function removeClass(className) {
        return _this2.root_.classList.remove(className);
      },
      registerScrollHandler: function registerScrollHandler(handler) {
        return window.addEventListener('scroll', handler, __WEBPACK_IMPORTED_MODULE_2__util__["a" /* applyPassive */]());
      },
      deregisterScrollHandler: function deregisterScrollHandler(handler) {
        return window.removeEventListener('scroll', handler, __WEBPACK_IMPORTED_MODULE_2__util__["a" /* applyPassive */]());
      },
      registerResizeHandler: function registerResizeHandler(handler) {
        return window.addEventListener('resize', handler);
      },
      deregisterResizeHandler: function deregisterResizeHandler(handler) {
        return window.removeEventListener('resize', handler);
      },
      getViewportWidth: function getViewportWidth() {
        return window.innerWidth;
      },
      getViewportScrollY: function getViewportScrollY() {
        return window.pageYOffset;
      },
      getOffsetHeight: function getOffsetHeight() {
        return _this2.root_.offsetHeight;
      },
      getFirstRowElementOffsetHeight: function getFirstRowElementOffsetHeight() {
        return _this2.firstRowElement_.offsetHeight;
      },
      notifyChange: function notifyChange(evtData) {
        return _this2.emit(__WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */].strings.CHANGE_EVENT, evtData);
      },
      setStyle: function setStyle(property, value) {
        return _this2.root_.style.setProperty(property, value);
      },
      setStyleForTitleElement: function setStyleForTitleElement(property, value) {
        return _this2.titleElement_.style.setProperty(property, value);
      },
      setStyleForFlexibleRowElement: function setStyleForFlexibleRowElement(property, value) {
        return _this2.firstRowElement_.style.setProperty(property, value);
      },
      setStyleForFixedAdjustElement: function setStyleForFixedAdjustElement(property, value) {
        if (_this2.fixedAdjustElement) {
          _this2.fixedAdjustElement.style.setProperty(property, value);
        }
      }
    });
  };

  _createClass(MDCToolbar, [{
    key: 'firstRowElement_',
    get: function get() {
      return this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */].strings.FIRST_ROW_SELECTOR);
    }
  }, {
    key: 'titleElement_',
    get: function get() {
      return this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */].strings.TITLE_SELECTOR);
    }
  }, {
    key: 'fixedAdjustElement',
    set: function set(fixedAdjustElement) {
      this.fixedAdjustElement_ = fixedAdjustElement;
      this.foundation_.updateAdjustElementStyles();
    },
    get: function get() {
      return this.fixedAdjustElement_;
    }
  }]);

  return MDCToolbar;
}(__WEBPACK_IMPORTED_MODULE_0__material_base__["a" /* MDCComponent */]);

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = require("buffer");

/***/ }),

/***/ "4UKK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("EBst");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MaterialComponent__ = __webpack_require__("jM6C");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_textfield___ = __webpack_require__("O9Hi");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

function _objectWithoutProperties(obj, keys) {
  var target = {};for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
  }return target;
}





/**
 * @prop persistent = false
 * @prop validation-msg = false
 */

var Helptext = function (_MaterialComponent) {
  _inherits(Helptext, _MaterialComponent);

  function Helptext() {
    _classCallCheck(this, Helptext);

    var _this = _possibleConstructorReturn(this, _MaterialComponent.call(this));

    _this.componentName = "textfield-helptext";
    _this._mdcProps = ["persistent", "validation-msg"];
    return _this;
  }

  Helptext.prototype.materialDom = function materialDom(props) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("p", _extends({}, props, { "aria-hidden": "true" }), props.children);
  };

  return Helptext;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);

var Label = function (_MaterialComponent2) {
  _inherits(Label, _MaterialComponent2);

  function Label() {
    _classCallCheck(this, Label);

    var _this2 = _possibleConstructorReturn(this, _MaterialComponent2.call(this));

    _this2.componentName = "textfield__label";
    return _this2;
  }

  Label.prototype.materialDom = function materialDom(props) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("label", props, props.children);
  };

  return Label;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);

/**
 * @prop fullwidth = false
 * @prop multiline = false
 * @prop dense = false
 * @prop disabled = false
 * @prop box = false
 * @prop type = 'text'
 * @prop value = ''
 * @prop label = ''
 */


var TextfieldInput = function (_MaterialComponent3) {
  _inherits(TextfieldInput, _MaterialComponent3);

  function TextfieldInput() {
    _classCallCheck(this, TextfieldInput);

    var _this3 = _possibleConstructorReturn(this, _MaterialComponent3.call(this));

    _this3.componentName = "textfield";
    _this3._mdcProps = ["fullwidth", "multiline", "dense", "disabled", "box"];
    _this3.state = {
      showFloatingLabel: false
    };
    return _this3;
  }

  TextfieldInput.prototype.componentDidMount = function componentDidMount() {
    var _this4 = this;

    this.setState({
      showFloatingLabel: true
    }, function () {
      _this4.MDComponent = new __WEBPACK_IMPORTED_MODULE_2__material_textfield___["a" /* MDCTextfield */](_this4.control);
      _this4.props.onInit && _this4.props.onInit(_this4.MDComponent);
    });
  };

  TextfieldInput.prototype.componentWillUnmount = function componentWillUnmount() {
    this.MDComponent && this.MDComponent.destroy && this.MDComponent.destroy();
  };

  TextfieldInput.prototype.materialDom = function materialDom(allprops) {
    var _this5 = this;

    var className = allprops.className,
        props = _objectWithoutProperties(allprops, ["className"]);


    if ("value" in props && this.state.showFloatingLabel) {
      className = [className, "mdc-textfield--upgraded"].join(" ");
    }

    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("div", { className: className, ref: function ref(control) {
        return _this5.control = control;
      } }, props.multiline ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("textarea", _extends({ className: "mdc-textfield__input" }, props)) : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("input", _extends({
      type: props.type || "text",
      className: "mdc-textfield__input"
    }, props)), props.label && this.state.showFloatingLabel && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(Label, { "for": props.id }, props.label));
  };

  return TextfieldInput;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);

/**
 * @prop fullwidth = false
 * @prop multiline = false
 * @prop dense = false
 * @prop disabled = false
 * @prop box = false
 * @prop type = 'text'
 * @prop value = ''
 * @prop label = ''
 * @prop helptext = ''
 * @prop helptextPersistent = false
 * @prop helptextValidationMsg = false
 */


var Textfield = function (_Component) {
  _inherits(Textfield, _Component);

  function Textfield() {
    _classCallCheck(this, Textfield);

    var _this6 = _possibleConstructorReturn(this, _Component.call(this));

    _this6.id = Textfield.uid();
    _this6.state = {
      showFloatingLabel: false
    };
    return _this6;
  }

  Textfield.prototype.componentDidMount = function componentDidMount() {
    this.setState({
      showFloatingLabel: true
    });
  };

  Textfield.uid = function uid() {
    if (!this.uidCounter) {
      this.uidCounter = 0;
    }
    return ++this.uidCounter;
  };

  Textfield.prototype.render = function render(allprops, _ref) {
    var _this7 = this;

    var showFloatingLabel = _ref.showFloatingLabel;

    var className = allprops.className,
        helptextPersistent = allprops.helptextPersistent,
        helptextValidationMsg = allprops.helptextValidationMsg,
        props = _objectWithoutProperties(allprops, ["className", "helptextPersistent", "helptextValidationMsg"]);

    var showDiv = props.helptext || props.label && !showFloatingLabel;

    if (showDiv && !props.id) {
      props.id = "tf-" + this.id;
    }

    // Helper text
    var helptextProps = {
      persistent: helptextPersistent,
      "validation-msg": helptextValidationMsg
    };

    return showDiv ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("div", { className: className }, props.label && !showFloatingLabel && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("label", { "for": props.id }, props.cssLabel || props.label + ": "), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(TextfieldInput, _extends({}, props, {
      onInit: function onInit(MDComponent) {
        _this7.MDComponent = MDComponent;
      },
      "aria-controls": props.helptext && props.id + "-helptext"
    })), props.helptext && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(Helptext, _extends({ id: props.id + "-helptext" }, helptextProps), props.helptext)) : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(TextfieldInput, _extends({}, props, {
      className: className,
      onInit: function onInit(MDComponent) {
        _this7.MDComponent = MDComponent;
      }
    }));
  };

  return Textfield;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);

Textfield.Helptext = Helptext;

/* harmony default export */ __webpack_exports__["a"] = (Textfield);

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports = require("events");

/***/ }),

/***/ "53Gz":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"mdl-data-table":"mdl-data-table__2fy2P","mdl-data-table__select":"mdl-data-table__select__2EZ5z","is-selected":"is-selected__2ApVD","mdl-data-table--checkbox":"mdl-data-table--checkbox__MhPGF","mdl-data-table__header--sorted-ascending":"mdl-data-table__header--sorted-ascending__HodSs","mdl-data-table__header--sorted-descending":"mdl-data-table__header--sorted-descending__3l9ox","mdl-data-table__cell--non-numeric":"mdl-data-table__cell--non-numeric__1tgit"};

/***/ }),

/***/ "5Hky":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "5Lo5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("Xxa5");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__("MXhL");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vexdb__ = __webpack_require__("f8nm");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vexdb___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vexdb__);


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }




/**
 * Get skills data using a wide variety of filters
 * @param {Object} filters The filters to apply
 * @param {String} filters.program The program, VRC or VEXU
 * @param {String} filters.sku The event at which the run was performed
 * @param {String} filters.grade Team Grade Level, "Middle School", "High School", or "College"
 * @param {String} filters.country The country of the team
 * @param {String} filters.region The region of the team
 * @param {String} filters.city The city of the team
 * @param {Date}   filters.before The datetime of the event start
 * @param {Date}   filters.after The datetime of the event start
 * @param {Number} filters.type The skills run type, 0 for Robot Skills, 1 for Programming and 2 for Combined
 * @param {String} filters.team The team that performed the run
 * @param {String} filters.season
 */
/* harmony default export */ __webpack_exports__["a"] = ((function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee8() {
        var _this = this;

        var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            program = _ref2.program,
            sku = _ref2.sku,
            grade = _ref2.grade,
            country = _ref2.country,
            region = _ref2.region,
            city = _ref2.city,
            before = _ref2.before,
            after = _ref2.after,
            _ref2$type = _ref2.type,
            type = _ref2$type === undefined ? 2 : _ref2$type,
            team = _ref2.team,
            _ref2$season = _ref2.season,
            season = _ref2$season === undefined ? "In The Zone" : _ref2$season;

        var season_rank, inital;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee8$(_context8) {
            while (1) {
                switch (_context8.prev = _context8.next) {
                    case 0:
                        season_rank = true;
                        _context8.next = 3;
                        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_vexdb__["get"])("skills", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["b" /* existant */])({ program: program, sku: sku, type: type, team: team, season: season, season_rank: season_rank }));

                    case 3:
                        inital = _context8.sent;

                        if (!before) {
                            _context8.next = 8;
                            break;
                        }

                        _context8.next = 7;
                        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["c" /* filterAsync */])(inital, function () {
                            var _ref3 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(run) {
                                var date;
                                return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                                    while (1) {
                                        switch (_context.prev = _context.next) {
                                            case 0:
                                                _context.t0 = Date;
                                                _context.next = 3;
                                                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_vexdb__["get"])("events", { sku: run.sku }).start;

                                            case 3:
                                                _context.t1 = _context.sent;
                                                date = new _context.t0(_context.t1);
                                                return _context.abrupt("return", before < date);

                                            case 6:
                                            case "end":
                                                return _context.stop();
                                        }
                                    }
                                }, _callee, this);
                            }));

                            return function (_x2) {
                                return _ref3.apply(this, arguments);
                            };
                        }());

                    case 7:
                        inital = _context8.sent;

                    case 8:
                        if (!after) {
                            _context8.next = 12;
                            break;
                        }

                        _context8.next = 11;
                        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["c" /* filterAsync */])(inital, function () {
                            var _ref4 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2(run) {
                                var date;
                                return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
                                    while (1) {
                                        switch (_context2.prev = _context2.next) {
                                            case 0:
                                                _context2.t0 = Date;
                                                _context2.next = 3;
                                                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_vexdb__["get"])("events", { sku: run.sku }).start;

                                            case 3:
                                                _context2.t1 = _context2.sent;
                                                date = new _context2.t0(_context2.t1);
                                                return _context2.abrupt("return", after > date);

                                            case 6:
                                            case "end":
                                                return _context2.stop();
                                        }
                                    }
                                }, _callee2, this);
                            }));

                            return function (_x3) {
                                return _ref4.apply(this, arguments);
                            };
                        }());

                    case 11:
                        inital = _context8.sent;

                    case 12:
                        if (!country) {
                            _context8.next = 16;
                            break;
                        }

                        _context8.next = 15;
                        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["c" /* filterAsync */])(inital, function () {
                            var _ref5 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee3(run) {
                                var teamCountry;
                                return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
                                    while (1) {
                                        switch (_context3.prev = _context3.next) {
                                            case 0:
                                                _context3.next = 2;
                                                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_vexdb__["get"])("teams", { team: run.team });

                                            case 2:
                                                teamCountry = _context3.sent.country;
                                                return _context3.abrupt("return", teamCountry === country);

                                            case 4:
                                            case "end":
                                                return _context3.stop();
                                        }
                                    }
                                }, _callee3, this);
                            }));

                            return function (_x4) {
                                return _ref5.apply(this, arguments);
                            };
                        }());

                    case 15:
                        inital = _context8.sent;

                    case 16:
                        if (!region) {
                            _context8.next = 20;
                            break;
                        }

                        _context8.next = 19;
                        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["c" /* filterAsync */])(inital, function () {
                            var _ref6 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee4(run) {
                                var teamRegion;
                                return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
                                    while (1) {
                                        switch (_context4.prev = _context4.next) {
                                            case 0:
                                                _context4.next = 2;
                                                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_vexdb__["get"])("teams", { team: run.team });

                                            case 2:
                                                teamRegion = _context4.sent.region;
                                                return _context4.abrupt("return", teamRegion === region);

                                            case 4:
                                            case "end":
                                                return _context4.stop();
                                        }
                                    }
                                }, _callee4, this);
                            }));

                            return function (_x5) {
                                return _ref6.apply(this, arguments);
                            };
                        }());

                    case 19:
                        inital = _context8.sent;

                    case 20:
                        if (!city) {
                            _context8.next = 24;
                            break;
                        }

                        _context8.next = 23;
                        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["c" /* filterAsync */])(inital, function () {
                            var _ref7 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee5(run) {
                                var teamCity;
                                return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
                                    while (1) {
                                        switch (_context5.prev = _context5.next) {
                                            case 0:
                                                _context5.next = 2;
                                                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_vexdb__["get"])("teams", { team: run.team }).city;

                                            case 2:
                                                teamCity = _context5.sent;
                                                return _context5.abrupt("return", teamCity === city);

                                            case 4:
                                            case "end":
                                                return _context5.stop();
                                        }
                                    }
                                }, _callee5, this);
                            }));

                            return function (_x6) {
                                return _ref7.apply(this, arguments);
                            };
                        }());

                    case 23:
                        inital = _context8.sent;

                    case 24:
                        if (!grade) {
                            _context8.next = 28;
                            break;
                        }

                        _context8.next = 27;
                        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["c" /* filterAsync */])(inital, function () {
                            var _ref8 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee6(run) {
                                var teamGrade;
                                return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee6$(_context6) {
                                    while (1) {
                                        switch (_context6.prev = _context6.next) {
                                            case 0:
                                                _context6.next = 2;
                                                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_vexdb__["get"])("teams", { team: run.team }).grade;

                                            case 2:
                                                teamGrade = _context6.sent;
                                                return _context6.abrupt("return", teamGrade === grade);

                                            case 4:
                                            case "end":
                                                return _context6.stop();
                                        }
                                    }
                                }, _callee6, this);
                            }));

                            return function (_x7) {
                                return _ref8.apply(this, arguments);
                            };
                        }());

                    case 27:
                        inital = _context8.sent;

                    case 28:

                        inital = inital.sort(function (a, b) {
                            return a.season_rank - b.season_rank;
                        });

                        // Include info from event page and team page
                        _context8.next = 31;
                        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["d" /* mapAysnc */])(inital, function () {
                            var _ref9 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee7(run, index) {
                                return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee7$(_context7) {
                                    while (1) {
                                        switch (_context7.prev = _context7.next) {
                                            case 0:
                                                _context7.t0 = _extends;
                                                _context7.t1 = run;
                                                _context7.next = 4;
                                                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_vexdb__["get"])("events", { sku: run.sku });

                                            case 4:
                                                _context7.t2 = _context7.sent;
                                                _context7.t3 = {
                                                    event: _context7.t2
                                                };
                                                _context7.next = 8;
                                                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_vexdb__["get"])("teams", { team: run.team });

                                            case 8:
                                                _context7.t4 = _context7.sent;
                                                _context7.t5 = {
                                                    team: _context7.t4
                                                };
                                                _context7.t6 = { filterRank: index + 1 };
                                                return _context7.abrupt("return", (0, _context7.t0)(_context7.t1, _context7.t3, _context7.t5, _context7.t6));

                                            case 12:
                                            case "end":
                                                return _context7.stop();
                                        }
                                    }
                                }, _callee7, _this);
                            }));

                            return function (_x8, _x9) {
                                return _ref9.apply(this, arguments);
                            };
                        }());

                    case 31:
                        inital = _context8.sent;
                        return _context8.abrupt("return", inital);

                    case 33:
                    case "end":
                        return _context8.stop();
                }
            }
        }, _callee8, this);
    }));

    return function () {
        return _ref.apply(this, arguments);
    };
})());

/***/ }),

/***/ "5VQ+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("cGG2");

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};

/***/ }),

/***/ "5jvd":
/***/ (function(module, exports) {

module.exports = {"name":"vexdb","version":"0.4.20","description":"A simple tool for accessing the VexDB","main":"main.js","scripts":{"test":"nyc ava && nyc report --reporter=text-lcov > coverage.lcov && codecov"},"repository":"git+https://github.com/MayorMonty/vexdb.git","keywords":["vexdb","vrc","vex","robotics","database","rest","api"],"author":"Brendan McGuire","license":"MIT","bugs":{"url":"https://github.com/MayorMonty/vexdb/issues"},"homepage":"https://github.com/MayorMonty/vexdb#readme","dependencies":{"axios":"^0.15.3"},"devDependencies":{"ava":"^0.18.2","codecov":"^2.1.0","nyc":"^10.2.0"}}

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "6Jm8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCDialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__("PZSP");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_ripple__ = __webpack_require__("ucTD");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foundation__ = __webpack_require__("/FYG");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util__ = __webpack_require__("lwKq");
/* unused harmony reexport MDCDialogFoundation */
/* unused harmony reexport util */
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */










var MDCDialog = function (_MDCComponent) {
  _inherits(MDCDialog, _MDCComponent);

  function MDCDialog() {
    _classCallCheck(this, MDCDialog);

    return _possibleConstructorReturn(this, _MDCComponent.apply(this, arguments));
  }

  MDCDialog.attachTo = function attachTo(root) {
    return new MDCDialog(root);
  };

  MDCDialog.prototype.initialize = function initialize() {
    this.focusTrap_ = __WEBPACK_IMPORTED_MODULE_3__util__["a" /* createFocusTrapInstance */](this.dialogSurface_, this.acceptButton_);
    this.footerBtnRipples_ = [];

    var footerBtns = this.root_.querySelectorAll('.mdc-dialog__footer__button');
    for (var i = 0, footerBtn; footerBtn = footerBtns[i]; i++) {
      this.footerBtnRipples_.push(new __WEBPACK_IMPORTED_MODULE_1__material_ripple__["a" /* MDCRipple */](footerBtn));
    }
  };

  MDCDialog.prototype.destroy = function destroy() {
    this.footerBtnRipples_.forEach(function (ripple) {
      return ripple.destroy();
    });
    _MDCComponent.prototype.destroy.call(this);
  };

  MDCDialog.prototype.show = function show() {
    this.foundation_.open();
  };

  MDCDialog.prototype.close = function close() {
    this.foundation_.close();
  };

  MDCDialog.prototype.getDefaultFoundation = function getDefaultFoundation() {
    var _this2 = this;

    return new __WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */]({
      addClass: function addClass(className) {
        return _this2.root_.classList.add(className);
      },
      removeClass: function removeClass(className) {
        return _this2.root_.classList.remove(className);
      },
      addBodyClass: function addBodyClass(className) {
        return document.body.classList.add(className);
      },
      removeBodyClass: function removeBodyClass(className) {
        return document.body.classList.remove(className);
      },
      eventTargetHasClass: function eventTargetHasClass(target, className) {
        return target.classList.contains(className);
      },
      registerInteractionHandler: function registerInteractionHandler(evt, handler) {
        return _this2.root_.addEventListener(evt, handler);
      },
      deregisterInteractionHandler: function deregisterInteractionHandler(evt, handler) {
        return _this2.root_.removeEventListener(evt, handler);
      },
      registerSurfaceInteractionHandler: function registerSurfaceInteractionHandler(evt, handler) {
        return _this2.dialogSurface_.addEventListener(evt, handler);
      },
      deregisterSurfaceInteractionHandler: function deregisterSurfaceInteractionHandler(evt, handler) {
        return _this2.dialogSurface_.removeEventListener(evt, handler);
      },
      registerDocumentKeydownHandler: function registerDocumentKeydownHandler(handler) {
        return document.addEventListener('keydown', handler);
      },
      deregisterDocumentKeydownHandler: function deregisterDocumentKeydownHandler(handler) {
        return document.removeEventListener('keydown', handler);
      },
      registerTransitionEndHandler: function registerTransitionEndHandler(handler) {
        return _this2.dialogSurface_.addEventListener('transitionend', handler);
      },
      deregisterTransitionEndHandler: function deregisterTransitionEndHandler(handler) {
        return _this2.dialogSurface_.removeEventListener('transitionend', handler);
      },
      notifyAccept: function notifyAccept() {
        return _this2.emit(__WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */].strings.ACCEPT_EVENT);
      },
      notifyCancel: function notifyCancel() {
        return _this2.emit(__WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */].strings.CANCEL_EVENT);
      },
      trapFocusOnSurface: function trapFocusOnSurface() {
        return _this2.focusTrap_.activate();
      },
      untrapFocusOnSurface: function untrapFocusOnSurface() {
        return _this2.focusTrap_.deactivate();
      },
      isDialog: function isDialog(el) {
        return el === _this2.dialogSurface_;
      },
      layoutFooterRipples: function layoutFooterRipples() {
        return _this2.footerBtnRipples_.forEach(function (ripple) {
          return ripple.layout();
        });
      }
    });
  };

  _createClass(MDCDialog, [{
    key: 'open',
    get: function get() {
      return this.foundation_.isOpen();
    }
  }, {
    key: 'acceptButton_',
    get: function get() {
      return this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */].strings.ACCEPT_SELECTOR);
    }
  }, {
    key: 'dialogSurface_',
    get: function get() {
      return this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */].strings.DIALOG_SURFACE_SELECTOR);
    }
  }]);

  return MDCDialog;
}(__WEBPACK_IMPORTED_MODULE_0__material_base__["a" /* MDCComponent */]);

/***/ }),

/***/ "6Qal":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return strings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return numbers; });
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var cssClasses = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  ROOT: 'mdc-ripple-upgraded',
  UNBOUNDED: 'mdc-ripple-upgraded--unbounded',
  BG_FOCUSED: 'mdc-ripple-upgraded--background-focused',
  BG_ACTIVE_FILL: 'mdc-ripple-upgraded--background-active-fill',
  FG_ACTIVATION: 'mdc-ripple-upgraded--foreground-activation',
  FG_DEACTIVATION: 'mdc-ripple-upgraded--foreground-deactivation'
};

var strings = {
  VAR_SURFACE_WIDTH: '--mdc-ripple-surface-width',
  VAR_SURFACE_HEIGHT: '--mdc-ripple-surface-height',
  VAR_FG_SIZE: '--mdc-ripple-fg-size',
  VAR_LEFT: '--mdc-ripple-left',
  VAR_TOP: '--mdc-ripple-top',
  VAR_FG_SCALE: '--mdc-ripple-fg-scale',
  VAR_FG_TRANSLATE_START: '--mdc-ripple-fg-translate-start',
  VAR_FG_TRANSLATE_END: '--mdc-ripple-fg-translate-end'
};

var numbers = {
  PADDING: 10,
  INITIAL_ORIGIN_SCALE: 0.6,
  DEACTIVATION_TIMEOUT_MS: 300,
  FG_DEACTIVATION_MS: 83
};

/***/ }),

/***/ "6YtT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export transformStyleProperties */
/* harmony export (immutable) */ __webpack_exports__["a"] = getCorrectEventName;
/* unused harmony export getCorrectPropertyName */
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @typedef {{
 *   noPrefix: string,
 *   webkitPrefix: string
 * }}
 */
var VendorPropertyMapType = void 0;

/** @const {Object<string, !VendorPropertyMapType>} */
var eventTypeMap = {
  'animationstart': {
    noPrefix: 'animationstart',
    webkitPrefix: 'webkitAnimationStart',
    styleProperty: 'animation'
  },
  'animationend': {
    noPrefix: 'animationend',
    webkitPrefix: 'webkitAnimationEnd',
    styleProperty: 'animation'
  },
  'animationiteration': {
    noPrefix: 'animationiteration',
    webkitPrefix: 'webkitAnimationIteration',
    styleProperty: 'animation'
  },
  'transitionend': {
    noPrefix: 'transitionend',
    webkitPrefix: 'webkitTransitionEnd',
    styleProperty: 'transition'
  }
};

/** @const {Object<string, !VendorPropertyMapType>} */
var cssPropertyMap = {
  'animation': {
    noPrefix: 'animation',
    webkitPrefix: '-webkit-animation'
  },
  'transform': {
    noPrefix: 'transform',
    webkitPrefix: '-webkit-transform'
  },
  'transition': {
    noPrefix: 'transition',
    webkitPrefix: '-webkit-transition'
  }
};

/**
 * @param {!Object} windowObj
 * @return {boolean}
 */
function hasProperShape(windowObj) {
  return windowObj['document'] !== undefined && typeof windowObj['document']['createElement'] === 'function';
}

/**
 * @param {string} eventType
 * @return {boolean}
 */
function eventFoundInMaps(eventType) {
  return eventType in eventTypeMap || eventType in cssPropertyMap;
}

/**
 * @param {string} eventType
 * @param {!Object<string, !VendorPropertyMapType>} map
 * @param {!Element} el
 * @return {string}
 */
function getJavaScriptEventName(eventType, map, el) {
  return map[eventType].styleProperty in el.style ? map[eventType].noPrefix : map[eventType].webkitPrefix;
}

/**
 * Helper function to determine browser prefix for CSS3 animation events
 * and property names.
 * @param {!Object} windowObj
 * @param {string} eventType
 * @return {string}
 */
function getAnimationName(windowObj, eventType) {
  if (!hasProperShape(windowObj) || !eventFoundInMaps(eventType)) {
    return eventType;
  }

  var map = /** @type {!Object<string, !VendorPropertyMapType>} */eventType in eventTypeMap ? eventTypeMap : cssPropertyMap;
  var el = windowObj['document']['createElement']('div');
  var eventName = '';

  if (map === eventTypeMap) {
    eventName = getJavaScriptEventName(eventType, map, el);
  } else {
    eventName = map[eventType].noPrefix in el.style ? map[eventType].noPrefix : map[eventType].webkitPrefix;
  }

  return eventName;
}

// Public functions to access getAnimationName() for JavaScript events or CSS
// property names.

var transformStyleProperties = ['transform', 'WebkitTransform', 'MozTransform', 'OTransform', 'MSTransform'];

/**
 * @param {!Object} windowObj
 * @param {string} eventType
 * @return {string}
 */
function getCorrectEventName(windowObj, eventType) {
  return getAnimationName(windowObj, eventType);
}

/**
 * @param {!Object} windowObj
 * @param {string} eventType
 * @return {string}
 */
function getCorrectPropertyName(windowObj, eventType) {
  return getAnimationName(windowObj, eventType);
}

/***/ }),

/***/ "6y2n":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCFoundation; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Copyright 2016 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @template A
 */
var MDCFoundation = function () {
  _createClass(MDCFoundation, null, [{
    key: "cssClasses",

    /** @return enum{cssClasses} */
    get: function get() {
      // Classes extending MDCFoundation should implement this method to return an object which exports every
      // CSS class the foundation class needs as a property. e.g. {ACTIVE: 'mdc-component--active'}
      return {};
    }

    /** @return enum{strings} */

  }, {
    key: "strings",
    get: function get() {
      // Classes extending MDCFoundation should implement this method to return an object which exports all
      // semantic strings as constants. e.g. {ARIA_ROLE: 'tablist'}
      return {};
    }

    /** @return enum{numbers} */

  }, {
    key: "numbers",
    get: function get() {
      // Classes extending MDCFoundation should implement this method to return an object which exports all
      // of its semantic numbers as constants. e.g. {ANIMATION_DELAY_MS: 350}
      return {};
    }

    /** @return {!Object} */

  }, {
    key: "defaultAdapter",
    get: function get() {
      // Classes extending MDCFoundation may choose to implement this getter in order to provide a convenient
      // way of viewing the necessary methods of an adapter. In the future, this could also be used for adapter
      // validation.
      return {};
    }

    /**
     * @param {A=} adapter
     */

  }]);

  function MDCFoundation() {
    var adapter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, MDCFoundation);

    /** @protected {!A} */
    this.adapter_ = adapter;
  }

  MDCFoundation.prototype.init = function init() {
    // Subclasses should override this method to perform initialization routines (registering events, etc.)
  };

  MDCFoundation.prototype.destroy = function destroy() {
    // Subclasses should override this method to perform de-initialization routines (de-registering events, etc.)
  };

  return MDCFoundation;
}();



/***/ }),

/***/ 7:
/***/ (function(module, exports) {

module.exports = require("net");

/***/ }),

/***/ "75l9":
/***/ (function(module, exports) {

module.exports = {"name":"axios","version":"0.15.3","description":"Promise based HTTP client for the browser and node.js","main":"index.js","scripts":{"test":"grunt test","start":"node ./sandbox/server.js","build":"NODE_ENV=production grunt build","preversion":"npm test","version":"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json","postversion":"git push && git push --tags","examples":"node ./examples/server.js","coveralls":"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js"},"repository":{"type":"git","url":"https://github.com/mzabriskie/axios.git"},"keywords":["xhr","http","ajax","promise","node"],"author":"Matt Zabriskie","license":"MIT","bugs":{"url":"https://github.com/mzabriskie/axios/issues"},"homepage":"https://github.com/mzabriskie/axios","devDependencies":{"coveralls":"^2.11.9","es6-promise":"^4.0.5","grunt":"^1.0.1","grunt-banner":"^0.6.0","grunt-cli":"^1.2.0","grunt-contrib-clean":"^1.0.0","grunt-contrib-nodeunit":"^1.0.0","grunt-contrib-watch":"^1.0.0","grunt-eslint":"^19.0.0","grunt-karma":"^2.0.0","grunt-ts":"^6.0.0-beta.3","grunt-typings":"^0.1.5","grunt-webpack":"^1.0.18","istanbul-instrumenter-loader":"^1.0.0","jasmine-core":"^2.4.1","karma":"^1.3.0","karma-chrome-launcher":"^2.0.0","karma-coverage":"^1.0.0","karma-firefox-launcher":"^1.0.0","karma-jasmine":"^1.0.2","karma-jasmine-ajax":"^0.1.13","karma-opera-launcher":"^1.0.0","karma-phantomjs-launcher":"^1.0.0","karma-safari-launcher":"^1.0.0","karma-sauce-launcher":"^1.1.0","karma-sinon":"^1.0.5","karma-sourcemap-loader":"^0.3.7","karma-webpack":"^1.7.0","load-grunt-tasks":"^3.5.2","minimist":"^1.2.0","phantomjs-prebuilt":"^2.1.7","sinon":"^1.17.4","webpack":"^1.13.1","webpack-dev-server":"^1.14.1","url-search-params":"^0.6.1","typescript":"^2.0.3"},"browser":{"./lib/adapters/http.js":"./lib/adapters/xhr.js"},"typings":"./index.d.ts","dependencies":{"follow-redirects":"1.0.0"}}

/***/ }),

/***/ "75oQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("EBst");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MaterialComponent__ = __webpack_require__("jM6C");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_toolbar__ = __webpack_require__("3Erf");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};




/**
 * @prop fixed = false
 * @prop fixed-lastrow-only = false
 * @prop waterfall = false
 * @prop flexible = false
 * @prop flexible-default-behavior = false
 */

var Toolbar = function (_MaterialComponent) {
  _inherits(Toolbar, _MaterialComponent);

  function Toolbar() {
    _classCallCheck(this, Toolbar);

    var _this = _possibleConstructorReturn(this, _MaterialComponent.call(this));

    _this.componentName = "toolbar";
    _this._mdcProps = ["fixed", "fixed-lastrow-only", "waterfall", "flexible", "flexible-default-behavior"];
    _this._onChange = _this._onChange.bind(_this);
    return _this;
  }

  Toolbar.prototype._onChange = function _onChange(e) {
    if (this.props.onChange) {
      this.props.onChange(e);
    }
  };

  Toolbar.prototype.componentDidMount = function componentDidMount() {
    this.MDComponent = new __WEBPACK_IMPORTED_MODULE_2__material_toolbar__["a" /* MDCToolbar */](this.control);
    this.MDComponent.listen("MDCToolbar:change", this._onChange);
  };

  Toolbar.prototype.componentWillUnmount = function componentWillUnmount() {
    this.MDComponent.unlisten("MDCToolbar:change", this._onChange);
    this.MDComponent.destroy && this.MDComponent.destroy();
  };

  Toolbar.prototype.materialDom = function materialDom(props) {
    var _this2 = this;

    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("header", _extends({
      ref: function ref(control) {
        _this2.control = control;
      }
    }, props), props.children);
  };

  return Toolbar;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);

var ToolbarRow = function (_MaterialComponent2) {
  _inherits(ToolbarRow, _MaterialComponent2);

  function ToolbarRow() {
    _classCallCheck(this, ToolbarRow);

    var _this3 = _possibleConstructorReturn(this, _MaterialComponent2.call(this));

    _this3.componentName = "toolbar__row";
    return _this3;
  }

  return ToolbarRow;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);

/**
 * @prop align-end = false
 * @prop align-start = false
 * @prop shrink-to-fit = false
 */


var ToolbarSection = function (_MaterialComponent3) {
  _inherits(ToolbarSection, _MaterialComponent3);

  function ToolbarSection() {
    _classCallCheck(this, ToolbarSection);

    var _this4 = _possibleConstructorReturn(this, _MaterialComponent3.call(this));

    _this4.componentName = "toolbar__section";
    _this4._mdcProps = ["align-start", "align-end", "shrink-to-fit"];
    return _this4;
  }

  ToolbarSection.prototype.materialDom = function materialDom(props) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("section", props, props.children);
  };

  return ToolbarSection;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);

/**
 * @prop menu = false
 */


var ToolbarIcon = function (_MaterialComponent4) {
  _inherits(ToolbarIcon, _MaterialComponent4);

  function ToolbarIcon(props) {
    _classCallCheck(this, ToolbarIcon);

    var _this5 = _possibleConstructorReturn(this, _MaterialComponent4.call(this));

    _this5.componentName = "toolbar__icon";
    if (props.menu) {
      _this5.componentName += "--menu";
    }
    return _this5;
  }

  ToolbarIcon.prototype.materialDom = function materialDom(props) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("a", _extends({ className: "material-icons" }, props), props.children || "menu");
  };

  return ToolbarIcon;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);

/**
 * @prop title = ''
 */


var ToolbarTitle = function (_MaterialComponent5) {
  _inherits(ToolbarTitle, _MaterialComponent5);

  function ToolbarTitle() {
    _classCallCheck(this, ToolbarTitle);

    var _this6 = _possibleConstructorReturn(this, _MaterialComponent5.call(this));

    _this6.componentName = "toolbar__title";
    return _this6;
  }

  ToolbarTitle.prototype.materialDom = function materialDom(props) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("span", props, props.children);
  };

  return ToolbarTitle;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);

Toolbar.Section = ToolbarSection;
Toolbar.Icon = ToolbarIcon;
Toolbar.Title = ToolbarTitle;
Toolbar.Row = ToolbarRow;

/* harmony default export */ __webpack_exports__["a"] = (Toolbar);

/***/ }),

/***/ "7GwW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("cGG2");
var settle = __webpack_require__("21It");
var buildURL = __webpack_require__("DQCr");
var parseHeaders = __webpack_require__("oJlt");
var isURLSameOrigin = __webpack_require__("GHBc");
var createError = __webpack_require__("FtD3");
var btoa = typeof window !== 'undefined' && window.btoa && window.btoa.bind(window) || __webpack_require__("thJu");

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();
    var loadEvent = 'onreadystatechange';
    var xDomain = false;

    // For IE 8/9 CORS support
    // Only supports POST and GET calls and doesn't returns the response headers.
    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
    if ("production" !== 'test' && typeof window !== 'undefined' && window.XDomainRequest && !('withCredentials' in request) && !isURLSameOrigin(config.url)) {
      request = new window.XDomainRequest();
      loadEvent = 'onload';
      xDomain = true;
      request.onprogress = function handleProgress() {};
      request.ontimeout = function handleTimeout() {};
    }

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request[loadEvent] = function handleLoad() {
      if (!request || request.readyState !== 4 && !xDomain) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        // IE sends 1223 instead of 204 (https://github.com/mzabriskie/axios/issues/201)
        status: request.status === 1223 ? 204 : request.status,
        statusText: request.status === 1223 ? 'No Content' : request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED'));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__("p1b6");

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ? cookies.read(config.xsrfCookieName) : undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        if (request.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};

/***/ }),

/***/ "7OxD":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 8:
/***/ (function(module, exports) {

module.exports = require("stream");

/***/ }),

/***/ 9:
/***/ (function(module, exports) {

module.exports = require("tty");

/***/ }),

/***/ "DQCr":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("cGG2");

function encode(val) {
  return encodeURIComponent(val).replace(/%40/gi, '@').replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, '+').replace(/%5B/gi, '[').replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      }

      if (!utils.isArray(val)) {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};

/***/ }),

/***/ "E1C8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Home; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("EBst");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style__ = __webpack_require__("ZAL5");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_skills_list__ = __webpack_require__("PmzK");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_config_dialog__ = __webpack_require__("fawa");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store_main__ = __webpack_require__("dwjF");


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var _ref2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_3__components_config_dialog__["a" /* default */], null);

var Home = function (_Component) {
	_inherits(Home, _Component);

	function Home() {
		var _temp, _this, _ret;

		_classCallCheck(this, Home);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
			filters: __WEBPACK_IMPORTED_MODULE_4__store_main__["a" /* default */].get("filters")
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	Home.prototype.componentDidMount = function componentDidMount() {
		var _this2 = this;

		__WEBPACK_IMPORTED_MODULE_4__store_main__["a" /* default */].on("update.filters", function (_ref) {
			var key = _ref.key,
			    value = _ref.value;
			return _this2.setState({ filters: __WEBPACK_IMPORTED_MODULE_4__store_main__["a" /* default */].get("filters") });
		});
	};

	Home.prototype.render = function render() {
		return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
			"div",
			{ "class": __WEBPACK_IMPORTED_MODULE_1__style___default.a.home },
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_2__components_skills_list__["a" /* default */], { filters: this.state.filters }),
			_ref2
		);
	};

	return Home;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);




if (typeof window !== "undefined") window.store = __WEBPACK_IMPORTED_MODULE_4__store_main__["a" /* default */];

/***/ }),

/***/ "EBst":
/***/ (function(module, exports, __webpack_require__) {

!function () {
  "use strict";
  function e() {}function t(t, n) {
    var o,
        r,
        i,
        l,
        a = E;for (l = arguments.length; l-- > 2;) {
      W.push(arguments[l]);
    }n && null != n.children && (W.length || W.push(n.children), delete n.children);while (W.length) {
      if ((r = W.pop()) && void 0 !== r.pop) for (l = r.length; l--;) {
        W.push(r[l]);
      } else "boolean" == typeof r && (r = null), (i = "function" != typeof t) && (null == r ? r = "" : "number" == typeof r ? r += "" : "string" != typeof r && (i = !1)), i && o ? a[a.length - 1] += r : a === E ? a = [r] : a.push(r), o = i;
    }var u = new e();return u.nodeName = t, u.children = a, u.attributes = null == n ? void 0 : n, u.key = null == n ? void 0 : n.key, void 0 !== S.vnode && S.vnode(u), u;
  }function n(e, t) {
    for (var n in t) {
      e[n] = t[n];
    }return e;
  }function o(e, o) {
    return t(e.nodeName, n(n({}, e.attributes), o), arguments.length > 2 ? [].slice.call(arguments, 2) : e.children);
  }function r(e) {
    !e.__d && (e.__d = !0) && 1 == A.push(e) && (S.debounceRendering || P)(i);
  }function i() {
    var e,
        t = A;A = [];while (e = t.pop()) {
      e.__d && k(e);
    }
  }function l(e, t, n) {
    return "string" == typeof t || "number" == typeof t ? void 0 !== e.splitText : "string" == typeof t.nodeName ? !e._componentConstructor && a(e, t.nodeName) : n || e._componentConstructor === t.nodeName;
  }function a(e, t) {
    return e.__n === t || e.nodeName.toLowerCase() === t.toLowerCase();
  }function u(e) {
    var t = n({}, e.attributes);t.children = e.children;var o = e.nodeName.defaultProps;if (void 0 !== o) for (var r in o) {
      void 0 === t[r] && (t[r] = o[r]);
    }return t;
  }function _(e, t) {
    var n = t ? document.createElementNS("http://www.w3.org/2000/svg", e) : document.createElement(e);return n.__n = e, n;
  }function p(e) {
    var t = e.parentNode;t && t.removeChild(e);
  }function c(e, t, n, o, r) {
    if ("className" === t && (t = "class"), "key" === t) ;else if ("ref" === t) n && n(null), o && o(e);else if ("class" !== t || r) {
      if ("style" === t) {
        if (o && "string" != typeof o && "string" != typeof n || (e.style.cssText = o || ""), o && "object" == typeof o) {
          if ("string" != typeof n) for (var i in n) {
            i in o || (e.style[i] = "");
          }for (var i in o) {
            e.style[i] = "number" == typeof o[i] && !1 === V.test(i) ? o[i] + "px" : o[i];
          }
        }
      } else if ("dangerouslySetInnerHTML" === t) o && (e.innerHTML = o.__html || "");else if ("o" == t[0] && "n" == t[1]) {
        var l = t !== (t = t.replace(/Capture$/, ""));t = t.toLowerCase().substring(2), o ? n || e.addEventListener(t, f, l) : e.removeEventListener(t, f, l), (e.__l || (e.__l = {}))[t] = o;
      } else if ("list" !== t && "type" !== t && !r && t in e) s(e, t, null == o ? "" : o), null != o && !1 !== o || e.removeAttribute(t);else {
        var a = r && t !== (t = t.replace(/^xlink\:?/, ""));null == o || !1 === o ? a ? e.removeAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase()) : e.removeAttribute(t) : "function" != typeof o && (a ? e.setAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase(), o) : e.setAttribute(t, o));
      }
    } else e.className = o || "";
  }function s(e, t, n) {
    try {
      e[t] = n;
    } catch (e) {}
  }function f(e) {
    return this.__l[e.type](S.event && S.event(e) || e);
  }function d() {
    var e;while (e = D.pop()) {
      S.afterMount && S.afterMount(e), e.componentDidMount && e.componentDidMount();
    }
  }function h(e, t, n, o, r, i) {
    H++ || (R = null != r && void 0 !== r.ownerSVGElement, j = null != e && !("__preactattr_" in e));var l = m(e, t, n, o, i);return r && l.parentNode !== r && r.appendChild(l), --H || (j = !1, i || d()), l;
  }function m(e, t, n, o, r) {
    var i = e,
        l = R;if (null != t && "boolean" != typeof t || (t = ""), "string" == typeof t || "number" == typeof t) return e && void 0 !== e.splitText && e.parentNode && (!e._component || r) ? e.nodeValue != t && (e.nodeValue = t) : (i = document.createTextNode(t), e && (e.parentNode && e.parentNode.replaceChild(i, e), b(e, !0))), i.__preactattr_ = !0, i;var u = t.nodeName;if ("function" == typeof u) return U(e, t, n, o);if (R = "svg" === u || "foreignObject" !== u && R, u += "", (!e || !a(e, u)) && (i = _(u, R), e)) {
      while (e.firstChild) {
        i.appendChild(e.firstChild);
      }e.parentNode && e.parentNode.replaceChild(i, e), b(e, !0);
    }var p = i.firstChild,
        c = i.__preactattr_,
        s = t.children;if (null == c) {
      c = i.__preactattr_ = {};for (var f = i.attributes, d = f.length; d--;) {
        c[f[d].name] = f[d].value;
      }
    }return !j && s && 1 === s.length && "string" == typeof s[0] && null != p && void 0 !== p.splitText && null == p.nextSibling ? p.nodeValue != s[0] && (p.nodeValue = s[0]) : (s && s.length || null != p) && v(i, s, n, o, j || null != c.dangerouslySetInnerHTML), g(i, t.attributes, c), R = l, i;
  }function v(e, t, n, o, r) {
    var i,
        a,
        u,
        _,
        c,
        s = e.childNodes,
        f = [],
        d = {},
        h = 0,
        v = 0,
        y = s.length,
        g = 0,
        w = t ? t.length : 0;if (0 !== y) for (var C = 0; C < y; C++) {
      var x = s[C],
          N = x.__preactattr_,
          k = w && N ? x._component ? x._component.__k : N.key : null;null != k ? (h++, d[k] = x) : (N || (void 0 !== x.splitText ? !r || x.nodeValue.trim() : r)) && (f[g++] = x);
    }if (0 !== w) for (var C = 0; C < w; C++) {
      _ = t[C], c = null;var k = _.key;if (null != k) h && void 0 !== d[k] && (c = d[k], d[k] = void 0, h--);else if (!c && v < g) for (i = v; i < g; i++) {
        if (void 0 !== f[i] && l(a = f[i], _, r)) {
          c = a, f[i] = void 0, i === g - 1 && g--, i === v && v++;break;
        }
      }c = m(c, _, n, o), u = s[C], c && c !== e && c !== u && (null == u ? e.appendChild(c) : c === u.nextSibling ? p(u) : e.insertBefore(c, u));
    }if (h) for (var C in d) {
      void 0 !== d[C] && b(d[C], !1);
    }while (v <= g) {
      void 0 !== (c = f[g--]) && b(c, !1);
    }
  }function b(e, t) {
    var n = e._component;n ? L(n) : (null != e.__preactattr_ && e.__preactattr_.ref && e.__preactattr_.ref(null), !1 !== t && null != e.__preactattr_ || p(e), y(e));
  }function y(e) {
    e = e.lastChild;while (e) {
      var t = e.previousSibling;b(e, !0), e = t;
    }
  }function g(e, t, n) {
    var o;for (o in n) {
      t && null != t[o] || null == n[o] || c(e, o, n[o], n[o] = void 0, R);
    }for (o in t) {
      "children" === o || "innerHTML" === o || o in n && t[o] === ("value" === o || "checked" === o ? e[o] : n[o]) || c(e, o, n[o], n[o] = t[o], R);
    }
  }function w(e) {
    var t = e.constructor.name;(I[t] || (I[t] = [])).push(e);
  }function C(e, t, n) {
    var o,
        r = I[e.name];if (e.prototype && e.prototype.render ? (o = new e(t, n), T.call(o, t, n)) : (o = new T(t, n), o.constructor = e, o.render = x), r) for (var i = r.length; i--;) {
      if (r[i].constructor === e) {
        o.__b = r[i].__b, r.splice(i, 1);break;
      }
    }return o;
  }function x(e, t, n) {
    return this.constructor(e, n);
  }function N(e, t, n, o, i) {
    e.__x || (e.__x = !0, (e.__r = t.ref) && delete t.ref, (e.__k = t.key) && delete t.key, !e.base || i ? e.componentWillMount && e.componentWillMount() : e.componentWillReceiveProps && e.componentWillReceiveProps(t, o), o && o !== e.context && (e.__c || (e.__c = e.context), e.context = o), e.__p || (e.__p = e.props), e.props = t, e.__x = !1, 0 !== n && (1 !== n && !1 === S.syncComponentUpdates && e.base ? r(e) : k(e, 1, i)), e.__r && e.__r(e));
  }function k(e, t, o, r) {
    if (!e.__x) {
      var i,
          l,
          a,
          _ = e.props,
          p = e.state,
          c = e.context,
          s = e.__p || _,
          f = e.__s || p,
          m = e.__c || c,
          v = e.base,
          y = e.__b,
          g = v || y,
          w = e._component,
          x = !1;if (v && (e.props = s, e.state = f, e.context = m, 2 !== t && e.shouldComponentUpdate && !1 === e.shouldComponentUpdate(_, p, c) ? x = !0 : e.componentWillUpdate && e.componentWillUpdate(_, p, c), e.props = _, e.state = p, e.context = c), e.__p = e.__s = e.__c = e.__b = null, e.__d = !1, !x) {
        i = e.render(_, p, c), e.getChildContext && (c = n(n({}, c), e.getChildContext()));var U,
            T,
            M = i && i.nodeName;if ("function" == typeof M) {
          var W = u(i);l = w, l && l.constructor === M && W.key == l.__k ? N(l, W, 1, c, !1) : (U = l, e._component = l = C(M, W, c), l.__b = l.__b || y, l.__u = e, N(l, W, 0, c, !1), k(l, 1, o, !0)), T = l.base;
        } else a = g, U = w, U && (a = e._component = null), (g || 1 === t) && (a && (a._component = null), T = h(a, i, c, o || !v, g && g.parentNode, !0));if (g && T !== g && l !== w) {
          var E = g.parentNode;E && T !== E && (E.replaceChild(T, g), U || (g._component = null, b(g, !1)));
        }if (U && L(U), e.base = T, T && !r) {
          var P = e,
              V = e;while (V = V.__u) {
            (P = V).base = T;
          }T._component = P, T._componentConstructor = P.constructor;
        }
      }if (!v || o ? D.unshift(e) : x || (e.componentDidUpdate && e.componentDidUpdate(s, f, m), S.afterUpdate && S.afterUpdate(e)), null != e.__h) while (e.__h.length) {
        e.__h.pop().call(e);
      }H || r || d();
    }
  }function U(e, t, n, o) {
    var r = e && e._component,
        i = r,
        l = e,
        a = r && e._componentConstructor === t.nodeName,
        _ = a,
        p = u(t);while (r && !_ && (r = r.__u)) {
      _ = r.constructor === t.nodeName;
    }return r && _ && (!o || r._component) ? (N(r, p, 3, n, o), e = r.base) : (i && !a && (L(i), e = l = null), r = C(t.nodeName, p, n), e && !r.__b && (r.__b = e, l = null), N(r, p, 1, n, o), e = r.base, l && e !== l && (l._component = null, b(l, !1))), e;
  }function L(e) {
    S.beforeUnmount && S.beforeUnmount(e);var t = e.base;e.__x = !0, e.componentWillUnmount && e.componentWillUnmount(), e.base = null;var n = e._component;n ? L(n) : t && (t.__preactattr_ && t.__preactattr_.ref && t.__preactattr_.ref(null), e.__b = t, p(t), w(e), y(t)), e.__r && e.__r(null);
  }function T(e, t) {
    this.__d = !0, this.context = t, this.props = e, this.state = this.state || {};
  }function M(e, t, n) {
    return h(n, e, {}, !1, t, !1);
  }var S = {},
      W = [],
      E = [],
      P = "function" == typeof Promise ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout,
      V = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,
      A = [],
      D = [],
      H = 0,
      R = !1,
      j = !1,
      I = {};n(T.prototype, { setState: function setState(e, t) {
      var o = this.state;this.__s || (this.__s = n({}, o)), n(o, "function" == typeof e ? e(o, this.props) : e), t && (this.__h = this.__h || []).push(t), r(this);
    }, forceUpdate: function forceUpdate(e) {
      e && (this.__h = this.__h || []).push(e), k(this, 2);
    }, render: function render() {} });var $ = { h: t, createElement: t, cloneElement: o, Component: T, render: M, rerender: i, options: S }; true ? module.exports = $ : self.preact = $;
}();
//# sourceMappingURL=preact.min.js.map

/***/ }),

/***/ "EarI":
/***/ (function(module, exports) {

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function (val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isNaN(val) === false) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(val));
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str);
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  if (ms >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (ms >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (ms >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (ms >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  return plural(ms, d, 'day') || plural(ms, h, 'hour') || plural(ms, m, 'minute') || plural(ms, s, 'second') || ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, n, name) {
  if (ms < n) {
    return;
  }
  if (ms < n * 1.5) {
    return Math.floor(ms / n) + ' ' + name;
  }
  return Math.ceil(ms / n) + ' ' + name + 's';
}

/***/ }),

/***/ "FtD3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__("t8qj");

/**
 * Create an Error with the specified message, config, error code, and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 @ @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, response);
};

/***/ }),

/***/ "Fy0/":
/***/ (function(module, exports, __webpack_require__) {

/**
 * This is the web browser implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = __webpack_require__("vmzn");
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = 'undefined' != typeof chrome && 'undefined' != typeof chrome.storage ? chrome.storage.local : localstorage();

/**
 * Colors.
 */

exports.colors = ['lightseagreen', 'forestgreen', 'goldenrod', 'dodgerblue', 'darkorchid', 'crimson'];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

function useColors() {
  // NB: In an Electron preload script, document will be defined but not fully
  // initialized. Since we know we're in Chrome, we'll just detect this case
  // explicitly
  if (typeof window !== 'undefined' && window.process && window.process.type === 'renderer') {
    return true;
  }

  // is webkit? http://stackoverflow.com/a/16459606/376773
  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
  return typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance ||
  // is firebug? http://stackoverflow.com/a/398120/376773
  typeof window !== 'undefined' && window.console && (window.console.firebug || window.console.exception && window.console.table) ||
  // is firefox >= v31?
  // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
  typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 ||
  // double check webkit in userAgent just in case we are in a worker
  typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
}

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

exports.formatters.j = function (v) {
  try {
    return JSON.stringify(v);
  } catch (err) {
    return '[UnexpectedJSONParseError]: ' + err.message;
  }
};

/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
  var useColors = this.useColors;

  args[0] = (useColors ? '%c' : '') + this.namespace + (useColors ? ' %c' : ' ') + args[0] + (useColors ? '%c ' : ' ') + '+' + exports.humanize(this.diff);

  if (!useColors) return;

  var c = 'color: ' + this.color;
  args.splice(1, 0, c, 'color: inherit');

  // the final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into
  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-zA-Z%]/g, function (match) {
    if ('%%' === match) return;
    index++;
    if ('%c' === match) {
      // we only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });

  args.splice(lastC, 0, c);
}

/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */

function log() {
  // this hackery is required for IE8/9, where
  // the `console.log` function doesn't have 'apply'
  return 'object' === typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments);
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */

function save(namespaces) {
  try {
    if (null == namespaces) {
      exports.storage.removeItem('debug');
    } else {
      exports.storage.debug = namespaces;
    }
  } catch (e) {}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
  var r;
  try {
    r = exports.storage.debug;
  } catch (e) {}

  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
  if (!r && typeof process !== 'undefined' && 'env' in process) {
    r = process.env.DEBUG;
  }

  return r;
}

/**
 * Enable namespaces listed in `localStorage.debug` initially.
 */

exports.enable(load());

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
  try {
    return window.localStorage;
  } catch (e) {}
}

/***/ }),

/***/ "G3Pm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("EBst");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style__ = __webpack_require__("53Gz");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_util__ = __webpack_require__("MXhL");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_preact_material_components_Checkbox__ = __webpack_require__("SIP7");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_preact_material_components_Checkbox_style_css__ = __webpack_require__("IPPu");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_preact_material_components_Checkbox_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_preact_material_components_Checkbox_style_css__);

/**
 * Adapted from mdl-data-table (Copyright Google)
 */








var _ref2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_3_preact_material_components_Checkbox__["a" /* default */], null);

var _ref3 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
    'td',
    null,
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_3_preact_material_components_Checkbox__["a" /* default */], null)
);

/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
    var headers = _ref.headers,
        values = _ref.values;
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
        'table',
        { 'class': __WEBPACK_IMPORTED_MODULE_1__style___default.a["mdl-data-table"] },
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
            'thead',
            null,
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
                'tr',
                null,
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
                    'th',
                    { 'class': __WEBPACK_IMPORTED_MODULE_1__style___default.a["mdl-data-table--checkbox"] },
                    _ref2
                ),
                Object.values(headers).map(function (prop) {
                    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
                        'th',
                        { 'class': __WEBPACK_IMPORTED_MODULE_1__style___default.a["mdl-data-table__cell--non-numeric"] },
                        prop
                    );
                })
            )
        ),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
            'tbody',
            null,
            values.map(function (run) {
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
                    'tr',
                    { key: run.sku + '-' + run.team.number + '-' + run.type },
                    _ref3,
                    Object.keys(headers).map(function (prop) {
                        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
                            'td',
                            { 'class': __WEBPACK_IMPORTED_MODULE_1__style___default.a["mdl-data-table__cell--non-numeric"] },
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lib_util__["a" /* dlv */])(run, prop)
                        );
                    })
                );
            })
        )
    );
});

/***/ }),

/***/ "GCgR":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("cGG2");
var settle = __webpack_require__("21It");
var buildURL = __webpack_require__("DQCr");
var http = __webpack_require__(1);
var https = __webpack_require__(2);
var httpFollow = __webpack_require__("YNMr").http;
var httpsFollow = __webpack_require__("YNMr").https;
var url = __webpack_require__(0);
var zlib = __webpack_require__(11);
var pkg = __webpack_require__("75l9");
var Buffer = __webpack_require__(4).Buffer;
var createError = __webpack_require__("FtD3");
var enhanceError = __webpack_require__("t8qj");

/*eslint consistent-return:0*/
module.exports = function httpAdapter(config) {
  return new Promise(function dispatchHttpRequest(resolve, reject) {
    var data = config.data;
    var headers = config.headers;
    var timer;
    var aborted = false;

    // Set User-Agent (required by some servers)
    // Only set header if it hasn't been set in config
    // See https://github.com/mzabriskie/axios/issues/69
    if (!headers['User-Agent'] && !headers['user-agent']) {
      headers['User-Agent'] = 'axios/' + pkg.version;
    }

    if (data && !utils.isStream(data)) {
      if (utils.isArrayBuffer(data)) {
        data = new Buffer(new Uint8Array(data));
      } else if (utils.isString(data)) {
        data = new Buffer(data, 'utf-8');
      } else {
        return reject(createError('Data after transformation must be a string, an ArrayBuffer, or a Stream', config));
      }

      // Add Content-Length header if data exists
      headers['Content-Length'] = data.length;
    }

    // HTTP basic authentication
    var auth = undefined;
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      auth = username + ':' + password;
    }

    // Parse url
    var parsed = url.parse(config.url);
    var protocol = parsed.protocol || 'http:';

    if (!auth && parsed.auth) {
      var urlAuth = parsed.auth.split(':');
      var urlUsername = urlAuth[0] || '';
      var urlPassword = urlAuth[1] || '';
      auth = urlUsername + ':' + urlPassword;
    }

    if (auth) {
      delete headers.Authorization;
    }

    var isHttps = protocol === 'https:';
    var agent = isHttps ? config.httpsAgent : config.httpAgent;

    var options = {
      hostname: parsed.hostname,
      port: parsed.port,
      path: buildURL(parsed.path, config.params, config.paramsSerializer).replace(/^\?/, ''),
      method: config.method,
      headers: headers,
      agent: agent,
      auth: auth
    };

    var proxy = config.proxy;
    if (!proxy) {
      var proxyEnv = protocol.slice(0, -1) + '_proxy';
      var proxyUrl = process.env[proxyEnv] || process.env[proxyEnv.toUpperCase()];
      if (proxyUrl) {
        var parsedProxyUrl = url.parse(proxyUrl);
        proxy = {
          host: parsedProxyUrl.hostname,
          port: parsedProxyUrl.port
        };

        if (parsedProxyUrl.auth) {
          var proxyUrlAuth = parsedProxyUrl.auth.split(':');
          proxy.auth = {
            username: proxyUrlAuth[0],
            password: proxyUrlAuth[1]
          };
        }
      }
    }

    if (proxy) {
      options.hostname = proxy.host;
      options.host = proxy.host;
      options.headers.host = parsed.hostname + (parsed.port ? ':' + parsed.port : '');
      options.port = proxy.port;
      options.path = protocol + '//' + parsed.hostname + (parsed.port ? ':' + parsed.port : '') + options.path;

      // Basic proxy authorization
      if (proxy.auth) {
        var base64 = new Buffer(proxy.auth.username + ':' + proxy.auth.password, 'utf8').toString('base64');
        options.headers['Proxy-Authorization'] = 'Basic ' + base64;
      }
    }

    var transport;
    if (config.maxRedirects === 0) {
      transport = isHttps ? https : http;
    } else {
      if (config.maxRedirects) {
        options.maxRedirects = config.maxRedirects;
      }
      transport = isHttps ? httpsFollow : httpFollow;
    }

    // Create the request
    var req = transport.request(options, function handleResponse(res) {
      if (aborted) return;

      // Response has been received so kill timer that handles request timeout
      clearTimeout(timer);
      timer = null;

      // uncompress the response body transparently if required
      var stream = res;
      switch (res.headers['content-encoding']) {
        /*eslint default-case:0*/
        case 'gzip':
        case 'compress':
        case 'deflate':
          // add the unzipper to the body stream processing pipeline
          stream = stream.pipe(zlib.createUnzip());

          // remove the content-encoding in order to not confuse downstream operations
          delete res.headers['content-encoding'];
          break;
      }

      var response = {
        status: res.statusCode,
        statusText: res.statusMessage,
        headers: res.headers,
        config: config,
        request: req
      };

      if (config.responseType === 'stream') {
        response.data = stream;
        settle(resolve, reject, response);
      } else {
        var responseBuffer = [];
        stream.on('data', function handleStreamData(chunk) {
          responseBuffer.push(chunk);

          // make sure the content length is not over the maxContentLength if specified
          if (config.maxContentLength > -1 && Buffer.concat(responseBuffer).length > config.maxContentLength) {
            reject(createError('maxContentLength size of ' + config.maxContentLength + ' exceeded', config));
          }
        });

        stream.on('error', function handleStreamError(err) {
          if (aborted) return;
          reject(enhanceError(err, config));
        });

        stream.on('end', function handleStreamEnd() {
          var responseData = Buffer.concat(responseBuffer);
          if (config.responseType !== 'arraybuffer') {
            responseData = responseData.toString('utf8');
          }

          response.data = responseData;
          settle(resolve, reject, response);
        });
      }
    });

    // Handle errors
    req.on('error', function handleRequestError(err) {
      if (aborted) return;
      reject(enhanceError(err, config));
    });

    // Handle request timeout
    if (config.timeout && !timer) {
      timer = setTimeout(function handleRequestTimeout() {
        req.abort();
        reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED'));
        aborted = true;
      }, config.timeout);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (aborted) {
          return;
        }

        req.abort();
        reject(cancel);
        aborted = true;
      });
    }

    // Send the request
    if (utils.isStream(data)) {
      data.pipe(req);
    } else {
      req.end(data);
    }
  });
};

/***/ }),

/***/ "GHBc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("cGG2");

module.exports = utils.isStandardBrowserEnv() ?

// Standard browser envs have full support of the APIs needed to test
// whether the request URL is of the same origin as current location.
function standardBrowserEnv() {
  var msie = /(msie|trident)/i.test(navigator.userAgent);
  var urlParsingNode = document.createElement('a');
  var originURL;

  /**
  * Parse a URL to discover it's components
  *
  * @param {String} url The URL to be parsed
  * @returns {Object}
  */
  function resolveURL(url) {
    var href = url;

    if (msie) {
      // IE needs attribute set twice to normalize properties
      urlParsingNode.setAttribute('href', href);
      href = urlParsingNode.href;
    }

    urlParsingNode.setAttribute('href', href);

    // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
    return {
      href: urlParsingNode.href,
      protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
      host: urlParsingNode.host,
      search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
      hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
      hostname: urlParsingNode.hostname,
      port: urlParsingNode.port,
      pathname: urlParsingNode.pathname.charAt(0) === '/' ? urlParsingNode.pathname : '/' + urlParsingNode.pathname
    };
  }

  originURL = resolveURL(window.location.href);

  /**
  * Determine if a URL shares the same origin as the current location
  *
  * @param {String} requestURL The URL to test
  * @returns {boolean} True if URL shares the same origin, otherwise false
  */
  return function isURLSameOrigin(requestURL) {
    var parsed = utils.isString(requestURL) ? resolveURL(requestURL) : requestURL;
    return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
  };
}() :

// Non standard browser envs (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
  return function isURLSameOrigin() {
    return true;
  };
}();

/***/ }),

/***/ "GzFB":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "IPPu":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "JP+z":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};

/***/ }),

/***/ "JPqk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCToolbarFoundation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__ = __webpack_require__("6y2n");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__("ZASX");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



var MDCToolbarFoundation = function (_MDCFoundation) {
  _inherits(MDCToolbarFoundation, _MDCFoundation);

  _createClass(MDCToolbarFoundation, null, [{
    key: 'cssClasses',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */];
    }
  }, {
    key: 'strings',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* strings */];
    }
  }, {
    key: 'numbers',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_1__constants__["c" /* numbers */];
    }
  }, {
    key: 'defaultAdapter',
    get: function get() {
      return {
        hasClass: function hasClass() {
          return (/* className: string */ /* boolean */false
          );
        },
        addClass: function addClass() /* className: string */{},
        removeClass: function removeClass() /* className: string */{},
        registerScrollHandler: function registerScrollHandler() /* handler: EventListener */{},
        deregisterScrollHandler: function deregisterScrollHandler() /* handler: EventListener */{},
        registerResizeHandler: function registerResizeHandler() /* handler: EventListener */{},
        deregisterResizeHandler: function deregisterResizeHandler() /* handler: EventListener */{},
        getViewportWidth: function getViewportWidth() {
          return (/* number */0
          );
        },
        getViewportScrollY: function getViewportScrollY() {
          return (/* number */0
          );
        },
        getOffsetHeight: function getOffsetHeight() {
          return (/* number */0
          );
        },
        getFirstRowElementOffsetHeight: function getFirstRowElementOffsetHeight() {
          return (/* number */0
          );
        },
        notifyChange: function notifyChange() /* evtData: {flexibleExpansionRatio: number} */{},
        setStyle: function setStyle() /* property: string, value: string */{},
        setStyleForTitleElement: function setStyleForTitleElement() /* property: string, value: string */{},
        setStyleForFlexibleRowElement: function setStyleForFlexibleRowElement() /* property: string, value: string */{},
        setStyleForFixedAdjustElement: function setStyleForFixedAdjustElement() /* property: string, value: string */{}
      };
    }
  }]);

  function MDCToolbarFoundation(adapter) {
    _classCallCheck(this, MDCToolbarFoundation);

    var _this = _possibleConstructorReturn(this, _MDCFoundation.call(this, _extends(MDCToolbarFoundation.defaultAdapter, adapter)));

    _this.resizeHandler_ = function () {
      return _this.checkRowHeight_();
    };
    _this.scrollHandler_ = function () {
      return _this.updateToolbarStyles_();
    };
    _this.checkRowHeightFrame_ = 0;
    _this.scrollFrame_ = 0;
    _this.executedLastChange_ = false;

    _this.calculations_ = {
      toolbarRowHeight: 0,
      // Calculated Height ratio. We use ratio to calculate corresponding heights in resize event.
      toolbarRatio: 0, // The ratio of toolbar height to row height
      flexibleExpansionRatio: 0, // The ratio of flexible space height to row height
      maxTranslateYRatio: 0, // The ratio of max toolbar move up distance to row height
      scrollThresholdRatio: 0, // The ratio of max scrollTop that we should listen to to row height
      // Derived Heights based on the above key ratios.
      toolbarHeight: 0,
      flexibleExpansionHeight: 0, // Flexible row minus toolbar height (derived)
      maxTranslateYDistance: 0, // When toolbar only fix last row (derived)
      scrollThreshold: 0
    };
    // Toolbar fixed behavior
    // If toolbar is fixed
    _this.fixed_ = false;
    // If fixed is targeted only at the last row
    _this.fixedLastrow_ = false;
    // Toolbar flexible behavior
    // If the first row is flexible
    _this.hasFlexibleRow_ = false;
    // If use the default behavior
    _this.useFlexDefaultBehavior_ = false;
    return _this;
  }

  MDCToolbarFoundation.prototype.init = function init() {
    this.fixed_ = this.adapter_.hasClass(MDCToolbarFoundation.cssClasses.FIXED);
    this.fixedLastrow_ = this.adapter_.hasClass(MDCToolbarFoundation.cssClasses.FIXED_LASTROW) & this.fixed_;
    this.hasFlexibleRow_ = this.adapter_.hasClass(MDCToolbarFoundation.cssClasses.TOOLBAR_ROW_FLEXIBLE);
    if (this.hasFlexibleRow_) {
      this.useFlexDefaultBehavior_ = this.adapter_.hasClass(MDCToolbarFoundation.cssClasses.FLEXIBLE_DEFAULT_BEHAVIOR);
    }
    this.initKeyRatio_();
    this.setKeyHeights_();
    this.adapter_.registerResizeHandler(this.resizeHandler_);
    this.adapter_.registerScrollHandler(this.scrollHandler_);
  };

  MDCToolbarFoundation.prototype.destroy = function destroy() {
    this.adapter_.deregisterResizeHandler(this.resizeHandler_);
    this.adapter_.deregisterScrollHandler(this.scrollHandler_);
  };

  MDCToolbarFoundation.prototype.updateAdjustElementStyles = function updateAdjustElementStyles() {
    if (this.fixed_) {
      this.adapter_.setStyleForFixedAdjustElement('margin-top', this.calculations_.toolbarHeight + 'px');
    }
  };

  MDCToolbarFoundation.prototype.getFlexibleExpansionRatio_ = function getFlexibleExpansionRatio_(scrollTop) {
    // To prevent division by zero when there is no flexibleExpansionHeight
    var delta = 0.0001;
    return Math.max(0, 1 - scrollTop / (this.calculations_.flexibleExpansionHeight + delta));
  };

  MDCToolbarFoundation.prototype.checkRowHeight_ = function checkRowHeight_() {
    var _this2 = this;

    cancelAnimationFrame(this.checkRowHeightFrame_);
    this.checkRowHeightFrame_ = requestAnimationFrame(function () {
      return _this2.setKeyHeights_();
    });
  };

  MDCToolbarFoundation.prototype.setKeyHeights_ = function setKeyHeights_() {
    var newToolbarRowHeight = this.getRowHeight_();
    if (newToolbarRowHeight !== this.calculations_.toolbarRowHeight) {
      this.calculations_.toolbarRowHeight = newToolbarRowHeight;
      this.calculations_.toolbarHeight = this.calculations_.toolbarRatio * this.calculations_.toolbarRowHeight;
      this.calculations_.flexibleExpansionHeight = this.calculations_.flexibleExpansionRatio * this.calculations_.toolbarRowHeight;
      this.calculations_.maxTranslateYDistance = this.calculations_.maxTranslateYRatio * this.calculations_.toolbarRowHeight;
      this.calculations_.scrollThreshold = this.calculations_.scrollThresholdRatio * this.calculations_.toolbarRowHeight;
      this.updateAdjustElementStyles();
      this.updateToolbarStyles_();
    }
  };

  MDCToolbarFoundation.prototype.updateToolbarStyles_ = function updateToolbarStyles_() {
    var _this3 = this;

    cancelAnimationFrame(this.scrollFrame_);
    this.scrollFrame_ = requestAnimationFrame(function () {
      var scrollTop = _this3.adapter_.getViewportScrollY();
      var hasScrolledOutOfThreshold = _this3.scrolledOutOfThreshold_(scrollTop);

      if (hasScrolledOutOfThreshold && _this3.executedLastChange_) {
        return;
      }

      var flexibleExpansionRatio = _this3.getFlexibleExpansionRatio_(scrollTop);

      _this3.updateToolbarFlexibleState_(flexibleExpansionRatio);
      if (_this3.fixedLastrow_) {
        _this3.updateToolbarFixedState_(scrollTop);
      }
      if (_this3.hasFlexibleRow_) {
        _this3.updateFlexibleRowElementStyles_(flexibleExpansionRatio);
      }
      _this3.executedLastChange_ = hasScrolledOutOfThreshold;
      _this3.adapter_.notifyChange({ flexibleExpansionRatio: flexibleExpansionRatio });
    });
  };

  MDCToolbarFoundation.prototype.scrolledOutOfThreshold_ = function scrolledOutOfThreshold_(scrollTop) {
    return scrollTop > this.calculations_.scrollThreshold;
  };

  MDCToolbarFoundation.prototype.initKeyRatio_ = function initKeyRatio_() {
    var toolbarRowHeight = this.getRowHeight_();
    var firstRowMaxRatio = this.adapter_.getFirstRowElementOffsetHeight() / toolbarRowHeight;
    this.calculations_.toolbarRatio = this.adapter_.getOffsetHeight() / toolbarRowHeight;
    this.calculations_.flexibleExpansionRatio = firstRowMaxRatio - 1;
    this.calculations_.maxTranslateYRatio = this.fixedLastrow_ ? this.calculations_.toolbarRatio - firstRowMaxRatio : 0;
    this.calculations_.scrollThresholdRatio = (this.fixedLastrow_ ? this.calculations_.toolbarRatio : firstRowMaxRatio) - 1;
  };

  MDCToolbarFoundation.prototype.getRowHeight_ = function getRowHeight_() {
    var breakpoint = MDCToolbarFoundation.numbers.TOOLBAR_MOBILE_BREAKPOINT;
    return this.adapter_.getViewportWidth() < breakpoint ? MDCToolbarFoundation.numbers.TOOLBAR_ROW_MOBILE_HEIGHT : MDCToolbarFoundation.numbers.TOOLBAR_ROW_HEIGHT;
  };

  MDCToolbarFoundation.prototype.updateToolbarFlexibleState_ = function updateToolbarFlexibleState_(flexibleExpansionRatio) {
    this.adapter_.removeClass(MDCToolbarFoundation.cssClasses.FLEXIBLE_MAX);
    this.adapter_.removeClass(MDCToolbarFoundation.cssClasses.FLEXIBLE_MIN);
    if (flexibleExpansionRatio === 1) {
      this.adapter_.addClass(MDCToolbarFoundation.cssClasses.FLEXIBLE_MAX);
    } else if (flexibleExpansionRatio === 0) {
      this.adapter_.addClass(MDCToolbarFoundation.cssClasses.FLEXIBLE_MIN);
    }
  };

  MDCToolbarFoundation.prototype.updateToolbarFixedState_ = function updateToolbarFixedState_(scrollTop) {
    var translateDistance = Math.max(0, Math.min(scrollTop - this.calculations_.flexibleExpansionHeight, this.calculations_.maxTranslateYDistance));
    this.adapter_.setStyle('transform', 'translateY(' + -translateDistance + 'px)');

    if (translateDistance === this.calculations_.maxTranslateYDistance) {
      this.adapter_.addClass(MDCToolbarFoundation.cssClasses.FIXED_AT_LAST_ROW);
    } else {
      this.adapter_.removeClass(MDCToolbarFoundation.cssClasses.FIXED_AT_LAST_ROW);
    }
  };

  MDCToolbarFoundation.prototype.updateFlexibleRowElementStyles_ = function updateFlexibleRowElementStyles_(flexibleExpansionRatio) {
    if (this.fixed_) {
      var height = this.calculations_.flexibleExpansionHeight * flexibleExpansionRatio;
      this.adapter_.setStyleForFlexibleRowElement('height', height + this.calculations_.toolbarRowHeight + 'px');
    }
    if (this.useFlexDefaultBehavior_) {
      this.updateElementStylesDefaultBehavior_(flexibleExpansionRatio);
    }
  };

  MDCToolbarFoundation.prototype.updateElementStylesDefaultBehavior_ = function updateElementStylesDefaultBehavior_(flexibleExpansionRatio) {
    var maxTitleSize = MDCToolbarFoundation.numbers.MAX_TITLE_SIZE;
    var minTitleSize = MDCToolbarFoundation.numbers.MIN_TITLE_SIZE;
    var currentTitleSize = (maxTitleSize - minTitleSize) * flexibleExpansionRatio + minTitleSize;

    this.adapter_.setStyleForTitleElement('font-size', currentTitleSize + 'rem');
  };

  return MDCToolbarFoundation;
}(__WEBPACK_IMPORTED_MODULE_0__material_base_foundation__["a" /* default */]);



/***/ }),

/***/ "JQYI":
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module dependencies.
 */

var tty = __webpack_require__(9);
var util = __webpack_require__(10);

/**
 * This is the Node.js implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = __webpack_require__("vmzn");
exports.init = init;
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;

/**
 * Colors.
 */

exports.colors = [6, 2, 3, 4, 5, 1];

/**
 * Build up the default `inspectOpts` object from the environment variables.
 *
 *   $ DEBUG_COLORS=no DEBUG_DEPTH=10 DEBUG_SHOW_HIDDEN=enabled node script.js
 */

exports.inspectOpts = Object.keys(process.env).filter(function (key) {
  return (/^debug_/i.test(key)
  );
}).reduce(function (obj, key) {
  // camel-case
  var prop = key.substring(6).toLowerCase().replace(/_([a-z])/g, function (_, k) {
    return k.toUpperCase();
  });

  // coerce string value into JS value
  var val = process.env[key];
  if (/^(yes|on|true|enabled)$/i.test(val)) val = true;else if (/^(no|off|false|disabled)$/i.test(val)) val = false;else if (val === 'null') val = null;else val = Number(val);

  obj[prop] = val;
  return obj;
}, {});

/**
 * The file descriptor to write the `debug()` calls to.
 * Set the `DEBUG_FD` env variable to override with another value. i.e.:
 *
 *   $ DEBUG_FD=3 node script.js 3>debug.log
 */

var fd = parseInt(process.env.DEBUG_FD, 10) || 2;

if (1 !== fd && 2 !== fd) {
  util.deprecate(function () {}, 'except for stderr(2) and stdout(1), any other usage of DEBUG_FD is deprecated. Override debug.log if you want to use a different log function (https://git.io/debug_fd)')();
}

var stream = 1 === fd ? process.stdout : 2 === fd ? process.stderr : createWritableStdioStream(fd);

/**
 * Is stdout a TTY? Colored output is enabled when `true`.
 */

function useColors() {
  return 'colors' in exports.inspectOpts ? Boolean(exports.inspectOpts.colors) : tty.isatty(fd);
}

/**
 * Map %o to `util.inspect()`, all on a single line.
 */

exports.formatters.o = function (v) {
  this.inspectOpts.colors = this.useColors;
  return util.inspect(v, this.inspectOpts).replace(/\s*\n\s*/g, ' ');
};

/**
 * Map %o to `util.inspect()`, allowing multiple lines if needed.
 */

exports.formatters.O = function (v) {
  this.inspectOpts.colors = this.useColors;
  return util.inspect(v, this.inspectOpts);
};

/**
 * Adds ANSI color escape codes if enabled.
 *
 * @api public
 */

function formatArgs(args) {
  var name = this.namespace;
  var useColors = this.useColors;

  if (useColors) {
    var c = this.color;
    var prefix = '  \x1B[3' + c + ';1m' + name + ' ' + '\x1B[0m';

    args[0] = prefix + args[0].split('\n').join('\n' + prefix);
    args.push('\x1B[3' + c + 'm+' + exports.humanize(this.diff) + '\x1B[0m');
  } else {
    args[0] = new Date().toUTCString() + ' ' + name + ' ' + args[0];
  }
}

/**
 * Invokes `util.format()` with the specified arguments and writes to `stream`.
 */

function log() {
  return stream.write(util.format.apply(util, arguments) + '\n');
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */

function save(namespaces) {
  if (null == namespaces) {
    // If you set a process.env field to null or undefined, it gets cast to the
    // string 'null' or 'undefined'. Just delete instead.
    delete process.env.DEBUG;
  } else {
    process.env.DEBUG = namespaces;
  }
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
  return process.env.DEBUG;
}

/**
 * Copied from `node/src/node.js`.
 *
 * XXX: It's lame that node doesn't expose this API out-of-the-box. It also
 * relies on the undocumented `tty_wrap.guessHandleType()` which is also lame.
 */

function createWritableStdioStream(fd) {
  var stream;
  var tty_wrap = process.binding('tty_wrap');

  // Note stream._type is used for test-module-load-list.js

  switch (tty_wrap.guessHandleType(fd)) {
    case 'TTY':
      stream = new tty.WriteStream(fd);
      stream._type = 'tty';

      // Hack to have stream not keep the event loop alive.
      // See https://github.com/joyent/node/issues/1726
      if (stream._handle && stream._handle.unref) {
        stream._handle.unref();
      }
      break;

    case 'FILE':
      var fs = __webpack_require__(6);
      stream = new fs.SyncWriteStream(fd, { autoClose: false });
      stream._type = 'fs';
      break;

    case 'PIPE':
    case 'TCP':
      var net = __webpack_require__(7);
      stream = new net.Socket({
        fd: fd,
        readable: false,
        writable: true
      });

      // FIXME Should probably have an option in net.Socket to create a
      // stream from an existing fd which is writable only. But for now
      // we'll just add this hack and set the `readable` member to false.
      // Test: ./node test/fixtures/echo.js < /etc/passwd
      stream.readable = false;
      stream.read = null;
      stream._type = 'pipe';

      // FIXME Hack to have stream not keep the event loop alive.
      // See https://github.com/joyent/node/issues/1726
      if (stream._handle && stream._handle.unref) {
        stream._handle.unref();
      }
      break;

    default:
      // Probably an error on in uv_guess_handle()
      throw new Error('Implement me. Unknown stream file type!');
  }

  // For supporting legacy API we put the FD here.
  stream.fd = fd;

  stream._isStdio = true;

  return stream;
}

/**
 * Init logic for `debug` instances.
 *
 * Create a new `inspectOpts` object in case `useColors` is set
 * differently for a particular `debug` instance.
 */

function init(debug) {
  debug.inspectOpts = {};

  var keys = Object.keys(exports.inspectOpts);
  for (var i = 0; i < keys.length; i++) {
    debug.inspectOpts[keys[i]] = exports.inspectOpts[keys[i]];
  }
}

/**
 * Enable namespaces listed in `process.env.DEBUG` initially.
 */

exports.enable(load());

/***/ }),

/***/ "JkW7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("EBst");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style__ = __webpack_require__("rq4c");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_preact_router__ = __webpack_require__("y+SO");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_header__ = __webpack_require__("sIAo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__routes_home__ = __webpack_require__("E1C8");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__routes_profile__ = __webpack_require__("gNuw");










if (typeof window !== "undefined" && window.navigator && window.navigator.serviceWorker) {
	navigator.serviceWorker.getRegistration("/skills/").then(function (r) {
		return r ? r.update() : null;
	});
}

var _ref = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_3__components_header__["a" /* default */], null);

/* harmony default export */ __webpack_exports__["default"] = (function () {
	return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
		'div',
		{ id: 'app' },
		_ref,
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
			__WEBPACK_IMPORTED_MODULE_2_preact_router__["Router"],
			null,
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_4__routes_home__["a" /* default */], { path: __webpack_require__.p + "/" }),
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_5__routes_profile__["a" /* default */], { path: __webpack_require__.p + "/profile/", user: 'me' }),
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_5__routes_profile__["a" /* default */], { path: __webpack_require__.p + "/profile/:user" })
		)
	);
});

/***/ }),

/***/ "KCLY":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("cGG2");
var normalizeHeaderName = __webpack_require__("5VQ+");

var PROTECTION_PREFIX = /^\)\]\}',?\n/;
var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__("7GwW");
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__("GCgR");
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) || utils.isArrayBuffer(data) || utils.isStream(data) || utils.isFile(data) || utils.isBlob(data)) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      data = data.replace(PROTECTION_PREFIX, '');
      try {
        data = JSON.parse(data);
      } catch (e) {/* Ignore */}
    }
    return data;
  }],

  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMehtodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/***/ }),

/***/ "KN6U":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Link = exports.Match = undefined;

var _extends = Object.assign || function (target) {
	for (var i = 1; i < arguments.length; i++) {
		var source = arguments[i];for (var key in source) {
			if (Object.prototype.hasOwnProperty.call(source, key)) {
				target[key] = source[key];
			}
		}
	}return target;
};

var _preact = __webpack_require__("EBst");

var _preactRouter = __webpack_require__("y+SO");

function _objectWithoutProperties(obj, keys) {
	var target = {};for (var i in obj) {
		if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	}return target;
}

function _classCallCheck(instance, Constructor) {
	if (!(instance instanceof Constructor)) {
		throw new TypeError("Cannot call a class as a function");
	}
}

function _possibleConstructorReturn(self, call) {
	if (!self) {
		throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	}return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
	if (typeof superClass !== "function" && superClass !== null) {
		throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Match = exports.Match = function (_Component) {
	_inherits(Match, _Component);

	function Match() {
		var _temp, _this, _ret;

		_classCallCheck(this, Match);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.update = function (url) {
			_this.nextUrl = url;
			_this.setState({});
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	Match.prototype.componentDidMount = function componentDidMount() {
		_preactRouter.subscribers.push(this.update);
	};

	Match.prototype.componentWillUnmount = function componentWillUnmount() {
		_preactRouter.subscribers.splice(_preactRouter.subscribers.indexOf(this.update) >>> 0, 1);
	};

	Match.prototype.render = function render(props) {
		var url = this.nextUrl || (0, _preactRouter.getCurrentUrl)(),
		    path = url.replace(/\?.+$/, '');
		this.nextUrl = null;
		return props.children[0] && props.children[0]({
			url: url,
			path: path,
			matches: path === props.path
		});
	};

	return Match;
}(_preact.Component);

var Link = function Link(_ref) {
	var activeClassName = _ref.activeClassName,
	    path = _ref.path,
	    props = _objectWithoutProperties(_ref, ['activeClassName', 'path']);

	return (0, _preact.h)(Match, { path: path || props.href }, function (_ref2) {
		var matches = _ref2.matches;
		return (0, _preact.h)(_preactRouter.Link, _extends({}, props, { 'class': [props.class || props.className, matches && activeClassName].filter(Boolean).join(' ') }));
	});
};

exports.Link = Link;
exports.default = Match;

Match.Link = Link;

/***/ }),

/***/ "L27x":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCCheckbox; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_animation__ = __webpack_require__("6YtT");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_base_component__ = __webpack_require__("WwmH");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_selection_control__ = __webpack_require__("2exO");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__foundation__ = __webpack_require__("2YVC");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ripple__ = __webpack_require__("ucTD");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ripple_util__ = __webpack_require__("fDu/");
/* unused harmony reexport MDCCheckboxFoundation */
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



/* eslint-disable no-unused-vars */

/* eslint-enable no-unused-vars */






/**
 * @extends MDCComponent<!MDCCheckboxFoundation>
 * @implements {MDCSelectionControl}
 */
var MDCCheckbox = function (_MDCComponent) {
  _inherits(MDCCheckbox, _MDCComponent);

  MDCCheckbox.attachTo = function attachTo(root) {
    return new MDCCheckbox(root);
  };

  /**
   * Returns the state of the native control element, or null if the native control element is not present.
   * @return {?MDCSelectionControlState}
   * @private
   */


  _createClass(MDCCheckbox, [{
    key: 'nativeCb_',
    get: function get() {
      var NATIVE_CONTROL_SELECTOR = __WEBPACK_IMPORTED_MODULE_3__foundation__["a" /* default */].strings.NATIVE_CONTROL_SELECTOR;

      var cbEl = /** @type {?MDCSelectionControlState} */this.root_.querySelector(NATIVE_CONTROL_SELECTOR);
      return cbEl;
    }
  }]);

  function MDCCheckbox() {
    _classCallCheck(this, MDCCheckbox);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    /** @private {!MDCRipple} */
    var _this = _possibleConstructorReturn(this, _MDCComponent.call.apply(_MDCComponent, [this].concat(args)));

    _this.ripple_ = _this.initRipple_();
    return _this;
  }

  /**
   * @return {!MDCRipple}
   * @private
   */


  MDCCheckbox.prototype.initRipple_ = function initRipple_() {
    var _this2 = this;

    var MATCHES = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__material_ripple_util__["a" /* getMatchesProperty */])(HTMLElement.prototype);
    var adapter = _extends(__WEBPACK_IMPORTED_MODULE_4__material_ripple__["a" /* MDCRipple */].createAdapter(this), {
      isUnbounded: function isUnbounded() {
        return true;
      },
      isSurfaceActive: function isSurfaceActive() {
        return _this2.nativeCb_[MATCHES](':active');
      },
      registerInteractionHandler: function registerInteractionHandler(type, handler) {
        return _this2.nativeCb_.addEventListener(type, handler);
      },
      deregisterInteractionHandler: function deregisterInteractionHandler(type, handler) {
        return _this2.nativeCb_.removeEventListener(type, handler);
      },
      computeBoundingRect: function computeBoundingRect() {
        var _root_$getBoundingCli = _this2.root_.getBoundingClientRect(),
            left = _root_$getBoundingCli.left,
            top = _root_$getBoundingCli.top;

        var DIM = 40;
        return {
          top: top,
          left: left,
          right: left + DIM,
          bottom: top + DIM,
          width: DIM,
          height: DIM
        };
      }
    });
    var foundation = new __WEBPACK_IMPORTED_MODULE_4__material_ripple__["b" /* MDCRippleFoundation */](adapter);
    return new __WEBPACK_IMPORTED_MODULE_4__material_ripple__["a" /* MDCRipple */](this.root_, foundation);
  };

  /** @return {!MDCCheckboxFoundation} */


  MDCCheckbox.prototype.getDefaultFoundation = function getDefaultFoundation() {
    var _this3 = this;

    return new __WEBPACK_IMPORTED_MODULE_3__foundation__["a" /* default */]({
      addClass: function addClass(className) {
        return _this3.root_.classList.add(className);
      },
      removeClass: function removeClass(className) {
        return _this3.root_.classList.remove(className);
      },
      registerAnimationEndHandler: function registerAnimationEndHandler(handler) {
        return _this3.root_.addEventListener(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__material_animation__["a" /* getCorrectEventName */])(window, 'animationend'), handler);
      },
      deregisterAnimationEndHandler: function deregisterAnimationEndHandler(handler) {
        return _this3.root_.removeEventListener(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__material_animation__["a" /* getCorrectEventName */])(window, 'animationend'), handler);
      },
      registerChangeHandler: function registerChangeHandler(handler) {
        return _this3.nativeCb_.addEventListener('change', handler);
      },
      deregisterChangeHandler: function deregisterChangeHandler(handler) {
        return _this3.nativeCb_.removeEventListener('change', handler);
      },
      getNativeControl: function getNativeControl() {
        return _this3.nativeCb_;
      },
      forceLayout: function forceLayout() {
        return _this3.root_.offsetWidth;
      },
      isAttachedToDOM: function isAttachedToDOM() {
        return Boolean(_this3.root_.parentNode);
      }
    });
  };

  /** @return {!MDCRipple} */


  MDCCheckbox.prototype.destroy = function destroy() {
    this.ripple_.destroy();
    _MDCComponent.prototype.destroy.call(this);
  };

  _createClass(MDCCheckbox, [{
    key: 'ripple',
    get: function get() {
      return this.ripple_;
    }

    /** @return {boolean} */

  }, {
    key: 'checked',
    get: function get() {
      return this.foundation_.isChecked();
    }

    /** @param {boolean} checked */
    ,
    set: function set(checked) {
      this.foundation_.setChecked(checked);
    }

    /** @return {boolean} */

  }, {
    key: 'indeterminate',
    get: function get() {
      return this.foundation_.isIndeterminate();
    }

    /** @param {boolean} indeterminate */
    ,
    set: function set(indeterminate) {
      this.foundation_.setIndeterminate(indeterminate);
    }

    /** @return {boolean} */

  }, {
    key: 'disabled',
    get: function get() {
      return this.foundation_.isDisabled();
    }

    /** @param {boolean} disabled */
    ,
    set: function set(disabled) {
      this.foundation_.setDisabled(disabled);
    }

    /** @return {?string} */

  }, {
    key: 'value',
    get: function get() {
      return this.foundation_.getValue();
    }

    /** @param {?string} value */
    ,
    set: function set(value) {
      this.foundation_.setValue(value);
    }
  }]);

  return MDCCheckbox;
}(__WEBPACK_IMPORTED_MODULE_1__material_base_component__["a" /* default */]);

/***/ }),

/***/ "MXhL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return filterAsync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return mapAysnc; });
/* harmony export (immutable) */ __webpack_exports__["b"] = existant;
/* harmony export (immutable) */ __webpack_exports__["a"] = dlv;
/**
 * Async Filter function courtesy of @jib on SO
 * https://stackoverflow.com/a/33401045/2016735
 * @param {Array} array 
 * @param {Function} filter 
 */
var filterAsync = function filterAsync(array, filter) {
    return Promise.all(array.map(function (entry) {
        return filter(entry);
    })).then(function (bits) {
        return array.filter(function (entry) {
            return bits.shift();
        });
    });
};

var mapAysnc = function mapAysnc(array, fn) {
    return Promise.all(array.map(fn));
};

/**
 * Remove undefined values in object
 * @param {Object} params The params to filter
 */
function existant(params) {
    var out = {};
    for (var param in params) {
        if (params.hasOwnProperty(param)) {
            var p = params[param];
            if (typeof p !== "undefined" && p != "") out[param] = p;
        }
    }
    return out;
}

/**
 * Deep object access via a dot delimited string
 * @param {Object} object The object to access
 * @param {String} accessor The key to access, use '.' to specify sub keys
 * @param {*} value Optional. Set a value in the object
 */
function dlv(object, accessor, value) {
    return [object].concat(accessor.split(".")).reduce(function (a, b, i, l) {
        return value && l.length - i == 1 ? a[b] = value : a[b];
    });
}

/***/ }),

/***/ "Mov4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCSelect; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__("PZSP");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_menu__ = __webpack_require__("Up3a");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foundation__ = __webpack_require__("gCxY");
/* unused harmony reexport MDCSelectFoundation */
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */








var MDCSelect = function (_MDCComponent) {
  _inherits(MDCSelect, _MDCComponent);

  function MDCSelect() {
    _classCallCheck(this, MDCSelect);

    return _possibleConstructorReturn(this, _MDCComponent.apply(this, arguments));
  }

  MDCSelect.attachTo = function attachTo(root) {
    return new MDCSelect(root);
  };

  MDCSelect.prototype.item = function item(index) {
    return this.options[index] || null;
  };

  MDCSelect.prototype.nameditem = function nameditem(key) {
    // NOTE: IE11 precludes us from using Array.prototype.find
    for (var i = 0, options = this.options, option; option = options[i]; i++) {
      if (option.id === key || option.getAttribute('name') === key) {
        return option;
      }
    }
    return null;
  };

  MDCSelect.prototype.initialize = function initialize() {
    var menuFactory = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (el) {
      return new __WEBPACK_IMPORTED_MODULE_1__material_menu__["a" /* MDCSimpleMenu */](el);
    };

    this.menuEl_ = this.root_.querySelector('.mdc-select__menu');
    this.menu_ = menuFactory(this.menuEl_);
    this.selectedText_ = this.root_.querySelector('.mdc-select__selected-text');
  };

  MDCSelect.prototype.getDefaultFoundation = function getDefaultFoundation() {
    var _this2 = this;

    return new __WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */]({
      addClass: function addClass(className) {
        return _this2.root_.classList.add(className);
      },
      removeClass: function removeClass(className) {
        return _this2.root_.classList.remove(className);
      },
      setAttr: function setAttr(attr, value) {
        return _this2.root_.setAttribute(attr, value);
      },
      rmAttr: function rmAttr(attr, value) {
        return _this2.root_.removeAttribute(attr, value);
      },
      computeBoundingRect: function computeBoundingRect() {
        return _this2.root_.getBoundingClientRect();
      },
      registerInteractionHandler: function registerInteractionHandler(type, handler) {
        return _this2.root_.addEventListener(type, handler);
      },
      deregisterInteractionHandler: function deregisterInteractionHandler(type, handler) {
        return _this2.root_.removeEventListener(type, handler);
      },
      focus: function focus() {
        return _this2.root_.focus();
      },
      makeTabbable: function makeTabbable() {
        _this2.root_.tabIndex = 0;
      },
      makeUntabbable: function makeUntabbable() {
        _this2.root_.tabIndex = -1;
      },
      getComputedStyleValue: function getComputedStyleValue(prop) {
        return window.getComputedStyle(_this2.root_).getPropertyValue(prop);
      },
      setStyle: function setStyle(propertyName, value) {
        return _this2.root_.style.setProperty(propertyName, value);
      },
      create2dRenderingContext: function create2dRenderingContext() {
        return document.createElement('canvas').getContext('2d');
      },
      setMenuElStyle: function setMenuElStyle(propertyName, value) {
        return _this2.menuEl_.style.setProperty(propertyName, value);
      },
      setMenuElAttr: function setMenuElAttr(attr, value) {
        return _this2.menuEl_.setAttribute(attr, value);
      },
      rmMenuElAttr: function rmMenuElAttr(attr) {
        return _this2.menuEl_.removeAttribute(attr);
      },
      getMenuElOffsetHeight: function getMenuElOffsetHeight() {
        return _this2.menuEl_.offsetHeight;
      },
      openMenu: function openMenu(focusIndex) {
        return _this2.menu_.show({ focusIndex: focusIndex });
      },
      isMenuOpen: function isMenuOpen() {
        return _this2.menu_.open;
      },
      setSelectedTextContent: function setSelectedTextContent(selectedTextContent) {
        _this2.selectedText_.textContent = selectedTextContent;
      },
      getNumberOfOptions: function getNumberOfOptions() {
        return _this2.options.length;
      },
      getTextForOptionAtIndex: function getTextForOptionAtIndex(index) {
        return _this2.options[index].textContent;
      },
      getValueForOptionAtIndex: function getValueForOptionAtIndex(index) {
        return _this2.options[index].id || _this2.options[index].textContent;
      },
      setAttrForOptionAtIndex: function setAttrForOptionAtIndex(index, attr, value) {
        return _this2.options[index].setAttribute(attr, value);
      },
      rmAttrForOptionAtIndex: function rmAttrForOptionAtIndex(index, attr) {
        return _this2.options[index].removeAttribute(attr);
      },
      getOffsetTopForOptionAtIndex: function getOffsetTopForOptionAtIndex(index) {
        return _this2.options[index].offsetTop;
      },
      registerMenuInteractionHandler: function registerMenuInteractionHandler(type, handler) {
        return _this2.menu_.listen(type, handler);
      },
      deregisterMenuInteractionHandler: function deregisterMenuInteractionHandler(type, handler) {
        return _this2.menu_.unlisten(type, handler);
      },
      notifyChange: function notifyChange() {
        return _this2.emit(__WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */].strings.CHANGE_EVENT, _this2);
      },
      getWindowInnerHeight: function getWindowInnerHeight() {
        return window.innerHeight;
      }
    });
  };

  MDCSelect.prototype.initialSyncWithDOM = function initialSyncWithDOM() {
    var selectedOption = this.selectedOptions[0];
    var idx = selectedOption ? this.options.indexOf(selectedOption) : -1;
    if (idx >= 0) {
      this.selectedIndex = idx;
    }

    if (this.root_.getAttribute('aria-disabled') === 'true') {
      this.disabled = true;
    }
  };

  _createClass(MDCSelect, [{
    key: 'value',
    get: function get() {
      return this.foundation_.getValue();
    }
  }, {
    key: 'options',
    get: function get() {
      return this.menu_.items;
    }
  }, {
    key: 'selectedOptions',
    get: function get() {
      return this.root_.querySelectorAll('[aria-selected]');
    }
  }, {
    key: 'selectedIndex',
    get: function get() {
      return this.foundation_.getSelectedIndex();
    },
    set: function set(selectedIndex) {
      this.foundation_.setSelectedIndex(selectedIndex);
    }
  }, {
    key: 'disabled',
    get: function get() {
      return this.foundation_.isDisabled();
    },
    set: function set(disabled) {
      this.foundation_.setDisabled(disabled);
    }
  }]);

  return MDCSelect;
}(__WEBPACK_IMPORTED_MODULE_0__material_base__["a" /* MDCComponent */]);

/***/ }),

/***/ "O9Hi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCTextfield; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__("PZSP");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_ripple__ = __webpack_require__("ucTD");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__("gjgI");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__foundation__ = __webpack_require__("+5df");
/* unused harmony reexport MDCTextfieldFoundation */
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */









var MDCTextfield = function (_MDCComponent) {
  _inherits(MDCTextfield, _MDCComponent);

  function MDCTextfield() {
    _classCallCheck(this, MDCTextfield);

    return _possibleConstructorReturn(this, _MDCComponent.apply(this, arguments));
  }

  MDCTextfield.attachTo = function attachTo(root) {
    return new MDCTextfield(root);
  };

  MDCTextfield.prototype.initialize = function initialize() {
    var rippleFactory = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (el) {
      return new __WEBPACK_IMPORTED_MODULE_1__material_ripple__["a" /* MDCRipple */](el);
    };

    this.input_ = this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* strings */].INPUT_SELECTOR);
    this.label_ = this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* strings */].LABEL_SELECTOR);
    this.helptextElement = null;
    this.ripple = null;
    if (this.input_.hasAttribute('aria-controls')) {
      this.helptextElement = document.getElementById(this.input_.getAttribute('aria-controls'));
    }
    if (this.root_.classList.contains(__WEBPACK_IMPORTED_MODULE_2__constants__["b" /* cssClasses */].BOX)) {
      this.ripple = rippleFactory(this.root_);
    };
  };

  MDCTextfield.prototype.destroy = function destroy() {
    if (this.ripple) {
      this.ripple.destroy();
    }
    _MDCComponent.prototype.destroy.call(this);
  };

  MDCTextfield.prototype.initialSyncWithDom = function initialSyncWithDom() {
    this.disabled = this.input_.disabled;
  };

  MDCTextfield.prototype.getDefaultFoundation = function getDefaultFoundation() {
    var _this2 = this;

    return new __WEBPACK_IMPORTED_MODULE_3__foundation__["a" /* default */](_extends({
      addClass: function addClass(className) {
        return _this2.root_.classList.add(className);
      },
      removeClass: function removeClass(className) {
        return _this2.root_.classList.remove(className);
      },
      addClassToLabel: function addClassToLabel(className) {
        var label = _this2.label_;
        if (label) {
          label.classList.add(className);
        }
      },
      removeClassFromLabel: function removeClassFromLabel(className) {
        var label = _this2.label_;
        if (label) {
          label.classList.remove(className);
        }
      }
    }, this.getInputAdapterMethods_(), this.getHelptextAdapterMethods_()));
  };

  MDCTextfield.prototype.getInputAdapterMethods_ = function getInputAdapterMethods_() {
    var _this3 = this;

    return {
      registerInputFocusHandler: function registerInputFocusHandler(handler) {
        return _this3.input_.addEventListener('focus', handler);
      },
      registerInputBlurHandler: function registerInputBlurHandler(handler) {
        return _this3.input_.addEventListener('blur', handler);
      },
      registerInputInputHandler: function registerInputInputHandler(handler) {
        return _this3.input_.addEventListener('input', handler);
      },
      registerInputKeydownHandler: function registerInputKeydownHandler(handler) {
        return _this3.input_.addEventListener('keydown', handler);
      },
      deregisterInputFocusHandler: function deregisterInputFocusHandler(handler) {
        return _this3.input_.removeEventListener('focus', handler);
      },
      deregisterInputBlurHandler: function deregisterInputBlurHandler(handler) {
        return _this3.input_.removeEventListener('blur', handler);
      },
      deregisterInputInputHandler: function deregisterInputInputHandler(handler) {
        return _this3.input_.removeEventListener('input', handler);
      },
      deregisterInputKeydownHandler: function deregisterInputKeydownHandler(handler) {
        return _this3.input_.removeEventListener('keydown', handler);
      },
      getNativeInput: function getNativeInput() {
        return _this3.input_;
      }
    };
  };

  MDCTextfield.prototype.getHelptextAdapterMethods_ = function getHelptextAdapterMethods_() {
    var _this4 = this;

    return {
      addClassToHelptext: function addClassToHelptext(className) {
        if (_this4.helptextElement) {
          _this4.helptextElement.classList.add(className);
        }
      },
      removeClassFromHelptext: function removeClassFromHelptext(className) {
        if (_this4.helptextElement) {
          _this4.helptextElement.classList.remove(className);
        }
      },
      helptextHasClass: function helptextHasClass(className) {
        if (!_this4.helptextElement) {
          return false;
        }
        return _this4.helptextElement.classList.contains(className);
      },
      setHelptextAttr: function setHelptextAttr(name, value) {
        if (_this4.helptextElement) {
          _this4.helptextElement.setAttribute(name, value);
        }
      },
      removeHelptextAttr: function removeHelptextAttr(name) {
        if (_this4.helptextElement) {
          _this4.helptextElement.removeAttribute(name);
        }
      }
    };
  };

  _createClass(MDCTextfield, [{
    key: 'disabled',
    get: function get() {
      return this.foundation_.isDisabled();
    },
    set: function set(disabled) {
      this.foundation_.setDisabled(disabled);
    }
  }, {
    key: 'valid',
    set: function set(valid) {
      this.foundation_.setValid(valid);
    }
  }]);

  return MDCTextfield;
}(__WEBPACK_IMPORTED_MODULE_0__material_base__["a" /* MDCComponent */]);

/***/ }),

/***/ "OLv5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return strings; });
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var cssClasses = {
  ROOT: 'mdc-select',
  OPEN: 'mdc-select--open',
  DISABLED: 'mdc-select--disabled'
};

var strings = {
  CHANGE_EVENT: 'MDCSelect:change'
};

/***/ }),

/***/ "PZSP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__foundation__ = __webpack_require__("6y2n");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__component__ = __webpack_require__("WwmH");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__foundation__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__component__["a"]; });
/**
 * Copyright 2016 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */






/***/ }),

/***/ "PmzK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SkillsList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("EBst");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style__ = __webpack_require__("rgXW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_getSkills__ = __webpack_require__("5Lo5");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_table__ = __webpack_require__("G3Pm");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_preact_material_components_List__ = __webpack_require__("u5aD");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_preact_material_components_List_style_css__ = __webpack_require__("7OxD");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_preact_material_components_List_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_preact_material_components_List_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__store_main__ = __webpack_require__("dwjF");


function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }













var SkillsList = function (_Component) {
    _inherits(SkillsList, _Component);

    function SkillsList() {
        var _temp, _this, _ret;

        _classCallCheck(this, SkillsList);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
            loaded: false
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    SkillsList.prototype.componentDidMount = function componentDidMount() {
        var _this2 = this;

        this.getList();
        __WEBPACK_IMPORTED_MODULE_6__store_main__["a" /* default */].on("update.filters", function () {
            _this2.getList();
            _this2.setState({ loaded: false, list: [] });
        });
    };

    SkillsList.prototype.componentShouldUpdate = function componentShouldUpdate() {
        return false;
    };

    SkillsList.prototype.componentWillRecieveProps = function componentWillRecieveProps() {
        this.setState({ loaded: false });
    };

    SkillsList.prototype.getList = function getList() {
        var _this3 = this;

        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lib_getSkills__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_6__store_main__["a" /* default */].get("filters")).then(function (list) {
            return _this3.setState({
                list: list,
                loaded: true
            });
        });
    };

    SkillsList.prototype.render = function render(_ref, _ref2) {
        var loaded = _ref2.loaded,
            list = _ref2.list;

        _objectDestructuringEmpty(_ref);

        if (loaded) {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
                'div',
                { 'class': __WEBPACK_IMPORTED_MODULE_1__style___default.a.table },
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_3__data_table__["a" /* default */], { headers: {
                        filterRank: "Rank",
                        season_rank: "Global Rank",
                        score: "Score",
                        "team.team_name": "Team",
                        "team.number": "Team Number",
                        "event.name": "Event"

                    }, values: list })
            );
        } else {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
                'p',
                { 'class': __WEBPACK_IMPORTED_MODULE_1__style___default.a.loading },
                'Loading....'
            );
        }
    };

    return SkillsList;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);



/***/ }),

/***/ "QJUz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return strings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return numbers; });
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/** @const {string} */
var ROOT = 'mdc-checkbox';

/** @enum {string} */
var cssClasses = {
  UPGRADED: 'mdc-checkbox--upgraded',
  CHECKED: 'mdc-checkbox--checked',
  INDETERMINATE: 'mdc-checkbox--indeterminate',
  DISABLED: 'mdc-checkbox--disabled',
  ANIM_UNCHECKED_CHECKED: 'mdc-checkbox--anim-unchecked-checked',
  ANIM_UNCHECKED_INDETERMINATE: 'mdc-checkbox--anim-unchecked-indeterminate',
  ANIM_CHECKED_UNCHECKED: 'mdc-checkbox--anim-checked-unchecked',
  ANIM_CHECKED_INDETERMINATE: 'mdc-checkbox--anim-checked-indeterminate',
  ANIM_INDETERMINATE_CHECKED: 'mdc-checkbox--anim-indeterminate-checked',
  ANIM_INDETERMINATE_UNCHECKED: 'mdc-checkbox--anim-indeterminate-unchecked'
};

/** @enum {string} */
var strings = {
  NATIVE_CONTROL_SELECTOR: '.' + ROOT + '__native-control',
  TRANSITION_STATE_INIT: 'init',
  TRANSITION_STATE_CHECKED: 'checked',
  TRANSITION_STATE_UNCHECKED: 'unchecked',
  TRANSITION_STATE_INDETERMINATE: 'indeterminate'
};

/** @enum {number} */
var numbers = {
  ANIM_END_LATCH_MS: 100
};

/***/ }),

/***/ "Rp55":
/***/ (function(module, exports, __webpack_require__) {

/**
 * Detect Electron renderer process, which is node, but we should
 * treat as a browser.
 */

if (typeof process !== 'undefined' && process.type === 'renderer') {
  module.exports = __webpack_require__("Fy0/");
} else {
  module.exports = __webpack_require__("JQYI");
}

/***/ }),

/***/ "SIP7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Checkbox; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("EBst");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MaterialComponent__ = __webpack_require__("jM6C");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_checkbox___ = __webpack_require__("L27x");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

function _objectWithoutProperties(obj, keys) {
  var target = {};for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
  }return target;
}





/**
 */

var Checkbox = function (_MaterialComponent) {
  _inherits(Checkbox, _MaterialComponent);

  function Checkbox() {
    _classCallCheck(this, Checkbox);

    var _this = _possibleConstructorReturn(this, _MaterialComponent.call(this));

    _this.componentName = "checkbox";
    _this._mdcProps = ["disabled"];
    return _this;
  }

  Checkbox.prototype.componentDidMount = function componentDidMount() {
    this.MDComponent = new __WEBPACK_IMPORTED_MODULE_2__material_checkbox___["a" /* MDCCheckbox */](this.control);
  };

  Checkbox.prototype.componentWillUnmount = function componentWillUnmount() {
    this.MDComponent.destroy && this.MDComponent.destroy();
  };

  Checkbox.prototype.materialDom = function materialDom(allprops) {
    var _this2 = this;

    var className = allprops.className,
        props = _objectWithoutProperties(allprops, ["className"]);

    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("div", {
      className: "mdc-checkbox " + className,
      ref: function ref(control) {
        _this2.control = control;
      }
    }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("input", _extends({
      type: "checkbox",
      className: "mdc-checkbox__native-control"
    }, props)), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("div", { className: "mdc-checkbox__background" }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("svg", {
      version: "1.1",
      className: "mdc-checkbox__checkmark",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24"
    }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("path", {
      className: "mdc-checkbox__checkmark__path",
      fill: "none",
      stroke: "white",
      d: "M1.73,12.91 8.1,19.28 22.79,4.59"
    })), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("div", { className: "mdc-checkbox__mixedmark" })));
  };

  return Checkbox;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);



/***/ }),

/***/ "SldL":
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
 * additional grant of patent rights can be found in the PATENTS file in
 * the same directory.
 */

!function (global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      prototype[method] = function (arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function (genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ? ctor === GeneratorFunction ||
    // For the native GeneratorFunction constructor, the best we can
    // do is to check its .name property.
    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
  };

  runtime.mark = function (genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function (arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value && typeof value === "object" && hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function (unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
      // If enqueue has been called before, then we want to wait until
      // all previous Promises have been resolved before calling invoke,
      // so that results are always delivered in the correct order. If
      // enqueue has not been called before, then it is important to
      // call invoke immediately, without waiting on a callback to fire,
      // so that the async generator function has the opportunity to do
      // any necessary setup in a predictable way. This predictability
      // is why the Promise constructor synchronously invokes its
      // executor callback, and why async functions synchronously
      // execute code before the first await. Since we implement simple
      // async functions in terms of async generators, it is especially
      // important to get this right, even though it requires care.
      previousPromise ? previousPromise.then(callInvokeWithMethodAndArg,
      // Avoid propagating failures to Promises returned by later
      // invocations of the iterator.
      callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function (innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList));

    return runtime.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
    : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;
        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);
        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done ? GenStateCompleted : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };
        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (!info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }
    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function () {
    return this;
  };

  Gp.toString = function () {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function (object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function reset(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function stop() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function dispatchException(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }
          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function complete(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" || record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
}(
// In sloppy mode, unbound `this` refers to the global object, fallback to
// Function constructor if we're in global strict mode. That is sadly a form
// of indirect eval which violates Content Security Policy.
function () {
  return this;
}() || Function("return this")());

/***/ }),

/***/ "TNV1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("cGG2");

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};

/***/ }),

/***/ "Tv6c":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"profile":"profile__1f25-"};

/***/ }),

/***/ "Up3a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__("xC20");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__simple__ = __webpack_require__("oxUm");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__simple__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__simple__["b"]; });
/* unused harmony reexport util */
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */





/***/ }),

/***/ "WwmH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__foundation__ = __webpack_require__("6y2n");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Copyright 2016 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



/**
 * @template F
 */

var MDCComponent = function () {
  /**
   * @param {!Element} root
   * @return {!MDCComponent}
   */
  MDCComponent.attachTo = function attachTo(root) {
    // Subclasses which extend MDCBase should provide an attachTo() method that takes a root element and
    // returns an instantiated component with its root set to that element. Also note that in the cases of
    // subclasses, an explicit foundation class will not have to be passed in; it will simply be initialized
    // from getDefaultFoundation().
    return new MDCComponent(root, new __WEBPACK_IMPORTED_MODULE_0__foundation__["a" /* default */]());
  };

  /**
   * @param {!Element} root
   * @param {F=} foundation
   * @param {...?} args
   */


  function MDCComponent(root) {
    var foundation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

    _classCallCheck(this, MDCComponent);

    /** @protected {!Element} */
    this.root_ = root;

    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    this.initialize.apply(this, args);
    // Note that we initialize foundation here and not within the constructor's default param so that
    // this.root_ is defined and can be used within the foundation class.
    /** @protected {!F} */
    this.foundation_ = foundation === undefined ? this.getDefaultFoundation() : foundation;
    this.foundation_.init();
    this.initialSyncWithDOM();
  }

  MDCComponent.prototype.initialize = function initialize() /* ...args */{}
  // Subclasses can override this to do any additional setup work that would be considered part of a
  // "constructor". Essentially, it is a hook into the parent constructor before the foundation is
  // initialized. Any additional arguments besides root and foundation will be passed in here.


  /**
   * @return {!F} foundation
   */
  ;

  MDCComponent.prototype.getDefaultFoundation = function getDefaultFoundation() {
    // Subclasses must override this method to return a properly configured foundation class for the
    // component.
    throw new Error('Subclasses must override getDefaultFoundation to return a properly configured ' + 'foundation class');
  };

  MDCComponent.prototype.initialSyncWithDOM = function initialSyncWithDOM() {
    // Subclasses should override this method if they need to perform work to synchronize with a host DOM
    // object. An example of this would be a form control wrapper that needs to synchronize its internal state
    // to some property or attribute of the host DOM. Please note: this is *not* the place to perform DOM
    // reads/writes that would cause layout / paint, as this is called synchronously from within the constructor.
  };

  MDCComponent.prototype.destroy = function destroy() {
    // Subclasses may implement this method to release any resources / deregister any listeners they have
    // attached. An example of this might be deregistering a resize event from the window object.
    this.foundation_.destroy();
  };

  /**
   * Wrapper method to add an event listener to the component's root element. This is most useful when
   * listening for custom events.
   * @param {string} evtType
   * @param {!Function} handler
   */


  MDCComponent.prototype.listen = function listen(evtType, handler) {
    this.root_.addEventListener(evtType, handler);
  };

  /**
   * Wrapper method to remove an event listener to the component's root element. This is most useful when
   * unlistening for custom events.
   * @param {string} evtType
   * @param {!Function} handler
   */


  MDCComponent.prototype.unlisten = function unlisten(evtType, handler) {
    this.root_.removeEventListener(evtType, handler);
  };

  /**
   * Fires a cross-browser-compatible custom event from the component root of the given type,
   * with the given data.
   * @param {string} evtType
   * @param {!Object} evtData
   * @param {boolean=} shouldBubble
   */


  MDCComponent.prototype.emit = function emit(evtType, evtData) {
    var shouldBubble = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    var evt = void 0;
    if (typeof CustomEvent === 'function') {
      evt = new CustomEvent(evtType, {
        detail: evtData,
        bubbles: shouldBubble
      });
    } else {
      evt = document.createEvent('CustomEvent');
      evt.initCustomEvent(evtType, shouldBubble, false, evtData);
    }

    this.root_.dispatchEvent(evt);
  };

  return MDCComponent;
}();



/***/ }),

/***/ "XkKD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("EBst");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MaterialComponent__ = __webpack_require__("jM6C");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




/**
 * @prop mini = false
 * @prop plain = false
 */

var Formfield = function (_MaterialComponent) {
  _inherits(Formfield, _MaterialComponent);

  function Formfield() {
    _classCallCheck(this, Formfield);

    var _this = _possibleConstructorReturn(this, _MaterialComponent.call(this));

    _this.componentName = "form-field";
    _this._mdcProps = ["align-end"];
    return _this;
  }

  return Formfield;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);



/***/ }),

/***/ "XmWM":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaults = __webpack_require__("KCLY");
var utils = __webpack_require__("cGG2");
var InterceptorManager = __webpack_require__("fuGk");
var dispatchRequest = __webpack_require__("xLtR");
var isAbsoluteURL = __webpack_require__("dIwP");
var combineURLs = __webpack_require__("qRfI");

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults, this.defaults, { method: 'get' }, config);

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function (url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function (url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;

/***/ }),

/***/ "Xxa5":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("jyFz");

/***/ }),

/***/ "YNMr":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var url = __webpack_require__(0);
var assert = __webpack_require__(3);
var http = __webpack_require__(1);
var https = __webpack_require__(2);
var Writable = __webpack_require__(8).Writable;
var debug = __webpack_require__("Rp55")('follow-redirects');

var nativeProtocols = { 'http:': http, 'https:': https };
var schemes = {};
var exports = module.exports = {
	maxRedirects: 21
};
// RFC7231§4.2.1: Of the request methods defined by this specification,
// the GET, HEAD, OPTIONS, and TRACE methods are defined to be safe.
var safeMethods = { GET: true, HEAD: true, OPTIONS: true, TRACE: true };

// Create handlers that pass events from native requests
var eventHandlers = Object.create(null);
['abort', 'aborted', 'error'].forEach(function (event) {
	eventHandlers[event] = function (arg) {
		this._redirectable.emit(event, arg);
	};
});

// An HTTP(S) request that can be redirected
function RedirectableRequest(options, responseCallback) {
	// Initialize the request
	Writable.call(this);
	this._options = options;
	this._redirectCount = 0;

	// Attach a callback if passed
	if (responseCallback) {
		this.on('response', responseCallback);
	}

	// React to responses of native requests
	var self = this;
	this._onNativeResponse = function (response) {
		self._processResponse(response);
	};

	// Perform the first request
	this._performRequest();
}
RedirectableRequest.prototype = Object.create(Writable.prototype);

// Executes the next native request (initial or redirect)
RedirectableRequest.prototype._performRequest = function () {
	// If specified, use the agent corresponding to the protocol
	// (HTTP and HTTPS use different types of agents)
	var protocol = this._options.protocol;
	if (this._options.agents) {
		this._options.agent = this._options.agents[schemes[protocol]];
	}

	// Create the native request
	var nativeProtocol = nativeProtocols[this._options.protocol];
	var request = this._currentRequest = nativeProtocol.request(this._options, this._onNativeResponse);
	this._currentUrl = url.format(this._options);

	// Set up event handlers
	request._redirectable = this;
	for (var event in eventHandlers) {
		if (event) {
			request.on(event, eventHandlers[event]);
		}
	}

	// The first request is explicitly ended in RedirectableRequest#end
	if (this._currentResponse) {
		request.end();
	}
};

// Processes a response from the current native request
RedirectableRequest.prototype._processResponse = function (response) {
	// RFC7231§6.4: The 3xx (Redirection) class of status code indicates
	// that further action needs to be taken by the user agent in order to
	// fulfill the request. If a Location header field is provided,
	// the user agent MAY automatically redirect its request to the URI
	// referenced by the Location field value,
	// even if the specific status code is not understood.
	var location = response.headers.location;
	if (location && this._options.followRedirects !== false && response.statusCode >= 300 && response.statusCode < 400) {
		// RFC7231§6.4: A client SHOULD detect and intervene
		// in cyclical redirections (i.e., "infinite" redirection loops).
		if (++this._redirectCount > this._options.maxRedirects) {
			return this.emit('error', new Error('Max redirects exceeded.'));
		}

		// RFC7231§6.4.7: The 307 (Temporary Redirect) status code indicates
		// that the target resource resides temporarily under a different URI
		// and the user agent MUST NOT change the request method
		// if it performs an automatic redirection to that URI.
		if (response.statusCode !== 307) {
			// RFC7231§6.4: Automatic redirection needs to done with
			// care for methods not known to be safe […],
			// since the user might not wish to redirect an unsafe request.
			if (!(this._options.method in safeMethods)) {
				this._options.method = 'GET';
			}
		}

		// Perform the redirected request
		var redirectUrl = url.resolve(this._currentUrl, location);
		debug('redirecting to', redirectUrl);
		_extends(this._options, url.parse(redirectUrl));
		this._currentResponse = response;
		this._performRequest();
	} else {
		// The response is not a redirect; return it as-is
		response.responseUrl = this._currentUrl;
		return this.emit('response', response);
	}
};

// Aborts the current native request
RedirectableRequest.prototype.abort = function () {
	this._currentRequest.abort();
};

// Ends the current native request
RedirectableRequest.prototype.end = function (data, encoding, callback) {
	this._currentRequest.end(data, encoding, callback);
};

// Flushes the headers of the current native request
RedirectableRequest.prototype.flushHeaders = function () {
	this._currentRequest.flushHeaders();
};

// Sets the noDelay option of the current native request
RedirectableRequest.prototype.setNoDelay = function (noDelay) {
	this._currentRequest.setNoDelay(noDelay);
};

// Sets the socketKeepAlive option of the current native request
RedirectableRequest.prototype.setSocketKeepAlive = function (enable, initialDelay) {
	this._currentRequest.setSocketKeepAlive(enable, initialDelay);
};

// Sets the timeout option of the current native request
RedirectableRequest.prototype.setTimeout = function (timeout, callback) {
	this._currentRequest.setTimeout(timeout, callback);
};

// Writes buffered data to the current native request
RedirectableRequest.prototype._write = function (chunk, encoding, callback) {
	this._currentRequest.write(chunk, encoding, callback);
};

// Export a redirecting wrapper for each native protocol
Object.keys(nativeProtocols).forEach(function (protocol) {
	var scheme = schemes[protocol] = protocol.substr(0, protocol.length - 1);
	var nativeProtocol = nativeProtocols[protocol];
	var wrappedProtocol = exports[scheme] = Object.create(nativeProtocol);

	// Executes an HTTP request, following redirects
	wrappedProtocol.request = function (options, callback) {
		if (typeof options === 'string') {
			options = url.parse(options);
			options.maxRedirects = exports.maxRedirects;
		} else {
			options = _extends({
				maxRedirects: exports.maxRedirects,
				protocol: protocol
			}, options);
		}
		assert.equal(options.protocol, protocol, 'protocol mismatch');
		debug('options', options);

		return new RedirectableRequest(options, callback);
	};

	// Executes a GET request, following redirects
	wrappedProtocol.get = function (options, callback) {
		var request = wrappedProtocol.request(options, callback);
		request.end();
		return request;
	};
});

/***/ }),

/***/ "ZAL5":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"home":"home__2Q5nZ"};

/***/ }),

/***/ "ZASX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return strings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return numbers; });
/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var cssClasses = {
  FIXED: 'mdc-toolbar--fixed',
  FIXED_LASTROW: 'mdc-toolbar--fixed-lastrow-only',
  FIXED_AT_LAST_ROW: 'mdc-toolbar--fixed-at-last-row',
  TOOLBAR_ROW_FLEXIBLE: 'mdc-toolbar--flexible',
  FLEXIBLE_DEFAULT_BEHAVIOR: 'mdc-toolbar--flexible-default-behavior',
  FLEXIBLE_MAX: 'mdc-toolbar--flexible-space-maximized',
  FLEXIBLE_MIN: 'mdc-toolbar--flexible-space-minimized'
};

var strings = {
  TITLE_SELECTOR: '.mdc-toolbar__title',
  FIRST_ROW_SELECTOR: '.mdc-toolbar__row:first-child',
  CHANGE_EVENT: 'MDCToolbar:change'
};

var numbers = {
  MAX_TITLE_SIZE: 2.125,
  MIN_TITLE_SIZE: 1.25,
  TOOLBAR_ROW_HEIGHT: 64,
  TOOLBAR_ROW_MOBILE_HEIGHT: 56,
  TOOLBAR_MOBILE_BREAKPOINT: 600
};

/***/ }),

/***/ "ZmY6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return strings; });
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var cssClasses = {
  ROOT: 'mdc-dialog',
  OPEN: 'mdc-dialog--open',
  ANIMATING: 'mdc-dialog--animating',
  BACKDROP: 'mdc-dialog__backdrop',
  SCROLL_LOCK: 'mdc-dialog-scroll-lock',
  ACCEPT_BTN: 'mdc-dialog__footer__button--accept',
  CANCEL_BTN: 'mdc-dialog__footer__button--cancel'
};

var strings = {
  OPEN_DIALOG_SELECTOR: '.mdc-dialog--open',
  DIALOG_SURFACE_SELECTOR: '.mdc-dialog__surface',
  ACCEPT_SELECTOR: '.mdc-dialog__footer__button--accept',
  ACCEPT_EVENT: 'MDCDialog:accept',
  CANCEL_EVENT: 'MDCDialog:cancel'
};

/***/ }),

/***/ "a540":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "apge":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCSimpleMenuFoundation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__ = __webpack_require__("6y2n");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__("inYP");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__("+O1K");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util__ = __webpack_require__("xC20");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */






/**
 * @extends {MDCFoundation<!MDCSimpleMenuAdapter>}
 */

var MDCSimpleMenuFoundation = function (_MDCFoundation) {
  _inherits(MDCSimpleMenuFoundation, _MDCFoundation);

  _createClass(MDCSimpleMenuFoundation, null, [{
    key: 'cssClasses',

    /** @return enum{cssClasses} */
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */];
    }

    /** @return enum{strings} */

  }, {
    key: 'strings',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* strings */];
    }

    /** @return enum{numbers} */

  }, {
    key: 'numbers',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_2__constants__["c" /* numbers */];
    }

    /**
     * {@see MDCSimpleMenuAdapter} for typing information on parameters and return
     * types.
     * @return {!MDCSimpleMenuAdapter}
     */

  }, {
    key: 'defaultAdapter',
    get: function get() {
      return (/** @type {!MDCSimpleMenuAdapter} */{
          addClass: function addClass() {},
          removeClass: function removeClass() {},
          hasClass: function hasClass() {
            return false;
          },
          hasNecessaryDom: function hasNecessaryDom() {
            return false;
          },
          getAttributeForEventTarget: function getAttributeForEventTarget() {},
          getInnerDimensions: function getInnerDimensions() {
            return {};
          },
          hasAnchor: function hasAnchor() {
            return false;
          },
          getAnchorDimensions: function getAnchorDimensions() {
            return {};
          },
          getWindowDimensions: function getWindowDimensions() {
            return {};
          },
          setScale: function setScale() {},
          setInnerScale: function setInnerScale() {},
          getNumberOfItems: function getNumberOfItems() {
            return 0;
          },
          registerInteractionHandler: function registerInteractionHandler() {},
          deregisterInteractionHandler: function deregisterInteractionHandler() {},
          registerBodyClickHandler: function registerBodyClickHandler() {},
          deregisterBodyClickHandler: function deregisterBodyClickHandler() {},
          getYParamsForItemAtIndex: function getYParamsForItemAtIndex() {
            return {};
          },
          setTransitionDelayForItemAtIndex: function setTransitionDelayForItemAtIndex() {},
          getIndexForEventTarget: function getIndexForEventTarget() {
            return 0;
          },
          notifySelected: function notifySelected() {},
          notifyCancel: function notifyCancel() {},
          saveFocus: function saveFocus() {},
          restoreFocus: function restoreFocus() {},
          isFocused: function isFocused() {
            return false;
          },
          focus: function focus() {},
          getFocusedItemIndex: function getFocusedItemIndex() {
            return -1;
          },
          focusItemAtIndex: function focusItemAtIndex() {},
          isRtl: function isRtl() {
            return false;
          },
          setTransformOrigin: function setTransformOrigin() {},
          setPosition: function setPosition() {},
          getAccurateTime: function getAccurateTime() {
            return 0;
          }
        }
      );
    }

    /** @param {!MDCSimpleMenuAdapter} adapter */

  }]);

  function MDCSimpleMenuFoundation(adapter) {
    _classCallCheck(this, MDCSimpleMenuFoundation);

    /** @private {function(!Event)} */
    var _this = _possibleConstructorReturn(this, _MDCFoundation.call(this, _extends(MDCSimpleMenuFoundation.defaultAdapter, adapter)));

    _this.clickHandler_ = function (evt) {
      return _this.handlePossibleSelected_(evt);
    };
    /** @private {function(!Event)} */
    _this.keydownHandler_ = function (evt) {
      return _this.handleKeyboardDown_(evt);
    };
    /** @private {function(!Event)} */
    _this.keyupHandler_ = function (evt) {
      return _this.handleKeyboardUp_(evt);
    };
    /** @private {function(!Event)} */
    _this.documentClickHandler_ = function (evt) {
      _this.adapter_.notifyCancel();
      _this.close(evt);
    };
    /** @private {boolean} */
    _this.isOpen_ = false;
    /** @private {number} */
    _this.startScaleX_ = 0;
    /** @private {number} */
    _this.startScaleY_ = 0;
    /** @private {number} */
    _this.targetScale_ = 1;
    /** @private {number} */
    _this.scaleX_ = 0;
    /** @private {number} */
    _this.scaleY_ = 0;
    /** @private {boolean} */
    _this.running_ = false;
    /** @private {number} */
    _this.selectedTriggerTimerId_ = 0;
    /** @private {number} */
    _this.animationRequestId_ = 0;
    /** @private {!{ width: number, height: number }} */
    _this.dimensions_;
    /** @private {number} */
    _this.startTime_;
    /** @private {number} */
    _this.itemHeight_;
    return _this;
  }

  MDCSimpleMenuFoundation.prototype.init = function init() {
    var _MDCSimpleMenuFoundat = MDCSimpleMenuFoundation.cssClasses,
        ROOT = _MDCSimpleMenuFoundat.ROOT,
        OPEN = _MDCSimpleMenuFoundat.OPEN;


    if (!this.adapter_.hasClass(ROOT)) {
      throw new Error(ROOT + ' class required in root element.');
    }

    if (!this.adapter_.hasNecessaryDom()) {
      throw new Error('Required DOM nodes missing in ' + ROOT + ' component.');
    }

    if (this.adapter_.hasClass(OPEN)) {
      this.isOpen_ = true;
    }

    this.adapter_.registerInteractionHandler('click', this.clickHandler_);
    this.adapter_.registerInteractionHandler('keyup', this.keyupHandler_);
    this.adapter_.registerInteractionHandler('keydown', this.keydownHandler_);
  };

  MDCSimpleMenuFoundation.prototype.destroy = function destroy() {
    clearTimeout(this.selectedTriggerTimerId_);
    // Cancel any currently running animations.
    cancelAnimationFrame(this.animationRequestId_);
    this.adapter_.deregisterInteractionHandler('click', this.clickHandler_);
    this.adapter_.deregisterInteractionHandler('keyup', this.keyupHandler_);
    this.adapter_.deregisterInteractionHandler('keydown', this.keydownHandler_);
    this.adapter_.deregisterBodyClickHandler(this.documentClickHandler_);
  };

  /**
   * Calculates transition delays for individual menu items, so that they fade in one at a time.
   * @private
   */


  MDCSimpleMenuFoundation.prototype.applyTransitionDelays_ = function applyTransitionDelays_() {
    var _MDCSimpleMenuFoundat2 = MDCSimpleMenuFoundation.cssClasses,
        BOTTOM_LEFT = _MDCSimpleMenuFoundat2.BOTTOM_LEFT,
        BOTTOM_RIGHT = _MDCSimpleMenuFoundat2.BOTTOM_RIGHT;

    var numItems = this.adapter_.getNumberOfItems();
    var height = this.dimensions_.height;

    var transitionDuration = MDCSimpleMenuFoundation.numbers.TRANSITION_DURATION_MS / 1000;
    var start = MDCSimpleMenuFoundation.numbers.TRANSITION_SCALE_ADJUSTMENT_Y;

    for (var index = 0; index < numItems; index++) {
      var _adapter_$getYParamsF = this.adapter_.getYParamsForItemAtIndex(index),
          itemTop = _adapter_$getYParamsF.top,
          itemHeight = _adapter_$getYParamsF.height;

      this.itemHeight_ = itemHeight;
      var itemDelayFraction = itemTop / height;
      if (this.adapter_.hasClass(BOTTOM_LEFT) || this.adapter_.hasClass(BOTTOM_RIGHT)) {
        itemDelayFraction = (height - itemTop - itemHeight) / height;
      }
      var itemDelay = (start + itemDelayFraction * (1 - start)) * transitionDuration;
      // Use toFixed() here to normalize CSS unit precision across browsers
      this.adapter_.setTransitionDelayForItemAtIndex(index, itemDelay.toFixed(3) + 's');
    }
  };

  /**
   * Removes transition delays from menu items.
   * @private
   */


  MDCSimpleMenuFoundation.prototype.removeTransitionDelays_ = function removeTransitionDelays_() {
    var numItems = this.adapter_.getNumberOfItems();
    for (var i = 0; i < numItems; i++) {
      this.adapter_.setTransitionDelayForItemAtIndex(i, null);
    }
  };

  /**
   * Animates menu opening or closing.
   * @private
   */


  MDCSimpleMenuFoundation.prototype.animationLoop_ = function animationLoop_() {
    var _this2 = this;

    var time = this.adapter_.getAccurateTime();
    var _MDCSimpleMenuFoundat3 = MDCSimpleMenuFoundation.numbers,
        TRANSITION_DURATION_MS = _MDCSimpleMenuFoundat3.TRANSITION_DURATION_MS,
        TRANSITION_X1 = _MDCSimpleMenuFoundat3.TRANSITION_X1,
        TRANSITION_Y1 = _MDCSimpleMenuFoundat3.TRANSITION_Y1,
        TRANSITION_X2 = _MDCSimpleMenuFoundat3.TRANSITION_X2,
        TRANSITION_Y2 = _MDCSimpleMenuFoundat3.TRANSITION_Y2,
        TRANSITION_SCALE_ADJUSTMENT_X = _MDCSimpleMenuFoundat3.TRANSITION_SCALE_ADJUSTMENT_X,
        TRANSITION_SCALE_ADJUSTMENT_Y = _MDCSimpleMenuFoundat3.TRANSITION_SCALE_ADJUSTMENT_Y;

    var currentTime = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__util__["b" /* clamp */])((time - this.startTime_) / TRANSITION_DURATION_MS);

    // Animate X axis very slowly, so that only the Y axis animation is visible during fade-out.
    var currentTimeX = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__util__["b" /* clamp */])((currentTime - TRANSITION_SCALE_ADJUSTMENT_X) / (1 - TRANSITION_SCALE_ADJUSTMENT_X));
    // No time-shifting on the Y axis when closing.
    var currentTimeY = currentTime;

    var startScaleY = this.startScaleY_;
    if (this.targetScale_ === 1) {
      // Start with the menu at the height of a single item.
      if (this.itemHeight_) {
        startScaleY = Math.max(this.itemHeight_ / this.dimensions_.height, startScaleY);
      }
      // X axis moves faster, so time-shift forward.
      currentTimeX = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__util__["b" /* clamp */])(currentTime + TRANSITION_SCALE_ADJUSTMENT_X);
      // Y axis moves slower, so time-shift backwards and adjust speed by the difference.
      currentTimeY = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__util__["b" /* clamp */])((currentTime - TRANSITION_SCALE_ADJUSTMENT_Y) / (1 - TRANSITION_SCALE_ADJUSTMENT_Y));
    }

    // Apply cubic bezier easing independently to each axis.
    var easeX = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__util__["c" /* bezierProgress */])(currentTimeX, TRANSITION_X1, TRANSITION_Y1, TRANSITION_X2, TRANSITION_Y2);
    var easeY = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__util__["c" /* bezierProgress */])(currentTimeY, TRANSITION_X1, TRANSITION_Y1, TRANSITION_X2, TRANSITION_Y2);

    // Calculate the scales to apply to the outer container and inner container.
    this.scaleX_ = this.startScaleX_ + (this.targetScale_ - this.startScaleX_) * easeX;
    var invScaleX = 1 / (this.scaleX_ === 0 ? 1 : this.scaleX_);
    this.scaleY_ = startScaleY + (this.targetScale_ - startScaleY) * easeY;
    var invScaleY = 1 / (this.scaleY_ === 0 ? 1 : this.scaleY_);

    // Apply scales.
    this.adapter_.setScale(this.scaleX_, this.scaleY_);
    this.adapter_.setInnerScale(invScaleX, invScaleY);

    // Stop animation when we've covered the entire 0 - 1 range of time.
    if (currentTime < 1) {
      this.animationRequestId_ = requestAnimationFrame(function () {
        return _this2.animationLoop_();
      });
    } else {
      this.animationRequestId_ = 0;
      this.running_ = false;
      this.adapter_.removeClass(MDCSimpleMenuFoundation.cssClasses.ANIMATING);
    }
  };

  /**
   * Starts the open or close animation.
   * @private
   */


  MDCSimpleMenuFoundation.prototype.animateMenu_ = function animateMenu_() {
    var _this3 = this;

    this.startTime_ = this.adapter_.getAccurateTime();
    this.startScaleX_ = this.scaleX_;
    this.startScaleY_ = this.scaleY_;

    this.targetScale_ = this.isOpen_ ? 1 : 0;

    if (!this.running_) {
      this.running_ = true;
      this.animationRequestId_ = requestAnimationFrame(function () {
        return _this3.animationLoop_();
      });
    }
  };

  /**
   * @param {?number} focusIndex
   * @private
   */


  MDCSimpleMenuFoundation.prototype.focusOnOpen_ = function focusOnOpen_(focusIndex) {
    if (focusIndex === null) {
      // First, try focusing the menu.
      this.adapter_.focus();
      // If that doesn't work, focus first item instead.
      if (!this.adapter_.isFocused()) {
        this.adapter_.focusItemAtIndex(0);
      }
    } else {
      this.adapter_.focusItemAtIndex(focusIndex);
    }
  };

  /**
   * Handle keys that we want to repeat on hold (tab and arrows).
   * @param {!Event} evt
   * @return {boolean}
   * @private
   */


  MDCSimpleMenuFoundation.prototype.handleKeyboardDown_ = function handleKeyboardDown_(evt) {
    // Do nothing if Alt, Ctrl or Meta are pressed.
    if (evt.altKey || evt.ctrlKey || evt.metaKey) {
      return true;
    }

    var keyCode = evt.keyCode,
        key = evt.key,
        shiftKey = evt.shiftKey;

    var isTab = key === 'Tab' || keyCode === 9;
    var isArrowUp = key === 'ArrowUp' || keyCode === 38;
    var isArrowDown = key === 'ArrowDown' || keyCode === 40;
    var isSpace = key === 'Space' || keyCode === 32;

    var focusedItemIndex = this.adapter_.getFocusedItemIndex();
    var lastItemIndex = this.adapter_.getNumberOfItems() - 1;

    if (shiftKey && isTab && focusedItemIndex === 0) {
      this.adapter_.focusItemAtIndex(lastItemIndex);
      evt.preventDefault();
      return false;
    }

    if (!shiftKey && isTab && focusedItemIndex === lastItemIndex) {
      this.adapter_.focusItemAtIndex(0);
      evt.preventDefault();
      return false;
    }

    // Ensure Arrow{Up,Down} and space do not cause inadvertent scrolling
    if (isArrowUp || isArrowDown || isSpace) {
      evt.preventDefault();
    }

    if (isArrowUp) {
      if (focusedItemIndex === 0 || this.adapter_.isFocused()) {
        this.adapter_.focusItemAtIndex(lastItemIndex);
      } else {
        this.adapter_.focusItemAtIndex(focusedItemIndex - 1);
      }
    } else if (isArrowDown) {
      if (focusedItemIndex === lastItemIndex || this.adapter_.isFocused()) {
        this.adapter_.focusItemAtIndex(0);
      } else {
        this.adapter_.focusItemAtIndex(focusedItemIndex + 1);
      }
    }

    return true;
  };

  /**
   * Handle keys that we don't want to repeat on hold (Enter, Space, Escape).
   * @param {!Event} evt
   * @return {boolean}
   * @private
   */


  MDCSimpleMenuFoundation.prototype.handleKeyboardUp_ = function handleKeyboardUp_(evt) {
    // Do nothing if Alt, Ctrl or Meta are pressed.
    if (evt.altKey || evt.ctrlKey || evt.metaKey) {
      return true;
    }

    var keyCode = evt.keyCode,
        key = evt.key;

    var isEnter = key === 'Enter' || keyCode === 13;
    var isSpace = key === 'Space' || keyCode === 32;
    var isEscape = key === 'Escape' || keyCode === 27;

    if (isEnter || isSpace) {
      this.handlePossibleSelected_(evt);
    }

    if (isEscape) {
      this.adapter_.notifyCancel();
      this.close();
    }

    return true;
  };

  /**
   * @param {!Event} evt
   * @private
   */


  MDCSimpleMenuFoundation.prototype.handlePossibleSelected_ = function handlePossibleSelected_(evt) {
    var _this4 = this;

    if (this.adapter_.getAttributeForEventTarget(evt.target, __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* strings */].ARIA_DISABLED_ATTR) === 'true') {
      return;
    }
    var targetIndex = this.adapter_.getIndexForEventTarget(evt.target);
    if (targetIndex < 0) {
      return;
    }
    // Debounce multiple selections
    if (this.selectedTriggerTimerId_) {
      return;
    }
    this.selectedTriggerTimerId_ = setTimeout(function () {
      _this4.selectedTriggerTimerId_ = 0;
      _this4.close();
      _this4.adapter_.notifySelected({ index: targetIndex });
    }, __WEBPACK_IMPORTED_MODULE_2__constants__["c" /* numbers */].SELECTED_TRIGGER_DELAY);
  };

  /** @private */


  MDCSimpleMenuFoundation.prototype.autoPosition_ = function autoPosition_() {
    var _position;

    if (!this.adapter_.hasAnchor()) {
      return;
    }

    // Defaults: open from the top left.
    var vertical = 'top';
    var horizontal = 'left';

    var anchor = this.adapter_.getAnchorDimensions();
    var windowDimensions = this.adapter_.getWindowDimensions();

    var topOverflow = anchor.top + this.dimensions_.height - windowDimensions.height;
    var bottomOverflow = this.dimensions_.height - anchor.bottom;
    var extendsBeyondTopBounds = topOverflow > 0;

    if (extendsBeyondTopBounds) {
      if (bottomOverflow < topOverflow) {
        vertical = 'bottom';
      }
    }

    var leftOverflow = anchor.left + this.dimensions_.width - windowDimensions.width;
    var rightOverflow = this.dimensions_.width - anchor.right;
    var extendsBeyondLeftBounds = leftOverflow > 0;
    var extendsBeyondRightBounds = rightOverflow > 0;

    if (this.adapter_.isRtl()) {
      // In RTL, we prefer to open from the right.
      horizontal = 'right';
      if (extendsBeyondRightBounds && leftOverflow < rightOverflow) {
        horizontal = 'left';
      }
    } else if (extendsBeyondLeftBounds && rightOverflow < leftOverflow) {
      horizontal = 'right';
    }

    var position = (_position = {}, _position[horizontal] = '0', _position[vertical] = '0', _position);

    this.adapter_.setTransformOrigin(vertical + ' ' + horizontal);
    this.adapter_.setPosition(position);
  };

  /**
   * Open the menu.
   * @param {{focusIndex: ?number}=} options
   */


  MDCSimpleMenuFoundation.prototype.open = function open() {
    var _this5 = this;

    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$focusIndex = _ref.focusIndex,
        focusIndex = _ref$focusIndex === undefined ? null : _ref$focusIndex;

    this.adapter_.saveFocus();
    this.adapter_.addClass(MDCSimpleMenuFoundation.cssClasses.ANIMATING);
    this.animationRequestId_ = requestAnimationFrame(function () {
      _this5.dimensions_ = _this5.adapter_.getInnerDimensions();
      _this5.applyTransitionDelays_();
      _this5.autoPosition_();
      _this5.animateMenu_();
      _this5.adapter_.addClass(MDCSimpleMenuFoundation.cssClasses.OPEN);
      _this5.focusOnOpen_(focusIndex);
      _this5.adapter_.registerBodyClickHandler(_this5.documentClickHandler_);
    });
    this.isOpen_ = true;
  };

  /**
   * Closes the menu.
   * @param {Event=} evt
   */


  MDCSimpleMenuFoundation.prototype.close = function close() {
    var _this6 = this;

    var evt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    var targetIsDisabled = evt ? this.adapter_.getAttributeForEventTarget(evt.target, __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* strings */].ARIA_DISABLED_ATTR) === 'true' : false;

    if (targetIsDisabled) {
      return;
    }

    this.adapter_.deregisterBodyClickHandler(this.documentClickHandler_);
    this.adapter_.addClass(MDCSimpleMenuFoundation.cssClasses.ANIMATING);
    requestAnimationFrame(function () {
      _this6.removeTransitionDelays_();
      _this6.animateMenu_();
      _this6.adapter_.removeClass(MDCSimpleMenuFoundation.cssClasses.OPEN);
    });
    this.isOpen_ = false;
    this.adapter_.restoreFocus();
  };

  /** @return {boolean} */


  MDCSimpleMenuFoundation.prototype.isOpen = function isOpen() {
    return this.isOpen_;
  };

  return MDCSimpleMenuFoundation;
}(__WEBPACK_IMPORTED_MODULE_0__material_base_foundation__["a" /* default */]);



/***/ }),

/***/ "bn2r":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("EBst");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MaterialComponent__ = __webpack_require__("jM6C");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_dialog___ = __webpack_require__("6Jm8");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Button__ = __webpack_require__("zuIX");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};





/**
 */

var Dialog = function (_MaterialComponent) {
  _inherits(Dialog, _MaterialComponent);

  function Dialog() {
    _classCallCheck(this, Dialog);

    var _this = _possibleConstructorReturn(this, _MaterialComponent.call(this));

    _this.componentName = "dialog";
    _this._onAccept = _this._onAccept.bind(_this);
    _this._onCancel = _this._onCancel.bind(_this);
    return _this;
  }

  Dialog.prototype.componentDidMount = function componentDidMount() {
    this.MDComponent = new __WEBPACK_IMPORTED_MODULE_2__material_dialog___["a" /* MDCDialog */](this.control);
    this.MDComponent.listen("MDCDialog:accept", this._onAccept);
    this.MDComponent.listen("MDCDialog:cancel", this._onCancel);
  };

  Dialog.prototype.componentWillUnmount = function componentWillUnmount() {
    this.MDComponent.unlisten("MDCDialog:accept", this._onAccept);
    this.MDComponent.unlisten("MDCDialog:cancel", this._onCancel);
    this.MDComponent.destroy && this.MDComponent.destroy();
  };

  Dialog.prototype._onAccept = function _onAccept(e) {
    if (this.props.onAccept) {
      this.props.onAccept(e);
    }
  };

  Dialog.prototype._onCancel = function _onCancel(e) {
    if (this.props.onCancel) {
      this.props.onCancel(e);
    }
  };

  Dialog.prototype.materialDom = function materialDom(props) {
    var _this2 = this;

    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("aside", _extends({
      role: "alertdialog",
      ref: function ref(control) {
        _this2.control = control;
      }
    }, props), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("div", { className: "mdc-dialog__surface" }, props.children), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("div", { className: "mdc-dialog__backdrop" }));
  };

  return Dialog;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);

var DialogHeader = function (_MaterialComponent2) {
  _inherits(DialogHeader, _MaterialComponent2);

  function DialogHeader() {
    _classCallCheck(this, DialogHeader);

    var _this3 = _possibleConstructorReturn(this, _MaterialComponent2.call(this));

    _this3.componentName = "dialog__header";
    return _this3;
  }

  DialogHeader.prototype.materialDom = function materialDom(props) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("header", props, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("h2", { className: "mdc-dialog__header__title" }, props.children));
  };

  return DialogHeader;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);

/**
 * @prop scrollable = false
 */


var DialogBody = function (_MaterialComponent3) {
  _inherits(DialogBody, _MaterialComponent3);

  function DialogBody() {
    _classCallCheck(this, DialogBody);

    var _this4 = _possibleConstructorReturn(this, _MaterialComponent3.call(this));

    _this4.componentName = "dialog__body";
    _this4._mdcProps = ["scrollable"];
    return _this4;
  }

  DialogBody.prototype.materialDom = function materialDom(props) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("section", props, props.children);
  };

  return DialogBody;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);

var DialogFooter = function (_MaterialComponent4) {
  _inherits(DialogFooter, _MaterialComponent4);

  function DialogFooter() {
    _classCallCheck(this, DialogFooter);

    var _this5 = _possibleConstructorReturn(this, _MaterialComponent4.call(this));

    _this5.componentName = "dialog__footer";
    return _this5;
  }

  DialogFooter.prototype.materialDom = function materialDom(props) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("footer", props, props.children);
  };

  return DialogFooter;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);

/**
 * @prop cancel = false
 * @prop accept = false
 */


var DialogFooterButton = function (_Button) {
  _inherits(DialogFooterButton, _Button);

  function DialogFooterButton() {
    _classCallCheck(this, DialogFooterButton);

    var _this6 = _possibleConstructorReturn(this, _Button.call(this));

    _this6.componentName = "dialog__footer__button";
    _this6._mdcProps = ["cancel", "accept"];
    return _this6;
  }

  DialogFooterButton.prototype.materialDom = function materialDom(props) {
    var _this7 = this;

    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("button", _extends({}, props, {
      className: "mdc-button",
      ref: function ref(control) {
        _this7.control = control;
      }
    }), props.children);
  };

  return DialogFooterButton;
}(__WEBPACK_IMPORTED_MODULE_3__Button__["a" /* default */]);

Dialog.Header = DialogHeader;
Dialog.Body = DialogBody;
Dialog.Footer = DialogFooter;
Dialog.FooterButton = DialogFooterButton;

/* harmony default export */ __webpack_exports__["a"] = (Dialog);

/***/ }),

/***/ "cGG2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__("JP+z");

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return typeof FormData !== 'undefined' && val instanceof FormData;
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) {
    result = ArrayBuffer.isView(val);
  } else {
    result = val && val.buffer && val.buffer instanceof ArrayBuffer;
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  typeof document.createElement -> undefined
 */
function isStandardBrowserEnv() {
  return typeof window !== 'undefined' && typeof document !== 'undefined' && typeof document.createElement === 'function';
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object' && !isArray(obj)) {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge() /* obj1, obj2, obj3, ... */{
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
};

/***/ }),

/***/ "cS8m":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCRippleFoundation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__ = __webpack_require__("6y2n");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__("1AK+");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__("6Qal");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util__ = __webpack_require__("fDu/");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */






/**
 * @typedef {!{
 *   isActivated: (boolean|undefined),
 *   hasDeactivationUXRun: (boolean|undefined),
 *   wasActivatedByPointer: (boolean|undefined),
 *   wasElementMadeActive: (boolean|undefined),
 *   activationStartTime: (number|undefined),
 *   activationEvent: Event,
 *   isProgrammatic: (boolean|undefined)
 * }}
 */
var ActivationStateType = void 0;

/**
 * @typedef {!{
 *   activate: (string|undefined),
 *   deactivate: (string|undefined),
 *   focus: (string|undefined),
 *   blur: (string|undefined)
 * }}
 */
var ListenerInfoType = void 0;

/**
 * @typedef {!{
 *   activate: function(!Event),
 *   deactivate: function(!Event),
 *   focus: function(),
 *   blur: function()
 * }}
 */
var ListenersType = void 0;

/**
 * @typedef {!{
 *   x: number,
 *   y: number
 * }}
 */
var PointType = void 0;

/**
 * @enum {string}
 */
var DEACTIVATION_ACTIVATION_PAIRS = {
  mouseup: 'mousedown',
  pointerup: 'pointerdown',
  touchend: 'touchstart',
  keyup: 'keydown',
  blur: 'focus'
};

/**
 * @extends {MDCFoundation<!MDCRippleAdapter>}
 */

var MDCRippleFoundation = function (_MDCFoundation) {
  _inherits(MDCRippleFoundation, _MDCFoundation);

  _createClass(MDCRippleFoundation, [{
    key: 'isSupported_',


    /**
     * We compute this property so that we are not querying information about the client
     * until the point in time where the foundation requests it. This prevents scenarios where
     * client-side feature-detection may happen too early, such as when components are rendered on the server
     * and then initialized at mount time on the client.
     * @return {boolean}
     */
    get: function get() {
      return this.adapter_.browserSupportsCssVars();
    }
  }], [{
    key: 'cssClasses',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */];
    }
  }, {
    key: 'strings',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* strings */];
    }
  }, {
    key: 'numbers',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_2__constants__["c" /* numbers */];
    }
  }, {
    key: 'defaultAdapter',
    get: function get() {
      return {
        browserSupportsCssVars: function browserSupportsCssVars() /* boolean - cached */{},
        isUnbounded: function isUnbounded() /* boolean */{},
        isSurfaceActive: function isSurfaceActive() /* boolean */{},
        isSurfaceDisabled: function isSurfaceDisabled() /* boolean */{},
        addClass: function addClass() /* className: string */{},
        removeClass: function removeClass() /* className: string */{},
        registerInteractionHandler: function registerInteractionHandler() /* evtType: string, handler: EventListener */{},
        deregisterInteractionHandler: function deregisterInteractionHandler() /* evtType: string, handler: EventListener */{},
        registerResizeHandler: function registerResizeHandler() /* handler: EventListener */{},
        deregisterResizeHandler: function deregisterResizeHandler() /* handler: EventListener */{},
        updateCssVariable: function updateCssVariable() /* varName: string, value: string */{},
        computeBoundingRect: function computeBoundingRect() /* ClientRect */{},
        getWindowPageOffset: function getWindowPageOffset() /* {x: number, y: number} */{}
      };
    }
  }]);

  function MDCRippleFoundation(adapter) {
    _classCallCheck(this, MDCRippleFoundation);

    /** @private {number} */
    var _this = _possibleConstructorReturn(this, _MDCFoundation.call(this, _extends(MDCRippleFoundation.defaultAdapter, adapter)));

    _this.layoutFrame_ = 0;

    /** @private {!ClientRect} */
    _this.frame_ = /** @type {!ClientRect} */{ width: 0, height: 0 };

    /** @private {!ActivationStateType} */
    _this.activationState_ = _this.defaultActivationState_();

    /** @private {number} */
    _this.xfDuration_ = 0;

    /** @private {number} */
    _this.initialSize_ = 0;

    /** @private {number} */
    _this.maxRadius_ = 0;

    /** @private {!Array<{ListenerInfoType}>} */
    _this.listenerInfos_ = [{ activate: 'touchstart', deactivate: 'touchend' }, { activate: 'pointerdown', deactivate: 'pointerup' }, { activate: 'mousedown', deactivate: 'mouseup' }, { activate: 'keydown', deactivate: 'keyup' }, { focus: 'focus', blur: 'blur' }];

    /** @private {!ListenersType} */
    _this.listeners_ = {
      activate: function activate(e) {
        return _this.activate_(e);
      },
      deactivate: function deactivate(e) {
        return _this.deactivate_(e);
      },
      focus: function focus() {
        return requestAnimationFrame(function () {
          return _this.adapter_.addClass(MDCRippleFoundation.cssClasses.BG_FOCUSED);
        });
      },
      blur: function blur() {
        return requestAnimationFrame(function () {
          return _this.adapter_.removeClass(MDCRippleFoundation.cssClasses.BG_FOCUSED);
        });
      }
    };

    /** @private {!Function} */
    _this.resizeHandler_ = function () {
      return _this.layout();
    };

    /** @private {!{left: number, top:number}} */
    _this.unboundedCoords_ = {
      left: 0,
      top: 0
    };

    /** @private {number} */
    _this.fgScale_ = 0;

    /** @private {number} */
    _this.activationTimer_ = 0;

    /** @private {number} */
    _this.fgDeactivationRemovalTimer_ = 0;

    /** @private {boolean} */
    _this.activationAnimationHasEnded_ = false;

    /** @private {!Function} */
    _this.activationTimerCallback_ = function () {
      _this.activationAnimationHasEnded_ = true;
      _this.runDeactivationUXLogicIfReady_();
    };
    return _this;
  }

  /**
   * @return {!ActivationStateType}
   */


  MDCRippleFoundation.prototype.defaultActivationState_ = function defaultActivationState_() {
    return {
      isActivated: false,
      hasDeactivationUXRun: false,
      wasActivatedByPointer: false,
      wasElementMadeActive: false,
      activationStartTime: 0,
      activationEvent: null,
      isProgrammatic: false
    };
  };

  MDCRippleFoundation.prototype.init = function init() {
    var _this2 = this;

    if (!this.isSupported_) {
      return;
    }
    this.addEventListeners_();

    var _MDCRippleFoundation$ = MDCRippleFoundation.cssClasses,
        ROOT = _MDCRippleFoundation$.ROOT,
        UNBOUNDED = _MDCRippleFoundation$.UNBOUNDED;

    requestAnimationFrame(function () {
      _this2.adapter_.addClass(ROOT);
      if (_this2.adapter_.isUnbounded()) {
        _this2.adapter_.addClass(UNBOUNDED);
      }
      _this2.layoutInternal_();
    });
  };

  /** @private */


  MDCRippleFoundation.prototype.addEventListeners_ = function addEventListeners_() {
    var _this3 = this;

    this.listenerInfos_.forEach(function (info) {
      Object.keys(info).forEach(function (k) {
        _this3.adapter_.registerInteractionHandler(info[k], _this3.listeners_[k]);
      });
    });
    this.adapter_.registerResizeHandler(this.resizeHandler_);
  };

  /**
   * @param {Event} e
   * @private
   */


  MDCRippleFoundation.prototype.activate_ = function activate_(e) {
    var _this4 = this;

    if (this.adapter_.isSurfaceDisabled()) {
      return;
    }

    var activationState = this.activationState_;

    if (activationState.isActivated) {
      return;
    }

    activationState.isActivated = true;
    activationState.isProgrammatic = e === null;
    activationState.activationEvent = e;
    activationState.wasActivatedByPointer = activationState.isProgrammatic ? false : e.type === 'mousedown' || e.type === 'touchstart' || e.type === 'pointerdown';
    activationState.activationStartTime = Date.now();

    requestAnimationFrame(function () {
      // This needs to be wrapped in an rAF call b/c web browsers
      // report active states inconsistently when they're called within
      // event handling code:
      // - https://bugs.chromium.org/p/chromium/issues/detail?id=635971
      // - https://bugzilla.mozilla.org/show_bug.cgi?id=1293741
      activationState.wasElementMadeActive = e && e.type === 'keydown' ? _this4.adapter_.isSurfaceActive() : true;
      if (activationState.wasElementMadeActive) {
        _this4.animateActivation_();
      } else {
        // Reset activation state immediately if element was not made active.
        _this4.activationState_ = _this4.defaultActivationState_();
      }
    });
  };

  MDCRippleFoundation.prototype.activate = function activate() {
    this.activate_(null);
  };

  /** @private */


  MDCRippleFoundation.prototype.animateActivation_ = function animateActivation_() {
    var _this5 = this;

    var _MDCRippleFoundation$2 = MDCRippleFoundation.strings,
        VAR_FG_TRANSLATE_START = _MDCRippleFoundation$2.VAR_FG_TRANSLATE_START,
        VAR_FG_TRANSLATE_END = _MDCRippleFoundation$2.VAR_FG_TRANSLATE_END;
    var _MDCRippleFoundation$3 = MDCRippleFoundation.cssClasses,
        BG_ACTIVE_FILL = _MDCRippleFoundation$3.BG_ACTIVE_FILL,
        FG_DEACTIVATION = _MDCRippleFoundation$3.FG_DEACTIVATION,
        FG_ACTIVATION = _MDCRippleFoundation$3.FG_ACTIVATION;
    var DEACTIVATION_TIMEOUT_MS = MDCRippleFoundation.numbers.DEACTIVATION_TIMEOUT_MS;


    var translateStart = '';
    var translateEnd = '';

    if (!this.adapter_.isUnbounded()) {
      var _getFgTranslationCoor = this.getFgTranslationCoordinates_(),
          startPoint = _getFgTranslationCoor.startPoint,
          endPoint = _getFgTranslationCoor.endPoint;

      translateStart = startPoint.x + 'px, ' + startPoint.y + 'px';
      translateEnd = endPoint.x + 'px, ' + endPoint.y + 'px';
    }

    this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_START, translateStart);
    this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_END, translateEnd);
    // Cancel any ongoing activation/deactivation animations
    clearTimeout(this.activationTimer_);
    clearTimeout(this.fgDeactivationRemovalTimer_);
    this.rmBoundedActivationClasses_();
    this.adapter_.removeClass(FG_DEACTIVATION);

    // Force layout in order to re-trigger the animation.
    this.adapter_.computeBoundingRect();
    this.adapter_.addClass(BG_ACTIVE_FILL);
    this.adapter_.addClass(FG_ACTIVATION);
    this.activationTimer_ = setTimeout(function () {
      return _this5.activationTimerCallback_();
    }, DEACTIVATION_TIMEOUT_MS);
  };

  /**
   * @private
   * @return {{startPoint: PointType, endPoint: PointType}}
   */


  MDCRippleFoundation.prototype.getFgTranslationCoordinates_ = function getFgTranslationCoordinates_() {
    var activationState = this.activationState_;
    var activationEvent = activationState.activationEvent,
        wasActivatedByPointer = activationState.wasActivatedByPointer;


    var startPoint = void 0;
    if (wasActivatedByPointer) {
      startPoint = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__util__["d" /* getNormalizedEventCoords */])(
      /** @type {!Event} */activationEvent, this.adapter_.getWindowPageOffset(), this.adapter_.computeBoundingRect());
    } else {
      startPoint = {
        x: this.frame_.width / 2,
        y: this.frame_.height / 2
      };
    }
    // Center the element around the start point.
    startPoint = {
      x: startPoint.x - this.initialSize_ / 2,
      y: startPoint.y - this.initialSize_ / 2
    };

    var endPoint = {
      x: this.frame_.width / 2 - this.initialSize_ / 2,
      y: this.frame_.height / 2 - this.initialSize_ / 2
    };

    return { startPoint: startPoint, endPoint: endPoint };
  };

  /** @private */


  MDCRippleFoundation.prototype.runDeactivationUXLogicIfReady_ = function runDeactivationUXLogicIfReady_() {
    var _this6 = this;

    var FG_DEACTIVATION = MDCRippleFoundation.cssClasses.FG_DEACTIVATION;
    var _activationState_ = this.activationState_,
        hasDeactivationUXRun = _activationState_.hasDeactivationUXRun,
        isActivated = _activationState_.isActivated;

    var activationHasEnded = hasDeactivationUXRun || !isActivated;
    if (activationHasEnded && this.activationAnimationHasEnded_) {
      this.rmBoundedActivationClasses_();
      this.adapter_.addClass(FG_DEACTIVATION);
      this.fgDeactivationRemovalTimer_ = setTimeout(function () {
        _this6.adapter_.removeClass(FG_DEACTIVATION);
      }, __WEBPACK_IMPORTED_MODULE_2__constants__["c" /* numbers */].FG_DEACTIVATION_MS);
    }
  };

  /** @private */


  MDCRippleFoundation.prototype.rmBoundedActivationClasses_ = function rmBoundedActivationClasses_() {
    var _MDCRippleFoundation$4 = MDCRippleFoundation.cssClasses,
        BG_ACTIVE_FILL = _MDCRippleFoundation$4.BG_ACTIVE_FILL,
        FG_ACTIVATION = _MDCRippleFoundation$4.FG_ACTIVATION;

    this.adapter_.removeClass(BG_ACTIVE_FILL);
    this.adapter_.removeClass(FG_ACTIVATION);
    this.activationAnimationHasEnded_ = false;
    this.adapter_.computeBoundingRect();
  };

  /**
   * @param {Event} e
   * @private
   */


  MDCRippleFoundation.prototype.deactivate_ = function deactivate_(e) {
    var _this7 = this;

    var activationState = this.activationState_;
    // This can happen in scenarios such as when you have a keyup event that blurs the element.

    if (!activationState.isActivated) {
      return;
    }
    // Programmatic deactivation.
    if (activationState.isProgrammatic) {
      var evtObject = null;
      var _state = /** @type {!ActivationStateType} */_extends({}, activationState);
      requestAnimationFrame(function () {
        return _this7.animateDeactivation_(evtObject, _state);
      });
      this.activationState_ = this.defaultActivationState_();
      return;
    }

    var actualActivationType = DEACTIVATION_ACTIVATION_PAIRS[e.type];
    var expectedActivationType = activationState.activationEvent.type;
    // NOTE: Pointer events are tricky - https://patrickhlauke.github.io/touch/tests/results/
    // Essentially, what we need to do here is decouple the deactivation UX from the actual
    // deactivation state itself. This way, touch/pointer events in sequence do not trample one
    // another.
    var needsDeactivationUX = actualActivationType === expectedActivationType;
    var needsActualDeactivation = needsDeactivationUX;
    if (activationState.wasActivatedByPointer) {
      needsActualDeactivation = e.type === 'mouseup';
    }

    var state = /** @type {!ActivationStateType} */_extends({}, activationState);
    requestAnimationFrame(function () {
      if (needsDeactivationUX) {
        _this7.activationState_.hasDeactivationUXRun = true;
        _this7.animateDeactivation_(e, state);
      }

      if (needsActualDeactivation) {
        _this7.activationState_ = _this7.defaultActivationState_();
      }
    });
  };

  MDCRippleFoundation.prototype.deactivate = function deactivate() {
    this.deactivate_(null);
  };

  /**
   * @param {Event} e
   * @param {!ActivationStateType} options
   * @private
   */


  MDCRippleFoundation.prototype.animateDeactivation_ = function animateDeactivation_(e, _ref) {
    var wasActivatedByPointer = _ref.wasActivatedByPointer,
        wasElementMadeActive = _ref.wasElementMadeActive;
    var BG_FOCUSED = MDCRippleFoundation.cssClasses.BG_FOCUSED;

    if (wasActivatedByPointer || wasElementMadeActive) {
      // Remove class left over by element being focused
      this.adapter_.removeClass(BG_FOCUSED);
      this.runDeactivationUXLogicIfReady_();
    }
  };

  MDCRippleFoundation.prototype.destroy = function destroy() {
    var _this8 = this;

    if (!this.isSupported_) {
      return;
    }
    this.removeEventListeners_();

    var _MDCRippleFoundation$5 = MDCRippleFoundation.cssClasses,
        ROOT = _MDCRippleFoundation$5.ROOT,
        UNBOUNDED = _MDCRippleFoundation$5.UNBOUNDED;

    requestAnimationFrame(function () {
      _this8.adapter_.removeClass(ROOT);
      _this8.adapter_.removeClass(UNBOUNDED);
      _this8.removeCssVars_();
    });
  };

  /** @private */


  MDCRippleFoundation.prototype.removeEventListeners_ = function removeEventListeners_() {
    var _this9 = this;

    this.listenerInfos_.forEach(function (info) {
      Object.keys(info).forEach(function (k) {
        _this9.adapter_.deregisterInteractionHandler(info[k], _this9.listeners_[k]);
      });
    });
    this.adapter_.deregisterResizeHandler(this.resizeHandler_);
  };

  /** @private */


  MDCRippleFoundation.prototype.removeCssVars_ = function removeCssVars_() {
    var _this10 = this;

    var strings = MDCRippleFoundation.strings;

    Object.keys(strings).forEach(function (k) {
      if (k.indexOf('VAR_') === 0) {
        _this10.adapter_.updateCssVariable(strings[k], null);
      }
    });
  };

  MDCRippleFoundation.prototype.layout = function layout() {
    var _this11 = this;

    if (this.layoutFrame_) {
      cancelAnimationFrame(this.layoutFrame_);
    }
    this.layoutFrame_ = requestAnimationFrame(function () {
      _this11.layoutInternal_();
      _this11.layoutFrame_ = 0;
    });
  };

  /** @private */


  MDCRippleFoundation.prototype.layoutInternal_ = function layoutInternal_() {
    this.frame_ = this.adapter_.computeBoundingRect();

    var maxDim = Math.max(this.frame_.height, this.frame_.width);
    var surfaceDiameter = Math.sqrt(Math.pow(this.frame_.width, 2) + Math.pow(this.frame_.height, 2));

    // 60% of the largest dimension of the surface
    this.initialSize_ = maxDim * MDCRippleFoundation.numbers.INITIAL_ORIGIN_SCALE;

    // Diameter of the surface + 10px
    this.maxRadius_ = surfaceDiameter + MDCRippleFoundation.numbers.PADDING;
    this.fgScale_ = this.maxRadius_ / this.initialSize_;
    this.xfDuration_ = 1000 * Math.sqrt(this.maxRadius_ / 1024);
    this.updateLayoutCssVars_();
  };

  /** @private */


  MDCRippleFoundation.prototype.updateLayoutCssVars_ = function updateLayoutCssVars_() {
    var _MDCRippleFoundation$6 = MDCRippleFoundation.strings,
        VAR_SURFACE_WIDTH = _MDCRippleFoundation$6.VAR_SURFACE_WIDTH,
        VAR_SURFACE_HEIGHT = _MDCRippleFoundation$6.VAR_SURFACE_HEIGHT,
        VAR_FG_SIZE = _MDCRippleFoundation$6.VAR_FG_SIZE,
        VAR_LEFT = _MDCRippleFoundation$6.VAR_LEFT,
        VAR_TOP = _MDCRippleFoundation$6.VAR_TOP,
        VAR_FG_SCALE = _MDCRippleFoundation$6.VAR_FG_SCALE;


    this.adapter_.updateCssVariable(VAR_SURFACE_WIDTH, this.frame_.width + 'px');
    this.adapter_.updateCssVariable(VAR_SURFACE_HEIGHT, this.frame_.height + 'px');
    this.adapter_.updateCssVariable(VAR_FG_SIZE, this.initialSize_ + 'px');
    this.adapter_.updateCssVariable(VAR_FG_SCALE, this.fgScale_);

    if (this.adapter_.isUnbounded()) {
      this.unboundedCoords_ = {
        left: Math.round(this.frame_.width / 2 - this.initialSize_ / 2),
        top: Math.round(this.frame_.height / 2 - this.initialSize_ / 2)
      };

      this.adapter_.updateCssVariable(VAR_LEFT, this.unboundedCoords_.left + 'px');
      this.adapter_.updateCssVariable(VAR_TOP, this.unboundedCoords_.top + 'px');
    }
  };

  return MDCRippleFoundation;
}(__WEBPACK_IMPORTED_MODULE_0__material_base_foundation__["a" /* default */]);



/***/ }),

/***/ "cWxy":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__("dVOP");

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;

/***/ }),

/***/ "ch9a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_selection_control__ = __webpack_require__("2exO");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* eslint-disable no-unused-vars */


/* eslint no-unused-vars: [2, {"args": "none"}] */

/**
 * Adapter for MDC Checkbox. Provides an interface for managing
 * - classes
 * - dom
 * - event handlers
 *
 * Additionally, provides type information for the adapter to the Closure
 * compiler.
 *
 * Implement this adapter for your framework of choice to delegate updates to
 * the component in your framework of choice. See architecture documentation
 * for more details.
 * https://github.com/material-components/material-components-web/blob/master/docs/architecture.md
 *
 * @record
 */

var MDCCheckboxAdapter = function () {
  function MDCCheckboxAdapter() {
    _classCallCheck(this, MDCCheckboxAdapter);
  }

  /** @param {string} className */
  MDCCheckboxAdapter.prototype.addClass = function addClass(className) {};

  /** @param {string} className */


  MDCCheckboxAdapter.prototype.removeClass = function removeClass(className) {};

  /** @param {!EventListener} handler */


  MDCCheckboxAdapter.prototype.registerAnimationEndHandler = function registerAnimationEndHandler(handler) {};

  /** @param {!EventListener} handler */


  MDCCheckboxAdapter.prototype.deregisterAnimationEndHandler = function deregisterAnimationEndHandler(handler) {};

  /** @param {!EventListener} handler */


  MDCCheckboxAdapter.prototype.registerChangeHandler = function registerChangeHandler(handler) {};

  /** @param {!EventListener} handler */


  MDCCheckboxAdapter.prototype.deregisterChangeHandler = function deregisterChangeHandler(handler) {};

  /** @return {!MDCSelectionControlState} */


  MDCCheckboxAdapter.prototype.getNativeControl = function getNativeControl() {};

  MDCCheckboxAdapter.prototype.forceLayout = function forceLayout() {};

  /** @return {boolean} */


  MDCCheckboxAdapter.prototype.isAttachedToDOM = function isAttachedToDOM() {};

  return MDCCheckboxAdapter;
}();



/***/ }),

/***/ "dIwP":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */

module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return (/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url)
  );
};

/***/ }),

/***/ "dVOP":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */

function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;

/***/ }),

/***/ "dwjF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_util__ = __webpack_require__("MXhL");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_events__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_events___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_events__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




/* harmony default export */ __webpack_exports__["a"] = (new (function (_EventEmitter) {
    _inherits(Store, _EventEmitter);

    function Store() {
        _classCallCheck(this, Store);

        var _this = _possibleConstructorReturn(this, _EventEmitter.call(this));

        _this.data = {
            filters: {},
            currentFilters: {},
            refs: {}
        };

        _this.on("error", console.log);
        return _this;
    }

    Store.prototype.set = function set(key, value) {
        var _this2 = this;

        var a = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lib_util__["a" /* dlv */])(this.data, key, value);
        this.emit("update", { key: key, value: value });
        key.split(".").forEach(function (e, i, arr) {
            return _this2.emit("update." + [].concat(arr.slice(0, i), [e]).join("."));
        });
        return a;
    };

    Store.prototype.get = function get(key) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lib_util__["a" /* dlv */])(this.data, key);
    };

    return Store;
}(__WEBPACK_IMPORTED_MODULE_1_events__["EventEmitter"]))());

/***/ }),

/***/ "f8nm":
/***/ (function(module, exports, __webpack_require__) {

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var axios = __webpack_require__("mtWM"),
    libURL = __webpack_require__(0),
    version = __webpack_require__("5jvd").version;

/**
 * Since VexDB updates every 4 minutes, it can oftentimes be wasteful to send the same request twice in a similar timespan, default 4 minutes. Use cache to control the inner cache that this module uses
 * @method cache
 * @param  {String} url   The URL to cache for
 * @param  {Object} value The object to cache for that URL
 * @return {Object}       The cache for that URL
 */
function cache(url, value) {
  var expiry = Date.now() + cache.ttl;
  if (value.length === 1) value = value[0];
  if (url.slice(-1) == "?") url = url.slice(0, -1);
  return cache.current[url] = {
    expiry: expiry,
    value: value
  };
}

/**
 * The cache Time-To-Live, in milliseconds. To set the TTL, use `cache.setTTL()`. Defaults to `240000`, or 4 minutes
 * @type {Number}
 * @default 240000
 */
cache.ttl = 4 * 60 * 1000;
/**
 * The cache object, mainly for debugging. Use `cache.has()` or `.cache()` to manipulate. Defaults to an empty object, i.e. no cache
 * @type {Object}
 * @default {  }
 */
cache.current = {};

/**
 * Set the Time-To-Live for all upcoming caches. Note that this does not affect old caches, their TTL will still be the same
 * @method cache.setTTL
 * @param  {Number} ttl The Time-To-Live, in milliseconds. Set to 0 for no caching
 * @return {Object}     The current cache.current
 */
cache.setTTL = function setTTL(ttl) {
  cache.ttl = ttl;
  return cache.current;
};

/**
 * Resets the cache, deletes all entries
 * @method clear
 * @return {Object} The reset cache
 */
cache.clear = function clear() {
  return cache.current = {};
};

/**
 * Tests if a specifed query is cached
 * @method cache.has
 * @param  {String} query The query, stored as the URL
 * @return {Object|null}       Either the cache if it is cached, or null if not
 */
cache.has = function has(query) {
  var cutoff = Date.now() + cache.ttl;
  if (cache.current[query] && cache.current[query].expiry < cutoff) {
    return cache.current[query];
  } else {
    // If it's expired, delete it
    delete cache.current[query];
    return null;
  }
};

// Serialize a URL according to its params
function serialize(url, params) {
  var str = "";
  for (var p in params) {
    if (params.hasOwnProperty(p)) {
      if (str !== "") str += "&";
      str += p + "=" + encodeURIComponent(params[p]);
    }
  }

  return url + "?" + str;
}

axios.defaults.baseURL = "https://api.vexdb.io/v1/";

var globalOptions = {
  "defaultParams": {},
  "headers": {}

  /**
   * Configure requests, to add things like default parameters, User Agent, etc
   * @method configure
   * @param  {Object}  changes Any changes to the default options, outlined below
   * @param  {Object}  changes.defaultParams Specify default parameters, like always limiting to a region, or season. This are mixed with specified parameters (and specified parameters take precendence)
   * @param  {Object}  changes.headers Include any headers to include with all requests, like User-Agent
   * @return {Object}          The updated options object
   */
};function configure(changes) {

  changes.headers = changes.headers || {};
  changes.defaultParams = changes.defaultParams || {};

  _extends(globalOptions.headers, changes.headers);
  _extends(globalOptions.defaultParams, changes.defaultParams);

  return globalOptions;
}

/**
 * Makes a reqest to the vexDB API
 * @method request
 * @param  {String} endpoint The endpoint to request, must be events, teams, matches, rankings, season_rankings, awards, or skills
 * @param  {Object} params   Any URL parameters to specify, in Object form. See the relevant API docs page for more info
 * @return {Promise}
 */
function request(endpoint, args) {

  // Validate endpoint against known, to avoid unneeded requests
  var known = ["events", "teams", "matches", "rankings", "season_rankings", "awards", "skills"];

  if (!known.includes(endpoint)) return Promise.reject(new RangeError("Endpoint '" + endpoint + "' not known. Valid endpoints are " + known.join(", ")));

  var url = "/get_" + endpoint,
      output = "";

  var res = cache.has(url);
  var params = _extends({}, globalOptions.defaultParams, args);
  if (res) {
    return Promise.resolve(res.value);
  } else {
    return axios.get(url, {
      headers: globalOptions.headers,
      params: params
    }).then(function (res) {
      return res.data.status ? cache(serialize(url, params), res.data).value : Promise.reject(new Error(res.data.error_text));
    });
  }
}

/**
 * GETs an endpoint based on parameters and resolves the result
 * @method get
 * @param  {String} endpoint The endpoint to GET
 * @param  {Object} params   An object of parameters
 * @return {Promise}
 */
function get(endpoint, params) {
  return request(endpoint, params).then(function (res) {
    return res.result;
  }).then(function (res) {
    return ~-res.length ? res : res[0];
  }).catch(function (e) {
    throw e;
  });
}

/**
 * VexDB limits responses to 5000 items. This acts the same as get, but will make enough request to ensure that
 * all items are returned
 * @method getAll
 * @param  {String} endpoint The endpoint to GET
 * @param  {Object} params   An object of parameters
 * @return {Promise}
 */
function getAll(endpoint, params) {
  return size(endpoint, _extends({}, params || {})).then(function (items) {
    return Promise.all([].concat(Array(Math.ceil(items / 5000))).map(function (v, i) {
      return get(endpoint, _extends(params || {}, { limit_start: 5000 * i }));
    })).then(function (result) {
      return result.reduce(function (a, b) {
        return a.concat(b);
      });
    });
  });
}

/**
 * Gets the size of an endpoint with parameters. It performs a nodata request and resolves the number of results
 * @method size
 * @param  {String} endpoint The endpoint to get the size of
 * @param  {Object} params   Any criteria to specify on the endpoint, see relevant vexDB documentation page
 * @return {Promise}
 */
function size(endpoint, params) {
  return request(endpoint, _extends(params || {}, { nodata: true })).then(function (res) {
    return res.size;
  });
}

module.exports = {
  request: request,
  get: get,
  getAll: getAll,
  size: size,
  configure: configure,
  cache: cache
};

/***/ }),

/***/ "fDu/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = supportsCssVariables;
/* harmony export (immutable) */ __webpack_exports__["c"] = applyPassive;
/* harmony export (immutable) */ __webpack_exports__["a"] = getMatchesProperty;
/* harmony export (immutable) */ __webpack_exports__["d"] = getNormalizedEventCoords;
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Stores result from supportsCssVariables to avoid redundant processing to detect CSS custom variable support.
 * @private {boolean|undefined}
 */
var supportsCssVariables_ = void 0;

/**
 * Stores result from applyPassive to avoid redundant processing to detect passive event listener support.
 * @private {boolean|undefined}
 */
var supportsPassive_ = void 0;

/**
 * @param {!Window} windowObj
 * @return {boolean}
 */
function detectEdgePseudoVarBug(windowObj) {
  // Detect versions of Edge with buggy var() support
  // See: https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/11495448/
  var document = windowObj.document;
  var node = document.createElement('div');
  node.className = 'mdc-ripple-surface--test-edge-var-bug';
  document.body.appendChild(node);

  // The bug exists if ::before style ends up propagating to the parent element.
  // Additionally, getComputedStyle returns null in iframes with display: "none" in Firefox,
  // but Firefox is known to support CSS custom properties correctly.
  // See: https://bugzilla.mozilla.org/show_bug.cgi?id=548397
  var computedStyle = windowObj.getComputedStyle(node);
  var hasPseudoVarBug = computedStyle !== null && computedStyle.borderTopStyle === 'solid';
  node.remove();
  return hasPseudoVarBug;
}

/**
 * @param {!Window} windowObj
 * @param {boolean=} forceRefresh
 * @return {boolean|undefined}
 */
function supportsCssVariables(windowObj) {
  var forceRefresh = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (typeof supportsCssVariables_ === 'boolean' && !forceRefresh) {
    return supportsCssVariables_;
  }

  var supportsFunctionPresent = windowObj.CSS && typeof windowObj.CSS.supports === 'function';
  if (!supportsFunctionPresent) {
    return;
  }

  var explicitlySupportsCssVars = windowObj.CSS.supports('--css-vars', 'yes');
  // See: https://bugs.webkit.org/show_bug.cgi?id=154669
  // See: README section on Safari
  var weAreFeatureDetectingSafari10plus = windowObj.CSS.supports('(--css-vars: yes)') && windowObj.CSS.supports('color', '#00000000');

  if (explicitlySupportsCssVars || weAreFeatureDetectingSafari10plus) {
    supportsCssVariables_ = !detectEdgePseudoVarBug(windowObj);
  } else {
    supportsCssVariables_ = false;
  }
  return supportsCssVariables_;
}

//
/**
 * Determine whether the current browser supports passive event listeners, and if so, use them.
 * @param {!Window=} globalObj
 * @param {boolean=} forceRefresh
 * @return {boolean|{passive: boolean}}
 */
function applyPassive() {
  var globalObj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;
  var forceRefresh = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (supportsPassive_ === undefined || forceRefresh) {
    var isSupported = false;
    try {
      globalObj.document.addEventListener('test', null, { get passive() {
          isSupported = true;
        } });
    } catch (e) {}

    supportsPassive_ = isSupported;
  }

  return supportsPassive_ ? { passive: true } : false;
}

/**
 * @param {!Object} HTMLElementPrototype
 * @return {!Array<string>}
 */
function getMatchesProperty(HTMLElementPrototype) {
  return ['webkitMatchesSelector', 'msMatchesSelector', 'matches'].filter(function (p) {
    return p in HTMLElementPrototype;
  }).pop();
}

/**
 * @param {!Event} ev
 * @param {!{x: number, y: number}} pageOffset
 * @param {!ClientRect} clientRect
 * @return {!{x: number, y: number}}
 */
function getNormalizedEventCoords(ev, pageOffset, clientRect) {
  var x = pageOffset.x,
      y = pageOffset.y;

  var documentX = x + clientRect.left;
  var documentY = y + clientRect.top;

  var normalizedX = void 0;
  var normalizedY = void 0;
  // Determine touch point relative to the ripple container.
  if (ev.type === 'touchstart') {
    normalizedX = ev.changedTouches[0].pageX - documentX;
    normalizedY = ev.changedTouches[0].pageY - documentY;
  } else {
    normalizedX = ev.pageX - documentX;
    normalizedY = ev.pageY - documentY;
  }

  return { x: normalizedX, y: normalizedY };
}

/***/ }),

/***/ "fP4L":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "fawa":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("EBst");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact_material_components_Dialog__ = __webpack_require__("bn2r");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_preact_material_components_Button__ = __webpack_require__("zuIX");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_preact_material_components_List__ = __webpack_require__("u5aD");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_preact_material_components_Textfield__ = __webpack_require__("4UKK");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_preact_material_components_Formfield__ = __webpack_require__("XkKD");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_preact_material_components_Select__ = __webpack_require__("0gCF");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_preact_material_components_List_style_css__ = __webpack_require__("7OxD");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_preact_material_components_List_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_preact_material_components_List_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_preact_material_components_Button_style_css__ = __webpack_require__("GzFB");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_preact_material_components_Button_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_preact_material_components_Button_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_preact_material_components_Dialog_style_css__ = __webpack_require__("fP4L");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_preact_material_components_Dialog_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_preact_material_components_Dialog_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_preact_material_components_Textfield_style_css__ = __webpack_require__("a540");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_preact_material_components_Textfield_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_preact_material_components_Textfield_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_preact_material_components_Menu_style_css__ = __webpack_require__("5Hky");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_preact_material_components_Menu_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_preact_material_components_Menu_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_preact_material_components_Select_style_css__ = __webpack_require__("20uY");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_preact_material_components_Select_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_preact_material_components_Select_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__store_main__ = __webpack_require__("dwjF");

















var _ref = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
    __WEBPACK_IMPORTED_MODULE_1_preact_material_components_Dialog__["a" /* default */].Header,
    null,
    "Configure List"
);

var _ref2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
    __WEBPACK_IMPORTED_MODULE_1_preact_material_components_Dialog__["a" /* default */].FooterButton,
    { cancel: true, ripple: true },
    "Cancel"
);

/* harmony default export */ __webpack_exports__["a"] = (function () {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
        __WEBPACK_IMPORTED_MODULE_1_preact_material_components_Dialog__["a" /* default */],
        { ref: function ref(_ref3) {
                return __WEBPACK_IMPORTED_MODULE_13__store_main__["a" /* default */].set("refs.config", _ref3);
            } },
        _ref,
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
            __WEBPACK_IMPORTED_MODULE_1_preact_material_components_Dialog__["a" /* default */].Body,
            null,
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_4_preact_material_components_Textfield__["a" /* default */], { label: "Country", value: __WEBPACK_IMPORTED_MODULE_13__store_main__["a" /* default */].get("filters.country"), onInput: function onInput(a) {
                    return __WEBPACK_IMPORTED_MODULE_13__store_main__["a" /* default */].set("currentFilters.country", a.target.value);
                } })
        ),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
            __WEBPACK_IMPORTED_MODULE_1_preact_material_components_Dialog__["a" /* default */].Footer,
            null,
            _ref2,
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
                __WEBPACK_IMPORTED_MODULE_1_preact_material_components_Dialog__["a" /* default */].FooterButton,
                { accept: true, ripple: true, primary: true, raised: true, onClick: function onClick() {
                        var filters = __WEBPACK_IMPORTED_MODULE_13__store_main__["a" /* default */].get("currentFilters");
                        for (var filter in filters) {
                            if (filters.hasOwnProperty(filter)) {
                                __WEBPACK_IMPORTED_MODULE_13__store_main__["a" /* default */].set("filters." + filter, filters[filter]);
                            }
                        }
                    } },
                "Apply"
            )
        )
    );
});

/***/ }),

/***/ "fuGk":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("cGG2");

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;

/***/ }),

/***/ "gCxY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCSelectFoundation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__("PZSP");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__("OLv5");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_menu__ = __webpack_require__("Up3a");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */





var OPENER_KEYS = [{ key: 'ArrowUp', keyCode: 38, forType: 'keydown' }, { key: 'ArrowDown', keyCode: 40, forType: 'keydown' }, { key: 'Space', keyCode: 32, forType: 'keyup' }];

var MDCSelectFoundation = function (_MDCFoundation) {
  _inherits(MDCSelectFoundation, _MDCFoundation);

  _createClass(MDCSelectFoundation, null, [{
    key: 'cssClasses',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */];
    }
  }, {
    key: 'strings',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* strings */];
    }
  }, {
    key: 'defaultAdapter',
    get: function get() {
      return {
        addClass: function addClass() /* className: string */{},
        removeClass: function removeClass() /* className: string */{},
        setAttr: function setAttr() /* attr: string, value: string */{},
        rmAttr: function rmAttr() /* attr: string */{},
        computeBoundingRect: function computeBoundingRect() {
          return (/* {left: number, top: number} */{ left: 0, top: 0 }
          );
        },
        registerInteractionHandler: function registerInteractionHandler() /* type: string, handler: EventListener */{},
        deregisterInteractionHandler: function deregisterInteractionHandler() /* type: string, handler: EventListener */{},
        focus: function focus() {},
        makeTabbable: function makeTabbable() {},
        makeUntabbable: function makeUntabbable() {},
        getComputedStyleValue: function getComputedStyleValue() {
          return (/* propertyName: string */ /* string */''
          );
        },
        setStyle: function setStyle() /* propertyName: string, value: string */{},
        create2dRenderingContext: function create2dRenderingContext() {
          return (/* {font: string, measureText: (string) => {width: number}} */{
              font: '',
              measureText: function measureText() {
                return { width: 0 };
              }
            }
          );
        },
        setMenuElStyle: function setMenuElStyle() /* propertyName: string, value: string */{},
        setMenuElAttr: function setMenuElAttr() /* attr: string, value: string */{},
        rmMenuElAttr: function rmMenuElAttr() /* attr: string */{},
        getMenuElOffsetHeight: function getMenuElOffsetHeight() {
          return (/* number */0
          );
        },
        openMenu: function openMenu() /* focusIndex: number */{},
        isMenuOpen: function isMenuOpen() {
          return (/* boolean */false
          );
        },
        setSelectedTextContent: function setSelectedTextContent() /* textContent: string */{},
        getNumberOfOptions: function getNumberOfOptions() {
          return (/* number */0
          );
        },
        getTextForOptionAtIndex: function getTextForOptionAtIndex() {
          return (/* index: number */ /* string */''
          );
        },
        getValueForOptionAtIndex: function getValueForOptionAtIndex() {
          return (/* index: number */ /* string */''
          );
        },
        setAttrForOptionAtIndex: function setAttrForOptionAtIndex() /* index: number, attr: string, value: string */{},
        rmAttrForOptionAtIndex: function rmAttrForOptionAtIndex() /* index: number, attr: string */{},
        getOffsetTopForOptionAtIndex: function getOffsetTopForOptionAtIndex() {
          return (/* index: number */ /* number */0
          );
        },
        registerMenuInteractionHandler: function registerMenuInteractionHandler() /* type: string, handler: EventListener */{},
        deregisterMenuInteractionHandler: function deregisterMenuInteractionHandler() /* type: string, handler: EventListener */{},
        notifyChange: function notifyChange() {},
        getWindowInnerHeight: function getWindowInnerHeight() {
          return (/* number */0
          );
        }
      };
    }
  }]);

  function MDCSelectFoundation(adapter) {
    _classCallCheck(this, MDCSelectFoundation);

    var _this = _possibleConstructorReturn(this, _MDCFoundation.call(this, _extends(MDCSelectFoundation.defaultAdapter, adapter)));

    _this.ctx_ = null;
    _this.selectedIndex_ = -1;
    _this.disabled_ = false;
    _this.displayHandler_ = function (evt) {
      evt.preventDefault();
      if (!_this.adapter_.isMenuOpen()) {
        _this.open_();
      }
    };
    _this.displayViaKeyboardHandler_ = function (evt) {
      return _this.handleDisplayViaKeyboard_(evt);
    };
    _this.selectionHandler_ = function (_ref) {
      var detail = _ref.detail;
      var index = detail.index;

      _this.close_();
      if (index !== _this.selectedIndex_) {
        _this.setSelectedIndex(index);
        _this.adapter_.notifyChange();
      }
    };
    _this.cancelHandler_ = function () {
      _this.close_();
    };
    return _this;
  }

  MDCSelectFoundation.prototype.init = function init() {
    this.ctx_ = this.adapter_.create2dRenderingContext();
    this.adapter_.registerInteractionHandler('click', this.displayHandler_);
    this.adapter_.registerInteractionHandler('keydown', this.displayViaKeyboardHandler_);
    this.adapter_.registerInteractionHandler('keyup', this.displayViaKeyboardHandler_);
    this.adapter_.registerMenuInteractionHandler(__WEBPACK_IMPORTED_MODULE_2__material_menu__["b" /* MDCSimpleMenuFoundation */].strings.SELECTED_EVENT, this.selectionHandler_);
    this.adapter_.registerMenuInteractionHandler(__WEBPACK_IMPORTED_MODULE_2__material_menu__["b" /* MDCSimpleMenuFoundation */].strings.CANCEL_EVENT, this.cancelHandler_);
    this.resize();
  };

  MDCSelectFoundation.prototype.destroy = function destroy() {
    // Drop reference to context object to prevent potential leaks
    this.ctx_ = null;
    this.adapter_.deregisterInteractionHandler('click', this.displayHandler_);
    this.adapter_.deregisterInteractionHandler('keydown', this.displayViaKeyboardHandler_);
    this.adapter_.deregisterInteractionHandler('keyup', this.displayViaKeyboardHandler_);
    this.adapter_.deregisterMenuInteractionHandler(__WEBPACK_IMPORTED_MODULE_2__material_menu__["b" /* MDCSimpleMenuFoundation */].strings.SELECTED_EVENT, this.selectionHandler_);
    this.adapter_.deregisterMenuInteractionHandler(__WEBPACK_IMPORTED_MODULE_2__material_menu__["b" /* MDCSimpleMenuFoundation */].strings.CANCEL_EVENT, this.cancelHandler_);
  };

  MDCSelectFoundation.prototype.getValue = function getValue() {
    return this.selectedIndex_ >= 0 ? this.adapter_.getValueForOptionAtIndex(this.selectedIndex_) : '';
  };

  MDCSelectFoundation.prototype.getSelectedIndex = function getSelectedIndex() {
    return this.selectedIndex_;
  };

  MDCSelectFoundation.prototype.setSelectedIndex = function setSelectedIndex(index) {
    var prevSelectedIndex = this.selectedIndex_;
    if (prevSelectedIndex >= 0) {
      this.adapter_.rmAttrForOptionAtIndex(this.selectedIndex_, 'aria-selected');
    }

    this.selectedIndex_ = index >= 0 && index < this.adapter_.getNumberOfOptions() ? index : -1;
    var selectedTextContent = '';
    if (this.selectedIndex_ >= 0) {
      selectedTextContent = this.adapter_.getTextForOptionAtIndex(this.selectedIndex_).trim();
      this.adapter_.setAttrForOptionAtIndex(this.selectedIndex_, 'aria-selected', 'true');
    }
    this.adapter_.setSelectedTextContent(selectedTextContent);
  };

  MDCSelectFoundation.prototype.isDisabled = function isDisabled() {
    return this.disabled_;
  };

  MDCSelectFoundation.prototype.setDisabled = function setDisabled(disabled) {
    var DISABLED = MDCSelectFoundation.cssClasses.DISABLED;

    this.disabled_ = disabled;
    if (this.disabled_) {
      this.adapter_.addClass(DISABLED);
      this.adapter_.setAttr('aria-disabled', 'true');
      this.adapter_.makeUntabbable();
    } else {
      this.adapter_.removeClass(DISABLED);
      this.adapter_.rmAttr('aria-disabled');
      this.adapter_.makeTabbable();
    }
  };

  MDCSelectFoundation.prototype.resize = function resize() {
    var font = this.adapter_.getComputedStyleValue('font');
    var letterSpacing = parseFloat(this.adapter_.getComputedStyleValue('letter-spacing'));
    if (font) {
      this.ctx_.font = font;
    } else {
      var primaryFontFamily = this.adapter_.getComputedStyleValue('font-family').split(',')[0];
      var fontSize = this.adapter_.getComputedStyleValue('font-size');
      this.ctx_.font = fontSize + ' ' + primaryFontFamily;
    }

    var maxTextLength = 0;
    for (var i = 0, l = this.adapter_.getNumberOfOptions(); i < l; i++) {
      var txt = this.adapter_.getTextForOptionAtIndex(i).trim();

      var _ctx_$measureText = this.ctx_.measureText(txt),
          width = _ctx_$measureText.width;

      var addedSpace = letterSpacing * txt.length;
      maxTextLength = Math.max(maxTextLength, Math.ceil(width + addedSpace));
    }
    this.adapter_.setStyle('width', maxTextLength + 'px');
  };

  MDCSelectFoundation.prototype.open_ = function open_() {
    var OPEN = MDCSelectFoundation.cssClasses.OPEN;

    var focusIndex = this.selectedIndex_ < 0 ? 0 : this.selectedIndex_;

    this.setMenuStylesForOpenAtIndex_(focusIndex);
    this.adapter_.addClass(OPEN);
    this.adapter_.openMenu(focusIndex);
  };

  MDCSelectFoundation.prototype.setMenuStylesForOpenAtIndex_ = function setMenuStylesForOpenAtIndex_(index) {
    var innerHeight = this.adapter_.getWindowInnerHeight();

    var _adapter_$computeBoun = this.adapter_.computeBoundingRect(),
        left = _adapter_$computeBoun.left,
        top = _adapter_$computeBoun.top;

    this.adapter_.setMenuElAttr('aria-hidden', 'true');
    this.adapter_.setMenuElStyle('display', 'block');
    var menuHeight = this.adapter_.getMenuElOffsetHeight();
    var itemOffsetTop = this.adapter_.getOffsetTopForOptionAtIndex(index);
    this.adapter_.setMenuElStyle('display', '');
    this.adapter_.rmMenuElAttr('aria-hidden');

    var adjustedTop = top - itemOffsetTop;
    var overflowsTop = adjustedTop < 0;
    var overflowsBottom = adjustedTop + menuHeight > innerHeight;
    if (overflowsTop) {
      adjustedTop = 0;
    } else if (overflowsBottom) {
      adjustedTop = Math.max(0, innerHeight - menuHeight);
    };

    this.adapter_.setMenuElStyle('left', left + 'px');
    this.adapter_.setMenuElStyle('top', adjustedTop + 'px');
    this.adapter_.setMenuElStyle('transform-origin', 'center ' + itemOffsetTop + 'px');
  };

  MDCSelectFoundation.prototype.close_ = function close_() {
    var OPEN = MDCSelectFoundation.cssClasses.OPEN;

    this.adapter_.removeClass(OPEN);
    this.adapter_.focus();
  };

  MDCSelectFoundation.prototype.handleDisplayViaKeyboard_ = function handleDisplayViaKeyboard_(evt) {
    // We use a hard-coded 2 instead of Event.AT_TARGET to avoid having to reference a browser
    // global.
    var EVENT_PHASE_AT_TARGET = 2;
    if (evt.eventPhase !== EVENT_PHASE_AT_TARGET) {
      return;
    }

    // Prevent pressing space down from scrolling the page
    var isSpaceDown = evt.type === 'keydown' && (evt.key === 'Space' || evt.keyCode === 32);
    if (isSpaceDown) {
      evt.preventDefault();
    }

    var isOpenerKey = OPENER_KEYS.some(function (_ref2) {
      var key = _ref2.key,
          keyCode = _ref2.keyCode,
          forType = _ref2.forType;

      return evt.type === forType && (evt.key === key || evt.keyCode === keyCode);
    });
    if (isOpenerKey) {
      this.displayHandler_(evt);
    }
  };

  return MDCSelectFoundation;
}(__WEBPACK_IMPORTED_MODULE_0__material_base__["b" /* MDCFoundation */]);



/***/ }),

/***/ "gNuw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Profile; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("EBst");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style__ = __webpack_require__("Tv6c");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style__);


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Profile = function (_Component) {
	_inherits(Profile, _Component);

	function Profile() {
		var _temp, _this, _ret;

		_classCallCheck(this, Profile);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
			time: Date.now(),
			count: 10
		}, _this.updateTime = function () {
			_this.setState({ time: Date.now() });
		}, _this.increment = function () {
			_this.setState({ count: _this.state.count + 1 });
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	// gets called when this route is navigated to
	Profile.prototype.componentDidMount = function componentDidMount() {
		// start a timer for the clock:
		this.timer = setInterval(this.updateTime, 1000);
	};

	// gets called just before navigating away from the route


	Profile.prototype.componentWillUnmount = function componentWillUnmount() {
		clearInterval(this.timer);
	};

	// update the current time


	// Note: `user` comes from the URL, courtesy of our router
	Profile.prototype.render = function render(_ref, _ref2) {
		var user = _ref.user;
		var time = _ref2.time,
		    count = _ref2.count;

		return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
			'div',
			{ 'class': __WEBPACK_IMPORTED_MODULE_1__style___default.a.profile },
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				'h1',
				null,
				'Profile: ',
				user
			),
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				'p',
				null,
				'This is the user profile for a user named ',
				user,
				'.'
			),
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				'div',
				null,
				'Current time: ',
				new Date(time).toLocaleString()
			),
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				'p',
				null,
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'button',
					{ onClick: this.increment },
					'Click Me'
				),
				' ',
				'Clicked ',
				count,
				' times.'
			)
		);
	};

	return Profile;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);



/***/ }),

/***/ "gjgI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return strings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return cssClasses; });
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var strings = {
  ARIA_HIDDEN: 'aria-hidden',
  ROLE: 'role',
  INPUT_SELECTOR: '.mdc-textfield__input',
  LABEL_SELECTOR: '.mdc-textfield__label'
};

var cssClasses = {
  ROOT: 'mdc-textfield',
  UPGRADED: 'mdc-textfield--upgraded',
  DISABLED: 'mdc-textfield--disabled',
  FOCUSED: 'mdc-textfield--focused',
  INVALID: 'mdc-textfield--invalid',
  HELPTEXT_PERSISTENT: 'mdc-textfield-helptext--persistent',
  HELPTEXT_VALIDATION_MSG: 'mdc-textfield-helptext--validation-msg',
  LABEL_FLOAT_ABOVE: 'mdc-textfield__label--float-above',
  BOX: 'mdc-textfield--box'
};

/***/ }),

/***/ "inYP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* eslint no-unused-vars: [2, {"args": "none"}] */

/**
 * Adapter for MDC Simple Menu. Provides an interface for managing
 * - classes
 * - dom
 * - focus
 * - position
 * - dimensions
 * - event handlers
 *
 * Additionally, provides type information for the adapter to the Closure
 * compiler.
 *
 * Implement this adapter for your framework of choice to delegate updates to
 * the component in your framework of choice. See architecture documentation
 * for more details.
 * https://github.com/material-components/material-components-web/blob/master/docs/architecture.md
 *
 * @record
 */
var MDCSimpleMenuAdapter = function () {
  function MDCSimpleMenuAdapter() {
    _classCallCheck(this, MDCSimpleMenuAdapter);
  }

  /** @param {string} className */
  MDCSimpleMenuAdapter.prototype.addClass = function addClass(className) {};

  /** @param {string} className */


  MDCSimpleMenuAdapter.prototype.removeClass = function removeClass(className) {};

  /**
   * @param {string} className
   * @return {boolean}
   */


  MDCSimpleMenuAdapter.prototype.hasClass = function hasClass(className) {};

  /** @return {boolean} */


  MDCSimpleMenuAdapter.prototype.hasNecessaryDom = function hasNecessaryDom() {};

  /**
   * @param {EventTarget} target
   * @param {string} attributeName
   * @return {string}
   */


  MDCSimpleMenuAdapter.prototype.getAttributeForEventTarget = function getAttributeForEventTarget(target, attributeName) {};

  /** @return {{ width: number, height: number }} */


  MDCSimpleMenuAdapter.prototype.getInnerDimensions = function getInnerDimensions() {};

  /** @return {boolean} */


  MDCSimpleMenuAdapter.prototype.hasAnchor = function hasAnchor() {};

  /** @return {{width: number, height: number, top: number, right: number, bottom: number, left: number}} */


  MDCSimpleMenuAdapter.prototype.getAnchorDimensions = function getAnchorDimensions() {};

  /** @return {{ width: number, height: number }} */


  MDCSimpleMenuAdapter.prototype.getWindowDimensions = function getWindowDimensions() {};

  /**
   * @param {number} x
   * @param {number} y
   */


  MDCSimpleMenuAdapter.prototype.setScale = function setScale(x, y) {};

  /**
   * @param {number} x
   * @param {number} y
   */


  MDCSimpleMenuAdapter.prototype.setInnerScale = function setInnerScale(x, y) {};

  /** @return {number} */


  MDCSimpleMenuAdapter.prototype.getNumberOfItems = function getNumberOfItems() {};

  /**
   * @param {string} type
   * @param {function(!Event)} handler
   */


  MDCSimpleMenuAdapter.prototype.registerInteractionHandler = function registerInteractionHandler(type, handler) {};

  /**
   * @param {string} type
   * @param {function(!Event)} handler
   */


  MDCSimpleMenuAdapter.prototype.deregisterInteractionHandler = function deregisterInteractionHandler(type, handler) {};

  /** @param {function(!Event)} handler */


  MDCSimpleMenuAdapter.prototype.registerBodyClickHandler = function registerBodyClickHandler(handler) {};

  /** @param {function(!Event)} handler */


  MDCSimpleMenuAdapter.prototype.deregisterBodyClickHandler = function deregisterBodyClickHandler(handler) {};

  /**
   * @param {number} index
   * @return {{top: number, height: number}}
   */


  MDCSimpleMenuAdapter.prototype.getYParamsForItemAtIndex = function getYParamsForItemAtIndex(index) {};

  /**
   * @param {number} index
   * @param {string|null} value
   */


  MDCSimpleMenuAdapter.prototype.setTransitionDelayForItemAtIndex = function setTransitionDelayForItemAtIndex(index, value) {};

  /**
   * @param {EventTarget} target
   * @return {number}
   */


  MDCSimpleMenuAdapter.prototype.getIndexForEventTarget = function getIndexForEventTarget(target) {};

  /** @param {{index: number}} evtData */


  MDCSimpleMenuAdapter.prototype.notifySelected = function notifySelected(evtData) {};

  MDCSimpleMenuAdapter.prototype.notifyCancel = function notifyCancel() {};

  MDCSimpleMenuAdapter.prototype.saveFocus = function saveFocus() {};

  MDCSimpleMenuAdapter.prototype.restoreFocus = function restoreFocus() {};

  /** @return {boolean} */


  MDCSimpleMenuAdapter.prototype.isFocused = function isFocused() {};

  MDCSimpleMenuAdapter.prototype.focus = function focus() {};

  /** @return {number} */


  MDCSimpleMenuAdapter.prototype.getFocusedItemIndex = function getFocusedItemIndex() /* number */{};

  /** @param {number} index */


  MDCSimpleMenuAdapter.prototype.focusItemAtIndex = function focusItemAtIndex(index) {};

  /** @return {boolean} */


  MDCSimpleMenuAdapter.prototype.isRtl = function isRtl() {};

  /** @param {string} origin */


  MDCSimpleMenuAdapter.prototype.setTransformOrigin = function setTransformOrigin(origin) {};

  /** @param {{
  *   top: (string|undefined),
  *   right: (string|undefined),
  *   bottom: (string|undefined),
  *   left: (string|undefined)
  * }} position */


  MDCSimpleMenuAdapter.prototype.setPosition = function setPosition(position) {};

  /** @return {number} */


  MDCSimpleMenuAdapter.prototype.getAccurateTime = function getAccurateTime() {};

  return MDCSimpleMenuAdapter;
}();



/***/ }),

/***/ "jM6C":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("EBst");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_ripple__ = __webpack_require__("ucTD");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




/**
 * Base class for every Material component in this package
 * NOTE: every component should add a ref by the name of `control` to its root dom for autoInit Properties
 *
 * @export
 * @class MaterialComponent
 * @extends {Component}
 */

var MaterialComponent = function (_Component) {
  _inherits(MaterialComponent, _Component);

  function MaterialComponent() {
    _classCallCheck(this, MaterialComponent);

    // Attributes inside this array will be check for boolean value true
    // and will be converted to mdc classes
    var _this = _possibleConstructorReturn(this, _Component.call(this));

    _this._mdcProps = [];
    // This will again be used to add apt classname to the component
    _this.componentName = "";
    // The final class name given to the dom
    _this.classText = "";
    return _this;
  }

  MaterialComponent.prototype.attachRipple = function attachRipple() {
    if (this.props.ripple && this.control) {
      __WEBPACK_IMPORTED_MODULE_1__material_ripple__["a" /* MDCRipple */].attachTo(this.control);
    }
  };
  // Build the className


  MaterialComponent.prototype.buildClassName = function buildClassName(props) {
    this.classText = "mdc-" + this.componentName;
    for (var propKey in this.props) {
      if (this.props.hasOwnProperty(propKey)) {
        var prop = this.props[propKey];
        if (typeof prop === "boolean" && prop) {
          if (this._mdcProps.indexOf(propKey) !== -1) {
            this.classText += " mdc-" + this.componentName + "--" + propKey;
          }
        }
      }
    }
  };

  MaterialComponent.prototype.getClassName = function getClassName(element) {
    if (!element) {
      return "";
    }
    element.attributes = element.attributes || {};
    if (element.attributes.className) {
      return this.classText + " " + element.attributes.className;
    }
    return this.classText;
  };
  // Components must implement this method for their specific DOM structure


  MaterialComponent.prototype.materialDom = function materialDom(props) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("div", _extends({}, props), props.children);
  };

  MaterialComponent.prototype.render = function render() {
    this.buildClassName();
    // Fetch a VNode
    var element = this.materialDom(this.props);
    element.attributes = element.attributes || {};
    // Fix for className
    element.attributes.class = this.getClassName(element);
    element.attributes.className = this.getClassName(element);
    // Clean this shit of proxy attributes
    this._mdcProps.forEach(function (prop) {
      delete element.attributes[prop];
    });
    return element;
  };

  return MaterialComponent;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);



/***/ }),

/***/ "jyFz":
/***/ (function(module, exports, __webpack_require__) {

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = function () {
  return this;
}() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime && Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__("SldL");

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch (e) {
    g.regeneratorRuntime = undefined;
  }
}

/***/ }),

/***/ "lwKq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createFocusTrapInstance;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_focus_trap__ = __webpack_require__("sHdP");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_focus_trap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_focus_trap__);
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



function createFocusTrapInstance(surfaceEl, acceptButtonEl) {
  var focusTrapFactory = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : __WEBPACK_IMPORTED_MODULE_0_focus_trap___default.a;

  return focusTrapFactory(surfaceEl, {
    initialFocus: acceptButtonEl,
    clickOutsideDeactivates: true
  });
}

/***/ }),

/***/ "mtWM":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("tIFN");

/***/ }),

/***/ "o/XI":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "oJlt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("cGG2");

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) {
    return parsed;
  }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
    }
  });

  return parsed;
};

/***/ }),

/***/ "oxUm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCSimpleMenu; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_component__ = __webpack_require__("WwmH");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundation__ = __webpack_require__("apge");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__("xC20");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__foundation__["a"]; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */







/**
 * @extends MDCComponent<!MDCSimpleMenuFoundation>
 */
var MDCSimpleMenu = function (_MDCComponent) {
  _inherits(MDCSimpleMenu, _MDCComponent);

  /** @param {...?} args */
  function MDCSimpleMenu() {
    _classCallCheck(this, MDCSimpleMenu);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    /** @private {!Element} */
    var _this = _possibleConstructorReturn(this, _MDCComponent.call.apply(_MDCComponent, [this].concat(args)));

    _this.previousFocus_;
    return _this;
  }

  /**
   * @param {!Element} root
   * @return {!MDCSimpleMenu}
   */


  MDCSimpleMenu.attachTo = function attachTo(root) {
    return new MDCSimpleMenu(root);
  };

  /** @return {boolean} */


  /** @param {{focusIndex: ?number}=} options */
  MDCSimpleMenu.prototype.show = function show() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$focusIndex = _ref.focusIndex,
        focusIndex = _ref$focusIndex === undefined ? null : _ref$focusIndex;

    this.foundation_.open({ focusIndex: focusIndex });
  };

  MDCSimpleMenu.prototype.hide = function hide() {
    this.foundation_.close();
  };

  /**
   * Return the item container element inside the component.
   * @return {?Element}
   */


  /** @return {!MDCSimpleMenuFoundation} */
  MDCSimpleMenu.prototype.getDefaultFoundation = function getDefaultFoundation() {
    var _this2 = this;

    return new __WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */]({
      addClass: function addClass(className) {
        return _this2.root_.classList.add(className);
      },
      removeClass: function removeClass(className) {
        return _this2.root_.classList.remove(className);
      },
      hasClass: function hasClass(className) {
        return _this2.root_.classList.contains(className);
      },
      hasNecessaryDom: function hasNecessaryDom() {
        return Boolean(_this2.itemsContainer_);
      },
      getAttributeForEventTarget: function getAttributeForEventTarget(target, attributeName) {
        return target.getAttribute(attributeName);
      },
      getInnerDimensions: function getInnerDimensions() {
        var itemsContainer = _this2.itemsContainer_;

        return { width: itemsContainer.offsetWidth, height: itemsContainer.offsetHeight };
      },
      hasAnchor: function hasAnchor() {
        return _this2.root_.parentElement && _this2.root_.parentElement.classList.contains('mdc-menu-anchor');
      },
      getAnchorDimensions: function getAnchorDimensions() {
        return _this2.root_.parentElement.getBoundingClientRect();
      },
      getWindowDimensions: function getWindowDimensions() {
        return { width: window.innerWidth, height: window.innerHeight };
      },
      setScale: function setScale(x, y) {
        _this2.root_.style[__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["a" /* getTransformPropertyName */])(window)] = 'scale(' + x + ', ' + y + ')';
      },
      setInnerScale: function setInnerScale(x, y) {
        _this2.itemsContainer_.style[__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["a" /* getTransformPropertyName */])(window)] = 'scale(' + x + ', ' + y + ')';
      },
      getNumberOfItems: function getNumberOfItems() {
        return _this2.items.length;
      },
      registerInteractionHandler: function registerInteractionHandler(type, handler) {
        return _this2.root_.addEventListener(type, handler);
      },
      deregisterInteractionHandler: function deregisterInteractionHandler(type, handler) {
        return _this2.root_.removeEventListener(type, handler);
      },
      registerBodyClickHandler: function registerBodyClickHandler(handler) {
        return document.body.addEventListener('click', handler);
      },
      deregisterBodyClickHandler: function deregisterBodyClickHandler(handler) {
        return document.body.removeEventListener('click', handler);
      },
      getYParamsForItemAtIndex: function getYParamsForItemAtIndex(index) {
        var _items$index = _this2.items[index],
            top = _items$index.offsetTop,
            height = _items$index.offsetHeight;

        return { top: top, height: height };
      },
      setTransitionDelayForItemAtIndex: function setTransitionDelayForItemAtIndex(index, value) {
        return _this2.items[index].style.setProperty('transition-delay', value);
      },
      getIndexForEventTarget: function getIndexForEventTarget(target) {
        return _this2.items.indexOf(target);
      },
      notifySelected: function notifySelected(evtData) {
        return _this2.emit(__WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */].strings.SELECTED_EVENT, {
          index: evtData.index,
          item: _this2.items[evtData.index]
        });
      },
      notifyCancel: function notifyCancel() {
        return _this2.emit(__WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */].strings.CANCEL_EVENT, {});
      },
      saveFocus: function saveFocus() {
        _this2.previousFocus_ = document.activeElement;
      },
      restoreFocus: function restoreFocus() {
        if (_this2.previousFocus_) {
          _this2.previousFocus_.focus();
        }
      },
      isFocused: function isFocused() {
        return document.activeElement === _this2.root_;
      },
      focus: function focus() {
        return _this2.root_.focus();
      },
      getFocusedItemIndex: function getFocusedItemIndex() {
        return _this2.items.indexOf(document.activeElement);
      },
      focusItemAtIndex: function focusItemAtIndex(index) {
        return _this2.items[index].focus();
      },
      isRtl: function isRtl() {
        return getComputedStyle(_this2.root_).getPropertyValue('direction') === 'rtl';
      },
      setTransformOrigin: function setTransformOrigin(origin) {
        _this2.root_.style[__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["a" /* getTransformPropertyName */])(window) + '-origin'] = origin;
      },
      setPosition: function setPosition(position) {
        _this2.root_.style.left = 'left' in position ? position.left : null;
        _this2.root_.style.right = 'right' in position ? position.right : null;
        _this2.root_.style.top = 'top' in position ? position.top : null;
        _this2.root_.style.bottom = 'bottom' in position ? position.bottom : null;
      },
      getAccurateTime: function getAccurateTime() {
        return window.performance.now();
      }
    });
  };

  _createClass(MDCSimpleMenu, [{
    key: 'open',
    get: function get() {
      return this.foundation_.isOpen();
    }

    /** @param {boolean} value */
    ,
    set: function set(value) {
      if (value) {
        this.foundation_.open();
      } else {
        this.foundation_.close();
      }
    }
  }, {
    key: 'itemsContainer_',
    get: function get() {
      return this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */].strings.ITEMS_SELECTOR);
    }

    /**
     * Return the items within the menu. Note that this only contains the set of elements within
     * the items container that are proper list items, and not supplemental / presentational DOM
     * elements.
     * @return {!Array<!Element>}
     */

  }, {
    key: 'items',
    get: function get() {
      var itemsContainer = this.itemsContainer_;

      return [].slice.call(itemsContainer.querySelectorAll('.mdc-list-item[role]'));
    }
  }]);

  return MDCSimpleMenu;
}(__WEBPACK_IMPORTED_MODULE_0__material_base_component__["a" /* default */]);

/***/ }),

/***/ "p1b6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("cGG2");

module.exports = utils.isStandardBrowserEnv() ?

// Standard browser envs support document.cookie
function standardBrowserEnv() {
  return {
    write: function write(name, value, expires, path, domain, secure) {
      var cookie = [];
      cookie.push(name + '=' + encodeURIComponent(value));

      if (utils.isNumber(expires)) {
        cookie.push('expires=' + new Date(expires).toGMTString());
      }

      if (utils.isString(path)) {
        cookie.push('path=' + path);
      }

      if (utils.isString(domain)) {
        cookie.push('domain=' + domain);
      }

      if (secure === true) {
        cookie.push('secure');
      }

      document.cookie = cookie.join('; ');
    },

    read: function read(name) {
      var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
      return match ? decodeURIComponent(match[3]) : null;
    },

    remove: function remove(name) {
      this.write(name, '', Date.now() - 86400000);
    }
  };
}() :

// Non standard browser env (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
  return {
    write: function write() {},
    read: function read() {
      return null;
    },
    remove: function remove() {}
  };
}();

/***/ }),

/***/ "pBtG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};

/***/ }),

/***/ "pxG4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */

module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};

/***/ }),

/***/ "qRfI":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */

module.exports = function combineURLs(baseURL, relativeURL) {
  return baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '');
};

/***/ }),

/***/ "rgXW":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"table":"table__1MxW4","loading":"loading__28zn3"};

/***/ }),

/***/ "rq4c":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "sHdP":
/***/ (function(module, exports, __webpack_require__) {

var tabbable = __webpack_require__("0Orf");

var listeningFocusTrap = null;

function focusTrap(element, userOptions) {
  var tabbableNodes = [];
  var nodeFocusedBeforeActivation = null;
  var active = false;
  var paused = false;

  var container = typeof element === 'string' ? document.querySelector(element) : element;

  var config = userOptions || {};
  config.returnFocusOnDeactivate = userOptions && userOptions.returnFocusOnDeactivate !== undefined ? userOptions.returnFocusOnDeactivate : true;
  config.escapeDeactivates = userOptions && userOptions.escapeDeactivates !== undefined ? userOptions.escapeDeactivates : true;

  var trap = {
    activate: activate,
    deactivate: deactivate,
    pause: pause,
    unpause: unpause
  };

  return trap;

  function activate(activateOptions) {
    if (active) return;

    var defaultedActivateOptions = {
      onActivate: activateOptions && activateOptions.onActivate !== undefined ? activateOptions.onActivate : config.onActivate
    };

    active = true;
    paused = false;
    nodeFocusedBeforeActivation = document.activeElement;

    if (defaultedActivateOptions.onActivate) {
      defaultedActivateOptions.onActivate();
    }

    addListeners();
    return trap;
  }

  function deactivate(deactivateOptions) {
    if (!active) return;

    var defaultedDeactivateOptions = {
      returnFocus: deactivateOptions && deactivateOptions.returnFocus !== undefined ? deactivateOptions.returnFocus : config.returnFocusOnDeactivate,
      onDeactivate: deactivateOptions && deactivateOptions.onDeactivate !== undefined ? deactivateOptions.onDeactivate : config.onDeactivate
    };

    removeListeners();

    if (defaultedDeactivateOptions.onDeactivate) {
      defaultedDeactivateOptions.onDeactivate();
    }

    if (defaultedDeactivateOptions.returnFocus) {
      setTimeout(function () {
        tryFocus(nodeFocusedBeforeActivation);
      }, 0);
    }

    active = false;
    paused = false;
    return this;
  }

  function pause() {
    if (paused || !active) return;
    paused = true;
    removeListeners();
  }

  function unpause() {
    if (!paused || !active) return;
    paused = false;
    addListeners();
  }

  function addListeners() {
    if (!active) return;

    // There can be only one listening focus trap at a time
    if (listeningFocusTrap) {
      listeningFocusTrap.pause();
    }
    listeningFocusTrap = trap;

    updateTabbableNodes();
    tryFocus(firstFocusNode());
    document.addEventListener('focus', checkFocus, true);
    document.addEventListener('click', checkClick, true);
    document.addEventListener('mousedown', checkPointerDown, true);
    document.addEventListener('touchstart', checkPointerDown, true);
    document.addEventListener('keydown', checkKey, true);

    return trap;
  }

  function removeListeners() {
    if (!active || listeningFocusTrap !== trap) return;

    document.removeEventListener('focus', checkFocus, true);
    document.removeEventListener('click', checkClick, true);
    document.removeEventListener('mousedown', checkPointerDown, true);
    document.removeEventListener('touchstart', checkPointerDown, true);
    document.removeEventListener('keydown', checkKey, true);

    listeningFocusTrap = null;

    return trap;
  }

  function getNodeForOption(optionName) {
    var optionValue = config[optionName];
    var node = optionValue;
    if (!optionValue) {
      return null;
    }
    if (typeof optionValue === 'string') {
      node = document.querySelector(optionValue);
      if (!node) {
        throw new Error('`' + optionName + '` refers to no known node');
      }
    }
    if (typeof optionValue === 'function') {
      node = optionValue();
      if (!node) {
        throw new Error('`' + optionName + '` did not return a node');
      }
    }
    return node;
  }

  function firstFocusNode() {
    var node;
    if (getNodeForOption('initialFocus') !== null) {
      node = getNodeForOption('initialFocus');
    } else if (container.contains(document.activeElement)) {
      node = document.activeElement;
    } else {
      node = tabbableNodes[0] || getNodeForOption('fallbackFocus');
    }

    if (!node) {
      throw new Error('You can\'t have a focus-trap without at least one focusable element');
    }

    return node;
  }

  // This needs to be done on mousedown and touchstart instead of click
  // so that it precedes the focus event
  function checkPointerDown(e) {
    if (config.clickOutsideDeactivates && !container.contains(e.target)) {
      deactivate({ returnFocus: false });
    }
  }

  function checkClick(e) {
    if (config.clickOutsideDeactivates) return;
    if (container.contains(e.target)) return;
    e.preventDefault();
    e.stopImmediatePropagation();
  }

  function checkFocus(e) {
    if (container.contains(e.target)) return;
    e.preventDefault();
    e.stopImmediatePropagation();
    // Checking for a blur method here resolves a Firefox issue (#15)
    if (typeof e.target.blur === 'function') e.target.blur();
  }

  function checkKey(e) {
    if (e.key === 'Tab' || e.keyCode === 9) {
      handleTab(e);
    }

    if (config.escapeDeactivates !== false && isEscapeEvent(e)) {
      deactivate();
    }
  }

  function handleTab(e) {
    e.preventDefault();
    updateTabbableNodes();
    var currentFocusIndex = tabbableNodes.indexOf(e.target);
    var lastTabbableNode = tabbableNodes[tabbableNodes.length - 1];
    var firstTabbableNode = tabbableNodes[0];

    if (e.shiftKey) {
      if (e.target === firstTabbableNode || tabbableNodes.indexOf(e.target) === -1) {
        return tryFocus(lastTabbableNode);
      }
      return tryFocus(tabbableNodes[currentFocusIndex - 1]);
    }

    if (e.target === lastTabbableNode) return tryFocus(firstTabbableNode);

    tryFocus(tabbableNodes[currentFocusIndex + 1]);
  }

  function updateTabbableNodes() {
    tabbableNodes = tabbable(container);
  }
}

function isEscapeEvent(e) {
  return e.key === 'Escape' || e.key === 'Esc' || e.keyCode === 27;
}

function tryFocus(node) {
  if (!node || !node.focus) return;
  node.focus();
  if (node.tagName.toLowerCase() === 'input') {
    node.select();
  }
}

module.exports = focusTrap;

/***/ }),

/***/ "sIAo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Header; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("EBst");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact_router_match__ = __webpack_require__("KN6U");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact_router_match___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_preact_router_match__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style__ = __webpack_require__("u3et");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_preact_material_components_Toolbar__ = __webpack_require__("75oQ");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_preact_material_components_Toolbar_style_css__ = __webpack_require__("o/XI");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_preact_material_components_Toolbar_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_preact_material_components_Toolbar_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_preact_material_components_Button__ = __webpack_require__("zuIX");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_preact_material_components_Button_style_css__ = __webpack_require__("GzFB");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_preact_material_components_Button_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_preact_material_components_Button_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__store_main__ = __webpack_require__("dwjF");


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }












var _ref = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	__WEBPACK_IMPORTED_MODULE_5_preact_material_components_Button__["a" /* default */],
	{ icon: true, ripple: true, compact: true },
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
		__WEBPACK_IMPORTED_MODULE_3_preact_material_components_Toolbar__["a" /* default */].Icon,
		{ menu: true },
		'menu'
	)
);

var _ref2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	__WEBPACK_IMPORTED_MODULE_3_preact_material_components_Toolbar__["a" /* default */].Title,
	null,
	'VEX Skills Helper'
);

var _ref3 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
	__WEBPACK_IMPORTED_MODULE_3_preact_material_components_Toolbar__["a" /* default */].Icon,
	null,
	'filter_list'
);

var Header = function (_Component) {
	_inherits(Header, _Component);

	function Header() {
		_classCallCheck(this, Header);

		return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	}

	Header.prototype.render = function render() {
		return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
			'div',
			{ 'class': __WEBPACK_IMPORTED_MODULE_2__style___default.a.toolbar },
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				__WEBPACK_IMPORTED_MODULE_3_preact_material_components_Toolbar__["a" /* default */],
				{ className: 'toolbar' },
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_3_preact_material_components_Toolbar__["a" /* default */].Row,
					null,
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						__WEBPACK_IMPORTED_MODULE_3_preact_material_components_Toolbar__["a" /* default */].Section,
						{ 'align-start': true },
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							'div',
							{ 'class': [__WEBPACK_IMPORTED_MODULE_2__style___default.a.icon, __WEBPACK_IMPORTED_MODULE_2__style___default.a.menu].join(" ") },
							_ref
						),
						_ref2
					),
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						__WEBPACK_IMPORTED_MODULE_3_preact_material_components_Toolbar__["a" /* default */].Section,
						{ 'align-end': true },
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							'div',
							{ 'class': __WEBPACK_IMPORTED_MODULE_2__style___default.a.icon },
							__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
								__WEBPACK_IMPORTED_MODULE_5_preact_material_components_Button__["a" /* default */],
								{ icon: true, ripple: true, compact: true, onclick: function onclick() {
										return __WEBPACK_IMPORTED_MODULE_7__store_main__["a" /* default */].get("refs.config").MDComponent.show();
									} },
								_ref3
							)
						)
					)
				)
			)
		);
	};

	return Header;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);



/***/ }),

/***/ "t8qj":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 @ @param {Object} [response] The response.
 * @returns {Error} The error.
 */

module.exports = function enhanceError(error, config, code, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.response = response;
  return error;
};

/***/ }),

/***/ "tIFN":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("cGG2");
var bind = __webpack_require__("JP+z");
var Axios = __webpack_require__("XmWM");
var defaults = __webpack_require__("KCLY");

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(utils.merge(defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__("dVOP");
axios.CancelToken = __webpack_require__("cWxy");
axios.isCancel = __webpack_require__("pBtG");

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__("pxG4");

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;

/***/ }),

/***/ "thJu":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function E() {
  this.message = 'String contains an invalid character';
}
E.prototype = new Error();
E.prototype.code = 5;
E.prototype.name = 'InvalidCharacterError';

function btoa(input) {
  var str = String(input);
  var output = '';
  for (
  // initialize result and counter
  var block, charCode, idx = 0, map = chars;
  // if the next str index does not exist:
  //   change the mapping table to "="
  //   check if d has no fractional digits
  str.charAt(idx | 0) || (map = '=', idx % 1);
  // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
  output += map.charAt(63 & block >> 8 - idx % 1 * 8)) {
    charCode = str.charCodeAt(idx += 3 / 4);
    if (charCode > 0xFF) {
      throw new E();
    }
    block = block << 8 | charCode;
  }
  return output;
}

module.exports = btoa;

/***/ }),

/***/ "u3et":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"icon":"icon__2ZTTh","menu":"menu__1HLlu","toolbar":"toolbar__1Nziu"};

/***/ }),

/***/ "u5aD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("EBst");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MaterialComponent__ = __webpack_require__("jM6C");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};




/**
 * @prop dense = false
 * @prop two-line = false
 * @prop interactive = false
 */

var List = function (_MaterialComponent) {
  _inherits(List, _MaterialComponent);

  function List() {
    _classCallCheck(this, List);

    var _this = _possibleConstructorReturn(this, _MaterialComponent.call(this));

    _this.componentName = "list";
    _this._mdcProps = ["dense", "two-line"];
    return _this;
  }

  List.prototype.materialDom = function materialDom(props) {
    var _this2 = this;

    if (props.interactive) {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("nav", _extends({ ref: function ref(control) {
          return _this2.control = control;
        } }, props), props.children);
    }

    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("ul", _extends({}, props, { ref: function ref(control) {
        return _this2.control = control;
      } }), props.children);
  };

  return List;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);

var ListItem = function (_MaterialComponent2) {
  _inherits(ListItem, _MaterialComponent2);

  function ListItem() {
    _classCallCheck(this, ListItem);

    var _this3 = _possibleConstructorReturn(this, _MaterialComponent2.call(this));

    _this3.componentName = "list-item";
    return _this3;
  }

  ListItem.prototype.materialDom = function materialDom(props) {
    var _this4 = this;

    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("li", _extends({ role: "option" }, props, { ref: function ref(control) {
        return _this4.control = control;
      } }), props.children);
  };

  return ListItem;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);

var LinkItem = function (_MaterialComponent3) {
  _inherits(LinkItem, _MaterialComponent3);

  function LinkItem() {
    _classCallCheck(this, LinkItem);

    var _this5 = _possibleConstructorReturn(this, _MaterialComponent3.call(this));

    _this5.componentName = "list-item";
    return _this5;
  }

  LinkItem.prototype.componentDidMount = function componentDidMount() {
    _MaterialComponent3.prototype.attachRipple.call(this);
  };

  LinkItem.prototype.materialDom = function materialDom(props) {
    var _this6 = this;

    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("a", _extends({ role: "option" }, props, { ref: function ref(control) {
        return _this6.control = control;
      } }), props.children);
  };

  return LinkItem;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);

/**
 * @prop start-detail = true
 * @prop end-detail = false
 */


var ListItemIcon = function (_MaterialComponent4) {
  _inherits(ListItemIcon, _MaterialComponent4);

  function ListItemIcon() {
    _classCallCheck(this, ListItemIcon);

    var _this7 = _possibleConstructorReturn(this, _MaterialComponent4.call(this));

    _this7.componentName = "mdc-list-item__icon";
    return _this7;
  }

  ListItemIcon.prototype.getProxyClassName = function getProxyClassName(props) {
    var classNames = [];

    // default behavior
    props["start-detail"] = props["start-detail"] || true;

    // setting class names mutually exclusive
    if (props["end-detail"]) {
      classNames.push("mdc-list-item__end-detail");
    } else if (props["start-detail"]) {
      classNames.push("mdc-list-item__start-detail");
    }
    return classNames.join(" ");
  };

  ListItemIcon.prototype.materialDom = function materialDom(props) {
    var _this8 = this;

    var className = "material-icons " + this.getProxyClassName(props);
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("i", _extends({
      className: className,
      "aria-hidden": "true"
    }, props, {
      ref: function ref(control) {
        return _this8.control = control;
      }
    }), props.children);
  };

  return ListItemIcon;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);

/**
 * @prop start-detail = true
 * @prop end-detail = false
 */


var ListItemAvatar = function (_ListItemIcon) {
  _inherits(ListItemAvatar, _ListItemIcon);

  function ListItemAvatar() {
    _classCallCheck(this, ListItemAvatar);

    var _this9 = _possibleConstructorReturn(this, _ListItemIcon.call(this));

    _this9.componentName = "mdc-list-item__avatar";
    return _this9;
  }

  ListItemAvatar.prototype.materialDom = function materialDom(props) {
    var _this10 = this;

    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("img", _extends({}, props, {
      className: _ListItemIcon.prototype.getProxyClassName.call(this, props)
    }, props, {
      ref: function ref(control) {
        return _this10.control = control;
      },
      width: props.width || "56",
      height: props.height || "56",
      alt: props.alt || ""
    }));
  };

  return ListItemAvatar;
}(ListItemIcon);

var ListDivider = function (_MaterialComponent5) {
  _inherits(ListDivider, _MaterialComponent5);

  function ListDivider() {
    _classCallCheck(this, ListDivider);

    var _this11 = _possibleConstructorReturn(this, _MaterialComponent5.call(this));

    _this11.componentName = "list-divider";
    _this11._mdcProps = ["inset"];
    return _this11;
  }

  ListDivider.prototype.materialDom = function materialDom(props) {
    var _this12 = this;

    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("li", _extends({
      role: "separator"
    }, props, {
      ref: function ref(control) {
        return _this12.control = control;
      }
    }));
  };

  return ListDivider;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);

var ListTextContainer = function (_MaterialComponent6) {
  _inherits(ListTextContainer, _MaterialComponent6);

  function ListTextContainer() {
    _classCallCheck(this, ListTextContainer);

    var _this13 = _possibleConstructorReturn(this, _MaterialComponent6.call(this));

    _this13.componentName = "list-item__text";
    return _this13;
  }

  ListTextContainer.prototype.materialDom = function materialDom(props) {
    var _this14 = this;

    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("span", _extends({}, props, { ref: function ref(control) {
        return _this14.control = control;
      } }), props.children);
  };

  return ListTextContainer;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);

var ListPrimaryText = function (_ListTextContainer) {
  _inherits(ListPrimaryText, _ListTextContainer);

  function ListPrimaryText() {
    _classCallCheck(this, ListPrimaryText);

    var _this15 = _possibleConstructorReturn(this, _ListTextContainer.call(this));

    _this15.componentName = "list-item__text__primary";
    return _this15;
  }

  return ListPrimaryText;
}(ListTextContainer);

var ListSecondaryText = function (_ListTextContainer2) {
  _inherits(ListSecondaryText, _ListTextContainer2);

  function ListSecondaryText() {
    _classCallCheck(this, ListSecondaryText);

    var _this16 = _possibleConstructorReturn(this, _ListTextContainer2.call(this));

    _this16.componentName = "list-item__text__secondary";
    return _this16;
  }

  return ListSecondaryText;
}(ListTextContainer);

List.Item = ListItem;
List.LinkItem = LinkItem;
List.ItemIcon = ListItemIcon;
List.ItemAvatar = ListItemAvatar;
List.Divider = ListDivider;
List.TextContainer = ListTextContainer;
List.PrimaryText = ListPrimaryText;
List.SecondaryText = ListSecondaryText;

/* harmony default export */ __webpack_exports__["a"] = (List);

/***/ }),

/***/ "ucTD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCRipple; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_component__ = __webpack_require__("WwmH");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__("1AK+");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foundation__ = __webpack_require__("cS8m");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util__ = __webpack_require__("fDu/");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__foundation__["a"]; });
/* unused harmony reexport util */
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */









/**
 * @extends MDCComponent<!MDCRippleFoundation>
 */
var MDCRipple = function (_MDCComponent) {
  _inherits(MDCRipple, _MDCComponent);

  /** @param {...?} args */
  function MDCRipple() {
    _classCallCheck(this, MDCRipple);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    /** @type {boolean} */
    var _this = _possibleConstructorReturn(this, _MDCComponent.call.apply(_MDCComponent, [this].concat(args)));

    _this.disabled = false;

    /** @private {boolean} */
    _this.unbounded_;
    return _this;
  }

  /**
   * @param {!Element} root
   * @param {{isUnbounded: (boolean|undefined)}=} options
   * @return {!MDCRipple}
   */


  MDCRipple.attachTo = function attachTo(root) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref$isUnbounded = _ref.isUnbounded,
        isUnbounded = _ref$isUnbounded === undefined ? undefined : _ref$isUnbounded;

    var ripple = new MDCRipple(root);
    // Only override unbounded behavior if option is explicitly specified
    if (isUnbounded !== undefined) {
      ripple.unbounded = /** @type {boolean} */isUnbounded;
    }
    return ripple;
  };

  /**
   * @param {!RippleCapableSurface} instance
   * @return {!MDCRippleAdapter}
   */


  MDCRipple.createAdapter = function createAdapter(instance) {
    var MATCHES = __WEBPACK_IMPORTED_MODULE_3__util__["a" /* getMatchesProperty */](HTMLElement.prototype);

    return {
      browserSupportsCssVars: function browserSupportsCssVars() {
        return __WEBPACK_IMPORTED_MODULE_3__util__["b" /* supportsCssVariables */](window);
      },
      isUnbounded: function isUnbounded() {
        return instance.unbounded;
      },
      isSurfaceActive: function isSurfaceActive() {
        return instance.root_[MATCHES](':active');
      },
      isSurfaceDisabled: function isSurfaceDisabled() {
        return instance.disabled;
      },
      addClass: function addClass(className) {
        return instance.root_.classList.add(className);
      },
      removeClass: function removeClass(className) {
        return instance.root_.classList.remove(className);
      },
      registerInteractionHandler: function registerInteractionHandler(evtType, handler) {
        return instance.root_.addEventListener(evtType, handler, __WEBPACK_IMPORTED_MODULE_3__util__["c" /* applyPassive */]());
      },
      deregisterInteractionHandler: function deregisterInteractionHandler(evtType, handler) {
        return instance.root_.removeEventListener(evtType, handler, __WEBPACK_IMPORTED_MODULE_3__util__["c" /* applyPassive */]());
      },
      registerResizeHandler: function registerResizeHandler(handler) {
        return window.addEventListener('resize', handler);
      },
      deregisterResizeHandler: function deregisterResizeHandler(handler) {
        return window.removeEventListener('resize', handler);
      },
      updateCssVariable: function updateCssVariable(varName, value) {
        return instance.root_.style.setProperty(varName, value);
      },
      computeBoundingRect: function computeBoundingRect() {
        return instance.root_.getBoundingClientRect();
      },
      getWindowPageOffset: function getWindowPageOffset() {
        return { x: window.pageXOffset, y: window.pageYOffset };
      }
    };
  };

  /** @return {boolean} */


  MDCRipple.prototype.activate = function activate() {
    this.foundation_.activate();
  };

  MDCRipple.prototype.deactivate = function deactivate() {
    this.foundation_.deactivate();
  };

  MDCRipple.prototype.layout = function layout() {
    this.foundation_.layout();
  };

  /** @return {!MDCRippleFoundation} */


  MDCRipple.prototype.getDefaultFoundation = function getDefaultFoundation() {
    return new __WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */](MDCRipple.createAdapter(this));
  };

  MDCRipple.prototype.initialSyncWithDOM = function initialSyncWithDOM() {
    this.unbounded = 'mdcRippleIsUnbounded' in this.root_.dataset;
  };

  _createClass(MDCRipple, [{
    key: 'unbounded',
    get: function get() {
      return this.unbounded_;
    }

    /** @param {boolean} unbounded */
    ,
    set: function set(unbounded) {
      var UNBOUNDED = __WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */].cssClasses.UNBOUNDED;

      this.unbounded_ = Boolean(unbounded);
      if (this.unbounded_) {
        this.root_.classList.add(UNBOUNDED);
      } else {
        this.root_.classList.remove(UNBOUNDED);
      }
    }
  }]);

  return MDCRipple;
}(__WEBPACK_IMPORTED_MODULE_0__material_base_component__["a" /* default */]);

/**
 * See Material Design spec for more details on when to use ripples.
 * https://material.io/guidelines/motion/choreography.html#choreography-creation
 * @record
 */

var RippleCapableSurface = function RippleCapableSurface() {
  _classCallCheck(this, RippleCapableSurface);
};

/** @protected {!Element} */


RippleCapableSurface.prototype.root_;

/**
 * Whether or not the ripple bleeds out of the bounds of the element.
 * @type {boolean|undefined}
 */
RippleCapableSurface.prototype.unbounded;

/**
 * Whether or not the ripple is attached to a disabled component.
 * @type {boolean|undefined}
 */
RippleCapableSurface.prototype.disabled;

/***/ }),

/***/ "vmzn":
/***/ (function(module, exports, __webpack_require__) {


/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = createDebug.debug = createDebug['default'] = createDebug;
exports.coerce = coerce;
exports.disable = disable;
exports.enable = enable;
exports.enabled = enabled;
exports.humanize = __webpack_require__("EarI");

/**
 * The currently active debug mode names, and names to skip.
 */

exports.names = [];
exports.skips = [];

/**
 * Map of special "%n" handling functions, for the debug "format" argument.
 *
 * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
 */

exports.formatters = {};

/**
 * Previous log timestamp.
 */

var prevTime;

/**
 * Select a color.
 * @param {String} namespace
 * @return {Number}
 * @api private
 */

function selectColor(namespace) {
  var hash = 0,
      i;

  for (i in namespace) {
    hash = (hash << 5) - hash + namespace.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }

  return exports.colors[Math.abs(hash) % exports.colors.length];
}

/**
 * Create a debugger with the given `namespace`.
 *
 * @param {String} namespace
 * @return {Function}
 * @api public
 */

function createDebug(namespace) {

  function debug() {
    // disabled?
    if (!debug.enabled) return;

    var self = debug;

    // set `diff` timestamp
    var curr = +new Date();
    var ms = curr - (prevTime || curr);
    self.diff = ms;
    self.prev = prevTime;
    self.curr = curr;
    prevTime = curr;

    // turn the `arguments` into a proper Array
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }

    args[0] = exports.coerce(args[0]);

    if ('string' !== typeof args[0]) {
      // anything else let's inspect with %O
      args.unshift('%O');
    }

    // apply any `formatters` transformations
    var index = 0;
    args[0] = args[0].replace(/%([a-zA-Z%])/g, function (match, format) {
      // if we encounter an escaped % then don't increase the array index
      if (match === '%%') return match;
      index++;
      var formatter = exports.formatters[format];
      if ('function' === typeof formatter) {
        var val = args[index];
        match = formatter.call(self, val);

        // now we need to remove `args[index]` since it's inlined in the `format`
        args.splice(index, 1);
        index--;
      }
      return match;
    });

    // apply env-specific formatting (colors, etc.)
    exports.formatArgs.call(self, args);

    var logFn = debug.log || exports.log || console.log.bind(console);
    logFn.apply(self, args);
  }

  debug.namespace = namespace;
  debug.enabled = exports.enabled(namespace);
  debug.useColors = exports.useColors();
  debug.color = selectColor(namespace);

  // env-specific initialization logic for debug instances
  if ('function' === typeof exports.init) {
    exports.init(debug);
  }

  return debug;
}

/**
 * Enables a debug mode by namespaces. This can include modes
 * separated by a colon and wildcards.
 *
 * @param {String} namespaces
 * @api public
 */

function enable(namespaces) {
  exports.save(namespaces);

  exports.names = [];
  exports.skips = [];

  var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
  var len = split.length;

  for (var i = 0; i < len; i++) {
    if (!split[i]) continue; // ignore empty strings
    namespaces = split[i].replace(/\*/g, '.*?');
    if (namespaces[0] === '-') {
      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
    } else {
      exports.names.push(new RegExp('^' + namespaces + '$'));
    }
  }
}

/**
 * Disable debug output.
 *
 * @api public
 */

function disable() {
  exports.enable('');
}

/**
 * Returns true if the given mode name is enabled, false otherwise.
 *
 * @param {String} name
 * @return {Boolean}
 * @api public
 */

function enabled(name) {
  var i, len;
  for (i = 0, len = exports.skips.length; i < len; i++) {
    if (exports.skips[i].test(name)) {
      return false;
    }
  }
  for (i = 0, len = exports.names.length; i < len; i++) {
    if (exports.names[i].test(name)) {
      return true;
    }
  }
  return false;
}

/**
 * Coerce `val`.
 *
 * @param {Mixed} val
 * @return {Mixed}
 * @api private
 */

function coerce(val) {
  if (val instanceof Error) return val.stack || val.message;
  return val;
}

/***/ }),

/***/ "xC20":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getTransformPropertyName;
/* harmony export (immutable) */ __webpack_exports__["b"] = clamp;
/* harmony export (immutable) */ __webpack_exports__["c"] = bezierProgress;
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/** @type {string|undefined} */
var storedTransformPropertyName_ = void 0;

/**
 * Returns the name of the correct transform property to use on the current browser.
 * @param {!Window} globalObj
 * @param {boolean=} forceRefresh
 * @return {string}
 */
function getTransformPropertyName(globalObj) {
  var forceRefresh = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (storedTransformPropertyName_ === undefined || forceRefresh) {
    var el = globalObj.document.createElement('div');
    var transformPropertyName = 'transform' in el.style ? 'transform' : 'webkitTransform';
    storedTransformPropertyName_ = transformPropertyName;
  }

  return storedTransformPropertyName_;
}

/**
 * Clamps a value between the minimum and the maximum, returning the clamped value.
 * @param {number} value
 * @param {number} min
 * @param {number} max
 * @return {number}
 */
function clamp(value) {
  var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

  return Math.min(max, Math.max(min, value));
}

/**
 * Returns the easing value to apply at time t, for a given cubic bezier curve.
 * Control points P0 and P3 are assumed to be (0,0) and (1,1), respectively.
 * Parameters are as follows:
 * - time: The current time in the animation, scaled between 0 and 1.
 * - x1: The x value of control point P1.
 * - y1: The y value of control point P1.
 * - x2: The x value of control point P2.
 * - y2: The y value of control point P2.
 * @param {number} time
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @return {number}
 */
function bezierProgress(time, x1, y1, x2, y2) {
  return getBezierCoordinate_(solvePositionFromXValue_(time, x1, x2), y1, y2);
}

/**
 * Compute a single coordinate at a position point between 0 and 1.
 * c1 and c2 are the matching coordinate on control points P1 and P2, respectively.
 * Control points P0 and P3 are assumed to be (0,0) and (1,1), respectively.
 * Adapted from https://github.com/google/closure-library/blob/master/closure/goog/math/bezier.js.
 * @param {number} t
 * @param {number} c1
 * @param {number} c2
 * @return {number}
 */
function getBezierCoordinate_(t, c1, c2) {
  // Special case start and end.
  if (t === 0 || t === 1) {
    return t;
  }

  // Step one - from 4 points to 3
  var ic0 = t * c1;
  var ic1 = c1 + t * (c2 - c1);
  var ic2 = c2 + t * (1 - c2);

  // Step two - from 3 points to 2
  ic0 += t * (ic1 - ic0);
  ic1 += t * (ic2 - ic1);

  // Final step - last point
  return ic0 + t * (ic1 - ic0);
}

/**
 * Project a point onto the Bezier curve, from a given X. Calculates the position t along the curve.
 * Adapted from https://github.com/google/closure-library/blob/master/closure/goog/math/bezier.js.
 * @param {number} xVal
 * @param {number} x1
 * @param {number} x2
 * @return {number}
 */
function solvePositionFromXValue_(xVal, x1, x2) {
  var EPSILON = 1e-6;
  var MAX_ITERATIONS = 8;

  if (xVal <= 0) {
    return 0;
  } else if (xVal >= 1) {
    return 1;
  }

  // Initial estimate of t using linear interpolation.
  var t = xVal;

  // Try gradient descent to solve for t. If it works, it is very fast.
  var tMin = 0;
  var tMax = 1;
  var value = 0;
  for (var i = 0; i < MAX_ITERATIONS; i++) {
    value = getBezierCoordinate_(t, x1, x2);
    var derivative = (getBezierCoordinate_(t + EPSILON, x1, x2) - value) / EPSILON;
    if (Math.abs(value - xVal) < EPSILON) {
      return t;
    } else if (Math.abs(derivative) < EPSILON) {
      break;
    } else {
      if (value < xVal) {
        tMin = t;
      } else {
        tMax = t;
      }
      t -= (value - xVal) / derivative;
    }
  }

  // If the gradient descent got stuck in a local minimum, e.g. because
  // the derivative was close to 0, use a Dichotomy refinement instead.
  // We limit the number of interations to 8.
  for (var _i = 0; Math.abs(value - xVal) > EPSILON && _i < MAX_ITERATIONS; _i++) {
    if (value < xVal) {
      tMin = t;
      t = (t + tMax) / 2;
    } else {
      tMax = t;
      t = (t + tMin) / 2;
    }
    value = getBezierCoordinate_(t, x1, x2);
  }
  return t;
}

/***/ }),

/***/ "xLtR":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("cGG2");
var transformData = __webpack_require__("TNV1");
var isCancel = __webpack_require__("pBtG");
var defaults = __webpack_require__("KCLY");

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(config.data, config.headers, config.transformRequest);

  // Flatten headers
  config.headers = utils.merge(config.headers.common || {}, config.headers[config.method] || {}, config.headers || {});

  utils.forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'common'], function cleanHeaderConfig(method) {
    delete config.headers[method];
  });

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(response.data, response.headers, config.transformResponse);

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(reason.response.data, reason.response.headers, config.transformResponse);
      }
    }

    return Promise.reject(reason);
  });
};

/***/ }),

/***/ "y+SO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribers", function() { return subscribers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentUrl", function() { return getCurrentUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "route", function() { return route; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return Router; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Route", function() { return Route; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return Link; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("EBst");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);


var EMPTY$1 = {};

function assign(obj, props) {
	// eslint-disable-next-line guard-for-in
	for (var i in props) {
		obj[i] = props[i];
	}
	return obj;
}

function exec(url, route, opts) {
	if (opts === void 0) opts = EMPTY$1;

	var reg = /(?:\?([^#]*))?(#.*)?$/,
	    c = url.match(reg),
	    matches = {},
	    ret;
	if (c && c[1]) {
		var p = c[1].split('&');
		for (var i = 0; i < p.length; i++) {
			var r = p[i].split('=');
			matches[decodeURIComponent(r[0])] = decodeURIComponent(r.slice(1).join('='));
		}
	}
	url = segmentize(url.replace(reg, ''));
	route = segmentize(route || '');
	var max = Math.max(url.length, route.length);
	for (var i$1 = 0; i$1 < max; i$1++) {
		if (route[i$1] && route[i$1].charAt(0) === ':') {
			var param = route[i$1].replace(/(^\:|[+*?]+$)/g, ''),
			    flags = (route[i$1].match(/[+*?]+$/) || EMPTY$1)[0] || '',
			    plus = ~flags.indexOf('+'),
			    star = ~flags.indexOf('*'),
			    val = url[i$1] || '';
			if (!val && !star && (flags.indexOf('?') < 0 || plus)) {
				ret = false;
				break;
			}
			matches[param] = decodeURIComponent(val);
			if (plus || star) {
				matches[param] = url.slice(i$1).map(decodeURIComponent).join('/');
				break;
			}
		} else if (route[i$1] !== url[i$1]) {
			ret = false;
			break;
		}
	}
	if (opts.default !== true && ret === false) {
		return false;
	}
	return matches;
}

function pathRankSort(a, b) {
	var aAttr = a.attributes || EMPTY$1,
	    bAttr = b.attributes || EMPTY$1;
	if (aAttr.default) {
		return 1;
	}
	if (bAttr.default) {
		return -1;
	}
	var diff = rank(aAttr.path) - rank(bAttr.path);
	return diff || aAttr.path.length - bAttr.path.length;
}

function segmentize(url) {
	return strip(url).split('/');
}

function rank(url) {
	return (strip(url).match(/\/+/g) || '').length;
}

function strip(url) {
	return url.replace(/(^\/+|\/+$)/g, '');
}

var customHistory = null;

var ROUTERS = [];

var subscribers = [];

var EMPTY = {};

function isPreactElement(node) {
	return node.__preactattr_ != null || typeof Symbol !== 'undefined' && node[Symbol.for('preactattr')] != null;
}

function setUrl(url, type) {
	if (type === void 0) type = 'push';

	if (customHistory && customHistory[type]) {
		customHistory[type](url);
	} else if (typeof history !== 'undefined' && history[type + 'State']) {
		history[type + 'State'](null, null, url);
	}
}

function getCurrentUrl() {
	var url;
	if (customHistory && customHistory.location) {
		url = customHistory.location;
	} else if (customHistory && customHistory.getCurrentLocation) {
		url = customHistory.getCurrentLocation();
	} else {
		url = typeof location !== 'undefined' ? location : EMPTY;
	}
	return "" + (url.pathname || '') + (url.search || '');
}

function route(url, replace) {
	if (replace === void 0) replace = false;

	if (typeof url !== 'string' && url.url) {
		replace = url.replace;
		url = url.url;
	}

	// only push URL into history if we can handle it
	if (canRoute(url)) {
		setUrl(url, replace ? 'replace' : 'push');
	}

	return routeTo(url);
}

/** Check if the given URL can be handled by any router instances. */
function canRoute(url) {
	for (var i = ROUTERS.length; i--;) {
		if (ROUTERS[i].canRoute(url)) {
			return true;
		}
	}
	return false;
}

/** Tell all router instances to handle the given URL.  */
function routeTo(url) {
	var didRoute = false;
	for (var i = 0; i < ROUTERS.length; i++) {
		if (ROUTERS[i].routeTo(url) === true) {
			didRoute = true;
		}
	}
	for (var i$1 = subscribers.length; i$1--;) {
		subscribers[i$1](url);
	}
	return didRoute;
}

function routeFromLink(node) {
	// only valid elements
	if (!node || !node.getAttribute) {
		return;
	}

	var href = node.getAttribute('href'),
	    target = node.getAttribute('target');

	// ignore links with targets and non-path URLs
	if (!href || !href.match(/^\//g) || target && !target.match(/^_?self$/i)) {
		return;
	}

	// attempt to route, if no match simply cede control to browser
	return route(href);
}

function handleLinkClick(e) {
	if (e.button == 0) {
		routeFromLink(e.currentTarget || e.target || this);
		return prevent(e);
	}
}

function prevent(e) {
	if (e) {
		if (e.stopImmediatePropagation) {
			e.stopImmediatePropagation();
		}
		if (e.stopPropagation) {
			e.stopPropagation();
		}
		e.preventDefault();
	}
	return false;
}

function delegateLinkHandler(e) {
	// ignore events the browser takes care of already:
	if (e.ctrlKey || e.metaKey || e.altKey || e.shiftKey || e.button !== 0) {
		return;
	}

	var t = e.target;
	do {
		if (String(t.nodeName).toUpperCase() === 'A' && t.getAttribute('href') && isPreactElement(t)) {
			if (t.hasAttribute('native')) {
				return;
			}
			// if link is handled by the router, prevent browser defaults
			if (routeFromLink(t)) {
				return prevent(e);
			}
		}
	} while (t = t.parentNode);
}

var eventListenersInitialized = false;

function initEventListeners() {
	if (eventListenersInitialized) {
		return;
	}

	if (typeof addEventListener === 'function') {
		if (!customHistory) {
			addEventListener('popstate', function () {
				return routeTo(getCurrentUrl());
			});
		}
		addEventListener('click', delegateLinkHandler);
	}
	eventListenersInitialized = true;
}

var Router = function (Component$$1) {
	function Router(props) {
		Component$$1.call(this, props);
		if (props.history) {
			customHistory = props.history;
		}

		this.state = {
			url: props.url || getCurrentUrl()
		};

		initEventListeners();
	}

	if (Component$$1) Router.__proto__ = Component$$1;
	Router.prototype = Object.create(Component$$1 && Component$$1.prototype);
	Router.prototype.constructor = Router;

	Router.prototype.shouldComponentUpdate = function shouldComponentUpdate(props) {
		if (props.static !== true) {
			return true;
		}
		return props.url !== this.props.url || props.onChange !== this.props.onChange;
	};

	/** Check if the given URL can be matched against any children */
	Router.prototype.canRoute = function canRoute(url) {
		return this.getMatchingChildren(this.props.children, url, false).length > 0;
	};

	/** Re-render children with a new URL to match against. */
	Router.prototype.routeTo = function routeTo(url) {
		this._didRoute = false;
		this.setState({ url: url });

		// if we're in the middle of an update, don't synchronously re-route.
		if (this.updating) {
			return this.canRoute(url);
		}

		this.forceUpdate();
		return this._didRoute;
	};

	Router.prototype.componentWillMount = function componentWillMount() {
		ROUTERS.push(this);
		this.updating = true;
	};

	Router.prototype.componentDidMount = function componentDidMount() {
		var this$1 = this;

		if (customHistory) {
			this.unlisten = customHistory.listen(function (location) {
				this$1.routeTo("" + (location.pathname || '') + (location.search || ''));
			});
		}
		this.updating = false;
	};

	Router.prototype.componentWillUnmount = function componentWillUnmount() {
		if (typeof this.unlisten === 'function') {
			this.unlisten();
		}
		ROUTERS.splice(ROUTERS.indexOf(this), 1);
	};

	Router.prototype.componentWillUpdate = function componentWillUpdate() {
		this.updating = true;
	};

	Router.prototype.componentDidUpdate = function componentDidUpdate() {
		this.updating = false;
	};

	Router.prototype.getMatchingChildren = function getMatchingChildren(children, url, invoke) {
		return children.slice().sort(pathRankSort).map(function (vnode) {
			var attrs = vnode.attributes || {},
			    path = attrs.path,
			    matches = exec(url, path, attrs);
			if (matches) {
				if (invoke !== false) {
					var newProps = { url: url, matches: matches };
					assign(newProps, matches);
					return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["cloneElement"])(vnode, newProps);
				}
				return vnode;
			}
			return false;
		}).filter(Boolean);
	};

	Router.prototype.render = function render(ref, ref$1) {
		var children = ref.children;
		var onChange = ref.onChange;
		var url = ref$1.url;

		var active = this.getMatchingChildren(children, url, true);

		var current = active[0] || null;
		this._didRoute = !!current;

		var previous = this.previousUrl;
		if (url !== previous) {
			this.previousUrl = url;
			if (typeof onChange === 'function') {
				onChange({
					router: this,
					url: url,
					previous: previous,
					active: active,
					current: current
				});
			}
		}

		return current;
	};

	return Router;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);

var Link = function Link(props) {
	return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('a', assign({ onClick: handleLinkClick }, props));
};

var Route = function Route(props) {
	return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(props.component, props);
};

Router.subscribers = subscribers;
Router.getCurrentUrl = getCurrentUrl;
Router.route = route;
Router.Router = Router;
Router.Route = Route;
Router.Link = Link;

/* harmony default export */ __webpack_exports__["default"] = (Router);
//# sourceMappingURL=preact-router.es.js.map

/***/ }),

/***/ "zuIX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Button; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("EBst");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MaterialComponent__ = __webpack_require__("jM6C");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};




/**
 *  @prop dense = false
 *  @prop raised = false
 *  @prop compact = false
 *  @prop primary = false
 *  @prop accent = false
 *  @prop disabled = false
 *  @prop unelevated = false
 */

var Button = function (_MaterialComponent) {
  _inherits(Button, _MaterialComponent);

  function Button() {
    _classCallCheck(this, Button);

    var _this = _possibleConstructorReturn(this, _MaterialComponent.call(this));

    _this.componentName = "button";
    _this._mdcProps = ["dense", "raised", "compact", "primary", "accent", "unelevated", "stroked"];
    return _this;
  }

  Button.prototype.componentDidMount = function componentDidMount() {
    _MaterialComponent.prototype.attachRipple.call(this);
  };

  Button.prototype.materialDom = function materialDom(props) {
    var _this2 = this;

    var ButtonElement = props.href ? "a" : "button";

    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(ButtonElement, _extends({
      ref: function ref(control) {
        _this2.control = control;
      }
    }, props), this.props.children);
  };

  return Button;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);



/***/ })

/******/ });
//# sourceMappingURL=ssr-bundle.js.map