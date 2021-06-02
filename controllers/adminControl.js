import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import AdminModel from "../models/admin.js";
import StudentModels from "../models/StudentModels.js";
import TeacherModel from "../models/TeacherModel.js";

const secret = "test";
import express from "express";
import mongoose from "mongoose";
const router = express.Router();

// amin
export const getAdminInfoControl = async (req, res,next) => {
  try {
    const dataCore = await AdminModel.find();

    res.status(200).json(dataCore);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
  next()
};

// below is only fired for admin user credential creations
// export const signupAdminControl = async (req, res) => {
//   const {
//     email,
//     password,
//     username,
//     name,
//     contact,
//     uniqueEmployeeID,
//   } = req.body;

//   try {
//     const oldUser = await AdminModel.findOne({ email });

//     if (oldUser)
//       return res.status(400).json({ message: "User already exists" });

//     const hashedPassword = await bcrypt.hash(password, 12);

//     const result = await AdminModel.create({
//       email,
//       password: hashedPassword,
//       name,
//       contact,
//       uniqueEmployeeID,
//       username,
//     });
//     res.set("Access-Control-Allow-Origin", "*");
//     res.status(201).json({ result });
//   } catch (error) {
//     res.status(500).json({ message: "Something went wrong" });

//     console.log(error);
//   }
// };
export const signinControl = async (req, res, next) => {
  const { username, password } = req.body;

  try {
    const oldUser = await AdminModel.findOne({ username });

    if (!oldUser)
      return res.status(404).json({ message: "User doesn't exist" });

    const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);

    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign(
      { username: oldUser.username, id: oldUser._id },
      secret,
      { expiresIn: "1h" }
    );

    res.status(200).json({ result: oldUser, token });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
  next()
};

export const updateAdminControl = async (req, res, next) => {
  const { id } = req.params;
  const {
    name,
    email,
    organization,
    GST,
    contact,
    uniqueEmployeeID,
    username,
    password,
    pictureFile,
  } = req.body;

  try {
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send(`No admin with id: ${id}`);
    const updatedPost = {
      name: "",
      email: "",
      organization: "",
      GST: "",
      contact: "",
      uniqueEmployeeID: "",
      username: "",
      password: "",
      pictureFile: "",
      _id: id,
    };
    await AdminModel.findByIdAndUpdate(id, updatedPost, { new: true });
    res.json(updatedPost);
  } catch (error) {
    res.send(error);
    console.log(error);
  }
  next()
};
// teacher
export const updateTeacherControl = async (req, res) => {
  const { id } = req.params;
  const { 
    firstName,
    lastName,
    surname,
    userName,
    password,
    dateOfJoining,
    accountName,
    accountNumber,
    IFSC,
    parentName,
    spouse,
    nativeLanguage,
    uniqueEmployeeID,
    dob,
    textarea,
    email,
    phoneNumber,
    alternatePhone,
    address,
    city,
    pinCode,
    state,
    country,
    onlineID,
    classes,
    module,
    lang,
    subject,
    experience,
    preOrganization,
    costHr,
    lessonCost,
    studentsAssigned } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  const updatedPost = { 
    firstName,
    lastName,
    surname,
    userName,
    password,
    dateOfJoining,
    accountName,
    accountNumber,
    IFSC,
    parentName,
    spouse,
    nativeLanguage,
    uniqueEmployeeID,
    dob,
    textarea,
    email,
    phoneNumber,
    alternatePhone,
    address,
    city,
    pinCode,
    state,
    country,
    onlineID,
    classes,
    module,
    lang,
    subject,
    experience,
    preOrganization,
    costHr,
    lessonCost,
    studentsAssigned };
   console.log(id, updatedPost)
  await TeacherModel.updateOne({"_id": ObjectID(req.params)}, (doc) => ({ ...doc, updatedPost }) , { new: true });

  res.json(updatedPost);
};
// const updatedUser = await userService.updateOne(
//   { _id: '1' },
//   (doc) => ({ ...doc, name: 'Alex' }),
// );


export const deleteTeacherControl = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No teacher with id: ${id}`);

  await TeacherModel.findByIdAndRemove(id);

  res.json({ message: "Teacher data deleted successfully." });
};

export const getTeacherInfoControl = async (req, res,next) => {
  try {
    const dataCore = await TeacherModel.find();

    res.status(200).json(dataCore);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
  next()
};

export const signupTeacherControl = async (req, res, next) => {
  const {
    firstName,
    lastName,
    surname,
    userName,
    dateOfJoining,
    accountName,
    accountNumber,
    IFSC,
    parentName,
    spouse,
    nativeLanguage,
    uniqueEmployeeID,
    dob,
    textarea,
    email,
    phoneNumber,
    alternatePhone,
    address,
    city,
    pinCode,
    state,
    country,
    onlineID,
    classes,
    module,
    lang,
    subject,
    experience,
    preOrganization,
    costHr,
    lessonCost,
    password,
  } = req.body;

  try {
    const oldUser = await TeacherModel.findOne({ email });

    if (oldUser)
      return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await TeacherModel.create({
      password: hashedPassword,
      firstName,
      lastName,
      surname,
      userName,
      dateOfJoining,
      accountName,
      accountNumber,
      IFSC,
      parentName,
      spouse,
      nativeLanguage,
      uniqueEmployeeID,
      dob,
      textarea,
      email,
      phoneNumber,
      alternatePhone,
      address,
      city,
      pinCode,
      state,
      country,
      onlineID,
      classes,
      module,
      lang,
      subject,
      experience,
      preOrganization,
      costHr,
      lessonCost,
    });
    // res.set("Access-Control-Allow-Origin", "*");
    res.status(201).json({ result });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });

    console.log(error);
  }
  next()
};


// students
export const createPostControl = async (req, res, next) => {
  const post = req.body;
  console.log(post);
  const studentsData = new StudentModels({
    ...post,
    createdAt: new Date().toISOString(),
  });

  try {
    await studentsData.save();

    res.status(201).json(studentsData);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
  next()
};

export const getPostsControl = async (req, res, next) => {
  try {
    const dataCore = await StudentModels.find();

    res.status(200).json(dataCore);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
  next()
};

export const updateStudentControl = async (req, res, next) => {
  const { id } = req.params;
  const data = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No student with id: ${id}`);

  try {
    await StudentModels.updateOne(
       { _id : id },
       { $set: { data } },
       { upsert: true }
    );
    res.json(updatedPost);
    console.log(updatedPost)
 } catch (e) {
   console.log(e);
 }

  // await StudentModels.updateOne(id, updatedPost, { new: true });

  
  next()
};

// db.students3.updateOne(
//   { _id: 3 },
//   [
//     { $set: { average: { $trunc: [  { $avg: "$tests" }, 0 ] }, lastUpdate: "$$NOW" } },
//     { $set: { grade: { $switch: {
//                           branches: [
//                               { case: { $gte: [ "$average", 90 ] }, then: "A" },
//                               { case: { $gte: [ "$average", 80 ] }, then: "B" },
//                               { case: { $gte: [ "$average", 70 ] }, then: "C" },
//                               { case: { $gte: [ "$average", 60 ] }, then: "D" }
//                           ],
//                           default: "F"
//     } } } }
//   ]
// )

export const deleteStudentControl = async (req, res, next) => {
  const { id }  = req.params;
  console.log(id)
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No student with id: ${id}`);

  await StudentModels.findByIdAndRemove(id);

  res.json({ message: "Student data deleted successfully." });
  next()
};

export default router;
