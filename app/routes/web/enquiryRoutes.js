import { Router } from "express";
import { enquiryInsert, enquiryList, deleteEnquiry, enquiryUpdate } from "../../controller/web/userEnquiryController.js";
      

const enquiryRoutes = Router();

enquiryRoutes.post("/enquiry-insert", enquiryInsert);
enquiryRoutes.get("/enquiry-list", enquiryList);
enquiryRoutes.delete("/enquiry-delete/:id", deleteEnquiry);
enquiryRoutes.put("/enquiry-update/:id", enquiryUpdate);

export default enquiryRoutes;
