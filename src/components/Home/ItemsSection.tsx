import { ItemCard } from '..';
import { itemsList } from '../Card/ItemsList';

const ItemsSectionComp = () => {
	return (
		<div className="flex flex-col gap-5 items-center bg-blue-950 p-5">
			<h2 className="font-bold text-white">
				Some Features that Made us Unique
			</h2>
			<p className="text-gray-500">
				Who are in extremely love with eco friendly system.
			</p>
			<div className="grid grid-flow-col gap-5 justify-items-center w-full overflow-x-auto">
				{itemsList.map((v, index) => (
					<ItemCard
						key={index}
						title={v.title}
						price={v.price}
						image={v.image}
					/>
				))}
			</div>
		</div>
	);
};

export default ItemsSectionComp;
