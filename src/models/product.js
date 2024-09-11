import mongoose from "mongoose";

const Product = mongoose.model("Product", {
  name: { type: String, required: true },
  price: Number,
  discounted_price: Number,
  price_drop_duration: Number,
  image_path: String,
});

export default Product;
