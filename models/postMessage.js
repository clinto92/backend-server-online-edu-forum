import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  fullname: String,
  email: String,
  rollNumber: String,
  age: Number,
  class: String,
  address: String,
  city: String,
  pinCode: String,
  country: String,
  totalPayment: Number,
  paymentReceived: Number,
  paymentDue: Number,
  textarea: String,
  listening: Boolean,
  reading: Boolean,
  writing: Boolean,
  speaking: Boolean,
  admissionDate: Date,
  courseCompletion: Boolean,
  IMPS: Boolean,
  GooglePay: Boolean,
  NEFT: Boolean,
  PhonePe: Boolean,
  CASH: Boolean,
  teacherAssigned: [String],
});

var PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;
