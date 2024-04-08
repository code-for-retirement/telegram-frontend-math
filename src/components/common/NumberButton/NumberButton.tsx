import React, { useCallback, useEffect, useRef, useState } from 'react';
import ReactJson from 'react-json-view';
import './style.scss';
import { Space, AutoCenter, Grid } from 'antd-mobile';


export const NumberButton = (props: any) => {
	const [selectedState, setSelectedState] = useState(false);

	const onClickNumb = () => {
		setSelectedState(!selectedState);
		props.parentCallback(props.value as string);
	}

	return (
		<Grid.Item>
			<button 
				className='button' 
				key={props.index} 
				onClick={onClickNumb}
				style={{backgroundColor: selectedState ? 'red' : '#04AA6D'}}
			>
				{props.value}
			</button>
		</Grid.Item>
	);
}
