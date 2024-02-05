import Navbar from "@/components/shared/Navbar";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
	return (
		<div>
			<Navbar />
		</div>
	);
}
