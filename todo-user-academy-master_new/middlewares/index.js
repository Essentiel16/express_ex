const { validateSignup, validateLogin, checkIfUserExists } = require('./user');
const { validateTodoTitle, checkIfTodoExists, checkTodoOwner } = require('./todo');
const { authenticate } = require('./auth');

module.exports = {
  validateLogin,
  validateSignup,
  checkIfUserExists,
  validateTodoTitle,
  checkIfTodoExists,
  checkTodoOwner,
  authenticate,
};
