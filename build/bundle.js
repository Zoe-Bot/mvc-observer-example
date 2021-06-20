/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Controller.ts":
/*!***************************!*\
  !*** ./src/Controller.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


exports.__esModule = true;
exports.Controller = void 0;
var Model_1 = __webpack_require__(/*! ./Model */ "./src/Model.ts");
var View_1 = __webpack_require__(/*! ./View */ "./src/View.ts");
var Controller = (function () {
    function Controller() {
        this.model = new Model_1.Model();
        this.view = new View_1.View(this);
        this.model.addObserver(this.view);
    }
    Controller.prototype.changeColor = function (color) {
        this.model.setColor(color);
    };
    return Controller;
}());
exports.Controller = Controller;


/***/ }),

/***/ "./src/Model.ts":
/*!**********************!*\
  !*** ./src/Model.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Model = void 0;
var Observable_1 = __webpack_require__(/*! ./Observable */ "./src/Observable.ts");
var Model = (function (_super) {
    __extends(Model, _super);
    function Model() {
        var _this = _super.call(this) || this;
        _this.color = "blue";
        return _this;
    }
    Model.prototype.setColor = function (color) {
        this.color = color;
        this.notifyObserver(this.color);
    };
    return Model;
}(Observable_1.Observable));
exports.Model = Model;


/***/ }),

/***/ "./src/Observable.ts":
/*!***************************!*\
  !*** ./src/Observable.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports) => {


exports.__esModule = true;
exports.Observable = void 0;
var Observable = (function () {
    function Observable() {
        this.observerArray = [];
    }
    Observable.prototype.addObserver = function (observer) {
        this.observerArray.push(observer);
    };
    Observable.prototype.notifyObserver = function (color) {
        this.observerArray.forEach(function (observer) {
            observer.update(color);
        });
    };
    return Observable;
}());
exports.Observable = Observable;


/***/ }),

/***/ "./src/View.ts":
/*!*********************!*\
  !*** ./src/View.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports) => {


exports.__esModule = true;
exports.View = void 0;
var View = (function () {
    function View(controller) {
        var _this = this;
        this.controller = controller;
        console.log("view");
        document.querySelectorAll("button").forEach(function (button) {
            button.addEventListener("click", function (event) {
                _this.onButtonClick(event.target.id);
            });
        });
    }
    View.prototype.onButtonClick = function (color) {
        this.controller.changeColor(color);
    };
    View.prototype.update = function (color) {
        var text = document.querySelector("#text");
        text.style.color = color;
    };
    return View;
}());
exports.View = View;


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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!********************!*\
  !*** ./src/App.ts ***!
  \********************/

exports.__esModule = true;
var Controller_1 = __webpack_require__(/*! ./Controller */ "./src/Controller.ts");
var app = new Controller_1.Controller();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tdmNvLWV4YW1wbGUvLi9zcmMvQ29udHJvbGxlci50cyIsIndlYnBhY2s6Ly9tdmNvLWV4YW1wbGUvLi9zcmMvTW9kZWwudHMiLCJ3ZWJwYWNrOi8vbXZjby1leGFtcGxlLy4vc3JjL09ic2VydmFibGUudHMiLCJ3ZWJwYWNrOi8vbXZjby1leGFtcGxlLy4vc3JjL1ZpZXcudHMiLCJ3ZWJwYWNrOi8vbXZjby1leGFtcGxlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL212Y28tZXhhbXBsZS8uL3NyYy9BcHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhO0FBQ2Isa0JBQWtCO0FBQ2xCLGtCQUFrQjtBQUNsQixjQUFjLG1CQUFPLENBQUMsK0JBQVM7QUFDL0IsYUFBYSxtQkFBTyxDQUFDLDZCQUFRO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELGtCQUFrQjs7Ozs7Ozs7Ozs7QUNoQkw7QUFDYjtBQUNBO0FBQ0E7QUFDQSxjQUFjLGdCQUFnQixzQ0FBc0MsaUJBQWlCLEVBQUU7QUFDdkYsNkJBQTZCLDhFQUE4RTtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQSxDQUFDO0FBQ0Qsa0JBQWtCO0FBQ2xCLGFBQWE7QUFDYixtQkFBbUIsbUJBQU8sQ0FBQyx5Q0FBYztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsYUFBYTs7Ozs7Ozs7Ozs7QUNoQ0E7QUFDYixrQkFBa0I7QUFDbEIsa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxDQUFDO0FBQ0Qsa0JBQWtCOzs7Ozs7Ozs7OztBQ2pCTDtBQUNiLGtCQUFrQjtBQUNsQixZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELFlBQVk7Ozs7Ozs7VUN2Qlo7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7Ozs7OztBQ3RCYTtBQUNiLGtCQUFrQjtBQUNsQixtQkFBbUIsbUJBQU8sQ0FBQyx5Q0FBYztBQUN6QyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLkNvbnRyb2xsZXIgPSB2b2lkIDA7XG52YXIgTW9kZWxfMSA9IHJlcXVpcmUoXCIuL01vZGVsXCIpO1xudmFyIFZpZXdfMSA9IHJlcXVpcmUoXCIuL1ZpZXdcIik7XG52YXIgQ29udHJvbGxlciA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQ29udHJvbGxlcigpIHtcbiAgICAgICAgdGhpcy5tb2RlbCA9IG5ldyBNb2RlbF8xLk1vZGVsKCk7XG4gICAgICAgIHRoaXMudmlldyA9IG5ldyBWaWV3XzEuVmlldyh0aGlzKTtcbiAgICAgICAgdGhpcy5tb2RlbC5hZGRPYnNlcnZlcih0aGlzLnZpZXcpO1xuICAgIH1cbiAgICBDb250cm9sbGVyLnByb3RvdHlwZS5jaGFuZ2VDb2xvciA9IGZ1bmN0aW9uIChjb2xvcikge1xuICAgICAgICB0aGlzLm1vZGVsLnNldENvbG9yKGNvbG9yKTtcbiAgICB9O1xuICAgIHJldHVybiBDb250cm9sbGVyO1xufSgpKTtcbmV4cG9ydHMuQ29udHJvbGxlciA9IENvbnRyb2xsZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5Nb2RlbCA9IHZvaWQgMDtcbnZhciBPYnNlcnZhYmxlXzEgPSByZXF1aXJlKFwiLi9PYnNlcnZhYmxlXCIpO1xudmFyIE1vZGVsID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoTW9kZWwsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTW9kZWwoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmNvbG9yID0gXCJibHVlXCI7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgTW9kZWwucHJvdG90eXBlLnNldENvbG9yID0gZnVuY3Rpb24gKGNvbG9yKSB7XG4gICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgICAgICAgdGhpcy5ub3RpZnlPYnNlcnZlcih0aGlzLmNvbG9yKTtcbiAgICB9O1xuICAgIHJldHVybiBNb2RlbDtcbn0oT2JzZXJ2YWJsZV8xLk9ic2VydmFibGUpKTtcbmV4cG9ydHMuTW9kZWwgPSBNb2RlbDtcbiIsIlwidXNlIHN0cmljdFwiO1xuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuT2JzZXJ2YWJsZSA9IHZvaWQgMDtcbnZhciBPYnNlcnZhYmxlID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBPYnNlcnZhYmxlKCkge1xuICAgICAgICB0aGlzLm9ic2VydmVyQXJyYXkgPSBbXTtcbiAgICB9XG4gICAgT2JzZXJ2YWJsZS5wcm90b3R5cGUuYWRkT2JzZXJ2ZXIgPSBmdW5jdGlvbiAob2JzZXJ2ZXIpIHtcbiAgICAgICAgdGhpcy5vYnNlcnZlckFycmF5LnB1c2gob2JzZXJ2ZXIpO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZS5wcm90b3R5cGUubm90aWZ5T2JzZXJ2ZXIgPSBmdW5jdGlvbiAoY29sb3IpIHtcbiAgICAgICAgdGhpcy5vYnNlcnZlckFycmF5LmZvckVhY2goZnVuY3Rpb24gKG9ic2VydmVyKSB7XG4gICAgICAgICAgICBvYnNlcnZlci51cGRhdGUoY29sb3IpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBPYnNlcnZhYmxlO1xufSgpKTtcbmV4cG9ydHMuT2JzZXJ2YWJsZSA9IE9ic2VydmFibGU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLlZpZXcgPSB2b2lkIDA7XG52YXIgVmlldyA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gVmlldyhjb250cm9sbGVyKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuY29udHJvbGxlciA9IGNvbnRyb2xsZXI7XG4gICAgICAgIGNvbnNvbGUubG9nKFwidmlld1wiKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImJ1dHRvblwiKS5mb3JFYWNoKGZ1bmN0aW9uIChidXR0b24pIHtcbiAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgX3RoaXMub25CdXR0b25DbGljayhldmVudC50YXJnZXQuaWQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBWaWV3LnByb3RvdHlwZS5vbkJ1dHRvbkNsaWNrID0gZnVuY3Rpb24gKGNvbG9yKSB7XG4gICAgICAgIHRoaXMuY29udHJvbGxlci5jaGFuZ2VDb2xvcihjb2xvcik7XG4gICAgfTtcbiAgICBWaWV3LnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoY29sb3IpIHtcbiAgICAgICAgdmFyIHRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RleHRcIik7XG4gICAgICAgIHRleHQuc3R5bGUuY29sb3IgPSBjb2xvcjtcbiAgICB9O1xuICAgIHJldHVybiBWaWV3O1xufSgpKTtcbmV4cG9ydHMuVmlldyA9IFZpZXc7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xudmFyIENvbnRyb2xsZXJfMSA9IHJlcXVpcmUoXCIuL0NvbnRyb2xsZXJcIik7XG52YXIgYXBwID0gbmV3IENvbnRyb2xsZXJfMS5Db250cm9sbGVyKCk7XG4iXSwic291cmNlUm9vdCI6IiJ9