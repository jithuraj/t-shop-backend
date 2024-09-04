import Product from "../models/product.js";

export default class ProductRepository {
  add() {}
  async list() {
    try {
      const product = await Product({ name: "jithu" }).save();
      console.log("jithuraj", product);
    } catch (err) {
      console.log(err);
    }
  }
}
