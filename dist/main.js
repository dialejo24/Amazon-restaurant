/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Inter-VariableFont_slnt,wght.ttf */ \"./src/fonts/Inter-VariableFont_slnt,wght.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\r\n    --soft-orange: hsl(35, 77%, 62%);\r\n    --soft-red: hsl(5, 85%, 63%);\r\n    --very-dark-blue: hsl(240, 100%, 5%);\r\n    --off-white:  hsl(36, 100%, 99%);\r\n    --grayish-blue: hsl(233, 8%, 79%);\r\n    --dark-grayish-blue: hsl(236, 13%, 42%);\r\n}\r\n\r\n@font-face {\r\n    font-family: 'Inter';\r\n    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\r\n    font-style: normal;\r\n}\r\n\r\n*,\r\n*::after,\r\n*::before {\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nbody {\r\n   font-family: 'Inter';\r\n   font-weight: normal;\r\n   overflow-x: hidden;\r\n}\r\n\r\nimg {\r\n    max-width: 100%;\r\n}\r\n\r\nheader {\r\n    width: 100vw;\r\n    background-color: var(--soft-orange);\r\n}\r\n\r\nh1 {\r\n    color: var(--soft-orange);\r\n    font-size: clamp(2.5rem, 2rem + 1.5vw, 5rem);\r\n    text-align: center;  \r\n    margin-block: .8em .4em;  \r\n}\r\n\r\nul {\r\n    list-style-type: none;\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n\r\na {\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    padding: 1em;\r\n    position: relative;\r\n    color: var(--very-dark-blue);\r\n    font-weight: bold;\r\n}\r\n\r\na::before {\r\n    content:\"\";\r\n    position: absolute;\r\n    bottom: 0;\r\n    left:0;\r\n    width: 0;\r\n    height: 2px;\r\n    background-color: black;\r\n    transition: width .2s ease;\r\n}\r\n\r\na:hover::before {\r\n    width: 100%;\r\n}\r\n\r\n\r\n/* Home page style */\r\n.containerWidth {\r\n    max-width: 1000px;\r\n    margin-inline: auto;\r\n    width: 90%;\r\n    display: grid;\r\n}\r\n\r\n.homeImage {\r\n    align-self: center;\r\n    display: block;\r\n    margin-top: 2em;\r\n    width: min(100%, 600px);\r\n    margin-inline: auto;\r\n}\r\n\r\n.restaurant_description {\r\n    line-height: 1.5;\r\n    width: 90%;\r\n    margin-inline: auto;\r\n    text-align:justify;\r\n}\r\n\r\n.wrapper {\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\r\n    margin-block: 1em 2em;\r\n}\r\n\r\n.wrapper > div {\r\n    padding: 1em;\r\n    text-align: center;\r\n}\r\n\r\n.wrapper > div:first-child {\r\n    background-color: var(--dark-grayish-blue);\r\n}\r\n.wrapper > div:last-child {\r\n    background-color: var(--soft-orange);\r\n}\r\n\r\n.menuTitle {\r\n    font-size: 1.4rem;\r\n}\r\n\r\n.plate {\r\n    font-size: 1.2rem;\r\n    font-weight: bold;\r\n    margin-block: .3em .2em;\r\n    font-style: italic;\r\n    text-decoration: underline;\r\n}\r\n\r\n.wrapper div:first-child .plate {\r\n    color: var(--soft-orange);\r\n    \r\n}\r\n\r\n.wrapper div:last-child .plate {\r\n    color: var(--dark-grayish-blue);\r\n}\r\n\r\n.platePrice {\r\n    font-size: 1.7rem;\r\n    font-weight: bold;\r\n}\r\n\r\n@media (min-width: 940px) {\r\n    .containerWidth {\r\n        gap: 2em;\r\n        grid-template-columns: 1fr 1fr;\r\n    }\r\n    .homeImage {\r\n        order: 2;\r\n        margin-top: 0;\r\n    }\r\n}\r\n/* ---------- */\r\n\r\n/* Menu page style */\r\n.menu {\r\n    font-size: 3rem;\r\n    text-align: center;\r\n    color: var(--soft-orange);\r\n    font-weight: bold;\r\n    text-transform: uppercase;\r\n    margin-block: .8em;\r\n}\r\n\r\n.dishes {\r\n    max-width: 900px;\r\n    margin-inline: auto;\r\n    display: grid;\r\n    grid-template-columns: min(100%, 400px); \r\n    justify-content: center;\r\n    gap: 2.5em;\r\n}\r\n\r\n.dishes > div {\r\n    text-align: center;\r\n    background-color: var(--soft-orange);\r\n    padding: 1.5em .5em;\r\n    border-radius: 20px;\r\n}\r\n\r\n.dishes > div > h3 {\r\n    font-size: 1.5rem;\r\n}\r\n\r\n.dishes > div > p {\r\n    font-size: 1.3rem;\r\n    font-weight: bold;\r\n}\r\n\r\n.dishes > div:last-child {\r\n    margin-bottom: 2em;\r\n}\r\n\r\n.dishImg {\r\n    width: min(100%, 250px);\r\n    display: block;\r\n    margin-inline: auto;\r\n    margin-block: 1em .7em;\r\n}\r\n/* ---------------- */\r\n\r\n/* Contact page style */\r\n.contactDiv {\r\n    margin-inline: auto;\r\n    width: min(95%, 500px);\r\n    text-align: center;\r\n    margin-top: 3em;\r\n    background-color: var(--soft-orange);\r\n    padding: 1em .5em;\r\n}\r\n.contactDiv > h2 {\r\n    font-size: 2.5rem;\r\n    margin-bottom: .7em;\r\n}\r\n.contactType {\r\n    font-weight: bold;\r\n    font-size: 1.5rem;\r\n}\r\n\r\n.contactType:nth-child(4) {\r\n    margin-top: 1em;\r\n}\r\n/* --------------- */\r\n\r\n.selectedLink {\r\n    background-color: black;\r\n    color: var(--soft-orange);\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restauranteproject/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restauranteproject/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://restauranteproject/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restauranteproject/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restauranteproject/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restauranteproject/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restauranteproject/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restauranteproject/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restauranteproject/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restauranteproject/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restauranteproject/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getContactDiv: () => (/* binding */ getContactDiv)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n\r\n\r\n\r\nlet contactDiv = (0,_home__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"div\", \"\", \"contactDiv\");\r\nlet contactTitle = (0,_home__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"h2\", \"Contact us\");\r\nlet telephone = (0,_home__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"p\", \"Telephone:\", \"contactType\");\r\nlet telephoneNumber = (0,_home__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"p\", \"+57 3134534678\");\r\nlet email = (0,_home__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"p\", \"Email:\", \"contactType\");\r\nlet emailAdress = (0,_home__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"p\", \"amazonrestaurant@gmail.com\");\r\ncontactDiv.appendChild(contactTitle);\r\ncontactDiv.appendChild(telephone);\r\ncontactDiv.appendChild(telephoneNumber);\r\ncontactDiv.appendChild(email);\r\ncontactDiv.appendChild(emailAdress);\r\n\r\nfunction getContactDiv() {\r\n    return contactDiv;\r\n}\n\n//# sourceURL=webpack://restauranteproject/./src/contact.js?");

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getHeader: () => (/* binding */ getHeader)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\r\n\r\n\r\nlet header = document.createElement(\"header\");\r\nlet nav = document.createElement(\"nav\");\r\nlet ul = document.createElement(\"ul\");\r\n\r\nul.appendChild(createListItem(\"Home\", \"home\"));\r\nul.appendChild(createListItem(\"Menu\", \"menu\"));\r\nul.appendChild(createListItem(\"Contact\", \"contact\"));\r\n\r\nnav.appendChild(ul);\r\nheader.appendChild(nav);\r\n\r\nfunction getHeader() {\r\n    return header;\r\n}\r\n\r\nfunction createListItem(text, id) {\r\n    let li = document.createElement(\"li\");\r\n    let link = document.createElement(\"a\");\r\n    link.textContent = text;\r\n    link.setAttribute(\"href\", \"#\");\r\n    link.setAttribute(\"id\", id);\r\n    li.appendChild(link);\r\n    return li;\r\n}\n\n//# sourceURL=webpack://restauranteproject/./src/header.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createElement: () => (/* binding */ createElement),\n/* harmony export */   getHomeDiv: () => (/* binding */ getHomeDiv)\n/* harmony export */ });\n/* harmony import */ var _images_food_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/food.jpg */ \"./src/images/food.jpg\");\n\r\n\r\n\r\nlet homeDiv = document.createElement(\"div\");\r\n\r\nlet foodImage = new Image();\r\nfoodImage.src = _images_food_jpg__WEBPACK_IMPORTED_MODULE_0__;\r\nfoodImage.className = \"homeImage\";\r\nhomeDiv.appendChild(foodImage);\r\nhomeDiv.classList.add(\"containerWidth\");\r\n\r\nlet mainContent = createElement(\"div\");\r\nlet title = createElement(\"h1\", \"Amazon's Restaurant\");\r\nmainContent.appendChild(title);\r\n\r\nlet restaurantDescription = document.createElement(\"p\");\r\nrestaurantDescription.textContent = `\r\n    Amazon's Restaurant is the perfect place to have a fantastic and delicious amazonian dish.\r\n    Come and enjoy our variety in amazonian food. The atmosphere here will make you feel like\r\n    you are in the middle of the jungle surrounded by a peaceful and relaxing nature.\r\n`;\r\nrestaurantDescription.classList.add(\"restaurant_description\");\r\nmainContent.appendChild(restaurantDescription);\r\n\r\nlet wrapper = createElement(\"div\");\r\nwrapper.classList.add(\"wrapper\");\r\n\r\nlet dailyMenu = createElement(\"div\");\r\nlet menuTitle = createElement(\"h3\", \"Daily Menu\", \"menuTitle\");\r\nlet availableDays = createElement(\"p\", \"From monday to friday\");\r\nlet menuDescription = createElement(\"p\", \"main course + 1 beverage + 1 dessert\", \"plate\");\r\nlet menuPrice = createElement(\"p\", \"$15\", \"platePrice\");\r\ndailyMenu.appendChild(menuTitle);\r\ndailyMenu.appendChild(availableDays);\r\ndailyMenu.appendChild(menuDescription);\r\ndailyMenu.appendChild(menuPrice);\r\n\r\nlet specialDish = createElement(\"div\");\r\nlet dishTitle = createElement(\"h3\", \"Special menu\", \"menuTitle\");\r\nlet dishAvailability = createElement(\"p\", \"Saturday\");\r\nlet dishDescription = createElement(\"p\",\"Exotic amazonian dish\", \"plate\");\r\nlet dishPrice = createElement(\"p\", \"$25\", \"platePrice\");\r\nspecialDish.appendChild(dishTitle);\r\nspecialDish.appendChild(dishAvailability);\r\nspecialDish.appendChild(dishDescription);\r\nspecialDish.appendChild(dishPrice);\r\n\r\nwrapper.appendChild(dailyMenu);\r\nwrapper.appendChild(specialDish);\r\nmainContent.appendChild(wrapper);\r\n\r\nhomeDiv.appendChild(mainContent);\r\n\r\nfunction getHomeDiv() {\r\n    return homeDiv;\r\n}\r\n\r\nfunction createElement(type, text = \"\", classes = \"\") {\r\n    let element = document.createElement(type);\r\n    if (classes) {\r\n        element.className = classes;\r\n    }\r\n    if (text) {\r\n        element.textContent = text;\r\n    }\r\n    return element;\r\n}\r\n\n\n//# sourceURL=webpack://restauranteproject/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ \"./src/header.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\r\n\r\n\r\n\r\n\r\nlet content = document.getElementById(\"content\");\r\nlet currentPage = \"home\";\r\ncontent.appendChild((0,_header__WEBPACK_IMPORTED_MODULE_0__.getHeader)());\r\nsetCurrentPage(currentPage);\r\naddEventlistenerToNavLinks();\r\nlet currentLink = content.firstElementChild.firstElementChild.firstElementChild.firstElementChild.firstElementChild;\r\ncurrentLink.classList.add(\"selectedLink\");\r\n\r\nfunction addEventlistenerToNavLinks() {\r\n    let links = content.firstElementChild.firstElementChild.firstElementChild.children;\r\n    for (let i = 0; i < links.length; i++) {\r\n        links[i].addEventListener(\"click\", e => {\r\n            let pageId = e.target.attributes[1].nodeValue;\r\n            if (pageId != currentPage) {\r\n                currentLink.classList.remove(\"selectedLink\");\r\n                setCurrentPage(pageId);\r\n                currentLink = e.target;\r\n                currentLink.classList.add(\"selectedLink\");\r\n            }\r\n        })\r\n    }\r\n}\r\n\r\nfunction setCurrentPage(pageId) {\r\n    currentPage = pageId;\r\n\r\n    if (content.children.length > 1) {\r\n        content.removeChild(content.lastElementChild);\r\n    }\r\n\r\n    if (pageId == 'home') {\r\n        content.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_1__.getHomeDiv)());\r\n\r\n    } else if (pageId == 'menu') {\r\n        content.appendChild((0,_menu__WEBPACK_IMPORTED_MODULE_2__.getMenuDiv)());\r\n\r\n    } else {\r\n        content.appendChild((0,_contact__WEBPACK_IMPORTED_MODULE_3__.getContactDiv)());\r\n    }\r\n}\n\n//# sourceURL=webpack://restauranteproject/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getMenuDiv: () => (/* binding */ getMenuDiv)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _images_bagre_salsa_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/bagre-salsa.jpg */ \"./src/images/bagre-salsa.jpg\");\n/* harmony import */ var _images_ceviche_pescado_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/ceviche-pescado.jpg */ \"./src/images/ceviche-pescado.jpg\");\n/* harmony import */ var _images_chicharron_pirarucu_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/chicharron-pirarucu.jpg */ \"./src/images/chicharron-pirarucu.jpg\");\n/* harmony import */ var _images_mojojoy_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/mojojoy.jpg */ \"./src/images/mojojoy.jpg\");\n/* harmony import */ var _images_patarashca_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/patarashca.jpg */ \"./src/images/patarashca.jpg\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nlet menuDiv = (0,_home__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"div\");\r\n\r\nlet pageMainTitle = (0,_home__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"h2\", \"Menu\", \"menu\");\r\nmenuDiv.appendChild(pageMainTitle);\r\n\r\nlet dishes = (0,_home__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"div\", \"\", \"dishes\");\r\n\r\ncreateMenu();\r\nmenuDiv.appendChild(dishes);\r\n\r\nfunction getMenuDiv() {\r\n    return menuDiv;\r\n}\r\n\r\nfunction createMenu() {\r\n    let dishesInformation = [\r\n        {\r\n            imagesUrls: [_images_bagre_salsa_jpg__WEBPACK_IMPORTED_MODULE_1__, _images_ceviche_pescado_jpg__WEBPACK_IMPORTED_MODULE_2__, _images_chicharron_pirarucu_jpg__WEBPACK_IMPORTED_MODULE_3__, _images_mojojoy_jpg__WEBPACK_IMPORTED_MODULE_4__, _images_patarashca_jpg__WEBPACK_IMPORTED_MODULE_5__],\r\n            names: [\"Bagre en salsa\", \"Ceviche de pescado\", \"Chicharron de pirarucu\", \"Mojojoy\", \"Patarashca\"],\r\n            prices: [\"$20\", \"$25\", \"$25\", \"$20\", \"$20\"],\r\n        }\r\n    ];\r\n\r\n    for (let i = 0; i < 5; i++) {\r\n        dishes.appendChild(createDish(dishesInformation[0].names[i], dishesInformation[0].imagesUrls[i], dishesInformation[0].prices[i]));\r\n\r\n    }\r\n}    \r\n\r\nfunction createDish(title,url, price) {\r\n    let div = (0,_home__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"div\");\r\n    let dishTitle = (0,_home__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"h3\", title);\r\n    let dishPrice = (0,_home__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"p\", `${price}`);\r\n    let dishImg = new Image();\r\n    dishImg.src = url;\r\n    dishImg.className = \"dishImg\";\r\n    div.appendChild(dishTitle);\r\n    div.appendChild(dishImg);\r\n    div.appendChild(dishPrice);\r\n\r\n    return div;\r\n}\n\n//# sourceURL=webpack://restauranteproject/./src/menu.js?");

/***/ }),

/***/ "./src/fonts/Inter-VariableFont_slnt,wght.ttf":
/*!****************************************************!*\
  !*** ./src/fonts/Inter-VariableFont_slnt,wght.ttf ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"aadb65ac45347ff46699.ttf\";\n\n//# sourceURL=webpack://restauranteproject/./src/fonts/Inter-VariableFont_slnt,wght.ttf?");

/***/ }),

/***/ "./src/images/bagre-salsa.jpg":
/*!************************************!*\
  !*** ./src/images/bagre-salsa.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ae7466c9baf6a013b440.jpg\";\n\n//# sourceURL=webpack://restauranteproject/./src/images/bagre-salsa.jpg?");

/***/ }),

/***/ "./src/images/ceviche-pescado.jpg":
/*!****************************************!*\
  !*** ./src/images/ceviche-pescado.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6e003de4e807d0bfc08f.jpg\";\n\n//# sourceURL=webpack://restauranteproject/./src/images/ceviche-pescado.jpg?");

/***/ }),

/***/ "./src/images/chicharron-pirarucu.jpg":
/*!********************************************!*\
  !*** ./src/images/chicharron-pirarucu.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"087ae3dc95b9f9742ebe.jpg\";\n\n//# sourceURL=webpack://restauranteproject/./src/images/chicharron-pirarucu.jpg?");

/***/ }),

/***/ "./src/images/food.jpg":
/*!*****************************!*\
  !*** ./src/images/food.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"770d472b7e753368f628.jpg\";\n\n//# sourceURL=webpack://restauranteproject/./src/images/food.jpg?");

/***/ }),

/***/ "./src/images/mojojoy.jpg":
/*!********************************!*\
  !*** ./src/images/mojojoy.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0af3c87e77993f4592f0.jpg\";\n\n//# sourceURL=webpack://restauranteproject/./src/images/mojojoy.jpg?");

/***/ }),

/***/ "./src/images/patarashca.jpg":
/*!***********************************!*\
  !*** ./src/images/patarashca.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"cae9fcc93d141a2548c9.jpg\";\n\n//# sourceURL=webpack://restauranteproject/./src/images/patarashca.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;