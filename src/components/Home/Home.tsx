import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Steps, AutoCenter, Grid, Button, Divider } from 'antd-mobile';
import { useNavigate } from "react-router-dom";

export const Home = () => {
	const navigate = useNavigate();
	return (
		<div className="bg-white br-10 table-shadow m-b-15" style={{ height: 'auto !important' }}>
			<div className="result-board" id="kqxs-box">
				<table className="table-lotto br-8 overflow-hidden bg-white w-100 text-center">
					<tbody><tr>
						<th colSpan={27}>
							<h2 className="fw-bold txt-title mb-1 lh-base">
								<a href="/xsmb" className="text-decoration-none color-brand">
									XSMB - Kết quả xổ số Miền Bắc
								</a>
							</h2>
							<h3 className="fs-6 fw-normal mb-1">
								<a href="/xsmb">XSMB</a> /
								<a href="/xsmb/thu-5">XSMB Thứ 5</a> /
								<a href="/xsmb/11-04-2024">XSMB 11/04/2024</a>
							</h3>
						</th>
					</tr>
						<tr>
							<td colSpan={27} className="color-sub-brand txt-sub-title fw-medium">9KN-14KN-13KN-1KN-11KN-2KN-6KN-10KN</td>
						</tr>
						<tr>
							<td colSpan={3} className="color-highlight fw-medium">ĐB</td>
							<td colSpan={24} className="txt-special-prize">
								69356 </td>
						</tr>
						<tr className="bg-color-lotto-background">
							<td colSpan={3} className="fw-medium">G1</td>
							<td colSpan={24} className="txt-normal-prize">
								22552 </td>
						</tr>
						<tr>
							<td colSpan={3} className="fw-medium">G2</td>
							<td colSpan={12} className="txt-normal-prize">
								35140 </td>
							<td colSpan={12} className="txt-normal-prize">
								15293 </td>
						</tr>
						<tr className="bg-color-lotto-background">
							<td colSpan={3} rowSpan={2} className="fw-medium">G3</td>
							<td colSpan={8} className="txt-normal-prize">
								35010 </td>
							<td colSpan={8} className="txt-normal-prize">
								28133 </td>
							<td colSpan={8} className="txt-normal-prize">
								33342 </td>
						</tr>
						<tr className="bg-color-lotto-background">
							<td colSpan={8} className="txt-normal-prize">
								65578 </td>
							<td colSpan={8} className="txt-normal-prize">
								74436 </td>
							<td colSpan={8} className="txt-normal-prize">
								57981 </td>
						</tr>
						<tr>
							<td colSpan={3} className="fw-medium">G4</td>
							<td colSpan={6} className="txt-normal-prize">
								4851 </td>
							<td colSpan={6} className="txt-normal-prize">
								2761 </td>
							<td colSpan={6} className="txt-normal-prize">
								8993 </td>
							<td colSpan={6} className="txt-normal-prize">
								3587 </td>
						</tr>
						<tr className="bg-color-lotto-background">
							<td colSpan={3} rowSpan={2} className="fw-medium">G5</td>
							<td colSpan={8} className="txt-normal-prize">
								6909 </td>
							<td colSpan={8} className="txt-normal-prize">
								2693 </td>
							<td colSpan={8} className="txt-normal-prize">
								2363 </td>
						</tr>
						<tr className="bg-color-lotto-background">
							<td colSpan={8} className="txt-normal-prize">
								1750 </td>
							<td colSpan={8} className="txt-normal-prize">
								3328 </td>
							<td colSpan={8} className="txt-normal-prize">
								7628 </td>
						</tr>
						<tr>
							<td colSpan={3} className="fw-medium">G6</td>
							<td colSpan={8} className="txt-normal-prize">
								753 </td>
							<td colSpan={8} className="txt-normal-prize">
								388 </td>
							<td colSpan={8} className="txt-normal-prize">
								635 </td>
						</tr>
						<tr className="bg-color-lotto-background">
							<td colSpan={3} className="fw-medium">G7</td>
							<td colSpan={6} className="txt-normal-prize">
								73 </td>
							<td colSpan={6} className="txt-normal-prize">
								80 </td>
							<td colSpan={6} className="txt-normal-prize">
								42 </td>
							<td colSpan={6} className="txt-normal-prize">
								86 </td>
						</tr>
					</tbody></table>
			</div>
		</div>
	);
}