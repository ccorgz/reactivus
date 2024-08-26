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
require("../../styles/input.css");
// EXPORTA COMPONENTE POR PADRÃO
var Input = function (_a) {
    var _b;
    var onKeyDown = _a.onKeyDown, type = _a.type, icon = _a.icon, iconPosition = _a.iconPosition, iconAction = _a.iconAction, label = _a.label, width = _a.width, placeholder = _a.placeholder, password = _a.password, size = _a.size, className = _a.className, description = _a.description, inputRef = _a.inputRef, rest = __rest(_a, ["onKeyDown", "type", "icon", "iconPosition", "iconAction", "label", "width", "placeholder", "password", "size", "className", "description", "inputRef"]);
    var _c = (0, react_1.useState)(false), seePwd = _c[0], setSeePwd = _c[1];
    return (react_1.default.createElement("div", { style: { width: width }, className: "reactivus-input-main-box" },
        react_1.default.createElement("div", __assign({}, rest, { className: "reactivus-input-box r-box-shadow " +
                ((_b = "reactivus-input-" + size) !== null && _b !== void 0 ? _b : "md") +
                " " +
                (className ? className : "") }),
            label && react_1.default.createElement("label", null, label),
            icon &&
                (!iconPosition || (iconPosition && iconPosition == "left")) && (react_1.default.createElement("span", { onClick: function () { return iconAction && iconAction(); } }, icon)),
            react_1.default.createElement("input", __assign({ type: type == "password" && seePwd ? "text" : type, placeholder: placeholder !== null && placeholder !== void 0 ? placeholder : "" }, rest, { ref: inputRef !== null && inputRef !== void 0 ? inputRef : null, onChange: function (e) { return e.preventDefault(); }, onKeyDown: onKeyDown })),
            (password === null || password === void 0 ? void 0 : password.seePwd) && (react_1.default.createElement("span", { onClick: function (e) { return setSeePwd(!seePwd); }, style: { cursor: "pointer" } },
                seePwd ? password === null || password === void 0 ? void 0 : password.onIcon : password === null || password === void 0 ? void 0 : password.offIcon,
                " ")),
            icon && iconPosition && iconPosition == "right" && (react_1.default.createElement("span", { onClick: function () { return iconAction && iconAction(); } }, icon))),
        description && description.length > 0 && (react_1.default.createElement("span", { className: "reactivus-input-box-description" }, description))));
};
exports.default = Input;
//# sourceMappingURL=input.js.map