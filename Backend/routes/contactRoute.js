import express from "express";
import send_contact from "../controller/contact.js";

const router = express.Router();

router.post("/send", send_contact);

export default router;