import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import AdminModel from "../models/admin.js";
import PostMessage from "../models/postMessage.js";
import TeacherModel from "../models/teacherModel.js";

const secret = "test";

export const signin = async (req, res) => {
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
};

export const signupTeacher = async (req, res) => {
  const {
    email,
    password,
    username,
    teachername,
    contact,
    uniqueEmployeeID,
  } = req.body;

  try {
    const oldUser = await TeacherModel.findOne({ email });

    if (oldUser)
      return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await TeacherModel.create({
      email,
      password: hashedPassword,
      teachername,
      contact,
      uniqueEmployeeID,
      username,
    });
    res.set("Access-Control-Allow-Origin", "*");
    res.status(201).json({ result });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });

    console.log(error);
  }
};

// below is only fired for admin user credential creations
// export const signup = async (req, res) => {
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

export const getAdminInfo = async (req, res) => {
  try {
    const postMessages = await AdminModel.find();

    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  const post = req.body;
  console.log(post);
  const studentsData = new PostMessage({
    ...post,
    createdAt: new Date().toISOString(),
  });

  try {
    await studentsData.save();

    res.status(201).json(studentsData);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();

    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getTeacherInfo = async (req, res) => {
  try {
    const postMessages = await TeacherModel.find();

    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
