import mongoose from "mongoose";

const studentSchema = mongoose.Schema({
  firstName: String,
    lastName: String,
    surname: String,
    fatherName: String,
    motherName: String,
    nativeLanguage: String,
    dateOfBirth: String,
    email: String,
    phoneNumber: String,
    alternatePhone: String,
    onlineID: String,
    rollNumber: String,
    age: String,
    class: String,
    address: String,
    city: String,
    pinCode: String,
    state: String,
    country: String,
    totalPayment: String,
    paymentReceived: String,
    paymentDue: String,
    paymentReceipt: String,
    textarea: String,
    assigned: {
      listening: {
        opted: false,
        dateOfAssign: String,
        moduleEndDate: String,
        moduleCost: String,
        teacherName: String,
        tutorialCost: String,
        lessonComplete: String,
        tutorialHrsComplete: String,
        teacherID: String,
      },
        reading: {
          opted: false,
          dateOfAssign: String,
          moduleEndDate: String,
          moduleCost: String,
          teacherName: String,
          tutorialCost: String,
          lessonComplete: String,
          tutorialHrsComplete: String,
          teacherID: String,
        },
        
          writing: {
            opted: false,
            dateOfAssign: String,
            moduleEndDate: String,
            moduleCost: String,
            teacherName: String,
            tutorialCost: String,
            lessonComplete: String,
            tutorialHrsComplete: String,
            teacherID: String,
          },
          
            speaking: {
              opted: false,
              dateOfAssign: String,
              moduleEndDate: String,
              moduleCost: String,
              teacherName: String,
              tutorialCost: String,
              lessonComplete: String,
              tutorialHrsComplete: String,
              teacherID: String,
            },
    
    },
    
    admissionDate: String,
    courseCompletion: false,
    IMPS: false,
    GooglePay: false,
    NEFT: false,
    PhonePe: false,
    CASH: false,
});

var StudentModels = mongoose.model("StudentModels", studentSchema);

export default StudentModels;
