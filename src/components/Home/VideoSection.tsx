import React from 'react';
import { Button } from '..';

const VideoSectionComp = () => {
	return (
		<div className="grid md:grid-cols-2 grid-cols-1 justify-items-center gap-5 w-full p-5">
			<div className="rounded-md flex justify-center w-full">
				<iframe
                className='md:w-[500px] h-[350px] w-full'
					title="فیلم"
					src="https://www.youtube.com/watch?v=_i_XWx05FTw"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				/>
			</div>
			<div className="flex flex-col gap-5 justify-center text-start">
				<p className="text-blue-500">Brand new app to blow your mind</p>
				<p className="font-bold text-xl">Lorem ipsum dolor sit amet.</p>
				<p className="text-gray-500">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Temporibus, consequuntur?
				</p>
				<div className="flex justify-start">
					<Button variant="black" title="همین حالا شروع کنید!" />
				</div>
			</div>
		</div>
	);
};

export default VideoSectionComp;
