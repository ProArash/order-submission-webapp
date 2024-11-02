import { HtmlHTMLAttributes, ReactNode } from 'react';

export type NavbarItemProps = HtmlHTMLAttributes<HTMLDivElement> & {
	title: string;
	route: string;
	icon?: ReactNode;
};
