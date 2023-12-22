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
// IMPORTA HOOKS DO REACT
var react_1 = __importStar(require("react"));
// IMPORTA FOLHA DE ESTILOS DO COMPONENTE
require("../../styles/input.css");
// EXPORTA COMPONENTE POR PADRÃO
function Input(_a) {
    var _b, _c, _d, _e, _f, _g, _h;
    var options = _a.options, children = _a.children, onKeyDown = _a.onKeyDown, rest = __rest(_a, ["options", "children", "onKeyDown"]);
    // DEFINE STATE PARA CONTROLE DA EXIBIÇÃO DO ÍCONE DE VISUALIZAÇÃO DA SENHA
    var _j = (0, react_1.useState)(false), seePwd = _j[0], setSeePwd = _j[1];
    // DEFINE STATE DE CONTROLE DO TIPO DO INPUT
    var _k = (0, react_1.useState)(options.type), type = _k[0], setType = _k[1];
    // USEEFFECT DE CONTROLE DA EXIBIÇÃO DA SENHA DO COMPONENTE
    (0, react_1.useEffect)(function () {
        if (seePwd) {
            setType("text");
        }
        else if (type !== options.type) {
            setType(options.type);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [seePwd]);
    if (options.type === "select") {
        return (react_1.default.createElement("div", __assign({}, rest, { className: "inputBox ".concat((_b = options.status) !== null && _b !== void 0 ? _b : "light"), style: { width: options.width } }),
            options.label && react_1.default.createElement("label", null, options.label),
            react_1.default.createElement("select", { className: "selectInputBox", ref: (_c = options.ref) !== null && _c !== void 0 ? _c : null }, children)));
    }
    else {
        return (react_1.default.createElement("div", __assign({}, rest, { className: "inputBox ".concat((_d = options.status) !== null && _d !== void 0 ? _d : "light"), style: { width: options.width } }),
            options.label && react_1.default.createElement("label", null, options.label),
            options.icon && react_1.default.createElement("span", null, options.icon),
            react_1.default.createElement("input", __assign({ type: type, placeholder: options === null || options === void 0 ? void 0 : options.placeholder }, rest, { ref: (_e = options.ref) !== null && _e !== void 0 ? _e : null, onChange: function (e) { return e.preventDefault(); }, onKeyDown: options.onKeyDown })),
            ((_f = options.password) === null || _f === void 0 ? void 0 : _f.seePwd) && (react_1.default.createElement("span", { onClick: function (e) { return setSeePwd(!seePwd); }, style: { cursor: "pointer" } },
                seePwd ? (_g = options.password) === null || _g === void 0 ? void 0 : _g.onIcon : (_h = options.password) === null || _h === void 0 ? void 0 : _h.offIcon,
                " "))));
    }
}
exports.default = Input;
//# sourceMappingURL=input.js.map