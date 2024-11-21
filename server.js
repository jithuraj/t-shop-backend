import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import handleRoutes from "./src/utils/routes.js";
import connectMongoDb from "./src/config/connectMongoDb.js";
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = process.env.PORT;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())

// Middleware to console logs
app.use((req, res, next) => {
  const start = Date.now();

  res.on('finish', () => {
    const duration = Date.now() - start;
    console.log(`${req.method} ${req.originalUrl} - ${res.statusCode} - ${duration}ms`);
  });

  next();
});

connectMongoDb();
handleRoutes(app);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
