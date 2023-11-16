import axios from "axios";

export const addMenuItem = async (dishName, dishPrice, dishTime, dishAmount, dishWeight, dishCategory, dishIngredients, dishLogo) => {
    try {
        const response = await axios.post("http://localhost:5000/api/menuItems", {dishName, dishPrice, dishTime, dishAmount, dishWeight, dishCategory, dishIngredients, dishLogo}, {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}});

        console.log(response.data);
    } catch (e) {
        console.log(e.response.data.message);
    }
};

export const getMenuItems = async () => {
    try {
        const response = await axios.get("http://localhost:5000/api/menuItems", {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}});

        return response.data.menuItems;
        
    } catch (e) {
        
        console.log(e.response.data.message);
    }
};