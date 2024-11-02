import { ButtonStyles, CustomButtonProps } from './CustomButtonProps';

const CustomButton = ({
	title,
	icon,
	variant = 'white',
	className,
	...props
}: CustomButtonProps) => {
	return (
		<button className={`${ButtonStyles[variant]} ${className}`} {...props}>
			{icon && icon}
			<p>{title}</p>
		</button>
	);
};

export default CustomButton;
