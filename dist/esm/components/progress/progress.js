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
    var label = _a.label, labelPosition = _a.labelPosition, color = _a.color, rounded = _a.rounded, shadow = _a.shadow, percentage = _a.percentage, width = _a.width, stroke = _a.stroke, barHeight = _a.barHeight, rest = __rest(_a, ["label", "labelPosition", "color", "rounded", "shadow", "percentage", "width", "stroke", "barHeight"]);
    var predefinedColors = [
        "danger",
        "success",
        "info",
        "dark",
        "light",
        "none",
        "warning",
        "black",
    ];
    if (rounded != undefined && rounded == true) {
        return (react_1.default.createElement("span", __assign({ className: "r-progress-main-box ", style: {
                minWidth: width !== null && width !== void 0 ? width : "50px",
            } }, rest),
            react_1.default.createElement("label", { className: "r-progress-label-box" }, label),
            rounded != undefined && rounded == true && (react_1.default.createElement("svg", { viewBox: "0 0 36 36" },
                react_1.default.createElement("path", { d: "M18 2.0845\r\n      a 15.9155 15.9155 0 0 1 0 31.831\r\n      a 15.9155 15.9155 0 0 1 0 -31.831", fill: "none", stroke: "#d3d3d350", strokeWidth: stroke !== null && stroke !== void 0 ? stroke : 2 }),
                react_1.default.createElement("path", { d: "M18 2.0845\r\n            a 15.9155 15.9155 0 0 1 0 31.831\r\n            a 15.9155 15.9155 0 0 1 0 -31.831", fill: "none", strokeWidth: stroke !== null && stroke !== void 0 ? stroke : 2, strokeLinecap: "round", strokeDasharray: (percentage == 0 ? 100 : percentage) + ", 100", className: "".concat(predefinedColors.includes(color) ? "r-progress-".concat(color) : ""), style: {
                        stroke: predefinedColors.includes(color) ? undefined : color,
                    } })))));
    }
    else {
        return (react_1.default.createElement("div", { className: "r-progress-bar-box-main" },
            react_1.default.createElement("div", { className: "r-progress-bar-box-label", style: {
                    justifyContent: labelPosition && labelPosition == "right"
                        ? "flex-end"
                        : "flex-start",
                } }, label),
            react_1.default.createElement("div", __assign({ className: (shadow == undefined || (shadow != undefined && shadow == false)
                    ? ""
                    : "r-box-shadow ") + "r-progress-bar-box", style: {
                    minWidth: width !== null && width !== void 0 ? width : "50px",
                    height: barHeight ? "".concat(barHeight, "px") : "6px",
                } }, rest),
                react_1.default.createElement("div", { className: "r-progress-bar ".concat(predefinedColors.includes(color) ? "r-progress-".concat(color) : ""), style: {
                        width: "".concat(percentage, "%"),
                        backgroundColor: predefinedColors.includes(color)
                            ? undefined
                            : color,
                    } }))));
    }
}
exports.default = Progress;
//# sourceMappingURL=progress.js.map