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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// IMPORT REACT HOOKS
var react_1 = __importStar(require("react"));
// IMPORT STYLESHEET FILE FOR THE SELECT COMPONENT
require("../../../styles/inputs/select.css");
var client_1 = __importDefault(require("react-dom/client"));
// EXPORTS COMPONENT BY DEFAULT
function Select(_a) {
    var label = _a.label, width = _a.width, value = _a.value, defaultValue = _a.defaultValue, options = _a.options, optionLabel = _a.optionLabel, selectedLabel = _a.selectedLabel, optionTemplate = _a.optionTemplate, filter = _a.filter, filterPlaceHolder = _a.filterPlaceHolder, filterBy = _a.filterBy, placeholder = _a.placeholder, multiSelect = _a.multiSelect, onChange = _a.onChange, selectAll = _a.selectAll, className = _a.className, rest = __rest(_a, ["label", "width", "value", "defaultValue", "options", "optionLabel", "selectedLabel", "optionTemplate", "filter", "filterPlaceHolder", "filterBy", "placeholder", "multiSelect", "onChange", "selectAll", "className"]);
    var _b = (0, react_1.useState)(false), showOptions = _b[0], setShowOptions = _b[1];
    var _c = (0, react_1.useState)(options !== null && options !== void 0 ? options : []), optionsList = _c[0], setOptionsList = _c[1];
    var _d = (0, react_1.useState)(placeholder !== null && placeholder !== void 0 ? placeholder : ""), optionLabelState = _d[0], setOptionLabelState = _d[1];
    var _e = (0, react_1.useState)([]), selectionList = _e[0], setSelectionList = _e[1];
    var titleBoxRef = (0, react_1.useRef)(null);
    optionLabel = !optionLabel ? "" : (optionLabel !== null && optionLabel !== void 0 ? optionLabel : '');
    (0, react_1.useEffect)(function () {
        var handleResize = function () {
            setShowOptions(false);
        };
        window.addEventListener("resize", handleResize);
        return function () {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    (0, react_1.useEffect)(function () {
        if (options == optionsList) {
            return;
        }
        setOptionsList(options !== null && options !== void 0 ? options : []);
    }, [titleBoxRef, value, options]);
    (0, react_1.useEffect)(function () {
        if (optionsList.length > 0 && typeof options[0] != "string") {
            var higgherValueString = 0;
            for (var i = 0; i < options.length; i++) {
                var option = options[i][optionLabel !== null && optionLabel !== void 0 ? optionLabel : ''];
                higgherValueString =
                    option.length >= higgherValueString
                        ? option.length
                        : higgherValueString;
            }
        }
    }, [optionsList]);
    (0, react_1.useEffect)(function () {
        setSelectionList(typeof value == "string" ? [value] : value);
    }, [value]);
    (0, react_1.useEffect)(function () {
        if (defaultValue && optionLabel != undefined && defaultValue[optionLabel] && !value) {
            setOptionLabelState(defaultValue[optionLabel]);
        }
        else {
            handleOptionLabelStateDefinition(selectionList);
        }
    }, [selectionList]);
    var handleOptionLabelStateDefinition = function (values) {
        var valueToSet = "";
        if (multiSelect) {
            valueToSet = values === null || values === void 0 ? void 0 : values.map(function (v) {
                return selectedLabel ? v[selectedLabel] : optionLabel ? v[optionLabel] : "";
            }).join(", ");
        }
        else {
            valueToSet =
                values && values[0] && typeof values != "string"
                    ? values.join(", ")
                    : "";
        }
        valueToSet =
            valueToSet && valueToSet.slice(-2) == ", "
                ? valueToSet.slice(0, -2)
                : valueToSet;
        if (valueToSet == "" && !placeholder) {
            valueToSet = selectedLabel ? selectedLabel : (optionLabel !== null && optionLabel !== void 0 ? optionLabel : '');
        }
        else if (valueToSet == "" && placeholder) {
            valueToSet = placeholder;
        }
        if (value && optionLabel != undefined && value[optionLabel]) {
            valueToSet = selectedLabel ? value[selectedLabel] : optionLabel ? value[optionLabel] : '';
        }
        setOptionLabelState(valueToSet);
    };
    var handleClickOutside = function (event) {
        if (titleBoxRef.current &&
            !titleBoxRef.current.contains(event.target) &&
            event.target.closest(".r-select-options-box") === null) {
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
        if (showOptions) {
            handleGetInputCoordinates();
        }
        else {
            var element = document.querySelector(".r-select-options-box");
            if (element && element.parentNode) {
                element.parentNode.removeChild(element);
            }
        }
        document.addEventListener("click", handleClick);
        return function () {
            document.removeEventListener("click", handleClick);
        };
    }, [titleBoxRef, showOptions]);
    var handleGetInputCoordinates = function () {
        var titleBoxRect = titleBoxRef.current.getBoundingClientRect();
        var scrollY = window.scrollY || window.pageYOffset;
        var scrollX = window.scrollX || window.pageXOffset;
        var adjustedY = titleBoxRect.y + scrollY;
        var adjustedX = titleBoxRect.x + scrollX;
        var height = titleBoxRect.height, width = titleBoxRect.width, top = titleBoxRect.top, bottom = titleBoxRect.bottom, left = titleBoxRect.left, right = titleBoxRect.right;
        var isClosestToTop = top < window.innerHeight - bottom;
        var maxHeight = isClosestToTop
            ? (window.innerHeight - adjustedY) / 2
            : adjustedY / 2;
        var inputProps = {
            x: adjustedX,
            y: adjustedY,
            height: height,
            width: width,
            top: top + scrollY,
            bottom: bottom + scrollY,
            isClosestToTop: isClosestToTop,
            topDistance: adjustedY + height + 15,
            bottomDistance: window.innerHeight - adjustedY - 7.5 + height / 2,
            maxHeight: maxHeight,
            left: left + scrollX,
            right: right + scrollX,
        };
        appendOptionsBoxToBody(inputProps);
    };
    var SelectOptionsBox = function () {
        var _a = (0, react_1.useState)(selectionList ? selectionList : []), optionsSelectionList = _a[0], setOptionsSelectionList = _a[1];
        var _b = (0, react_1.useState)(optionsList !== null && optionsList !== void 0 ? optionsList : []), optionsFilterList = _b[0], setOptionsFilterList = _b[1];
        (0, react_1.useEffect)(function () {
            var allCheck = document.getElementById("reactivusSelectAllCheckbox");
            if (optionsSelectionList.length == options.length && allCheck) {
                allCheck.checked = true;
            }
            else if (allCheck) {
                allCheck.checked = false;
            }
        }, [optionsSelectionList]);
        var handleAllOptionsSelection = function () {
            var allCheck = document.getElementById("reactivusSelectAllCheckbox");
            if (allCheck && !allCheck.checked) {
                setSelectionList([]);
                setOptionsSelectionList([]);
            }
            else if (allCheck && allCheck.checked) {
                setSelectionList(options);
                setOptionsSelectionList(options);
            }
        };
        var handleOptionsFilter = function (filterText) {
            var _a;
            if (filterText != "" && filterBy) {
                var filteredList = [];
                var filterFields = (_a = filterBy === null || filterBy === void 0 ? void 0 : filterBy.split(",")) !== null && _a !== void 0 ? _a : [];
                for (var i = 0; i < options.length; i++) {
                    var optionValue = options[i];
                    for (var j = 0; j < filterFields.length; j++) {
                        if (optionValue[filterFields[j]]
                            .toString()
                            .toUpperCase()
                            .includes(filterText.toUpperCase())) {
                            filteredList.push(optionValue);
                        }
                    }
                }
                setOptionsFilterList(filteredList !== null && filteredList !== void 0 ? filteredList : []);
            }
            else {
                setOptionsFilterList(options !== null && options !== void 0 ? options : []);
            }
        };
        return (react_1.default.createElement("div", null,
            (filter || selectAll) && (react_1.default.createElement("span", { className: "r-select-item-box r-select-filter-box", style: {
                    zIndex: 9998,
                } },
                selectAll && (react_1.default.createElement("input", { type: "checkbox", id: "reactivusSelectAllCheckbox", className: "r-select-filter-box-checkbox", onClick: function () {
                        handleAllOptionsSelection();
                    } })),
                !filter && (react_1.default.createElement("span", { className: "r-select-filter-box-label", onClick: function () {
                        handleAllOptionsSelection();
                    } }, "Todos")),
                filter && (react_1.default.createElement("input", { type: "text", className: "r-select-filter-box-text", placeholder: filterPlaceHolder !== null && filterPlaceHolder !== void 0 ? filterPlaceHolder : "Search", onChange: function (e) {
                        return handleOptionsFilter(e.target.value);
                    } })),
                react_1.default.createElement("span", { className: "r-select-title-icon-close", onClick: function () {
                        setSelectionList([]);
                        setOptionsSelectionList([]);
                        setShowOptions(!showOptions);
                        var allCheck = document.getElementById("reactivusSelectAllCheckbox");
                        if (allCheck && allCheck.checked) {
                            allCheck.checked = false;
                        }
                    } },
                    react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "-8 -8 48 48", width: "18", height: "18", fill: "none", stroke: "currentColor", strokeWidth: "4", strokeLinecap: "round", strokeLinejoin: "round" },
                        react_1.default.createElement("path", { d: "M2,2 L30,30 M2,30 L30,2" }))))), optionsFilterList === null || optionsFilterList === void 0 ? void 0 :
            optionsFilterList.map(function (option, index) {
                return (react_1.default.createElement("span", { className: "r-select-item-box " +
                        (JSON.stringify(optionsSelectionList).includes(JSON.stringify(option))
                            ? "r-item-selected"
                            : ""), onClick: function () {
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
                            setOptionsSelectionList(function (prev) {
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
                            onChange && onChange({ value: option });
                            if (!value) {
                                value = option;
                                handleOptionLabelStateDefinition([option]);
                                setOptionsSelectionList(option);
                                typeof option == "string" && setSelectionList([option]);
                            }
                            setShowOptions(false);
                        }
                    }, key: index },
                    multiSelect && (react_1.default.createElement("input", { className: "r-select-item-box-checkbox", type: "checkbox", checked: JSON.stringify(optionsSelectionList).includes(JSON.stringify(option)) })),
                    optionTemplate
                        ? optionTemplate(option)
                        : optionLabel ? option[optionLabel] : option));
            })));
    };
    function appendOptionsBoxToBody(inputProps) {
        var largerOption = 0;
        for (var i = 0; i < optionsList.length; i++) {
            if (optionLabel) {
                if (optionsList[i][optionLabel].toString().length > largerOption) {
                    largerOption = optionsList[i][optionLabel].toString().length;
                }
            }
            else {
                if (optionsList[i].length > largerOption) {
                    largerOption = optionsList[i].length;
                }
            }
        }
        var div = document.createElement("div");
        div.className = "r-select-options-box r-box-shadow r-select-options-box-".concat(showOptions ? "show" : "hide");
        div.style.top = inputProps.isClosestToTop
            ? inputProps.topDistance - 10 + "px"
            : "";
        div.style.bottom = inputProps.isClosestToTop
            ? ""
            : inputProps.bottomDistance - 8 + "px";
        div.style.left = inputProps.left + "px";
        div.style.width = largerOption * 9.5 + 15 + "px";
        (div.style.minWidth = width
            ? width
            : label
                ? label.length * 9 + 15 + "px"
                : "50px"),
            (div.style.flexDirection = inputProps.isClosestToTop
                ? "column"
                : "column-reverse");
        div.style.maxHeight = showOptions ? inputProps.maxHeight + "px" : "0";
        document.body.appendChild(div);
        var root = client_1.default.createRoot(div);
        root.render(react_1.default.createElement(SelectOptionsBox, null));
    }
    return (react_1.default.createElement("div", __assign({}, rest, { className: "r-select-input-box " + " " + (className ? className : "") }),
        label && react_1.default.createElement("label", { className: "r-select-input-box-label" }, label),
        react_1.default.createElement("div", { className: "r-select-title-box r-box-shadow", ref: titleBoxRef, onClick: function () {
                setShowOptions(!showOptions);
            }, style: {
                width: width ? width : "auto",
                minWidth: width
                    ? width
                    : label
                        ? label.length * 9 + 15 + "px"
                        : "50px",
            } },
            react_1.default.createElement("div", { className: "r-select-title-label" }, optionLabelState),
            react_1.default.createElement("span", { className: "r-select-title-icon-open" },
                react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "18", height: "18", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
                    react_1.default.createElement("path", { d: "M6 9l6 6 6-6" }))))));
}
exports.default = Select;
//# sourceMappingURL=select.js.map