import React   from 'react';
import ReactTooltip from 'react-tooltip'
import useDarkMode from 'use-dark-mode';
import moment from "moment";

import useLocalStorage from './hooks/useLocalStorage'

import Date from './components/date.component';
import Plan from './components/plan.component';
import Options from './components/options.component';
import './App.css';

const INITIAL_TASK = {
	data: [
		{
			date: moment().format('dddd, DD MMMM YYYY'),
			lists: [
			]
		}
],
	lastModified: null
}

function App() {
	const [tasks, setTasks] = useLocalStorage('tasks',INITIAL_TASK);
	const darkMode = useDarkMode(false);

 	const setTasksdata = (data) => setTasks(data);

	return (
		<div className="App">
			<div className="todo-lists">
				<Options toggleMode={darkMode.toggle} currentMode={darkMode} />
				<Plan tasks={tasks.data} setTasksdata={setTasksdata}  />
				{tasks.data.map((task,index) => {
					return <Date tasks={tasks.data} key={task.tid} taskData={task} setTasksdata={setTasksdata} index={index} />
				})}

				{tasks.data.length === 0 && <p className="center">Wow <img src="./assets/tada.svg" width="20px" alt="tada" /> You don't have any pending works <img src="./assets/clap.svg" width="20px" alt="clap" /></p>}
 			</div>
			 <ReactTooltip  place="bottom" type="dark" effect="solid" />

		</div>
	);
}

export default App;
