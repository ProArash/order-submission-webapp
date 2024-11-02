import Image from 'next/image';
import React from 'react';
import { Button } from '..';
import smartWatchPic from '../../../public/smart-watch.png';

const TopSectionComp = () => {
	return (
		<div>
			<div className="bg-blue-500 h-[500px] flex flex-col justify-center items-center gap-5 text-white">
				<h2>عنوان دمو</h2>
				<h1 className="font-bold">عنوان بزرگ دمو</h1>
				<Button variant="white" title="همین حالا خرید کنید" />
			</div>
			<div className="justify-center flex -mt-36">
				<Image
					className="object-contain md:w-fit md:h-fit w-1/2 h-1/2 drop-shadow-xl"
					alt="smart watch"
					src={smartWatchPic}
				/>
			</div>
		</div>
	);
};

export default TopSectionComp;
