"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
require("../../styles/accordion.css");
function Accordion(_a) {
    var title = _a.title, isOpenControl = _a.isOpenControl, setIsOpenControl = _a.setIsOpenControl, children = _a.children, alwaysOpen = _a.alwaysOpen, defaultOpen = _a.defaultOpen, headerTemplate = _a.headerTemplate;
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
    return (react_1.default.createElement("div", { className: "reactivus-accordion-main-box reactivus-box-shadow" },
        react_1.default.createElement("div", { className: "reactivus-accordion-header-box", onClick: function () {
                if (alwaysOpen == undefined || alwaysOpen == false) {
                    setIsOpen(!isOpen);
                    setIsOpenControl && setIsOpenControl(!isOpen);
                }
            } },
            react_1.default.createElement("div", { className: "reactivus-accordion-header-title" }, headerTemplate ? headerTemplate : title ? title : ""),
            react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "18", height: "18", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: isOpen
                    ? "reactivus-accordion-rotate-svg-up"
                    : "reactivus-accordion-rotate-svg-down" },
                react_1.default.createElement("path", { d: "M6 9l6 6 6-6" }))),
        react_1.default.createElement("div", { className: "reactivus-accordion-content-box", style: {
                maxHeight: isOpenControl || isOpen ? "100dvh" : "0px",
            } }, children)));
}
exports.default = Accordion;
//# sourceMappingURL=accordion.js.map