webpackHotUpdate(0,{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _svg4everybody = __webpack_require__(1);
	
	var _svg4everybody2 = _interopRequireDefault(_svg4everybody);
	
	var _jquery = __webpack_require__(2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	__webpack_require__(5);
	
	__webpack_require__(6);
	
	__webpack_require__(7);
	
	__webpack_require__(9);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	(0, _jquery2.default)(function () {
	    (0, _svg4everybody2.default)();
	});

/***/ }),

/***/ 9:
/***/ (function(module, exports) {

	'use strict';
	
	var ta = document.querySelector('message__field-message');
	
	commentArea.addEventListener('keydown', autosize);
	
	function autosize() {
	    var el = this;
	    setTimeout(function () {
	        el.style.cssText = 'height:auto;';
	        el.style.cssText = 'height:' + el.scrollHeight + 'px';
	    }, 0);
	}

/***/ })

})
//# sourceMappingURL=0.586f6a8ea33ea2d3b186.hot-update.js.map