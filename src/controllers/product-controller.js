import productMessages from "../config/productMessages.js";
import ProductRepository from "../repositories/productRepository.js";

export default class ProductController {
  constructor() {
    this.productRepository = new ProductRepository();
  }

  add(_, res) {
    try {
    } catch (err) {
      res.status(500).json({ status: false, message: productMessages.addFail });
    }
  }

  list = async (_, res) => {
    try {
      const products = await this.productRepository.list();
      if (products.length > 0) {
        res
          .status(200)
          .json({ status: true, message: productMessages.listSuccess });
      } else {
        res
          .status(200)
          .json({ status: false, message: productMessages.listFail });
      }
    } catch (err) {
      console.log("jithuraj", err);
      res
        .status(500)
        .json({ status: false, message: productMessages.listFail });
    }
  };
}
