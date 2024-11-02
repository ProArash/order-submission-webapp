import { CompanyCard } from '..';
import { companyList } from '../Card/CompanyList';

const CompanySectionComp = () => {
	return (
		<div className="flex flex-col gap-5 items-center p-5">
			<p className="font-bold text-lg">
				Some Features that Made us Unique
			</p>
			<p>Who are in extremely love with eco friendly system.</p>
			<div className="grid md:grid-cols-3 grid-cols-1 justify-items-center gap-5">
				{companyList.map((v, index) => (
					<CompanyCard
						key={index}
						title={v.title}
						caption={v.caption}
						rate={v.rate}
					/>
				))}
			</div>
		</div>
	);
};

export default CompanySectionComp;
