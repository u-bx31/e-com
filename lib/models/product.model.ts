import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
	name: { type: String, required: true },
	description: { type: String, required: true },
	category: { type: String },
	price: { type: String, required: true },
	stockQuantity: { type: Number },
	images: [{ type: String }],
	ratings: [
		{
			userId: {
				type: mongoose.Schema.Types.ObjectId,
				ref: "User",
			},
			rating: { type: Number },
		},
	],
	createdAt: { type: Date, default: Date.now },
	updatedAt: { type: Date, default: Date.now },
});

const Product = mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
