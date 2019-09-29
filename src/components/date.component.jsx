import React, { useState } from 'react';
import { Trash, MinusSquare, Plus } from 'react-feather';
import uuid from 'uuid';
import { Container, Draggable } from 'react-smooth-dnd';
import List from './list.component';

export default function DateComponent({ taskData, setTasksdata, tasks, index }) {
	const [dateTasks, setDateTasks] = useState(taskData.lists);

	const updateTaskData = newFilteredTask => {
		tasks[index].lists = newFilteredTask;
		setTasksdata({
			data: tasks,
			lastModified: new Date().getTime()
		});
		setDateTasks(newFilteredTask);
	};

	const onDrop = ({ addedIndex, removedIndex }) => {
		[dateTasks[addedIndex], dateTasks[removedIndex]] = [dateTasks[removedIndex], dateTasks[addedIndex]];
		updateTaskData(dateTasks);
	};

	const removeListItem = id => {
		const newFilteredTask = dateTasks.filter(task => task.id !== id);
		updateTaskData(newFilteredTask);
	};

	const editTodo = (id, message) => {
		dateTasks.forEach(tsk => {
			if (tsk.id === id) {
				tsk.message = message;
			}
		});
		updateTaskData(dateTasks);
	};

	const clearListData = () => updateTaskData([]);

	const addNewList = () => {
		const newFilteredTask = [
			...dateTasks,
			{
				id: uuid(),
				message: 'new',
				completed: false
			}
		];
		updateTaskData(newFilteredTask);
	};

	const deleteDate = () =>
		setTasksdata({
			data: tasks.filter(el => el.date !== taskData.date),
			lastModified: new Date().getTime()
		});

	const markAsComplete = id => {
		dateTasks.forEach(task => {
			if (task.id === id) {
				task.completed = !task.completed;
			}
		});

		updateTaskData(dateTasks);
	};

	const onEnterNewField = (e) => {
		if (e.key === 'Enter') {
			addNewList();
		}
	}

	return (
		<div className="date-todo">
			<div className="date-style">
				<span>{taskData.date}</span>
				<div className="actions">
					<button>
						<Trash size="14" data-tip="Remove Day" onClick={deleteDate} />
					</button>
					<button>
						<MinusSquare data-tip="Clear List" onClick={clearListData} size="14" />
					</button>
				</div>
			</div>
			<ul>
				<Container onDrop={onDrop}>
					{dateTasks.map(task => {
						return (
							<Draggable key={task.id}>
								<List
									{...task}
									key={task}
									removeListItem={removeListItem}
									editTodo={editTodo}
									markAsComplete={markAsComplete}
									onEnterNewField={onEnterNewField}
								/>
							</Draggable>
						);
					})}

					{dateTasks.length === 0 && <li className="empty-list" onClick={addNewList}>You have not added any items</li>}
					<li className="new-list">
						<button>
							<Plus data-tip="New Task" onClick={addNewList} size="12" />
						</button>
					</li>
				</Container>
			</ul>
		</div>
	);
}
