import { CustomInputProps } from './CustomInputProps';

const CustomInputComp = ({ className, ...props }: CustomInputProps) => {
	return (
		<input
			className={`flex p-2 bg-gray-900 text-gray-200 ${className}`}
			{...props}
		/>
	);
};

export default CustomInputComp;
