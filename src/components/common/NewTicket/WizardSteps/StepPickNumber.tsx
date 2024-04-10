import React, { useCallback, useEffect, useRef, useState } from 'react';
import ReactJson from 'react-json-view';
import { Divider, Button, Grid, Steps } from 'antd-mobile';
import { NumberButton } from '../../../common/NumberButton/NumberButton';


export const StepPickNumber = (props: any) => {
	console.log('yeah');
	const [step, setStep] = useState<number>(1);

	const renderSwitch = () => {
		switch (step) {
			case 1:
				return 'bar';
			case 2:
				return '2';
			case 3:
				return '3';
			case 4:
				return '4';
			default:
				return 'bar';
		}
	}
	const [targetNumbers, setTargetNumbers] = useState<string[]>([]);
	const { Step } = Steps

	const onSelectNumber = (numb: string) => {
		setTargetNumbers([...targetNumbers, numb]);
	}

	const btnNumbers = () => {
		var numbers = [];
		for (var i = 0; i < 100; i++) {
			var formattedNumber = ("0" + i).slice(-2);
			numbers.push(
				<NumberButton key={i}
					value={formattedNumber}
					index={i}
					parentCallback={onSelectNumber}
				/>
			);
		}
		return numbers;
	}

	return (
		<>
		{/* {renderSwitch()} */}
		<Steps current={1} style={{ 'color': 'white' }}>
				<Step title='Cách chơi' />
				<Step title='Chọn số' />
				<Step title='Chọn mức cược' />
				<Step title='Xác nhận ' />
			</Steps>
			<Grid columns={10} gap={6}>
				{btnNumbers()}
			</Grid>
			<Divider
				style={{
					color: '#1677ff',
					borderColor: '#1677ff',
					borderStyle: 'dashed',
				}}
			>
				Số đã chọn
			</Divider>
			<p style={{ color: 'white' }}>
				{targetNumbers.join(',')}
			</p>
			<Divider style={{
				color: '#1677ff',
				borderColor: '#1677ff',
				borderStyle: 'dashed',
			}}></Divider>
			<Grid columns={2}>
				<Grid.Item>
					<Button block>
						Trước
					</Button>
				</Grid.Item>
				<Grid.Item>
					<Button block>
						Tiếp
					</Button>
				</Grid.Item>
			</Grid>
		</>
	);
}
