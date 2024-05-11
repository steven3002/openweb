"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/near-abi";
exports.ids = ["vendor-chunks/near-abi"];
exports.modules = {

/***/ "(ssr)/./node_modules/near-abi/lib/index.js":
/*!********************************************!*\
  !*** ./node_modules/near-abi/lib/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.AbiSerializationType = exports.AbiFunctionModifier = exports.AbiFunctionKind = exports.SCHEMA_VERSION = void 0;\nexports.SCHEMA_VERSION = \"0.3.0\";\n/**\n * Function kind regulates whether this function's invocation requires a transaction (so-called\n * call functions) or not (view functions).\n */\nvar AbiFunctionKind;\n(function (AbiFunctionKind) {\n    AbiFunctionKind[\"View\"] = \"view\";\n    AbiFunctionKind[\"Call\"] = \"call\";\n})(AbiFunctionKind = exports.AbiFunctionKind || (exports.AbiFunctionKind = {}));\n/** Function can have multiple modifiers that can change its semantics. */\nvar AbiFunctionModifier;\n(function (AbiFunctionModifier) {\n    /** Init functions can be used to initialize the state of the contract. */\n    AbiFunctionModifier[\"Init\"] = \"init\";\n    /**\n     * Private functions can only be called from the contract containing them. Usually, when a\n     * contract has to have a callback for a remote cross-contract call, this callback method\n     * should only be called by the contract itself.\n     */\n    AbiFunctionModifier[\"Private\"] = \"private\";\n    /** Payable functions can accept token transfer together with the function call.\n     * This is done so that contracts can define a fee in tokens that needs to be payed when\n     * they are used.\n     */\n    AbiFunctionModifier[\"Payable\"] = \"payable\";\n})(AbiFunctionModifier = exports.AbiFunctionModifier || (exports.AbiFunctionModifier = {}));\n/** Supported serialization formats. */\nvar AbiSerializationType;\n(function (AbiSerializationType) {\n    AbiSerializationType[\"Json\"] = \"json\";\n    AbiSerializationType[\"Borsh\"] = \"borsh\";\n})(AbiSerializationType = exports.AbiSerializationType || (exports.AbiSerializationType = {}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbmVhci1hYmkvbGliL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELDRCQUE0QixHQUFHLDJCQUEyQixHQUFHLHVCQUF1QixHQUFHLHNCQUFzQjtBQUM3RyxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsZ0RBQWdELHVCQUF1QixLQUFLO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyx3REFBd0QsMkJBQTJCLEtBQUs7QUFDekY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsMERBQTBELDRCQUE0QixLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGVsbG8tbmVhci8uL25vZGVfbW9kdWxlcy9uZWFyLWFiaS9saWIvaW5kZXguanM/M2U0MCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuQWJpU2VyaWFsaXphdGlvblR5cGUgPSBleHBvcnRzLkFiaUZ1bmN0aW9uTW9kaWZpZXIgPSBleHBvcnRzLkFiaUZ1bmN0aW9uS2luZCA9IGV4cG9ydHMuU0NIRU1BX1ZFUlNJT04gPSB2b2lkIDA7XG5leHBvcnRzLlNDSEVNQV9WRVJTSU9OID0gXCIwLjMuMFwiO1xuLyoqXG4gKiBGdW5jdGlvbiBraW5kIHJlZ3VsYXRlcyB3aGV0aGVyIHRoaXMgZnVuY3Rpb24ncyBpbnZvY2F0aW9uIHJlcXVpcmVzIGEgdHJhbnNhY3Rpb24gKHNvLWNhbGxlZFxuICogY2FsbCBmdW5jdGlvbnMpIG9yIG5vdCAodmlldyBmdW5jdGlvbnMpLlxuICovXG52YXIgQWJpRnVuY3Rpb25LaW5kO1xuKGZ1bmN0aW9uIChBYmlGdW5jdGlvbktpbmQpIHtcbiAgICBBYmlGdW5jdGlvbktpbmRbXCJWaWV3XCJdID0gXCJ2aWV3XCI7XG4gICAgQWJpRnVuY3Rpb25LaW5kW1wiQ2FsbFwiXSA9IFwiY2FsbFwiO1xufSkoQWJpRnVuY3Rpb25LaW5kID0gZXhwb3J0cy5BYmlGdW5jdGlvbktpbmQgfHwgKGV4cG9ydHMuQWJpRnVuY3Rpb25LaW5kID0ge30pKTtcbi8qKiBGdW5jdGlvbiBjYW4gaGF2ZSBtdWx0aXBsZSBtb2RpZmllcnMgdGhhdCBjYW4gY2hhbmdlIGl0cyBzZW1hbnRpY3MuICovXG52YXIgQWJpRnVuY3Rpb25Nb2RpZmllcjtcbihmdW5jdGlvbiAoQWJpRnVuY3Rpb25Nb2RpZmllcikge1xuICAgIC8qKiBJbml0IGZ1bmN0aW9ucyBjYW4gYmUgdXNlZCB0byBpbml0aWFsaXplIHRoZSBzdGF0ZSBvZiB0aGUgY29udHJhY3QuICovXG4gICAgQWJpRnVuY3Rpb25Nb2RpZmllcltcIkluaXRcIl0gPSBcImluaXRcIjtcbiAgICAvKipcbiAgICAgKiBQcml2YXRlIGZ1bmN0aW9ucyBjYW4gb25seSBiZSBjYWxsZWQgZnJvbSB0aGUgY29udHJhY3QgY29udGFpbmluZyB0aGVtLiBVc3VhbGx5LCB3aGVuIGFcbiAgICAgKiBjb250cmFjdCBoYXMgdG8gaGF2ZSBhIGNhbGxiYWNrIGZvciBhIHJlbW90ZSBjcm9zcy1jb250cmFjdCBjYWxsLCB0aGlzIGNhbGxiYWNrIG1ldGhvZFxuICAgICAqIHNob3VsZCBvbmx5IGJlIGNhbGxlZCBieSB0aGUgY29udHJhY3QgaXRzZWxmLlxuICAgICAqL1xuICAgIEFiaUZ1bmN0aW9uTW9kaWZpZXJbXCJQcml2YXRlXCJdID0gXCJwcml2YXRlXCI7XG4gICAgLyoqIFBheWFibGUgZnVuY3Rpb25zIGNhbiBhY2NlcHQgdG9rZW4gdHJhbnNmZXIgdG9nZXRoZXIgd2l0aCB0aGUgZnVuY3Rpb24gY2FsbC5cbiAgICAgKiBUaGlzIGlzIGRvbmUgc28gdGhhdCBjb250cmFjdHMgY2FuIGRlZmluZSBhIGZlZSBpbiB0b2tlbnMgdGhhdCBuZWVkcyB0byBiZSBwYXllZCB3aGVuXG4gICAgICogdGhleSBhcmUgdXNlZC5cbiAgICAgKi9cbiAgICBBYmlGdW5jdGlvbk1vZGlmaWVyW1wiUGF5YWJsZVwiXSA9IFwicGF5YWJsZVwiO1xufSkoQWJpRnVuY3Rpb25Nb2RpZmllciA9IGV4cG9ydHMuQWJpRnVuY3Rpb25Nb2RpZmllciB8fCAoZXhwb3J0cy5BYmlGdW5jdGlvbk1vZGlmaWVyID0ge30pKTtcbi8qKiBTdXBwb3J0ZWQgc2VyaWFsaXphdGlvbiBmb3JtYXRzLiAqL1xudmFyIEFiaVNlcmlhbGl6YXRpb25UeXBlO1xuKGZ1bmN0aW9uIChBYmlTZXJpYWxpemF0aW9uVHlwZSkge1xuICAgIEFiaVNlcmlhbGl6YXRpb25UeXBlW1wiSnNvblwiXSA9IFwianNvblwiO1xuICAgIEFiaVNlcmlhbGl6YXRpb25UeXBlW1wiQm9yc2hcIl0gPSBcImJvcnNoXCI7XG59KShBYmlTZXJpYWxpemF0aW9uVHlwZSA9IGV4cG9ydHMuQWJpU2VyaWFsaXphdGlvblR5cGUgfHwgKGV4cG9ydHMuQWJpU2VyaWFsaXphdGlvblR5cGUgPSB7fSkpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/near-abi/lib/index.js\n");

/***/ })

};
;