"use client";

import { SignOutButton, SignedIn, SignedOut } from "@clerk/nextjs";
import { ClipboardList, LogOut, User } from "lucide-react";
import { useRouter } from "next/navigation";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
	const { push } = useRouter();
	return (
		<nav className="bg-white border-gray-200 dark:bg-gray-900">
			<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
				<a
					href="https://flowbite.com/"
					className="flex items-center space-x-3 rtl:space-x-reverse">
					<img
						src="https://flowbite.com/docs/images/logo.svg"
						className="h-8"
						alt="Flowbite Logo"
					/>
					<span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
						Flowbite
					</span>
				</a>
				<div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
					<SignedIn>
						<DropdownMenu>
							<DropdownMenuTrigger>
								<button className="bg-gray-400 rounded-full w-9 h-9 flex items-center justify-center">
									ac
								</button>
							</DropdownMenuTrigger>
							<DropdownMenuContent>
								<DropdownMenuLabel>UserName of User</DropdownMenuLabel>
								<DropdownMenuSeparator />
								<DropdownMenuItem className="cursor-pointer">
									<div className="flex flex-row items-center gap-3">
										<User className="w-5 h-5" />
										<h3 className="text-base ">Profile</h3>
									</div>
								</DropdownMenuItem>
								<DropdownMenuItem className="cursor-pointer">
									<div className="flex flex-row items-center gap-3">
										<ClipboardList className="w-5 h-5" />
										<h3 className="text-base ">My orders</h3>
									</div>
								</DropdownMenuItem>
								<DropdownMenuSeparator />
								<DropdownMenuItem className="cursor-pointer">
									<SignOutButton>
										<div className="flex flex-row g-2">
											<LogOut className="mr-2 h-4 w-4" />
											<span>Log out</span>
										</div>
									</SignOutButton>
								</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					</SignedIn>

					<SignedOut>
						<button
							className="bg-gray-400 rounded-full w-9 h-9 flex items-center justify-center"
							onClick={() => push("/sign-in")}>
							<User className="w-5 h-5" />
						</button>
					</SignedOut>
				</div>
				<div
					className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
					id="navbar-user">
					<ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
						<li>
							<a
								href="#"
								className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
								aria-current="page">
								Home
							</a>
						</li>
						<li>
							<a
								href="#"
								className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
								About
							</a>
						</li>
						<li>
							<a
								href="#"
								className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
								Services
							</a>
						</li>
						<li>
							<a
								href="#"
								className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
								Pricing
							</a>
						</li>
						<li>
							<a
								href="#"
								className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
								Contact
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
