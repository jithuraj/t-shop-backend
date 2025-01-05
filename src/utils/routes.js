import productRouter from "../routes/productRoutes.js";

export default function handleRoutes(app) {
  app.use("/api/product/", productRouter);
}
