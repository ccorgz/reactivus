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
    var _b, _c, _d, _e, _f;
    var options = _a.options, rest = __rest(_a, ["options"]);
    // DEFINE VALOR PARA STYLE OPTIONS
    var styleOp = (_b = rest.style) !== null && _b !== void 0 ? _b : {};
    styleOp.width = (_c = options.width) !== null && _c !== void 0 ? _c : "auto";
    return (react_1.default.createElement("button", __assign({ className: "reactivus-buttonMainBox reactivus-".concat((_d = options.style) !== null && _d !== void 0 ? _d : "btn-light", " reactivus-").concat((_e = options.size) !== null && _e !== void 0 ? _e : "btn-md", " reactivus-").concat(options.disabled ? "btn-disabled" : "", "\n      reactivus-").concat(options.rounded ? "btn-rounded" : ""), style: styleOp }, rest),
        options.tooltip && options.tooltip.show && (react_1.default.createElement("span", { className: "reactivus-tooltip ".concat("reactivus-tooltip-" + options.tooltip.position) }, (_f = options.tooltip) === null || _f === void 0 ? void 0 : _f.text)),
        options.iconPosition === "left" && (react_1.default.createElement(react_1.default.Fragment, null, options.loading ? react_1.default.createElement("div", { className: "reactivus-loading" }) : options.icon)),
        options.label,
        options.iconPosition === "right" && (react_1.default.createElement(react_1.default.Fragment, null, options.loading ? react_1.default.createElement("div", { className: "reactivus-loading" }) : options.icon))));
}
exports.default = Button;
//# sourceMappingURL=button.js.map