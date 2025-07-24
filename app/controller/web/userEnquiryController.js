import enquiryModule, { find, findByIdAndDelete, findByIdAndUpdate } from "../../module/enquiry.module";


let enquiryInsert = (req, res) => {
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
};

let enquiryList = async (req, res) => {
  let enquiryList = await find({});
  res.status(200).send({
    status: 1,
    message: "Enquiry list fetched successfully",
    data: enquiryList,
  });
};

let deleteEnquiry = async (req, res) => {
  let enquiryId = req.params.id;
  try {
    await findByIdAndDelete(enquiryId);
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
};

let enquiryUpdate = async (req, res) => {
  let enquiryId = req.params.id;
  let { name, email, message, phone } = req.body;
  try {
    let updatedEnquiry = await findByIdAndUpdate(
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
};

export default { enquiryInsert, enquiryList, deleteEnquiry, enquiryUpdate };
