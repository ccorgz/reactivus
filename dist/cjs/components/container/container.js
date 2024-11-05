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
require("../../styles/container.css");
function Container(_a) {
    var shadow = _a.shadow, children = _a.children, flexDirection = _a.flexDirection, alignItems = _a.alignItems, flexWrap = _a.flexWrap, gap = _a.gap, className = _a.className, width = _a.width, rest = __rest(_a, ["shadow", "children", "flexDirection", "alignItems", "flexWrap", "gap", "className", "width"]);
    return (react_1.default.createElement("div", __assign({ className: "r-container-flex-main-box " +
            (className ? className : "") +
            (shadow == true ? " r-box-shadow" : ""), style: {
            flexDirection: flexDirection,
            flexWrap: flexWrap,
            gap: gap,
            alignItems: alignItems,
            width: width,
        } }, rest), children !== null && children !== void 0 ? children : ""));
}
exports.default = Container;
//# sourceMappingURL=container.js.map