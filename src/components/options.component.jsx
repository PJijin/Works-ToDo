import React from 'react';

export default function Options({  toggleMode, currentMode: { value }}) {
	return (
		<div className="options">
				<button  onClick={toggleMode}>

			{value ? <img  data-tip="Light mode" src="/assets/sun.svg"  width="25px" alt="day mode" /> : <img data-tip="Dark mode" src="/assets/moon.svg" alt="night mode" width="25px" />}


			 </button>
		</div>
	);
}
