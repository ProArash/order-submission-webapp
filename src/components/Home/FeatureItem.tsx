import React, { ReactNode } from 'react';

const FeatureItemComp = ({
	title,
	icon,
	caption,
}: {
	title: string;
	caption: string;
	icon: ReactNode;
}) => {
	return (
		<div className="flex flex-col text-blue-500 items-center w-[300px]">
			<p className="text-2xl">{icon}</p>
			<p>{title}</p>
			<p className="text-gray-500 text-sm">{caption}</p>
		</div>
	);
};

export default FeatureItemComp;
