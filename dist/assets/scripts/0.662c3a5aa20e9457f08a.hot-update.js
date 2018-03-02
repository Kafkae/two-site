webpackHotUpdate(0,[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _svg4everybody = __webpack_require__(1);
	
	var _svg4everybody2 = _interopRequireDefault(_svg4everybody);
	
	var _jquery = __webpack_require__(2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _FontFaceObserver = __webpack_require__(5);
	
	var _FontFaceObserver2 = _interopRequireDefault(_FontFaceObserver);
	
	__webpack_require__(6);
	
	__webpack_require__(7);
	
	__webpack_require__(8);
	
	__webpack_require__(10);
	
	__webpack_require__(11);
	
	__webpack_require__(13);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	(0, _jquery2.default)(function () {
	    (0, _svg4everybody2.default)();
	});
	
	//fix font
	
	var output = new _FontFaceObserver2.default('Myriad Pro');
	var input = new _FontFaceObserver2.default('Raleway');
	
	output.load().then(function () {
	    console.log('Загружен Output Sans');
	});
	
	input.load().then(function () {
	    console.log('Загружен Input Mono');
	});

/***/ })
])
//# sourceMappingURL=0.662c3a5aa20e9457f08a.hot-update.js.map