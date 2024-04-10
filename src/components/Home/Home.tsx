import React, { useCallback, useEffect, useRef, useState } from 'react';
import ReactJson from 'react-json-view';
import './style.scss';
import { Steps, AutoCenter, Grid, Button, Divider } from 'antd-mobile';
import { useNavigate } from "react-router-dom";
import { Footer } from '../Footer/Footer';

export const Home = () => {
	const navigate = useNavigate();
	return (
		<AutoCenter>
			<Button onClick={() => {navigate(`ticket/new`)}}>New Ticket</Button>
		</AutoCenter>
	);
}