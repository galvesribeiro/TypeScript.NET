/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE.md
 */
define(["require","exports","./Types","./Exceptions/ArgumentException"],function(n,e,r,t){function u(n){return 0|n}var u;!function(n){function e(n){return Math.random()*n|0}function u(n){return i(n,"max"),0==n?0:(n+=n>0?1:-1,e(n))}function o(n){return r["default"].isNumber(n,!1)&&n==(0|n)}function i(n,e){var r=o(n);if(!r)throw new t["default"](e||"n","Must be an integer.");return r}n.random=u;var u;!function(n){function r(n){return e(n)}n.under=r}(u=n.random||(n.random={})),n.is=o,n.assert=i}(u||(u={})),Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=u});
//# sourceMappingURL=Integer.js.map
