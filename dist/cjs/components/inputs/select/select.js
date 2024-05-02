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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
// IMPORTA HOOKS DO REACT
var react_1 = __importStar(require("react"));
// IMPORTA FOLHA DE ESTILOS DO COMPONENTE
require("../../../styles/inputs/select.css");
// EXPORTA COMPONENTE POR PADRÃO
function Select(_a) {
    var icon = _a.icon, label = _a.label, width = _a.width, ref = _a.ref, value = _a.value, options = _a.options, optionLabel = _a.optionLabel, optionTemplate = _a.optionTemplate, filter = _a.filter, filterPlaceHolder = _a.filterPlaceHolder, filterBy = _a.filterBy, placeholder = _a.placeholder, onKeyDown = _a.onKeyDown, multiSelect = _a.multiSelect, onChange = _a.onChange, rest = __rest(_a, ["icon", "label", "width", "ref", "value", "options", "optionLabel", "optionTemplate", "filter", "filterPlaceHolder", "filterBy", "placeholder", "onKeyDown", "multiSelect", "onChange"]);
    var _b = (0, react_1.useState)(false), showOptions = _b[0], setShowOptions = _b[1];
    var _c = (0, react_1.useState)(options !== null && options !== void 0 ? options : []), optionsList = _c[0], setOptionsList = _c[1];
    var _d = (0, react_1.useState)(placeholder !== null && placeholder !== void 0 ? placeholder : ""), optionLabelState = _d[0], setOptionLabelState = _d[1];
    var _e = (0, react_1.useState)([]), selectionList = _e[0], setSelectionList = _e[1];
    var _f = (0, react_1.useState)(true), isClosestToTop = _f[0], setIsClosestToTop = _f[1];
    var titleBoxRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        if (options == optionsList) {
            return;
        }
        setOptionsList(options !== null && options !== void 0 ? options : []);
        var handleScroll = function () {
            if (titleBoxRef.current) {
                var rect = titleBoxRef.current.getBoundingClientRect();
                setIsClosestToTop(rect.top < window.innerHeight - rect.bottom);
            }
        };
        document.addEventListener("scroll", handleScroll);
        return function () {
            document.removeEventListener("scroll", handleScroll);
        };
    }, [titleBoxRef, value, options]);
    (0, react_1.useEffect)(function () {
        setSelectionList(value);
    }, [value]);
    (0, react_1.useEffect)(function () {
        handleOptionLabelStateDefinition(selectionList);
    }, [selectionList]);
    var handleOptionLabelStateDefinition = function (values) {
        var valueToSet = "";
        if (multiSelect) {
            valueToSet = values === null || values === void 0 ? void 0 : values.map(function (v) {
                var _a;
                return (_a = v[optionLabel]) !== null && _a !== void 0 ? _a : "";
            }).join(", ");
        }
        else {
            valueToSet = values[0] ? values.join(", ") : "";
        }
        valueToSet =
            valueToSet.slice(-2) == ", " ? valueToSet.slice(0, -2) : valueToSet;
        if (valueToSet == "" && !placeholder) {
            valueToSet = optionLabel;
        }
        else if (valueToSet == "" && placeholder) {
            valueToSet = placeholder;
        }
        if (value && value[optionLabel]) {
            valueToSet = value[optionLabel];
        }
        setOptionLabelState(valueToSet);
    };
    var handleClickOutside = function (event) {
        if (titleBoxRef.current &&
            !titleBoxRef.current.contains(event.target) &&
            event.target.closest(".reactivus-select-options-box") === null) {
            setShowOptions(false);
        }
    };
    (0, react_1.useEffect)(function () {
        if (!showOptions && onChange && multiSelect) {
            onChange({ value: selectionList });
        }
        var handleClick = function (event) {
            if (titleBoxRef.current && !titleBoxRef.current.contains(event.target)) {
                handleClickOutside(event);
            }
        };
        document.addEventListener("click", handleClick);
        return function () {
            document.removeEventListener("click", handleClick);
        };
    }, [titleBoxRef, showOptions]);
    var handleOptionsFilter = function (filterText) {
        if (filterText != "" && filterBy) {
            var newFilter = options === null || options === void 0 ? void 0 : options.filter(function (op) {
                return op[filterBy].toUpperCase().includes(filterText.toUpperCase());
            });
            setOptionsList(newFilter);
        }
        else {
            setOptionsList(options !== null && options !== void 0 ? options : []);
        }
    };
    var isChecked = function (option) {
        var isOptionInList = selectionList.some(function (p) { return JSON.stringify(p) === JSON.stringify(option); });
        return isOptionInList;
    };
    return (react_1.default.createElement("div", __assign({}, rest, { className: "reactivus-select-input-box", style: { width: width } }),
        label && react_1.default.createElement("label", null, label),
        react_1.default.createElement("div", { className: "reactivus-select-title-box", ref: titleBoxRef, onClick: function () {
                setShowOptions(!showOptions);
            } },
            react_1.default.createElement("div", { className: "reactivus-select-title-label" }, optionLabelState),
            react_1.default.createElement("span", { className: "reactivus-select-title-icon-close" },
                react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "18", height: "18", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
                    react_1.default.createElement("path", { d: "M6 9l6 6 6-6" })))),
        react_1.default.createElement("div", { className: "reactivus-select-options-box reactivus-select-options-box-".concat(showOptions ? "show" : "hide", " reactivus-select-options-box-").concat(isClosestToTop ? "bottom" : "top"), ref: ref !== null && ref !== void 0 ? ref : null },
            filter && (react_1.default.createElement("span", { className: "reactivus-select-item-box reactivus-select-filter-box" },
                react_1.default.createElement("input", { type: "text", placeholder: filterPlaceHolder !== null && filterPlaceHolder !== void 0 ? filterPlaceHolder : "Search", onChange: function (e) {
                        return handleOptionsFilter(e.target.value);
                    } }))), optionsList === null || optionsList === void 0 ? void 0 :
            optionsList.map(function (option, index) {
                var _a;
                return (react_1.default.createElement("span", { className: "reactivus-select-item-box", onClick: function () {
                        if (multiSelect) {
                            setSelectionList(function (prev) {
                                var isOptionInList = prev.some(function (p) { return JSON.stringify(p) === JSON.stringify(option); });
                                if (isOptionInList) {
                                    return prev.filter(function (p) { return JSON.stringify(p) !== JSON.stringify(option); });
                                }
                                else {
                                    return __spreadArray(__spreadArray([], prev, true), [option], false);
                                }
                            });
                        }
                        else {
                            console.log('MULTIPLE OFF');
                            onChange && onChange({ value: option });
                            setShowOptions(false);
                        }
                    }, key: index },
                    multiSelect && (react_1.default.createElement("input", { type: "checkbox", checked: isChecked(option), onChange: function () { } })),
                    optionTemplate
                        ? optionTemplate(option)
                        : (_a = option[optionLabel]) !== null && _a !== void 0 ? _a : option));
            }))));
}
exports.default = Select;
//# sourceMappingURL=select.js.map