import { FeatureItem } from '..';
import { features } from './FeatureList';

const FeaturesSectionComp = () => {
	return (
		<div className="flex flex-col gap-5 items-center bg-gray-100 p-5">
			<h2 className="font-bold">
				Top Courses That are open for Students
			</h2>
			<p className="text-gray-500">
				Who are in extremely love with eco friendly system.
			</p>
			<div className="grid md:grid-cols-3 grid-cols-1 justify-items-center gap-5 w-full">
				{features.map((f, index) => (
					<FeatureItem
						key={index}
						title={f.title}
						icon={f.icon}
						caption={f.caption}
					/>
				))}
			</div>
		</div>
	);
};

export default FeaturesSectionComp;
