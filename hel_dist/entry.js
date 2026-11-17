(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('hel-lib-proxy')) :
	typeof define === 'function' && define.amd ? define(['exports', 'hel-lib-proxy'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["comps-react-antd"] = {}, global.helLibProxy));
})(this, (function (exports, helLibProxy) { 'use strict';

	/*
	|--------------------------------------------------------------------------
	|
	| 对应 package.json/name
	|
	|--------------------------------------------------------------------------
	*/
	var LIB_NAME = 'comps-react-antd';

	var lib = helLibProxy.exposeLib(LIB_NAME);
	var comps = lib;
	var TestExport = lib.TestExport;

	exports.TestExport = TestExport;
	exports.comps = comps;
	exports["default"] = lib;
	exports.lib = lib;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
