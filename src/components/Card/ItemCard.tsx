import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import { Button } from '..';
import { FaBasketShopping } from 'react-icons/fa6';

const ItemCardComp = ({
	title,
	image,
	price,
}: {
	title: string;
	image: string | StaticImport;
	price: string;
}) => {
	return (
		<div className="flex flex-col gap-5 items-center bg-white p-5 rounded-lg w-[200px] h-fit text-center">
			<Image alt={title} src={image} width={100} height={100} />
			<p className="font-bold">{title}</p>
			<p className="text-blue-500">{price}</p>
			<Button
				className="w-full"
				variant="black"
				title="سفارش دهید"
				icon={<FaBasketShopping />}
			/>
		</div>
	);
};

export default ItemCardComp;
