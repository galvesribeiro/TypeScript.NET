/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE.md
 */
!function(e){if("object"==typeof module&&"object"==typeof module.exports){var o=e(require,exports);void 0!==o&&(module.exports=o)}else"function"==typeof define&&define.amd&&define(["require","exports","./Types"],e)}(function(e,o){function r(e,o,r){return void 0===r&&(r=!0),e===o||!r&&e==o||a(e)&&a(o)}function t(e,o,t){return void 0===t&&(t=!0),r(e,o,t)?0:e&&u["default"].hasMember(e,i)?e.compareTo(o):o&&u["default"].hasMember(o,i)?-o.compareTo(e):e>o||t&&(0===e&&0==o||null===e&&o===n)?1:o>e||t&&(0===o&&0==e||null===o&&e===n)?-1:NaN}var u=e("./Types"),a=u["default"].isTrueNaN,n=void 0;o.areEqual=r;var i="compareTo";o.compare=t});
//# sourceMappingURL=Compare.js.map
