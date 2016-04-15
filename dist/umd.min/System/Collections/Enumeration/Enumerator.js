/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE.md
 */
!function(e){if("object"==typeof module&&"object"==typeof module.exports){var r=e(require,exports);void 0!==r&&(module.exports=r)}else"function"==typeof define&&define.amd&&define(["require","exports","../../Types","./ArrayEnumerator","./IndexEnumerator"],e)}(function(e,r){"use strict";function t(e){if(!e)return p;if(Array.isArray(e))return new i["default"](e);if(!f["default"].isPrimitive(e)){if(f["default"].isArrayLike(e))return new a["default"](function(){return{source:e,length:e.length,pointer:0,step:1}});if(n(e))return e.getEnumerator()}throw new Error("Unknown enumerable.")}function n(e){return f["default"].hasMemberOfType(e,"getEnumerator",f["default"].FUNCTION)}function o(e){return f["default"].hasMemberOfType(e,"moveNext",f["default"].FUNCTION)}function u(e,r){if(e){if(f["default"].isArrayLike(e)){for(var t=0;t<e.length;++t)r(e[t],t);return}if(n(e)&&(e=e.getEnumerator()),o(e))for(var u=0;e.moveNext()&&r(e.current,u++)!==!1;);}}var f=e("../../Types"),i=e("./ArrayEnumerator"),a=e("./IndexEnumerator"),c=function(){function e(){}return Object.defineProperty(e.prototype,"current",{get:function(){},enumerable:!0,configurable:!0}),e.prototype.moveNext=function(){return!1},e.prototype.reset=function(){},e.prototype.dispose=function(){},e}(),p=new c;Object.freeze(p),r.empty=p,r.from=t,r.isEnumerable=n,r.isEnumerator=o,r.forEach=u});
//# sourceMappingURL=Enumerator.js.map
