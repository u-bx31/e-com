import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
	userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
	products: [
		{
			productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
			quantity: { type: Number },
			price: { type: Number },
		},
	],
	orderDate: { type: Date, default: Date.now },
	totalAmount: { type: Number },
	status: { type: String }, // Order status (e.g., Processing, Shipped, Delivered, etc.)
	shippingAddress: {
		street: { type: String },
		city: { type: String },
		state: { type: String },
		zipCode: { type: String },
		country: { type: String },
	},
	paymentMethod: { type: String },
	paymentStatus: { type: String }, // Payment status (e.g., Paid, Pending, etc.)
	createdAt: { type: Date, default: Date.now },
	updatedAt: { type: Date, default: Date.now },
});

const Order = mongoose.models.Order || mongoose.model("Order", orderSchema);

export default Order;
