"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function debounce(func, delay) {
    var timeoutId;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(function () {
            func.apply(void 0, args);
        }, delay);
    };
}
exports.default = debounce;
//# sourceMappingURL=debounce.js.map