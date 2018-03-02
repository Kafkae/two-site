webpackHotUpdate(0,{

/***/ 9:
/***/ (function(module, exports) {

	'use strict';
	
	var textarea = document.querySelector('.message__field-message');
	
	textarea.addEventListener('keydown', autosize);
	
	function autosize() {
	    var el = this;
	    setTimeout(function () {
	        el.style.cssText = 'height:auto; padding:0';
	        // el.style.cssText = 'height:' + el.scrollHeight + 'px';
	    }, 0);
	}

/***/ })

})
//# sourceMappingURL=0.c1e4b7135027c6d1206d.hot-update.js.map