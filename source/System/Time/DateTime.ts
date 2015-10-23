/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE.md
 */

///<reference path='ITimeTotal.d.ts'/>
import * as HowMany from './HowMany';
import ClockTime from './ClockTime';

export default
class DateTime
{

	private _value:Date;

	get jsDate():Date
	{
		return new Date(this._value.getTime()); // return a clone.
	}

	private setJsDate(value:Date)
	{
		this._value = new Date(value.getTime());
	}

	constructor();
	constructor(dateString:string);
	constructor(milliseconds:number);
	constructor(source:Date);
	constructor(source:DateTime);
	constructor(value:any = new Date())
	{
		var _ = this;
		if(value instanceof DateTime)
			_._value = value.jsDate;
		else if(value instanceof Date)
			_.setJsDate(value);
		else
			_._value = value==undefined
				? new Date()
				: new Date(value);
	}


	addMilliseconds(ms:number):DateTime
	{
		ms = ms || 0;
		return new DateTime(this._value.getTime() + ms);
	}

	addDays(days:number):DateTime
	{
		days = days || 0;
		return this.addMilliseconds(days*HowMany.Milliseconds.Per.Day);
	}

	/**
	 * Receives an ITimeTotal value and adds based on the total milliseconds.
	 * @param {ITimeTotal} time
	 * @returns {DateTime}
	 */
	add(time:ITimeTotal):DateTime {
		return this.addMilliseconds(time.total.milliseconds);
	}

	get timeOfDay():ClockTime {
		var d = this._value;
		return new ClockTime(
			d.getHours(),
			d.getMinutes(),
			d.getSeconds(),
			d.getMilliseconds())
	}

	static now():DateTime
	{
		return new DateTime();
	}

	static today():DateTime
	{
		var now:Date = new Date();
		return new DateTime(
			new Date(
				now.getFullYear(),
				now.getMonth(),
				now.getDate()
			)
		);
	}

	static tomorrow():DateTime
	{
		var today:DateTime = DateTime.today();
		return today.addDays(1);
	}

}

Object.freeze(DateTime);
