import axios from "../axios";


const handleLoginApi = (userEmail, userPassword) => {
    return axios.post('http://localhost:8888/api/login', { email: userEmail, password: userPassword });
}

const getAllUsers = (inputId) => {
    return axios.get(`http://localhost:8888/api/get-all-users?id=${inputId}`)
}
const createNewUserService = (data) => {
    console.log('check data from service: ', data);
    return axios.post(`http://localhost:8888/api/create-new-user`, data)
}
const deleteUserService = (userId) => {
    return axios.delete(`http://localhost:8888/api/delete-user`, { data: { id: userId } })

};
const editUserService = (inputData) => {
    return axios.put(`http://localhost:8888/api/edit-user`, inputData)
}

export {
    handleLoginApi, getAllUsers, createNewUserService, deleteUserService, editUserService
}