import React from 'react';
import { Trash2 } from 'react-feather';

export default function List({ id,message, completed  , removeListItem,editTodo,markAsComplete }) {
 	return (
		<li className={completed ? 'list completed' : 'list'}>
			<div>
{completed ? <input type="checkbox" defaultChecked={`${completed}`} onClick={(e) => markAsComplete(id,e.target.value)} />
				: <input type="checkbox"  onClick={() => markAsComplete(id)} />}
				 <input type="text" defaultValue={message !== "new" ? message : ''} placeholder={message === "new" ? "New ToDo" : 'Edit Message'} onChange={(e) => editTodo(id,e.target.value)} />
			</div>
			<div className="actions">
				<button>
					<Trash2 data-tip="Delete" size="13" onClick={()=>removeListItem(id)} />
				</button>
			</div>
		</li>
	);
}
