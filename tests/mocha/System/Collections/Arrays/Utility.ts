///<reference path="../../../import"/>

import * as Arrays from "../../../../../source/System/Collections/Array/Compare";
import * as ArrayUtility from "../../../../../source/System/Collections/Array/Utility";
import Stopwatch from "../../../../../source/System/Diagnostics/Stopwatch";
import {IArray} from "../../../../../source/System/Collections/Array/IArray";
var assert = require('../../../../../node_modules/assert/assert');


// Min/Max tests...
const minA = -10, maxA = 2000;

function initTestArray()
{
	return [5, minA, -1, maxA, -2, NaN, 20]
}

describe(".initialize(length)", ()=>
{
	function testLength(len:number):void
	{
		it("should be length " + len, ()=>
		{
			var a = ArrayUtility.initialize(len);
			assert.equal(a.length, len, ".length should be " + len);
		});
	}

	testLength(100);
	testLength(100000);
});


describe(".copy(source) & .equals(old,new)", ()=>
{
	it("should equal", ()=>
	{
		var s1 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 1, 2, 3],
		    s2 = ArrayUtility.copy(s1),
		    s3 = ArrayUtility.copy(s1, 1),
		    s4 = ArrayUtility.copy(s1, 1, 3),
		    s5 = ArrayUtility.copy(null);
		assert.ok(Arrays.areEqual(s1, s2));
		assert.equal(s5, null);
	});

});

describe(".copyTo(source,destination)", ()=>
{
	it("should throw for invalid parameter", ()=>
	{
		assert.throws(()=> {ArrayUtility.copyTo(null, null);});
		assert.throws(()=> {ArrayUtility.copyTo([], null);});
		assert.throws(()=> {ArrayUtility.copyTo([1], [], -1);});
		assert.throws(()=> {ArrayUtility.copyTo([1], [], 2);});
		assert.throws(()=> {ArrayUtility.copyTo([1], {length: -1});});
		assert.throws(()=> {ArrayUtility.copyTo([1], [], 0, 0, 5);});
	});
});

describe(".indexOf(source,value)", ()=>
{
	var a = initTestArray();
	it("should return true for a value contained", ()=>
	{
		assert.notEqual(ArrayUtility.indexOf(a, -1), -1);
	});
});


describe(".contains(source,value)", ()=>
{
	var a = initTestArray();
	it("should return true for a value contained", ()=>
	{
		assert.ok(ArrayUtility.contains(a, -1));
	});
	it("should return false for a value that is not present", ()=>
	{
		assert.ok(!ArrayUtility.contains(a, -9876));
	});
});


describe(".replace(source,oldValue,newValue)", ()=>
{
	var a = initTestArray();
	a.push(5);
	it("should properly replace items with max", ()=>
	{
		assert.equal(ArrayUtility.replace(null, 5, 6), 0);
		assert.equal(ArrayUtility.replace([], 5, 6), 0);
		assert.equal(ArrayUtility.replace(a, 5, 6), 2);
		assert.ok(ArrayUtility.contains(a, 6));
		assert.equal(ArrayUtility.replace(a, 6, 5, 1), 1);
		assert.ok(ArrayUtility.contains(a, 6));
		assert.ok(ArrayUtility.contains(a, 5));

	});
	it("should throw for invalid parameter", ()=>
	{
		assert.throws(()=> {ArrayUtility.replace([4, 5, 6], 5, 6, -5);});
	});
});

describe(".findIndex(source,of)", ()=>
{
	var a = initTestArray(), b:IArray<number> = {0: 3, 1: 1, 2: 2, length: 3};
	it("should find and return the correct index", ()=>
	{
		assert.equal(ArrayUtility.findIndex(a, (v:number)=>v== -1), 2);
	});
	it("should find and return the correct index", ()=>
	{
		assert.equal(ArrayUtility.findIndex(b, (v:number)=>v==1), 1);
	});
	it("should return -1 when the value is not present", ()=>
	{
		assert.equal(ArrayUtility.findIndex(a, (v:number)=> v== -9876), -1);
	});

	it("should throw for invalid parameter", ()=>
	{
		assert.throws(()=> {ArrayUtility.findIndex(null, ()=>true)});
		assert.throws(()=> {ArrayUtility.findIndex(a, null)});
	});
});

describe(".register(target,value)", ()=>
{
	it("should add a value that isn't present", ()=>
	{
		var a = initTestArray();
		var len = a.length;
		assert.ok(ArrayUtility.register(a, -9876));
		assert.equal(a.length, len + 1);
	});

	it("should not add a value that is present", ()=>
	{
		var a = initTestArray();
		var len = a.length;
		assert.ok(!ArrayUtility.register(a, -1));
		assert.equal(a.length, len);
	});

	it("should throw for invalid parameter", ()=>
	{
		assert.throws(()=> {ArrayUtility.register(null, -1, ()=>true)});
	});

});


describe(".remove(target,value)", ()=>
{
	it("should remove the item/value request and return the number of instances removed", ()=>
	{
		var s = [10, 9, 9, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 1, 2, 3, 3];
		var len = s.length;

		assert.equal(ArrayUtility.remove(s, 9, 1), 1, "Only 9 removed once");
		assert.equal(s.length, len - 1, ".length should be less by one");
		assert.equal(ArrayUtility.remove(s, 9, 3), 2, "Remaining 9s removed.");
		assert.equal(s[1], 8, "Index [1] is now 8");
		len = s.length;

		assert.equal(ArrayUtility.remove(s, 2), 2, "2 removed twice");
		assert.equal(s.length, len - 2, ".length should be less by two");
		assert.equal(s[7], 1, "Index [7] is now 1");
		assert.equal(s[10], 3, "Index [10] is now 3");
		len = s.length;

		assert.equal(ArrayUtility.remove(s, 15), 0, "15 does not exist");
		assert.equal(s.length, len, ".length should be the same");
		len = s.length;

		assert.ok(ArrayUtility.removeIndex(s, 5), "Index [5] removed");
		assert.equal(s.length, len - 1, ".length should be less by one");
		len = s.length;

		assert.equal(ArrayUtility.remove(s, 3, null), 3, "All 3s removed.");
		assert.equal(s.length, len - 3, ".length should be the same");
		len = s.length;

		assert.ok(!ArrayUtility.removeIndex(s, 15), "Index [15] doesn't exist");
		assert.equal(s.length, len, ".length should be the same");
	});

	it("should assert invalid parameters", ()=>
	{
		assert.throws(()=>
		{
			ArrayUtility.removeIndex(null, 0);
		});
		assert.throws(()=>
		{
			ArrayUtility.removeIndex([1, 2], -1);
		});
		assert.throws(()=>
		{
			ArrayUtility.remove([1, 2], 1, -2);
		});
	});

});

/*	Utility.applyTo skipped.
 It has too many permutations while being a straight forward function. */


describe(".updateRange(value,count)", ()=>
{
	it("should correctly overwrite the value requested", ()=>
	{

		var value = 10, count = 3, r = [1, 2, 3];
		assert.doesNotThrow(()=> {ArrayUtility.updateRange(null, value)});
		ArrayUtility.updateRange(r, value);

		assert.equal(r.length, count, ".length should be 3");
		for(let i = 0; i<count; i++)
		{
			assert.equal(r[i], value);
		}

		ArrayUtility.clear(r);
		for(let i = 0; i<count; i++)
		{
			assert.equal(r[i], null);
		}
	});

	it("should throw for invalid parameter stop less than start", ()=>
	{
		assert.throws(()=> {ArrayUtility.updateRange([1, 2, 3], 4, 2, 1);})
	})
});

describe(".applyTo(source,action)", ()=>
{
	it("should correctly overwrite the values", ()=>
	{

		var value = 10, count = 3, r = [1, 2, 3];
		assert.doesNotThrow(()=> {ArrayUtility.applyTo(null, ()=>null)});
		ArrayUtility.applyTo(r, ()=>null);
		assert.equal(r.length, count, ".length should be 3");
		for(let i = 0; i<count; i++)
		{
			assert.equal(r[i], null);
		}
	});
});


describe(".applyTo(source,action)", ()=>
{
	it("should correctly overwrite the values", ()=>
	{

		var count = 0, r = [1, 2, 3];
		assert.doesNotThrow(()=> {ArrayUtility.forEach(null, ()=>true)});
		ArrayUtility.forEach(r, (n, i)=>
		{
			assert.equal(count, i, "count should be " + i);
			count++;
			return i ? false : true;
		});
		assert.equal(count, 2, "count should be 2");
	});
});

describe(".repeat(value,count)", ()=>
{
	it("should correctly repeat the value requested", ()=>
	{
		var value = 10, count = 3;
		var r = ArrayUtility.repeat(value, count);
		assert.equal(r.length, count, ".length should be 3");
		for(let i = 0; i<count; i++)
		{
			assert.equal(r[i], value);
		}
	});

	it("should throw for invalid parameter", ()=>
	{
		assert.throws(()=> {ArrayUtility.repeat(1, -2);})
	})
});

describe(".rangeUntil(first,until,step)", ()=>
{
	it("should correctly increase the value requested", ()=>
	{
		var first = 10, count = 3, step = 2, until = first + count*step;
		var r = ArrayUtility.rangeUntil(first, until, 2);
		assert.equal(r.length, count, ".length should be 3");
		for(let i = 0; i<count; i++)
		{
			assert.equal(r[i], first + i*2);
		}
	});

	it("should throw for invalid parameter", ()=>
	{
		assert.throws(()=> {ArrayUtility.rangeUntil(Infinity, 10);});
		assert.throws(()=> {ArrayUtility.rangeUntil(NaN, 10);});
		assert.throws(()=> {ArrayUtility.rangeUntil(1, NaN);});
		assert.throws(()=> {ArrayUtility.rangeUntil(1, Infinity);});
		assert.throws(()=> {ArrayUtility.range(1, -1);});
		assert.throws(()=> {ArrayUtility.rangeUntil(1, 5, 0);});
	});
});

describe(".flatten(source,recurseDepth)",()=>{
	it("should convert multi dimensional array tree to a flat one",()=>{
		var len = initTestArray().length;
		var a = [[initTestArray(),initTestArray()],initTestArray()];
		var b = ArrayUtility.flatten(a,3);
		assert.equal(b.length,len*3);
	});

	it("should reduce multi dimensional array tree",()=>{
		var len = initTestArray().length;
		var a = [[initTestArray(),initTestArray()],initTestArray()];
		var b = ArrayUtility.flatten(a);
		assert.equal(b.length,len+2);
	})

});

function measureRepeated(closure:()=>void):number
{
	const repeat = 50;
	var ms = 0;

	for(let i = 0; i<repeat; i++)
	{
		ms += Stopwatch.measure(closure).total.milliseconds;
	}

	return ms;
}

function outputMeasured(suffix:string, closure:()=>void):void
{
	it(measureRepeated(closure) + " milliseconds: " + suffix, ()=>
	{
		assert.ok(true);
	});
}

/*
 * The below code proves (for Node.js and Mocha) that best practice with arrays is:
 * 1) Initialize them.  Set their capacity when constructed or set the length before iterating.
 * 2) Standard for loops are typically compiler optimized well and i++ may be compiler optimized as well (better than ++i).
 */
//
// describe("Array Performance", ()=>
// {
// 	const max = 1000000;
// 	outputMeasured("Array.push(i)", ()=>
// 	{
// 		let a:number[] = [];
// 		for(let i = 0; i<max; i++)
// 		{
// 			a.push(i);
// 		}
// 		// To ensure compiler doesn't dismiss the array, must consume the array at least once.
// 		return a[max-1];
// 	});
//
// 	outputMeasured("Array[i] = i", ()=>
// 	{
// 		let a:number[] = [];
// 		for(let i = 0; i<max; i++)
// 		{
// 			a[i] = i;
// 		}
// 		// To ensure compiler doesn't dismiss the array, must consume the array at least once.
// 		return a[max-1];
// 	});
//
// /*
// 	// Proven to be terrible!
// 	outputMeasured("Array.forEach (preset capacity ++i)", ()=>
// 	{
// 		let a:number[] = [];
// 		a.length = max;
// 		a.forEach((v,i)=>{
// 			a[i] = v;
// 		});
// 		// To ensure compiler doesn't dismiss the array, must consume the array at least once.
// 		return a[max-1];
// 	});*/
//
// 	outputMeasured("Array[i] = i (preset capacity i++)", ()=>
// 	{
// 		let a:number[] = new Array<number>(max);
// 		for(let i = 0; i<max; i++)
// 		{
// 			a[i] = i;
// 		}
// 		// To ensure compiler doesn't dismiss the array, must consume the array at least once.
// 		return a[max-1];
// 	});
//
// 	outputMeasured("Array[i] = i (preset length)", ()=>
// 	{
// 		let a:number[] = [];
// 		a.length = max;
// 		for(let i = 0; i<max; i++)
// 		{
// 			a[i] = i;
// 		}
// 		// To ensure compiler doesn't dismiss the array, must consume the array at least once.
// 		return a[max-1];
// 	});
//
// 	outputMeasured("Array[i] = i (for reverse no-init)", ()=>
// 	{
// 		let a:number[] = [];
// 		for(let i=max-1;i>=0; i--) {
// 			a[i] = i;
// 		}
// 		// To ensure compiler doesn't dismiss the array, must consume the array at least once.
// 		return a[max-1];
// 	});
//
// 	outputMeasured("Array[i] = i (for reverse)", ()=>
// 	{
// 		let a:number[] = new Array<number>(max);
// 		for(let i=max-1;i>=0; i--) {
// 			a[i] = i;
// 		}
// 		// To ensure compiler doesn't dismiss the array, must consume the array at least once.
// 		return a[max-1];
// 	});
//
// 	outputMeasured("Array[m] = m (while reverse)", ()=>
// 	{
// 		let a:number[] = new Array<number>(max);
// 		let m = max;
// 		while(m--) {
// 			a[m] = m;
// 		}
// 		// To ensure compiler doesn't dismiss the array, must consume the array at least once.
// 		return a[max-1];
// 	});
//
// 	outputMeasured("LinkedList.add(i)", ()=>
// 	{
// 		let a = new LinkedList<number>();
// 		for(let i = 0; i<max; i++)
// 		{
// 			a.add(i);
// 		}
// 	});
//
//
//
// 	outputMeasured("LinkedListNode.next = next", ()=>
// 	{
// 		let root:LinkedNextNode = { value: -1, next:null };
// 		let next = root;
// 		for(let i = 0; i<max; i++)
// 		{
// 			next = next.next = { value: i, next:null };
// 		}
// 		return root;
// 	});
//
//
// });
//
// interface LinkedNextNode {
// 	value:number;
// 	next:LinkedNextNode;
// }