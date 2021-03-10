const {
    addNewUser,
    updateUserProfile,
    getSingleUserById,
    getSingleUserByEmail,
    deleteUser
 } = require("./user")

const {addNewTodo, updateTodo, getSingleTodo, deleteTodo  } = require('./todo')

module.exports = {
    addNewUser,
    updateUserProfile,
    getSingleUserById,
    getSingleUserByEmail,
    deleteUser,
    addNewTodo,
    updateTodo,
    getSingleTodo,
    deleteTodo,
    }