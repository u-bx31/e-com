"use server";

import { revalidatePath } from "next/cache";
import User from "../models/user.model";
import { connectToDB } from "../mongoose";
import Product from "../models/product.model";
import { FilterQuery, SortOrder } from "mongoose";

interface UserProps {
	userId: string;
	username: string;
	firstName: string;
	lastName: string;
	image: string;
	address: string;
	phoneNumber: string;
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
	username,
	firstName,
	lastName,
	image,
	address,
	phoneNumber,
	path,
}: UserProps): Promise<void> {
	ConnectionToDb();
	try {
		await User.findOneAndUpdate(
			{ id: userId },
			{
				username: username.toLowerCase(),
				firstName: firstName.toLowerCase(),
				lastName: lastName.toLowerCase(),
				image: image,
				address: address.toLowerCase(),
				phoneNumber: phoneNumber,
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
