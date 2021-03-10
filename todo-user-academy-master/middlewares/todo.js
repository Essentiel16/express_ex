const Joi = require('joi')
const { todoTitleSchema } = require('../validation')
const { getSingleTodo } = require('../services')

const validateTodoTitle = (req, res, next) => {
    try{
        const { error } = todoTitleSchema.validate(req.body)
        if (!error) {
            return next()
        }
        res.status(400).json({ status: "fail", message: error.message });
    } catch (error) {
        res.status(500).json({ status: "fail", message: "Something went wrong." });
    }
}

const checkIfTodoTitleExists = (req, res, next) => {
    try{
        const todo = getSingleTodo(req.body.title)
        if (!todo) {
            return next ()
        }
        res.status(409).json({ status: "fail", message: error.message });
    } catch (error) {
        res.status(500).json({ status: "fail", message: "Something went wrong." });
    }
}

module.export = {
    validateTodoTitle,
    checkIfTodoTitleExists
}