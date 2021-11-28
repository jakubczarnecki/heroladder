import { genSalt, hash, compare } from "bcrypt";

const encryptPassword = async (password) => {
  const salt = await genSalt(10);
  const hashedPassword = await hash(password, salt);
  return hashedPassword;
};

const comparePassword = async (password, databasePassword) => {
  return await compare(password, databasePassword);
};

export default { encryptPassword, comparePassword };
