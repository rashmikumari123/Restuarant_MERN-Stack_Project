import mongoose from "mongoose";
import validator from "validator";

const contactSchema = new mongoose.Schema({
   name: {
    type: String,
    required: true,
    minLength: [3, " Name must be of at least 3 Characters."],
    maxLength: [30, " Name cannot exceed 30 Characters."],
   },
   email: {
    type: String,
    required: true,
    validate: [validator.isEmail, "Provide a valid email"],
   },
   message: {
    type: String,
    required: [true, "Message is required"],
    maxlength: 1000,
   },

});
 export const Contact = mongoose.model("Contact", contactSchema);