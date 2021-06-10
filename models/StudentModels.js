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
        Lopted: false,
        LdateOfAssign: String,
        LmoduleEndDate: String,
        LmoduleCost: String,
        LteacherName: String,
        LtutorialCost: String,
        LlessonComplete: String,
        LtutorialHrsComplete: String,
        LteacherID: String,
      },
        reading: {
          Ropted: false,
          RdateOfAssign: String,
          RmoduleEndDate: String,
          RmoduleCost: String,
          RteacherName: String,
          RtutorialCost: String,
          RlessonComplete: String,
          RtutorialHrsComplete: String,
          RteacherID: String,
        },
        
          writing: {
            Wopted: false,
            WdateOfAssign: String,
            WmoduleEndDate: String,
            WmoduleCost: String,
            WteacherName: String,
            WtutorialCost: String,
            WlessonComplete: String,
            WtutorialHrsComplete: String,
            WteacherID: String,
          },
          
            speaking: {
              Sopted: false,
              SdateOfAssign: String,
              SmoduleEndDate: String,
              SmoduleCost: String,
              SteacherName: String,
              StutorialCost: String,
              SlessonComplete: String,
              StutorialHrsComplete: String,
              SteacherID: String,
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
