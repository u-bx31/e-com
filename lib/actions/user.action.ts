"use server";

import { revalidatePath } from "next/cache";
import User from "../models/user.model";
import { connectToDB } from "../mongoose";
import Product from "../models/product.model";
import { FilterQuery, SortOrder } from "mongoose";

interface UserProps {
	userId: string;
	firstName: string;
	lastName: string;
	image: string;
	phoneNumber: string;
	address?: string;
	city?: string;
	countryOrRegion?: string;
	zipCode?: string;
	state?: string;
	path: string;
}

export async function fetchUser(userId: string) {
	ConnectionToDb();
	try {
		return await User.findOne({ id: userId });
	} catch (error: any) {
		throw new Error(`Failed to fetch user :${error.message}`);
	}
}

export async function UpdateUser({
	userId,
	firstName,
	lastName,
	image,
	address,
	city,
	countryOrRegion,
	zipCode,
	state,
	phoneNumber,
	path,
}: UserProps): Promise<void> {
	ConnectionToDb();
	try {
		await User.findOneAndUpdate(
			{ id: userId },
			{
				firstName: firstName.toLowerCase(),
				lastName: lastName.toLowerCase(),
				image: image,
				phoneNumber: phoneNumber,
				address: address?.toLowerCase(),
				city: city?.toLowerCase(),
				state: state?.toLowerCase(),
				countryOrRegion: countryOrRegion?.toLowerCase(),
				onboarded: true,
			},
			{ upsert: true }
		);
		if (path == "/profile/edit") {
			revalidatePath(path);
		}
	} catch (error: any) {
		throw new Error(`Failed to create/update user :${error.message}`);
	}
}

const ConnectionToDb = () => {
	try {
		return connectToDB();
	} catch (error: any) {
		throw new Error(`Failed to connect to mongoDB :${error.message}`);
	}
};
