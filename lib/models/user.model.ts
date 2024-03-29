import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
	id: { type: String },
	email: { type: String },
	firstName: { type: String },
	lastName: { type: String },
	image: { type: String },
	onBoarded: {
		type: Boolean,
		default: false,
	},
	address: {
		street: { type: String },
		city: { type: String },
		state: { type: String },
		zipCode: { type: String },
		countryOrRegion: { type: String },
	},
	phoneNumber: { type: String },
	wishlist: [
		{
			productId: {
				type: mongoose.Schema.Types.ObjectId,
				ref: "Product",
			},
			addedAt: { type: Date, default: Date.now },
		},
	],
	cart: [
		{
			productId: {
				type: mongoose.Schema.Types.ObjectId,
				ref: "Product",
			},
			quantity: { type: Number },
			addedAt: { type: Date, default: Date.now },
		},
	],
	orders: [
		{
			orderId: {
				type: mongoose.Schema.Types.ObjectId,
				ref: "Order",
			},
		},
	],
	createdAt: { type: Date, default: Date.now },
	updatedAt: { type: Date, default: Date.now },
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
