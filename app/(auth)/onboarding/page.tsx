import AccountProfile from "@/components/forms/AccountProfile";
import { fetchUser } from "@/lib/actions/user.action";
import { currentUser } from "@clerk/nextjs";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import StepperDemo from "./_components.tsx/StepperComp";

export const metadata: Metadata = {
	title: `Onboarding | ${process.env.NEXT_PUBLIC_APP_NAME}`,
	description: `Finish creating your account in ${process.env.NEXT_PUBLIC_APP_NAME}`,
};

const Onboarding = async () => {
	// const user = await currentUser();

	// if (!user) return null;

	// const userInfo = await fetchUser(user.id);

	// if (userInfo?.onboarded) redirect("/");

	// const userData = {
	// 	id: user?.id,
	// 	objectId: userInfo?._id,
	// 	username: userInfo?.username || user?.username,
	// 	name: userInfo?.name || user?.firstName,
	// 	bio: userInfo?.bio || "",
	// 	image: userInfo?.image || user?.imageUrl,
	// };
	return (
		<main className="container flex max-w-3xl flex-col justify-start px-1 py-10 xs:px-5 sm:px-10 sm:py-20">
			<h1 className="text-gray-950 font-bold text-4xl">Onboarding</h1>
			<p className="mt-3 text-base text-gray-950">
				Complete your profile now to join ConnectCrew
			</p>
			<section className="mt-9 bg-white rounded-lg px-3 xs:px-5 sm:px-10 py-10 shadow-cd">
				{/* <AccountProfile user={userData} btnTitle="continue" /> */}
				<StepperDemo />
			</section>
		</main>
	);
};

export default Onboarding;
