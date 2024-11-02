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
const getAllCodeService = (inputType) => {
    return axios.get(`http://localhost:8888/api/allcode?type=${inputType}`)
}

const getTopDoctorHomeService = (limit) => {
    return axios.get(`http://localhost:8888/api/top-doctor-home?limit=${limit}`)
}
const getAllDoctors = () => {
    return axios.get(`http://localhost:8888/api/get-all-doctors`)
}
const saveDetailDoctor = (data) => {
    return axios.post(`http://localhost:8888/api/save-infor-doctors`, data)
}
const getDetailInforDoctor = (inputId) => {
    return axios.get(`http://localhost:8888/api/get-detail-doctor-by-id?id=${inputId}`)
}
const saveBulkScheduleDoctor = (data) => {
    return axios.post(`http://localhost:8888/api/bulk-create-schedule`, data)
}
const getScheduleDoctorByDate = (doctorId, date) => {
    return axios.get(`http://localhost:8888/api/get-schedule-doctor-by-date?doctorId=${doctorId}&date=${date}`)
}
const getExtraInforDoctorById = (doctorId) => {
    return axios.get(`http://localhost:8888/api/get-extra-infor-doctor-by-id?doctorId=${doctorId}`)
}
const getProfileDoctorById = (doctorId) => {
    return axios.get(`http://localhost:8888/api/get-profile-doctor-by-id?doctorId=${doctorId}`)
}
export {
    handleLoginApi, getAllUsers, createNewUserService, deleteUserService,
    editUserService, getAllCodeService, getTopDoctorHomeService,
    getAllDoctors, saveDetailDoctor, getDetailInforDoctor, saveBulkScheduleDoctor,
    getScheduleDoctorByDate, getExtraInforDoctorById, getProfileDoctorById
}