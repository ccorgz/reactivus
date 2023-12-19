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
// IMPORTA HOOKS DO REACT
var react_1 = require("react");
// IMPORTA FOLHA DE ESTILOS DO COMPONENTE
var input_module_css_1 = __importDefault(require("./input.module.css"));
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
        return (React.createElement("div", __assign({}, rest, { className: input_module_css_1.default.inputBox + " " + input_module_css_1.default[(_b = options.status) !== null && _b !== void 0 ? _b : "light"], style: { width: options.width } }),
            options.label && React.createElement("label", null, options.label),
            React.createElement("select", { className: input_module_css_1.default.selectInputBox, ref: (_c = options.ref) !== null && _c !== void 0 ? _c : null }, children)));
    }
    else {
        return (React.createElement("div", __assign({}, rest, { className: input_module_css_1.default.inputBox + " " + input_module_css_1.default[(_d = options.status) !== null && _d !== void 0 ? _d : "light"], style: { width: options.width } }),
            options.label && React.createElement("label", null, options.label),
            options.icon && React.createElement("span", null, options.icon),
            React.createElement("input", __assign({ type: type, placeholder: options === null || options === void 0 ? void 0 : options.placeholder }, rest, { ref: (_e = options.ref) !== null && _e !== void 0 ? _e : null, onChange: function (e) { return e.preventDefault(); }, onKeyDown: options.onKeyDown })),
            ((_f = options.password) === null || _f === void 0 ? void 0 : _f.seePwd) && (React.createElement("span", { onClick: function (e) { return setSeePwd(!seePwd); }, style: { cursor: "pointer" } },
                seePwd ? (_g = options.password) === null || _g === void 0 ? void 0 : _g.onIcon : (_h = options.password) === null || _h === void 0 ? void 0 : _h.offIcon,
                " "))));
    }
}
exports.default = Input;
//# sourceMappingURL=input.js.map