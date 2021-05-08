import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import TeacherModel from "../models/teacherModel.js";

const secret = "test";

export const signin = async (req, res) => {
  const { username, password } = req.body;

  try {
    const oldUser = await TeacherModel.findOne({ username });

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

export const getTeacherInfo = async (req, res) => {
  try {
    const postMessages = await TeacherModel.find();

    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
