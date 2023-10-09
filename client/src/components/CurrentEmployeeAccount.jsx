import { useSelector } from "react-redux"
import { deleteСurrentEmployee } from "./employee"
import { setCurrentEmployee } from "../store/slices/currentEmployee.Slice"
import { useNavigate } from "react-router-dom"


export const CurrentEmployeeAccount = () => {

    const id = useSelector(state => state.currentEmployee.currentEmployee._id)
    const navigate = useNavigate();
    return (
        <>
            <h1>Account</h1>
            <button onClick={() => {deleteСurrentEmployee(id); setCurrentEmployee({}); navigate('/')}}>Logout</button>
        </>
    )
}