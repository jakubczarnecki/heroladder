import { genSalt, hash, compare } from "bcrypt";
import { body } from "express-validator";

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

export default { encryptPassword, comparePassword, pictureFrom };
