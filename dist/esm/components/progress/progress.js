"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
require("../../styles/progress.css");
function Progress(_a) {
    var _b, _c;
    var label = _a.label, color = _a.color, rounded = _a.rounded, shadow = _a.shadow, percentage = _a.percentage, width = _a.width, stroke = _a.stroke, rest = __rest(_a, ["label", "color", "rounded", "shadow", "percentage", "width", "stroke"]);
    if (rounded != undefined && rounded == true) {
        return (react_1.default.createElement("span", __assign({ className: "r-progress-main-box ", style: {
                minWidth: (_b = "".concat(width)) !== null && _b !== void 0 ? _b : "50px",
            } }, rest),
            react_1.default.createElement("label", { className: "r-progress-label-box" }, label),
            rounded != undefined && rounded == true && (react_1.default.createElement("svg", { viewBox: "0 0 36 36" },
                react_1.default.createElement("path", { d: "M18 2.0845\r\n      a 15.9155 15.9155 0 0 1 0 31.831\r\n      a 15.9155 15.9155 0 0 1 0 -31.831", fill: "none", stroke: "#d3d3d350", strokeWidth: stroke !== null && stroke !== void 0 ? stroke : 2 }),
                react_1.default.createElement("path", { d: "M18 2.0845\r\n            a 15.9155 15.9155 0 0 1 0 31.831\r\n            a 15.9155 15.9155 0 0 1 0 -31.831", fill: "none", strokeWidth: stroke !== null && stroke !== void 0 ? stroke : 2, strokeLinecap: "round", strokeDasharray: (percentage == 0 ? 100 : percentage) + ", 100", className: "r-progress-" + color })))));
    }
    else {
        return (react_1.default.createElement("span", __assign({ className: (shadow == undefined || (shadow != undefined && shadow == false)
                ? ""
                : "r-box-shadow ") + "r-progress-bar-main-box", style: {
                minWidth: (_c = "".concat(width)) !== null && _c !== void 0 ? _c : "50px",
            } }, rest),
            react_1.default.createElement("label", { className: "r-progress-bar-label-box" }, label),
            react_1.default.createElement("div", { className: "r-progress-bar-box r-progress-".concat(color), style: {
                    width: "".concat(percentage, "%"),
                } })));
    }
}
exports.default = Progress;
//# sourceMappingURL=progress.js.map