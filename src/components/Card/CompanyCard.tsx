import React from 'react';
import { FaStar } from 'react-icons/fa';

const CompanyCardComp = ({
	title,
	caption,
	rate,
}: {
	title: string;
	caption: string;
	rate: number;
}) => {
	const stars = Array(rate).fill(0);
	return (
		<div className="flex flex-col gap-5 items-center bg-gray-100 rounded-md p-5">
			<p className="text-lg font-bold">{title}</p>
			<p className="text-gray-500">{caption}</p>
			<p className='flex'>
				{stars.map((_, index) => (
					<FaStar key={index} className="text-yellow-500" />
				))}
			</p>
		</div>
	);
};

export default CompanyCardComp;
