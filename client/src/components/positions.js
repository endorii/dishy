import axios from "axios";

export const addPosition = async (name, permissions) => {
    try {
        const response = await axios.post("http://localhost:5000/api/positions", {name, permissions}, {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}});

        console.log(response.data.message);
    } catch (e) {
        console.log(e.response.data.message);
    }
};

export const getAllPositions = async () => {
    try {
        const response = await axios.get("http://localhost:5000/api/positions", {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}});

        return response.data.positions;
        

    } catch (e) {
        
        console.log(e.response.data.message);
    }
} 

export const deletePosition = async (_id) => {
    try {
        const response = await axios.delete(`http://localhost:5000/api/positions/${_id}`, {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}});
        console.log(response.data.message);
        return response.data
    } catch (e) {
        console.log(e.response.data.message);
    }
}

export const editPosition = async (_id, name, permissions) => {
    try {
        const response = await axios.put(`http://localhost:5000/api/positions/${_id}`, {name, permissions}, {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}});
        console.log(response.data.message);
        return response.data
    } catch (e) {
        console.log(e.response.data.message);
    }
}