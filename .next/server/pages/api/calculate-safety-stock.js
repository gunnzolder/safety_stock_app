"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/calculate-safety-stock";
exports.ids = ["pages/api/calculate-safety-stock"];
exports.modules = {

/***/ "../../../api-utils/node":
/*!*****************************************************!*\
  !*** external "next/dist/server/api-utils/node.js" ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = require("next/dist/server/api-utils/node.js");

/***/ }),

/***/ "../route-module":
/*!************************************************************************!*\
  !*** external "next/dist/server/future/route-modules/route-module.js" ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ "(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("/**\n * Hoists a name from a module or promised module.\n *\n * @param module the module to hoist the name from\n * @param name the name to hoist\n * @returns the value on the module (or promised module)\n */ \nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nObject.defineProperty(exports, \"hoist\", ({\n    enumerable: true,\n    get: function() {\n        return hoist;\n    }\n}));\nfunction hoist(module, name) {\n    // If the name is available in the module, return it.\n    if (name in module) {\n        return module[name];\n    }\n    // If a property called `then` exists, assume it's a promise and\n    // return a promise that resolves to the name.\n    if (\"then\" in module && typeof module.then === \"function\") {\n        return module.then((mod)=>hoist(mod, name));\n    }\n    // If we're trying to hoise the default export, and the module is a function,\n    // return the module itself.\n    if (typeof module === \"function\" && name === \"default\") {\n        return module;\n    }\n    // Otherwise, return undefined.\n    return undefined;\n}\n\n//# sourceMappingURL=helpers.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXJvdXRlLWxvYWRlci9oZWxwZXJzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQWlCO0FBQ2pCLDhDQUE2QztBQUM3QztBQUNBLENBQUMsRUFBQztBQUNGLHlDQUF3QztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBQztBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3NhZmV0eV9zdG9ja19jb21iaW5lZF9hcHAvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXJvdXRlLWxvYWRlci9oZWxwZXJzLmpzP2JkNzEiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBIb2lzdHMgYSBuYW1lIGZyb20gYSBtb2R1bGUgb3IgcHJvbWlzZWQgbW9kdWxlLlxuICpcbiAqIEBwYXJhbSBtb2R1bGUgdGhlIG1vZHVsZSB0byBob2lzdCB0aGUgbmFtZSBmcm9tXG4gKiBAcGFyYW0gbmFtZSB0aGUgbmFtZSB0byBob2lzdFxuICogQHJldHVybnMgdGhlIHZhbHVlIG9uIHRoZSBtb2R1bGUgKG9yIHByb21pc2VkIG1vZHVsZSlcbiAqLyBcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImhvaXN0XCIsIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBob2lzdDtcbiAgICB9XG59KTtcbmZ1bmN0aW9uIGhvaXN0KG1vZHVsZSwgbmFtZSkge1xuICAgIC8vIElmIHRoZSBuYW1lIGlzIGF2YWlsYWJsZSBpbiB0aGUgbW9kdWxlLCByZXR1cm4gaXQuXG4gICAgaWYgKG5hbWUgaW4gbW9kdWxlKSB7XG4gICAgICAgIHJldHVybiBtb2R1bGVbbmFtZV07XG4gICAgfVxuICAgIC8vIElmIGEgcHJvcGVydHkgY2FsbGVkIGB0aGVuYCBleGlzdHMsIGFzc3VtZSBpdCdzIGEgcHJvbWlzZSBhbmRcbiAgICAvLyByZXR1cm4gYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgdG8gdGhlIG5hbWUuXG4gICAgaWYgKFwidGhlblwiIGluIG1vZHVsZSAmJiB0eXBlb2YgbW9kdWxlLnRoZW4gPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gbW9kdWxlLnRoZW4oKG1vZCk9PmhvaXN0KG1vZCwgbmFtZSkpO1xuICAgIH1cbiAgICAvLyBJZiB3ZSdyZSB0cnlpbmcgdG8gaG9pc2UgdGhlIGRlZmF1bHQgZXhwb3J0LCBhbmQgdGhlIG1vZHVsZSBpcyBhIGZ1bmN0aW9uLFxuICAgIC8vIHJldHVybiB0aGUgbW9kdWxlIGl0c2VsZi5cbiAgICBpZiAodHlwZW9mIG1vZHVsZSA9PT0gXCJmdW5jdGlvblwiICYmIG5hbWUgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAgIHJldHVybiBtb2R1bGU7XG4gICAgfVxuICAgIC8vIE90aGVyd2lzZSwgcmV0dXJuIHVuZGVmaW5lZC5cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1oZWxwZXJzLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js\n");

/***/ }),

/***/ "(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fcalculate-safety-stock&preferredRegion=&absolutePagePath=.%2Fpages%2Fapi%2Fcalculate-safety-stock.js&middlewareConfigBase64=e30%3D!":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fcalculate-safety-stock&preferredRegion=&absolutePagePath=.%2Fpages%2Fapi%2Fcalculate-safety-stock.js&middlewareConfigBase64=e30%3D! ***!
  \**************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   routeModule: () => (/* binding */ routeModule)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_pages_api_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/pages-api/module */ \"(api)/./node_modules/next/dist/server/future/route-modules/pages-api/module.js\");\n/* harmony import */ var next_dist_server_future_route_modules_pages_api_module__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_pages_api_module__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(api)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/build/webpack/loaders/next-route-loader/helpers */ \"(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js\");\n/* harmony import */ var _pages_api_calculate_safety_stock_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/api/calculate-safety-stock.js */ \"(api)/./pages/api/calculate-safety-stock.js\");\n// @ts-ignore this need to be imported from next/dist to be external\n\n\n\nconst PagesAPIRouteModule = next_dist_server_future_route_modules_pages_api_module__WEBPACK_IMPORTED_MODULE_0__.PagesAPIRouteModule;\n// Import the userland code.\n// @ts-expect-error - replaced by webpack/turbopack loader\n\n// Re-export the handler (should be the default export).\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_api_calculate_safety_stock_js__WEBPACK_IMPORTED_MODULE_3__, \"default\"));\n// Re-export config.\nconst config = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_api_calculate_safety_stock_js__WEBPACK_IMPORTED_MODULE_3__, \"config\");\n// Create and export the route module that will be consumed.\nconst routeModule = new PagesAPIRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES_API,\n        page: \"/api/calculate-safety-stock\",\n        pathname: \"/api/calculate-safety-stock\",\n        // The following aren't used in production.\n        bundlePath: \"\",\n        filename: \"\"\n    },\n    userland: _pages_api_calculate_safety_stock_js__WEBPACK_IMPORTED_MODULE_3__\n});\n\n//# sourceMappingURL=pages-api.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXJvdXRlLWxvYWRlci9pbmRleC5qcz9raW5kPVBBR0VTX0FQSSZwYWdlPSUyRmFwaSUyRmNhbGN1bGF0ZS1zYWZldHktc3RvY2smcHJlZmVycmVkUmVnaW9uPSZhYnNvbHV0ZVBhZ2VQYXRoPS4lMkZwYWdlcyUyRmFwaSUyRmNhbGN1bGF0ZS1zYWZldHktc3RvY2suanMmbWlkZGxld2FyZUNvbmZpZ0Jhc2U2ND1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDaUY7QUFDbEI7QUFDbUI7QUFDbEYsNEJBQTRCLHVHQUEwQjtBQUN0RDtBQUNBO0FBQ2tFO0FBQ2xFO0FBQ0EsaUVBQWUsZ0dBQUssQ0FBQyxpRUFBUSxZQUFZLEVBQUM7QUFDMUM7QUFDTyxlQUFlLGdHQUFLLENBQUMsaUVBQVE7QUFDcEM7QUFDTztBQUNQO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLFlBQVk7QUFDWixDQUFDOztBQUVEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2FmZXR5X3N0b2NrX2NvbWJpbmVkX2FwcC8/ODUxNiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAdHMtaWdub3JlIHRoaXMgbmVlZCB0byBiZSBpbXBvcnRlZCBmcm9tIG5leHQvZGlzdCB0byBiZSBleHRlcm5hbFxuaW1wb3J0ICogYXMgbW9kdWxlIGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL3BhZ2VzLWFwaS9tb2R1bGVcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBob2lzdCB9IGZyb20gXCJuZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtcm91dGUtbG9hZGVyL2hlbHBlcnNcIjtcbmNvbnN0IFBhZ2VzQVBJUm91dGVNb2R1bGUgPSBtb2R1bGUuUGFnZXNBUElSb3V0ZU1vZHVsZTtcbi8vIEltcG9ydCB0aGUgdXNlcmxhbmQgY29kZS5cbi8vIEB0cy1leHBlY3QtZXJyb3IgLSByZXBsYWNlZCBieSB3ZWJwYWNrL3R1cmJvcGFjayBsb2FkZXJcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIuL3BhZ2VzL2FwaS9jYWxjdWxhdGUtc2FmZXR5LXN0b2NrLmpzXCI7XG4vLyBSZS1leHBvcnQgdGhlIGhhbmRsZXIgKHNob3VsZCBiZSB0aGUgZGVmYXVsdCBleHBvcnQpLlxuZXhwb3J0IGRlZmF1bHQgaG9pc3QodXNlcmxhbmQsIFwiZGVmYXVsdFwiKTtcbi8vIFJlLWV4cG9ydCBjb25maWcuXG5leHBvcnQgY29uc3QgY29uZmlnID0gaG9pc3QodXNlcmxhbmQsIFwiY29uZmlnXCIpO1xuLy8gQ3JlYXRlIGFuZCBleHBvcnQgdGhlIHJvdXRlIG1vZHVsZSB0aGF0IHdpbGwgYmUgY29uc3VtZWQuXG5leHBvcnQgY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgUGFnZXNBUElSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuUEFHRVNfQVBJLFxuICAgICAgICBwYWdlOiBcIi9hcGkvY2FsY3VsYXRlLXNhZmV0eS1zdG9ja1wiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2NhbGN1bGF0ZS1zYWZldHktc3RvY2tcIixcbiAgICAgICAgLy8gVGhlIGZvbGxvd2luZyBhcmVuJ3QgdXNlZCBpbiBwcm9kdWN0aW9uLlxuICAgICAgICBidW5kbGVQYXRoOiBcIlwiLFxuICAgICAgICBmaWxlbmFtZTogXCJcIlxuICAgIH0sXG4gICAgdXNlcmxhbmRcbn0pO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1wYWdlcy1hcGkuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fcalculate-safety-stock&preferredRegion=&absolutePagePath=.%2Fpages%2Fapi%2Fcalculate-safety-stock.js&middlewareConfigBase64=e30%3D!\n");

/***/ }),

/***/ "(api)/./pages/api/calculate-safety-stock.js":
/*!*********************************************!*\
  !*** ./pages/api/calculate-safety-stock.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    if (req.method !== \"POST\") {\n        return res.status(405).end();\n    }\n    const { daily_demand, supply_history } = req.body;\n    // Calculating daily deficits\n    const daily_deficits = supply_history.map((supply)=>daily_demand - supply);\n    // Calculating cumulative deficits\n    const cumulative_deficits = daily_deficits.map((val, idx, arr)=>{\n        return arr.slice(0, idx + 1).reduce((acc, curr)=>acc + curr, 0);\n    });\n    // Determining the maximum cumulative deficit for 100% service level\n    const max_cumulative_deficit = Math.max(...cumulative_deficits);\n    // Responding with the result\n    res.json({\n        safety_stock: max_cumulative_deficit,\n        date: new Date().toISOString()\n    });\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY2FsY3VsYXRlLXNhZmV0eS1zdG9jay5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQ0EsaUVBQWUsT0FBT0EsS0FBS0M7SUFDdkIsSUFBSUQsSUFBSUUsTUFBTSxLQUFLLFFBQVE7UUFDdkIsT0FBT0QsSUFBSUUsTUFBTSxDQUFDLEtBQUtDLEdBQUc7SUFDOUI7SUFFQSxNQUFNLEVBQUVDLFlBQVksRUFBRUMsY0FBYyxFQUFFLEdBQUdOLElBQUlPLElBQUk7SUFFakQsNkJBQTZCO0lBQzdCLE1BQU1DLGlCQUFpQkYsZUFBZUcsR0FBRyxDQUFDQyxDQUFBQSxTQUFVTCxlQUFlSztJQUVuRSxrQ0FBa0M7SUFDbEMsTUFBTUMsc0JBQXNCSCxlQUFlQyxHQUFHLENBQUMsQ0FBQ0csS0FBS0MsS0FBS0M7UUFDdEQsT0FBT0EsSUFBSUMsS0FBSyxDQUFDLEdBQUdGLE1BQU0sR0FBR0csTUFBTSxDQUFDLENBQUNDLEtBQUtDLE9BQVNELE1BQU1DLE1BQU07SUFDbkU7SUFFQSxvRUFBb0U7SUFDcEUsTUFBTUMseUJBQXlCQyxLQUFLQyxHQUFHLElBQUlWO0lBRTNDLDZCQUE2QjtJQUM3QlYsSUFBSXFCLElBQUksQ0FBQztRQUNMQyxjQUFjSjtRQUNkSyxNQUFNLElBQUlDLE9BQU9DLFdBQVc7SUFDaEM7QUFDSixHQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2FmZXR5X3N0b2NrX2NvbWJpbmVkX2FwcC8uL3BhZ2VzL2FwaS9jYWxjdWxhdGUtc2FmZXR5LXN0b2NrLmpzPzg5NjkiXSwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgICBpZiAocmVxLm1ldGhvZCAhPT0gJ1BPU1QnKSB7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNSkuZW5kKCk7XG4gICAgfVxuXG4gICAgY29uc3QgeyBkYWlseV9kZW1hbmQsIHN1cHBseV9oaXN0b3J5IH0gPSByZXEuYm9keTtcblxuICAgIC8vIENhbGN1bGF0aW5nIGRhaWx5IGRlZmljaXRzXG4gICAgY29uc3QgZGFpbHlfZGVmaWNpdHMgPSBzdXBwbHlfaGlzdG9yeS5tYXAoc3VwcGx5ID0+IGRhaWx5X2RlbWFuZCAtIHN1cHBseSk7XG4gICAgXG4gICAgLy8gQ2FsY3VsYXRpbmcgY3VtdWxhdGl2ZSBkZWZpY2l0c1xuICAgIGNvbnN0IGN1bXVsYXRpdmVfZGVmaWNpdHMgPSBkYWlseV9kZWZpY2l0cy5tYXAoKHZhbCwgaWR4LCBhcnIpID0+IHtcbiAgICAgICAgcmV0dXJuIGFyci5zbGljZSgwLCBpZHggKyAxKS5yZWR1Y2UoKGFjYywgY3VycikgPT4gYWNjICsgY3VyciwgMCk7XG4gICAgfSk7XG5cbiAgICAvLyBEZXRlcm1pbmluZyB0aGUgbWF4aW11bSBjdW11bGF0aXZlIGRlZmljaXQgZm9yIDEwMCUgc2VydmljZSBsZXZlbFxuICAgIGNvbnN0IG1heF9jdW11bGF0aXZlX2RlZmljaXQgPSBNYXRoLm1heCguLi5jdW11bGF0aXZlX2RlZmljaXRzKTtcblxuICAgIC8vIFJlc3BvbmRpbmcgd2l0aCB0aGUgcmVzdWx0XG4gICAgcmVzLmpzb24oe1xuICAgICAgICBzYWZldHlfc3RvY2s6IG1heF9jdW11bGF0aXZlX2RlZmljaXQsXG4gICAgICAgIGRhdGU6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKVxuICAgIH0pO1xufVxuIl0sIm5hbWVzIjpbInJlcSIsInJlcyIsIm1ldGhvZCIsInN0YXR1cyIsImVuZCIsImRhaWx5X2RlbWFuZCIsInN1cHBseV9oaXN0b3J5IiwiYm9keSIsImRhaWx5X2RlZmljaXRzIiwibWFwIiwic3VwcGx5IiwiY3VtdWxhdGl2ZV9kZWZpY2l0cyIsInZhbCIsImlkeCIsImFyciIsInNsaWNlIiwicmVkdWNlIiwiYWNjIiwiY3VyciIsIm1heF9jdW11bGF0aXZlX2RlZmljaXQiLCJNYXRoIiwibWF4IiwianNvbiIsInNhZmV0eV9zdG9jayIsImRhdGUiLCJEYXRlIiwidG9JU09TdHJpbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/calculate-safety-stock.js\n");

/***/ }),

/***/ "(api)/./node_modules/next/dist/server/future/route-kind.js":
/*!************************************************************!*\
  !*** ./node_modules/next/dist/server/future/route-kind.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nObject.defineProperty(exports, \"RouteKind\", ({\n    enumerable: true,\n    get: function() {\n        return RouteKind;\n    }\n}));\nvar RouteKind;\n(function(RouteKind) {\n    RouteKind[/**\n   * `PAGES` represents all the React pages that are under `pages/`.\n   */ \"PAGES\"] = \"PAGES\";\n    RouteKind[/**\n   * `PAGES_API` represents all the API routes under `pages/api/`.\n   */ \"PAGES_API\"] = \"PAGES_API\";\n    RouteKind[/**\n   * `APP_PAGE` represents all the React pages that are under `app/` with the\n   * filename of `page.{j,t}s{,x}`.\n   */ \"APP_PAGE\"] = \"APP_PAGE\";\n    RouteKind[/**\n   * `APP_ROUTE` represents all the API routes and metadata routes that are under `app/` with the\n   * filename of `route.{j,t}s{,x}`.\n   */ \"APP_ROUTE\"] = \"APP_ROUTE\";\n})(RouteKind || (RouteKind = {}));\n\n//# sourceMappingURL=route-kind.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZC5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiLDhDQUE2QztBQUM3QztBQUNBLENBQUMsRUFBQztBQUNGLDZDQUE0QztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBQztBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLElBQUksRUFBRSxHQUFHO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixJQUFJLEVBQUUsR0FBRztBQUNsQztBQUNBLENBQUMsOEJBQThCOztBQUUvQiIsInNvdXJjZXMiOlsid2VicGFjazovL3NhZmV0eV9zdG9ja19jb21iaW5lZF9hcHAvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZC5qcz80NjQwIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUm91dGVLaW5kXCIsIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBSb3V0ZUtpbmQ7XG4gICAgfVxufSk7XG52YXIgUm91dGVLaW5kO1xuKGZ1bmN0aW9uKFJvdXRlS2luZCkge1xuICAgIFJvdXRlS2luZFsvKipcbiAgICogYFBBR0VTYCByZXByZXNlbnRzIGFsbCB0aGUgUmVhY3QgcGFnZXMgdGhhdCBhcmUgdW5kZXIgYHBhZ2VzL2AuXG4gICAqLyBcIlBBR0VTXCJdID0gXCJQQUdFU1wiO1xuICAgIFJvdXRlS2luZFsvKipcbiAgICogYFBBR0VTX0FQSWAgcmVwcmVzZW50cyBhbGwgdGhlIEFQSSByb3V0ZXMgdW5kZXIgYHBhZ2VzL2FwaS9gLlxuICAgKi8gXCJQQUdFU19BUElcIl0gPSBcIlBBR0VTX0FQSVwiO1xuICAgIFJvdXRlS2luZFsvKipcbiAgICogYEFQUF9QQUdFYCByZXByZXNlbnRzIGFsbCB0aGUgUmVhY3QgcGFnZXMgdGhhdCBhcmUgdW5kZXIgYGFwcC9gIHdpdGggdGhlXG4gICAqIGZpbGVuYW1lIG9mIGBwYWdlLntqLHR9c3sseH1gLlxuICAgKi8gXCJBUFBfUEFHRVwiXSA9IFwiQVBQX1BBR0VcIjtcbiAgICBSb3V0ZUtpbmRbLyoqXG4gICAqIGBBUFBfUk9VVEVgIHJlcHJlc2VudHMgYWxsIHRoZSBBUEkgcm91dGVzIGFuZCBtZXRhZGF0YSByb3V0ZXMgdGhhdCBhcmUgdW5kZXIgYGFwcC9gIHdpdGggdGhlXG4gICAqIGZpbGVuYW1lIG9mIGByb3V0ZS57aix0fXN7LHh9YC5cbiAgICovIFwiQVBQX1JPVVRFXCJdID0gXCJBUFBfUk9VVEVcIjtcbn0pKFJvdXRlS2luZCB8fCAoUm91dGVLaW5kID0ge30pKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGUta2luZC5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./node_modules/next/dist/server/future/route-kind.js\n");

/***/ }),

/***/ "(api)/./node_modules/next/dist/server/future/route-modules/pages-api/module.js":
/*!********************************************************************************!*\
  !*** ./node_modules/next/dist/server/future/route-modules/pages-api/module.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\n0 && (0);\nfunction _export(target, all) {\n    for(var name in all)Object.defineProperty(target, name, {\n        enumerable: true,\n        get: all[name]\n    });\n}\n_export(exports, {\n    PagesAPIRouteModule: function() {\n        return PagesAPIRouteModule;\n    },\n    default: function() {\n        return _default;\n    }\n});\nconst _routemodule = __webpack_require__(/*! ../route-module */ \"../route-module\");\nconst _node = __webpack_require__(/*! ../../../api-utils/node */ \"../../../api-utils/node\");\nclass PagesAPIRouteModule extends _routemodule.RouteModule {\n    /**\n   *\n   * @param req the incoming server request\n   * @param res the outgoing server response\n   * @param context the context for the render\n   */ async render(req, res, context) {\n        await (0, _node.apiResolver)(req, res, context.query, this.userland, {\n            ...context.previewProps,\n            revalidate: context.revalidate,\n            trustHostHeader: context.trustHostHeader,\n            allowedRevalidateHeaderKeys: context.allowedRevalidateHeaderKeys,\n            hostname: context.hostname\n        }, context.minimalMode, context.dev, context.page);\n    }\n}\nconst _default = PagesAPIRouteModule;\n\n//# sourceMappingURL=module.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9wYWdlcy1hcGkvbW9kdWxlLmpzIiwibWFwcGluZ3MiOiJBQUFhO0FBQ2IsOENBQTZDO0FBQzdDO0FBQ0EsQ0FBQyxFQUFDO0FBQ0YsTUFBTSxDQUdMO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELHFCQUFxQixtQkFBTyxDQUFDLHdDQUFpQjtBQUM5QyxjQUFjLG1CQUFPLENBQUMsd0RBQXlCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3NhZmV0eV9zdG9ja19jb21iaW5lZF9hcHAvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9wYWdlcy1hcGkvbW9kdWxlLmpzPzBiZmEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG4wICYmIChtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBQYWdlc0FQSVJvdXRlTW9kdWxlOiBudWxsLFxuICAgIGRlZmF1bHQ6IG51bGxcbn0pO1xuZnVuY3Rpb24gX2V4cG9ydCh0YXJnZXQsIGFsbCkge1xuICAgIGZvcih2YXIgbmFtZSBpbiBhbGwpT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgbmFtZSwge1xuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBnZXQ6IGFsbFtuYW1lXVxuICAgIH0pO1xufVxuX2V4cG9ydChleHBvcnRzLCB7XG4gICAgUGFnZXNBUElSb3V0ZU1vZHVsZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBQYWdlc0FQSVJvdXRlTW9kdWxlO1xuICAgIH0sXG4gICAgZGVmYXVsdDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfZGVmYXVsdDtcbiAgICB9XG59KTtcbmNvbnN0IF9yb3V0ZW1vZHVsZSA9IHJlcXVpcmUoXCIuLi9yb3V0ZS1tb2R1bGVcIik7XG5jb25zdCBfbm9kZSA9IHJlcXVpcmUoXCIuLi8uLi8uLi9hcGktdXRpbHMvbm9kZVwiKTtcbmNsYXNzIFBhZ2VzQVBJUm91dGVNb2R1bGUgZXh0ZW5kcyBfcm91dGVtb2R1bGUuUm91dGVNb2R1bGUge1xuICAgIC8qKlxuICAgKlxuICAgKiBAcGFyYW0gcmVxIHRoZSBpbmNvbWluZyBzZXJ2ZXIgcmVxdWVzdFxuICAgKiBAcGFyYW0gcmVzIHRoZSBvdXRnb2luZyBzZXJ2ZXIgcmVzcG9uc2VcbiAgICogQHBhcmFtIGNvbnRleHQgdGhlIGNvbnRleHQgZm9yIHRoZSByZW5kZXJcbiAgICovIGFzeW5jIHJlbmRlcihyZXEsIHJlcywgY29udGV4dCkge1xuICAgICAgICBhd2FpdCAoMCwgX25vZGUuYXBpUmVzb2x2ZXIpKHJlcSwgcmVzLCBjb250ZXh0LnF1ZXJ5LCB0aGlzLnVzZXJsYW5kLCB7XG4gICAgICAgICAgICAuLi5jb250ZXh0LnByZXZpZXdQcm9wcyxcbiAgICAgICAgICAgIHJldmFsaWRhdGU6IGNvbnRleHQucmV2YWxpZGF0ZSxcbiAgICAgICAgICAgIHRydXN0SG9zdEhlYWRlcjogY29udGV4dC50cnVzdEhvc3RIZWFkZXIsXG4gICAgICAgICAgICBhbGxvd2VkUmV2YWxpZGF0ZUhlYWRlcktleXM6IGNvbnRleHQuYWxsb3dlZFJldmFsaWRhdGVIZWFkZXJLZXlzLFxuICAgICAgICAgICAgaG9zdG5hbWU6IGNvbnRleHQuaG9zdG5hbWVcbiAgICAgICAgfSwgY29udGV4dC5taW5pbWFsTW9kZSwgY29udGV4dC5kZXYsIGNvbnRleHQucGFnZSk7XG4gICAgfVxufVxuY29uc3QgX2RlZmF1bHQgPSBQYWdlc0FQSVJvdXRlTW9kdWxlO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1tb2R1bGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./node_modules/next/dist/server/future/route-modules/pages-api/module.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fcalculate-safety-stock&preferredRegion=&absolutePagePath=.%2Fpages%2Fapi%2Fcalculate-safety-stock.js&middlewareConfigBase64=e30%3D!"));
module.exports = __webpack_exports__;

})();