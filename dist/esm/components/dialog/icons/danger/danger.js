"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
require("./dangerIcon.css");
var SuccessSvg = function () {
    return (react_1.default.createElement("svg", { version: "1.1", viewBox: "0 0 130.2 130.2" },
        react_1.default.createElement("circle", { className: "path circle", fill: "none", stroke: "#CB2A29B9", "stroke-width": "6", "stroke-miterlimit": "10", cx: "65.1", cy: "65.1", r: "62.1" }),
        react_1.default.createElement("line", { className: "path cross1", fill: "none", stroke: "#CB2A29B9", "stroke-width": "6", "stroke-linecap": "round", x1: "40.2", y1: "40.2", x2: "90", y2: "90" }),
        react_1.default.createElement("line", { className: "path cross2", fill: "none", stroke: "#CB2A29B9", "stroke-width": "6", "stroke-linecap": "round", x1: "90", y1: "40.2", x2: "40.2", y2: "90" })));
};
exports.default = SuccessSvg;
//# sourceMappingURL=danger.js.map