const { addNewTodo, getSingleTodo } = require('../services')


const loginNewTodo = (req, res) => {
  try {
    addNewTodo(req.body);
    res
      .status(201)
      .json({ status: "success", message: "Proceed to save." });
  } catch (error) {
    res.status(500).json({ status: "fail", message: "Something went wrong." });
  }
};
/*const saveTodo = (req, res) => {
  try {
    const { id, title } = req.body;
    const todo = getSingleTodo(id);

    if (todo && todo.id === id ) {
      res.status(200).json({ status: "success", message: "Proceed to save" });
    }
    res.status(401).json({ status: "fail", message: "Invalid" });
  } catch (error) {
    res.status(500).json({ status: "fail", message: "Something went wrong." });
  }
};*/


module.exports = {loginNewTodo}