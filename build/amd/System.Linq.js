﻿define("TypeScript.NET/System.Linq",["TypeScript.NET/System"],
function (System) {
	var __extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};
	(function(n){(function(t){"use strict";function r(t){return n.DisposableBase.assertIsNotDisposed(t,"Enumerable was disposed.")}var i=n.Collections.EnumeratorBase,o=n.Functions,u=n.Types,f,e;(function(n){n[n.Break=0]="Break";n[n.Return=1]="Return";n[n.Skip=2]="Skip"})(t.EnumerableAction||(t.EnumerableAction={}));f=t.EnumerableAction;e=function(e){function s(n,t){e.call(this,t);this.enumeratorFactory=n}return __extends(s,e),s.fromArray=function(n){return new t.ArrayEnumerable(n)},s.prototype.getEnumerator=function(){return this.assertIsNotDisposed(),this.enumeratorFactory()},s.prototype._onDispose=function(){e.prototype._onDispose.call(this);this.enumeratorFactory=null},s.choice=function(n){return new s(function(){return new i(null,function(t){return t.yieldReturn(n[Math.floor(Math.random()*n.length)])})})},s.cycle=function(n){return new s(function(){var t;return new i(function(){return t=0},function(i){return t>=n.length&&(t=0),i.yieldReturn(n[t++])})})},s.empty=function(){return new s(function(){return new i(null,o.False)})},s.repeat=function(n,t){return typeof t==u.Number&&(t<=0||isNaN(t))?s.empty():(t||(t=Infinity),new s(function(){var r;return new i(function(){return r=0},function(i){return r++<t?i.yieldReturn(n):!1})}))},s.repeatWithFinalize=function(n,t){return new s(function(){var r;return new i(function(){return r=n()},function(n){return n.yieldReturn(r)},function(){r!=null&&(t(r),r=null)})})},s.make=function(n){return s.repeat(n,1)},s.range=function(n,t,r){return t?(r||(r=1),new s(function(){var u,f;return new i(function(){f=0;u=n-r},function(n){return f++<t?n.yieldReturn(u+=r):n.yieldBreak()})})):s.empty()},s.rangeDown=function(n,t,i){return i?i*=-1:i=-1,s.range(n,t,i)},s.toInfinity=function(n,t){return s.rangeTo(n,Infinity,t)},s.toNegativeInfinity=function(n,t){return s.rangeTo(n,-Infinity,t)},s.rangeTo=function(n,t,r){return n||(n=0),r||(r=1),r=Math.abs(r),new s(function(){var u;return n<t?new i(function(){return u=n-r},function(n){var i=u+=r;return i<=t?n.yieldReturn(i):n.yieldBreak()}):new i(function(){return u=n+r},function(n){var i=u-=r;return i>=t?n.yieldReturn(i):n.yieldBreak()})})},s.matches=function(n,t,r){return typeof r=="undefined"&&(r=""),t instanceof RegExp&&(r+=t.ignoreCase?"i":"",r+=t.multiline?"m":"",t=t.source),r.indexOf("g")===-1&&(r+="g"),new s(function(){var u;return new i(function(){u=new RegExp(t,r)},function(t){var i=u.exec(n);return i?t.yieldReturn(i):!1})})},s.generate=function(n,t){return typeof t==u.Number&&(t<=0||isNaN(t))?s.empty():(t||(t=Infinity),new s(function(){var r;return new i(function(){return r=0},function(i){return r++<t?i.yieldReturn(n()):!1})}))},s.unfold=function(n,t){return new s(function(){var u,r;return new i(function(){return u=!0},function(i){return u?(u=!1,r=n,i.yieldReturn(r)):(r=t(r),i.yieldReturn(r))})})},s.defer=function(n){return new s(function(){var t;return new i(function(){return t=n().getEnumerator()},function(n){return t.moveNext()?n.yieldReturn(t.current):n.yieldBreak()},function(){return t.dispose()})})},s.forEach=function(t,i){var r=t,u=0;n.using(r.getEnumerator(),function(n){while(n.moveNext()&&i(n.current,u++)!==!1);})},s.prototype.assertIsNotDisposed=function(n){return typeof n=="undefined"&&(n="Enumerable was disposed."),e.prototype.assertIsNotDisposed.call(this,n)},s.prototype.forEach=function(t){var i=this,r;i.assertIsNotDisposed();r=0;n.using(i.getEnumerator(),function(n){while(i.assertIsNotDisposed()&&n.moveNext()&&t(n.current,r++)!==!1);})},s.prototype.toArray=function(n){var t=[];return n?this.where(n).toArray():(this.forEach(function(n){return t.push(n)}),t)},s.prototype.asEnumerable=function(){var n=this;return new s(function(){return n.getEnumerator()})},s.prototype.doAction=function(n){var u=this,t=!u.assertIsNotDisposed();return new s(function(){var e,o;return new i(function(){r(t);o=0;e=u.getEnumerator()},function(i){for(r(t);e.moveNext();){var u=n(e.current,o++);if(u===!1||u===f)return i.yieldBreak();if(u!==2)return i.yieldReturn(e.current)}return!1},function(){return e.dispose()})},function(){return t=!0})},s.prototype.force=function(){this.assertIsNotDisposed();this.doAction(function(){return!1})},s.prototype.skip=function(n){return this.assertIsNotDisposed(),!n||n<0?this.asEnumerable():this.doAction(function(t,i){return i<n?2:1})},s.prototype.skipWhile=function(n){this.assertIsNotDisposed();var t=!0;return this.doAction(function(i,r){return t&&(t=n(i,r)),t?2:1})},s.prototype.take=function(n){return this.assertIsNotDisposed(),!n||n<0?s.empty():this.doAction(function(t,i){return i<n})},s.prototype.select=function(n){var u=this,f=!u.assertIsNotDisposed();return n.length<2?new t.WhereSelectEnumerable(u,null,n):new s(function(){var t,e;return new i(function(){r(f);e=0;t=u.getEnumerator()},function(i){return r(f),t.moveNext()?i.yieldReturn(n(t.current,e++)):!1},function(){return t.dispose()})},function(){return f=!0})},s.prototype.selectMany=function(t,r){var u=this;return r||(r=function(n,t){return t}),new s(function(){var e,f,o;return new i(function(){e=u.getEnumerator();f=undefined;o=0},function(i){if(f===undefined&&!e.moveNext())return!1;do{if(!f){var u=t(e.current,o++);if(!u)continue;f=n.Collections.Enumerator.from(u)}if(f.moveNext())return i.yieldReturn(r(e.current,f.current));f.dispose();f=null}while(e.moveNext());return!1},function(){try{e.dispose();e=null}finally{f&&f.dispose();f=null}})})},s.prototype.choose=function(n){var u=this,t=!u.assertIsNotDisposed();return new s(function(){var f,e;return new i(function(){r(t);e=0;f=u.getEnumerator()},function(i){for(r(t);f.moveNext();){var u=n(f.current,e++);if(u!==null&&u!==undefined)return i.yieldReturn(u)}return!1},function(){return f.dispose()})},function(){return t=!0})},s.prototype.where=function(n){var u=this,f=!u.assertIsNotDisposed();return n.length<2?new t.WhereEnumerable(u,n):new s(function(){var t,e;return new i(function(){r(f);e=0;t=u.getEnumerator()},function(i){for(r(f);t.moveNext();)if(n(t.current,e++))return i.yieldReturn(t.current);return!1},function(){return t.dispose()})},function(){return f=!0})},s.prototype.ofType=function(n){var t;switch(n){case Number:t=u.Number;break;case String:t=u.String;break;case Boolean:t=u.Boolean;break;case Function:t=u.Function;break;default:t=null}return t===null?this.where(function(t){return t instanceof n}):this.where(function(n){return typeof n===t})},s.prototype.except=function(t,u){var e=this,f=!e.assertIsNotDisposed();return new s(function(){var h,o;return new i(function(){r(f);h=e.getEnumerator();o=new n.Collections.Dictionary(u);t&&s.forEach(t,function(n){return o.addByKeyValue(n,!0)})},function(n){for(r(f);h.moveNext();){var t=h.current;if(!o.containsKey(t))return o.addByKeyValue(t,!0),n.yieldReturn(t)}return!1},function(){h.dispose();o.clear()})},function(){return f=!0})},s.prototype.distinct=function(n){return this.except(null,n)},s.prototype.distinctUntilChanged=function(n){var u=this,t=!u.assertIsNotDisposed();return new s(function(){var f,e,o=!0;return new i(function(){r(t);f=u.getEnumerator()},function(i){for(r(t);f.moveNext();){var u=n(f.current);if(o)o=!1;else if(e===u)continue;return e=u,i.yieldReturn(f.current)}return!1},function(){return f.dispose()})},function(){return t=!0})},s.prototype.reverse=function(){var n=this,t=!n.assertIsNotDisposed();return new s(function(){var u,f;return new i(function(){r(t);u=n.toArray();f=u.length},function(n){return f>0&&n.yieldReturn(u[--f])},function(){return u.length=0})},function(){return t=!0})},s.prototype.shuffle=function(){var n=this,t=!n.assertIsNotDisposed();return new s(function(){var u;return new i(function(){r(t);u=n.toArray()},function(n){var t=u.length,i;return t?(i=Math.floor(Math.random()*t),n.yieldReturn(u.splice(i,1).pop())):!1},function(){return u.length=0})},function(){return t=!0})},s.prototype.count=function(n){var i=this,t;return i.assertIsNotDisposed(),t=0,n?i.forEach(function(i,r){n(i,r)&&++t}):i.forEach(function(){++t}),t},s.prototype.all=function(n){var t=!0;return this.forEach(function(i){if(!n(i))return t=!1,!1}),t},s.prototype.any=function(n){var t=!1;return n?this.forEach(function(i){return t=n(i),!t}):this.forEach(function(){return t=!0,!1}),t},s.prototype.isEmpty=function(){return!this.any()},s.prototype.contains=function(n,t){return t?this.any(function(i){return t(i)===n}):this.any(function(t){return t===n})},s.prototype.defaultIfEmpty=function(n){typeof n=="undefined"&&(n=null);var t=this,u=!t.assertIsNotDisposed();return new s(function(){var f,e=!0;return new i(function(){r(u);f=t.getEnumerator()},function(t){return(r(u),f.moveNext())?(e=!1,t.yieldReturn(f.current)):e?(e=!1,t.yieldReturn(n)):!1},function(){return f.dispose()})})},s.prototype.elementAt=function(n){var i=this,r,t;if(i.assertIsNotDisposed(),t=!1,i.forEach(function(i,u){if(u==n)return r=i,t=!0,!1}),!t)throw new Error("index is less than 0 or greater than or equal to the number of elements in source.");return r},s.prototype.elementAtOrDefault=function(n,t){var i,u,r;return typeof t=="undefined"&&(t=null),i=this,i.assertIsNotDisposed(),r=!1,i.forEach(function(t,i){if(i==n)return u=t,r=!0,!1}),r?u:t},s.prototype.first=function(n){var t=this,r,i;if(t.assertIsNotDisposed(),n)return t.where(n).first();if(i=!1,t.forEach(function(n){return r=n,i=!0,!1}),!i)throw new Error("first:No element satisfies the condition.");return r},s.prototype.firstOrDefault=function(n,t){var i,u,r;return(typeof t=="undefined"&&(t=null),i=this,i.assertIsNotDisposed(),n)?i.where(n).firstOrDefault(null,t):(r=!1,i.forEach(function(n){return u=n,r=!0,!1}),r?u:t)},s.prototype.last=function(n){var t=this,r,i;if(t.assertIsNotDisposed(),n)return t.where(n).last();if(i=!1,t.forEach(function(n){i=!0;r=n}),!i)throw new Error("last:No element satisfies the condition.");return r},s.prototype.lastOrDefault=function(n,t){var i,u,r;return(typeof t=="undefined"&&(t=null),i=this,i.assertIsNotDisposed(),n)?i.where(n).lastOrDefault(null,t):(r=!1,i.forEach(function(n){r=!0;u=n}),r?u:t)},s.prototype.single=function(n){var i=this,r,t;if(i.assertIsNotDisposed(),n)return i.where(n).single();if(t=!1,i.forEach(function(n){if(t)throw new Error("single:sequence contains more than one element.");else t=!0,r=n}),!t)throw new Error("single:No element satisfies the condition.");return r},s.prototype.singleOrDefault=function(n,t){var i,u,r;return(typeof t=="undefined"&&(t=null),i=this,i.assertIsNotDisposed(),n)?i.where(n).singleOrDefault(null,t):(r=!1,i.forEach(function(n){if(r)throw new Error("single:sequence contains more than one element.");else r=!0,u=n}),r?u:t)},s.prototype.share=function(){var t=this,n;return t.assertIsNotDisposed(),new s(function(){return new i(function(){n||(n=t.getEnumerator())},function(t){return n.moveNext()&&t.yieldReturn(n.current)})},function(){n&&n.dispose()})},s.prototype.memoize=function(){var u=this,t=!u.assertIsNotDisposed(),n;return new s(function(){var e,f;return new i(function(){r(t);e||(e=u.getEnumerator());n||(n=[]);f=-1},function(i){return(r(t),f++,f>=n.length)?e.moveNext()?i.yieldReturn(n[f]=e.current):!1:i.yieldReturn(n[f])})},function(){t=!0;n&&(n.length=0);n=null})},s.prototype.catchError=function(n){var t=this,u=!t.assertIsNotDisposed();return new s(function(){var f;return new i(function(){try{r(u);f=t.getEnumerator()}catch(n){}},function(t){try{if(r(u),f.moveNext())return t.yieldReturn(f.current)}catch(i){n(i)}return!1},function(){return f.dispose()})})},s.prototype.finallyAction=function(n){var t=this,u=!t.assertIsNotDisposed();return new s(function(){var f;return new i(function(){r(u);f=t.getEnumerator()},function(n){return r(u),f.moveNext()?n.yieldReturn(f.current):!1},function(){try{f.dispose()}finally{n()}})})},s}(n.DisposableBase);t.Enumerable=e})(n.Linq||(n.Linq={}));var t=n.Linq})(System||(System={})),function(n){(function(t){var i=function(i){function r(t){var r=this;r._source=t;i.call(this,function(){return r.assertIsNotDisposed(),new n.Collections.ArrayEnumerator(function(){return r.assertIsNotDisposed("The underlying ArrayEnumerable was disposed."),r._source})})}return __extends(r,i),r.prototype._onDispose=function(){i.prototype._onDispose;this._source=null},Object.defineProperty(r.prototype,"source",{get:function(){return this._source},enumerable:!0,configurable:!0}),r.prototype.toArray=function(){return this.source?this.source.slice():[]},r.prototype.asEnumerable=function(){return new r(this._source)},r.prototype.forEach=function(n){var r=this,i,t;if(r.assertIsNotDisposed(),i=r._source,i)for(t=0;t<i.length;++t)if(n(i[t],t)===!1)break},r.prototype.any=function(n){var r=this,t,u;return r.assertIsNotDisposed(),t=r._source,u=t?t.length:0,u&&(!n||i.prototype.any.call(this,n))},r.prototype.count=function(n){var u=this,t,r;return u.assertIsNotDisposed(),t=u._source,r=t?t.length:0,r&&(n?i.prototype.count.call(this,n):r)},r.prototype.elementAt=function(n){var r=this,t;return r.assertIsNotDisposed(),t=this._source,n<t.length&&n>=0?t[n]:i.prototype.elementAt.call(this,n)},r.prototype.elementAtOrDefault=function(n,t){var r,i;return typeof t=="undefined"&&(t=null),r=this,r.assertIsNotDisposed(),i=this._source,n<i.length&&n>=0?i[n]:t},r.prototype.first=function(n){var r=this,t;return r.assertIsNotDisposed(),t=this._source,t&&t.length&&!n?t[0]:i.prototype.first.call(this,n)},r.prototype.firstOrDefault=function(n,t){var u,r;return typeof t=="undefined"&&(t=null),u=this,u.assertIsNotDisposed(),r=this._source,r&&r.length?n?i.prototype.firstOrDefault.call(this,n,t):r[0]:t},r.prototype.last=function(n){var u=this,t,r;return u.assertIsNotDisposed(),t=this._source,r=t.length,r&&!n?t[r-1]:i.prototype.last.call(this,n)},r.prototype.lastOrDefault=function(n,t){var f,r,u;return typeof t=="undefined"&&(t=null),f=this,f.assertIsNotDisposed(),r=this._source,u=r.length,u?n?i.prototype.firstOrDefault.call(this,n,t):r[u-1]:t},r.prototype.skip=function(i){var r=this;return!i||i<0?r.asEnumerable():new t.Enumerable(function(){return new n.Collections.ArrayEnumerator(function(){return r._source},i)})},r.prototype.takeExceptLast=function(n){typeof n=="undefined"&&(n=1);var t=this,i=t._source?t._source.length:0;return t.take(i-n)},r.prototype.takeFromLast=function(n){var t=this,i=t._source?t._source.length:0;return t.skip(i-n)},r.prototype.reverse=function(){var i=this;return new t.Enumerable(function(){return new n.Collections.ArrayEnumerator(function(){return i._source},i._source?i._source.length-1:0,-1)})},r.prototype.memoize=function(){return new r(this._source)},r}(t.Enumerable);t.ArrayEnumerable=i})(n.Linq||(n.Linq={}));var t=n.Linq}(System||(System={})),function(n){(function(n){var t=function(n){function t(t,i){n.call(this,i);this._groupKey=t}return __extends(t,n),Object.defineProperty(t.prototype,"key",{get:function(){return this._groupKey},enumerable:!0,configurable:!0}),t}(n.ArrayEnumerable);n.Grouping=t})(n.Linq||(n.Linq={}));var t=n.Linq}(System||(System={})),function(n){(function(t){var i=function(){function i(n){this._dictionary=n}return Object.defineProperty(i.prototype,"count",{get:function(){return this._dictionary.count},enumerable:!0,configurable:!0}),i.prototype.get=function(n){return this._dictionary.get(n)},i.prototype.contains=function(n){return this._dictionary.containsKey(n)},i.prototype.getEnumerator=function(){var r=this,i;return new n.Collections.EnumeratorBase(function(){return i=r._dictionary.getEnumerator()},function(n){if(!i.moveNext())return!1;var r=i.current;return n.yieldReturn(new t.Grouping(r.key,r.value))},function(){return i.dispose()})},i}();t.Lookup=i})(n.Linq||(n.Linq={}));var t=n.Linq}(System||(System={})),function(n){(function(t){var i=function(i){function r(n,t){i.call(this,null);this.prevSource=n;this.prevPredicate=t}return __extends(r,i),r.prototype.where=function(n){if(n.length>1)return i.prototype.where.call(this,n);var t=this.prevPredicate,u=function(i){return t(i)&&n(i)};return new r(this.prevSource,u)},r.prototype.select=function(n){return n.length>1?i.prototype.select.call(this,n):new t.WhereSelectEnumerable(this.prevSource,this.prevPredicate,n)},r.prototype.getEnumerator=function(){var i=this.prevPredicate,r=this.prevSource,t;return new n.Collections.EnumeratorBase(function(){t=r.getEnumerator()},function(n){while(t.moveNext())if(i(t.current))return n.yieldReturn(t.current);return!1},function(){return t.dispose()})},r.prototype._onDispose=function(){i.prototype._onDispose.call(this);this.prevPredicate=null;this.prevSource=null},r}(t.Enumerable);t.WhereEnumerable=i})(n.Linq||(n.Linq={}));var t=n.Linq}(System||(System={})),function(n){(function(t){var i=function(i){function r(n,t,r){i.call(this,null);this.prevSource=n;this.prevPredicate=t;this.prevSelector=r}return __extends(r,i),r.prototype.where=function(n){return n.length>1?i.prototype.where.call(this,n):new t.WhereEnumerable(this,n)},r.prototype.select=function(n){if(n.length>1)return i.prototype.select.call(this,n);var t=this.prevSelector,u=function(i){return n(t(i))};return new r(this.prevSource,this.prevPredicate,u)},r.prototype.getEnumerator=function(){var i=this.prevPredicate,r=this.prevSelector,u=this.prevSource,t;return new n.Collections.EnumeratorBase(function(){t=u.getEnumerator()},function(n){while(t.moveNext())if(i==null||i(t.current))return n.yieldReturn(r(t.current));return!1},function(){return t.dispose()})},r.prototype._onDispose=function(){i.prototype._onDispose.call(this);this.prevPredicate=null;this.prevSource=null;this.prevSelector=null},r}(t.Enumerable);t.WhereSelectEnumerable=i})(n.Linq||(n.Linq={}));var t=n.Linq}(System||(System={})),function(n){(function(t){var r=function(r){function u(n,t,i,u){r.call(this,null);this.source=n;this.keySelector=t;this.descending=i;this.parent=u}return __extends(u,r),u.prototype.createOrderedEnumerable=function(n,t){return new u(this.source,n,t,this)},u.prototype.thenBy=function(n){return this.createOrderedEnumerable(n,!1)},u.prototype.thenByDescending=function(n){return this.createOrderedEnumerable(n,!0)},u.prototype.getEnumerator=function(){var f=this,u,r,e=0;return new n.Collections.EnumeratorBase(function(){u=[];r=[];t.Enumerable.forEach(f.source,function(n,t){u.push(n);r.push(t)});var n=i.create(f);n.generateKeys(u);r.sort(function(t,i){return n.compare(t,i)})},function(n){return e<r.length?n.yieldReturn(u[r[e++]]):!1},function(){u&&(u.length=0);u=null;r&&(r.length=0);r=null})},u.prototype._onDispose=function(){r.prototype._onDispose.call(this);this.source=null;this.keySelector=null;this.descending=null;this.parent=null},u}(t.Enumerable),i;t.OrderedEnumerable=r;i=function(){function t(n,t,i){this.keySelector=n;this.descending=t;this.child=i;this.keys=null}return t.create=function(n,i){typeof i=="undefined"&&(i=null);var r=new t(n.keySelector,n.descending,i);return n.parent?t.create(n.parent,r):r},t.prototype.generateKeys=function(n){for(var t=this,r=n.length,f=t.keySelector,u=new Array(r),i=0;i<r;++i)u[i]=f(n[i]);t.keys=u;t.child&&t.child.generateKeys(n)},t.prototype.compare=function(t,i){var r=this,e=r.keys,u=n.compare(e[t],e[i]),f;return u==0?(f=r.child,f?f.compare(t,i):n.compare(t,i)):r.descending?-u:u},t}()})(n.Linq||(n.Linq={}));var t=n.Linq}(System||(System={}));
	return System.Linq;
});