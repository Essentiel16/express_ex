const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

// const arr = [
//     { city: "ib", population: 6000 },
//     { city: "lagos", population: 6000 }
// ]
// app.get('/country/:city', (req, res) => {
//     // res.status(200), json({data: arr[0]})
//     const city = req.params.city;
//     const data = arr.filter(el => el.city == city)
//     res.status(200).json({data})
// })

// Todo get, post and patch request
/*const todos  = [
    {
        id: 1,
        title: "Eat",
        isComplete: false
    },
    {
        id: 2,
        title: "Sleep",
        isComplete: false
    },
    {
        id: 3,
        title: "Walk",
        isComplete: false
    }
]
app.get('/todo', (req, res) => {
    res.status(200).json(todos)
})
app.post('/todo', (req, res) => {
    const { id, title } = req.body
    if( !id ||!title ) {
        return res
        .status(400)
        .json({status: "fail", message: "Incomplete details"})
    }
    if (todos.find(el => `${el.id}` == id)) {
        return res
        .status(409)
        .json({status: "fail", message: "Todo id already exist"})
    }
    todos.push(req.body)
    res.status(201).json({status: "success", message: "Todo created"})
})
app.get('/todo/:todoId', (req, res) => {
    const { todoId } = req.params
    const singleTodo = todos.find(el => `${el.id}` == todoId)
    if (!singleTodo) {
        res.status(200).json({status: "success", message: "Todo fetched successfully", data: singleTodo})
    }
    res.status(404).json({status: "fail", message: `Todo with id ${todoId} not found`})
})
app.patch('/todo/:todoId', (req, res) => {
    const { todoId } = req.params
    const singleTodo = todos.find(el => `${el.id}` == todoId)
    if (singleTodo) {
        singleTodo.isComplete == !singleTodo.isComplete
        res.status(200).json({status: "success", message: "Todo has been completed", data: singleTodo})
    }
    res.status(400).json({status: "fail", message: `Todo with id ${todoId} not found`})
})*/

/*app.post('/post', function(res, req) {
    console.log(req.body);
    res.status(200).json({response: req.body})
})*/

/*app.get('/', function(res, req) {
    res.send('Hello World')
})*/

//assignment
const user = [
    {
        firstName: '',
        lastName: '',
        password: '',
        email: '',
        username: ''
    }
]
app.post('/user', (req, res) => {
    const { email, username } = req.body
    if( !email ||!username ) {
        return res
        .status(400)
        .json({status: "fail", message: "Incomplete details"})
    }
    if (user.find(el => `${el.email}` == email && `${el.username}` == username)) {
        return res
        .status(409)
        .json({status: "fail", message: "User already exist"})
    }
    user.push(req.body)
    res.status(201).json({status: "success", message: "You have logged in successfully"})
})

app.patch('/user/:emailId', (req, res) => {
    const { email } = req.params
    const singleUser = user.find(el => `${el.email}` === email)
    if (singleUser) {
        if(singleUser.email !== req.body.email) {
            res.status(404).json({status: "fail", message: "User email does not exist"})
        }
        singleUser.firstName = req.body.firstName
        singleUser.lastName = req.body.lastName
        singleUser.password = req.body.password
        res.status(200).json({status: "success", message: "User detail updated successfully", data: singleUser})
    }
    res.status(400).json({status: "fail", message: `User with email ${email} not found`})
})
app.post('/user/login', (req, res) => {
    const { email, password } = req.body
    if ( !email || !password ) {
        return res
        .status(400)
        .json({status: "fail", message: "Invalid email and password"})
    }
    const checkUser = user.find(el => el.email === email)
    if(!checkUser) {
        return res
        .status(400)
        .json({status: "fail", message: "User does not exist"})
    }
    if (checkUser.password != password) {
        return res
        .status(409)
        .json({status: "fail", message: "Incorrect password, use the new password"})
    }
    res.status(200).json({status: "success", message: "Login successful"})
})

app.listen(port,() => {
    console.log(`Example app listening at http://localhost:${port}`)
})