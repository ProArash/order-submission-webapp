import { FaSpinner } from 'react-icons/fa';

const Loading = () => {
	return (
		<div className="flex items-center gap-3">
			<FaSpinner className="animate-spin" />
			در حال بارگزاری
		</div>
	);
};

export default Loading;
