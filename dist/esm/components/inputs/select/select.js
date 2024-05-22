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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// IMPORT REACT HOOKS
var react_1 = __importStar(require("react"));
// IMPORT STYLESHEET FILE FOR THE SELECT COMPONENT
require("../../../styles/inputs/select.css");
var react_dom_1 = __importDefault(require("react-dom"));
// EXPORTS COMPONENT BY DEFAULT
function Select(_a) {
    var label = _a.label, width = _a.width, value = _a.value, defaultValue = _a.defaultValue, options = _a.options, optionLabel = _a.optionLabel, selectedLabel = _a.selectedLabel, optionTemplate = _a.optionTemplate, filter = _a.filter, filterPlaceHolder = _a.filterPlaceHolder, filterBy = _a.filterBy, placeholder = _a.placeholder, multiSelect = _a.multiSelect, onChange = _a.onChange, selectAll = _a.selectAll, className = _a.className, rest = __rest(_a, ["label", "width", "value", "defaultValue", "options", "optionLabel", "selectedLabel", "optionTemplate", "filter", "filterPlaceHolder", "filterBy", "placeholder", "multiSelect", "onChange", "selectAll", "className"]);
    var _b = (0, react_1.useState)(false), showOptions = _b[0], setShowOptions = _b[1];
    var _c = (0, react_1.useState)(options !== null && options !== void 0 ? options : []), optionsList = _c[0], setOptionsList = _c[1];
    var _d = (0, react_1.useState)(placeholder !== null && placeholder !== void 0 ? placeholder : ""), optionLabelState = _d[0], setOptionLabelState = _d[1];
    var _e = (0, react_1.useState)([]), selectionList = _e[0], setSelectionList = _e[1];
    var _f = (0, react_1.useState)(0), higherLengthString = _f[0], setHigherLengthString = _f[1];
    var titleBoxRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        if (options == optionsList) {
            return;
        }
        setOptionsList(options !== null && options !== void 0 ? options : []);
        document.addEventListener("scroll", handleGetInputCoordinates);
        return function () {
            document.removeEventListener("scroll", handleGetInputCoordinates);
        };
    }, [titleBoxRef, value, options]);
    (0, react_1.useEffect)(function () {
        if (optionsList.length > 0) {
            var higgherValueString = 0;
            for (var i = 0; i < options.length; i++) {
                var option = options[i][optionLabel];
                higgherValueString =
                    option.length >= higgherValueString
                        ? option.length
                        : higgherValueString;
            }
            setHigherLengthString(higgherValueString > optionLabel.length
                ? higgherValueString
                : optionLabel.length);
        }
    }, [optionsList]);
    (0, react_1.useEffect)(function () {
        setSelectionList(typeof value == "string" ? [value] : value);
    }, [value]);
    (0, react_1.useEffect)(function () {
        if (defaultValue && defaultValue[optionLabel] && !value) {
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
                var _a;
                return selectedLabel ? v[selectedLabel] : (_a = v[optionLabel]) !== null && _a !== void 0 ? _a : "";
            }).join(", ");
        }
        else {
            valueToSet =
                values && values[0] && typeof values != "string"
                    ? values.join(", ")
                    : "";
        }
        valueToSet =
            valueToSet.slice(-2) == ", " ? valueToSet.slice(0, -2) : valueToSet;
        if (valueToSet == "" && !placeholder) {
            valueToSet = selectedLabel ? selectedLabel : optionLabel;
        }
        else if (valueToSet == "" && placeholder) {
            valueToSet = placeholder;
        }
        if (value && value[optionLabel]) {
            valueToSet = selectedLabel ? value[selectedLabel] : value[optionLabel];
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
        if (showOptions) {
            handleGetInputCoordinates();
        }
        else {
            var element = document.querySelector(".reactivus-select-options-box");
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
        var x = titleBoxRect.x, y = titleBoxRect.y, height = titleBoxRect.height, width = titleBoxRect.width, top = titleBoxRect.top, bottom = titleBoxRect.bottom, left = titleBoxRect.left, right = titleBoxRect.right;
        var isClosestToTop = top < window.innerHeight - bottom;
        var maxHeight = isClosestToTop ? (window.innerHeight - y) / 2 : y / 2;
        var inputProps = {
            x: x,
            y: y,
            height: height,
            width: width,
            top: top,
            bottom: bottom,
            isClosestToTop: isClosestToTop,
            topDistance: y + height + 15,
            bottomDistance: window.innerHeight - y + height / 2,
            maxHeight: maxHeight,
            left: left,
            right: right,
        };
        appendOptionsBoxToBody(inputProps);
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
            setOptionsList(filteredList !== null && filteredList !== void 0 ? filteredList : []);
        }
        else {
            setOptionsList(options !== null && options !== void 0 ? options : []);
        }
    };
    var isChecked = function (option) {
        var isOptionInList = selectionList.some(function (p) { return JSON.stringify(p) === JSON.stringify(option); });
        return isOptionInList;
    };
    function appendOptionsBoxToBody(inputProps) {
        var div = document.createElement("div");
        div.className = "reactivus-select-options-box reactivus-select-options-box-".concat(showOptions ? "show" : "hide");
        div.style.top = inputProps.isClosestToTop
            ? inputProps.topDistance + "px"
            : "";
        div.style.bottom = inputProps.isClosestToTop
            ? ""
            : inputProps.bottomDistance + "px";
        div.style.left = inputProps.left + "px";
        div.style.width = inputProps.width + "px";
        div.style.flexDirection = inputProps.isClosestToTop
            ? "column"
            : "column-reverse";
        div.style.maxHeight = showOptions ? inputProps.maxHeight + "px" : "0";
        var filterCheckbox = filter || selectAll;
        if (filterCheckbox) {
            var span = document.createElement("span");
            span.className = "reactivus-select-item-box reactivus-select-filter-box";
            span.style.zIndex = "9999";
            if (selectAll) {
                var selectAllCheckbox = document.createElement("input");
                selectAllCheckbox.type = "checkbox";
                selectAllCheckbox.id = "reactivusSelectAllCheckbox";
                selectAllCheckbox.className = "reactivus-select-filter-box-checkbox";
                selectAllCheckbox.onclick = function () {
                    if (selectionList.length === optionsList.length) {
                        setSelectionList([]);
                    }
                    else {
                        setSelectionList(optionsList);
                    }
                };
                span.appendChild(selectAllCheckbox);
            }
            if (!filter) {
                var filterBoxLabel = document.createElement("span");
                filterBoxLabel.className = "reactivus-select-filter-box-label";
                filterBoxLabel.textContent = "Todos";
                filterBoxLabel.onclick = function () {
                    if (selectionList.length === optionsList.length) {
                        setSelectionList([]);
                    }
                    else {
                        setSelectionList(optionsList);
                    }
                    var allCheck = document.getElementById("reactivusSelectAllCheckbox");
                    if (allCheck && allCheck.checked) {
                        allCheck.checked = false;
                    }
                    else if (allCheck) {
                        allCheck.checked = true;
                    }
                };
                span.appendChild(filterBoxLabel);
            }
            if (filter) {
                var filterBoxText = document.createElement("input");
                filterBoxText.type = "text";
                filterBoxText.className = "reactivus-select-filter-box-text";
                filterBoxText.placeholder = filterPlaceHolder !== null && filterPlaceHolder !== void 0 ? filterPlaceHolder : "Search";
                filterBoxText.onchange = function (e) {
                    var target = e.target;
                    handleOptionsFilter(target.value);
                };
                span.appendChild(filterBoxText);
            }
            var closeIconSpan = document.createElement("span");
            closeIconSpan.className = "reactivus-select-title-icon-close";
            closeIconSpan.onclick = function () {
                setSelectionList([]);
                setShowOptions(!showOptions);
                var allCheck = document.getElementById("reactivusSelectAllCheckbox");
                if (allCheck && allCheck.checked) {
                    allCheck.checked = false;
                }
            };
            var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
            svg.setAttribute("viewBox", "-8 -8 48 48");
            svg.setAttribute("width", "18");
            svg.setAttribute("height", "18");
            svg.setAttribute("fill", "none");
            svg.setAttribute("stroke", "currentColor");
            svg.setAttribute("strokeWidth", "4");
            svg.setAttribute("strokeLinecap", "round");
            svg.setAttribute("strokeLinejoin", "round");
            var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
            path.setAttribute("d", "M2,2 L30,30 M2,30 L30,2");
            svg.appendChild(path);
            closeIconSpan.appendChild(svg);
            span.appendChild(closeIconSpan);
            div.appendChild(span);
        }
        optionsList === null || optionsList === void 0 ? void 0 : optionsList.forEach(function (option, index) {
            var _a;
            var span = document.createElement("span");
            span.className = "reactivus-select-item-box";
            span.onclick = function () {
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
                    onChange && onChange({ value: option });
                    if (!value) {
                        value = option;
                        handleOptionLabelStateDefinition([option]);
                    }
                    setShowOptions(false);
                }
            };
            if (multiSelect) {
                var checkbox = document.createElement("input");
                checkbox.type = "checkbox";
                checkbox.checked = isChecked(option);
                checkbox.onchange = function () { }; // Placeholder function, as onchange handler required for input[type="checkbox"]
                span.appendChild(checkbox);
            }
            var optionText = optionTemplate
                ? optionTemplate(option)
                : (_a = option[optionLabel !== null && optionLabel !== void 0 ? optionLabel : ""]) !== null && _a !== void 0 ? _a : option;
            if (react_1.default.isValidElement(optionText)) {
                // ReactDOM.render(optionText, span);
                var root = react_dom_1.default.createRoot(span);
                root.render(optionText);
            }
            else {
                span.textContent = optionText;
            }
            div.appendChild(span);
        });
        document.body.appendChild(div);
    }
    return (react_1.default.createElement("div", __assign({}, rest, { className: "reactivus-select-input-box" + " " + (className ? className : ""), style: {
            width: width
                ? width
                : higherLengthString
                    ? higherLengthString * 9 + "px"
                    : "50px",
        } }),
        label && react_1.default.createElement("label", null, label),
        react_1.default.createElement("div", { className: "reactivus-select-title-box", ref: titleBoxRef, onClick: function () {
                setShowOptions(!showOptions);
            } },
            react_1.default.createElement("div", { className: "reactivus-select-title-label" }, optionLabelState),
            react_1.default.createElement("span", { className: "reactivus-select-title-icon-open" },
                react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "18", height: "18", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
                    react_1.default.createElement("path", { d: "M6 9l6 6 6-6" }))))));
}
exports.default = Select;
{
    /* <div
          className={`reactivus-select-options-box reactivus-select-options-box-${
            showOptions ? "show" : "hide"
          }`}
          style={{
            top: inputProps.isClosestToTop ? inputProps.topDistance : undefined,
            bottom: inputProps.isClosestToTop
              ? undefined
              : inputProps.bottomDistance,
            left: inputProps.left,
            width: inputProps.width,
            flexDirection: inputProps.isClosestToTop
              ? "column"
              : "column-reverse",
            maxHeight: showOptions ? inputProps.maxHeight : 0,
          }}
        >
          {(filter || selectAll) && (
            <span
              className={`reactivus-select-item-box reactivus-select-filter-box`}
              style={{
                zIndex: 9999, // Set a high z-index value
              }}
            >
              {selectAll && (
                <input
                  type={"checkbox"}
                  id={"reactivusSelectAllCheckbox"}
                  className={`reactivus-select-filter-box-checkbox`}
                  onClick={() => {
                    if (selectionList.length == options.length) {
                      setSelectionList([]);
                    } else {
                      setSelectionList(options);
                    }
                  }}
                />
              )}
              {!filter && (
                <span
                  className={`reactivus-select-filter-box-label`}
                  onClick={() => {
                    if (selectionList.length == options.length) {
                      setSelectionList([]);
                    } else {
                      setSelectionList(options);
                    }
                    const allCheck: any = document.getElementById(
                      "reactivusSelectAllCheckbox"
                    );
                    if (allCheck && allCheck.checked) {
                      allCheck.checked = false;
                    } else if (allCheck) {
                      allCheck.checked = true;
                    }
                  }}
                >
                  Todos
                </span>
              )}
              {filter && (
                <input
                  type="text"
                  className={`reactivus-select-filter-box-text`}
                  placeholder={filterPlaceHolder ?? "Search"}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleOptionsFilter(e.target.value)
                  }
                />
              )}
              <span
                className="reactivus-select-title-icon-close"
                onClick={() => {
                  setSelectionList([]);
                  setShowOptions(!showOptions);
                  const allCheck: any = document.getElementById(
                    "reactivusSelectAllCheckbox"
                  );
                  if (allCheck && allCheck.checked) {
                    allCheck.checked = false;
                  }
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="-8 -8 48 48"
                  width="18"
                  height="18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2,2 L30,30 M2,30 L30,2" />
                </svg>
              </span>
            </span>
          )}
          {optionsList?.map((option: any, index: any) => {
            return (
              <span
                className={`reactivus-select-item-box`}
                onClick={() => {
                  if (multiSelect) {
                    setSelectionList((prev: any) => {
                      const isOptionInList = prev.some(
                        (p: any) => JSON.stringify(p) === JSON.stringify(option)
                      );
  
                      if (isOptionInList) {
                        return prev.filter(
                          (p: any) => JSON.stringify(p) !== JSON.stringify(option)
                        );
                      } else {
                        return [...prev, option];
                      }
                    });
                  } else {
                    onChange && onChange({ value: option });
                    if (!value) {
                      value = option;
                      handleOptionLabelStateDefinition([option]);
                    }
                    setShowOptions(false);
                  }
                }}
                key={index}
              >
                {multiSelect && (
                  <input
                    type={"checkbox"}
                    checked={isChecked(option)}
                    onChange={() => {}}
                  />
                )}
                {optionTemplate
                  ? optionTemplate(option)
                  : option[optionLabel] ?? option}
              </span>
            );
          })}
        </div> */
}
//# sourceMappingURL=select.js.map