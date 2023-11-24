import axios from "axios";

export const addNeed = async (content, from, date) => {
    try {
        const response = await axios.post("http://localhost:5000/api/needs", {content, from, date}, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } });

        console.log(response.data.message);
    } catch (e) {
        console.log(e.response.data.message);
    }
}

export const getAllNeeds = async () => {
    try {
        const response = await axios.get("http://localhost:5000/api/needs", { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } });

        return response.data.needs;


    } catch (e) {

        console.log(e.response.data.message);
    }
}

export const deleteNeed = async (_id) => {
    try {
        const response = await axios.delete(`http://localhost:5000/api/needs/${_id}`, {}, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } });

        return response.data.needs;

    } catch (e) {

        console.log(e.response.data.message);
    }
}