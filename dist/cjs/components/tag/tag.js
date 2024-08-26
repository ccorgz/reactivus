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
require("../../styles/tag.css");
function Tag(_a) {
    var label = _a.label, color = _a.color, rounded = _a.rounded, icon = _a.icon, iconPosition = _a.iconPosition, text = _a.text, shadow = _a.shadow, border = _a.border, rest = __rest(_a, ["label", "color", "rounded", "icon", "iconPosition", "text", "shadow", "border"]);
    return (react_1.default.createElement("span", __assign({ className: "reactivus-tag-main-box " +
            (shadow == undefined || (shadow != undefined && shadow == false)
                ? ""
                : "r-box-shadow ") +
            (text != undefined
                ? "reactivus-tag-text-" +
                    color +
                    (border == true ? " reactivus-tag-text-".concat(color, "-border") : "")
                : "reactivus-tag-" + color) +
            (rounded != undefined && rounded == true
                ? " reactivus-tag-rounded"
                : " ") }, rest),
        iconPosition == "left" && icon != undefined && icon,
        react_1.default.createElement("div", { className: "reactivus-tag-label-box" }, label),
        ((iconPosition == "right" && icon != undefined) ||
            (icon != undefined && iconPosition != "left")) &&
            icon));
}
exports.default = Tag;
//# sourceMappingURL=tag.js.map