import axios from "axios";

export const addMenuCategory = async (logo, category) => {
    try {
        const response = await axios.post("http://localhost:5000/api/menu", {logo, category}, {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}});

        console.log(response.data);
    } catch (e) {
        console.log(e.response.data.message);
    }
};

export const getMenuCategories = async () => {
    try {
        const response = await axios.get("http://localhost:5000/api/menu", {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}});

        return response.data;
        
    } catch (e) {
        
        console.log(e.response.data.message);
    }
};

// export const deleteMenu = async (_id) => {
//     try {
//         const response = await axios.delete(`http://localhost:5000/api/positions/${_id}`, {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}});
//         console.log(response.data.message);
//         return response.data
//     } catch (e) {
//         console.log(e.response.data.message);
//     }
// }

// export const editMenu = async (_id, name, permissions) => {
//     try {
//         const response = await axios.put(`http://localhost:5000/api/positions/${_id}`, {name, permissions}, {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}});
//         console.log(response.data.message);
//         return response.data
//     } catch (e) {
//         console.log(e.response.data.message);
//     }
// }