import { genSalt, hash, compare } from "bcrypt";
import { body, validationResult } from "express-validator";

const encryptPassword = async (password) => {
  const salt = await genSalt(10);
  const hashedPassword = await hash(password, salt);
  return hashedPassword;
};

const comparePassword = async (password, databasePassword) => {
  return await compare(password, databasePassword);
};

const pictureFrom = (file) => {
  return {
    name: file.originalname,
    data: file.buffer,
    contentType: "image/png",
  };
};

const validateUsername = () => {
  return body("username").isLength({ min: 3, max: 20 }).withMessage({
    type: "username",
    message: "Username must be in 3-20 chars.",
  });
};

const validateEmail = () => {
  return body("email").isEmail().withMessage({
    type: "email",
    message: "This e-mail is invalid.",
  });
};

const validatePassword = () => {
  return body("password1").isLength({ min: 6, max: 20 }).withMessage({
    type: "password1",
    message: "Password must be in 6-20 chars.",
  });
};

export default { encryptPassword, comparePassword, pictureFrom, validateUsername, validateEmail, validatePassword };
