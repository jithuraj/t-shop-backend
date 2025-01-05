import express from "express";
import ProductController from "../controllers/product-controller.js";

const productRouter = express.Router();

const productController = new ProductController();

productRouter.post("/add", productController.add);
productRouter.post("/delete", productController.delete);
productRouter.get("/list", productController.list);

export default productRouter;
