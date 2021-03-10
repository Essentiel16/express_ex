const todoArray = require('../models')

const addNewTodo = (data) => {
    const id = uuidv4()
    return todoArray.push({...data, id})
}

const findTodoIndex = (id) => todoArray.findIndex((el) => el.id = id)
const updateTodo = (data, id) => {
    const todoDetails = todoArray.find((el) => el.id === id)
    const updateTodo = {...todoDetails, ...data}
    const index = todoArray.findIndex((el) => el.id === id)
    todoDetails[index] = updateTodo
    return updateTodo
}
const getSingleTodo = (id) => todoArray.find((el) => el.id === id)

const deleteTodo = (id) => {
    const index = todoArray.findIndex((el) => el.id === id)
    return todoArray.splice(index,1)
}

module.exports = {
    addNewTodo,
    findTodoIndex,
    getSingleTodo,
    updateTodo,
    deleteTodo
}