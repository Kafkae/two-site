webpackHotUpdate(0,[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _svg4everybody = __webpack_require__(1);
	
	var _svg4everybody2 = _interopRequireDefault(_svg4everybody);
	
	var _jquery = __webpack_require__(2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	(0, _jquery2.default)(function () {
	    (0, _svg4everybody2.default)();
	});
	
	(0, _jquery2.default)('.search-button__btn-search').click(function () {
	    (0, _jquery2.default)('.search-button__search-form').animate({ right: 0 }, 50);
	    (0, _jquery2.default)('.search-button__search-popup').show();
	    (0, _jquery2.default)('.search-button__search-bg').click(function () {
	        (0, _jquery2.default)('.search-button__search-popup').hide();
	        (0, _jquery2.default)('.search-button__search-form').animate({ right: '-100%' }, 50);
	    });
	});
	
	(0, _jquery2.default)(document).ready(function () {
	    (0, _jquery2.default)(".burger").on("click", function () {
	        (0, _jquery2.default)(".burger__line").toggleClass("burger__line_active");
	        (0, _jquery2.default)(".header").toggleClass(".header_mobile");
	        (0, _jquery2.default)(".header__hg-group").toggleClass(".header__hg-group_mobile");
	        (0, _jquery2.default)(".main-menu").toggleClass(".main-menu_mobile");
	        (0, _jquery2.default)(".burger__line").toggleClass("burger__line_active");
	        (0, _jquery2.default)(".burger__line").toggleClass("burger__line_active");
	    });
	});

/***/ })
])
//# sourceMappingURL=0.c80852eaf4025ab7dad3.hot-update.js.map