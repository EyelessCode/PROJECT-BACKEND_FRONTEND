"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleHttp = void 0;
const handleHttp = (res, error, errorBruto) => {
    console.error(errorBruto);
    res.status(500).json({ error });
};
exports.handleHttp = handleHttp;
//# sourceMappingURL=error.until.js.map