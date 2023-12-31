import axios from 'axios';
import { setUser } from "../../store/slices/userSlice";

export const registration = async (email, name, phone, company, password) => {
    try {
        const response = await axios.post("http://localhost:5000/api/auth/signup", {email, name, phone, company, password});
        
        console.log(response.data.message);

    } catch (e) {
        console.log(e.response.data.message);
    }   
}

export const login = (email, password) => {
    return async dispatch => {
        try {
            const response = await axios.post("http://localhost:5000/api/auth/login", {email, password});
            dispatch(setUser(response.data.user));
            localStorage.setItem('token', response.data.token);
            console.log(response.data.message);

        } catch (e) {
            console.log(e.response.data.message);
        }       
    }
}

export const auth = () => {
    return async dispatch => {
        try {
            const response = await axios.get("http://localhost:5000/api/auth/auth", {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}});
            dispatch(setUser(response.data.user));
            localStorage.setItem('token', response.data.token);
        } catch (e) {
            console.log(e.response.data.message);
            localStorage.removeItem('token');
        }       
    }
}
