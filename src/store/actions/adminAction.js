import actionTypes from './actionTypes';
import {
    getAllCodeService, createNewUserService, getAllUsers,
    deleteUserService, editUserService, getTopDoctorHomeService, getAllDoctors, saveDetailDoctor
} from '../../services/userService';
import { toast } from 'react-toastify';
// export const fetchGenderStart = () => ({
//     type: actionTypes.FETCH_GENDER_START
// })
export const fetchGenderStart = () => {
    return async (dispatch, getState) => {
        try {
            dispatch({
                type: actionTypes.FETCH_GENDER_START
            })
            let res = await getAllCodeService("GENDER");
            if (res && res.errCode === 0) {
                dispatch(fetchGenderSuccess(res.data));
            } else {
                dispatch(fetchGenderFaided());
            }
        } catch (e) {
            fetchGenderFaided();
            console.log("fetchGenderStart error: ", e)
        }
    }

}
export const fetchGenderSuccess = (genderData) => ({
    type: actionTypes.FETCH_GENDER_SUCCESS,
    data: genderData
})
export const fetchGenderFaided = () => ({
    type: actionTypes.FETCH_GENDER_FAIDED
})

export const fetchPositonSuccess = (positionData) => ({
    type: actionTypes.FETCH_POSITION_SUCCESS,
    data: positionData
})
export const fetchPositionFaided = () => ({
    type: actionTypes.FETCH_POSITION_FAILDED
})

export const fetchRoleSuccess = (roleData) => ({
    type: actionTypes.FETCH_ROLE_SUCCESS,
    data: roleData
})
export const fetchRoleFaided = () => ({
    type: actionTypes.FETCH_ROLE_FAIDED
})


export const fetchPositionStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllCodeService("POSITION");
            if (res && res.errCode === 0) {
                dispatch(fetchPositonSuccess(res.data));
            } else {
                dispatch(fetchPositionFaided());
            }
        } catch (e) {
            fetchPositionFaided();
            console.log("fetchPositionStart error: ", e)
        }
    }

}

export const fetchRoleStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllCodeService("ROLE");
            if (res && res.errCode === 0) {
                dispatch(fetchRoleSuccess(res.data));
            } else {
                dispatch(fetchRoleFaided());
            }
        } catch (e) {
            fetchRoleFaided();
            console.log("fetchRoleStart error: ", e)
        }
    }

}

export const createNewUser = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await createNewUserService(data);
            if (res && res.errCode === 0) {
                toast.success("Create a new user succeed")
                dispatch(saveUserSuccess());
                dispatch(fetchAllUsersStart());
            } else {
                toast.error("Delete the user succeed")
                dispatch(saveUserFailed());
            }
        } catch (e) {
            saveUserFailed();
            console.log("fetchRoleStart error: ", e)
        }
    }
}

export const saveUserSuccess = () => ({
    type: actionTypes.CREATE_USER_SUCCESS
})
export const saveUserFailed = () => ({
    type: actionTypes.CREATE_USER_FAILDED
})

export const fetchAllUsersStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllUsers("ALL");
            if (res && res.errCode === 0) {
                dispatch(fetchAllUsersSuccess(res.users.reverse())); //data lay tu API ve
            } else {
                toast.error("Fetch all user error!")
                dispatch(fetchAllUsersFailded());
            }
        } catch (e) {
            toast.error("Fetch all user error!")
            fetchAllUsersFailded();
            console.log("fetchAllUsersStart error: ", e)
        }
    }

}

export const fetchAllUsersSuccess = (data) => ({
    type: actionTypes.FETCH_ALL_USERS_SUCCESS,
    users: data
})

export const fetchAllUsersFailded = () => ({
    type: actionTypes.FETCH_ALL_USERS_FAILEDE
})

export const deleteAUser = (userId) => {
    return async (dispatch, getState) => {
        try {
            let res = await deleteUserService(userId);
            if (res && res.errCode === 0) {
                toast.success("Delete the user succeed!")
                dispatch(deleteUserSuccess());
                dispatch(fetchAllUsersStart());
            } else {
                toast.error("Delete the user error!")
                dispatch(deleteUserFailed());
            }
        } catch (e) {
            toast.error("Delete the user error!")
            deleteUserFailed();
            console.log("fetchRoleStart error: ", e)
        }
    }
}

export const deleteUserSuccess = () => ({
    type: actionTypes.DELETE_USER_SUCCESS,
})

export const deleteUserFailed = () => ({
    type: actionTypes.DELETE_USER_FAILDED,
})

export const editAUser = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await editUserService(data);
            if (res && res.errCode === 0) {
                toast.success("Update the user succeed!")
                dispatch(editUserSuccess());
                dispatch(fetchAllUsersStart());
            } else {
                toast.error("Update the user error!")
                dispatch(editUserFailed());
            }
        } catch (e) {
            toast.error("Update the user error!")
            editUserFailed();
            console.log("editUserFailed error: ", e)
        }
    }
}

export const editUserSuccess = () => ({
    type: actionTypes.EDIT_USER_SUCCESS
})
export const editUserFailed = () => ({
    type: actionTypes.EDIT_USER_FAILDED
})
export const fetchTopDoctor = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getTopDoctorHomeService('10');
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.FETCH_TOP_DOCTOR_SUCCESS,
                    dataDoctors: res.data
                })
            } else {
                dispatch({ //action 
                    type: actionTypes.FETCH_TOP_DOCTOR_FAILDED,
                })
            }
        } catch (e) {
            console.log("FETCH_TOP_DOCTOR_FAILDED: ", e)
            dispatch({
                type: actionTypes.FETCH_TOP_DOCTOR_FAILDED,
            })
        }
    }
}
export const fetchAllDoctors = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllDoctors();
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.FETCH_ALL_DOCTOR_SUCCESS,
                    dataDr: res.data
                })
            } else {
                dispatch({ //action 
                    type: actionTypes.FETCH_ALL_DOCTOR_FAILDED,
                })
            }
        } catch (e) {
            console.log("FETCH_TOP_DOCTOR_FAILDED: ", e)
            dispatch({
                type: actionTypes.FETCH_ALL_DOCTOR_FAILDED,
            })
        }
    }
}

export const saveDetailInforDoctor = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await saveDetailDoctor(data);
            if (res && res.errCode === 0) {
                toast.success("Save infor detail succeed!")
                dispatch({
                    type: actionTypes.FETCH_SAVE_DETAIL_DOCTOR_SUCCESS,
                })
            } else {
                toast.error("Error infor detail succeed!")
                dispatch({ //action 
                    type: actionTypes.FETCH_SAVE_DETAIL_DOCTOR_FAILDED,
                })
            }
        } catch (e) {
            toast.error("Error infor detail succeed!")
            console.log("FETCH_SAVE_DETAIL_DOCTOR_FAILDED: ", e)
            dispatch({
                type: actionTypes.FETCH_SAVE_DETAIL_DOCTOR_FAILDED,
            })
        }
    }
}
export const fetchAllScheduleTime = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllCodeService("TIME");
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.FETCH_ALLCODE_SCHEDULE_TIME_SUCCESS,
                    dataTime: res.data
                })
            } else {
                dispatch({ //action 
                    type: actionTypes.FETCH_ALLCODE_SCHEDULE_TIME_FAILDED,
                })
            }
        } catch (e) {
            console.log("FETCH_ALLCODE_SCHEDULE_TIME_FAILDED: ", e)
            dispatch({
                type: actionTypes.FETCH_ALLCODE_SCHEDULE_TIME_FAILDED,
            })
        }
    }
}
