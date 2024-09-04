import express from "express";
import ProductController from "../controllers/product-controller.js";

const productRouter = express.Router();

const productController = new ProductController();

productRouter.get("/add", productController.add);
productRouter.get("/list", productController.list);

export default productRouter;
