import { Facebook, Instagram } from "lucide-react";

const Footer = () => {
	return (
		<div className="bg-primary w-full h-full p-12 md:p-16">
			<div className="flex flex-col gap-4 md:flex-row md:justify-between ">
				<div className="flex flex-col gap-6">
					<h1 className="text-xl font-black text-white">MSetup</h1>
					<p className="text-base font-medium text-gray-300 md:w-[189px]">
						We help you to build your own dream setup
					</p>
					<div className="flex flex-row gap-5">
						<div className="p-5 border-2 border-white rounded-full">
							<Facebook className="w-4 h-4 stroke-white" />
						</div>
						<div className="p-5 border-2 border-white rounded-full">
							<Instagram className="w-4 h-3 stroke-white" />
						</div>
					</div>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-6 ">
					<div>
						<h2 className="mb-6 text-sm font-semibold text-white uppercase">
							Information
						</h2>
						<ul className="text-gray-300 dark:text-gray-400 font-medium">
							<li className="mb-4">
								<a href="/products" className="hover:underline">
									Product
								</a>
							</li>
						</ul>
					</div>
					<div>
						<h2 className="mb-6 text-sm font-semibold text-white uppercase">
							Contact
						</h2>
						<ul className="text-gray-300 dark:text-gray-400 font-medium">
							<li className="mb-4">
								<p>Phone: +8801611112222</p>
							</li>
							<li>
								<p>
									Emails:{" "}
									<a href="https://discord.gg/4eeurUVvTy" className="hover:underline">
										support@exclusive.com
									</a>
								</p>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
			<div className="sm:flex sm:items-center sm:justify-between">
				<span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
					© 2024{" "}
					<a href="https://flowbite.com/" className="hover:underline">
						MSetup™
					</a>
					. All Rights Reserved.
				</span>
			</div>
		</div>
	);
};

export default Footer;
