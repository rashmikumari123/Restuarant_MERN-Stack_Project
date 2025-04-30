import express from 'express';
import { sendReservation } from '../controller/reservation.js'

//Creates a mini Express app
const router = express.Router();


router.post("/send", sendReservation);

export default router;