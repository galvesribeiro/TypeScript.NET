///<reference path='../../typings/qunit/qunit.d.ts'/>
///<amd-dependency path='QUnit'/>

import Integer from 'source/System/Integer';


export default function run()
{

	const TEST_FLOAT = 10.915, TEST_INT = 10;

	QUnit.test('Integer: convert', (assert:QUnitAssert)=>
	{

		assert.equal(
			Integer(TEST_FLOAT),
			TEST_INT,
			'Should convert float number to integer without rounding.');

	});

	QUnit.test('Integer: is', (assert:QUnitAssert)=>
	{

		assert.equal(
			Integer.is(TEST_FLOAT),
			false,
			'Should detect a number that is not an integer.');

		assert.equal(
			Integer.is(TEST_INT),
			true,
			'Should detect a number that is an integer.');

	});

	QUnit.test('Integer: assert', (assert:QUnitAssert)=>
	{

		assert.equal(
			Integer.assert(TEST_INT),
			true,
			'Should detect a number that is an integer.');

		assert.throws(()=>
		{
			Integer.assert(TEST_FLOAT);
		});

	});
}
