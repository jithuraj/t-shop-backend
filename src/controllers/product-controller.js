import productMessages from "../config/productMessages.js";
import ProductRepository from "../repositories/productRepository.js";
import validateProductAdd from "../requests/add.js";
import productResource from "../resources/productResource.js";

export default class ProductController {

  constructor() {
    this.productRepository = new ProductRepository();
  }

  add = async (req, res) => {
    try {
      const requestData = validateProductAdd(req.body)
      const product = await this.productRepository.add(requestData);
      if (product) {
        res.status(200).json({ status: true, message: productMessages.addSuccess, data: product })
      } else {
        res.status(200).json({ status: false, message: productMessages.addFail })
      }
    } catch (err) {
      console.log('jithuraj', err);
      res.status(500).json({ status: false, message: productMessages.addFail });
    }
  }

  list = async (_, res) => {
    try {
      const products = await this.productRepository.list();
      const data = products.map(product => productResource(product));
      if (products.length > 0) {
        res
          .status(200)
          .json({ status: true, message: productMessages.listSuccess, data: data });
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
