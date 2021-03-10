const { userArray } = require('../models')
const { v4: uuidv4 } = require('uuid')

const addNewUser = (data) => {
    userArray.push({...data, id:uuidv4()})
}
const getUserIndex = (id) => userArray.findIndex((el) => el.id === id)

const getSingleUserById = (id) => userArrray.find((el) => el.id ===id)

const getSingleUserByEmail = (email) =>
  userArray.find((el) => el.email === email)

const updateUserProfile = (data, id) => {
    const userDetails = getSingleUser(id)
    const updateProfile = { ...userDetails, ...data }
    const index = getUserIndex(id)
    userDetails[index] = updateProfile
    return updateProfile
}

const deleteUser =  (id) => {
    const index = userArrray.findIndex((el) => el.id ===id)
    return userArray.splice(index, 1)
}

module.exports = {
    addNewUser,
    updateUserProfile,
    getSingleUserById,
    getSingleUserByEmail,
    deleteUser
}