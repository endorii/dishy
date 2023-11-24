import axios from "axios";

export const addContactText = async (content, from, date) => {
    try {
        const response = await axios.post("http://localhost:5000/api/contactTexts", {content, from, date}, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } });

        console.log(response.data.message);
    } catch (e) {
        console.log(e.response.data.message);
    }
}

export const getAllContactTexts = async () => {
    try {
        const response = await axios.get("http://localhost:5000/api/contactTexts", { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } });

        return response.data.contactText;


    } catch (e) {

        console.log(e.response.data.message);
    }
}

export const deleteContactText = async (_id) => {
    try {
        const response = await axios.delete(`http://localhost:5000/api/contactTexts/${_id}`, {}, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } });

        return response.data.contactText;

    } catch (e) {

        console.log(e.response.data.message);
    }
}