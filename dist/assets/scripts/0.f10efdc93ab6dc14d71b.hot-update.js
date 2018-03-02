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
	
	__webpack_require__(10);
	
	__webpack_require__(12);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	(0, _jquery2.default)(function () {
	    (0, _svg4everybody2.default)();
	});

/***/ }),

/***/ 12:
/***/ (function(module, exports) {

	'use strict';
	
	$(window).scroll(function () {
	    if ($(this).scrollTop() > 100) {
	        $('.arrow-scroll').fadeIn();
	    } else {
	        $('.arrow-scroll').fadeOut();
	    }
	});
	
	$('.arrow-scroll').on('click', function (e) {
	    e.preventDefault();
	    $('html, body').animate({ scrollTop: 0 }, 800);
	});

/***/ })

})
//# sourceMappingURL=0.f10efdc93ab6dc14d71b.hot-update.js.map