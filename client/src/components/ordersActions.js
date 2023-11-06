import axios from "axios";

export const addOrder = async (order) => {
    try {
        const response = await axios.post("http://localhost:5000/api/orders", order, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } });

        console.log(response.data.message);
    } catch (e) {
        console.log(e.response.data.message);
    }
};

export const getAllOrders = async () => {
    try {
        const response = await axios.get("http://localhost:5000/api/orders", { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } });

        return response.data.orders;


    } catch (e) {

        console.log(e.response.data.message);
    }
}