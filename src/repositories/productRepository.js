import Product from "../models/product.js";

export default class ProductRepository {
  async add(data) {
    try {
      const product = await Product(data).save();
      return product;
    } catch (err) {
      console.log(err);
    }
  }
  async list() {
    try {
      const products = await Product.find();
      const reversedProducts = products.reverse();
      return reversedProducts;
    } catch (err) {
      console.log(err);
    }
  }
}
