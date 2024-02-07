import * as z from "zod";

export const userProfileValidation = z.object({
	profilePicture: z.string().url().optional(),
	email: z.string().email().min(1),
	firstName: z.string().min(3).max(30),
	lastName: z.string().min(3).max(30),
	phoneNumber: z
		.string()
		.regex(/^\+(?:[0-9] ?){9,14}[0-9]$/,{ message: "PhoneNumber must be valid number " })
		.optional(),
});
export const userAddressValidation = z.object({
	address: z.string().min(3).max(1000).optional(),
	city: z.string().min(3).max(30).optional(),
	state: z.string().min(3).max(30).optional(),
	zipCode: z
		.string()
		.regex(/^[0-9A-Za-z\s-]{2,20}$/,{ message: "ZipCode must be valid " })
		.optional(),
	countryOrRegion: z.string().min(4).max(10).optional(),
});
