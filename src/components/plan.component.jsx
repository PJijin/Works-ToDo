import React from 'react';
import moment from "moment";

export default function Plan({ tasks , setTasksdata}) {
	const planAnotherDay = (e) => {
		const newDateObject = [];

		[...Array(Number(e.target.value)).keys()].map(dt => {
			const nDate = (moment().add(dt+1, 'days').format('dddd, DD MMMM YYYY'));
			newDateObject.push({date: nDate, lists:[]})
			return 1;
		})

		const newData = {
			data: [...tasks, ...newDateObject],
			lastModified: new Date().getTime()
		}

		setTasksdata(newData);
	}
	return (
		<div className="planner">
			Plan next <input onChange={planAnotherDay} type="number" className="plan-days" placeholder="1" /> day(s)
		</div>
	);
}
