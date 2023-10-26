import axios from "axios";
import { setCurrentEmployee } from "../../../../store/slices/currentEmployee.Slice";

export const addEmployee = async (name, login, pin, position) => {
    try {
        const response = await axios.post("http://localhost:5000/api/employees", { name, login, pin, position }, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } });

        console.log(response.data.message);
    } catch (e) {
        console.log(e.response.data.message);
    }
};

export const getAllEmployees = async () => {
    try {
        const response = await axios.get("http://localhost:5000/api/employees", { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } });

        return response.data.employees;


    } catch (e) {

        console.log(e.response.data.message);
    }
}

export const getCurrentEmployee = async () => {
    try {
        const response = await axios.get("http://localhost:5000/api/currentEmployee", { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } });

        return response.data.currentEmployee;

    } catch (e) {

        console.log(e.response.data.message);
    }
}

export const deleteEmployee = async (_id) => {
    try {
        const response = await axios.delete(`http://localhost:5000/api/employees/${_id}`, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } });
        console.log(response.data.message);
        return response.data
    } catch (e) {
        console.log(e.response.data.message);
    }
}

export const deleteСurrentEmployee = async (_id) => {
    try {
        const response = await axios.delete(`http://localhost:5000/api/currentEmployee/${_id}`, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } });
        console.log(response.data.message);
        return response.data
    } catch (e) {
        console.log(e.response.data.message);
    }
}

export const editEmployee = async (_id, name, login, pin, position) => {
    try {
        const response = await axios.put(`http://localhost:5000/api/employees/${_id}`, { name, login, pin, position }, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } });
        console.log(response.data.message);
        return response.data
    } catch (e) {
        console.log(e.response.data.message);
    }
}

export const loginCurrentEmployee = (pin) => {
    return async dispatch => {
        try {
            const response = await axios.post("http://localhost:5000/api/currentEmployee", { pin }, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } });

            dispatch(setCurrentEmployee(response.data));
            console.log(response.data);

        } catch (e) {
            console.log(e.response.data.message);
        }
    }
}

export const changeIsCurrentEmployee = () => {
    return async dispatch => {
        try {
            const response = await axios.put("http://localhost:5000/api/currentEmployee",
                { isCurrent: false }, // Дані, які потрібно надіслати на сервер
                { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
            );

            dispatch(setCurrentEmployee({}));
            console.log(response.data);

        } catch (e) {
            console.log(e.response);
        }
    }
}