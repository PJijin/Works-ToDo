import React, { useState} from 'react';
import { PlusCircle } from 'react-feather';

import moment from 'moment';

export default function Plan({ tasks, setTasksdata }) {
	const [daysAdded, setDaysAdded] =  useState(1);


 	const planAnotherDay = e => {
		const newDateObject = [];

 			const nDate = moment()
				.add( daysAdded, 'days')
				.format('dddd, DD MMMM YYYY');
			newDateObject.push({ date: nDate, lists: [] });
			setDaysAdded(daysAdded+1);

		const newData = {
			data: [...tasks, ...newDateObject],
			lastModified: new Date().getTime()
		};

		setTasksdata(newData);
	};
	return (
		<div className="planner">
			Plan next
			<PlusCircle data-tip="Add Day" className="add-circle" onClick={planAnotherDay} />
			day
		</div>
	);
}
