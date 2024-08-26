"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
require("../../../styles/inputs/switch.css");
function Switch(_a) {
    var defaultChecked = _a.defaultChecked, label = _a.label, activeColor = _a.activeColor, onChange = _a.onChange, checked = _a.checked;
    var _b = (0, react_1.useState)(defaultChecked ? defaultChecked : checked ? checked : false), isInputChecked = _b[0], setIsInputChecked = _b[1];
<<<<<<< HEAD
=======
    var switchRef = (0, react_1.useRef)(null);
>>>>>>> 44ee67923725c91f9ba2173ca356cb2f7a55ccde
    var handleInputChange = function (e) {
        setIsInputChecked(e.target.checked);
        onChange && onChange({ value: e.target.checked });
    };
    return (react_1.default.createElement("div", { className: "r-switch-main-box ".concat(isInputChecked ? "r-switch-active" : "", "  r-box-shadow"), style: {
            backgroundColor: isInputChecked && activeColor ? "".concat(activeColor) : "",
        } },
        react_1.default.createElement("label", { className: "r-switch-main-label" }, label ? label : ""),
<<<<<<< HEAD
        react_1.default.createElement("label", { htmlFor: "r-switch-checkbox", className: "r-switch-checkbox-label" },
            react_1.default.createElement("div", { className: "r-switch-button-box" })),
        react_1.default.createElement("input", { id: "r-switch-checkbox", type: "checkbox", checked: checked !== null && checked !== void 0 ? checked : isInputChecked, onChange: handleInputChange })));
=======
        react_1.default.createElement("label", { className: "r-switch-checkbox-label", onClick: function () {
                if (switchRef.current) {
                    switchRef.current.click();
                }
            } },
            react_1.default.createElement("div", { className: "r-switch-button-box" })),
        react_1.default.createElement("input", { id: "r-switch-checkbox", type: "checkbox", checked: checked !== null && checked !== void 0 ? checked : isInputChecked, onChange: handleInputChange, ref: switchRef })));
>>>>>>> 44ee67923725c91f9ba2173ca356cb2f7a55ccde
}
exports.default = Switch;
//# sourceMappingURL=switch.js.map