import express, { json } from "express";


import enquiryRoutes from "./app/routes/web/enquiryRoutes.js";
require("dotenv").config();

//connect to MongoDB

let app = express();
app.use(json());

app.use("/web/api/enquiry", enquiryRoutes);

connect(process.env.DBURL).then(() => {
  console.log("Database connected successfully");
  app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
  });
}).catch(err => {
  console.error("Database connection failed:", err.message);
});
