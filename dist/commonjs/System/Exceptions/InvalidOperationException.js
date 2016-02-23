/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE.md
 * Based upon: https://msdn.microsoft.com/en-us/library/System.Exception%28v=vs.110%29.aspx
 */
'use strict';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var SystemException_1 = require('./SystemException');
var NAME = 'InvalidOperationException';
var InvalidOperationException = (function (_super) {
    __extends(InvalidOperationException, _super);
    function InvalidOperationException() {
        _super.apply(this, arguments);
    }
    InvalidOperationException.prototype.getName = function () {
        return NAME;
    };
    return InvalidOperationException;
}(SystemException_1.default));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = InvalidOperationException;
//# sourceMappingURL=InvalidOperationException.js.map