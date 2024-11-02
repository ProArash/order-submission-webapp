import { ReactNode } from 'react';
import {
	FaHome,
	FaInfoCircle,
	FaQuestionCircle,
	FaWrench,
} from 'react-icons/fa';

interface IMenuList {
	title: string;
	route: string;
	icon?: ReactNode;
}

export const menuList: IMenuList[] = [
	{
		title: 'خانه',
		route: '#',
		icon: <FaHome />,
	},
	{
		title: 'سرویس ها',
		route: '#',

		icon: <FaWrench />,
	},
	{
		title: 'سوالات متداول',
		route: '#',
		icon: <FaQuestionCircle />,
	},
	{
		title: 'درباره ما',
		route: '#',
		icon: <FaInfoCircle />,
	},
];
