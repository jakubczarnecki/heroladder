import { body } from "express-validator";

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

const validateTournamentName = () => {
  return body("tournamentName").isLength({ min: 2, max: 25 }).withMessage({
    type: "tournamentName",
    message: "Tournament name must be in 2-25 chars.",
  });
};

const validateDiscpiline = () => {
  return body("discipline").isLength({ min: 2, max: 20 }).withMessage({
    type: "discipline",
    message: "Custom discipline must be in 2-20 chars.",
  });
};

export { validateUsername, validateEmail, validatePassword, validateTournamentName, validateDiscpiline };
