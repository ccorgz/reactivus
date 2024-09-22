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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToastContainer = void 0;
// IMPORT REACT IN FULL AND REACT USESTATE HOOK
var react_1 = __importDefault(require("react"));
// IMPORT STYLESHEET FILE FOR THE DIALOG COMPONENT
require("../../styles/toast.css");
// CREATE ALL THE ICONS
var icons = {
    success: function () {
        var successIcon = document.createElement("span");
        successIcon.className = "r-toast-icon-success";
        successIcon.innerHTML = "✓";
        return successIcon;
    },
    error: function () {
        var dangerIcon = document.createElement("span");
        dangerIcon.innerText = "!";
        dangerIcon.className = "r-toast-icon-error";
        return dangerIcon;
    },
    warn: function () {
        var dangerIcon = document.createElement("span");
        dangerIcon.className = "r-toast-icon-warn";
        return dangerIcon;
    },
    info: function () {
        var dangerIcon = document.createElement("span");
        dangerIcon.innerText = "i";
        dangerIcon.className = "r-toast-icon-info";
        return dangerIcon;
    },
};
// DEFINE A STRING FOR THE TOAST CONTAINER ID
var toastContainerId = "reactivus-toast-container";
// METHOD THAT HANDLE THE TOAST CONTAINER
var ToastContainer = function (props) {
    var _a;
    var dataAttributeString = JSON.stringify(props !== null && props !== void 0 ? props : "");
    return (react_1.default.createElement("div", { className: "r-toast-container-box ".concat(props.position ? "r-toast-" + props.position : "r-toast-top-right") },
        react_1.default.createElement("div", __assign({ className: "r-toast-container-toasts-box", id: toastContainerId }, (_a = {}, _a["data-props"] = dataAttributeString, _a)))));
};
exports.ToastContainer = ToastContainer;
// PRIVATE METHOD TO APPEND A TOAST TO THE CONTAINER
var appendToastToContainer = function (toastElement) {
    var container = document.getElementById(toastContainerId);
    var containerDataProps = (container === null || container === void 0 ? void 0 : container.dataset) ? container === null || container === void 0 ? void 0 : container.dataset.props : "";
    var containerProps = containerDataProps
        ? JSON.parse(containerDataProps !== null && containerDataProps !== void 0 ? containerDataProps : "")
        : {};
    toastElement.classList.add(containerProps.position
        ? containerProps.position == "bottom-right" ||
            containerProps.position == "top-right"
            ? "r-toast-show-right"
            : "r-toast-show-left"
        : "r-toast-show-left");
    if (container) {
        container.appendChild(toastElement);
        containerProps.closeOnClick &&
            toastElement.addEventListener("click", function () {
                toastElement.style.animation = containerProps.position
                    ? containerProps.position == "bottom-right" ||
                        containerProps.position == "top-right"
                        ? "hideToRight .2s ease forwards"
                        : "hideToLeft .2s ease forwards"
                    : "hideToLeft .2s ease forwards";
                setTimeout(function () {
                    if (toastElement && toastElement.parentNode === container) {
                        container === null || container === void 0 ? void 0 : container.removeChild(toastElement);
                    }
                }, 350);
            });
    }
    else {
        console.error("Container with ID \"".concat(toastContainerId, "\" not found."));
    }
};
var createCloseSvgIcon = function () {
    var svgNamespace = "http://www.w3.org/2000/svg";
    var svgElementBox = document.createElement("div");
    svgElementBox.className = "r-toast-close-svg";
    var svgElement = document.createElementNS(svgNamespace, "svg");
    svgElement.setAttribute("xmlns", svgNamespace);
    svgElement.setAttribute("viewBox", "-8 -8 48 48");
    svgElement.setAttribute("width", "18");
    svgElement.setAttribute("height", "18");
    svgElement.setAttribute("fill", "none");
    svgElement.setAttribute("stroke", "currentColor");
    svgElement.setAttribute("stroke-width", "6");
    svgElement.setAttribute("stroke-linecap", "round");
    svgElement.setAttribute("stroke-linejoin", "round");
    var pathElement = document.createElementNS(svgNamespace, "path");
    pathElement.setAttribute("d", "M2,2 L30,30 M2,30 L30,2");
    svgElement.appendChild(pathElement);
    svgElementBox.appendChild(svgElement);
    return svgElementBox;
};
// TOAST BOX
var createToast = function (style, text, props) {
    var _a, _b;
    // DEFINES THE CONTAINER PROPS OBJECT
    var container = document.getElementById(toastContainerId);
    var containerDataProps = (container === null || container === void 0 ? void 0 : container.dataset) ? container === null || container === void 0 ? void 0 : container.dataset.props : "";
    var containerProps = containerDataProps
        ? JSON.parse(containerDataProps !== null && containerDataProps !== void 0 ? containerDataProps : "")
        : {};
    var toastElement = document.createElement("div");
    toastElement.id = "r-toast-box";
    toastElement.className = "r-toast-box r-toast-".concat(style, " r-toast-").concat((_a = containerProps.theme) !== null && _a !== void 0 ? _a : "light", "-").concat(style);
    var toastCloseSvgContent = createCloseSvgIcon();
    toastElement.appendChild(toastCloseSvgContent);
    var toastContentElement = document.createElement("div");
    toastContentElement.className = "r-toast-content-box";
    var toastContentIconBoxElement = document.createElement("span");
    toastContentIconBoxElement.className = "r-toast-icon-box";
    var toastContentIconElement = icons[style]();
    toastContentIconBoxElement.appendChild(toastContentIconElement);
    var toastContentTextElement = document.createElement("div");
    toastContentTextElement.innerText = text;
    toastContentElement.appendChild(toastContentIconBoxElement);
    toastContentElement.appendChild(toastContentTextElement);
    var timeBarElement = document.createElement("div");
    timeBarElement.className = "r-toast-time-bar";
    if (containerProps.autoClose) {
        timeBarElement.style.animation = "toastTimeBar ".concat(containerProps.autoClose / 1000, "s linear");
    }
    toastElement.appendChild(toastContentElement);
    toastElement.appendChild(timeBarElement);
    var autoCloseTimeout;
    var remainingTime = (_b = containerProps.autoClose) !== null && _b !== void 0 ? _b : 3000;
    var startTime;
    var startAutoCloseTimeout = function () {
        startTime = Date.now();
        autoCloseTimeout = setTimeout(function () {
            if (containerProps.autoClose &&
                toastElement &&
                toastElement.parentNode === container) {
                toastElement.style.animation = containerProps.position
                    ? containerProps.position === "bottom-right" ||
                        containerProps.position === "top-right"
                        ? "hideToRight .4s ease forwards"
                        : "hideToLeft .4s ease forwards"
                    : "hideToLeft .4s ease forwards";
                setTimeout(function () {
                    if (container && container.contains(toastElement)) {
                        container.removeChild(toastElement);
                    }
                }, 550);
            }
        }, remainingTime);
    };
    startAutoCloseTimeout();
    var handleMouseEnter = function () {
        if (containerProps.pauseOnHover) {
            timeBarElement.style.animationPlayState = "paused";
            clearTimeout(autoCloseTimeout);
            remainingTime -= Date.now() - startTime;
        }
    };
    var handleMouseLeave = function () {
        if (containerProps.pauseOnHover) {
            timeBarElement.style.animationPlayState = "running";
            startAutoCloseTimeout();
        }
    };
    toastElement.addEventListener("mouseenter", handleMouseEnter);
    toastElement.addEventListener("mouseleave", handleMouseLeave);
    return toastElement;
};
// METHOD TO HANDLE A NEW SUCCESS TOAST
var success = function (text, props) {
    var successToast = createToast("success", text, props);
    appendToastToContainer(successToast);
};
// METHOD TO HANDLE A NEW DANGER TOAST
var error = function (text, props) {
    var successToast = createToast("error", text, props);
    appendToastToContainer(successToast);
};
// METHOD TO HANDLE A NEW INFO TOAST
var info = function (text, props) {
    var successToast = createToast("info", text, props);
    appendToastToContainer(successToast);
};
// METHOD TO HANDLE A NEW WARN TOAST
var warn = function (text, props) {
    var successToast = createToast("warn", text, props);
    appendToastToContainer(successToast);
};
// METHOD TO DISMISS ALL TOASTS
var dismiss = function () {
    var container = document.getElementById(toastContainerId);
    while (container && container.firstChild) {
        container.removeChild(container.firstChild);
    }
};
// RETURN OBJECT
var toast = {
    success: success,
    error: error,
    info: info,
    warn: warn,
    dismiss: dismiss,
};
// DEFAULT EXPORT
exports.default = toast;
//# sourceMappingURL=toast.js.map