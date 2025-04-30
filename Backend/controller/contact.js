import ErrorHandler from "../error/error.js";
import { Contact } from "../models/contactSchema.js";

const send_contact = async (req, res, next) => {
    console.log("Received contact form:", req.body);
    const {name, email, message} = req.body; 
    if (!name || !email || !message) {
        return next (new ErrorHandler ("please fill full contact details", 400));
    }
    try {
        await Contact.create({name, email, message});
        res.status(201).json({
            success: true,
            message: "Contact filled successfully",
        });
    } 
    catch (error){
        // Handle Mongoose validation errors
    if (error.name === 'ValidationError') {
        const validationErrors = Object.values(error.errors).map(err => err.message);
        return next(new ErrorHandler(validationErrors.join(', '), 400));   
    }
    return next(error);
  }
};
 export default send_contact;