webpackHotUpdate(0,{

/***/ 9:
/***/ (function(module, exports) {

	'use strict';
	
	var textarea = document.querySelector('message__field-message');
	
	function autosize() {
	    var el = this;
	    setTimeout(function () {
	        el.style.cssText = 'height:auto; padding:0';
	        // for box-sizing other than "content-box" use:
	        // el.style.cssText = '-moz-box-sizing:content-box';
	        el.style.cssText = 'height:' + el.scrollHeight + 'px';
	    }, 0);
	}

/***/ })

})
//# sourceMappingURL=0.575dc9e2734b69c1133f.hot-update.js.map