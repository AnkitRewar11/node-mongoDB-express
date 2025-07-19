let express = require("express");
let mongoose = require("mongoose");
let enquiryModule = require("./app/module/enquiry.module");
require("dotenv").config();

let app = express();
app.use(express.json());

app.post("/api/enquiry-insert", (req, res) => {
  let { name, email, message, phone } = req.body;
  let enquiry = new enquiryModule({
    name: name,
    email: email,
    message: message,
    phone: phone,
  });
  enquiry
    .save()
    .then(() => {
      res.send({ status: 1, message: "Data saved successfully" });
    })
    .catch((err) => {
      res.send({ status: 0, message: "Error saving data", error: err.message });
    });
  console.log(req.body);
});

app.get("/api/enquiry-list", async (req, res) => {
  let enquiryList = await enquiryModule.find({});
  res.status(200).send({
    status: 1,
    message: "Enquiry list fetched successfully",
    data: enquiryList,
  });
});

app.delete("/api/enquiry-delete/:id", async (req, res) => {
  let enquiryId = req.params.id;
  try {
    await enquiryModule.findByIdAndDelete(enquiryId);
    res.status(200).send({
      status: 1,
      message: "Enquiry deleted successfully",
    });
  } catch (err) {
    res.status(500).send({
      status: 0,
      message: "Error deleting enquiry",
      error: err.message,
    });
  }
});

app.put("/api/enquiry-update/:id", async (req, res) => {
  let enquiryId = req.params.id;
  let { name, email, message, phone } = req.body;
  try {
    let updatedEnquiry = await enquiryModule.findByIdAndUpdate(
      enquiryId,
      { name, email, message, phone },
      { new: true }
    );
    res.status(200).send({
      status: 1,
      message: "Enquiry updated successfully",
      data: updatedEnquiry,
    });
  } catch (err) {
    res.status(500).send({
      status: 0,
      message: "Error updating enquiry",
      error: err.message,
    });
  }
});

mongoose.connect(process.env.DBURL).then(() => {
  console.log("Database connected successfully");
  app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
  });
});
