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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = ".";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/javascript/entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/css/app.scss":
/*!*****************************!*\
  !*** ./assets/css/app.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./assets/css/app.scss?");

/***/ }),

/***/ "./assets/javascript/elements.js":
/*!***************************************!*\
  !*** ./assets/javascript/elements.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst elements = [{\r\n    image: '../images/Sept1-3.jpg'\r\n},\r\n{\r\n    image: '../images/Sept1-2.jpg'\r\n},\r\n{\r\n    image: './images/Sept1-2017.jpg'\r\n},\r\n{\r\n    image: './images/March2018-2.jpg'\r\n},\r\n{\r\n    image: './images/May12.jpg'\r\n},\r\n{\r\n    image: './images/Sept0.jpg'\r\n},\r\n{\r\n    image: './images/Sept1.jpg'\r\n},\r\n{\r\n    image: './images/December2018.jpg'\r\n},\r\n{\r\n    image: './images/November2018.jpg'\r\n},\r\n{\r\n    image: './images/MonicaDecemberBookHaul.jpg'\r\n},\r\n{\r\n    image: './images/MildredDecemberBookHaul.jpg'\r\n}\r\n];\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (elements);\n\n//# sourceURL=webpack:///./assets/javascript/elements.js?");

/***/ }),

/***/ "./assets/javascript/entry.js":
/*!************************************!*\
  !*** ./assets/javascript/entry.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/app.scss */ \"./assets/css/app.scss\");\n/* harmony import */ var _css_app_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_app_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _slider_sliderDOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slider/sliderDOM */ \"./assets/javascript/slider/sliderDOM.js\");\n/* harmony import */ var _menu_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu/menu */ \"./assets/javascript/menu/menu.js\");\n/* harmony import */ var _menu_menu__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_menu_menu__WEBPACK_IMPORTED_MODULE_2__);\n\r\n\r\n\r\n\r\n\r\n\r\nif(navigator.serviceWorker)\r\n    navigator.serviceWorker.register('../sw.js');\r\n\r\n\n\n//# sourceURL=webpack:///./assets/javascript/entry.js?");

/***/ }),

/***/ "./assets/javascript/menu/menu.js":
/*!****************************************!*\
  !*** ./assets/javascript/menu/menu.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const menu = document.querySelector('.menu');\r\nconst close = document.querySelector('.close');\r\nlet links = document.querySelectorAll(\".menu-screen a\");\r\n\r\nfunction scrollToElement(element){\r\n    window.scrollTo({\r\n        'behavior': 'smooth',\r\n        'top': element.offsetTop\r\n    });\r\n}\r\n\r\ndocument.querySelector(\".menu\")\r\n    .addEventListener(\"click\", function(){\r\n        document.querySelector(\".menu-screen\").classList.add(\"active\");\r\n});\r\n\r\n\r\ndocument.querySelector(\".close\")\r\n    .addEventListener(\"click\", function(){\r\n        document.querySelector(\".menu-screen\").classList.remove(\"active\");\r\n});\r\n\r\n\r\nlinks.forEach(link => {\r\n    link.addEventListener('click',function(ev){\r\n        document.querySelector(\".menu-screen\").classList.remove(\"active\");\r\n\r\n        console.log(this.href);\r\n        let paths = this.href.split(\"/\"); \r\n\r\n        const selector = this.href.split(\"/\").pop();\r\n\r\n        if(window.scrollTo) ev.preventDefault()\r\n        \r\n        scrollToElement(document.querySelector(selector));\r\n\r\n        return !!window.scrollTo;\r\n    })\r\n})\n\n//# sourceURL=webpack:///./assets/javascript/menu/menu.js?");

/***/ }),

/***/ "./assets/javascript/preloader/preloader.js":
/*!**************************************************!*\
  !*** ./assets/javascript/preloader/preloader.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Preloader; });\nclass Preloader{\r\n    static preloadImage({images, completed}){\r\n        const promises = images.map(imagePath => Preloader.preloadImage({imagePath}) );\r\n\r\n        Promise.all(promises).then(completed);\r\n    }\r\n\r\n    static preloadImage({imagePath}){\r\n        return new Promise((res,rej)=>{\r\n            let image = new Image();\r\n            image.src = imagePath;\r\n            image.onload = res;   \r\n        })\r\n    }\r\n}\n\n//# sourceURL=webpack:///./assets/javascript/preloader/preloader.js?");

/***/ }),

/***/ "./assets/javascript/slider/slider.js":
/*!********************************************!*\
  !*** ./assets/javascript/slider/slider.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Slider; });\nclass Slider{\r\n    constructor({ elements, animationFunc, speed }){\r\n        this.elements = elements;\r\n        this.animationFunc = animationFunc;\r\n\r\n        this.index = 0;\r\n        this.size = elements.length;\r\n\r\n        this.speed = speed;\r\n\r\n        this.innerNext = this.innerNext.bind(this);\r\n        this.stop = this.stop.bind(this);\r\n\r\n        this.next = this.next.bind(this);\r\n        this.prev = this.prev.bind(this);\r\n    }\r\n\r\n    innerNext(){\r\n        this.index++;\r\n        if(this.index >= this.size) this.index = 0;\r\n\r\n        this.animationFunc(this.elements[this.index]);\r\n    }\r\n\r\n    innerPrev(){\r\n        this.index--;\r\n        if(this.index <0) this.index = this.size-1;\r\n\r\n        this.animationFunc(this.elements[this.index]);\r\n    }\r\n\r\n    next(){\r\n        this.innerNext();\r\n        if(this.interval){\r\n            this.stop();\r\n            this.play();\r\n        }\r\n    }\r\n\r\n    prev(){\r\n        this.innerPrev();\r\n        if(this.interval){\r\n            this.stop();\r\n            this.play();\r\n        }\r\n    }\r\n\r\n    play(){\r\n        this.interval = setInterval(this.innerNext, this.speed);\r\n    }\r\n\r\n    stop(){\r\n        clearInterval(this.interval);\r\n    }\r\n}\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./assets/javascript/slider/slider.js?");

/***/ }),

/***/ "./assets/javascript/slider/sliderDOM.js":
/*!***********************************************!*\
  !*** ./assets/javascript/slider/sliderDOM.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider */ \"./assets/javascript/slider/slider.js\");\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../elements */ \"./assets/javascript/elements.js\");\n/* harmony import */ var _preloader_preloader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../preloader/preloader */ \"./assets/javascript/preloader/preloader.js\");\n\r\n\r\n\r\n\r\n\r\nlet sliderImage = document.querySelector(\"#slider-image\");\r\nlet textContent = document.querySelector(\"#slider-text-content\");\r\n\r\nlet leftArrow = document.querySelector(\".left-arrow\");\r\nlet rightArrow = document.querySelector(\".right-arrow\");\r\n\r\nlet slider = new _slider__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\r\n    elements: _elements__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\r\n\r\n    animationFunc: function(element){\r\n\r\n        textContent.classList.add(\"hide\");\r\n        sliderImage.classList.add(\"hide\");\r\n\r\n        setTimeout(function(){\r\n            sliderImage.src = element.image;\r\n\r\n            textContent.classList.remove(\"hide\");\r\n            sliderImage.classList.remove(\"hide\");\r\n        },600)         \r\n    },\r\n    speed: 5000\r\n});\r\n\r\nslider.play();\r\n\r\n\r\nleftArrow.addEventListener('click', slider.prev);\r\nrightArrow.addEventListener('click', slider.next);\r\n\r\nconst imagePaths = _elements__WEBPACK_IMPORTED_MODULE_1__[\"default\"].map(el => el.image);\r\n\r\n_preloader_preloader__WEBPACK_IMPORTED_MODULE_2__[\"default\"].preloadImage({\r\n    images: imagePaths,\r\n    completed: function(){\r\n        document.querySelector(\".controls\").style.display = \"block\";\r\n    }\r\n})\n\n//# sourceURL=webpack:///./assets/javascript/slider/sliderDOM.js?");

/***/ })

/******/ });