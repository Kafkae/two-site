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
	    (0, _jquery2.default)('.search-button__search-form').animate({ right: 0 }, 50).focus();
	    (0, _jquery2.default)('.search-button__search-popup').show().focus();
	    (0, _jquery2.default)('.search-button__search-bg').click(function () {
	        (0, _jquery2.default)('.search-button__search-popup').hide();
	        (0, _jquery2.default)('.search-button__search-form').animate({ right: '-100%' }, 50);
	    });
	});

/***/ })
])
//# sourceMappingURL=0.cdcd7bdd2aea143580cb.hot-update.js.map