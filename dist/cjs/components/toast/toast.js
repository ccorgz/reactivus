"use strict";
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
        successIcon.className = "reactivus-toast-icon-success";
        var successIconStem = document.createElement("span");
        successIconStem.className = "reactivus-checkmark-stem";
        var successIconKick = document.createElement("span");
        successIconKick.className = "reactivus-checkmark-kick";
        successIcon.appendChild(successIconStem);
        successIcon.appendChild(successIconKick);
        return successIcon;
    },
    danger: function () {
        var dangerIcon = document.createElement("span");
        dangerIcon.innerText = "!";
        dangerIcon.className = "reactivus-toast-icon-danger";
        return dangerIcon;
    },
    warning: function () {
        var dangerIcon = document.createElement("span");
        dangerIcon.className = "reactivus-toast-icon-warning";
        return dangerIcon;
    },
    info: function () {
        var dangerIcon = document.createElement("span");
        dangerIcon.innerText = "i";
        dangerIcon.className = "reactivus-toast-icon-info";
        return dangerIcon;
    },
};
// DEFINE A STRING FOR THE TOAST CONTAINER ID
var toastContainerId = "reactivus-toast-container";
// METHOD THAT HANDLE THE TOAST CONTAINER
var ToastContainer = function (props) {
    // PERSISTS THE CONTAINER DATA INTO LOCALSTORAGE
    localStorage.setItem("reactivus.toast.container.props", JSON.stringify(props));
    return (react_1.default.createElement("div", { id: toastContainerId, className: "reactivus-toast-container-box ".concat(props.position
            ? "reactivus-toast-" + props.position
            : "reactivus-toast-top-right") }));
};
exports.ToastContainer = ToastContainer;
// PRIVATE METHOD TO APPEND A TOAST TO THE CONTAINER
var appendToastToContainer = function (toastElement) {
    var _a, _b;
    var container = document.getElementById(toastContainerId);
    var containerProps = JSON.parse((_a = localStorage.getItem("reactivus.toast.container.props")) !== null && _a !== void 0 ? _a : "");
    toastElement.classList.add(containerProps.position
        ? containerProps.position == "bottom-right" ||
            containerProps.position == "top-right"
            ? "reactivus-toast-show-right"
            : "reactivus-toast-show-left"
        : "reactivus-toast-show-left");
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
    setTimeout(function () {
        if (containerProps.autoClose &&
            toastElement &&
            toastElement.parentNode === container) {
            toastElement.style.animation = containerProps.position
                ? containerProps.position == "bottom-right" ||
                    containerProps.position == "top-right"
                    ? "hideToRight .2s ease forwards"
                    : "hideToLeft .2s ease forwards"
                : "hideToLeft .2s ease forwards";
            setTimeout(function () {
                container === null || container === void 0 ? void 0 : container.removeChild(toastElement);
            }, 350);
        }
    }, (_b = containerProps.autoClose) !== null && _b !== void 0 ? _b : 3000);
};
// TOAST BOX
var createToast = function (style, text, props) {
    var _a;
    // DEFINES THE CONTAINER PROPS OBJECT
    var containerProps = props
        ? props
        : JSON.parse((_a = localStorage.getItem("reactivus.toast.container.props")) !== null && _a !== void 0 ? _a : "");
    var toastElement = document.createElement("div");
    toastElement.id = "reactivus-toast-box";
    toastElement.className = "reactivus-toast-box reactivus-toast-".concat(style);
    var toastContentElement = document.createElement("div");
    toastContentElement.className = "reactivus-toast-content-box";
    var toastContentIconElement = icons[style]();
    var toastContentTextElement = document.createElement("div");
    toastContentTextElement.innerText = text;
    toastContentElement.appendChild(toastContentIconElement);
    toastContentElement.appendChild(toastContentTextElement);
    var timeBarElement = document.createElement("div");
    timeBarElement.className = "reactivus-toast-time-bar";
    if (containerProps.autoClose) {
        timeBarElement.style.animation = "toastTimeBar ".concat(containerProps.autoClose / 1000, "s linear");
    }
    toastElement.appendChild(toastContentElement);
    toastElement.appendChild(timeBarElement);
    return toastElement;
};
// METHOD TO HANDLE A NEW SUCCESS TOAST
var success = function (text, props) {
    var successToast = createToast("success", text, props);
    appendToastToContainer(successToast);
};
// METHOD TO HANDLE A NEW DANGER TOAST
var danger = function (text, props) {
    var successToast = createToast("danger", text, props);
    appendToastToContainer(successToast);
};
// METHOD TO HANDLE A NEW INFO TOAST
var info = function (text, props) {
    var successToast = createToast("info", text, props);
    appendToastToContainer(successToast);
};
// METHOD TO HANDLE A NEW WARNING TOAST
var warning = function (text, props) {
    var successToast = createToast("warning", text, props);
    appendToastToContainer(successToast);
};
// RETURN OBJECT
var toast = {
    success: success,
    danger: danger,
    info: info,
    warning: warning,
};
// DEFAULT EXPORT
exports.default = toast;
//# sourceMappingURL=toast.js.map