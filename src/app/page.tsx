import {
	CompanySection,
	FeaturesSection,
	ItemSection,
	TopSection,
	VideoSection,
} from '../components';

const Home = () => {
	return (
		<div className="flex flex-col gap-5">
			<TopSection />
			<VideoSection />
			<FeaturesSection />
			<ItemSection />
			<CompanySection />
		</div>
	);
};

export default Home;
