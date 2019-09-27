import React from 'react';
import moment from 'moment';

export default function Plan({ tasks, setTasksdata }) {
	const lastDate = tasks.length !== 0 && tasks[tasks.length - 1].date;
	console.log(lastDate);
	const planAnotherDay = e => {
		const newDateObject = [];

		[...Array(Number(e.target.value)).keys()].map(dt => {
			const nDate = moment()
				.add(dt + 1, 'days')
				.format('dddd, DD MMMM YYYY');
			newDateObject.push({ date: nDate, lists: [] });
			return 1;
		});

		const newData = {
			data: [...tasks, ...newDateObject],
			lastModified: new Date().getTime()
		};

		setTasksdata(newData);
	};
	return (
		<div className="planner">
			Plan next
			<input onChange={planAnotherDay} type="number" className="plan-days" placeholder="1" min="0" max="10" />
			day(s)
		</div>
	);
}
