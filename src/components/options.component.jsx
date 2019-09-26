import React from 'react';
import {  GitHub } from 'react-feather';


export default function Options({  toggleMode, currentMode: { value }}) {
	return (
		<div className="options">
			 <a data-tip="Source Code" href="https://github.com/PJijin/Works-ToDo">
				<GitHub  size="16" />
			 </a>

			<button  onClick={toggleMode}>
			{value ? <img  data-tip="Light mode" src="/assets/sun.svg"  width="25px" alt="day mode" /> : <img data-tip="Dark mode" src="/assets/moon.svg" alt="night mode" width="25px" />}
			 </button>

		</div>
	);
}
