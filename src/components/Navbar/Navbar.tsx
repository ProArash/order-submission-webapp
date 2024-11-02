'use client';
import { FaBars } from 'react-icons/fa';
import { NavbarMainItem } from '..';
import { menuList } from './Menu';
import Image from 'next/image';
import logo from '../../../public/logo.png';
import { useState } from 'react';
import { FaCircleXmark } from 'react-icons/fa6';

const Navbar = () => {
	const [showDrawer, setShowDrawer] = useState(false);
	return (
		<div className="flex justify-between items-center bg-blue-500 p-5 relative">
			<div className="md:flex md:gap-5 hidden">
				{menuList &&
					menuList.map((menu, index) => (
						<NavbarMainItem
							key={index}
							title={menu.title}
							route={menu.route}
							icon={menu.icon}
						/>
					))}
			</div>
			<div
				className="flex md:hidden gap-5"
				onClick={() => setShowDrawer(true)}>
				<FaBars
					className="text-white hover:bg-blue-700 p-1 rounded-md active:bg-blue-600 transition"
					size={30}
				/>
			</div>
			<div>
				<Image alt="logo" src={logo} />
			</div>
			<div
				id="drawer-menu"
				className={`bg-blue-600 rounded-e-md w-1/2 flex flex-col bg gap-5 h-screen p-3 right-0 absolute top-0 z-10 transition-transform duration-300 ${
					showDrawer ? 'translate-x-0' : 'translate-x-full'
				}`}>
				<p
					className="flex gap-1 text-white text-lg items-center cursor-pointer hover:bg-blue-200 w-fit rounded-md p-1 hover:text-gray-950"
					onClick={() => setShowDrawer(false)}>
					بستن
					<FaCircleXmark />
				</p>
				<h2 className="mb-5 text-white text-center font-bold">
					سیستم مدیریت سفارش
				</h2>
				{menuList &&
					menuList.map((menu, index) => (
						<NavbarMainItem
							key={index}
							title={menu.title}
							route={menu.route}
							icon={menu.icon}
							onClick={() => setShowDrawer(false)}
						/>
					))}
			</div>
		</div>
	);
};

export default Navbar;
