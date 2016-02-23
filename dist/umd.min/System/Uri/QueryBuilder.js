/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE.md
 */
var __extends=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)};!function(e){if("object"==typeof module&&"object"==typeof module.exports){var t=e(require,exports);void 0!==t&&(module.exports=t)}else"function"==typeof define&&define.amd&&define(["require","exports","../Types","./QueryParams","../Collections/Dictionaries/OrderedStringKeyDictionary"],e)}(function(e,t){"use strict";var r=e("../Types"),i=e("./QueryParams"),o=e("../Collections/Dictionaries/OrderedStringKeyDictionary"),n="&",s="=",u=function(e){function t(t,r){void 0===r&&(r=!0),e.call(this),this.importQuery(t,r)}return __extends(t,e),t.prototype.importQuery=function(e,t){return void 0===t&&(t=!0),r["default"].isString(e)?this.importFromString(e,t):Array.isArray(e)?this.importPairs(e):this.importMap(e),this},t.prototype.importFromString=function(e,t,r){void 0===t&&(t=!0),void 0===r&&(r=!0);var o=this;return i.parse(e,function(e,t){if(o.containsKey(e)){var r=o.getValue(e);Array.isArray(r)?r.push(t):o.setValue(e,[r,t])}else o.setValue(e,t)},t,r),this},t.init=function(e,r){return void 0===r&&(r=!0),new t(e,r)},t.prototype.encode=function(e){for(var t=[],r=this.keys,o=0;o<r.length;o++)for(var u=r[o],a=this.getValue(u),p=0,c=Array.isArray(a)?a:[a];p<c.length;p++){var y=c[p];t.push(u+s+i.encodeValue(y))}return(t.length&&e?"?":"")+t.join(n)},t.prototype.toString=function(){return this.encode()},t}(o["default"]);Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=u});
//# sourceMappingURL=QueryBuilder.js.map
