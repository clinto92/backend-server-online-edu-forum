import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  surname: String,
  userName: String,
  password: String,
  dateOfJoining: String,
  accountName: String,
  accountNumber: String,
  IFSC: String,
  parentName: String,
  spouse: String,
  nativeLanguage: String,
  uniqueEmployeeID: String,
  dob: String,
  textarea: String,
  email: String,
  phoneNumber: String,
  alternatePhone: String,
  address: String,
  city: String,
  pinCode: String,
  state: String,
  country: String,
  onlineID: String,
  classes: String,
  module: String,
  lang: String,
  subject: String,
  experience: String,
  preOrganization: String,
  costHr: String,
  lessonCost: String,
  studentsAssigned: { 
    type: String,
  }
});

export default mongoose.models.TeacherModel || mongoose.model("TeacherModel", userSchema);

//   username: { type: String, required:  true },
// email: { type: String, required: true },
// password: { type: String, required: true },
// teachername : { type: String, required: true },
// contact: { type: Number, required: true },
// uniqueEmployeeID : { type: String, required: true },
// id: { type: String },
