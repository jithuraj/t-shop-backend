import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import handleRoutes from "./src/utils/routes.js";
import connectMongoDb from "./src/config/connectMongoDb.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
connectMongoDb();
handleRoutes(app);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
