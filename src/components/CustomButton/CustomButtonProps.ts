import { ButtonHTMLAttributes, ReactNode } from 'react';

const ButtonBaseStyle =
	'flex items-center gap-2 rounded-full p-2 justify-center transition duration-500';

export type ButtonVariants = 'white' | 'black';

export const ButtonStyles = {
	white: `bg-white hover:bg-blue-500 text-black border border-white hover:text-white ${ButtonBaseStyle}`,
	black: `bg-black hover:bg-white hover:text-black text-white border border-black ${ButtonBaseStyle}`,
};

export type CustomButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	title?: string;
	icon?: ReactNode;
	variant?: ButtonVariants;
};
