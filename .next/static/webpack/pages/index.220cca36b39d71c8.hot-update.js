"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/social-icons.js":
/*!****************************************!*\
  !*** ./src/components/social-icons.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _styled_system_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @styled-system/css */ \"./node_modules/@styled-system/css/dist/index.esm.js\");\n/* harmony import */ var _flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./flex */ \"./src/components/flex.js\");\n/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icon */ \"./src/components/icon.js\");\n/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./link */ \"./src/components/link.js\");\n/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./text */ \"./src/components/text.js\");\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nvar _this = undefined;\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    & + &::before {\\n        /* Draw a bullet with CSS because pseudo content */\\n        /* is read by screen readers */\\n        content: '';\\n        display: inline-block;\\n        vertical-align: middle;\\n        margin: 0 1ch;\\n        width: 3px;\\n        height: 3px;\\n        border-radius: 50%;\\n        background-color: currentColor;\\n    }\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\n\n// src/components/social-icons.js\n\n\n\n\n\n\n\nvar List = (0,styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_flex__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_styled_system_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({\n    listStyle: \"none\"\n}));\n_c = List;\nvar Item = (0,styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_text__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_templateObject());\n_c1 = Item;\nvar socialFollow = [\n    {\n        icon: \"github\",\n        link: \"https://github.com/hans2103\"\n    },\n    {\n        icon: \"codepen\",\n        link: \"https://codepen.io/hans2103\"\n    },\n    {\n        icon: \"twitter\",\n        link: \"https://twitter.com/hans2103\"\n    },\n    {\n        icon: \"linkedin\",\n        link: \"https://linkedin.com/in/hans2103\"\n    },\n    {\n        icon: \"instagram\",\n        link: \"https://instagram.com/hans2103\"\n    }, \n];\nvar socialShare = [];\nvar SocialLinks = function(props) {\n    var _this1 = _this;\n    var socialList = props.type === \"follow\" ? socialFollow : socialShare;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(List, {\n        as: \"ul\",\n        m: \"0\",\n        alignItems: props.alignItems,\n        justifyContent: props.justifyContent,\n        children: socialList.map(function(item) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Item, {\n                as: \"li\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    href: item.link,\n                    hidden: true,\n                    name: \"Bekijk mijn profiel op \" + item.icon,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icon__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        color: \"currentColor\",\n                        icon: item.icon\n                    }, void 0, false, {\n                        fileName: \"/Users/hans2103/Sites/nicoprevoo/src/components/social-icons.js\",\n                        lineNumber: 69,\n                        columnNumber: 25\n                    }, _this1)\n                }, void 0, false, {\n                    fileName: \"/Users/hans2103/Sites/nicoprevoo/src/components/social-icons.js\",\n                    lineNumber: 65,\n                    columnNumber: 21\n                }, _this1)\n            }, item.link, false, {\n                fileName: \"/Users/hans2103/Sites/nicoprevoo/src/components/social-icons.js\",\n                lineNumber: 64,\n                columnNumber: 17\n            }, _this1);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/hans2103/Sites/nicoprevoo/src/components/social-icons.js\",\n        lineNumber: 62,\n        columnNumber: 9\n    }, _this);\n};\n_c2 = SocialLinks;\nSocialLinks.propTypes = {\n    type: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().string),\n    alignItems: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().string),\n    justifyContent: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().string)\n};\n/** @component */ /* harmony default export */ __webpack_exports__[\"default\"] = (SocialLinks);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"List\");\n$RefreshReg$(_c1, \"Item\");\n$RefreshReg$(_c2, \"SocialLinks\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zb2NpYWwtaWNvbnMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRkEsaUNBQWlDO0FBRUU7QUFDSTtBQUNGO0FBRVg7QUFDQTtBQUNBO0FBQ0E7QUFFMUIsSUFBTU8sSUFBSSxHQUFHTiw2REFBTSxDQUFDRSw2Q0FBSSxDQUFDLENBQ3JCRCw4REFBRyxDQUFDO0lBQ0FNLFNBQVMsRUFBRSxNQUFNO0NBQ3BCLENBQUMsQ0FDTDtBQUpLRCxLQUFBQSxJQUFJO0FBTVYsSUFBTUUsSUFBSSxHQUFHUiw2REFBTSxDQUFDSyw2Q0FBSSxDQUFDLG1CQWF4QjtBQWJLRyxNQUFBQSxJQUFJO0FBZVYsSUFBTUMsWUFBWSxHQUFHO0lBQ2pCO1FBQ0lDLElBQUksRUFBRSxRQUFRO1FBQ2RDLElBQUksRUFBRSw2QkFBNkI7S0FDdEM7SUFDRDtRQUNJRCxJQUFJLEVBQUUsU0FBUztRQUNmQyxJQUFJLEVBQUUsNkJBQTZCO0tBQ3RDO0lBQ0Q7UUFDSUQsSUFBSSxFQUFFLFNBQVM7UUFDZkMsSUFBSSxFQUFFLDhCQUE4QjtLQUN2QztJQUNEO1FBQ0lELElBQUksRUFBRSxVQUFVO1FBQ2hCQyxJQUFJLEVBQUUsa0NBQWtDO0tBQzNDO0lBQ0Q7UUFDSUQsSUFBSSxFQUFFLFdBQVc7UUFDakJDLElBQUksRUFBRSxnQ0FBZ0M7S0FDekM7Q0FDSjtBQUVELElBQU1DLFdBQVcsR0FBRyxFQUFFO0FBRXRCLElBQU1DLFdBQVcsR0FBRyxTQUFDQyxLQUFLLEVBQUs7O0lBQzNCLElBQUlDLFVBQVUsR0FBR0QsS0FBSyxDQUFDRSxJQUFJLEtBQUssUUFBUSxHQUFHUCxZQUFZLEdBQUdHLFdBQVc7SUFFckUscUJBQ0ksOERBQUNOLElBQUk7UUFBQ1csRUFBRSxFQUFDLElBQUk7UUFBQ0MsQ0FBQyxFQUFDLEdBQUc7UUFBQ0MsVUFBVSxFQUFFTCxLQUFLLENBQUNLLFVBQVU7UUFBRUMsY0FBYyxFQUFFTixLQUFLLENBQUNNLGNBQWM7a0JBQ2pGTCxVQUFVLENBQUNNLEdBQUcsQ0FBQyxTQUFDQyxJQUFJO2lDQUNqQiw4REFBQ2QsSUFBSTtnQkFBQ1MsRUFBRSxFQUFDLElBQUk7MEJBQ1QsNEVBQUNiLDZDQUFJO29CQUNEbUIsSUFBSSxFQUFFRCxJQUFJLENBQUNYLElBQUk7b0JBQ2ZhLE1BQU0sRUFBRSxJQUFJO29CQUNaQyxJQUFJLEVBQUUseUJBQXlCLEdBQUdILElBQUksQ0FBQ1osSUFBSTs4QkFDM0MsNEVBQUNQLDZDQUFJO3dCQUFDdUIsS0FBSyxFQUFDLGNBQWM7d0JBQUNoQixJQUFJLEVBQUVZLElBQUksQ0FBQ1osSUFBSTs7Ozs7OEJBQUk7Ozs7OzBCQUMzQztlQU5RWSxJQUFJLENBQUNYLElBQUk7Ozs7c0JBT3JCO1NBQ1YsQ0FBQzs7Ozs7YUFDQyxDQUNUO0NBQ0w7QUFqQktFLE1BQUFBLFdBQVc7QUFtQmpCQSxXQUFXLENBQUNjLFNBQVMsR0FBRztJQUNwQlgsSUFBSSxFQUFFakIsMERBQWdCO0lBQ3RCb0IsVUFBVSxFQUFFcEIsMERBQWdCO0lBQzVCcUIsY0FBYyxFQUFFckIsMERBQWdCO0NBQ25DLENBQUM7QUFFRixpQkFBaUIsQ0FDakIsK0RBQWVjLFdBQVcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9zb2NpYWwtaWNvbnMuanM/MmM5MCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBzcmMvY29tcG9uZW50cy9zb2NpYWwtaWNvbnMuanNcblxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IGNzcyBmcm9tICdAc3R5bGVkLXN5c3RlbS9jc3MnO1xuXG5pbXBvcnQgRmxleCBmcm9tICcuL2ZsZXgnO1xuaW1wb3J0IEljb24gZnJvbSAnLi9pY29uJztcbmltcG9ydCBMaW5rIGZyb20gJy4vbGluayc7XG5pbXBvcnQgVGV4dCBmcm9tICcuL3RleHQnO1xuXG5jb25zdCBMaXN0ID0gc3R5bGVkKEZsZXgpKFxuICAgIGNzcyh7XG4gICAgICAgIGxpc3RTdHlsZTogJ25vbmUnXG4gICAgfSlcbik7XG5cbmNvbnN0IEl0ZW0gPSBzdHlsZWQoVGV4dClgXG4gICAgJiArICY6OmJlZm9yZSB7XG4gICAgICAgIC8qIERyYXcgYSBidWxsZXQgd2l0aCBDU1MgYmVjYXVzZSBwc2V1ZG8gY29udGVudCAqL1xuICAgICAgICAvKiBpcyByZWFkIGJ5IHNjcmVlbiByZWFkZXJzICovXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgIG1hcmdpbjogMCAxY2g7XG4gICAgICAgIHdpZHRoOiAzcHg7XG4gICAgICAgIGhlaWdodDogM3B4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGN1cnJlbnRDb2xvcjtcbiAgICB9XG5gO1xuXG5jb25zdCBzb2NpYWxGb2xsb3cgPSBbXG4gICAge1xuICAgICAgICBpY29uOiAnZ2l0aHViJyxcbiAgICAgICAgbGluazogJ2h0dHBzOi8vZ2l0aHViLmNvbS9oYW5zMjEwMydcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWNvbjogJ2NvZGVwZW4nLFxuICAgICAgICBsaW5rOiAnaHR0cHM6Ly9jb2RlcGVuLmlvL2hhbnMyMTAzJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBpY29uOiAndHdpdHRlcicsXG4gICAgICAgIGxpbms6ICdodHRwczovL3R3aXR0ZXIuY29tL2hhbnMyMTAzJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBpY29uOiAnbGlua2VkaW4nLFxuICAgICAgICBsaW5rOiAnaHR0cHM6Ly9saW5rZWRpbi5jb20vaW4vaGFuczIxMDMnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGljb246ICdpbnN0YWdyYW0nLFxuICAgICAgICBsaW5rOiAnaHR0cHM6Ly9pbnN0YWdyYW0uY29tL2hhbnMyMTAzJ1xuICAgIH0sXG5dO1xuXG5jb25zdCBzb2NpYWxTaGFyZSA9IFtdO1xuXG5jb25zdCBTb2NpYWxMaW5rcyA9IChwcm9wcykgPT4ge1xuICAgIGxldCBzb2NpYWxMaXN0ID0gcHJvcHMudHlwZSA9PT0gJ2ZvbGxvdycgPyBzb2NpYWxGb2xsb3cgOiBzb2NpYWxTaGFyZTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxMaXN0IGFzPVwidWxcIiBtPVwiMFwiIGFsaWduSXRlbXM9e3Byb3BzLmFsaWduSXRlbXN9IGp1c3RpZnlDb250ZW50PXtwcm9wcy5qdXN0aWZ5Q29udGVudH0+XG4gICAgICAgICAgICB7c29jaWFsTGlzdC5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgICA8SXRlbSBhcz1cImxpXCIga2V5PXtpdGVtLmxpbmt9PlxuICAgICAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17aXRlbS5saW5rfVxuICAgICAgICAgICAgICAgICAgICAgICAgaGlkZGVuPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17J0Jla2lqayBtaWpuIHByb2ZpZWwgb3AgJyArIGl0ZW0uaWNvbn0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBjb2xvcj1cImN1cnJlbnRDb2xvclwiIGljb249e2l0ZW0uaWNvbn0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvSXRlbT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8L0xpc3Q+XG4gICAgKTtcbn07XG5cblNvY2lhbExpbmtzLnByb3BUeXBlcyA9IHtcbiAgICB0eXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGFsaWduSXRlbXM6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAganVzdGlmeUNvbnRlbnQ6IFByb3BUeXBlcy5zdHJpbmdcbn07XG5cbi8qKiBAY29tcG9uZW50ICovXG5leHBvcnQgZGVmYXVsdCBTb2NpYWxMaW5rcztcbiJdLCJuYW1lcyI6WyJQcm9wVHlwZXMiLCJzdHlsZWQiLCJjc3MiLCJGbGV4IiwiSWNvbiIsIkxpbmsiLCJUZXh0IiwiTGlzdCIsImxpc3RTdHlsZSIsIkl0ZW0iLCJzb2NpYWxGb2xsb3ciLCJpY29uIiwibGluayIsInNvY2lhbFNoYXJlIiwiU29jaWFsTGlua3MiLCJwcm9wcyIsInNvY2lhbExpc3QiLCJ0eXBlIiwiYXMiLCJtIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwibWFwIiwiaXRlbSIsImhyZWYiLCJoaWRkZW4iLCJuYW1lIiwiY29sb3IiLCJwcm9wVHlwZXMiLCJzdHJpbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/social-icons.js\n");

/***/ })

});