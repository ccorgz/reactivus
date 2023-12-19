"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
require("./warningIcon.css");
var WarningSvg = function () {
    return (react_1.default.createElement("svg", { version: "1.1", viewBox: "0 0 130.2 130.2" },
        react_1.default.createElement("circle", { className: "path circle", fill: "none", stroke: "#FFA50070", "stroke-width": "6", "stroke-miterlimit": "10", cx: "65.1", cy: "65.1", r: "62.1" }),
        react_1.default.createElement("text", { className: "path warning", x: "65.1", y: "75", "font-size": "70", "font-family": "Arial, sans-serif", fill: "#FFA50070", "text-anchor": "middle", "dominant-baseline": "middle" }, "!")));
};
exports.default = WarningSvg;
//# sourceMappingURL=warning.js.map