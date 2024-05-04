import Auth from "../models/authModel";
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const registerUser = async (req: Request, res: Response) => {
  const { email, password, cpassword } = req.body;
  if (password !== cpassword) {
    res.status(403).json({
      success: false,
      message: "Passwords do not match",
    });
    return;
  }
  const isRegistered = await Auth.findOne({ email: email });
  if (isRegistered) {
    res.status(403).json({
      success: false,
      message: "User already registered",
    });
    return;
  }
};
