module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(5)

var Component = __webpack_require__(3)(
  /* script */
  __webpack_require__(8),
  /* template */
  __webpack_require__(4),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ".hsy-tooltip{position:relative;font:10px Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif}.hsy-tooltip>.outlet,.hsy-tooltip>.tooltip{font-size:1.4em}.hsy-tooltip>.tooltip{display:none;position:absolute;background-color:rgba(0,0,0,.8);color:#fff;border-radius:5px;border:0;outline:none;padding:5px 8px;z-index:100}.hsy-tooltip .arrow{position:absolute;width:0;height:0;border-style:solid}", ""]);

// exports


/***/ }),
/* 2 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = options.computed || (options.computed = {})
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "hsy-tooltip"
  }, [_c('div', {
    staticClass: "outlet",
    on: {
      "mouseover": _vm.autoShowWithMode,
      "mouseleave": _vm.autoHideWithMode,
      "click": _vm.autoShowWithMode
    }
  }, [_vm._t("outlet")], 2), _vm._v(" "), _c('div', {
    staticClass: "tooltip",
    style: (_vm.tooltipStyle)
  }, [_c('div', {
    staticClass: "inner"
  }, [_vm._t("tooltip")], 2), _vm._v(" "), _c('div', {
    staticClass: "arrow",
    style: (_vm.arrowStyle)
  })])])
},staticRenderFns: []}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("af6cb05a", content, true);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!./../node_modules/.0.23.1@css-loader/index.js?minimize!./../node_modules/.10.3.0@vue-loader/lib/style-rewriter.js?id=data-v-c0cc4b72!./../node_modules/.10.3.0@vue-loader/lib/selector.js?type=styles&index=0!./Tooltip.vue", function() {
     var newContent = require("!!./../node_modules/.0.23.1@css-loader/index.js?minimize!./../node_modules/.10.3.0@vue-loader/lib/style-rewriter.js?id=data-v-c0cc4b72!./../node_modules/.10.3.0@vue-loader/lib/selector.js?type=styles&index=0!./Tooltip.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(7)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction) {
  isProduction = _isProduction

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = { css: css, media: media, sourceMap: sourceMap }
    if (!newStyles[id]) {
      part.id = parentId + ':0'
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      part.id = parentId + ':' + newStyles[id].parts.length
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')
  var hasSSR = styleElement != null

  // if in production mode and style is already provided by SSR,
  // simply do nothing.
  if (hasSSR && isProduction) {
    return noop
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = styleElement || createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (!hasSSR) {
    update(obj)
  }

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 7 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var EMPTY_FN = function EMPTY_FN() {};

exports.default = {
  name: 'Tooltip',

  data: function data() {
    return {
      arrowStyle: {},
      isShowing: false
    };
  },


  props: {
    // hover|click|manual
    mode: {
      type: String,
      default: 'hover'
    },
    value: {
      type: Boolean,
      default: true
    },
    // top|top-left|top-right
    // right|right-top|right-bottom
    // bottom|bottom-left|bottom-right
    // left|left-top|left-bottom
    placement: {
      type: String,
      default: 'top'
    },
    minWidth: {
      type: Number,
      default: 0
    },
    maxWidth: {
      type: Number,
      default: 0
    },
    nowrap: {
      type: Boolean,
      default: true
    },
    arrowWidth: {
      type: Number,
      default: 10
    },
    arrowHeight: {
      type: Number,
      default: 6
    },
    cbHide: {
      type: Function,
      default: EMPTY_FN
    }
  },
  computed: {
    tooltipStyle: function tooltipStyle() {
      var s = {};
      if (this.minWidth > 0) {
        s.minWidth = this.minWidth + 'px';
      }
      if (this.maxWidth > 0) {
        s.maxWidth = this.maxWidth + 'px';
      }
      if (this.nowrap) {
        s.whiteSpace = 'nowrap';
      }
      return s;
    },
    outletEl: function outletEl() {
      return this.$el.querySelector('.outlet');
    },
    outletInnerEl: function outletInnerEl() {
      return this.$el.querySelector('.outlet > *');
    },
    tooltipEl: function tooltipEl() {
      return this.$el.querySelector('.tooltip');
    }
  },
  watch: {
    value: function value(newVal) {
      if (newVal === true && this.mode === 'manual') {
        this.show();
      } else if (newVal === false && (this.mode === 'manual' || this.mode === 'click')) {
        this.hide();
      }
    }
  },
  methods: {
    updateArrowStyle: function updateArrowStyle() {
      var s = {};
      var tooltipRect = this.rect(this.tooltipEl);

      // top|bottom
      if (this.placement.indexOf('top') === 0 || this.placement.indexOf('bottom') === 0) {
        if (this.placement.indexOf('top') === 0) {
          s.borderTopColor = 'rgba(0, 0, 0, 0.8)';
          s.borderLeftColor = 'transparent';
          s.borderRightColor = 'transparent';
          s.borderBottomColor = 'transparent';
          s.borderLeftWidth = this.arrowWidth / 2;
          s.borderRightWidth = s.borderLeftWidth + 'px';
          s.borderLeftWidth += 'px';
          s.borderTopWidth = this.arrowHeight + 'px';
          s.borderBottomWidth = '0px';
          s.bottom = -this.arrowHeight + 'px';
        } else {
          s.borderTopColor = 'transparent';
          s.borderLeftColor = 'transparent';
          s.borderRightColor = 'transparent';
          s.borderBottomColor = 'rgba(0, 0, 0, 0.8)';
          s.borderLeftWidth = this.arrowWidth / 2;
          s.borderRightWidth = s.borderLeftWidth + 'px';
          s.borderLeftWidth += 'px';
          s.borderTopWidth = '0px';
          s.borderBottomWidth = this.arrowHeight + 'px';
          s.top = -this.arrowHeight + 'px';
        }
        if (this.placement.indexOf('left') !== -1) {
          s.left = this.arrowWidth + 'px';
        } else if (this.placement.indexOf('right') !== -1) {
          s.right = this.arrowWidth + 'px';
        } else {
          s.left = (tooltipRect.width - this.arrowWidth) / 2 + 'px';
        }
        this.arrowStyle = s;
        return;
      }

      // left
      if (this.placement.indexOf('left') === 0 || this.placement.indexOf('right') === 0) {
        if (this.placement.indexOf('left') === 0) {
          s.borderTopColor = 'transparent';
          s.borderLeftColor = 'rgba(0, 0, 0, 0.8)';
          s.borderRightColor = 'transparent';
          s.borderBottomColor = 'transparent';
          s.borderLeftWidth = this.arrowHeight + 'px';
          s.borderRightWidth = '0px';
          s.borderTopWidth = this.arrowWidth / 2;
          s.borderBottomWidth = s.borderTopWidth + 'px';
          s.borderTopWidth += 'px';
          s.right = -this.arrowHeight + 'px';
        } else {
          s.borderTopColor = 'transparent';
          s.borderLeftColor = 'transparent';
          s.borderRightColor = 'rgba(0, 0, 0, 0.8)';
          s.borderBottomColor = 'transparent';
          s.borderLeftWidth = '0px';
          s.borderRightWidth = this.arrowHeight + 'px';
          s.borderTopWidth = this.arrowWidth / 2;
          s.borderBottomWidth = s.borderTopWidth + 'px';
          s.borderTopWidth += 'px';
          s.left = -this.arrowHeight + 'px';
        }
        if (this.placement.indexOf('top') !== -1 && tooltipRect.height > 30) {
          s.top = this.arrowWidth + 'px';
        } else if (this.placement.indexOf('bottom') !== -1 && tooltipRect.height > 30) {
          s.bottom = this.arrowWidth + 'px';
        } else {
          s.top = (tooltipRect.height - this.arrowWidth) / 2 + 'px';
        }
        this.arrowStyle = s;
        return;
      }
    },
    place: function place() {
      var containerRect = this.$el.getBoundingClientRect();
      var outletInnerRect = this.outletInnerEl.getBoundingClientRect();
      var tooltipRect = this.rect(this.tooltipEl);

      // top|bottom
      if (this.placement.indexOf('top') === 0 || this.placement.indexOf('bottom') === 0) {
        var top = void 0;
        var left = void 0;
        if (this.placement.indexOf('top') === 0) {
          top = outletInnerRect.top - containerRect.top - tooltipRect.height - this.arrowHeight - 5 + 'px';
        } else {
          top = outletInnerRect.bottom - containerRect.top + this.arrowHeight + 5 + 'px';
        }
        if (this.placement.indexOf('left') !== -1) {
          left = outletInnerRect.left - containerRect.left + 'px';
        } else if (this.placement.indexOf('right') !== -1) {
          left = outletInnerRect.right - containerRect.left - tooltipRect.width + 'px';
        } else {
          left = outletInnerRect.left - containerRect.left + (outletInnerRect.width - tooltipRect.width) / 2 + 'px';
        }
        this.tooltipEl.style.top = top;
        this.tooltipEl.style.left = left;
        return;
      }

      // left
      if (this.placement.indexOf('left') === 0 || this.placement.indexOf('right') === 0) {
        var _top = void 0;
        var _left = void 0;
        if (this.placement.indexOf('left') === 0) {
          _left = outletInnerRect.left - containerRect.left - tooltipRect.width - this.arrowHeight - 5 + 'px';
        } else {
          _left = outletInnerRect.right - containerRect.left + this.arrowHeight + 5 + 'px';
        }
        if (this.placement.indexOf('top') !== -1) {
          _top = outletInnerRect.top - containerRect.top + 'px';
        } else if (this.placement.indexOf('bottom') !== -1) {
          _top = outletInnerRect.bottom - containerRect.top - tooltipRect.height + 'px';
        } else {
          _top = outletInnerRect.top - containerRect.top + (outletInnerRect.width - tooltipRect.width) / 2 + 'px';
        }
        this.tooltipEl.style.top = _top;
        this.tooltipEl.style.left = _left;
        return;
      }
    },
    rect: function rect(el) {
      var rect = el.getBoundingClientRect();
      if (rect.width !== 0 || rect.height !== 0) {
        return rect;
      }

      var style = window.getComputedStyle(el);
      var display = style.getPropertyValue('display');
      var top = style.getPropertyValue('top');
      var left = style.getPropertyValue('left');

      el.style.top = '-1000px';
      el.style.left = '-1000px';
      el.style.display = 'block';
      rect = el.getBoundingClientRect();

      el.style.display = display;
      el.style.top = top;
      el.style.left = left;

      return rect;
    },
    show: function show() {
      if (this.isShowing) return;
      this.isShowing = true;
      this.tooltipEl.style.display = 'block';
      this.updateArrowStyle();
      this.place();
    },
    hide: function hide() {
      if (!this.isShowing) return;
      this.tooltipEl.style.display = 'none';
      this.cbHide !== EMPTY_FN && this.cbHide();
      this.isShowing = false;
    },
    autoShowWithMode: function autoShowWithMode(evt) {
      if (this.mode === 'hover') {
        if (evt.type === 'mouseover') {
          this.show();
          this.$emit('input', true);
        }
        return;
      }

      if (this.mode === 'click' && evt.type === 'click') {
        if (this.isShowing) {
          this.hide();
          this.$emit('input', false);
        } else {
          this.show();
          this.$emit('input', true);
        }
      }
    },
    autoHideWithMode: function autoHideWithMode(evt) {
      if (this.mode === 'hover' && evt.type === 'mouseleave') {
        this.hide();
        this.$emit('input', false);
      } else if (this.mode === 'click' && evt.type === 'click' && !this.$el.contains(evt.target)) {
        this.hide();
        this.$emit('input', false);
      }
    }
  },
  mounted: function mounted() {
    if (this.mode === 'manual' && this.value) {
      this.show();
    }
    document.addEventListener('click', this.autoHideWithMode, false);
  },
  destroyed: function destroyed() {
    document.removeEventListener('click', this.autoHideWithMode, false);
  }
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Tooltip = __webpack_require__(0);

var _Tooltip2 = _interopRequireDefault(_Tooltip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var install = function install(Vue) {
  Vue.component(_Tooltip2.default.name, _Tooltip2.default);
};

exports.default = {
  version: '0.0.1',
  install: install
};

/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map