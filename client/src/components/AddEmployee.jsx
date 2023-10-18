import { useState, useEffect } from "react";
import { addEmployee } from "./employee";
import Plus from '../assets/icons/plus.svg';
import { useDispatch } from "react-redux";
import { fetchEmployees } from "../store/slices/employeesSlice";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { fetchPositions } from "../store/slices/positions.Slice";

const AddEmployee = ({ setOpen }) => {

    const [name, setName] = useState('');
    const [login, setLogin] = useState('');
    const [pin, setPin] = useState('');
    const [position, setPosition] = useState('Офіціант');

    const { positions } = useSelector(state => state.positions)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPositions());
    }, [])

    return (
        <div className='flex justify-center '>
            <div className='absolute bg-white shadow-xl w-1/2 h-auto z-10 rounded-md mt-16'>
                <div className='flex flex-col items-center mx-3 gap-3'>
                    <span className='top-2 right-2 absolute cursor-pointer'
                        onClick={() => setOpen(false)}>✖
                    </span>
                    <span className='text-center text-2xl mt-6 font-semibold'>Ведіть дані нового працівника</span>
                    <ul className='flex flex-col justify-center m-10 w-[35%] gap-3'>
                        <li>
                            <label htmlFor="first_name" className="block text-sm font-medium text-gray-900 mb-1 ">Ім'я</label>
                            <input value={name} onChange={(e) => setName(e.target.value)} type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
                        </li>
                        <li>
                            <label htmlFor="first_name" className="block text-sm font-medium text-gray-900 mb-1 ">Логін</label>
                            <input value={login} onChange={(e) => setLogin(e.target.value)} type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
                        </li>
                        <li>
                            <label htmlFor="first_name" className="block text-sm font-medium text-gray-900 mb-1 ">ПІН-код</label>
                            <input value={pin} onChange={(e) => setPin(e.target.value)} type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
                        </li>
                        <li>
                            <label htmlFor="first_name" className="block text-sm font-medium text-gray-900 mb-1 ">Посада</label>
                            <select id='positions' value={position} onChange={(e) => setPosition(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required >
                                {positions.map((position, i) => {
                                    return <option key={i} value={position.name}>{position.name}</option>
                                })}
                            </select>
                        </li>
                    </ul>

                    <button className="flex items-center bg-green-500 hover:bg-green-600 rounded-lg mb-7 mx-[30%] px-7 py-2 text-white font-medium drop-shadow-md"
                        onClick={async () => {
                            setOpen(false);
                            await addEmployee(name, login, pin, position);
                            dispatch(fetchEmployees());
                        }}

                    >Підтвердити
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AddEmployee;