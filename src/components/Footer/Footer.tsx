import {
	FaFacebook,
	FaGithub,
	FaHeart,
	FaInstagram,
	FaTwitter,
} from 'react-icons/fa';
import { Input } from '..';

const FooterComp = () => {
	return (
		<div className="flex justify-center md:flex-row flex-col gap-5 p-10 bg-blue-950 text-white">
			<div className="flex flex-col basis-1/3 gap-5">
				<p>ما را دنبال کنید</p>
				<p className="text-gray-500">شبکه های اجتماعی</p>
				<div className="flex gap-5">
					<FaTwitter />
					<FaFacebook />
					<FaInstagram />
					<FaGithub />
				</div>
			</div>
			<div className="flex flex-col basis-1/3">
				<p>خبرنامه</p>
				<Input className="text-end" />
			</div>
			<div className="flex flex-col basis-1/3">
				<p className="font-bold">درباره ما</p>
				<p className="text-gray-500">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit,
					sed do eiusmod tempor incididunt ut labore dolore magna
					aliqua.
				</p>
				<p className="flex gap-5 items-center">
					ساخته شده با {<FaHeart className="text-blue-500" />}
				</p>
			</div>
		</div>
	);
};

export default FooterComp;
