import Link from 'next/link';
import { NavbarItemProps } from './NavbarItemProps';

const NavbarItem = ({ title, route, icon, ...props }: NavbarItemProps) => {
	return (
		<Link href={route}>
			<div
				className="text-white md:border-none border-b border-blue-400 p-1 hover:bg-blue-400 hover:text-white rounded-md flex items-center gap-2"
				{...props}>
				{icon && icon}
				{title}
			</div>
		</Link>
	);
};

export default NavbarItem;
