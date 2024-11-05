"use strict";
"use client";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
require("../../styles/accordion.css");
function Accordion(_a) {
    var title = _a.title, isOpenControl = _a.isOpenControl, setIsOpenControl = _a.setIsOpenControl, children = _a.children, alwaysOpen = _a.alwaysOpen, defaultOpen = _a.defaultOpen, headerTemplate = _a.headerTemplate, rest = __rest(_a, ["title", "isOpenControl", "setIsOpenControl", "children", "alwaysOpen", "defaultOpen", "headerTemplate"]);
    var _b = (0, react_1.useState)(isOpenControl
        ? isOpenControl
        : defaultOpen != undefined && !alwaysOpen
            ? defaultOpen
            : true), isOpen = _b[0], setIsOpen = _b[1];
    (0, react_1.useEffect)(function () {
        if (isOpenControl != undefined) {
            setIsOpen(isOpenControl);
        }
    }, [isOpenControl]);
    (0, react_1.useEffect)(function () {
        if (alwaysOpen != undefined && alwaysOpen == true) {
            setIsOpen(true);
        }
    }, [alwaysOpen]);
    (0, react_1.useEffect)(function () {
        if (defaultOpen != undefined) {
            setIsOpen(defaultOpen);
        }
    }, [defaultOpen]);
    return (react_1.default.createElement("div", __assign({ className: "r-accordion-main-box r-box-shadow" }, rest),
        react_1.default.createElement("div", { className: "r-accordion-header-box", onClick: function () {
                if (alwaysOpen == undefined || alwaysOpen == false) {
                    setIsOpen(!isOpen);
                    setIsOpenControl && setIsOpenControl(!isOpen);
                }
            } },
            react_1.default.createElement("div", { className: "r-accordion-header-title" }, headerTemplate ? headerTemplate : title ? title : ""),
            react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "18", height: "18", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: isOpen ? "r-accordion-rotate-svg-up" : "r-accordion-rotate-svg-down" },
                react_1.default.createElement("path", { d: "M6 9l6 6 6-6" }))),
        react_1.default.createElement("div", { className: "r-accordion-content-box", style: {
                maxHeight: isOpenControl || isOpen ? "100dvh" : "0px",
            } }, children)));
}
exports.default = Accordion;
//# sourceMappingURL=accordion.js.map