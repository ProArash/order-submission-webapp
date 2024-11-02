import { ReactNode } from 'react';
import { FaBuilding, FaPhone, FaRocket } from 'react-icons/fa';
import { FaGear } from 'react-icons/fa6';

interface IFeature {
	title: string;
	caption: string;
	icon: ReactNode;
}
export const features: IFeature[] = [
	{
		title: 'سرعت بالا',
		icon: <FaRocket />,
		caption:
			'Lorem ipsum dolor sit amet, consectetur adipisic ing elit, seddo eiusmod tempor incid.idunt ut labore et dolore magna aliqua.',
	},
	{
		title: 'بهترین پشتیبانی',
		icon: <FaPhone />,
		caption:
			'Lorem ipsum dolor sit amet, consectetur adipisic ing elit, seddo eiusmod tempor incid.idunt ut labore et dolore magna aliqua.',
	},
	{
		title: 'مقیاس پذیری بالا',
		icon: <FaGear />,
		caption:
			'Lorem ipsum dolor sit amet, consectetur adipisic ing elit, seddo eiusmod tempor incid.idunt ut labore et dolore magna aliqua.',
	},
	{
		title: 'پلن سازمانی',
		icon: <FaBuilding />,
		caption:
			'Lorem ipsum dolor sit amet, consectetur adipisic ing elit, seddo eiusmod tempor incid.idunt ut labore et dolore magna aliqua.',
	},
];
