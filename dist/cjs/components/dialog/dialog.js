"use strict";
"use client";
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// IMPORT REACTDOM FOR DOM OPERATIONS
var client_1 = __importDefault(require("react-dom/client"));
// IMPORT REACT IN FULL AND REACT USESTATE HOOK
var react_1 = __importStar(require("react"));
// IMPORT BUTTON COMPONENT
var button_1 = __importDefault(require("../button/button"));
// IMPORT SVG FILES TO COMPOSE THE DIALOG ICON
var success_1 = __importDefault(require("./icons/success/success"));
var danger_1 = __importDefault(require("./icons/danger/danger"));
var question_1 = __importDefault(require("./icons/question/question"));
var info_1 = __importDefault(require("./icons/info/info"));
var warning_1 = __importDefault(require("./icons/warning/warning"));
// GROUP THE ICONS SVG INTO AN OBJECT
var iconsList = {
    success: react_1.default.createElement(success_1.default, null),
    danger: react_1.default.createElement(danger_1.default, null),
    question: react_1.default.createElement(question_1.default, null),
    info: react_1.default.createElement(info_1.default, null),
    warning: react_1.default.createElement(warning_1.default, null),
};
// IMPORT STYLESHEET FILE FOR THE DIALOG COMPONENT
require("../../styles/dialog.css");
// FUNCTION TO APPEND THE NEW ALERT DOM COMPONENT INTO THE HTML FILE
var appendAlert = function (props) {
    var container = document.createElement("div");
    container.id = "r-dialog-container";
    document.body.appendChild(container);
    var root = client_1.default.createRoot(container);
    return new Promise(function (resolve) {
        root.render(react_1.default.createElement(AlertBox, { onClose: function (value) {
                setTimeout(function () {
                    root.unmount();
                    document.body.removeChild(container);
                    resolve(value);
                }, 100);
            }, alertProps: props }));
    });
};
// DIALOG CONTENT BOX
var AlertBox = function (_a) {
    var _b, _c, _d, _e, _f, _g;
    var onClose = _a.onClose, alertProps = _a.alertProps;
    var _h = (0, react_1.useState)(true), showAlert = _h[0], setShowAlert = _h[1];
    var handleConfirm = function () {
        setShowAlert(false);
        onClose({
            isConfirmed: true,
            isCanceled: false,
            isAborted: false,
        });
    };
    var handleCancel = function () {
        setShowAlert(false);
        onClose({
            isConfirmed: false,
            isCanceled: true,
            isAborted: false,
        });
    };
    var handleAbort = function () {
        setShowAlert(false);
        onClose({
            isConfirmed: false,
            isCanceled: false,
            isAborted: true,
        });
    };
    var handleOutsideAbort = function () {
        if ((alertProps === null || alertProps === void 0 ? void 0 : alertProps.allowClose) == false) {
            return;
        }
        else {
            handleAbort();
        }
    };
    // DOM ELEMENT OF THE CLOSE BUTTON
    var CloseAlertSvg = function () {
        return (react_1.default.createElement("svg", { version: "1.1", viewBox: "0 0 130.2 130.2" },
            react_1.default.createElement("line", { className: "r-path", fill: "none", stroke: "#606060", strokeWidth: "6", strokeLinecap: "round", x1: "40.2", y1: "40.2", x2: "90", y2: "90" }),
            react_1.default.createElement("line", { className: "r-path", fill: "none", stroke: "#606060", strokeWidth: "6", strokeLinecap: "round", x1: "90", y1: "40.2", x2: "40.2", y2: "90" })));
    };
    // RETURN THE CONTENT BOX DOM ELEMENT
    return (react_1.default.createElement("div", { className: "r-alertMainBox ".concat(showAlert ? "r-showAlertMainBox" : "r-hideAlertMainBox", " r-").concat((_b = alertProps === null || alertProps === void 0 ? void 0 : alertProps.position) !== null && _b !== void 0 ? _b : "r-center") },
        react_1.default.createElement("div", { className: "r-alertBackLayerBox", onClick: function () {
                handleOutsideAbort();
            } }),
        react_1.default.createElement("div", { className: "r-alertBox ".concat(showAlert ? "r-showAlertBox" : "r-hideAlertBox"), id: "r-dialog-box", style: {
                padding: (alertProps === null || alertProps === void 0 ? void 0 : alertProps.isCustomDialog) ? "10px" : "15px",
                gap: (alertProps === null || alertProps === void 0 ? void 0 : alertProps.isCustomDialog) ? "0px" : "20px",
                justifyContent: (alertProps === null || alertProps === void 0 ? void 0 : alertProps.isCustomDialog) ? "flex-start" : "center",
            } },
            (alertProps === null || alertProps === void 0 ? void 0 : alertProps.headerTitle) && (react_1.default.createElement("div", { className: "r-alertBoxHeaderTitle" }, alertProps === null || alertProps === void 0 ? void 0 : alertProps.headerTitle)),
            (alertProps === null || alertProps === void 0 ? void 0 : alertProps.showCloseButton) && (react_1.default.createElement("div", { className: "r-alertBoxCloseButton", onClick: function () {
                    handleAbort();
                } },
                react_1.default.createElement(CloseAlertSvg, null))),
            (alertProps === null || alertProps === void 0 ? void 0 : alertProps.icon) && (react_1.default.createElement("div", { className: "r-alertBoxTitleIcon" }, iconsList[(_c = alertProps === null || alertProps === void 0 ? void 0 : alertProps.icon) !== null && _c !== void 0 ? _c : "success"])),
            (alertProps === null || alertProps === void 0 ? void 0 : alertProps.title) && (react_1.default.createElement("div", { className: "r-alertBoxTitle" }, alertProps === null || alertProps === void 0 ? void 0 : alertProps.title)),
            react_1.default.createElement("div", { className: "r-alertBoxTitleContent" }, alertProps === null || alertProps === void 0 ? void 0 : alertProps.text),
            (alertProps === null || alertProps === void 0 ? void 0 : alertProps.customHeader) && (react_1.default.createElement("div", { className: "r-alertBoxTitleContent" }, alertProps === null || alertProps === void 0 ? void 0 : alertProps.customHeader)),
            (alertProps === null || alertProps === void 0 ? void 0 : alertProps.htmlx) && (react_1.default.createElement("div", { className: "r-htmlx-content" }, alertProps === null || alertProps === void 0 ? void 0 : alertProps.htmlx)),
            (alertProps === null || alertProps === void 0 ? void 0 : alertProps.html) && (react_1.default.createElement("div", { className: "r-alertBoxTitleContent", dangerouslySetInnerHTML: { __html: alertProps === null || alertProps === void 0 ? void 0 : alertProps.html } })),
            !(alertProps === null || alertProps === void 0 ? void 0 : alertProps.isCustomDialog) && react_1.default.createElement("div", { className: "r-alertButtonsBox" },
                (alertProps === null || alertProps === void 0 ? void 0 : alertProps.showConfirmButton) && (react_1.default.createElement(button_1.default, { label: (_d = alertProps === null || alertProps === void 0 ? void 0 : alertProps.confirmButtonText) !== null && _d !== void 0 ? _d : "Ok", style: (_e = alertProps === null || alertProps === void 0 ? void 0 : alertProps.confirmButtonStyle) !== null && _e !== void 0 ? _e : "btn-success", onClick: function () {
                        handleConfirm();
                    } })),
                (alertProps === null || alertProps === void 0 ? void 0 : alertProps.showCancelButton) && (react_1.default.createElement(button_1.default, { label: (_f = alertProps === null || alertProps === void 0 ? void 0 : alertProps.cancelButtonText) !== null && _f !== void 0 ? _f : "Cancel", style: (_g = alertProps === null || alertProps === void 0 ? void 0 : alertProps.cancelButtonStyle) !== null && _g !== void 0 ? _g : "btn-danger", onClick: function () {
                        handleCancel();
                    } }))))));
};
// METHOD TO FIRE THE DIALOG BOX
var show = function (props) { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, appendAlert(props)];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); };
var hide = function () { return __awaiter(void 0, void 0, void 0, function () {
    var alertBoxElement, container;
    return __generator(this, function (_a) {
        alertBoxElement = document.getElementById("r-dialog-box");
        container = document.getElementById("r-dialog-container");
        container === null || container === void 0 ? void 0 : container.classList.add("r-hideAlertMainBox");
        alertBoxElement === null || alertBoxElement === void 0 ? void 0 : alertBoxElement.classList.add("r-hideAlertBox");
        setTimeout(function () {
            if (container && document.body.contains(container)) {
                document.body.removeChild(container);
            }
        }, 500);
        return [2 /*return*/];
    });
}); };
// RETUR OBJECT
var dialog = {
    show: show,
    hide: hide,
};
// DEFAULT EXPORT
exports.default = dialog;
//# sourceMappingURL=dialog.js.map