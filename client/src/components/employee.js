import axios from "axios";

export const addEmployee = async (name, login, pin, position) => {
    try {
        const response = await axios.post("http://localhost:5000/employees", {name, login, pin, position});

        console.log(response.data.message);
    } catch (e) {
        console.log(e.response.data.message);
    }
} 