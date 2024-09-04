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
require("../../styles/button.css");
var react_1 = __importDefault(require("react"));
// EXPORTA COMPONENTE POR PADRÃO
function Button(_a) {
    var _b;
    var label = _a.label, style = _a.style, width = _a.width, heigth = _a.heigth, icon = _a.icon, iconPosition = _a.iconPosition, size = _a.size, rounded = _a.rounded, disabled = _a.disabled, tooltip = _a.tooltip, tooltipPosition = _a.tooltipPosition, loading = _a.loading, text = _a.text, shadow = _a.shadow, rest = __rest(_a, ["label", "style", "width", "heigth", "icon", "iconPosition", "size", "rounded", "disabled", "tooltip", "tooltipPosition", "loading", "text", "shadow"]);
    // DEFINE VALOR PARA STYLE OPTIONS
    var styleOption = (_b = rest.style) !== null && _b !== void 0 ? _b : {};
    styleOption.width = width !== null && width !== void 0 ? width : "auto";
    return (react_1.default.createElement("button", __assign({ className: "r-button-main-box \n      r-".concat(style !== null && style !== void 0 ? style : "btn-light", " r-").concat(size !== null && size !== void 0 ? size : "btn-md", " \n      r-").concat(disabled ? "btn-disabled" : "", " \n      r-").concat(rounded ? "btn-rounded" : "", " \n      ").concat(text ? "r-text-button" : "", " \n      ").concat(shadow ? "r-box-shadow" : "", "\n      ").concat(rounded && icon && !label ? "r-btn-rounded-icon" : ""), style: styleOption }, rest),
        tooltip && (react_1.default.createElement("span", { className: "r-tooltip ".concat("r-tooltip-" + tooltipPosition) }, tooltip !== null && tooltip !== void 0 ? tooltip : "")),
        react_1.default.createElement("span", { className: "r-button-label-icon-box" },
            iconPosition != "right" && icon && (react_1.default.createElement(react_1.default.Fragment, null, loading ? react_1.default.createElement("div", { className: "r-loading" }) : react_1.default.createElement("span", null, icon))),
            label,
            iconPosition == "right" && (react_1.default.createElement(react_1.default.Fragment, null, loading ? react_1.default.createElement("div", { className: "r-loading" }) : react_1.default.createElement("span", null, icon))))));
}
exports.default = Button;
//# sourceMappingURL=button.js.map