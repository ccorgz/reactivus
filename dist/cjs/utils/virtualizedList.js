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
var VirtualizedList = function (_a) {
    var itemCount = _a.itemCount, itemHeight = _a.itemHeight, renderItem = _a.renderItem, height = _a.height;
    var _b = (0, react_1.useState)(0), scrollTop = _b[0], setScrollTop = _b[1];
    var listRef = (0, react_1.useRef)(null);
    var handleScroll = (0, react_1.useCallback)(function () {
        if (listRef.current) {
            setScrollTop(listRef.current.scrollTop);
        }
    }, []);
    var totalHeight = itemCount * itemHeight;
    var startIndex = Math.floor(scrollTop / itemHeight);
    var visibleItemCount = Math.ceil(height / itemHeight);
    var endIndex = Math.min(itemCount, startIndex + visibleItemCount);
    (0, react_1.useEffect)(function () {
        var currentList = listRef.current;
        if (currentList) {
            currentList.addEventListener('scroll', handleScroll);
        }
        return function () {
            if (currentList) {
                currentList.removeEventListener('scroll', handleScroll);
            }
        };
    }, [handleScroll]);
    return (react_1.default.createElement("div", { ref: listRef, style: {
            height: height,
            overflowY: 'auto',
            position: 'relative',
        } },
        react_1.default.createElement("div", { style: { height: totalHeight, position: 'relative' } }, Array.from({ length: endIndex - startIndex }, function (_, index) {
            var itemIndex = startIndex + index;
            return (react_1.default.createElement("div", { key: itemIndex, style: {
                    position: 'absolute',
                    top: itemIndex * itemHeight,
                    height: itemHeight,
                } }, renderItem(itemIndex)));
        }))));
};
exports.default = VirtualizedList;
//# sourceMappingURL=virtualizedList.js.map