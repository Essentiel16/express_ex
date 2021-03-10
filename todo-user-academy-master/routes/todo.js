const { Router } = require("express");

const { saveTodo, loginNewTodo } = require("../controllers");
const { validateTodoTitle, checkIfTodoTitleExists } = require("../middlewares");

const todoRouter = Router();

userRouter.post("/register", validateTodoTitle, checkIfTodoTitleExists, saveTodo);
userRouter.post("/login",  loginNewTodo);

module.exports = todoRouter;
