/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE.md
 */
var __extends=this&&this.__extends||function(t,r){function e(){this.constructor=t}for(var i in r)r.hasOwnProperty(i)&&(t[i]=r[i]);t.prototype=null===r?Object.create(r):(e.prototype=r.prototype,new e)};define(["require","exports","../Types","./QueryParams","../Collections/Dictionaries/OrderedStringKeyDictionary"],function(t,r,e,i,n){"use strict";var o="&",s="=",u=function(t){function r(r,e){void 0===e&&(e=!0),t.call(this),this.importQuery(r,e)}return __extends(r,t),r.prototype.importQuery=function(t,r){return void 0===r&&(r=!0),e["default"].isString(t)?this.importFromString(t,r):Array.isArray(t)?this.importPairs(t):this.importMap(t),this},r.prototype.importFromString=function(t,r,e){void 0===r&&(r=!0),void 0===e&&(e=!0);var n=this;return i.parse(t,function(t,r){if(n.containsKey(t)){var e=n.getValue(t);Array.isArray(e)?e.push(r):n.setValue(t,[e,r])}else n.setValue(t,r)},r,e),this},r.init=function(t,e){return void 0===e&&(e=!0),new r(t,e)},r.prototype.encode=function(t){for(var r=[],e=this.keys,n=0;n<e.length;n++)for(var u=e[n],a=this.getValue(u),p=0,c=Array.isArray(a)?a:[a];p<c.length;p++){var y=c[p];r.push(u+s+i.encodeValue(y))}return(r.length&&t?"?":"")+r.join(o)},r.prototype.toString=function(){return this.encode()},r}(n["default"]);Object.defineProperty(r,"__esModule",{value:!0}),r["default"]=u});
//# sourceMappingURL=QueryBuilder.js.map
