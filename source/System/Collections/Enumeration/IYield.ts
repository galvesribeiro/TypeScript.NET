/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE.md
 */


interface IYield<T> {
	current: T;
	yieldReturn(value:T): boolean;
	yieldBreak(): boolean;
}
