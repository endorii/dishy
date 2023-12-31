import axios from "axios";

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

export const getOnlineEmployees = async () => {
    try {
        const response = await axios.get("http://localhost:5000/api/onlineEmployee", { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } });

        return response.data.employees;

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

export const foundEmployee = async (pin, setEmployee) => {
    try {
        const response = await axios.post(`http://localhost:5000/api/employeeByPin`, { pin }, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } });
        setEmployee(response.data.employee)
        // return response.data.employee;
    } catch (e) {
        console.log(e.response.data.message);
    }
}

export const loginEmployee = async (pin) => {
    try {
        const response = await axios.post(`http://localhost:5000/api/loginEmployee`, { pin }, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } });
        return response.data.employee;
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